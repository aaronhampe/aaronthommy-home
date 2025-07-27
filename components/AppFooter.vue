<template>
  <footer class="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
    <div class="container mx-auto px-6">
      <!-- Footer Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">
            aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-300 pr-6">
            {{ $t('home.hero.subtitle') }}
          </p>
          <!-- Social Media Icons -->
          <div class="flex space-x-4 pt-2">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank"
              class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/aaronthommy_" target="_blank"
              class="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@aaronthommy" target="_blank"
              class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ $t('home.welcome.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.home') }}
              </NuxtLink>
            </li>
           
            <li>
              <NuxtLink to="/comingsoon"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('footer.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/community"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.offers') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/social"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('header.social') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ $t('home.courses.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/comingsoon"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('home.courses.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/comingsoon"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/comingsoon"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                {{ $t('home.equipment.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/comingsoon"
                class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Community Join Section -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-4">{{ $t('footer.community.title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('footer.community.text') }}
          </p>
          <NuxtLink to="/community"
            class="w-full bg-blue-500 dark:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center justify-center">
            {{ $t('footer.community.button') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Line with Copyright -->
      <div
        class="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-0">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>

        <!-- Legal Links -->
        <div class="flex space-x-6">
          <NuxtLink to="/impressum"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.imprint') }}
          </NuxtLink>
          <NuxtLink to="/datenschutz"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink to="/kontakt"
            class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors">
            {{ $t('footer.contact') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '~/stores/themeStore';

const { t } = useI18n();
const themeStore = useThemeStore();
const email = ref('');

const subscribeToNewsletter = () => {
  // Hier könnte später die Newsletter-Anmeldung implementiert werden
  const message = t('language.de') === 'Deutsch'
    ? `Danke für deine Anmeldung mit ${email.value}!`
    : `Thank you for subscribing with ${email.value}!`;
  alert(message);
  email.value = '';
};

onMounted(() => {
  // Theme-Einstellungen initialisieren
  themeStore.initTheme();
});
</script>