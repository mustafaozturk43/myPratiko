<template>
  <div class="tw:bg-orange-200 tw:bg-orange-900">deneme
  </div>

  <v-navigation-drawer
    v-model="drawer"
    :permanent="$vuetify.display.mdAndUp"
    :temporary="$vuetify.display.smAndDown"
    floating
    class="sidebar-custom tw:border-none tw:shadow-2xl tw:rounded-xl tw:bg-gradient-to-b tw:from-indigo-900 tw:to-indigo-800"
    width="80"
  >
    <v-list
      v-model="selectedItem"
      density="compact"
      nav
      class="tw:flex tw:flex-col tw:items-center tw:fill-height tw:py-4"
      mandatory
      color="transparent"
    >
      <!-- Logo -->
      <v-list-item class="tw:mb-4">
        <v-icon
          size="x-large"
          color="white"
          class="tw:mx-auto"
        >
          mdi-alpha-p-box
        </v-icon>
      </v-list-item>

      <!-- Navigation Items -->
      <v-list-item
        v-for="item in navigationItems"
        :key="item.value"
        :value="item.value"
        class="tw:flex tw:items-center tw:justify-center tw:my-2 tw:w-15 tw:h-15 tw:rounded-xl tw:text-indigo-200 tw:transition-all tw:duration-300"
        active-class="nav-item-active"
        @click="handleNavigation(item.value)"
      >
        <v-icon
          :icon="item.icon"
          size="x-large"
          class="tw:mx-auto"
        />
        <v-tooltip
          activator="parent"
          location="end"
        >
          {{ item.title }}
        </v-tooltip>
      </v-list-item>

      <v-spacer />

      <!-- Logout Item -->
      <v-list-item
        class="tw:bg-red-900 tw:flex tw:items-center tw:justify-center tw:mt-2 tw:w-15 tw:h-15 tw:rounded-xl tw:text-indigo-200 tw:transition-all tw:duration-300"
        value="logout"
        @click="handleLogout"
      >
        <v-icon
          icon="mdi-logout"
          size="large"
        />
        <v-tooltip
          activator="parent"
          location="end"
        >
          Çıkış Yap
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Mobile Toggle Button -->
  <v-btn
    v-if="$vuetify.display.smAndDown"
    icon
    class="tw:fixed tw:top-4 tw:left-4 tw:z-[1001] tw:bg-blue-500 tw:text-white tw:transition-all tw:duration-300 hover:tw:hover:scale-110"
    @click="toggleDrawer"
  >
    <v-icon>{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Types
interface NavigationItem {
  title: string
  icon: string
  value: string
  route?: string
}

// Composables
const router = useRouter()

// Reactive State
const drawer = ref(false)
const selectedItem = ref('dashboard')

// Constants
const BREAKPOINT_MD = 960

// Computed Properties
const sidebarStyles = computed(() => ({

  top: '80px',
  bottom: '70px',
  left: '10px',
  height: 'calc(100vh - 180px)',
  position: 'fixed' as const,
  zIndex: 1000
}))

const navigationItems = computed<NavigationItem[]>(() => [
  {
    title: 'Anasayfa',
    icon: 'mdi-view-dashboard-outline',
    value: 'dashboard',
    route: '/'
  },
  {
    title: 'Müşteriler',
    icon: 'mdi-account-group-outline',
    value: 'customers',
    route: '/customers'
  },
  {
    title: 'Raporlar',
    icon: 'mdi-chart-bar',
    value: 'reports',
    route: '/reports'
  },
  {
    title: 'Mesajlar',
    icon: 'mdi-message-processing-outline',
    value: 'messages',
    route: '/messages'
  },
  {
    title: 'Belgeler',
    icon: 'mdi-file-document-outline',
    value: 'documents',
    route: '/documents'
  },
  {
    title: 'Takım',
    icon: 'mdi-account-group-outline',
    value: 'team',
    route: '/team'
  }
])

// Methods
const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const handleNavigation = (value: string) => {
  selectedItem.value = value
  const item = navigationItems.value.find(nav => nav.value === value)

  if (item?.route) {
    router.push(item.route)
  }

  // Mobile'da navigation sonrası drawer'ı kapat
  if (window.innerWidth < BREAKPOINT_MD) {
    drawer.value = false
  }
}

const handleLogout = () => {
  // Logout logic burada implement edilecek
  console.log('Logout clicked')
}

const handleResize = () => {
  const shouldOpen = window.innerWidth >= BREAKPOINT_MD
  if (drawer.value !== shouldOpen) {
    drawer.value = shouldOpen
  }
}

// Lifecycle
onMounted(() => {
  // Initial drawer state based on screen size
  drawer.value = window.innerWidth >= BREAKPOINT_MD

  // Add resize listener
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  // Cleanup resize listener
  window.removeEventListener('resize', handleResize)
})

// Expose methods to parent
defineExpose({
  toggleDrawer
})
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

/* Logo hover effect */
.v-list-item:first-child:hover .v-icon {
  transform: scale(1.1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile toggle button enhanced hover */
.v-btn:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Responsive optimizations */
@media (max-width: 959px) {
  .v-navigation-drawer {
    transform: translateX(-100%);
  }

  .v-navigation-drawer.v-navigation-drawer--temporary {
    transform: translateX(0);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .v-navigation-drawer {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {

  .v-list-item,
  .v-btn {
    transition: none !important;
  }

  .v-list-item:hover {
    transform: none;
  }

  .v-list-item:first-child:hover .v-icon {
    transform: none;
  }
}
</style>