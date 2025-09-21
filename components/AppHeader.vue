<template>
  <header
    class="fixed w-full z-50 transition-all duration-300"
    :class="[
      'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm',
      scrolled ? 'shadow-sm dark:shadow-gray-800 py-3' : 'py-5',
    ]"
  >
    <!-- Grid layout: left and right act as flexible spacers (1fr each), center auto so nav is mathematically centered -->
    <div class="container mx-auto px-6 grid items-center grid-cols-[1fr_auto_1fr]">
      <!-- Logo mit designter Typografie -->
      <div class="logo relative z-10 justify-self-start">
        <NuxtLink to="/" class="flex items-center font-bold tracking-tight">
          <span class="text-2xl text-gray-900 dark:text-white">aaron</span>
          <span class="text-2xl text-blue-500 dark:text-blue-400">thommy</span>
        </NuxtLink>
      </div>

  <!-- Desktop Navigation (static English) -->
      <nav class="hidden lg:block justify-self-center">
        <ul class="flex space-x-8">
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              :to="item.path"
              class="relative py-2 font-medium transition-colors nav-link"
              :class="
                isActive(item.path)
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              "
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

  <!-- Actions: Dark Mode -->
      <div class="flex items-center space-x-5 justify-self-end">
        <!-- Darkmode Toggle als separate Komponente -->
        <DarkModeToggle />

        <!-- Hamburger-Button für Mobile -->
        <button
          class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none lg:hidden relative w-6 h-6"
          aria-label="Menu"
          @click="toggleMobileMenu"
        >
          <div class="absolute inset-0">
            <span
              class="absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300"
              :class="isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'"
            ></span>
            <span
              class="absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-opacity duration-300"
              :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span
              class="absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300"
              :class="isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'"
            ></span>
          </div>
        </button>
      </div>
    </div>

  <!-- Mobile Navigation (static English) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800"
      >
        <nav class="container mx-auto py-6 px-6">
          <ul class="space-y-6">
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink
                :to="item.path"
                @click="toggleMobileMenu"
                class="text-xl font-medium block transition-colors"
                :class="
                  isActive(item.path)
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
                "
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Social Media Icons in Mobile Menu -->
          <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div class="flex space-x-5">
              <a
                href="#"
                class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useThemeStore } from "~/stores/themeStore";
import DarkModeToggle from "~/components/DarkModeToggle.vue";

const route = useRoute();
const themeStore = useThemeStore();
const isMobileMenuOpen = ref(false);
const scrolled = ref(false);

// Navigation Items mit i18n-Keys
const navItems = [
  { key: "home", path: "/", label: "Home" },
  { key: "community", path: "/community", label: "Community" },
  { key: "tabs", path: "/tabs", label: "Tabs" },
  { key: "social", path: "/social", label: "Social Media" },
  { key: "kontakt", path: "/kontakt", label: "Contact" },
];

// Überprüft, ob der aktuelle Pfad aktiv ist
const isActive = (path) => {
  return route.path === path;
};

// Toggle für Mobile Menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Scroll-Event für Header-Schatten
onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Theme initialisieren
  themeStore.initTheme();
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};
</script>

<style scoped>
/* Elegante Unterstrich-Animation für Desktop-Navigation */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>
