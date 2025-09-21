<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="mb-[-2em] relative py-20 md:py-32 overflow-hidden">
      <!-- Dynamic Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-orb-1"></div>
          <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-orb-2"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 mt-20">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Title -->
          <h1 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Follow My
            <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Musical Journey
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Daily guitar covers, piano performances, and behind-the-scenes content across all platforms
          </p>

          <!-- Featured Videos Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Featured Video 1 -->
            <div class="group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 rounded-2xl backdrop-blur-lg border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div class="relative p-6 rounded-2xl group-hover:-translate-y-2 transition-all duration-500">
                <div class="aspect-[9/16] max-w-xs mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <SocialEmbed :videoUrl="featuredVideo.url" :type="featuredVideo.platform" />
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ featuredVideo.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ featuredVideo.description }}</p>
              </div>
            </div>

            <!-- Featured Video 2 -->
            <div class="group relative">
              <div class="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 rounded-2xl backdrop-blur-lg border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div class="relative p-6 rounded-2xl group-hover:-translate-y-2 transition-all duration-500">
                <div class="aspect-[9/16] max-w-xs mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <SocialEmbed :videoUrl="videos[1].urls.instagram" :type="'instagram'" />
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ videos[1].title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ videos[1].description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     <!-- Clean Glass Morphism Separator - Ohne dunkle Ränder -->
    <div class="relative h-16 overflow-hidden">
      <!-- Saubere Glaslinie ohne Blur-Artefakte -->
      <div
        class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent dark:via-gray-500/40"
      ></div>

      <!-- Glaskugeln ohne Blur-Artefakte -->
      <div
        class="absolute top-1/2 left-1/4 w-2 h-2 -mt-1 -ml-1 bg-gray-200/60 dark:bg-gray-400/60 rounded-full animate-float"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-blue-400/60 dark:bg-blue-500/60 rounded-full animate-float-delayed"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-2 h-2 -mt-1 -mr-1 bg-gray-200/60 dark:bg-gray-400/60 rounded-full animate-float"
      ></div>
    </div>


    <!-- Social Platforms Section -->
    <section class="mt-[-2em] py-20 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Connect With Me
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose your preferred platform to stay updated with my latest content
          </p>
        </div>

        <!-- Enhanced Social Platforms Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <!-- TikTok -->
          <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="group relative block">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500">
              <!-- Platform Icon -->
              <div class="w-16 h-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">TikTok</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Quick guitar covers and music tips</p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">Daily uploads</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">@aaronthommy</span>
              </div>
            </div>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="group relative block">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500">
              <!-- Platform Icon -->
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Instagram</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Reels & behind-the-scenes content</p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">Stories & Reels</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">@aaronthommy_</span>
              </div>
            </div>
          </a>

          <!-- YouTube -->
          <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="group relative block">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500">
              <!-- Platform Icon -->
              <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              
              <!-- Content -->
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">YouTube</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">Full performances & tutorials</p>
              
              <!-- Stats -->
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500 dark:text-gray-400">Longer content</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium">@aaronthommy</span>
              </div>
            </div>
          </a>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-16">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
            <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-white/60 dark:border-gray-700/60 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Never Miss a Performance
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Follow on your favorite platform to get notified when I release new covers and content
              </p>
              <div class="flex justify-center space-x-4">
                <a href="https://www.tiktok.com/@aaronthommy" target="_blank" 
                   class="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
                  Follow on TikTok
                </a>
                <a href="/community" 
                   class="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">
                  Join Patreon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from '~/stores/themeStore';
import SocialEmbed from "~/components/SocialEmbed.vue";

const themeStore = useThemeStore();

// Featured Video (nur noch eins)
const featuredVideo = ref({
  title: "November Rain Guitar Solo (Slowed)",
  description: "Ein besonderer Moment - der November Rain Solo Teil, langsamer gespielt für mehr Gefühl und Atmosphäre.",
  category: "guitar-covers",
  date: "2025-04-20",
  platform: "instagram",
  url: "https://www.instagram.com/reel/DGJU5Tlu4kC/"
});

// Nur noch wenige Videos für das cleane Design
const videos = ref([
  {
    id: 1,
    title: "November Rain Guitar Solo (Slowed)",
    description: "Ein besonderer Moment - der November Rain Solo Teil, langsamer gespielt für mehr Gefühl und Atmosphäre.",
    category: "guitar-covers",
    date: "2025-04-20",
    platforms: ["instagram", "tiktok", "youtube"],
    urls: {
      instagram: "https://www.instagram.com/reel/DGJU5Tlu4kC/",
      tiktok: "https://www.tiktok.com/@aaronthommy/video/7472101611305766166",
      youtube: "https://youtube.com/shorts/VS35l758cRE?si=BvQAixkAJJ1FNQkx"
    }
  },
  {
    id: 2,
    title: "Sweet Child O' Mine Guitar Solo",
    description: "Einer der ikonischsten Gitarrensolos aller Zeiten von Guns N' Roses.",
    category: "guitar-covers",
    date: "2025-04-15",
    platforms: ["instagram", "tiktok"],
    urls: {
      instagram: "https://www.instagram.com/reel/DGBc1BDOPMi/",
      tiktok: "https://www.tiktok.com/@aaronthommy/video/7449251378452599051"
    }
  }
]);

onMounted(() => {
  themeStore.initTheme();
});
</script>

<style scoped>
/* Reuse animations from other sections */
@keyframes float-orb-1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -30px); }
}

@keyframes float-orb-2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-float-orb-1 {
  animation: float-orb-1 20s ease-in-out infinite;
}

.animate-float-orb-2 {
  animation: float-orb-2 25s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}
</style>