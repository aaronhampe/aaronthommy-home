<template>
  <footer
    class="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden"
  >
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-500 rounded-full blur-3xl transform -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200 dark:bg-purple-500 rounded-full blur-3xl transform translate-y-1/2"
      ></div>
    </div>

    <!-- Subtle Pattern Overlay -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-8 left-8 w-2 h-2 bg-gray-300 dark:bg-white rounded-full"
      ></div>
      <div
        class="absolute top-16 left-32 w-1 h-1 bg-gray-300 dark:bg-white rounded-full"
      ></div>
      <div
        class="absolute top-32 left-16 w-1.5 h-1.5 bg-gray-300 dark:bg-white rounded-full"
      ></div>
      <div
        class="absolute bottom-16 right-24 w-2 h-2 bg-gray-300 dark:bg-white rounded-full"
      ></div>
      <div
        class="absolute bottom-32 right-8 w-1 h-1 bg-gray-300 dark:bg-white rounded-full"
      ></div>
      <div
        class="absolute top-24 right-16 w-1.5 h-1.5 bg-gray-300 dark:bg-white rounded-full"
      ></div>
    </div>

    <div class="relative z-10 pt-20 pb-8">
      <div class="container mx-auto px-6">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <!-- Brand & Description Section -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Logo -->
            <div class="inline-block">
              <h2
                class="text-3xl font-bold text-gray-800 dark:text-white"
              >
                aaron<span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">thommy</span>
              </h2>
              <div
                class="h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 rounded-full"
              ></div>
            </div>

            <!-- Description -->
            <p
              class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md"
            >
              {{ $t("home.hero.subtitle") }}
            </p>
          </div>

          <!-- Navigation & Community Section -->
          <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Navigation Links -->
            <div class="space-y-6">
              <h3
                class="text-gray-900 dark:text-white font-bold text-lg mb-6 relative"
              >
                Navigation
                <div
                  class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                ></div>
              </h3>
              <nav class="space-y-4">
                <NuxtLink
                  to="/"
                  class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  <div
                    class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></div>
                  {{ $t("header.home") }}
                </NuxtLink>
                <NuxtLink
                  to="/tabs"
                  class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  <div
                    class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></div>
                  {{ $t("Tabs") }}
                </NuxtLink>
                <NuxtLink
                  to="/social"
                  class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  <div
                    class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></div>
                  {{ $t("header.social") }}
                </NuxtLink>
                <NuxtLink
                  to="/offers"
                  class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  <div
                    class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></div>
                  {{ $t("header.offers") }}
                </NuxtLink>
                <NuxtLink
                  to="/kontakt"
                  class="group flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  <div
                    class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></div>
                  {{ $t("footer.contact") }}
                </NuxtLink>
              </nav>
            </div>

            <!-- Community Section -->
            <div class="space-y-6">
              <h3
                class="text-gray-900 dark:text-white font-bold text-lg mb-6 relative"
              >
                {{ $t("footer.community.title") }}
                <div
                  class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                ></div>
              </h3>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ $t("footer.community.text") }}
              </p>
              <NuxtLink
                to="/community"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                  />
                </svg>
                {{ $t("footer.community.button") }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Social Media Section -->
        <div class="border-t border-gray-300 dark:border-white/10 pt-12 mb-12">
          <div class="text-center space-y-6">
            <h3 class="text-gray-900 dark:text-white font-bold text-xl">
              Folge mir auf Social Media
            </h3>
            <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Für tägliche musikalische Inspirationen, neue Tutorials und
              Behind-the-Scenes Content
            </p>

            <!-- Social Icons -->
            <div class="flex justify-center space-x-6">
              <a
                href="https://www.tiktok.com/@aaronthommy"
                target="_blank"
                class="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative z-10 w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
                  />
                </svg>
                <div
                  class="absolute -inset-2 bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                ></div>
              </a>

              <a
                href="https://www.instagram.com/aaronthommy_"
                target="_blank"
                class="group relative p-4 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative z-10 w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
                <div
                  class="absolute -inset-2 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                ></div>
              </a>

              <a
                href="https://www.youtube.com/@aaronthommy"
                target="_blank"
                class="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative z-10 w-8 h-8 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
                <div
                  class="absolute -inset-2 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                ></div>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="border-t border-gray-300 dark:border-white/10 pt-8">
          <div
            class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
          >
            <!-- Copyright -->
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ $t("footer.copyright", { year: new Date().getFullYear() }) }}
            </p>

            <!-- Legal Links -->
            <div class="flex items-center space-x-8">
              <NuxtLink
                to="/impressum"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm transition-colors relative group"
              >
                {{ $t("footer.imprint") }}
                <div
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                ></div>
              </NuxtLink>
              <NuxtLink
                to="/datenschutz"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm transition-colors relative group"
              >
                {{ $t("footer.privacy") }}
                <div
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                ></div>
              </NuxtLink>
              <NuxtLink
                to="/kontakt"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm transition-colors relative group"
              >
                {{ $t("footer.contact") }}
                <div
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                ></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useThemeStore } from "~/stores/themeStore";

const { t } = useI18n();
const themeStore = useThemeStore();
const email = ref("");

const subscribeToNewsletter = () => {
  if (email.value) {
    const message =
      t("language.de") === "Deutsch"
        ? `Danke für deine Anmeldung mit ${email.value}!`
        : `Thank you for subscribing with ${email.value}!`;
    alert(message);
    email.value = "";
  }
};

onMounted(() => {
  themeStore.initTheme();
});
</script>
