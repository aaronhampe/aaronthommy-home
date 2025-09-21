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
        class="absolute top-40 right-16 hidden lg:block animate-float-record"
      >
        <div class="relative">
          <NuxtImg
            src="/img/aaronthommy-home-icon-600x600.png"
            alt="Vinyl Record aaronthommy"
            preload
            sizes="xs:100vw md:50vw lg:800px"
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
        class="absolute top-20 right-6 block lg:hidden animate-float-record-mobile"
      >
        <NuxtImg
          src="/img/aaronthommy-home-icon-600x600.png"
          alt="Vinyl Record aaronthommy"
          preload
          sizes="xs:100vw md:50vw lg:800px"
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
              class="pl-1 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-blue-500"
            >
              aaronthommy
            </h1>
          </div>
          <h1
            class="relative text-5xl md:text-6xl lg:text-9xl font-black tracking-tighter text-gray-900 dark:text-white animate-slide-up"
          >
            aaron<span
              class="pr-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
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
            class="text-1xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-bold tracking-tight"
          >
            <span
              class="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent"
            >
              Guitarist & Pianist
            </span>
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

    <!------------------------------------------------------- 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                Main Patreon CTA Section
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    --------------------------------------------------------->

    <!-- Enhanced Patreon CTA Section -->
    <section
      class="mt-[-2em] mb-[-2em] relative py-32 overflow-hidden"
      id="patreon-cta"
    >
      <!-- Dynamic Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-purple-900/20"
      >
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <!-- Large Orbs with Enhanced Animation -->
          <div
            class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-float-orb-1"
          ></div>
          <div
            class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-400/25 to-pink-400/25 rounded-full blur-3xl animate-float-orb-2"
          ></div>
          <div
            class="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-orb-3"
          ></div>

          <!-- Grid Pattern Overlay -->
          <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
            <div
              class="absolute inset-0"
              style="
                background-image: radial-gradient(
                  circle at 2px 2px,
                  rgba(245, 101, 101, 0.4) 1px,
                  transparent 0
                );
                background-size: 50px 50px;
              "
            ></div>
          </div>

          <!-- Floating Music Notes -->
          <div
            class="absolute top-1/4 left-1/4 opacity-20 dark:opacity-10 animate-float-note-1"
          >
            <svg
              class="w-8 h-8 text-orange-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
              />
            </svg>
          </div>
          <div
            class="absolute top-3/4 right-1/3 opacity-15 dark:opacity-8 animate-float-note-2"
          >
            <svg
              class="w-6 h-6 text-red-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Enhanced Header Section -->
          <div class="text-center mb-20">
            <!-- Animated Patreon Logo -->
            <div class="relative group mb-8">
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-700"
              ></div>
              <div
                class="relative inline-flex items-center justify-center w-24 h-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 group-hover:scale-105 transition-all duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                    fill="url(#patreon-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="patreon-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style="stop-color: #f96854" />
                      <stop offset="100%" style="stop-color: #ff5722" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- Enhanced Title with Staggered Animation -->
            <div class="mb-8 animate-fade-in-sequence">
              <h2
                class="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
              >
                Join the
                <span class="relative inline-block">
                  <span
                    class="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
                    >Music Circle</span
                  >
                  <div
                    class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-expand-delayed"
                  ></div>
                </span>
              </h2>

              <!-- Enhanced Subtitle -->
              <p
                class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Become part of my
                <span class="font-semibold text-orange-600 dark:text-orange-400"
                  >exclusive Patreon community</span
                >
                and unlock a world of musical content, personalized feedback,
                and direct access to my creative process.
              </p>
            </div>
          </div>

          <!-- Enhanced Main CTA -->
          <div class="text-center mb-16">
            <div class="relative group inline-block">
              <!-- Enhanced Glow Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              ></div>

              <a
                href="https://patreon.com/AaronThommyMusicCircle"
                target="_blank"
                class="relative inline-flex items-center px-8 py-4 md:px-16 md:py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-lg md:text-2xl font-bold md:font-black rounded-2xl md:rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden group"
              >
                <!-- Shimmer Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800"
                ></div>

                <!-- Patreon Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                  />
                </svg>

                <span class="relative whitespace-nowrap"
                  >Become a Patron Today</span
                >

                <!-- Arrow Icon -->
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 ml-3 md:ml-4 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Enhanced Single Membership Tier -->
          <div class="flex justify-center mb-16">
            <div class="group relative max-w-md w-full">
              <!-- Enhanced Glow Background -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-red-400/20 rounded-3xl blur-xl group-hover:scale-110 group-hover:blur-2xl transition-all duration-700"
              ></div>

              <!-- Main Card -->
              <div
                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-white/60 dark:border-gray-700/60 shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                <!-- Popular Badge -->

                <div class="p-10">
                  <!-- Header -->
                  <div class="text-center mb-8">
                    <div class="flex items-center justify-center mb-4">
                      <div
                        class="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3
                      class="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      Music Circle
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Join my exclusive community
                    </p>
                  </div>

                  <!-- Pricing -->
                  <div class="text-center mb-8">
                    <div class="flex items-baseline justify-center">
                      <span
                        class="text-6xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                      >
                        €5
                      </span>
                      <span
                        class="text-xl text-gray-500 dark:text-gray-400 ml-2"
                      >
                        /month
                      </span>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Cancel anytime • Instant access
                    </p>
                  </div>

                  <!-- Enhanced Features List -->
                  <ul class="space-y-5 mb-10">
                    <li class="flex items-start group/item">
                      <div
                        class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover/item:scale-110 transition-transform duration-200"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <span
                          class="text-gray-900 dark:text-white font-semibold"
                        >
                          🎸 All Guitar Tabs & Piano Sheets
                        </span>
                        <p
                          class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                        >
                          Access to my complete library of professionally
                          transcribed tabs
                        </p>
                      </div>
                    </li>

                    <li class="flex items-start group/item">
                      <div
                        class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover/item:scale-110 transition-transform duration-200"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <span
                          class="text-gray-900 dark:text-white font-semibold"
                        >
                          💬 Exclusive Discord Community
                        </span>
                        <p
                          class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                        >
                          Connect with fellow musicians and get direct access to
                          me
                        </p>
                      </div>
                    </li>

                    <li class="flex items-start group/item">
                      <div
                        class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover/item:scale-110 transition-transform duration-200"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <span
                          class="text-gray-900 dark:text-white font-semibold"
                        >
                          🎥 Behind-the-Scenes Content
                        </span>
                        <p
                          class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                        >
                          Exclusive posts about my creative process and gear
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced Main CTA -->
          <div class="text-center">
            <div class="relative group inline-block">
              <!-- Enhanced Glow Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              ></div>

              <a
                href="https://patreon.com/AaronThommyMusicCircle"
                target="_blank"
                class="relative inline-flex items-center px-8 py-4 md:px-16 md:py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white text-lg md:text-2xl font-bold md:font-black rounded-2xl md:rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden group"
              >
                <!-- Shimmer Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800"
                ></div>

                <!-- Patreon Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z"
                  />
                </svg>

                <span class="relative whitespace-nowrap"
                  >Become a Patron Today</span
                >

                <!-- Arrow Icon -->
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 ml-3 md:ml-4 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <!-- Enhanced Trust Indicators -->
            <div class="mt-6 md:mt-8">
              <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400"
              >
                <!-- Secure Payment -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">Secure Payment</span>
                </div>

                <!-- Cancel Anytime -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">Cancel Anytime</span>
                </div>

                <!-- Instant Access -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-orange-600 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">Instant Access</span>
                </div>
              </div>

              <!-- Additional Trust Info -->
              <div class="mt-4 text-center">
                <p
                  class="text-xs text-gray-400 dark:text-gray-500 max-w-md mx-auto"
                >
                  Join
                  <span class="font-semibold text-orange-500">500+</span>
                  musicians already in the community •
                  <span class="font-semibold">No long-term commitment</span>
                  required
                </p>
              </div>
            </div>
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
        class="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-purple-400/60 dark:bg-purple-500/60 rounded-full animate-float-delayed"
      ></div>
      <div
        class="absolute top-1/2 right-1/4 w-2 h-2 -mt-1 -mr-1 bg-gray-200/60 dark:bg-gray-400/60 rounded-full animate-float"
      ></div>
    </div>

    <!-- Guitar Tab Generator Section -->
    <section
      class="mt-[-2em] mb-[-2em] relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"
      id="tab-generator"
    >
      <!-- Dynamic Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20"
      >
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <!-- Large Orbs with Enhanced Animation -->
          <div
            class="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-purple-400/25 to-indigo-400/25 rounded-full blur-3xl animate-float-orb-1"
          ></div>
          <div
            class="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-orb-2"
          ></div>
          <div
            class="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float-orb-3"
          ></div>

          <!-- Grid Pattern Overlay -->
          <div class="absolute inset-0 opacity-[0.01] dark:opacity-[0.025]">
            <div
              class="absolute inset-0"
              style="
                background-image: radial-gradient(
                  circle at 2px 2px,
                  rgba(99, 102, 241, 0.4) 1px,
                  transparent 0
                );
                background-size: 45px 45px;
              "
            ></div>
          </div>

          <!-- Floating Guitar Icons -->
          <div
            class="absolute top-1/4 left-1/6 opacity-15 dark:opacity-8 animate-float-note-1"
          >
            <svg
              class="w-12 h-12 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,6A1,1 0 0,0 6,7V17A1,1 0 0,0 7,18H8A1,1 0 0,0 9,17V13.5H11V17A1,1 0 0,0 12,18H13A1,1 0 0,0 14,17V7A1,1 0 0,0 13,6H12A1,1 0 0,0 11,7V10.5H9V7A1,1 0 0,0 8,6H7Z"
              />
            </svg>
          </div>
          <div
            class="absolute bottom-1/3 right-1/5 opacity-12 dark:opacity-6 animate-float-note-2"
          >
            <svg
              class="w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19,12H22L20,16H17L19,12M6.5,10C4.6,10 3,8.4 3,6.5S4.6,3 6.5,3 10,4.6 10,6.5 8.4,10 6.5,10M17.5,10C15.6,10 14,8.4 14,6.5S15.6,3 17.5,3 21,4.6 21,6.5 19.4,10 17.5,10M17.5,21C15.6,21 14,19.4 14,17.5S15.6,14 17.5,14 21,15.6 21,17.5 19.4,21 17.5,21M6.5,21C4.6,21 3,19.4 3,17.5S4.6,14 6.5,14 10,15.6 10,17.5 8.4,21 6.5,21Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Enhanced Header Section -->
          <div class="text-center mb-16">
            <!-- Animated Tool Icon -->
            <div class="relative group mb-8">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-700"
              ></div>
              <div
                class="relative inline-flex items-center justify-center w-24 h-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 group-hover:scale-105 transition-all duration-500"
              >
                <svg
                  class="h-14 w-14 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M19,12H22L20,16H17L19,12M6.5,10C4.6,10 3,8.4 3,6.5S4.6,3 6.5,3 10,4.6 10,6.5 8.4,10 6.5,10M17.5,10C15.6,10 14,8.4 14,6.5S15.6,3 17.5,3 21,4.6 21,6.5 19.4,10 17.5,10M17.5,21C15.6,21 14,19.4 14,17.5S15.6,14 17.5,14 21,15.6 21,17.5 19.4,21 17.5,21M6.5,21C4.6,21 3,19.4 3,17.5S4.6,14 6.5,14 10,15.6 10,17.5 8.4,21 6.5,21Z"
                    fill="url(#guitar-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="guitar-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style="stop-color: #8b5cf6" />
                      <stop offset="100%" style="stop-color: #6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- Enhanced Title with Staggered Animation -->
            <div class="mb-8 animate-fade-in-sequence">
              <h2
                class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
              >
                Create Professional
                <span class="relative inline-block">
                  <span
                    class="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
                    >Guitar Tabs</span
                  >
                  <div
                    class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-expand-delayed"
                  ></div>
                </span>
              </h2>

              <!-- Enhanced Subtitle -->
              <p
                class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Use my
                <span class="font-semibold text-purple-600 dark:text-purple-400"
                  >free online guitar tab generator</span
                >
                to create, edit, and export professional tablatures with proper
                formatting and PDF output.
              </p>
            </div>
          </div>

          <!-- Feature Highlights with Glassmorphism Cards -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <!-- Interactive Fretboard -->
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-400/15 to-indigo-400/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              ></div>
              <div
                class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500"
              >
                <!-- Animated Icon Container -->
                <div
                  class="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,6A1,1 0 0,0 6,7V17A1,1 0 0,0 7,18H8A1,1 0 0,0 9,17V13.5H11V17A1,1 0 0,0 12,18H13A1,1 0 0,0 14,17V7A1,1 0 0,0 13,6H12A1,1 0 0,0 11,7V10.5H9V7A1,1 0 0,0 8,6H7Z"
                    />
                  </svg>
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center"
                >
                  Interactive Fretboard
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-300 text-center leading-relaxed"
                >
                  Click on frets to add notes with visual feedback and intuitive
                  controls
                </p>
              </div>
            </div>

            <!-- Professional PDFs -->
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              ></div>
              <div
                class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500"
              >
                <!-- Animated Icon Container -->
                <div
                  class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center"
                >
                  Professional PDFs
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-300 text-center leading-relaxed"
                >
                  Export tabs with proper lines, metadata, and multi-page
                  support
                </p>
              </div>
            </div>

            <!-- Save & Share -->
            <div class="group relative">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              ></div>
              <div
                class="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500"
              >
                <!-- Animated Icon Container -->
                <div
                  class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>

                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center"
                >
                  Save & Share
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-300 text-center leading-relaxed"
                >
                  Save your tabs locally and share professional PDFs with others
                </p>
              </div>
            </div>
          </div>

          <!-- Main CTA -->
          <div class="text-center">
            <div class="relative group inline-block">
              <!-- Enhanced Glow Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              ></div>

              <NuxtLink
                to="/tabs"
                class="relative inline-flex items-center px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 text-white text-lg md:text-xl font-bold md:font-black rounded-2xl md:rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden group"
              >
                <!-- Shimmer Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800"
                ></div>

                <!-- Guitar Icon -->
                <svg
                  class="h-6 w-6 md:h-7 md:w-7 mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,6A1,1 0 0,0 6,7V17A1,1 0 0,0 7,18H8A1,1 0 0,0 9,17V13.5H11V17A1,1 0 0,0 12,18H13A1,1 0 0,0 14,17V7A1,1 0 0,0 13,6H12A1,1 0 0,0 11,7V10.5H9V7A1,1 0 0,0 8,6H7Z"
                  />
                </svg>

                <span class="relative whitespace-nowrap"
                  >Try Tab Generator</span
                >

                <!-- Arrow Icon -->
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 ml-3 md:ml-4 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
            </div>

            <!-- Additional Info -->
            <div class="mt-6">
              <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 dark:text-gray-400"
              >
                <!-- Free to Use -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">Completely Free</span>
                </div>

                <!-- No Registration -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">No Registration</span>
                </div>

                <!-- Works Offline -->
                <div
                  class="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 dark:border-gray-700/30"
                >
                  <div
                    class="flex-shrink-0 w-5 h-5 bg-purple-500/10 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-3 h-3 text-purple-600 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L4.414 9H17a1 1 0 100-2H4.414l1.879-1.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span class="font-medium">Works Offline</span>
                </div>
              </div>
            </div>
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
        class="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-purple-400/60 dark:bg-purple-500/60 rounded-full animate-float-delayed"
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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "~/stores/themeStore";

const themeStore = useThemeStore();

onMounted(() => {
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
        "guitar tabs, guitar tab generator, piano sheets, music lessons, patreon, guitar covers, piano covers, music tutorials",
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
