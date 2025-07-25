<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div class="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <!-- Spinning Record -->
      <div class="absolute top-10 right-10 hidden md:block">
        <div class="w-48 h-48 rounded-full border-8 border-gray-300 dark:border-gray-700 animate-spin-slow opacity-20">
          <div class="w-full h-full rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center">
            <div class="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-900"></div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <!-- Main Title -->
        <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          aaron<span class="text-blue-500 dark:text-blue-400">thommy</span>
        </h1>
        
        <!-- Subtitle -->
        <p class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Guitarist & Pianist creating music that moves souls
        </p>
        
        <!-- Instrument Icons -->
        <div class="flex justify-center space-x-8 mb-12">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
              <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 7v4c0 .55.45 1 1 1h2v11h4V12h4v11h4V12h2c.55 0 1-.45 1-1V7l-9-6z"/>
              </svg>
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-400">Guitar</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
              <svg class="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM4 16V8h16v8H4z"/>
                <path d="M6 14h2v-4H6v4zm3 0h2v-4H9v4zm3 0h2v-4h-2v4zm3 0h2v-4h-2v4zm3 0h2v-4h-2v4z"/>
              </svg>
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-400">Piano</span>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="space-y-4">
          <a 
            href="https://patreon.com/AaronThommyMusicCircle"
            target="_blank"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"/>
            </svg>
            Join My Music Circle
          </a>
          
          <!-- Social Media Quick Links -->
          <div class="flex justify-center space-x-4 pt-10">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="text-gray-500 hover:text-black transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="text-gray-500 hover:text-pink-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="text-gray-500 hover:text-red-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
    
    <!-- Main Patreon CTA Section -->
    <section class="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute inset-0 opacity-10 dark:opacity-5">
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Patreon Logo -->
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="#F96854"/>
            </svg>
          </div>

          <h2 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Join the <span class="text-orange-600 dark:text-orange-400">Music Circle</span>
          </h2>
          
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Become part of my exclusive Patreon community and get access to guitar tabs, 
            behind-the-scenes content, monthly live sessions, and personal feedback on your playing.
          </p>

          <!-- Membership Tiers Preview -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <!-- Basic Tier -->
            <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Lover</h3>
              <p class="text-2xl font-bold text-orange-600 mb-4">€3<span class="text-sm text-gray-500">/month</span></p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  All Guitar Tabs
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Discord Community
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Patron-Only Posts
                </li>
              </ul>
            </div>

            <!-- Pro Tier - Featured -->
            <div class="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 rounded-xl p-6 text-left border-2 border-orange-400 relative">
              <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span class="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Creator</h3>
              <p class="text-2xl font-bold text-orange-600 mb-4">€18<span class="text-sm text-gray-500">/month</span></p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Everything from Music Lover
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Behind-the-Scenes Content
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Early Video Access
                </li>
              </ul>
            </div>

            <!-- Master Tier -->
            <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Master</h3>
              <p class="text-2xl font-bold text-orange-600 mb-4">€90<span class="text-sm text-gray-500">/month</span></p>
              <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Everything from Music Creator
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Monthly Live Sessions
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Personal Feedback
                </li>
              </ul>
            </div>
          </div>

          <!-- Main CTA Button -->
          <a 
            href="https://patreon.com/AaronThommyMusicCircle"
            target="_blank"
            class="inline-flex items-center px-12 py-5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl font-bold rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"/>
            </svg>
            Become a Patron Today
          </a>
          
          <p class="text-gray-600 dark:text-gray-400 mt-4">Join 100+ musicians already in the community</p>
        </div>
      </div>
    </section>

    <!-- Music Showcase Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Latest <span class="text-blue-500">Performances</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From iconic guitar solos to beautiful piano pieces - discover my musical journey
          </p>
        </div>

        <!-- Featured Video Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Video Card 1 -->
          <div class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">November Rain Solo</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">November Rain (Slowed)</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Guns N' Roses • Guitar Solo</p>
            </div>
          </div>

          <!-- Video Card 2 -->
          <div class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">Sweet Child O' Mine</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sweet Child O' Mine Solo</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Guns N' Roses • Guitar Solo</p>
            </div>
          </div>

          <!-- Video Card 3 -->
          <div class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div class="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">Hotel California</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hotel California Solo</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Eagles • Guitar Solo</p>
            </div>
          </div>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12">
          <a 
            href="/social" 
            class="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View All Performances
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    

    <!-- Social Proof & Community Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Follow My Musical Journey
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get daily inspiration and watch my latest performances across all platforms
          </p>
        </div>

        <!-- Platform Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="group">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">TikTok</h3>
              <p class="text-gray-600 dark:text-gray-300">Daily guitar & piano clips</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">@aaronthommy</p>
            </div>
          </a>

          <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="group">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Instagram</h3>
              <p class="text-gray-600 dark:text-gray-300">Reels & behind-the-scenes</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">@aaronthommy_</p>
            </div>
          </a>

          <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="group">
            <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2">
              <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">YouTube</h3>
              <p class="text-gray-600 dark:text-gray-300">Tutorials & performances</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">@aaronthommy</p>
            </div>
          </a>
        </div>

        <!-- Coming Soon: Spotify -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full">
            <svg class="w-6 h-6 text-green-600 dark:text-green-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span class="text-green-600 dark:text-green-400 font-medium">Coming Soon: Spotify Original Music</span>
          </div>
        </div>

        <!-- Call to Action for Social -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Never Miss a Performance
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow me on all platforms to get daily musical content and be the first to know about new releases and exclusive Patreon content.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
              </svg>
              Follow on TikTok
            </a>
            <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
            <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Footer Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Got questions about music, tabs, or want to collaborate? I'd love to hear from you.
          </p>

          <!-- Contact Options -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Me</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">For collaborations, custom tabs, or general inquiries</p>
              <a href="mailto:info@aaronthommy.com" class="text-blue-500 hover:text-blue-600 font-medium">
                info@aaronthommy.com
              </a>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Join the Community</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Get direct access to me and fellow musicians</p>
              <a href="https://patreon.com/AaronThommyMusicCircle" target="_blank" class="text-orange-500 hover:text-orange-600 font-medium">
                Discord Community
              </a>
            </div>
          </div>

          <!-- Final CTA -->
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">Ready to Take Your Playing to the Next Level?</h3>
            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of musicians in the Music Circle and get access to exclusive tabs, 
              personal feedback, and be part of a supportive musical community.
            </p>
            <a 
              href="https://patreon.com/AaronThommyMusicCircle"
              target="_blank"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"/>
              </svg>
              Start Your Musical Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Footer -->
    <footer class="bg-white dark:bg-gray-800 py-8 border-t border-gray-100 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 Aaron Thommy. All rights reserved.
          </div>
          <div class="flex space-x-6">
            <a href="/impressum" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm">
              Imprint
            </a>
            <a href="/datenschutz" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm">
              Privacy
            </a>
            <a href="/kontakt" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '~/stores/languageStore';
import { useThemeStore } from '~/stores/themeStore';

const { t } = useI18n();
const languageStore = useLanguageStore();
const themeStore = useThemeStore();

onMounted(() => {
  // Spracheinstellungen initialisieren
  languageStore.initLocale();
  
  // Theme-Einstellungen initialisieren
  themeStore.initTheme();

  // CSS für langsame Rotation hinzufügen
  if (document.styleSheets && document.styleSheets[0]) {
    const styleSheet = document.styleSheets[0];
    try {
      styleSheet.insertRule(`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `, styleSheet.cssRules.length);
      
      styleSheet.insertRule(`
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `, styleSheet.cssRules.length);
    } catch (e) {
      // Fallback falls CSS-Regel bereits existiert
    }
  }
});

// SEO Meta Tags
useHead({
  title: 'AaronThommy - Guitarist, Pianist & Music Creator',
  meta: [
    {
      name: 'description',
      content: 'Join AaronThommy\'s Music Circle on Patreon for exclusive guitar tabs, piano sheets, live sessions and personal feedback. Follow my musical journey on TikTok, Instagram and YouTube.'
    },
    {
      name: 'keywords',
      content: 'guitar tabs, piano sheets, music lessons, patreon, guitar covers, piano covers, music tutorials'
    },
    {
      property: 'og:title',
      content: 'AaronThommy - Guitarist, Pianist & Music Creator'
    },
    {
      property: 'og:description',
      content: 'Join my exclusive Music Circle for guitar tabs, piano sheets, and personal feedback on your playing.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});
</script>

<style scoped>
/* Smooth scrolling für bessere UX */
html {
  scroll-behavior: smooth;
}

/* Custom Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

/* Hover Effekte */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:-translate-y-2 {
  transform: translateY(-0.5rem);
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
  .animate-spin-slow {
    display: none;
  }
}
</style>