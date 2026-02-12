<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center">
      <!-- Background Abstract Elements -->
      <div class="absolute inset-0 pointer-events-none">
         <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
         <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 relative">
          <span class="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">aaron</span>
          <span class="block text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600 -mt-2 md:-mt-4">thommy</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto mb-10">
          Guitarist. Pianist. Producer. <br />
          <span class="text-white font-medium">Creating soundscapes for the modern era.</span>
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <NuxtLink to="/music" class="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
            Listen Now
          </NuxtLink>
           <NuxtLink to="/register" class="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
            Join the Circle
          </NuxtLink>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>

    <!-- Social Proof / Links -->
    <section class="py-24 bg-black border-t border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <a href="https://tiktok.com/@aaronthommy" target="_blank" class="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">TikTok</h3>
                <p class="text-gray-500">Short daily riffs & ideas</p>
            </a>
            
            <a href="https://instagram.com/aaronthommy_" target="_blank" class="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Instagram</h3>
                <p class="text-gray-500">Behind the scenes</p>
            </a>

            <a href="https://youtube.com/@aaronthommy" target="_blank" class="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-all">
                <h3 class="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">YouTube</h3>
                <p class="text-gray-500">Full performances & tutorials</p>
            </a>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
