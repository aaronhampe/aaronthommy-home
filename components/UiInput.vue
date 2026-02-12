<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-400">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="block w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0 transition-colors sm:text-sm"
        v-bind="$attrs"
      />
    </div>
    <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>
