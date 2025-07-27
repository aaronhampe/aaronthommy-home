<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!------------------------------------------------------- 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                      Hero Section
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    --------------------------------------------------------->
    <section
      class="mb-[-2em] relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
    >
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <!-- Gradient Orbs with Enhanced Animation -->
        <div
          class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>

        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            class="absolute inset-0"
            style="
              background-image: radial-gradient(
                circle at 1px 1px,
                rgba(59, 130, 246, 0.3) 1px,
                transparent 0
              );
              background-size: 40px 40px;
            "
          ></div>
        </div>
      </div>

      <!-- Floating Record - Enhanced with better positioning and animation -->
      <div
        class="absolute top-20 right-16 hidden lg:block animate-float-record"
      >
        <div class="relative">
          <img
            src="/img/aaronthommy-home-icon-600x600.png"
            alt="Vinyl Record"
            class="w-64 h-64 opacity-60 dark:opacity-40 transition-all duration-700 filter drop-shadow-2xl"
            style="animation: spin 25s linear infinite"
          />
          <!-- Glowing effect behind record -->
          <div
            class="absolute inset-0 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl -z-10 transition-transform duration-700"
          ></div>
        </div>
      </div>

      <!-- Secondary Record for Mobile -->
      <div
        class="absolute top-10 right-6 block lg:hidden animate-float-record-mobile"
      >
        <img
          src="/img/aaronthommy-home-icon-600x600.png"
          alt="Vinyl Record"
          class="w-32 h-32 opacity-40 dark:opacity-30 filter drop-shadow-xl"
          style="animation: spin 20s linear infinite"
        />
      </div>

      <!-- Main Content -->
      <div class="pt-10 container mx-auto px-6 text-center relative z-10">
        <!-- Animated Title with Enhanced Typography -->
        <div class="mb-8 relative">
          <div class="absolute inset-0 blur-3xl opacity-30">
            <h1
              class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-blue-500"
            >
              aaronthommy
            </h1>
          </div>
          <h1
            class="pl-8 relative text-5xl md:text-6xl lg:text-9xl font-black tracking-tighter text-gray-900 dark:text-white animate-slide-up"
          >
            aaron<span
              class="pr-8 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
              >thommy</span
            >
          </h1>
          <!-- Decorative line under title -->
          <div
            class="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full animate-expand"
          ></div>
        </div>

        <!-- Enhanced Subtitle with Typing Effect -->
        <div class="lg:mb-12 md:mb-6 animate-slide-up-delayed">
          <p
            class="text-1xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-light"
          >
            <span
              class="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent"
            >
              Guitarist & Pianist
            </span>
          </p>
          <p
            class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Creating music that moves souls and captures emotions
          </p>
        </div>

        <!-- Enhanced CTA Section -->
        <div class="space-y-8 animate-fade-in-up-delayed">
          <!-- Main CTA Button with Subtle Styling -->
          <div class="relative group">
            <a
              href="https://patreon.com/AaronThommyMusicCircle"
              target="_blank"
              class="relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-xl hover:shadow-2xl border border-white/20"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                />
              </svg>
              <span class="relative text-sm md:text-l lg:text-xl"
                >Join My Music Circle</span
              >
            </a>
          </div>

          <!-- Feature Pills -->
          <div
            class="flex flex-wrap justify-center gap-3 max-w-lg mx-auto lg:pt-10"
          >
            <span
              class="px-4 py-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/30 dark:border-gray-700/60 shadow-lg animate-float-pill-1 hover:scale-105 hover:bg-white/30 hover:dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 cursor-default group"
            >
              <span class="relative z-10">🎸 Exclusive Tabs</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </span>
            <span
              class="px-4 py-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/30 dark:border-gray-700/60 shadow-lg animate-float-pill-2 hover:scale-105 hover:bg-white/30 hover:dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 cursor-default group"
            >
              <span class="relative z-10">🎹 Piano Sheets</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </span>
            <span
              class="px-4 py-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/30 dark:border-gray-700/60 shadow-lg animate-float-pill-3 hover:scale-105 hover:bg-white/30 hover:dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 cursor-default group"
            >
              <span class="relative z-10">🎥 Live Sessions</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </span>
            <span
              class="px-4 py-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/30 dark:border-gray-700/60 shadow-lg animate-float-pill-4 hover:scale-105 hover:bg-white/30 hover:dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 cursor-default group"
            >
              <span class="relative z-10">💿 Tone Tutorials</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </span>
            <span
              class="px-4 py-2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/30 dark:border-gray-700/60 shadow-lg animate-float-pill-5 hover:scale-105 hover:bg-white/30 hover:dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300 cursor-default group"
            >
              <span class="relative z-10">💻 Logic Pro X</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Clean Glass Morphism Separator - Ohne dunkle Ränder -->
    <div class="relative h-16 overflow-hidden">
      <!-- Saubere Glaslinie ohne Blur-Artefakte -->
      <div
        class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent dark:via-gray-500/40"
      ></div>

      <!-- Glaskugeln ohne Blur-Artefakte -->
      <div
        class="absolute top-1/2 left-1/4 w-2 h-2 -mt-1 -ml-1 bg-gray-200/60 dark:bg-gray-400/60 rounded-full animate-float"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-blue-400/60 dark:bg-blue-500/60 rounded-full animate-float-delayed"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-2 h-2 -mt-1 -mr-1 bg-gray-200/60 dark:bg-gray-400/60 rounded-full animate-float"
      ></div>
    </div>

    <!-- Social Proof & Community Section with Flowing Background -->
    <section
      class="mt-[-2em] relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900"
    >
      <!-- Animated Background Elements - Continuous from Hero -->
      <div class="absolute inset-0">
        <!-- Flowing Gradient Orbs - positioned to continue from hero -->
        <div
          class="absolute -top-32 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-slow"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>

        <!-- Grid Pattern Overlay - matching hero -->
        <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <div
            class="absolute inset-0"
            style="
              background-image: radial-gradient(
                circle at 1px 1px,
                rgba(59, 130, 246, 0.3) 1px,
                transparent 0
              );
              background-size: 40px 40px;
            "
          ></div>
        </div>

        <!-- Floating Music Elements -->
        <div
          class="absolute top-1/4 left-1/6 opacity-10 dark:opacity-5 animate-float-note-1"
        >
          <svg
            class="w-8 h-8 text-purple-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
            />
          </svg>
        </div>
        <div
          class="absolute bottom-1/3 right-1/5 opacity-8 dark:opacity-4 animate-float-note-2"
        >
          <svg
            class="w-6 h-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
            />
          </svg>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <!-- Enhanced Header -->
          <div class="mb-8">
            <h2
              class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
            >
              Follow My
              <span
                class="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
              >
                Musical Journey
              </span>
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-expand-delayed"
            ></div>
          </div>

          <p
            class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Get daily inspiration and watch my latest performances across all
            platforms
          </p>
        </div>

        <!-- Enhanced Platform Stats with Glassmorphism -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          <!-- TikTok -->
          <a
            href="https://www.tiktok.com/@aaronthommy"
            target="_blank"
            class="group relative block"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            ></div>
            <div
              class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500"
            >
              <!-- Animated Icon Container -->
              <div
                class="w-20 h-20 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
                  />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                TikTok
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Daily guitar & piano clips
              </p>

              <!-- Enhanced Stats Badge -->
              <div
                class="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-600/30"
              >
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >@aaronthommy</span
                >
              </div>
            </div>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/aaronthommy_"
            target="_blank"
            class="group relative block"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            ></div>
            <div
              class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500"
            >
              <!-- Animated Icon Container -->
              <div
                class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Instagram
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Reels & behind-the-scenes
              </p>

              <!-- Enhanced Stats Badge -->
              <div
                class="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-600/30"
              >
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >@aaronthommy_</span
                >
              </div>
            </div>
          </a>

          <!-- YouTube -->
          <a
            href="https://www.youtube.com/@aaronthommy"
            target="_blank"
            class="group relative block"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            ></div>
            <div
              class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500"
            >
              <!-- Animated Icon Container -->
              <div
                class="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                YouTube
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Tutorials & performances
              </p>

              <!-- Enhanced Stats Badge -->
              <div
                class="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-600/30"
              >
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >@aaronthommy</span
                >
              </div>
            </div>
          </a>
        </div>

        <!-- Enhanced Coming Soon Spotify with Glassmorphism -->
        <div class="text-center mb-16">
          <div class="relative inline-block">
            <div
              class="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-2xl blur-lg"
            ></div>
            <div
              class="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-lg"
            >
              <div class="inline-flex items-center">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"
                    />
                  </svg>
                </div>
                <span
                  class="text-green-600 dark:text-green-400 font-semibold text-lg"
                  >Coming Soon: Spotify Original Music</span
                >
              </div>
            </div>
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
            Got questions about music, tabs, or want to collaborate? I'd love to
            hear from you.
          </p>

          <!-- Contact Options -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div
                class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Email Me
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                For collaborations, custom tabs, or general inquiries
              </p>
              <a
                href="mailto:info@aaronthommy.com"
                class="text-blue-500 hover:text-blue-600 font-medium"
              >
                info@aaronthommy.com
              </a>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div
                class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Join the Community
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Get direct access to me and fellow musicians
              </p>
              <a
                href="https://patreon.com/AaronThommyMusicCircle"
                target="_blank"
                class="text-orange-500 hover:text-orange-600 font-medium"
              >
                Discord Community
              </a>
            </div>
          </div>

          <!-- Final CTA -->
          <div
            class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 class="text-2xl font-bold mb-4">
              Ready to Take Your Playing to the Next Level?
            </h3>
            <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of musicians in the Music Circle and get access to
              exclusive tabs, personal feedback, and be part of a supportive
              musical community.
            </p>
            <a
              href="https://patreon.com/AaronThommyMusicCircle"
              target="_blank"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                />
              </svg>
              Start Your Musical Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "~/stores/languageStore";
import { useThemeStore } from "~/stores/themeStore";

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
      styleSheet.insertRule(
        `
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `,
        styleSheet.cssRules.length
      );

      styleSheet.insertRule(
        `
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `,
        styleSheet.cssRules.length
      );
    } catch (e) {
      // Fallback falls CSS-Regel bereits existiert
    }
  }
});

// SEO Meta Tags
useHead({
  title: "AaronThommy - Guitarist, Pianist & Music Creator",
  meta: [
    {
      name: "description",
      content:
        "Join AaronThommy's Music Circle on Patreon for exclusive guitar tabs, piano sheets, live sessions and personal feedback. Follow my musical journey on TikTok, Instagram and YouTube.",
    },
    {
      name: "keywords",
      content:
        "guitar tabs, piano sheets, music lessons, patreon, guitar covers, piano covers, music tutorials",
    },
    {
      property: "og:title",
      content: "AaronThommy - Guitarist, Pianist & Music Creator",
    },
    {
      property: "og:description",
      content:
        "Join my exclusive Music Circle for guitar tabs, piano sheets, and personal feedback on your playing.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>

<style scoped>
/* Smooth scrolling für bessere UX */
html {
  scroll-behavior: smooth;
}

/* Animation Keyframes für fließende Bewegungen */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(-180deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes expand-delayed {
  0% {
    width: 0;
  }
  100% {
    width: 6rem;
  }
}

@keyframes float-note-1 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(120deg);
  }
  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

@keyframes float-note-2 {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(90deg);
  }
  75% {
    transform: translateY(8px) rotate(270deg);
  }
}

/* Anwenden der Animationen */
.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 18s ease-in-out infinite;
  animation-delay: 3s;
}

.animate-float {
  animation: float-delayed 5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 400% 400%;
  animation: gradient-x 6s ease infinite;
}

.animate-expand-delayed {
  animation: expand-delayed 1s ease-out 0.5s both;
}

.animate-float-note-1 {
  animation: float-note-1 20s ease-in-out infinite;
}

.animate-float-note-2 {
  animation: float-note-2 25s ease-in-out infinite;
  animation-delay: 5s;
}
</style>
