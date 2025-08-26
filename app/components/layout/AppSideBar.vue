<template>
  <!-- 
    Modern Sidebar - Responsive ve optimize edilmiş tasarım
    Mobil cihazlarda hamburger menü ile açılır
  -->
  <v-navigation-drawer
    v-model="drawer"
    :permanent="$vuetify.display.mdAndUp"
    :temporary="$vuetify.display.smAndDown"
    floating
    class="sidebar-custom tw:border-none tw:shadow-2xl tw:rounded-xl tw:bg-gradient-to-b tw:from-indigo-900 tw:to-indigo-800"
    width="80"
    :style="{
      top: '80px',
      bottom: '70px',
      left: $vuetify.display.mdAndUp ? '16px' : '0px',
      height: 'calc(100vh - 180px)',
      position: 'fixed',
      zIndex: 1000,
    }"
  >
    <!-- Ana navigasyon listesi -->
    <v-list
      density="compact"
      nav
      class="tw:flex tw:flex-col tw:items-center tw:h-full tw:py-4 tw:space-y-2"
    >
      <!-- Logo veya Ana İkon -->
      <v-list-item class="tw:mb-6">
        <div
          class="tw:p-2 tw:bg-white/10 tw:rounded-lg tw:backdrop-blur-sm tw:transition-all tw:duration-300 hover:tw:bg-white/20"
        >
          <v-icon size="x-large" class="tw:text-white tw:mx-auto">
            mdi-alpha-p-box
          </v-icon>
        </div>
      </v-list-item>

      <!-- Navigasyon elemanları -->
      <div class="tw:flex tw:flex-col tw:space-y-3 tw:flex-1">
        <template v-for="(item, i) in items" :key="i">
          <v-list-item
            :value="item.value"
            class="nav-item tw:w-16 tw:h-16 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:transition-all tw:duration-300 tw:cursor-pointer tw:group"
            :class="{
              'tw:bg-white tw:text-indigo-900 tw:shadow-lg':
                selectedItem === item.value,
              'tw:text-indigo-200 hover:tw:bg-white/10 hover:tw:text-white':
                selectedItem !== item.value,
            }"
            @click="selectItem(item.value)"
          >
            <v-icon
              :icon="item.icon"
              size="x-large"
              class="tw:transition-colors tw:duration-200"
            />
            <v-tooltip activator="parent" location="end" class="tw:z-50">
              <span class="tw:text-sm tw:font-medium">{{ item.title }}</span>
            </v-tooltip>
          </v-list-item>
        </template>
      </div>

      <!-- Spacer -->
      <v-spacer class="tw:flex-1" />

      <!-- Çıkış butonu -->
      <v-list-item
        class="nav-item tw:w-16 tw:h-16 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:transition-all tw:duration-300 tw:cursor-pointer tw:text-red-300 hover:tw:bg-red-500/20 hover:tw:text-red-200"
        value="logout"
        @click="handleLogout"
      >
        <v-icon
          icon="mdi-logout"
          size="large"
          class="tw:transition-colors tw:duration-200"
        />
        <v-tooltip activator="parent" location="end" class="tw:z-50">
          <span class="tw:text-sm tw:font-medium">Çıkış Yap</span>
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Hamburger menü butonu - mobil -->
  <v-btn
    v-if="$vuetify.display.smAndDown"
    icon
    class="hamburger-btn tw:fixed tw:top-4 tw:left-4 tw:z-[1001] tw:bg-indigo-800 tw:text-white tw:rounded-lg tw:shadow-lg tw:transition-all tw:duration-300 hover:tw:bg-indigo-700 hover:tw:scale-110"
    @click="toggleDrawer"
  >
    <v-icon
      class="tw:transition-transform tw:duration-200"
      :class="{ 'tw:rotate-90': drawer }"
    >
      {{ drawer ? "mdi-close" : "mdi-menu" }}
    </v-icon>
  </v-btn>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";

// Drawer durumunu kontrol eden reactive değişken
const drawer = ref(false);

// Drawer'ı aç/kapat fonksiyonu - parent component'tan çağrılabilir
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Navigasyon menü elemanları - Material Design Icons kullanılıyor
const items = ref([
  { title: "Anasayfa", icon: "mdi-view-dashboard-outline", value: "dashboard" },
  {
    title: "Müşteriler",
    icon: "mdi-account-group-outline",
    value: "customers",
  },
  { title: "Raporlar", icon: "mdi-chart-bar", value: "reports" },
  {
    title: "Mesajlar",
    icon: "mdi-message-processing-outline",
    value: "messages",
  },
  { title: "Ayarlar", icon: "mdi-cog-outline", value: "settings" },
]);

// Başlangıçta seçili olan navigasyon elemanı
const selectedItem = ref("dashboard");

// Navigasyon elemanını seçme fonksiyonu
const selectItem = (value) => {
  selectedItem.value = value;
  // Sayfa yönlendirmesi burada yapılabilir
  // Örnek: await navigateTo(`/${value}`);
  console.log("Navigasyon seçildi:", value);

  // Mobilde seçim sonrası drawer'ı kapat
  if (window.innerWidth < 960) {
    drawer.value = false;
  }
};

// Çıkış işlemi
const handleLogout = () => {
  console.log("Çıkış yapılıyor...");
  // Çıkış logic'i burada implemente edilebilir
  // Örnek: await $auth.logout();
};

// Component mount olduktan sonra responsive davranış ayarla
onMounted(async () => {
  await nextTick();

  // Desktop'ta sidebar'ı otomatik aç
  if (window.innerWidth >= 960) {
    drawer.value = true;
  }
});

// Ekran boyutu değişikliklerini responsive olarak izle
watch(
  () => window.innerWidth,
  async (newWidth) => {
    await nextTick();
    drawer.value = newWidth >= 960;
  }
);

// Parent component'a metodları expose et
defineExpose({
  toggleDrawer,
  selectItem,
  selectedItem,
});
</script>

<style scoped>
/* Tailwind CSS kullanılarak minimal özel stil tanımlaması */
/* Vuetify override'ları ve özel gereksinimler için */

/* Sidebar container override */
.sidebar-custom {
  border: none !important;
  background: linear-gradient(to bottom, #312e81, #3730a3) !important;
}

/* Navigation item base styles - Tailwind ile override edilemeyenler */
.nav-item {
  border-radius: 12px !important;
  margin: 4px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Vuetify list item overlay override */
:deep(.v-list-item--active .v-list-item__overlay) {
  background-color: transparent !important;
}

/* Hamburger button enhance */
.hamburger-btn {
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Scroll behavior enhancement */
.sidebar-custom :deep(.v-list) {
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.sidebar-custom :deep(.v-list)::-webkit-scrollbar {
  display: none;
}

/* Animation improvements */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.sidebar-custom {
  animation: slideIn 0.3s ease-out;
}

/* Mobile responsive enhancements */
@media (max-width: 768px) {
  .sidebar-custom {
    width: 280px !important;
  }

  .nav-item {
    width: 100% !important;
    height: 48px !important;
    justify-content: flex-start !important;
    padding-left: 16px !important;
  }
}
</style>
