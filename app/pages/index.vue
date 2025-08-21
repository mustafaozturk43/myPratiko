<template>
  <v-container>
    <!-- Floating Action Button - Sağ alt köşede -->
    <v-btn icon size="large" class="fab-button" elevation="8" color="error">
      <v-icon size="32">mdi-plus</v-icon>
    </v-btn>
    <v-row class="tw:flex tw:bg-blue-500 tw:hover:bg-blue-100">
      <v-col cols="12" class="text-center">
        <h1 class="text-3xl font-weight-bold mb-8 primary--text">
          Pratiko ERP Dashboard V1
        </h1>

        <!-- İstatistik Kartları -->
        <v-row justify="center" class="mb-8">
          <!-- Toplam Müşteri Kartı -->
          <v-col cols="12" sm="6" md="4" class="mb-4">
            <v-card
              class="mx-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/30 bg-white/90 backdrop-blur-md rounded-lg"
              elevation="4"
            >
              <v-card-text
                class="text-center pa-6 min-h-[200px] flex flex-col justify-center items-center"
              >
                <v-icon size="48" color="primary" class="mb-4">
                  mdi-account-group
                </v-icon>
                <h2 class="text-h4 font-weight-bold primary--text mb-2">
                  1,247
                </h2>
                <p class="text-subtitle-1 text-medium-emphasis">
                  Toplam Müşteri
                </p>
                <v-chip color="success" size="small" class="mt-2">
                  <v-icon start size="16">mdi-trending-up</v-icon>
                  +12% bu ay
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Toplam Satış Kartı -->
          <v-col cols="12" sm="6" md="4" class="mb-4">
            <v-card
              class="mx-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/30 bg-white/90 backdrop-blur-md rounded-lg"
              elevation="4"
            >
              <v-card-text
                class="text-center pa-6 min-h-[200px] flex flex-col justify-center items-center"
              >
                <v-icon size="48" color="success" class="mb-4">
                  mdi-currency-try
                </v-icon>
                <h2 class="text-h4 font-weight-bold success--text mb-2">
                  ₺2.4M
                </h2>
                <p class="text-subtitle-1 text-medium-emphasis">Toplam Satış</p>
                <v-chip color="success" size="small" class="mt-2">
                  <v-icon start size="16">mdi-trending-up</v-icon>
                  +8% bu ay
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Aktif Sipariş Kartı -->
          <v-col cols="12" sm="6" md="4" class="mb-4">
            <v-card
              class="mx-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/30 bg-white/90 backdrop-blur-md rounded-lg"
              elevation="4"
            >
              <v-card-text
                class="text-center pa-6 min-h-[200px] flex flex-col justify-center items-center"
              >
                <v-icon size="48" color="warning" class="mb-4">
                  mdi-package-variant
                </v-icon>
                <h2 class="text-h4 font-weight-bold warning--text mb-2">89</h2>
                <p class="text-subtitle-1 text-medium-emphasis">
                  Aktif Sipariş
                </p>
                <v-chip color="info" size="small" class="mt-2">
                  <v-icon start size="16">mdi-clock-outline</v-icon>
                  3 gün ortalama
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.page-background {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #e1f5fe 100%);
  min-height: 100vh;
}

.fab-button {
  position: fixed !important;
  bottom: 80px !important;
  right: 24px !important;
  z-index: 1000 !important;
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  transition: all 0.3s ease !important;
}

.fab-button:hover {
  transform: scale(1.1) !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2) !important;
}
</style>
