// stores/languageStore.js
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'en',
  }),
  
  actions: {
    setLocale(locale) {
      this.currentLocale = locale;
      
      // Vue-i18n global über den Nuxt Plugin verwenden
      const { $i18n } = useNuxtApp();
      if ($i18n) {
        $i18n.locale.value = locale;
      }
      
      // Speichern der Sprachpräferenz im LocalStorage
      if (process.client) {
        localStorage.setItem('user-locale', locale);
      }
    },
    
    // Beim App-Start die gespeicherte Sprache laden
    initLocale() {
      if (process.client) {
        const savedLocale = localStorage.getItem('user-locale');
        if (savedLocale) {
          this.setLocale(savedLocale);
        }
      }
    }
  }
});