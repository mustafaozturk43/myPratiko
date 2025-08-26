<template>
  <!-- Footer - Sidebar altında ve tam genişlikte modern tasarım -->
  <v-footer
    class="footer-full tw:w-full tw:fixed tw:bottom-0 tw:left-0 tw:right-0 tw:h-auto tw:min-h-[50px] tw:z-[999] tw:m-0 tw:p-0"
    app
  >
    <!-- Ana gradient background -->
    <div
      class="tw:absolute tw:inset-0 tw:bg-gradient-to-r tw:from-indigo-900 tw:via-indigo-800 tw:to-purple-800 tw:opacity-95"
    ></div>

    <!-- Ön plan içerik -->
    <div class="tw:relative tw:z-10 tw:w-full tw:h-full">
      <!-- Üst border efekti -->
      <div
        class="tw:h-px tw:w-full tw:bg-gradient-to-r tw:from-transparent tw:via-white/30 tw:to-transparent"
      ></div>

      <!-- Ana içerik alanı - Sidebar alanını da kapsayacak şekilde -->
      <div class="tw:px-4 tw:py-3 md:tw:px-6 lg:tw:px-8">
        <v-container class="tw:max-w-full tw:mx-auto" fluid>
          <v-row align="center" justify="space-between" class="tw:min-h-[50px]">
            <!-- Sol taraf - Logo ve Marka (Sidebar alanında da görünecek) -->
            <v-col
              cols="12"
              md="4"
              class="tw:text-center md:tw:text-left tw:mb-2 md:tw:mb-0"
            >
              <div
                class="tw:flex tw:items-center tw:justify-center md:tw:justify-start tw:space-x-3"
              >
                <div
                  class="tw:p-1.5 tw:bg-white/10 tw:rounded-lg tw:backdrop-blur-sm"
                >
                  <v-icon
                    icon="mdi-alpha-p-box"
                    size="24"
                    class="tw:text-white"
                  />
                </div>
                <div class="tw:text-left">
                  <h3
                    class="tw:text-white tw:text-base tw:font-bold tw:leading-tight"
                  >
                    Pratiko ERP
                  </h3>
                  <p class="tw:text-white/70 tw:text-xs tw:leading-tight">
                    Modern İşletme Çözümleri
                  </p>
                </div>
              </div>
            </v-col>

            <!-- Orta - Telif hakkı ve bilgiler -->
            <v-col cols="12" md="4" class="tw:text-center tw:mb-2 md:tw:mb-0">
              <div class="tw:space-y-1">
                <div
                  class="tw:flex tw:items-center tw:justify-center tw:space-x-2 tw:text-white/90"
                >
                  <v-icon
                    icon="mdi-copyright"
                    size="14"
                    class="tw:text-white/80"
                  />
                  <span class="tw:text-xs tw:font-medium">
                    {{ new Date().getFullYear() }} Tüm hakları saklıdır
                  </span>
                </div>
                <div class="tw:text-white/60 tw:text-xs">
                  <span>v1.0.0 | Aralık 2024</span>
                </div>
              </div>
            </v-col>

            <!-- Sağ taraf - Hızlı linkler -->
            <v-col cols="12" md="4" class="tw:text-center md:tw:text-right">
              <div
                class="tw:flex tw:items-center tw:justify-center md:tw:justify-end tw:space-x-2"
              >
                <!-- Kompakt hızlı linkler -->
                <div class="tw:flex tw:space-x-2">
                  <v-btn
                    icon
                    size="x-small"
                    variant="text"
                    class="tw:text-white/70 hover:tw:text-white tw:transition-colors tw:duration-200"
                  >
                    <v-icon size="16">mdi-help-circle-outline</v-icon>
                    <v-tooltip activator="parent" location="top"
                      >Yardım</v-tooltip
                    >
                  </v-btn>

                  <v-btn
                    icon
                    size="x-small"
                    variant="text"
                    class="tw:text-white/70 hover:tw:text-white tw:transition-colors tw:duration-200"
                  >
                    <v-icon size="16">mdi-cog-outline</v-icon>
                    <v-tooltip activator="parent" location="top"
                      >Ayarlar</v-tooltip
                    >
                  </v-btn>

                  <v-btn
                    icon
                    size="x-small"
                    variant="text"
                    class="tw:text-white/70 hover:tw:text-white tw:transition-colors tw:duration-200"
                  >
                    <v-icon size="16">mdi-information-outline</v-icon>
                    <v-tooltip activator="parent" location="top"
                      >Hakkında</v-tooltip
                    >
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- Arka plan dekoratif elementler -->
    <div
      class="tw:absolute tw:inset-0 tw:overflow-hidden tw:pointer-events-none"
    >
      <!-- Dekoratif geometrik şekiller -->
      <div
        class="tw:absolute tw:top-2 tw:right-8 tw:w-12 tw:h-12 tw:bg-white/5 tw:rounded-full tw:blur-lg"
      ></div>
      <div
        class="tw:absolute tw:bottom-2 tw:left-12 tw:w-10 tw:h-10 tw:bg-purple-300/10 tw:rounded-full tw:blur-md"
      ></div>
    </div>
  </v-footer>
</template>

<script setup>
// Footer component - Sayfanın altını tamamen dolduran modern tasarım
// Vuetify 3 + Tailwind CSS 4 ile responsive ve interaktif footer
// Logo, telif hakkı, hızlı linkler ve dekoratif elementler içerir
</script>

<style scoped>
/* Footer - Sidebar altını da kapsayan tam genişlik footer stil */
.footer-full {
  /* Vuetify footer override */
  background: transparent !important;
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 999 !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Gradient background garantisi */
.footer-full::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #312e81, #3730a3, #7c3aed);
  opacity: 0.95;
  z-index: -1;
}

/* Hover animasyonları için smooth transitions */
.footer-full * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .footer-full {
    min-height: 50px !important;
    padding: 8px 0 !important;
  }
}

/* Desktop optimizations */
@media (min-width: 769px) {
  .footer-full {
    min-height: 70px !important;
    padding: 12px 0 !important;
  }
}

/* Sidebar ile koordinasyon için z-index ayarı */
.footer-full {
  /* Sidebar z-index'i 1000 olduğu için footer 999 */
  z-index: 999 !important;
}
</style>
