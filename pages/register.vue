<template>
  <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
    <div class="w-full max-w-md p-8 space-y-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight">Create an account</h2>
        <p class="mt-2 text-sm text-gray-400">Join the community</p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="space-y-4">
          <UiInput label="Full Name" v-model="name" type="text" required placeholder="Aaron Thommy" />
          <UiInput label="Email address" v-model="email" type="email" required placeholder="you@example.com" />
          <UiInput label="Password" v-model="password" type="password" required placeholder="••••••••" />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">
          {{ error }}
        </div>

        <!-- Turnstile -->
        <div class="flex justify-center">
            <NuxtTurnstile v-model="turnstileToken" />
        </div>

        <UiButton type="submit" class="w-full" :loading="loading">
          Create account
        </UiButton>
        
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t border-white/10" />
            </div>
            <div class="relative flex justify-center text-sm">
                <span class="bg-black px-2 text-gray-400">Or continue with</span>
            </div>
        </div>

        <a href="/api/auth/google/login" class="flex w-full items-center justify-center gap-3 rounded-full bg-white text-black px-3 py-3 text-sm font-semibold hover:bg-gray-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
           <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
        </a>
      </form>

      <p class="text-center text-sm text-gray-400">
        Already have an account?
        <NuxtLink to="/login" class="font-medium text-white hover:underline">Sign in</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

const name = ref('');
const email = ref('');
const password = ref('');
const turnstileToken = ref('');
const loading = ref(false);
const error = ref('');

async function handleRegister() {
  loading.value = true;
  error.value = '';

  if (!turnstileToken.value) {
    error.value = 'Please complete the CAPTCHA';
    loading.value = false;
    return;
  }
  
  try {
    const { user: newUser } = await $fetch('/api/auth/register', {
      method: 'POST',
      body: { 
          name: name.value, 
          email: email.value, 
          password: password.value,
          turnstileToken: turnstileToken.value
      }
    });
    
    // Update global user state
    const user = useState('user');
    user.value = newUser;
    
    navigateTo('/dashboard');
  } catch (e: any) {
    error.value = e.data?.statusMessage || 'Registration failed';
    if (e.data?.data) {
       // Zod errors
       error.value = e.data.data[0].message;
    }
    turnstileToken.value = '';
  } finally {
    loading.value = false;
  }
}
</script>
