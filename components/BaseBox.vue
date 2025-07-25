<template>
  <component
    :is="link ? NuxtLink : 'div'"
    :to="link || undefined"
    :class="[
      'relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:shadow-gray-800',
      bgColor || 'bg-white dark:bg-gray-800',
      sizeClasses,
      className
    ]"
    :style="boxStyle"
  >
    <!-- Hintergrundbild mit Overlay wenn vorhanden -->
    <div v-if="bgImage" class="absolute inset-0 w-full h-full">
      <img :src="bgImage" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
    
    <!-- Inhalt -->
    <div class="relative z-10 p-6 md:p-8 h-full flex flex-col">
      <h2 
        v-if="title" 
        class="font-bold mb-4" 
        :class="[
          titleClass || 'text-2xl md:text-3xl',
          bgImage ? 'text-white' : 'text-gray-900 dark:text-white'
        ]" 
        v-html="title"
      ></h2>
      
      <p 
        v-if="text" 
        class="mb-6" 
        :class="[
          textClass || 'text-base md:text-lg',
          bgImage ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'
        ]"
      >
        {{ text }}
      </p>
      
      <div class="mt-auto" v-if="link && linkText">
        <span
          class="inline-flex items-center group"
          :class="bgImage ? 'text-white' : 'text-blue-600 dark:text-blue-400'"
        >
          {{ linkText }}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
            fill="none" viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      
      <slot></slot>
    </div>
  </component>
</template>

<script setup>
import { computed } from "vue";
import { NuxtLink } from "#components"; // oder 'vue-router' je nach Setup

const props = defineProps({
  title: { type: String, default: "" },
  text: { type: String, default: "" },
  link: { type: String, default: "" },
  linkText: { type: String, default: "Mehr erfahren" },
  size: { type: String, default: "M" },
  bgImage: { type: String, default: "" },
  bgColor: { type: String, default: "" },
  customHeight: { type: String, default: "" },
  titleClass: { type: String, default: "" },
  textClass: { type: String, default: "" },
  className: { type: String, default: "" }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'S': return 'h-48 md:h-56';
    case 'M': return 'h-64 md:h-72';
    case 'L': return 'h-80 md:h-96';
    case 'Q': return 'aspect-square';
    default:  return 'h-64 md:h-72';
  }
});

const boxStyle = computed(() => props.customHeight ? { height: props.customHeight } : {});
</script>
