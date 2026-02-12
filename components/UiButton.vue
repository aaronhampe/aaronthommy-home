<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
      variant === 'primary' 
        ? 'bg-white text-black hover:bg-gray-200 focus:ring-white' 
        : 'bg-transparent text-white border border-white/20 hover:bg-white/10 focus:ring-white/50',
      loading ? 'opacity-75 cursor-not-allowed' : '',
    ]"
    :disabled="loading"
    v-bind="$attrs"
  >
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-3 h-4 w-4 text-current" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
