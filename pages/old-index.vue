<template>
  <section class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero-Bereich mit großem Statement -->
    <div class="container mx-auto px-4 py-16 md:py-24">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
        {{ $t('home.hero.subtitle') }}
      </p>
    </div>
    
    <!-- Grid-Layout für Boxen -->
    <div class="container mx-auto px-4 pb-16 relative">
      <!-- Desktop Record (hidden on mobile) -->
      <div class="hidden md:block">
        <SpinningRecord position="right" />
      </div>
      
      <!-- Mobile Record (hidden on desktop) -->
      <div class="block md:hidden relative">
        <SpinningRecord position="top" />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <!-- Große Feature-Box -->
        <BaseBox 
          size="L" 
          :title="$t('home.welcome.title')" 
          :text="$t('home.welcome.text')"
          link="/community"
          :linkText="$t('home.welcome.button')"
          bgColor="bg-gray-100 dark:bg-gray-800"
          class="md:col-span-2"
        />
        
        <!-- Quadratische Box für Social Media Highlights mit Icon -->
        <BaseBox 
          size="Q" 
          :title="$t('home.social.title')" 
          :text="$t('home.social.text')"
          link="/social"
          :linkText="$t('home.social.button')"
          bgColor="bg-blue-50 dark:bg-blue-900/30"
        >
          <div class="absolute top-6 right-6 opacity-20 dark:opacity-10">
            <!--<img src="/img/social-icon-150x150.png" alt="Social Media Icon" class="w-24 h-24" />-->
          </div>
        </BaseBox>
        
        <!-- Rest of your boxes remain unchanged -->
        <BaseBox 
          size="M" 
          :title="$t('home.courses.title')" 
          :text="$t('home.courses.text')"
          link="/offers"
          :linkText="$t('home.courses.button')"
          bgColor="bg-indigo-50 dark:bg-indigo-900/30"
        >
          <div class="absolute bottom-0 right-0 opacity-30 dark:opacity-20">
            <img src="/img/guitar-icon-200x300.png" alt="Gitarre" class="w-32 h-48" />
          </div>
        </BaseBox>
        
        <BaseBox 
          size="M" 
          :title="$t('home.equipment.title')" 
          :text="$t('home.equipment.text')"
          link="/comingsoon"
          :linkText="$t('home.equipment.button')"
          bgColor="bg-gray-100 dark:bg-gray-800"
        >
        </BaseBox>
        
        <BaseBox 
          size="M" 
          :title="$t('home.video.title')" 
          :text="$t('home.video.text')"
          link="https://youtube.com"
          :linkText="$t('home.video.button')"
          bgColor="bg-red-50 dark:bg-red-900/20"
          class="md:col-span-1 lg:col-span-1"
        >
          <div class="absolute inset-0 overflow-hidden rounded-xl">
            <img 
              src="/img/video-thumbnail-500x300.jpg" 
              alt="Video Thumbnail" 
              class="w-full h-full object-cover opacity-30 dark:opacity-20"
            />
          </div>
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-14 h-14 bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-red-600 dark:text-red-500">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
              </svg>
            </div>
          </div>
        </BaseBox>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '~/stores/languageStore';
import { useThemeStore } from '~/stores/themeStore';
import BaseBox from '~/components/BaseBox.vue';
import SpinningRecord from '~/components/SpinningRecord.vue';

const { t } = useI18n();
const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();
  
  // Themeeinstellungen initialisieren
  themeStore.initTheme();
});
</script>