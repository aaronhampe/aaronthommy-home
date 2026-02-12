<template>
  <div class="container mx-auto px-6 py-12">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-2">Tone Tutorials</h1>
      <p class="text-gray-400">Exclusive breakdown of my guitar tones and settings.</p>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
        <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="tutorial in tutorials" :key="tutorial.id" class="bg-gray-900 border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all">
        <!-- Video Embed (Placeholder if just URL) -->
        <div class="aspect-video bg-black relative">
            <iframe 
                v-if="tutorial.video_url.includes('youtube')"
                :src="getEmbedUrl(tutorial.video_url)" 
                class="absolute inset-0 w-full h-full" 
                frameborder="0" 
                allowfullscreen
            ></iframe>
            <div v-else class="absolute inset-0 flex items-center justify-center text-gray-500">
                (Video Placeholder)
            </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ tutorial.title }}</h3>
          <p class="text-sm text-gray-400 mb-4 line-clamp-2">{{ tutorial.description }}</p>
          
          <div class="bg-black/50 p-4 rounded-xl border border-white/5">
            <h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Settings chain</h4>
            <code class="text-sm text-blue-300 font-mono">{{ tutorial.settings }}</code>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="tutorials.length === 0 && !loading" class="text-center text-gray-500 py-12">
      No tutorials available yet. Stay tuned!
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
});

const tutorials = ref<any[]>([]);
const loading = ref(true);

function getEmbedUrl(url: string) {
    // Basic YouTube ID extraction logic
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? 'https://www.youtube.com/embed/' + match[2]
      : url;
}

onMounted(async () => {
    try {
        const data = await $fetch<any>('/api/tutorials');
        tutorials.value = data.tutorials;
    } catch (e) {
        console.error('Failed to fetch tutorials');
    } finally {
        loading.value = false;
    }
});
</script>
