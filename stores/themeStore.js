import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
  }),
  
  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      this.applyTheme();
      
      // Speichern der Theme-Präferenz im LocalStorage
      if (process.client) {
        localStorage.setItem('theme-mode', this.isDark ? 'dark' : 'light');
      }
    },
    
    setDarkMode(value) {
      this.isDark = value;
      this.applyTheme();
      
      // Speichern der Theme-Präferenz im LocalStorage
      if (process.client) {
        localStorage.setItem('theme-mode', this.isDark ? 'dark' : 'light');
      }
    },
    
    // Theme auf HTML Element anwenden
    applyTheme() {
      // Nur im Client ausführen
      if (process.client) {
        if (this.isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    
    // Initialisierung des Themes
    initTheme() {
      if (process.client) {
        // Gespeichertes Theme prüfen
        const savedTheme = localStorage.getItem('theme-mode');
        
        if (savedTheme) {
          // Gespeichertes Theme verwenden
          this.setDarkMode(savedTheme === 'dark');
        } else {
          // System-Präferenz prüfen
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          this.setDarkMode(prefersDark);
          
          // Auf Änderungen der System-Präferenz hören
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme-mode')) { // Nur anwenden, wenn keine explizite Benutzerpräferenz gesetzt wurde
              this.setDarkMode(e.matches);
            }
          });
        }
      }
    }
  }
});