<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-2xl">
      <!-- Logo bzw. Titel -->
      <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
      </h1>
      
      <!-- Coming Soon Text -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Coming Soon
      </h2>
      
      <!-- Beschreibungstext -->
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
        This page is still under development. Check back soon for new content.
      </p>

      <!-- Patreon Highlight Box mit verbessertem Design -->
      <div class="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-8 mb-10 shadow-lg overflow-hidden">
        <!-- Decorative Background Pattern -->
        <div class="absolute inset-0 opacity-5 dark:opacity-10">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        
        <div class="relative z-10">
          <!-- Patreon Icon -->
          <div class="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="#F96854"/>
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            AaronThommy <span class="text-orange-600 dark:text-orange-400">Music Circle</span>
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Werde Teil meiner exklusiven Patreon-Community! Erhalte Zugang zu Guitar Tabs, Behind-the-Scenes Content, 
            monatlichen Live-Sessions und direktem Feedback zu deinem Spiel.
          </p>
          
          <!-- Feature List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 max-w-md mx-auto text-left">
            <div class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm">Exklusive Guitar Tabs</span>
            </div>
            <div class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm">Monatliche Live-Sessions</span>
            </div>
            <div class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm">Persönliches Feedback</span>
            </div>
            <div class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm">Community Discord</span>
            </div>
          </div>
          
          <a 
            href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
            target="_blank" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="white"/>
            </svg>
            Become a Patron now
          </a>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-3">
            Ab 3€ pro Monat • Jederzeit kündbar
          </p>
        </div>
      </div>
      
      <!-- Call to Action / Zurück zur Homepage -->
      <div class="space-y-4">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </NuxtLink>
        
        <!-- Social Media Links mit verbessertem Design -->
        <div class="mt-12">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow me on Social Media</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            For daily clips and performances
          </p>
          <div class="flex justify-center space-x-4">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="group">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="group">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="group">
              <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeStore } from '~/stores/themeStore';

// Theme Store für Dark Mode
const themeStore = useThemeStore();

onMounted(() => {
  // Dark Mode Einstellungen initialisieren
  themeStore.initTheme();
});
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>