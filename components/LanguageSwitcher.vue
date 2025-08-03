<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLanguageStore } from '~/stores/languageStore';
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp();
const languageStore = useLanguageStore();
const isOpen = ref(false);

// Verfügbare Sprachen mit Flaggen
const availableLocales = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

// Aktuelle Sprache aus dem Store
const currentLocale = computed(() => languageStore.currentLocale);

// Aktuelle Sprache Details
const currentLanguage = computed(() => 
  availableLocales.find(locale => locale.code === currentLocale.value)
);

// Toggle Dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Dropdown schließen
const closeDropdown = () => {
  isOpen.value = false;
};

// Sprachumschaltung
const switchLanguage = (localeCode) => {
  languageStore.setLocale(localeCode);
  closeDropdown();
};

// Für Übersetzungen
const $t = (key) => {
  if (!nuxtApp.$i18n) return key;
  return nuxtApp.$i18n.t(key);
};

// Click outside handler
const handleClickOutside = (e) => {
  if (!e.target.closest('.language-switcher') && isOpen.value) {
    closeDropdown();
  }
};

onMounted(() => {
  // Store initialisieren
  languageStore.initLocale();
  
  // Click-Outside-Event
  if (process.client) {
    document.addEventListener('click', handleClickOutside);
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside);
  }
});
</script>

<template>
  <div class="relative language-switcher">
    <!-- Trigger Button -->
    <button 
      @click="toggleDropdown" 
      class="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      :aria-label="$t('language.switch')"
    >
      <!-- Current Language Flag (visible on mobile) -->
      <span class="text-lg sm:hidden">{{ currentLanguage?.flag }}</span>
      
      <!-- Current Language Text (hidden on mobile) -->
      <span class="hidden sm:flex items-center">
        <span class="text-lg mr-2">{{ currentLanguage?.flag }}</span>
        <span class="text-sm font-medium">{{ currentLanguage?.name }}</span>
      </span>
      
      <!-- Dropdown Arrow -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 ml-1 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fill-rule="evenodd" 
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
          clip-rule="evenodd" 
        />
      </svg>
    </button>
    
    <!-- Dropdown Modal -->
    <transition 
      enter-active-class="transition duration-200 ease-out" 
      enter-from-class="transform scale-95 opacity-0" 
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in" 
      leave-from-class="transform scale-100 opacity-100" 
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
      >
        <!-- Dropdown Header -->
        <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {{ $t('language.select') || 'Select Language' }}
          </p>
        </div>
        
        <!-- Language Options -->
        <div class="py-2">
          <button
            v-for="locale in availableLocales" 
            :key="locale.code"
            @click="switchLanguage(locale.code)"
            class="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between transition-colors duration-150"
            :class="currentLocale === locale.code 
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium' 
              : 'text-gray-700 dark:text-gray-300'"
          >
            <div class="flex items-center">
              <span class="text-lg mr-3">{{ locale.flag }}</span>
              <span>{{ locale.name }}</span>
            </div>
            
            <!-- Check mark for current language -->
            <svg 
              v-if="currentLocale === locale.code"
              xmlns="http://www.w3.org/2000/svg" 
              class="h-4 w-4 text-blue-600 dark:text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </button>
        </div>
        
        <!-- Footer with close hint -->
        <div class="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
          <p class="text-xs text-gray-400 dark:text-gray-500">
            {{ $t('language.hint') || 'Click outside to close' }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>