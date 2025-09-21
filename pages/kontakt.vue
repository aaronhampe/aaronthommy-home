<template>
  <div class="min-h-screen relative overflow-hidden pt-40">
    <!-- Enhanced Background with Animated Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20">
      <!-- Animated Background Orbs -->
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float-1"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-2"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <!-- Grid Pattern Overlay -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <!-- Floating Musical Elements -->
      <div class="absolute top-20 left-20 opacity-10 dark:opacity-5 animate-float-note-1">
        <svg class="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
      <div class="absolute bottom-20 right-20 opacity-10 dark:opacity-5 animate-float-note-2">
        <svg class="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="max-w-4xl mx-auto">
        
        <!-- Enhanced Header Section -->
        <div class="text-center mb-16 animate-fade-in-up">
          <!-- Icon with Glassmorphism -->
          <div class="relative group mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div class="relative inline-flex items-center justify-center w-20 h-20 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl group-hover:scale-105 transition-all duration-500">
              <svg class="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>

          <!-- Enhanced Title -->
          <h1 class="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">Connect</span>
          </h1>
          
          <!-- Motivational Subtitle -->
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to take your musical journey to the next level? I'd love to hear from you and help you achieve your goals.
          </p>
          
          <!-- Trust Indicators -->
          <div class="flex justify-center items-center space-x-8 mb-12">
            <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">24h Response</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
              <span class="font-medium">Secure & Private</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <svg class="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="font-medium">Personal Touch</span>
            </div>
          </div>
        </div>

        <!-- Enhanced Contact Form with Advanced Glassmorphism -->
        <div class="relative group animate-slide-up-delayed">
          <!-- Enhanced Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
          
          <div class="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl p-8 md:p-12">
            
            <!-- Form Header -->
            <div class="text-center mb-10">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Send Me a Message
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Whether you have questions, collaboration ideas, or just want to say hello - I'm here to listen.
              </p>
            </div>

            <form @submit.prevent="sendMessage" class="space-y-8">
              <!-- Enhanced Input Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Field -->
                <div class="group">
                  <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Your Name *
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="name"
                      v-model="contactForm.name"
                      class="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60"
                      :class="{ 'ring-2 ring-red-500/50 border-red-500/50': errors.name }"
                      placeholder="Enter your full name"
                      required
                    />
                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <p v-if="errors.name" class="text-red-500 text-sm mt-2 font-medium">{{ errors.name }}</p>
                </div>

                <!-- Email Field -->
                <div class="group">
                  <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      v-model="contactForm.email"
                      class="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60"
                      :class="{ 'ring-2 ring-red-500/50 border-red-500/50': errors.email }"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <p v-if="errors.email" class="text-red-500 text-sm mt-2 font-medium">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Subject Field -->
              <div class="group">
                <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Subject *
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="subject"
                    v-model="contactForm.subject"
                    class="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-gray-800/60"
                    :class="{ 'ring-2 ring-red-500/50 border-red-500/50': errors.subject }"
                    placeholder="What would you like to discuss?"
                    required
                  />
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <p v-if="errors.subject" class="text-red-500 text-sm mt-2 font-medium">{{ errors.subject }}</p>
              </div>

              <!-- Message Field -->
              <div class="group">
                <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Your Message *
                </label>
                <div class="relative">
                  <textarea
                    id="message"
                    v-model="contactForm.message"
                    rows="6"
                    class="w-full px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 resize-none group-hover:bg-white/60 dark:group-hover:bg-gray-800/60"
                    :class="{ 'ring-2 ring-red-500/50 border-red-500/50': errors.message }"
                    placeholder="Tell me about your musical goals, questions, or collaboration ideas..."
                    required
                  ></textarea>
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <p v-if="errors.message" class="text-red-500 text-sm mt-2 font-medium">{{ errors.message }}</p>
              </div>

              <!-- Privacy Checkbox -->
              <div class="flex items-start space-x-4">
                <div class="flex items-center h-6 mt-1">
                  <input
                    id="privacy"
                    type="checkbox"
                    v-model="contactForm.privacy"
                    class="w-5 h-5 text-blue-600 bg-white/50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 transition-all duration-300"
                    :class="{ 'ring-2 ring-red-500/50 border-red-500/50': errors.privacy }"
                    required
                  />
                </div>
                <div class="text-sm">
                  <label for="privacy" class="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I agree to the <a href="/datenschutz" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">privacy policy</a> and consent to my information being used to contact me.
                  </label>
                  <p v-if="errors.privacy" class="text-red-500 text-sm mt-1 font-medium">{{ errors.privacy }}</p>
                </div>
              </div>

              <!-- Enhanced Submit Button -->
              <div class="pt-4">
                <div class="relative group">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"></div>
                  <button
                    type="submit"
                    class="relative w-full py-5 px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white text-lg font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl border border-white/20 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="isSubmitting"
                  >
                    <!-- Shimmer Effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <div v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin h-6 w-6 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span class="relative">Sending Message...</span>
                    </div>
                    <div v-else class="flex items-center justify-center">
                      <span class="relative">Send Message</span>
                      <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </form>

            <!-- Enhanced Status Messages -->
            <div v-if="showSuccess" class="mt-8 p-6 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-700 dark:text-green-300 rounded-2xl animate-fade-in">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Message Sent Successfully!</h3>
                  <p class="text-sm mt-1">{{ successMessage }}</p>
                </div>
              </div>
            </div>

            <div v-if="showError" class="mt-8 p-6 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-700 dark:text-red-300 rounded-2xl animate-fade-in">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold">Oops! Something went wrong</h3>
                  <p class="text-sm mt-1">{{ errorMessage }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Social Media Section -->
        <div class="mt-20 text-center animate-fade-in-up-delayed">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Or Connect on Social Media
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Follow my daily musical journey and get inspired by exclusive content, behind-the-scenes moments, and live performances.
          </p>
          
          <div class="flex justify-center space-x-6">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="group relative">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-black/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative w-16 h-16 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30 dark:border-gray-700/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/20">
                <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
              </div>
            </a>
            
            <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="group relative">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative w-16 h-16 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30 dark:border-gray-700/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-purple-500/20 group-hover:to-pink-500/20">
                <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            
            <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="group relative">
              <div class="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative w-16 h-16 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/30 dark:border-gray-700/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                <svg class="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-red-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Call-to-Action for Patreon -->
        <div class="mt-20 text-center animate-fade-in-up-delayed">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div class="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12 shadow-2xl">
              <h3 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Want <span class="text-orange-600 dark:text-orange-400">Exclusive Access?</span>
              </h3>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join my Music Circle on Patreon for exclusive tabs, behind-the-scenes content, personal feedback, and monthly live sessions.
              </p>
              <a 
                href="https://patreon.com/AaronThommyMusicCircle" 
                target="_blank"
                class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"/>
                </svg>
                Join the Music Circle
                <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '~/stores/themeStore'

const themeStore = useThemeStore()

// Form Data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

// UI State
const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const successMessage = ref('Thank you for your message! I will get back to you within 24-48 hours.')
const errorMessage = ref('Something went wrong. Please try again or contact me directly via social media.')

// Form Validation
const validateForm = () => {
  errors.value = {}
  let valid = true

  if (!contactForm.value.name.trim()) {
    errors.value.name = 'Please enter your name'
    valid = false
  }
  
  if (!contactForm.value.email.trim()) {
    errors.value.email = 'Please enter your email'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.value.email)) {
    errors.value.email = 'Please enter a valid email address'
    valid = false
  }
  
  if (!contactForm.value.subject.trim()) {
    errors.value.subject = 'Please enter a subject'
    valid = false
  }
  
  if (!contactForm.value.message.trim()) {
    errors.value.message = 'Please enter your message'
    valid = false
  } else if (contactForm.value.message.trim().length < 10) {
    errors.value.message = 'Please enter a message with at least 10 characters'
    valid = false
  }
  
  if (!contactForm.value.privacy) {
    errors.value.privacy = 'Please accept the privacy policy'
    valid = false
  }

  return valid
}

// Send Message
const sendMessage = async (e) => {
  if (!validateForm()) return

  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    const formData = new FormData()
    formData.append('name', contactForm.value.name)
    formData.append('email', contactForm.value.email)
    formData.append('subject', contactForm.value.subject)
    formData.append('message', contactForm.value.message)

    const response = await fetch('https://formspree.io/f/xdkgbqgd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      showSuccess.value = true
      contactForm.value = { name: '', email: '', subject: '', message: '', privacy: false }
    } else {
      showError.value = true
    }
  } catch (err) {
    console.error('Error sending form:', err)
    showError.value = true
  } finally {
    isSubmitting.value = false
    if (showSuccess.value) {
      setTimeout(() => (showSuccess.value = false), 8000)
    }
  }
}

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
/* Custom Animations */
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-30px, -40px) rotate(120deg); }
  66% { transform: translate(40px, -20px) rotate(240deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(50px, -30px) rotate(-120deg); }
  66% { transform: translate(-30px, 40px) rotate(-240deg); }
}

@keyframes float-note-1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
}

@keyframes float-note-2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-12deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fade-in-up {
  from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes slide-up-delayed {
  0% { 
    opacity: 0; 
    transform: translateY(50px); 
  }
  60% { 
    opacity: 0; 
    transform: translateY(50px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fade-in-up-delayed {
  0% { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  70% { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply Animations */
.animate-float-1 { animation: float-1 25s ease-in-out infinite; }
.animate-float-2 { animation: float-2 30s ease-in-out infinite; }
.animate-float-note-1 { animation: float-note-1 8s ease-in-out infinite; }
.animate-float-note-2 { animation: float-note-2 6s ease-in-out infinite 2s; }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-gradient-x { 
  background-size: 400% 400%; 
  animation: gradient-x 3s ease infinite; 
}
.animate-fade-in-up { animation: fade-in-up 1s ease-out; }
.animate-slide-up-delayed { animation: slide-up-delayed 1.5s ease-out; }
.animate-fade-in-up-delayed { animation: fade-in-up-delayed 2s ease-out; }
.animate-fade-in { animation: fade-in 0.5s ease-out; }

/* Enhanced Glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(24px) saturate(180%);
}

.backdrop-blur-lg {
  backdrop-filter: blur(16px) saturate(160%);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px) saturate(120%);
}

/* Performance Optimizations */
.animate-float-1,
.animate-float-2 {
  will-change: transform;
}

.group:hover {
  will-change: transform;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .animate-float-note-1,
  .animate-float-note-2 {
    display: none;
  }
}

/* Dark Mode Enhancements */
@media (prefers-color-scheme: dark) {
  .backdrop-blur-xl,
  .backdrop-blur-lg,
  .backdrop-blur-sm {
    backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
  }
}
</style>