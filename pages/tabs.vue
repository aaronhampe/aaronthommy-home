<script setup lang="ts">
// Guitar Tab Generator Page
// This page provides an interactive interface to build guitar tablatures.
// Users can select notes on a fretboard, organise them into columns (time steps),
// preview the resulting ASCII tab and export it as a PDF.  

import { ref, computed, onMounted } from 'vue'
// jsPDF is used to generate the PDF download.  
// We'll import it dynamically on the client to avoid SSR errors.

/*
 * Instrument configurations
 */
interface InstrumentConfig {
  name: string
  emoji: string
  stringNames: string[]
  stringColors: string[]
  openFrequencies: number[]
  numFrets: number
}

const instruments: Record<string, InstrumentConfig> = {
  acoustic: {
    name: 'Akustikgitarre',
    emoji: '🎸',
    stringNames: ['e', 'B', 'G', 'D', 'A', 'E'],
    stringColors: [
      'border-yellow-400',
      'border-orange-400', 
      'border-red-400',
      'border-purple-400',
      'border-blue-400',
      'border-gray-400'
    ],
    openFrequencies: [329.63, 246.94, 196.00, 146.83, 110.00, 82.41],
    numFrets: 12
  },
  electric: {
    name: 'E-Gitarre',
    emoji: '🎸',
    stringNames: ['e', 'B', 'G', 'D', 'A', 'E'],
    stringColors: [
      'border-yellow-400',
      'border-orange-400',
      'border-red-400', 
      'border-purple-400',
      'border-blue-400',
      'border-gray-400'
    ],
    openFrequencies: [329.63, 246.94, 196.00, 146.83, 110.00, 82.41],
    numFrets: 22
  },
  ukulele: {
    name: 'Ukulele',
    emoji: '🪕',
    stringNames: ['A', 'E', 'C', 'G'],
    stringColors: [
      'border-yellow-400',
      'border-orange-400',
      'border-red-400',
      'border-purple-400'
    ],
    openFrequencies: [440.00, 329.63, 261.63, 392.00], // A4, E4, C4, G4
    numFrets: 15
  }
}

/*
 * Current instrument selection
 */
const currentInstrument = ref<string>('acoustic')

/*
 * Computed values based on current instrument
 */
const instrumentConfig = computed(() => instruments[currentInstrument.value] ?? instruments.acoustic)
const numFrets = computed(() => (instrumentConfig.value?.numFrets ?? 12))
const stringNames = computed(() => instrumentConfig.value?.stringNames ?? ['e', 'B', 'G', 'D', 'A', 'E'])
const stringColors = computed(() => instrumentConfig.value?.stringColors ?? (instruments.acoustic?.stringColors ?? ['border-yellow-400','border-orange-400','border-red-400','border-purple-400','border-blue-400','border-gray-400']))
const openStringFrequencies = computed(() => instrumentConfig.value?.openFrequencies ?? [329.63, 246.94, 196.00, 146.83, 110.00, 82.41])

/*
 * Function to reset columns when instrument changes
 */
function resetColumnsForInstrument() {
  columns.value = [{ notes: Array(stringNames.value.length).fill(null) }]
  currentColumnIndex.value = 0
  visibleStartIndex.value = 0
}

/*
 * Sound system for guitar fret playback
 * Using Web Audio API to generate guitar-like tones
 */

// Audio context for sound generation
let audioContext: AudioContext | null = null

// Initialize audio context (must be done after user interaction)
function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  return audioContext
}

// Calculate frequency for a specific fret on a string
function getFretFrequency(stringIndex: number, fret: number): number {
  const baseFreq = openStringFrequencies.value[stringIndex]
  if (!baseFreq) return 440 // Fallback to A4
  // Each fret is a semitone higher (multiply by 2^(1/12))
  return baseFreq * Math.pow(2, fret / 12)
}

// Play a guitar note with realistic timbre
async function playGuitarNote(stringIndex: number, fret: number) {
  try {
    const ctx = initAudio()
    if (!ctx) return

    // Resume context if suspended (required by many browsers)
    if (ctx.state === 'suspended') {
      await ctx.resume()
    }

    const frequency = getFretFrequency(stringIndex, fret)
    const now = ctx.currentTime
    const duration = 1.2 // Note duration in seconds

    // Create oscillators for harmonics (guitar-like timbre)
    const fundamental = ctx.createOscillator()
    const harmonic2 = ctx.createOscillator()
    const harmonic3 = ctx.createOscillator()

    // Create gain nodes for each harmonic
    const fundGain = ctx.createGain()
    const harm2Gain = ctx.createGain()
    const harm3Gain = ctx.createGain()
    const masterGain = ctx.createGain()

    // Set frequencies (fundamental + harmonics)
    fundamental.frequency.setValueAtTime(frequency, now)
    harmonic2.frequency.setValueAtTime(frequency * 2, now)
    harmonic3.frequency.setValueAtTime(frequency * 3, now)

    // Set oscillator types for guitar-like sound
    fundamental.type = 'sawtooth'
    harmonic2.type = 'sine'
    harmonic3.type = 'triangle'

    // Set gain levels for realistic guitar timbre
    fundGain.gain.setValueAtTime(0.4, now)
    harm2Gain.gain.setValueAtTime(0.2, now)
    harm3Gain.gain.setValueAtTime(0.1, now)

    // Create realistic attack-decay-sustain-release envelope
    masterGain.gain.setValueAtTime(0, now)
    masterGain.gain.linearRampToValueAtTime(0.3, now + 0.01) // Quick attack
    masterGain.gain.exponentialRampToValueAtTime(0.2, now + 0.1) // Decay
    masterGain.gain.linearRampToValueAtTime(0.15, now + 0.6) // Sustain
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration) // Release

    // Connect the audio graph
    fundamental.connect(fundGain)
    harmonic2.connect(harm2Gain)
    harmonic3.connect(harm3Gain)

    fundGain.connect(masterGain)
    harm2Gain.connect(masterGain)
    harm3Gain.connect(masterGain)
    masterGain.connect(ctx.destination)

    // Start and stop the oscillators
    fundamental.start(now)
    harmonic2.start(now)
    harmonic3.start(now)

    fundamental.stop(now + duration)
    harmonic2.stop(now + duration)
    harmonic3.stop(now + duration)

  } catch (error) {
    console.warn('Audio playback failed:', error)
  }
}

// Sound enabled/disabled toggle
const soundEnabled = ref(true)

/*
 * Song metadata for enhanced PDF output
 */
const songMetadata = ref({
  title: 'Untitled Song',
  artist: '',
  album: '',
  bpm: 120,
  timeSignature: '4/4',
  key: 'C Major',
  capo: 0,
  tuning: 'Standard (EADGBE)',
  difficulty: 'Beginner',
  genre: '',
  notes: ''
})

/*
 * An individual column in the tab (one time position).  
 * Each column holds an array of six notes (one per string).  
 * A value of `null` means that string is not played in that column.  
 */
interface TabColumn {
  notes: (number | null)[]
}

/*
 * Reactive list of columns.  
 * Initialise with one empty column.  
 */
const columns = ref<TabColumn[]>([
  { notes: Array(stringNames.value.length).fill(null) }
])

/*
 * Index of the currently selected column.  
 * When the user clicks on a column header in the tab grid, this value changes.  
 */
const currentColumnIndex = ref(0)
const showMobileFretboard = ref(false)

/*
 * Number of columns to show in the viewport (responsive)
 */
const maxVisibleColumns = ref(8)

/*
 * Starting index for visible columns (for horizontal pagination)
 */
const visibleStartIndex = ref(0)

/*
 * Show/hide metadata panel
 */
const showMetadataPanel = ref(false)

/*
 * Show/hide save/load panel
 */
const showSaveLoadPanel = ref(false)

/*
 * A safe reference to the currently selected column.
 * Falls back to an empty column shape to satisfy type checks in template bindings.
 */
const currentColumn = computed<TabColumn>(() => {
  const idx = currentColumnIndex.value
  const col = columns.value[idx]
  return col ?? { notes: Array(stringNames.value.length).fill(null) }
})

/*
 * Computed array of visible columns for the current viewport
 */
const visibleColumns = computed(() => {
  const start = visibleStartIndex.value
  const end = Math.min(start + maxVisibleColumns.value, columns.value.length)
  return columns.value.slice(start, end).map((col, index) => ({
    ...col,
    originalIndex: start + index
  }))
})

/*
 * Check if we can scroll left (show earlier columns)
 */
const canScrollLeft = computed(() => visibleStartIndex.value > 0)

/*
 * Check if we can scroll right (show later columns)
 */
const canScrollRight = computed(() => 
  visibleStartIndex.value + maxVisibleColumns.value < columns.value.length
)

/*
 * Select the current column for editing and ensure it's visible.
 */
function selectColumn(index: number) {
  currentColumnIndex.value = index
  ensureColumnVisible(index)
}

/*
 * Ensure a specific column is visible in the viewport
 */
function ensureColumnVisible(index: number) {
  if (index < visibleStartIndex.value) {
    visibleStartIndex.value = index
  } else if (index >= visibleStartIndex.value + maxVisibleColumns.value) {
    visibleStartIndex.value = Math.max(0, index - maxVisibleColumns.value + 1)
  }
}

/*
 * Scroll left to show earlier columns
 */
function scrollLeft() {
  if (canScrollLeft.value) {
    visibleStartIndex.value = Math.max(0, visibleStartIndex.value - 1)
  }
}

/*
 * Scroll right to show later columns
 */
function scrollRight() {
  if (canScrollRight.value) {
    visibleStartIndex.value = Math.min(
      columns.value.length - maxVisibleColumns.value, 
      visibleStartIndex.value + 1
    )
  }
}

/*
 * Toggle a note on the fretboard for the currently selected column.  
 * If the cell already contains the selected fret, it removes it.  
 * Otherwise it sets the fret number and plays the sound.
 */
function toggleNote(stringIndex: number, fret: number) {
  const idx = currentColumnIndex.value
  const column = columns.value[idx]
  if (!column) return
  const current = column.notes[stringIndex] ?? null
  const newValue = current === fret ? null : fret
  column.notes[stringIndex] = newValue
  
  // Play sound when adding a note (not when removing)
  if (newValue !== null && soundEnabled.value) {
    playGuitarNote(stringIndex, fret)
  }
}

/*
 * Clear note for specific string in current column
 */
function clearNote(stringIndex: number) {
  const idx = currentColumnIndex.value
  const column = columns.value[idx]
  if (!column) return
  column.notes[stringIndex] = null
}

/*
 * Play sound for an existing note in the tab (when clicking tab preview)
 */
function playNoteFromTab(stringIndex: number, columnIndex: number) {
  const column = columns.value[columnIndex]
  if (!column || !soundEnabled.value) return
  
  const fret = column.notes[stringIndex]
  if (fret !== null && fret !== undefined) {
    playGuitarNote(stringIndex, fret)
  }
}

/*
 * Play all notes in the current column as a chord
 */
function playCurrentChord() {
  if (!soundEnabled.value) return
  
  const column = columns.value[currentColumnIndex.value]
  if (!column) return
  
  // Play notes with slight delay to create a natural chord strumming effect
  column.notes.forEach((fret, stringIndex) => {
    if (fret !== null && fret !== undefined) {
      setTimeout(() => {
        playGuitarNote(stringIndex, fret)
      }, stringIndex * 50) // 50ms delay between strings
    }
  })
}

/*
 * Play the entire tab sequence
 */
const isPlaying = ref(false)

async function playEntireTab() {
  if (!soundEnabled.value || isPlaying.value) return
  
  isPlaying.value = true
  
  // Calculate playback speed based on BPM (default 120 if not set)
  const bpm = songMetadata.value.bpm || 120
  const playbackSpeed = 60000 / bpm // Convert BPM to milliseconds per beat
  
  try {
    for (let columnIndex = 0; columnIndex < columns.value.length; columnIndex++) {
      if (!isPlaying.value) break // Allow stopping playback
      
      // Highlight current column during playback
      currentColumnIndex.value = columnIndex
      ensureColumnVisible(columnIndex)
      
      const column = columns.value[columnIndex]
      if (column) {
        // Play all notes in this column simultaneously
        column.notes.forEach((fret, stringIndex) => {
          if (fret !== null && fret !== undefined) {
            playGuitarNote(stringIndex, fret)
          }
        })
      }
      
      // Wait before next column based on BPM
      if (columnIndex < columns.value.length - 1) {
        await new Promise(resolve => setTimeout(resolve, playbackSpeed))
      }
    }
  } finally {
    isPlaying.value = false
  }
}

function stopPlayback() {
  isPlaying.value = false
}

/*
 * Add a new empty column to the tab and make it the current one.  
 */
function addColumn() {
  columns.value.push({ notes: Array(stringNames.value.length).fill(null) })
  const newIndex = columns.value.length - 1
  currentColumnIndex.value = newIndex
  ensureColumnVisible(newIndex)
}

/*
 * Remove a column from the tab.  
 * If no index is passed, remove the currently selected column.  
 */
function removeColumn(index?: number) {
  if (columns.value.length <= 1) return
  const removeIndex = index ?? currentColumnIndex.value
  columns.value.splice(removeIndex, 1)
  
  // Adjust the current column index if necessary
  if (currentColumnIndex.value >= columns.value.length) {
    currentColumnIndex.value = columns.value.length - 1
  }
  
  // Adjust visible window if needed
  if (visibleStartIndex.value >= columns.value.length - maxVisibleColumns.value) {
    visibleStartIndex.value = Math.max(0, columns.value.length - maxVisibleColumns.value)
  }
  
  ensureColumnVisible(currentColumnIndex.value)
}

/*
 * Generate an array of strings representing the ASCII tab.  
 * Each string corresponds to one guitar string.  
 */
function generateAscii(): string[] {
  const lines: string[] = []
  for (let s = 0; s < stringNames.value.length; s++) {
    let line = `${stringNames.value[s]}|`
    for (let c = 0; c < columns.value.length; c++) {
  const col = columns.value[c]
  const fret = col ? col.notes[s] : null
      line += fret === null ? '-' : String(fret)
      // Add a hyphen as a separator between columns except after the last one
      if (c < columns.value.length - 1) line += '-'
    }
    lines.push(line)
  }
  return lines
}

/*
 * Create and download a professional PDF with proper lines and metadata
 */
async function downloadPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  
  // PDF page dimensions and margins
  const pageWidth = doc.internal.pageSize.width
  const pageHeight = doc.internal.pageSize.height
  const leftMargin = 25
  const rightMargin = 25
  const availableWidth = pageWidth - leftMargin - rightMargin
  
  let yPosition = 25
  
  // Header with professional styling
  doc.setDrawColor(0, 0, 0)
  doc.setLineWidth(2)
  doc.line(leftMargin, 15, pageWidth - rightMargin, 15)
  
  // Title
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text(songMetadata.value.title || 'Untitled Song', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 12
  
  // Artist
  if (songMetadata.value.artist) {
    doc.setFontSize(14)
    doc.setFont('helvetica', 'italic')
    doc.text(`by ${songMetadata.value.artist}`, pageWidth / 2, yPosition, { align: 'center' })
    yPosition += 10
  }
  
  // Professional metadata box
  doc.setDrawColor(120, 120, 120)
  doc.setLineWidth(1)
  const metadataBoxHeight = 25
  doc.rect(leftMargin, yPosition, availableWidth, metadataBoxHeight)
  
  // Fill metadata box with light gray
  doc.setFillColor(248, 248, 248)
  doc.rect(leftMargin, yPosition, availableWidth, metadataBoxHeight, 'F')
  
  // Metadata content in columns
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  
  const metadataY = yPosition + 8
  const col1X = leftMargin + 10
  const col2X = leftMargin + (availableWidth / 3)
  const col3X = leftMargin + (2 * availableWidth / 3)
  
  // Column 1: Tempo and Time Signature
  if (songMetadata.value.bpm) {
    doc.text('Tempo:', col1X, metadataY)
    doc.setFont('helvetica', 'normal')
    doc.text(`♩ = ${songMetadata.value.bpm} BPM`, col1X + 25, metadataY)
    doc.setFont('helvetica', 'bold')
  }
  if (songMetadata.value.timeSignature) {
    doc.text('Time:', col1X, metadataY + 8)
    doc.setFont('helvetica', 'normal')
    doc.text(songMetadata.value.timeSignature, col1X + 25, metadataY + 8)
  }
  
  // Column 2: Key and Capo
  doc.setFont('helvetica', 'bold')
  if (songMetadata.value.key) {
    doc.text('Key:', col2X, metadataY)
    doc.setFont('helvetica', 'normal')
    doc.text(songMetadata.value.key, col2X + 15, metadataY)
    doc.setFont('helvetica', 'bold')
  }
  if (songMetadata.value.capo > 0) {
    doc.text('Capo:', col2X, metadataY + 8)
    doc.setFont('helvetica', 'normal')
    doc.text(`${songMetadata.value.capo}. Bund`, col2X + 20, metadataY + 8)
  }
  
  // Column 3: Instrument and Tuning
  doc.setFont('helvetica', 'bold')
  doc.text('Instrument:', col3X, metadataY)
  doc.setFont('helvetica', 'normal')
  doc.text(instrumentConfig.value?.name || currentInstrument.value, col3X + 30, metadataY)
  
  if (songMetadata.value.tuning && songMetadata.value.tuning !== 'Standard') {
    doc.setFont('helvetica', 'bold')
    doc.text('Tuning:', col3X, metadataY + 8)
    doc.setFont('helvetica', 'normal')
    doc.text(songMetadata.value.tuning, col3X + 25, metadataY + 8)
  }
  
  yPosition += metadataBoxHeight + 15
  
  // Professional tablature formatting
  const stringSpacing = 12
  const columnWidth = 18
  const stringLabelWidth = 25
  const tabLineHeight = (stringNames.value.length - 1) * stringSpacing
  
  // Calculate columns per line for better spacing
  const availableTabWidth = availableWidth - stringLabelWidth
  const columnsPerLine = Math.floor(availableTabWidth / columnWidth)
  
  const totalColumns = columns.value.length
  const numberOfLines = Math.ceil(totalColumns / columnsPerLine)
  
  for (let lineIndex = 0; lineIndex < numberOfLines; lineIndex++) {
    const startCol = lineIndex * columnsPerLine
    const endCol = Math.min(startCol + columnsPerLine, totalColumns)
    const currentLineColumns = endCol - startCol
    
    // Check for page break
    if (yPosition + tabLineHeight + 40 > pageHeight - 40) {
      doc.addPage()
      yPosition = 40
    }
    
    // System number for multi-line tabs
    if (numberOfLines > 1) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      doc.text(`${lineIndex + 1}.`, leftMargin - 5, yPosition + (tabLineHeight / 2))
    }
    
    // Draw tablature staff
    for (let stringIndex = 0; stringIndex < stringNames.value.length; stringIndex++) {
      const stringY = yPosition + (stringIndex * stringSpacing)
      
      // String name/tuning labels with professional styling
      doc.setFont('courier', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text(stringNames.value[stringIndex] || 'E', leftMargin + 3, stringY + 3)
      
      // Draw tablature lines with proper thickness
      doc.setLineWidth(0.8)
      doc.setDrawColor(0, 0, 0)
      const lineStartX = leftMargin + stringLabelWidth
      const lineEndX = lineStartX + (currentLineColumns * columnWidth)
      doc.line(lineStartX, stringY, lineEndX, stringY)
      
      // Add fret numbers with enhanced styling
      doc.setFont('courier', 'bold')
      doc.setFontSize(10)
      
      for (let colIndex = startCol; colIndex < endCol; colIndex++) {
        const col = columns.value[colIndex]
        const fret = col ? col.notes[stringIndex] : null
        const relativeColIndex = colIndex - startCol
        const xPos = lineStartX + (relativeColIndex * columnWidth) + (columnWidth / 2)
        
        if (fret !== null) {
          const fretStr = String(fret)
          
          // Professional fret number styling
          if (fretStr === '0') {
            // Open string - use circle
            doc.setFillColor(255, 255, 255)
            doc.setDrawColor(0, 0, 0)
            doc.setLineWidth(1.2)
            doc.circle(xPos, stringY, 4.5, 'D')
            doc.setTextColor(0, 0, 0)
            doc.text('0', xPos, stringY + 2.8, { align: 'center' })
          } else {
            // Regular fret numbers - clean and clear
            doc.setTextColor(0, 0, 0)
            if (fretStr.length > 1) {
              // Two-digit fret numbers
              doc.setFontSize(8)
              doc.text(fretStr, xPos, stringY + 2.5, { align: 'center' })
              doc.setFontSize(10)
            } else {
              // Single-digit fret numbers
              doc.text(fretStr, xPos, stringY + 3, { align: 'center' })
            }
          }
        }
      }
    }
    
    // Professional barline system
    doc.setLineWidth(1.5)
    doc.setDrawColor(0, 0, 0)
    const lineStartX = leftMargin + stringLabelWidth
    
    // Start and end barlines
    doc.line(lineStartX, yPosition - 2, lineStartX, yPosition + tabLineHeight + 2)
    doc.line(lineStartX + (currentLineColumns * columnWidth), yPosition - 2, 
             lineStartX + (currentLineColumns * columnWidth), yPosition + tabLineHeight + 2)
    
    // Measure lines every 4 beats
    doc.setLineWidth(0.8)
    doc.setDrawColor(80, 80, 80)
    for (let i = 4; i < currentLineColumns; i += 4) {
      const xPos = lineStartX + (i * columnWidth)
      doc.line(xPos, yPosition - 1, xPos, yPosition + tabLineHeight + 1)
    }
    
    // Beat subdivision lines (lighter)
    doc.setLineWidth(0.3)
    doc.setDrawColor(150, 150, 150)
    for (let i = 1; i < currentLineColumns; i++) {
      if (i % 4 !== 0) {
        const xPos = lineStartX + (i * columnWidth)
        doc.line(xPos, yPosition, xPos, yPosition + tabLineHeight)
      }
    }
    
    yPosition += tabLineHeight + 30
  }
  
  // Professional notes section
  if (songMetadata.value.notes && songMetadata.value.notes.trim()) {
    if (yPosition + 50 > pageHeight - 40) {
      doc.addPage()
      yPosition = 40
    }
    
    // Notes header with line
    yPosition += 15
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('Performance Notes', leftMargin, yPosition)
    doc.setLineWidth(1)
    doc.setDrawColor(0, 0, 0)
    doc.line(leftMargin, yPosition + 3, pageWidth - rightMargin, yPosition + 3)
    yPosition += 12
    
    // Notes content
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const splitText = doc.splitTextToSize(songMetadata.value.notes, availableWidth)
    doc.text(splitText, leftMargin, yPosition)
  }
  
  // Professional footer on all pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    
    // Footer line
    doc.setLineWidth(1)
    doc.setDrawColor(120, 120, 120)
    doc.line(leftMargin, pageHeight - 25, pageWidth - rightMargin, pageHeight - 25)
    
    // Footer text
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    const createdText = `Created with aaronthommy's Guitar Tab Generator • ${new Date().toLocaleDateString('de-DE')}`
    const pageText = pageCount > 1 ? `Page ${i} of ${pageCount}` : ''
    
    doc.text(createdText, leftMargin, pageHeight - 15)
    if (pageText) {
      doc.text(pageText, pageWidth - rightMargin, pageHeight - 15, { align: 'right' })
    }
  }
  
  // Save with professional filename
  const filename = (songMetadata.value.title || 'untitled')
    .replace(/[^a-zA-Z0-9äöüÄÖÜß\s-]/g, '')
    .replace(/\s+/g, '_')
    .toLowerCase() + '_guitar_tab.pdf'
  
  doc.save(filename)
}

/*
 * Save current tab to localStorage
 */
function saveTab() {
  const tabData = {
    metadata: songMetadata.value,
    columns: columns.value,
    savedAt: new Date().toISOString()
  }
  
  const savedTabs = JSON.parse(localStorage.getItem('guitarTabs') || '[]')
  const existingIndex = savedTabs.findIndex((tab: any) => tab.metadata.title === songMetadata.value.title)
  
  if (existingIndex >= 0) {
    savedTabs[existingIndex] = tabData
  } else {
    savedTabs.push(tabData)
  }
  
  localStorage.setItem('guitarTabs', JSON.stringify(savedTabs))
  alert('Tab gespeichert!')
}

/*
 * Load saved tabs from localStorage
 */
const savedTabs = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('guitarTabs') || '[]')
  } catch {
    return []
  }
})

/*
 * Load a specific tab
 */
function loadTab(tabData: any) {
  songMetadata.value = { ...tabData.metadata }
  columns.value = [...tabData.columns]
  currentColumnIndex.value = 0
  visibleStartIndex.value = 0
  showSaveLoadPanel.value = false
  alert('Tab geladen!')
}

/*
 * Delete a saved tab
 */
function deleteTab(title: string) {
  if (!confirm(`Tab "${title}" wirklich löschen?`)) return
  
  const savedTabsList = JSON.parse(localStorage.getItem('guitarTabs') || '[]')
  const filtered = savedTabsList.filter((tab: any) => tab.metadata.title !== title)
  localStorage.setItem('guitarTabs', JSON.stringify(filtered))
}

/*
 * Clear all notes from the current column
 */
function clearCurrentColumn() {
  const column = columns.value[currentColumnIndex.value]
  if (column) {
    column.notes = Array(stringNames.value.length).fill(null)
  }
}

/*
 * Duplicate current column
 */
function duplicateColumn() {
  const currentCol = columns.value[currentColumnIndex.value]
  if (currentCol) {
    const duplicatedCol = { notes: [...currentCol.notes] }
    columns.value.splice(currentColumnIndex.value + 1, 0, duplicatedCol)
    selectColumn(currentColumnIndex.value + 1)
  }
}

/*
 * Clear all columns
 */
function clearAllColumns() {
  if (confirm('Alle Spalten leeren? Diese Aktion kann nicht rückgängig gemacht werden.')) {
    columns.value = [{ notes: Array(stringNames.value.length).fill(null) }]
    currentColumnIndex.value = 0
    visibleStartIndex.value = 0
  }
}

/*
 * Check if current column has any notes
 */
const currentColumnHasNotes = computed(() => {
  return currentColumn.value.notes.some(note => note !== null)
})

/*
 * Navigation methods for mobile fretboard
 */
function goToPreviousColumn() {
  if (currentColumnIndex.value > 0) {
    selectColumn(currentColumnIndex.value - 1)
  }
}

function goToNextColumn() {
  if (currentColumnIndex.value < columns.value.length - 1) {
    selectColumn(currentColumnIndex.value + 1)
  }
}

// Add reactive variable for selected mobile string
const selectedMobileString = ref(0)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 mt-20">
    <div class="container mx-auto py-8 px-4">
      <!-- Page Heading - Mobile Optimized -->
      <div class="text-center mb-6 md:mb-8">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
          {{ instrumentConfig?.emoji }} {{ instrumentConfig?.name }} <span class="hidden sm:inline">Tab Generator</span><span class="sm:hidden">Tabs</span>
        </h1>
        <p class="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4 md:mb-6 px-2">
          <span class="hidden sm:inline">Erstelle professionelle {{ instrumentConfig?.name }}-Tabulaturen mit unserem interaktiven Generator. 
          Wähle Bünde am Instrumenthals und exportiere deine Tabs als PDF.</span>
          <span class="sm:hidden">Erstelle {{ instrumentConfig?.name }}-Tabs. Wähle Bünde und exportiere als PDF.</span>
        </p>
        
        <!-- Instrument Selection - Mobile Optimized -->
        <div class="flex flex-wrap justify-center gap-2 md:gap-3 mb-3 md:mb-4 px-2">
          <button
            v-for="(instrument, key) in instruments"
            :key="key"
            @click="currentInstrument = key; resetColumnsForInstrument()"
            :class="[
              'px-3 py-2 md:px-4 md:py-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-1 md:gap-2',
              currentInstrument === key
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            ]"
          >
            <span class="text-base md:text-lg">{{ instrument.emoji }}</span>
            <span class="hidden sm:inline">{{ instrument.name }}</span>
            <span class="sm:hidden text-xs">{{ instrument.name.split(' ')[0] }}</span>
          </button>
        </div>
      </div>

      <!-- Song Metadata Panel -->
      <div v-if="showMetadataPanel" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mb-6">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            🎵 Song-Informationen
          </h2>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Titel *</label>
            <input v-model="songMetadata.title" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Künstler</label>
            <input v-model="songMetadata.artist" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Album</label>
            <input v-model="songMetadata.album" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">BPM</label>
            <input v-model.number="songMetadata.bpm" type="number" min="40" max="300" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Taktart</label>
            <select v-model="songMetadata.timeSignature" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>4/4</option>
              <option>3/4</option>
              <option>2/4</option>
              <option>6/8</option>
              <option>12/8</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tonart</label>
            <select v-model="songMetadata.key" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>C Major</option>
              <option>G Major</option>
              <option>D Major</option>
              <option>A Major</option>
              <option>E Major</option>
              <option>B Major</option>
              <option>F# Major</option>
              <option>F Major</option>
              <option>Bb Major</option>
              <option>Eb Major</option>
              <option>Ab Major</option>
              <option>Db Major</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Kapodaster</label>
            <select v-model.number="songMetadata.capo" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option :value="0">Kein Kapo</option>
              <option v-for="n in 12" :key="n" :value="n">{{ n }}. Bund</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Schwierigkeit</label>
            <select v-model="songMetadata.difficulty" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Genre</label>
            <input v-model="songMetadata.genre" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div class="md:col-span-2 lg:col-span-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Notizen</label>
            <textarea v-model="songMetadata.notes" rows="3" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" placeholder="Zusätzliche Informationen, Spieltechniken, etc."></textarea>
          </div>
        </div>
      </div>

      <!-- Save/Load Panel -->
      <div v-if="showSaveLoadPanel" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mb-6">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            💾 Speichern & Laden
          </h2>
        </div>
        <div class="p-6">
          <div class="flex gap-4 mb-6">
            <button @click="saveTab" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              💾 Aktuellen Tab speichern
            </button>
          </div>
          
          <div v-if="savedTabs.length > 0">
            <h3 class="font-semibold mb-3 text-gray-800 dark:text-gray-200">Gespeicherte Tabs:</h3>
            <div class="grid gap-3">
              <div v-for="tab in savedTabs" :key="tab.metadata.title" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h4 class="font-semibold text-gray-800 dark:text-gray-200">{{ tab.metadata.title }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ tab.metadata.artist || 'Unbekannter Künstler' }} • {{ tab.columns.length }} Spalten
                    <br />
                    <span class="text-xs">Gespeichert: {{ new Date(tab.savedAt).toLocaleString() }}</span>
                  </p>
                </div>
                <div class="flex gap-2">
                  <button @click="loadTab(tab)" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Laden
                  </button>
                  <button @click="deleteTab(tab.metadata.title)" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Löschen
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-500 dark:text-gray-400 py-8">
            Keine gespeicherten Tabs gefunden.
          </div>
        </div>
      </div>

      <!-- Current Column Info Card -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            <span class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {{ songMetadata.title }} • Spalte: {{ currentColumnIndex + 1 }} / {{ columns.length }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              ({{ currentColumnHasNotes ? 'mit Noten' : 'leer' }})
            </span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <!-- Toggle panels -->
            <button
              @click="soundEnabled = !soundEnabled"
              :class="[
                'px-3 py-1 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1',
                soundEnabled 
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              ]"
              title="Sound ein/ausschalten"
            >
              {{ soundEnabled ? '🔊' : '🔇' }} Sound
            </button>
            <button
              @click="showMetadataPanel = !showMetadataPanel"
              :class="[
                'px-3 py-1 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1',
                showMetadataPanel 
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              ]"
            >
              🎵 Info {{ showMetadataPanel ? '▼' : '▶' }}
            </button>
            <button
              @click="showSaveLoadPanel = !showSaveLoadPanel"
              :class="[
                'px-3 py-1 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1',
                showSaveLoadPanel 
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              ]"
            >
              💾 Speichern {{ showSaveLoadPanel ? '▼' : '▶' }}
            </button>
            
            <!-- Column navigation buttons -->
            <button
              @click="selectColumn(Math.max(0, currentColumnIndex - 1))"
              :disabled="currentColumnIndex === 0"
              :class="[
                'px-3 py-1 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1',
                currentColumnIndex === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              ]"
              title="Vorherige Spalte"
            >
              ← Zurück
            </button>
            <button
              @click="selectColumn(Math.min(columns.length - 1, currentColumnIndex + 1))"
              :disabled="currentColumnIndex === columns.length - 1"
              :class="[
                'px-3 py-1 text-sm rounded-lg transition-colors duration-200 flex items-center gap-1',
                currentColumnIndex === columns.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              ]"
              title="Nächste Spalte"
            >
              Vor →
            </button>
            <button
              v-if="currentColumnHasNotes"
              @click="playCurrentChord"
              class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
              title="Alle Noten dieser Spalte als Akkord abspielen"
            >
              🎸 Akkord
            </button>
            <button
              v-if="currentColumnHasNotes"
              @click="clearCurrentColumn"
              class="px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
            >
              🗑️ Leeren
            </button>
            <button
              @click="duplicateColumn"
              class="px-3 py-1 text-sm bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
              title="Spalte duplizieren"
            >
              📋 Duplizieren
            </button>
            <button
              @click="addColumn"
              class="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
            >
              ➕ Neue Spalte
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Grid (Preview & Column selection) - Mobile Optimized -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
        <!-- Header - Responsive -->
        <div class="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              📺 <span class="hidden sm:inline">Tabulatur-Vorschau</span><span class="sm:hidden">Tabs</span>
              <span class="hidden md:inline text-sm font-normal text-gray-500 dark:text-gray-400">
                (Klicke zum Bearbeiten & Abspielen)
              </span>
            </h2>
            
            <!-- Mobile: Compact column info and navigation -->
            <div class="flex items-center justify-between md:justify-end gap-3">
              <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {{ visibleStartIndex + 1 }}-{{ Math.min(visibleStartIndex + maxVisibleColumns, columns.length) }} / {{ columns.length }}
              </span>
              
              <!-- Navigation buttons -->
              <div class="flex gap-1">
                <button
                  @click="scrollLeft"
                  :disabled="!canScrollLeft"
                  :class="[
                    'p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base',
                    canScrollLeft 
                      ? 'bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-300' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-500'
                  ]"
                  title="Vorherige Spalten"
                >
                  ←
                </button>
                <button
                  @click="scrollRight"
                  :disabled="!canScrollRight"
                  :class="[
                    'p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base',
                    canScrollRight 
                      ? 'bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-300' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-500'
                  ]"
                  title="Nächste Spalten anzeigen"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile-optimized Table -->
        <div class="overflow-hidden">
          <table class="w-full" style="table-layout: fixed;">
            <thead>
              <tr class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                <th class="p-2 md:p-3 text-left w-16 md:w-20">
                  <span class="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span class="hidden sm:inline">Saite</span>
                    <span class="sm:hidden">S.</span>
                  </span>
                </th>
                <!-- Visible column headers - Mobile optimized -->
                <th
                  v-for="col in visibleColumns"
                  :key="col.originalIndex"
                  class="p-1 md:p-2 text-center w-12 md:w-16"
                >
                  <div class="flex justify-center">
                    <button
                      type="button"
                      @click="selectColumn(col.originalIndex)"
                      :class="[
                        'px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
                        currentColumnIndex === col.originalIndex
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105 ring-2 ring-indigo-300 focus:ring-indigo-500'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 shadow-md hover:shadow-lg focus:ring-gray-400'
                      ]"
                    >
                      {{ col.originalIndex + 1 }}
                    </button>
                  </div>
                </th>
                <!-- Fixed add column button - Mobile optimized -->
                <th class="p-1 md:p-2 text-center w-12 md:w-16 sticky right-0 bg-gray-50 dark:bg-gray-700 border-l border-gray-200 dark:border-gray-600">
                  <button
                    type="button"
                    class="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md hover:shadow-lg"
                    @click="addColumn"
                    title="Neue Spalte"
                  >
                    <span class="md:hidden">+</span>
                    <span class="hidden md:inline">➕</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- String rows - Mobile optimized -->
              <tr
                v-for="(stringName, sIndex) in stringNames"
                :key="sIndex"
                class="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <th class="p-2 md:p-3 text-left">
                  <div class="flex items-center gap-1 md:gap-3">
                    <span class="text-sm md:text-lg font-bold text-gray-700 dark:text-gray-200 min-w-[16px] md:min-w-[20px]">
                      {{ stringName }}
                    </span>
                    <div 
                      :class="[
                        'h-0.5 flex-1 rounded-full hidden sm:block',
                        stringColors[sIndex]
                      ]"
                    ></div>
                  </div>
                </th>
                <td
                  v-for="col in visibleColumns"
                  :key="col.originalIndex"
                  class="p-0.5 md:p-1 text-center w-12 md:w-16"
                >
                  <button
                    type="button"
                    @click="selectColumn(col.originalIndex); playNoteFromTab(sIndex, col.originalIndex)"
                    :class="[
                      'w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl font-bold text-xs md:text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      col.originalIndex === currentColumnIndex 
                        ? 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-indigo-700 dark:text-indigo-300 ring-2 ring-blue-300 dark:ring-blue-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                      col.notes[sIndex] !== null ? 'shadow-lg' : 'shadow-md'
                    ]"
                    :title="col.notes[sIndex] !== null ? `${stringNames[sIndex]} string, ${col.originalIndex + 1}. Spalte, Bund ${col.notes[sIndex]} - Klick zum Abspielen` : `${stringNames[sIndex]} string, ${col.originalIndex + 1}. Spalte - leer`"
                  >
                    {{ col.notes[sIndex] === null ? '—' : col.notes[sIndex] }}
                  </button>
                </td>
                <!-- Empty cell for alignment - Mobile optimized -->
                <td class="p-0.5 md:p-1 w-12 md:w-16">
                  <div class="w-8 h-8 md:w-12 md:h-12"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Mobile: Sticky Fretboard (like Desktop) - positioned OVER the actions -->
      <div class="md:hidden sticky bottom-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-700 mb-8 z-10">
        <!-- Mobile Header - Compact -->
        <div class="px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-xl">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span class="text-lg">🎸</span>
              <div class="text-sm">
                <div class="font-semibold">{{ instrumentConfig?.name }}-Hals</div>
                <div class="text-xs opacity-90">Spalte {{ currentColumnIndex + 1 }} / {{ columns.length }}</div>
              </div>
            </div>
            <!-- Mobile Column Navigation -->
            <div class="flex items-center gap-1">
              <button
                @click="goToPreviousColumn"
                :disabled="currentColumnIndex === 0"
                :class="[
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200',
                  currentColumnIndex === 0
                    ? 'bg-white/20 text-white/50 cursor-not-allowed'
                    : 'bg-white/20 hover:bg-white/30 text-white active:scale-95'
                ]"
              >
                ←
              </button>
              <span class="px-2 py-1 bg-white/20 rounded text-xs font-bold min-w-[32px] text-center">
                {{ currentColumnIndex + 1 }}
              </span>
              <button
                @click="goToNextColumn"
                :disabled="currentColumnIndex === columns.length - 1"
                :class="[
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200',
                  currentColumnIndex === columns.length - 1
                    ? 'bg-white/20 text-white/50 cursor-not-allowed'
                    : 'bg-white/20 hover:bg-white/30 text-white active:scale-95'
                ]"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Fretboard Content - Ultra Compact -->
        <div class="px-2 py-3 max-h-[40vh] overflow-y-auto">
          <!-- Current String Selector -->
          <div class="mb-3">
            <div class="flex gap-1 justify-center">
              <button
                v-for="(stringName, sIndex) in stringNames"
                :key="sIndex"
                @click="selectedMobileString = sIndex"
                :class="[
                  'flex-1 py-2 px-1 rounded-lg text-xs font-bold transition-all duration-200 border-2',
                  selectedMobileString === sIndex
                    ? 'bg-indigo-500 text-white border-indigo-600 shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                <div class="font-bold">{{ stringName }}</div>
                <div class="text-xs opacity-75">
                  {{ currentColumn.notes[sIndex] !== null ? currentColumn.notes[sIndex] : '—' }}
                </div>
              </button>
            </div>
          </div>

          <!-- Selected String Display -->
          <div class="mb-3 text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Saite: {{ stringNames[selectedMobileString] }}
              </span>
              <div 
                :class="[
                  'w-4 h-1 rounded-full',
                  stringColors[selectedMobileString]
                ]"
              ></div>
              <button
                v-if="currentColumn.notes[selectedMobileString] !== null"
                @click="clearNote(selectedMobileString)"
                class="px-2 py-0.5 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          <!-- Fret Selector for Selected String -->
          <div class="grid grid-cols-6 gap-1.5">
            <button
              v-for="fret in Math.min(numFrets + 1, 18)"
              :key="fret"
              @click="toggleNote(selectedMobileString, fret - 1)"
              :class="[
                'aspect-square flex items-center justify-center rounded-lg font-bold transition-all duration-200 text-sm border-2',
                currentColumn.notes[selectedMobileString] === (fret - 1)
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-indigo-600 shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 active:scale-95',
                fret - 1 === 0 ? 'ring-2 ring-yellow-400 ring-opacity-50' : '',
                [3, 5, 7, 9, 12, 15].includes(fret - 1) ? 'ring-1 ring-blue-400 ring-opacity-30' : ''
              ]"
            >
              {{ fret - 1 }}
            </button>
          </div>

          <!-- Quick Actions Row -->
          <div class="flex gap-2 mt-3">
            <button
              @click="playCurrentChord"
              :disabled="!currentColumnHasNotes"
              :class="[
                'flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200',
                currentColumnHasNotes
                  ? 'bg-green-500 hover:bg-green-600 text-white active:scale-95'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              ]"
            >
              🔊 Akkord
            </button>
            <button
              @click="addColumn"
              class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95"
            >
              ➕
            </button>
            <button
              @click="clearCurrentColumn"
              :disabled="!currentColumnHasNotes"
              :class="[
                'px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200',
                currentColumnHasNotes
                  ? 'bg-orange-500 hover:bg-orange-600 text-white active:scale-95'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              ]"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>

      <!-- Desktop: Sticky Bottom (unchanged for desktop) -->
      <div class="hidden md:block sticky bottom-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-700 mb-8 z-10">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            ⌨️ {{ instrumentConfig?.name }}-Hals (Eingabe)
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              (Klicke auf einen Bund zum Hinzufügen/Entfernen - funktioniert wie eine Tastatur)
            </span>
          </h2>
        </div>
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                <th class="p-3 text-left">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Saite</span>
                </th>
                <!-- Fret numbers with enhanced styling -->
                <th
                  v-for="fret in numFrets + 1"
                  :key="fret"
                  class="p-2 text-center min-w-[40px]"
                >
                  <span 
                    :class="[
                      'text-xs font-semibold px-2 py-1 rounded-full',
                      fret === 1 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      [3, 5, 7, 9].includes(fret - 1) ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      fret - 1 === 12 ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                    ]"
                  >
                    {{ fret - 1 }}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Iterate over strings with enhanced visual design -->
              <tr
                v-for="(stringName, sIndex) in stringNames"
                :key="sIndex"
                class="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <!-- String name label with visual line -->
                <th class="p-3 text-left">
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-bold text-gray-700 dark:text-gray-200 min-w-[20px]">
                      {{ stringName }}
                    </span>
                    <div 
                      :class="[
                        'h-1 flex-1 rounded-full border-2',
                        stringColors[sIndex],
                        sIndex === 0 ? 'h-0.5' : sIndex === 5 ? 'h-2' : 'h-1'
                      ]"
                      style="background: linear-gradient(90deg, #d1d5db, #9ca3af)"
                    ></div>
                  </div>
                </th>
                <!-- Fret buttons with enhanced interaction -->
                <td
                  v-for="fret in numFrets + 1"
                  :key="fret"
                  class="p-1 text-center"
                >
                  <button
                    type="button"
                    @click="toggleNote(sIndex, fret - 1)"
                    :class="[
                      'w-10 h-10 flex items-center justify-center rounded-xl font-semibold transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                      currentColumn.notes[sIndex] === (fret - 1)
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-110 ring-2 ring-indigo-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    ]"
                    :title="`${stringNames[sIndex]} string, Bund ${fret - 1}${soundEnabled ? ' - Sound aktiviert' : ''}`"
                  >
                    {{ fret - 1 }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Action Buttons - Mobile Optimized -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-6 mb-8">
        <h3 class="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 md:mb-4 text-center">
          <span class="hidden sm:inline">Aktionen</span><span class="sm:hidden">Actions</span>
        </h3>
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 sm:justify-center">
          <button
            type="button"
            class="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="downloadPDF"
          >
            📄 <span class="hidden sm:inline">PDF herunterladen</span><span class="sm:hidden">PDF</span>
          </button>
          <button
            type="button"
            class="bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="removeColumn()"
            :disabled="columns.length <= 1"
            :class="{ 
              'opacity-50 cursor-not-allowed transform-none hover:scale-100': columns.length <= 1,
              'hover:shadow-xl': columns.length > 1 
            }"
          >
            🗑️ <span class="hidden sm:inline">Spalte entfernen</span><span class="sm:hidden">Delete</span>
          </button>
          <button
            type="button"
            class="bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            @click="clearAllColumns"
          >
            🧹 <span class="hidden sm:inline">Alles löschen</span><span class="sm:hidden">Clear</span>
          </button>
        </div>
      </div>

      <!-- ASCII Preview - Mobile Optimized -->
      <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-3 md:p-4 border-b border-gray-200 dark:border-gray-600">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <h2 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              👁️ <span class="hidden sm:inline">ASCII-Vorschau & Playback</span><span class="sm:hidden">ASCII & Play</span>
              <span class="hidden lg:inline text-sm font-normal text-gray-500 dark:text-gray-400">
                (Kopiere, PDF oder spiele ab)
              </span>
            </h2>
            
            <!-- Playback Controls - Mobile Optimized -->
            <div class="flex gap-2">
              <button
                v-if="!isPlaying"
                @click="playEntireTab"
                :disabled="!soundEnabled || columns.length === 0"
                :class="[
                  'px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-200 flex items-center gap-1 md:gap-2',
                  soundEnabled && columns.length > 0
                    ? 'bg-green-500 hover:bg-green-600 text-white transform hover:scale-105'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                ]"
                title="Gesamte Tabulatur abspielen"
              >
                ▶️ <span class="hidden sm:inline">Tab abspielen</span><span class="sm:hidden">Play</span>
              </button>
              <button
                v-if="isPlaying"
                @click="stopPlayback"
                class="px-3 md:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm md:text-base font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-1 md:gap-2"
                title="Playback stoppen"
              >
                ⏹️ <span class="hidden sm:inline">Stop</span><span class="sm:hidden">Stop</span>
              </button>
            </div>
          </div>
        </div>
        <div class="p-3 md:p-6">
          <div class="bg-black rounded-lg p-2 md:p-4 overflow-x-auto">
            <pre class="whitespace-pre text-xs md:text-sm font-mono text-green-400 leading-relaxed">{{ generateAscii().join('\n') }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Enhanced animations and visual effects */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.slide-in {
  animation: slideIn 0.3s ease-out forwards;
}

/* Custom scrollbar for better UX */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Dark mode scrollbar */
.dark .overflow-x-auto::-webkit-scrollbar-track {
  background: #374151;
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb {
  background: #6b7280;
}

.dark .overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* Hide the default table borders for cleaner UI */
table {
  border-collapse: collapse;
}

th,
td {
  border: 0;
}

/* Enhanced focus states for better accessibility */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>