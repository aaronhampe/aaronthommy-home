<template>
  <div class="container mx-auto px-6 py-12 flex flex-col h-[calc(100vh-64px)]">
    <div class="mb-4">
      <h1 class="text-3xl font-bold">Community Chat</h1>
      <p class="text-gray-400 text-sm">Connect with other musicians.</p>
    </div>

    <!-- Chat Window -->
    <div class="flex-grow bg-white/5 border border-white/10 rounded-2xl p-4 overflow-y-auto mb-4 flex flex-col-reverse space-y-4 space-y-reverse" ref="chatContainer">
      <div v-for="msg in messages" :key="msg.id" class="flex items-start space-x-3" :class="{'flex-row-reverse space-x-reverse': msg.user_id === user?.id}">
        <img :src="msg.user_avatar || `https://ui-avatars.com/api/?name=${msg.user_name}&background=random`" class="w-8 h-8 rounded-full" />
        <div class="max-w-[70%]">
          <div class="text-xs text-gray-500 mb-1" :class="{'text-right': msg.user_id === user?.id}">
            {{ msg.user_name }}
          </div>
          <div class="px-4 py-2 rounded-2xl text-sm" 
               :class="msg.user_id === user?.id ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/10 text-gray-200 rounded-tl-none'">
            {{ msg.text }}
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <form @submit.prevent="sendMessage" class="flex space-x-4">
      <UiInput v-model="newMessage" placeholder="Type a message..." class="flex-grow" />
      <UiButton type="submit" :loading="sending" :disabled="!newMessage.trim()">
        Send
      </UiButton>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
});

const user = useState<any>('user');
const messages = ref<any[]>([]);
const newMessage = ref('');
const sending = ref(false);
const chatContainer = ref<HTMLElement | null>(null);

async function fetchMessages() {
  try {
    const data = await $fetch<any>('/api/chat');
    messages.value = data.messages;
  } catch (e) {
    console.error('Failed to fetch messages');
  }
}

async function sendMessage() {
  if (!newMessage.value.trim()) return;
  sending.value = true;
  try {
    await $fetch('/api/chat', {
      method: 'POST',
      body: { text: newMessage.value }
    });
    newMessage.value = '';
    await fetchMessages(); // Refresh immediately
  } catch (e) {
    alert('Failed to send message');
  } finally {
    sending.value = false;
  }
}

let interval: any;

onMounted(() => {
  fetchMessages();
  // Poll every 3 seconds
  interval = setInterval(fetchMessages, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
