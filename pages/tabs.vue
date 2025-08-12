<script setup lang="ts">
// Guitar Tab Generator Page
// This page provides an interactive interface to build guitar tablatures.
// Users can select notes on a fretboard, organise them into columns (time steps),
// preview the resulting ASCII tab and export it as a PDF.  

import { ref, computed } from 'vue'
// jsPDF is used to generate the PDF download.  
// We'll import it dynamically on the client to avoid SSR errors.

/*
 * Number of frets to display.  
 * You can increase this value if you need more frets.  
 */
const numFrets = 12

/*
 * Names of the strings from highest (thin) to lowest (thick).  
 * Using lowercase 'e' for the first string to differentiate from the low E.  
 */
const stringNames = ['e', 'B', 'G', 'D', 'A', 'E']

/*
 * String colors for visual differentiation
 */
const stringColors = [
  'border-yellow-400',  // e - thinnest, brightest
  'border-orange-400',  // B
  'border-red-400',     // G
  'border-purple-400',  // D
  'border-blue-400',    // A
  'border-gray-400'     // E - thickest, darkest
]

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
  { notes: Array(stringNames.length).fill(null) }
])

/*
 * Index of the currently selected column.  
 * When the user clicks on a column header in the tab grid, this value changes.  
 */
const currentColumnIndex = ref(0)

/*
 * Number of columns to show in the viewport (responsive)
 */
const maxVisibleColumns = ref(8)

/*
 * Starting index for visible columns (for horizontal pagination)
 */
const visibleStartIndex = ref(0)

/*
 * A safe reference to the currently selected column.
 * Falls back to an empty column shape to satisfy type checks in template bindings.
 */
const currentColumn = computed<TabColumn>(() => {
  const idx = currentColumnIndex.value
  const col = columns.value[idx]
  return col ?? { notes: Array(stringNames.length).fill(null) }
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
 * Otherwise it sets the fret number.  
 */
function toggleNote(stringIndex: number, fret: number) {
  const idx = currentColumnIndex.value
  const column = columns.value[idx]
  if (!column) return
  const current = column.notes[stringIndex] ?? null
  column.notes[stringIndex] = current === fret ? null : fret
}

/*
 * Add a new empty column to the tab and make it the current one.  
 */
function addColumn() {
  columns.value.push({ notes: Array(stringNames.length).fill(null) })
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
  for (let s = 0; s < stringNames.length; s++) {
    let line = `${stringNames[s]}|`
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
 * Create and download a PDF representation of the current tab.  
 * The PDF will use a monospaced font (Courier) to align the ASCII art.  
 */
async function downloadPDF() {
  // Dynamically import on the client only
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  doc.setFont('Courier', 'normal')
  doc.setFontSize(12)
  const lines = generateAscii()
  let y = 15
  lines.forEach((line) => {
    doc.text(line, 10, y)
    y += 7
  })
  doc.save('guitar-tab.pdf')
}

/*
 * Clear all notes from the current column
 */
function clearCurrentColumn() {
  const column = columns.value[currentColumnIndex.value]
  if (column) {
    column.notes = Array(stringNames.length).fill(null)
  }
}

/*
 * Check if current column has any notes
 */
const currentColumnHasNotes = computed(() => {
  return currentColumn.value.notes.some(note => note !== null)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
    <div class="container mx-auto py-8 px-4">
      <!-- Page Heading -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl mt-20 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          🎸 Guitar Tab Generator
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Erstelle professionelle Gitarren-Tabulaturen mit unserem interaktiven Generator. 
          Wähle Bünde am Gitarrenhals und exportiere deine Tabs als PDF.
        </p>
      </div>

      <!-- Current Column Info Card -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            <span class="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Aktuelle Spalte: {{ currentColumnIndex + 1 }} / {{ columns.length }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              ({{ currentColumnHasNotes ? 'mit Noten' : 'leer' }})
            </span>
          </div>
          <div class="flex gap-2">
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
              @click="clearCurrentColumn"
              class="px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 flex items-center gap-1"
            >
              🗑️ Leeren
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

      <!-- Fretboard Interface -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            🎯 Gitarrenhals
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              (Klicke auf einen Bund zum Hinzufügen/Entfernen)
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
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-md hover:shadow-lg'
                    ]"
                  >
                    {{ fret - 1 }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Tab Grid (Preview & Column selection) -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              📝 Tabulatur-Vorschau
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                (Klicke auf eine Spalte zum Bearbeiten)
              </span>
            </h2>
            
            <!-- Column navigation and info -->
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Spalten {{ visibleStartIndex + 1 }}-{{ Math.min(visibleStartIndex + maxVisibleColumns, columns.length) }} von {{ columns.length }}
              </span>
              
              <!-- Navigation buttons -->
              <div class="flex gap-1">
                <button
                  @click="scrollLeft"
                  :disabled="!canScrollLeft"
                  :class="[
                    'p-2 rounded-lg transition-colors duration-200',
                    canScrollLeft 
                      ? 'bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-300' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:text-gray-500'
                  ]"
                  title="Vorherige Spalten anzeigen"
                >
                  ←
                </button>
                <button
                  @click="scrollRight"
                  :disabled="!canScrollRight"
                  :class="[
                    'p-2 rounded-lg transition-colors duration-200',
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
        
        <div class="overflow-hidden">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                <th class="p-3 text-left min-w-[80px]">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Saite</span>
                </th>
                <!-- Visible column headers with enhanced styling -->
                <th
                  v-for="col in visibleColumns"
                  :key="col.originalIndex"
                  class="p-2 text-center min-w-[60px]"
                >
                  <button
                    type="button"
                    @click="selectColumn(col.originalIndex)"
                    :class="[
                      'px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      currentColumnIndex === col.originalIndex
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105 ring-2 ring-indigo-300 focus:ring-indigo-500'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 shadow-md hover:shadow-lg focus:ring-gray-400'
                    ]"
                  >
                    {{ col.originalIndex + 1 }}
                  </button>
                </th>
                <!-- Fixed add column button -->
                <th class="p-2 text-center min-w-[60px]">
                  <button
                    type="button"
                    class="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md hover:shadow-lg"
                    @click="addColumn"
                    title="Neue Spalte hinzufügen"
                  >
                    ➕
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Rows for each string with visual enhancements -->
              <tr
                v-for="(stringName, sIndex) in stringNames"
                :key="sIndex"
                class="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                <th class="p-3 text-left">
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-bold text-gray-700 dark:text-gray-200 min-w-[20px]">
                      {{ stringName }}
                    </span>
                    <div 
                      :class="[
                        'h-0.5 flex-1 rounded-full',
                        stringColors[sIndex]
                      ]"
                    ></div>
                  </div>
                </th>
                <td
                  v-for="col in visibleColumns"
                  :key="col.originalIndex"
                  class="p-1 text-center"
                >
                  <button
                    type="button"
                    @click="selectColumn(col.originalIndex)"
                    :class="[
                      'w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      col.originalIndex === currentColumnIndex 
                        ? 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-indigo-700 dark:text-indigo-300 ring-2 ring-blue-300 dark:ring-blue-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                      col.notes[sIndex] !== null ? 'shadow-lg' : 'shadow-md'
                    ]"
                  >
                    {{ col.notes[sIndex] === null ? '—' : col.notes[sIndex] }}
                  </button>
                </td>
                <!-- Empty cell for alignment with add button (fixed position) -->
                <td class="p-1">
                  <div class="w-12 h-12"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Aktionen</h3>
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            class="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl flex items-center gap-2"
            @click="downloadPDF"
          >
            📄 PDF herunterladen
          </button>
          <button
            type="button"
            class="bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg hover:shadow-xl flex items-center gap-2"
            @click="removeColumn()"
            :disabled="columns.length <= 1"
            :class="{ 
              'opacity-50 cursor-not-allowed transform-none hover:scale-100': columns.length <= 1,
              'hover:shadow-xl': columns.length > 1 
            }"
          >
            🗑️ Spalte entfernen
          </button>
        </div>
      </div>

      <!-- ASCII Preview -->
      <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4 border-b border-gray-200 dark:border-gray-600">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            👁️ ASCII-Vorschau
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              (Kopiere den Text oder lade als PDF herunter)
            </span>
          </h2>
        </div>
        <div class="p-6">
          <div class="bg-black rounded-lg p-4 overflow-x-auto">
            <pre class="whitespace-pre text-sm font-mono text-green-400 leading-relaxed">{{ generateAscii().join('\n') }}</pre>
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