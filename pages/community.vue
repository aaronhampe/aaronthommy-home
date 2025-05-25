<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Community
        </h1>
        <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
      </div>

      <!-- Patreon Hero Section -->
      <div class="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden shadow-xl">
        <!-- Decorative Elements -->
        <div class="absolute inset-0 opacity-10 dark:opacity-5">
          <div class="absolute -top-32 -right-32 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div class="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="#F96854"/>
              </svg>
            </div>
            
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AaronThommy <span class="text-orange-600 dark:text-orange-400">Music Circle</span>
            </h2>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Werde Teil meiner exklusiven Patreon-Community und erhalte Zugang zu einzigartigen Inhalten, 
              persönlichem Feedback und einer engagierten Musikergemeinschaft.
            </p>

            <a 
              href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
              target="_blank" 
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="white"/>
              </svg>
              Werde jetzt Patron
            </a>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Was dich erwartet:</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Exklusive Guitar Tabs & Piano Sheets</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Monatliche Live-Sessions & Q&As</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Behind-the-Scenes Content & Tutorials</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Persönliches Feedback zu deinem Spiel</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">Zugang zum exklusiven Discord Server</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Membership Tiers -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Wähle deine Mitgliedschaft
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Basic Tier -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Lover</h3>
            <p class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">3€<span class="text-base font-normal text-gray-600 dark:text-gray-400">/Monat</span></p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Zugang zu allen Tabs
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Community Discord
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Patron-Only Posts
              </li>
            </ul>
            <a 
              href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
              target="_blank" 
              class="block w-full text-center py-3 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
            >
              Jetzt starten
            </a>
          </div>

          <!-- Pro Tier -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow border-2 border-orange-400 dark:border-orange-600">
            <div class="bg-orange-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-3">Beliebteste Option</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Creator</h3>
            <p class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">18€<span class="text-base font-normal text-gray-600 dark:text-gray-400">/Monat</span></p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Alles aus Music Lover
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Zugang zu allen Kursen
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
                Früher Zugang zu neuen Videos
              </li>
            </ul>
            <a 
              href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
              target="_blank" 
              class="block w-full text-center py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              Jetzt starten
            </a>
          </div>

          <!-- VIP Tier -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Music Master</h3>
            <p class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">90€<span class="text-base font-normal text-gray-600 dark:text-gray-400">/Monat</span></p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Alles aus Music Creator
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Monatliche Live-Sessions
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Persönliche Betreuung
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Custom Tabs auf Anfrage
              </li>
            </ul>
            <a 
              href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
              target="_blank" 
              class="block w-full text-center py-3 px-4 bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      </div>

      <!-- What Members Say  <div class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Was Community-Mitglieder sagen
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <span class="text-orange-600 dark:text-orange-400 font-bold">MG</span>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-900 dark:text-white">Max G.</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Music Creator</p>
              </div>
            </div>
            <p class="text-gray-700 dark:text-gray-300 italic">
              "Die Tabs sind super akkurat und die Live-Sessions haben mir enorm geholfen, 
              meinen Spielstil zu verbessern. Die Community ist toll!"
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <span class="text-orange-600 dark:text-orange-400 font-bold">SK</span>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-900 dark:text-white">Sarah K.</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Music Master</p>
              </div>
            </div>
            <p class="text-gray-700 dark:text-gray-300 italic">
              "Das persönliche Feedback von Aaron ist unbezahlbar. Ich habe in wenigen 
              Monaten mehr gelernt als in Jahren zuvor."
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <span class="text-orange-600 dark:text-orange-400 font-bold">TM</span>
              </div>
              <div class="ml-3">
                <h4 class="font-semibold text-gray-900 dark:text-white">Tom M.</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Music Lover</p>
              </div>
            </div>
            <p class="text-gray-700 dark:text-gray-300 italic">
              "Endlich eine Quelle für qualitativ hochwertige Tabs! Der Discord ist 
              super aktiv und man bekommt immer Hilfe."
            </p>
          </div>
        </div>
      </div>-->
     

      <!-- Social Media Section -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Folge mir auch auf Social Media
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Für tägliche Clips, Performances und Updates - kostenlos und für alle zugänglich!
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a
            href="https://www.tiktok.com/@aaronthommy"
            target="_blank"
            class="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mb-4 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"
              />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              TikTok
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
              Tägliche kurze Clips
            </p>
          </a>

          <a
            href="https://www.instagram.com/aaronthommy_"
            target="_blank"
            class="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mb-4 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Instagram
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
              Reels & Behind-the-Scenes
            </p>
          </a>

          <a
            href="https://www.youtube.com/@aaronthommy"
            target="_blank"
            class="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mb-4 text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              YouTube
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mt-2">
              Tutorials & Performances
            </p>
          </a>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Häufige Fragen zur Patreon Community
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Was ist der AaronThommy Music Circle?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Der Music Circle ist meine exklusive Patreon-Community, in der ich meine Leidenschaft für Musik 
              mit gleichgesinnten Musikern und Fans teile. Hier findest du nicht nur Tabs und Tutorials, 
              sondern auch eine unterstützende Gemeinschaft.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Kann ich jederzeit kündigen?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Ja, du kannst deine Mitgliedschaft jederzeit über Patreon kündigen. Es gibt keine Mindestlaufzeit 
              und du behältst bis zum Ende des bezahlten Monats Zugriff auf alle Inhalte.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Wie erhalte ich Zugang zum Discord Server?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Sobald du Patron wirst, erhältst du automatisch über Patreon einen Einladungslink zum exklusiven 
              Discord Server. Dort kannst du dich mit anderen Mitgliedern austauschen und an Live-Sessions teilnehmen.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              In welchen Formaten sind die Tabs verfügbar?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Die Tabs sind als PDF und Guitar Pro Dateien verfügbar. Piano Sheets gibt es als PDF mit 
              Notenschrift. Alle Dateien sind professionell aufbereitet und leicht zu lesen.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Wie funktionieren die Live-Sessions?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Die monatlichen Live-Sessions finden über Discord statt. Als Music Creator oder Music Master 
              erhältst du Zugang zu exklusiven Sessions, in denen ich Fragen beantworte, Techniken zeige 
              und auf Wünsche der Community eingehe.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Was beinhaltet das persönliche Feedback?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Als Music Master erhältst du einmal im Monat die Möglichkeit, mir ein Video von deinem Spiel 
              zu schicken. Ich gebe dir dann detailliertes, persönliches Feedback per Video zurück, 
              mit konkreten Tipps zur Verbesserung.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Bereit, Teil des Music Circle zu werden?
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Schließe dich einer wachsenden Community von Musikbegeisterten an und bringe dein Spiel auf das nächste Level.
        </p>
        <a 
          href="https://patreon.com/AaronThommyMusicCircle?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" 
          target="_blank" 
          class="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-semibold rounded-xl transition-all transform hover:scale-105 shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.82 2.41c3.96 0 7.18 3.22 7.18 7.18 0 3.96-3.22 7.18-7.18 7.18-3.96 0-7.18-3.22-7.18-7.18 0-3.96 3.22-7.18 7.18-7.18M2 21.77V2.41h2.91v19.36z" fill="white"/>
          </svg>
          Jetzt Patron werden
        </a>
      </div>
    </div>
  </div>
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