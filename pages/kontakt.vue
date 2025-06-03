<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('footer.contact') }}
        </h1>
        <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
      </div>
      
      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Kontaktformular - Linke Spalte -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ $t('pages.contact.title') }}</h2>

          <form @submit.prevent="sendMessage" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('pages.contact.name') }}</label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 dark:border-red-400': errors.name }"
                  required
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('pages.contact.email') }}</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  :class="{ 'border-red-500 dark:border-red-400': errors.email }"
                  required
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Betreff -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('pages.contact.subject') }}</label>
              <input
                type="text"
                id="subject"
                v-model="contactForm.subject"
                class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                :class="{ 'border-red-500 dark:border-red-400': errors.subject }"
                required
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Nachricht -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ $t('pages.contact.message') }}</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                :class="{ 'border-red-500 dark:border-red-400': errors.message }"
                required
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Datenschutz Checkbox -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  v-model="contactForm.privacy"
                  class="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  :class="{ 'border-red-500': errors.privacy }"
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="privacy" class="text-gray-600 dark:text-gray-400">
                  {{ $t('pages.contact.privacyLabel') }}
                </label>
                <p v-if="errors.privacy" class="text-red-500 text-sm mt-1">{{ errors.privacy }}</p>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-blue-500 dark:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="inline-block mr-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                {{ isSubmitting ? $t('pages.contact.sending') : $t('pages.contact.send') }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">{{ successMessage }}</p>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div
            v-if="showError"
            class="mt-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kontaktinformationen - Rechte Spalte -->
        <div class="lg:grid lg:grid-rows-2 gap-8">
          <!-- Kontaktinfos -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 relative overflow-hidden mb-8 lg:mb-0">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kontaktinformationen</h2>
            
            <!-- Visuelle Animation - Schallplatte im Hintergrund -->
            <div class="absolute top-0 right-0 opacity-5 dark:opacity-10 pointer-events-none">
              <div class="w-48 h-48 rounded-full border-8 border-gray-900 dark:border-gray-200 animate-spin-slow"></div>
            </div>
            
            <!-- Kontaktdaten -->
            <div class="space-y-4 relative z-10">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-base font-medium text-gray-900 dark:text-white">{{ $t('pages.contact.emailTitle') }}</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">info@aaronthommy.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-base font-medium text-gray-900 dark:text-white">{{ $t('pages.contact.locationTitle') }}</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">Hannover, Deutschland</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-base font-medium text-gray-900 dark:text-white">{{ $t('pages.contact.responseTitle') }}</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">In der Regel innerhalb von 24-48 Stunden</p>
                </div>
              </div>
              
              <!-- Social Media Links -->
              <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h3 class="text-base font-medium text-gray-900 dark:text-white mb-4">{{ $t('pages.contact.followTitle') }}</h3>
                <div class="flex space-x-4">
                  <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ-Abschnitt -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Häufig gestellte Fragen</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Wie erreichst du deinen Guitar Ton?</h3>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                  Ich nehme meine Videos in Logic auf und benutze bisher ausschließlich Stock Plugins oder Amps.
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Wie kann ich deine Tabs erwerben?</h3>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                  Meine Tabs sind über den Tabs-Bereich verfügbar. Für individuelle Anfragen oder spezielle Arrangements tritt meiner Community bei.
                </p>
              </div>
              
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Nimmst du Auftragsarbeiten an?</h3>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                  Ich stehe für Kooperationen, Arrangements und andere musikalische Projekte zur Verfügung. Kontaktier mich einfach oder tritt meiner Community bei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('pages.contact.ctaTitle') }}</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          {{ $t('pages.contact.ctaText') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://www.tiktok.com/@aaronthommy" target="_blank" class="inline-flex items-center px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298.001.595.045.88.13V9.4A6.33 6.33 0 007 8a6.3 6.3 0 00-5 9.75 6.3 6.3 0 0010.49-4.06V9.4a8.16 8.16 0 004.58 1.34h.43V7.35a5.06 5.06 0 01-2.91-.66z"/>
            </svg>
            TikTok
          </a>
          <a href="https://www.instagram.com/aaronthommy_" target="_blank" class="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.youtube.com/@aaronthommy" target="_blank" class="inline-flex items-center px-5 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/stores/themeStore'

const themeStore = useThemeStore()
const { t } = useI18n()

// Kontaktformular Daten
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

// UI-State
const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const successMessage = ref($t('pages.contact.success'))
const errorMessage = ref($t('pages.contact.error'))

// Formularvalidierung
const validateForm = () => {
  errors.value = {}
  let valid = true

  if (!contactForm.value.name.trim()) {
    errors.value.name = $t('pages.contact.name')
    valid = false
  }
  if (!contactForm.value.email.trim()) {
    errors.value.email = $t('pages.contact.email')
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.value.email)) {
    errors.value.email = $t('pages.contact.email')
    valid = false
  }
  if (!contactForm.value.subject.trim()) {
    errors.value.subject = $t('pages.contact.subject')
    valid = false
  }
  if (!contactForm.value.message.trim()) {
    errors.value.message = $t('pages.contact.message')
    valid = false
  } else if (contactForm.value.message.trim().length < 10) {
    errors.value.message = $t('pages.contact.message')
    valid = false
  }
  if (!contactForm.value.privacy) {
    errors.value.privacy = $t('pages.contact.privacyLabel')
    valid = false
  }

  return valid
}

const sendMessage = async (e) => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    const formData = new FormData();
    // Füge deine Formularwerte hinzu
    formData.append('name', contactForm.value.name);
    formData.append('email', contactForm.value.email);
    formData.append('subject', contactForm.value.subject);
    formData.append('message', contactForm.value.message);

    const response = await fetch('https://formspree.io/f/xdkgbqgd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok) {
      showSuccess.value = true;
      successMessage.value = $t('pages.contact.success');
      contactForm.value = { name: '', email: '', subject: '', message: '', privacy: false };
    } else {
      showError.value = true;
      errorMessage.value = data.error || $t('pages.contact.error');
    }
  } catch (err) {
    console.error('Fehler beim Senden des Formulars:', err);
    showError.value = true;
    errorMessage.value = $t('pages.contact.error');
  } finally {
    isSubmitting.value = false;
    if (showSuccess.value) setTimeout(() => (showSuccess.value = false), 5000);
  }
};

onMounted(() => {
  themeStore.initTheme();
  
  // Animation für die Schallplatte hinzufügen
  if (document.styleSheets && document.styleSheets[0]) {
    const styleSheet = document.styleSheets[0];
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
  }
});
</script>