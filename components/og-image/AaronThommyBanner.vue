<!-- components/og-image/AaronThommyBannerMinimal.vue -->
<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="w-full h-full relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
    <!-- Subtle geometric background -->
    <div class="absolute inset-0 opacity-5">
      <!-- Large circle -->
      <div 
        class="absolute w-64 h-64 border border-white/20 rounded-full" 
        style="top: 50px; right: 80px;"
      ></div>
      <!-- Small circles -->
      <div 
        class="absolute w-16 h-16 border border-blue-400/30 rounded-full" 
        style="top: 60px; left: 60px;"
      ></div>
      <!-- Sound wave lines -->
      <div 
        class="absolute flex items-center" 
        style="left: 400px; top: 200px; gap: 4px;"
      >
        <div class="w-0.5 h-4 bg-blue-400/20 rounded-full"></div>
        <div class="w-0.5 h-8 bg-blue-400/20 rounded-full"></div>
        <div class="w-0.5 h-6 bg-blue-400/20 rounded-full"></div>
        <div class="w-0.5 h-10 bg-blue-400/20 rounded-full"></div>
        <div class="w-0.5 h-3 bg-blue-400/20 rounded-full"></div>
      </div>
    </div>

    <!-- Main content -->
    <div 
      class="absolute w-full h-full flex flex-col justify-center" 
      style="padding: 60px;"
    >
      <!-- Logo and title section centered -->
      <div class="text-center">
        <!-- Logo -->
        <img
          src="https://aaronthommy.com/logo.svg"
          width="120"
          height="120"
          alt="aaronthommy logo"
          class="mx-auto mb-6 drop-shadow-xl"
        />
        
        <!-- Main title -->
        <h1 class="text-6xl font-black text-white leading-tight mb-4">
          {{ title ?? "AaronThommy" }}
        </h1>
        
        <!-- Subtitle -->
        <p v-if="subtitle" class="text-xl text-gray-300 font-light mb-6">
          {{ subtitle }}
        </p>
        
        <!-- Website -->
        <div class="text-blue-400 text-lg font-medium mb-8">
          aaronthommy.com
        </div>
        
       
      </div>
    </div>
  </div>
</template>