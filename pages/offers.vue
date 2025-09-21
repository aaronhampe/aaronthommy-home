<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Offers
          </h1>
          <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
        </div>
  
        <!-- Patreon Offer Section -->
        <div class="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden shadow-xl">
          <!-- Decorative Elements -->
          <div class="absolute inset-0 opacity-10 dark:opacity-5">
            <div class="absolute -top-32 -right-32 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
          </div>
  
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="#F96854"/>
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                AaronThommy <span class="text-orange-600 dark:text-orange-400">Music Circle</span>
              </h2>
              <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Become part of my exclusive Patreon community and get access to unique content, personal feedback and an engaged community of musicians.
              </p>
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
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">What you get:</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Exclusive Guitar Tabs & Piano Sheets</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Monthly live sessions & Q&As</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Behind-the-scenes content & tutorials</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Personal feedback on your playing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">Access to the exclusive Discord server</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Future Offers Section -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More offers
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <!-- Placeholder Card, später erweiterbar -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Coming soon</h3>
              <p class="text-gray-600 dark:text-gray-300 text-center">
                New offers such as e-books, exclusive tutorials and affiliate deals coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useThemeStore } from "~/stores/themeStore";
  
  const themeStore = useThemeStore();
  
  onMounted(() => {
    // Theme-Einstellungen initialisieren
    themeStore.initTheme();
  });
  </script>
  