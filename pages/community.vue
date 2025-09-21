<template>
  <!------------------------------------------------------- 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                Main Patreon CTA Section
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    --------------------------------------------------------->

  <!-- Enhanced Patreon CTA Section -->
  <section class="relative py-32 overflow-hidden" id="patreon-cta">
    <!-- Dynamic Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br
            from-orange-50 via-pink-50 to-purple-50
            dark:!from-orange-900/20 dark:!via-red-900/20 dark:!to-purple-900/20"
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
              aaronthommy's
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
              As a member of my
              <span class="font-semibold text-orange-600 dark:text-orange-400"
                >exclusive Patreon community</span
              >
              you can grow your skills, connect with fellow musicians, and unlock a world of musical content, personalized feedback, and direct access to my creative process.
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
                    <span class="text-xl text-gray-500 dark:text-gray-400 ml-2">
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
                      <span class="text-gray-900 dark:text-white font-semibold">
                        🎸 All Guitar Tabs & Piano Sheets
                      </span>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
                      <span class="text-gray-900 dark:text-white font-semibold">
                        💬 Exclusive Discord Community
                      </span>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
                      <span class="text-gray-900 dark:text-white font-semibold">
                        🎥 Behind-the-Scenes Content
                      </span>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
</template>

<script setup>
import { onMounted } from "vue";
import { useThemeStore } from "~/stores/themeStore";

const themeStore = useThemeStore();

onMounted(() => {
  // Theme-Einstellungen initialisieren
  themeStore.initTheme();
});
</script>
