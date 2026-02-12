<template>
  <div class="min-h-screen bg-black text-white font-sans flex flex-col">
    <!-- Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          aaronthommy
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/music" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Music
          </NuxtLink>
          <NuxtLink to="/dashboard" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Profile
          </NuxtLink>
          <!-- Auth logic will be handled here (Login/Logout button) -->
          <ClientOnly>
            <div v-if="user" class="flex items-center space-x-4">
              <span class="text-xs text-gray-500">{{ user.email }}</span>
              <button @click="logout" class="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                Logout
              </button>
            </div>
            <NuxtLink v-else to="/login" class="text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
              Login
            </NuxtLink>
          </ClientOnly>
        </nav>

        <!-- Mobile Menu Button (Placeholder) -->
        <button class="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/10 py-12 bg-black">
      <div class="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Aaron Thommy. All rights reserved.</p>
        <div class="mt-4 flex justify-center space-x-6">
          <a href="#" class="hover:text-white transition-colors">Instagram</a>
          <a href="#" class="hover:text-white transition-colors">TikTok</a>
          <a href="#" class="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number;
  email: string;
  name?: string;
}

const user = useState<User | null>('user', () => null);

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' });
  user.value = null;
  navigateTo('/login');
}

onMounted(async () => {
  try {
    const { user: currentUser } = await $fetch<{ user: User }>('/api/auth/me');
    user.value = currentUser;
  } catch (e) {
    user.value = null;
  }
});
</script>

<style>
/* Global styles can go here if not in main.css */
body {
  @apply bg-black text-white;
}
</style>
