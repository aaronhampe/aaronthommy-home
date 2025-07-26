<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!------------------------------------------------------- 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                      Hero Section
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    --------------------------------------------------------->

    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
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
      <div class="container mx-auto px-6 text-center relative z-10">
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
        <div class="mb-12 animate-slide-up-delayed">
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
            class="flex flex-wrap justify-center gap-3 max-w-lg mx-auto py-10"
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

    <!------------------------------------------------------- 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                Main Patreon CTA Section
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    --------------------------------------------------------->

    <!-- Enhanced Patreon CTA Section -->
    <section class="relative py-32 overflow-hidden">
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
                        €3
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

    <!-- Music Showcase Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            My Latest <span class="text-blue-500">Performances</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From iconic guitar solos to beautiful piano pieces - discover my
            musical journey
          </p>
        </div>

        <!-- Featured Video Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <!-- Video Card 1 -->
          <div
            class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <div
              class="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  November Rain Solo
                </p>
              </div>
            </div>
            <div class="p-6">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                November Rain (Slowed)
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Guns N' Roses • Guitar Solo
              </p>
            </div>
          </div>

          <!-- Video Card 2 -->
          <div
            class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Sweet Child O' Mine
                </p>
              </div>
            </div>
            <div class="p-6">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                Sweet Child O' Mine Solo
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Guns N' Roses • Guitar Solo
              </p>
            </div>
          </div>

          <!-- Video Card 3 -->
          <div
            class="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <div
              class="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <svg
                    class="w-8 h-8 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Hotel California
                </p>
              </div>
            </div>
            <div class="p-6">
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                Hotel California Solo
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Eagles • Guitar Solo
              </p>
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
            <svg
              class="w-5 h-5 ml-2"
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
    </section>

    <!-- Social Proof & Community Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Follow My Musical Journey
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get daily inspiration and watch my latest performances across all
            platforms
          </p>
        </div>

        <!-- Platform Stats -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          <a
            href="https://www.tiktok.com/@aaronthommy"
            target="_blank"
            class="group"
          >
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2"
            >
              <div
                class="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                TikTok
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Daily guitar & piano clips
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                @aaronthommy
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/aaronthommy_"
            target="_blank"
            class="group"
          >
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2"
            >
              <div
                class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Instagram
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Reels & behind-the-scenes
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                @aaronthommy_
              </p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@aaronthommy"
            target="_blank"
            class="group"
          >
            <div
              class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 text-center hover:shadow-lg transition-all transform group-hover:-translate-y-2"
            >
              <div
                class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                YouTube
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Tutorials & performances
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                @aaronthommy
              </p>
            </div>
          </a>
        </div>

        <!-- Coming Soon: Spotify -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full"
          >
            <svg
              class="w-6 h-6 text-green-600 dark:text-green-400 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"
              />
            </svg>
            <span class="text-green-600 dark:text-green-400 font-medium"
              >Coming Soon: Spotify Original Music</span
            >
          </div>
        </div>

        <!-- Call to Action for Social -->
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Never Miss a Performance
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow me on all platforms to get daily musical content and be the
            first to know about new releases and exclusive Patreon content.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tiktok.com/@aaronthommy"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
                />
              </svg>
              Follow on TikTok
            </a>
            <a
              href="https://www.instagram.com/aaronthommy_"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              Follow on Instagram
            </a>
            <a
              href="https://www.youtube.com/@aaronthommy"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
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

    <!-- Simple Footer -->
    <footer
      class="bg-white dark:bg-gray-800 py-8 border-t border-gray-100 dark:border-gray-700"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © 2025 Aaron Thommy. All rights reserved.
          </div>
          <div class="flex space-x-6">
            <a
              href="/impressum"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
            >
              Imprint
            </a>
            <a
              href="/datenschutz"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
            >
              Privacy
            </a>
            <a
              href="/kontakt"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
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
</style>
