<script setup lang="ts">
// Guitar Tab Generator Page
// This page provides an interactive interface to build guitar tablatures.
// Users can select notes on a fretboard, organise them into columns (time steps),
// preview the resulting ASCII tab and export it as a PDF.  

import { ref } from 'vue'
// jsPDF is used to generate the PDF download.  
// You need to install it via `npm install jspdf` in your project.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsPDF from 'jspdf'

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
 * Select the current column for editing.  
 */
function selectColumn(index: number) {
  currentColumnIndex.value = index
}

/*
 * Toggle a note on the fretboard for the currently selected column.  
 * If the cell already contains the selected fret, it removes it.  
 * Otherwise it sets the fret number.  
 */
function toggleNote(stringIndex: number, fret: number) {
  const column = columns.value[currentColumnIndex.value]
  const current = column.notes[stringIndex]
  column.notes[stringIndex] = current === fret ? null : fret
}

/*
 * Add a new empty column to the tab and make it the current one.  
 */
function addColumn() {
  columns.value.push({ notes: Array(stringNames.length).fill(null) })
  currentColumnIndex.value = columns.value.length - 1
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
      const fret = columns.value[c].notes[s]
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
function downloadPDF() {
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
</script>

<template>
  <div class="container mx-auto py-8">
    <!-- Page Heading -->
    <h1 class="text-3xl font-bold mb-4 text-center">Guitar Tab Generator</h1>
    <p class="mb-6 text-center text-gray-700 dark:text-gray-300">
      Wähle unten am Gitarrenhals die Bünde für die aktuell ausgewählte Spalte aus.  
      Klicke oben im Tabulaturbereich eine Spalte an, um sie zu bearbeiten.  
      Füge weitere Spalten hinzu oder entferne sie nach Bedarf.
    </p>

    <!-- Fretboard Interface -->
    <div class="overflow-x-auto border rounded-lg shadow-md bg-white dark:bg-gray-900 mb-8">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-800">
            <th class="p-2"></th>
            <!-- Fret numbers (0-based) -->
            <th
              v-for="fret in numFrets + 1"
              :key="fret"
              class="p-2 text-xs text-center text-gray-500 dark:text-gray-400"
            >
              {{ fret - 1 }}
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Iterate over strings: high e to low E -->
          <tr
            v-for="(stringName, sIndex) in stringNames"
            :key="sIndex"
            class="border-t border-gray-200 dark:border-gray-700"
          >
            <!-- String name label -->
            <th class="p-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300">
              {{ stringName }}
            </th>
            <!-- Cells representing frets -->
            <td
              v-for="fret in numFrets + 1"
              :key="fret"
              class="p-1 text-center"
            >
              <button
                type="button"
                @click="toggleNote(sIndex, fret - 1)"
                :class="[
                  'w-8 h-8 flex items-center justify-center rounded',
                  columns[currentColumnIndex].notes[sIndex] === (fret - 1)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                ]"
              >
                {{ fret - 1 }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Tab Grid (Preview & Column selection) -->
    <div class="overflow-x-auto border rounded-lg shadow-md bg-white dark:bg-gray-900 mb-6">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-800">
            <th class="p-2 text-left"></th>
            <!-- Column headers for each tab position -->
            <th
              v-for="(col, idx) in columns"
              :key="idx"
              class="p-1 text-center"
            >
              <button
                type="button"
                @click="selectColumn(idx)"
                :class="[
                  'px-2 py-1 rounded text-sm',
                  currentColumnIndex === idx
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                ]"
              >
                {{ idx + 1 }}
              </button>
            </th>
            <!-- Add column button -->
            <th class="p-1 text-center">
              <button
                type="button"
                class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                @click="addColumn"
              >
                +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows for each string in the tab preview -->
          <tr
            v-for="(stringName, sIndex) in stringNames"
            :key="sIndex"
            class="border-t border-gray-200 dark:border-gray-700"
          >
            <th class="p-2 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
              {{ stringName }}
            </th>
            <td
              v-for="(col, idx) in columns"
              :key="idx"
              class="p-1 text-center"
            >
              <button
                type="button"
                @click="selectColumn(idx)"
                class="w-8 h-8 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {{ col.notes[sIndex] === null ? '-' : col.notes[sIndex] }}
              </button>
            </td>
            <!-- Empty cell aligning with add-button column -->
            <td class="p-1"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-4 justify-center mb-6">
      <button
        type="button"
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        @click="downloadPDF"
      >
        PDF herunterladen
      </button>
      <button
        type="button"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        @click="removeColumn()"
        :disabled="columns.length <= 1"
        :class="{ 'opacity-50 cursor-not-allowed': columns.length <= 1 }"
      >
        Spalte entfernen
      </button>
    </div>

    <!-- ASCII Preview -->
    <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
      <h2 class="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Vorschau</h2>
      <pre class="whitespace-pre text-sm font-mono text-gray-800 dark:text-gray-100">
{{ generateAscii().join('\n') }}
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Hide the default table borders for cleaner UI */
table {
  border-collapse: collapse;
}
th,
td {
  border: 0;
}
</style>