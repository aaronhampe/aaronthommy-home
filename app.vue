<script setup>
import { onMounted } from "vue";
import { useLanguageStore } from "~/stores/languageStore";
import { useThemeStore } from "~/stores/themeStore";


useHead({
  title: "aaronthommy - guitarist, pianist & composer",
  meta: [
    {
      name: "description",
      content:
        "Clips, Covers, Kompositionen auf der Gitarre und dem Klavier.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/aaronthommy-home-icon.ico" }],
});

const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();

  // Theme-Einstellungen initialisieren
  themeStore.initTheme();

  document.documentElement.classList.add('dark')
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <NuxtLayout>
      <AppHeader />
      <CookieControl locale="de" />    <!-- Banner + Modal -->
      <NuxtPage />
      <AppFooter >
        <button @click="useCookieControl().openModal()" class="underline">
          Cookie-Einstellungen
        </button>
      </AppFooter>
    </NuxtLayout>
  </div>
</template>
