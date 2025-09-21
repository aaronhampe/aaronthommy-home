<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Imprint
          </h1>
          <div class="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded"></div>
        </div>
  
        <!-- Content -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 mb-8">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <!-- Provider Information -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information pursuant to § 5 TMG (German Telemedia Act)</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              AARON THOMAS HAMPE<br>
              c/o MDC<br>
              Management#2005<br>
              Welserstraße 3<br>
              87463 Dietmannsried<br>
              Germany
            </p>

            <!-- Contact -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Phone: +49 1514 295774884<br>
              Email: info@aaronthommy.com <br>
              Website: www.aaronthommy.com
            </p>

            <!-- VAT ID -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">VAT Identification Number</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              VAT ID pursuant to § 27 a German Value Added Tax Act (UStG):<br>
              DE454283895
            </p>

            <!-- Responsible for Content -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsible for the Content</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              AARON THOMAS HAMPE
            </p>

            <!-- EU Online Dispute Resolution -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">EU Online Dispute Resolution (ODR)</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              The European Commission provides a platform for Online Dispute Resolution (ODR):
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-blue-500 dark:text-blue-400 hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br>
              Our email address can be found above under Contact.
            </p>

            <!-- Consumer Dispute Resolution -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consumer Dispute Resolution / Universal Arbitration Board</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              We are neither willing nor obliged to participate in dispute resolution proceedings before a
              consumer arbitration board.
            </p>

            <!-- Liability for Content -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Liability for Content</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              As a service provider, we are responsible for our own content on these pages in accordance with
              general legislation pursuant to § 7 (1) TMG. However, pursuant to §§ 8 to 10 TMG, we are not obliged
              as a service provider to monitor transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Obligations to remove or block the use of information under general laws remain unaffected. Liability
              in this respect, however, is only possible from the time of knowledge of a specific infringement. Upon
              becoming aware of such legal violations, we will remove this content immediately.
            </p>

            <!-- Liability for Links -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Liability for Links</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Our offer contains links to external third-party websites, over whose content we have no influence.
              Therefore, we cannot assume any liability for this external content. The respective provider or
              operator of the pages is always responsible for the content of the linked pages. The linked pages
              were checked for possible legal violations at the time of linking. Unlawful content was not
              recognizable at the time of linking.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              However, permanent monitoring of the content of the linked pages is not reasonable without concrete
              evidence of a violation of the law. If we become aware of legal violations, we will remove such links
              immediately.
            </p>

            <!-- Copyright -->
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Copyright</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              The content and works created by the site operators on these pages are subject to German copyright
              law. Duplication, editing, distribution and any kind of exploitation outside the limits of copyright
              law require the written consent of the respective author or creator. Downloads and copies of this
              site are only permitted for private, non-commercial use.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Insofar as the content on this site was not created by the operator, the copyrights of third parties
              are respected. In particular, third-party content is marked as such. Should you nevertheless become
              aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we
              will remove such content immediately.
            </p>
          </div>
        </div>
  
        <!-- Hinweis -->
        <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 text-center">
          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Source (German template): <a href="https://www.e-recht24.de" target="_blank" class="text-blue-500 dark:text-blue-400 hover:underline">e-recht24.de</a><br>
            This English translation is provided for convenience only. In case of doubt or legal relevance, the original German version prevails.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useThemeStore } from '~/stores/themeStore';
  
  const themeStore = useThemeStore();
  
  onMounted(() => {
    // Theme-Einstellungen initialisieren
    themeStore.initTheme();
  });
  </script>