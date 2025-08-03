<!-- /layouts/default.vue -->
<script setup lang="ts">
/**
 * 1️⃣  OG-Image für alle Seiten aktivieren
 *     – wird nur einmal pro Route ausgeführt
 */


defineOgImageComponent('AaronThommyBanner', {
  title: 'aaronthommy – Guitar & Piano',
  subtitle: 'Clips · Covers · Compositions',
  filename: 'aaronthommybanner' 
})
</script>

<template>
  <!-- Beispielhülle – ersetze durch deine eigenen Komponenten -->
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Nur wenn du hier wirklich Styles brauchst – 
   globales Tailwind bleibt davon unberührt */
</style>
