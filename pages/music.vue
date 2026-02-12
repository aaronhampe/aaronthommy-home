<template>
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold tracking-tighter mb-4">Discography</h1>
      <p class="text-gray-400 max-w-2xl mx-auto">Explore my latest releases, covers, and original compositions.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Logic Pro X Experiments -->
      <div class="group relative aspect-square overflow-hidden rounded-3xl bg-gray-900 border border-white/10">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60"></div>
        <img src="/img/aaronthommy-home-icon-600x600.png" alt="Album Art" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70" />
        <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
          <p class="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-wider">Original</p>
          <h3 class="text-2xl font-bold mb-1">Tone Experiments</h3>
          <p class="text-gray-400 text-sm mb-4">Ambient textures and guitar loops</p>
          <button class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-0.5">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

       <!-- Piano Works -->
      <div class="group relative aspect-square overflow-hidden rounded-3xl bg-gray-900 border border-white/10">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60"></div>
        <!-- Placeholder for now -->
        <div class="w-full h-full bg-gray-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 3-2 3 2zm0 0v-8" />
            </svg>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
          <p class="text-xs font-semibold text-purple-400 mb-1 uppercase tracking-wider">Piano</p>
          <h3 class="text-2xl font-bold mb-1">Night Sessions</h3>
          <p class="text-gray-400 text-sm mb-4">Improvisations on keys</p>
           <button class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-0.5">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <!-- More items... -->
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script>
