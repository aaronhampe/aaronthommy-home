<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
    <div class="w-full max-w-md p-8 space-y-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight">Welcome back</h2>
        <p class="mt-2 text-sm text-gray-400">Sign in to your account</p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <UiInput label="Email address" v-model="email" type="email" required placeholder="you@example.com" />
          <UiInput label="Password" v-model="password" type="password" required placeholder="••••••••" />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
          {{ error }}
        </div>

        <UiButton type="submit" class="w-full" :loading="loading">
          Sign in
        </UiButton>
      </form>

      <p class="text-center text-sm text-gray-400">
        Don't have an account?
        <NuxtLink to="/register" class="font-medium text-white hover:underline">Sign up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

async function handleLogin() {
  loading.value = true;
  error.value = '';
  
  try {
    const { user: loggedInUser } = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email: email.value, password: password.value }
    });
    
    // Update global user state
    const user = useState('user');
    user.value = loggedInUser;
    
    navigateTo('/dashboard');
  } catch (e: any) {
    error.value = e.data?.statusMessage || 'Invalid email or password';
  } finally {
    loading.value = false;
  }
}
</script>
