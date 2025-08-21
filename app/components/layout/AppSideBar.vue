<template>
  <!-- 
    Sidebar'ı header ve footer arasında konumlandırıyoruz.
    Mobil cihazlarda ve küçük ekranlarda gizlenir (sm ve altı).
    Hamburger menü ile açılabilir.
  -->
  <v-navigation-drawer
    v-model="drawer"
    :permanent="$vuetify.display.mdAndUp"
    :temporary="$vuetify.display.smAndDown"
    floating
    class="bg-indigo-darken-4 rounded-xl shadow-xl"
    width="80"
    :style="{
      top: '80px',
      bottom: '70px',
      left: $vuetify.display.mdAndUp ? '16px' : '0px',
      height: 'calc(100vh - 130px)',
      position: 'fixed',
      zIndex: 1000,
    }"
  >
    <!-- 
      İçerik dikey olarak ortalanmış ve üst-alt boşluklar eklendi.
    -->
    <v-list
      density="compact"
      nav
      class="d-flex flex-column align-center fill-height py-4"
    >
      <!-- Logo veya Ana İkon -->
      <v-list-item class="mb-4">
        <v-icon size="x-large" color="white" class="mx-auto"
          >mdi-alpha-p-box</v-icon
        >
      </v-list-item>
      
      <!-- 
      
        Navigasyon elemanlarını bir döngü ile oluşturuyoruz.
        'v-model' ile seçili olan elemanı takip ediyoruz.
      -->
      <v-list-item-group v-model="selectedItem" mandatory color="transparent">
       
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item.value"
          class="nav-item my-2"
          active-class="nav-item-active"
        >
          <v-icon :icon="item.icon" size="x-large" class="mx-auto"></v-icon>
          <v-tooltip activator="parent" location="end">{{
            item.title
          }}</v-tooltip>
        </v-list-item>
        
      </v-list-item-group>

      <!-- Spacer, alttaki ikonu en alta itmek için kullanılıyor -->
      <v-spacer></v-spacer>

      <!-- En alttaki çıkış veya ayarlar ikonu -->
      <v-list-item class="nav-item mt-2" value="logout">
        <v-icon icon="mdi-logout" size="large"></v-icon>
        <v-tooltip activator="parent" location="end">Çıkış Yap</v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Hamburger menü butonu - sadece küçük ekranlarda görünür -->
  <v-btn
    v-if="$vuetify.display.smAndDown"
    icon
    class="hamburger-btn"
    :style="{
      position: 'fixed',
      top: '16px',
      left: '16px',
      zIndex: 1001,
      backgroundColor: '#1A237E',
      color: 'white',
    }"
    @click="drawer = !drawer"
  >
    <v-icon class="mx-auto">{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
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

// Kenar çubuğunda gösterilecek navigasyon elemanları
// mdi ikonlarını https://pictogrammers.com/library/mdi/ adresinden bulabilirsiniz.
const items = ref([
  { title: "Anasayfa", icon: "mdi-view-dashboard-outline", value: "dashboard" },
  { title: "Raporlar", icon: "mdi-chart-bar", value: "reports" },
  { title: "Mesajlar", icon: "mdi-message-processing-outline", value: "messages"},
  { title: "Belgeler", icon: "mdi-file-document-outline", value: "documents" },
  { title: "Takım", icon: "mdi-account-group-outline", value: "team" },
]);

// Başlangıçta seçili olacak elemanı belirliyoruz (örneğin 'dashboard')
const selectedItem = ref("dashboard");

// Component mount olduktan sonra drawer durumunu ayarla
onMounted(async () => {
  // DOM güncellemelerinin tamamlanmasını bekle
  await nextTick();

  // Büyük ekranlarda sidebar'ı otomatik olarak aç
  if (window.innerWidth >= 960) {
    // md breakpoint
    drawer.value = true;
  }
});

// Ekran boyutu değişikliklerini izle
watch(
  () => window.innerWidth,
  async (newWidth) => {
    await nextTick();
    if (newWidth >= 960) {
      drawer.value = true;
    } else {
      drawer.value = false;
    }
  }
);

// Parent component'tan erişilebilir metodları expose ediyoruz
defineExpose({
  toggleDrawer,
});
</script>

<style scoped>
/* Scoped CSS ile stillerin sadece bu bileşene özel olmasını sağlıyoruz.
  Tasarımdaki aktif ikon görünümünü burada tanımlıyoruz.
*/

/* Sidebar container stilleri */
.v-navigation-drawer {
  border: none !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
}

/* Genel navigasyon ikonu stilleri (renk mavi temaya uyarlandı) */
.nav-item {
  color: #c5cae9;
  /* Pasif ikon rengi (Açık İndigo) */
  border-radius: 12px !important;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

/* Aktif (seçili) navigasyon ikonu stili (renk mavi temaya uyarlandı) */
.nav-item-active {
  background-color: white !important;
  color: #1a237e !important;
  /* Aktif ikon rengi (Koyu İndigo) */
}

/* Fare ile üzerine gelince oluşacak etki */
.nav-item:not(.nav-item-active):hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* v-list-item-group tarafından eklenen varsayılan arkaplanı kaldırıyoruz */
:deep(.v-list-item-group .v-list-item--active .v-list-item__overlay) {
  background-color: transparent !important;
}

/* Hamburger buton stilleri */
.hamburger-btn {
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  transform: scale(1.1);
}
</style>
