<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <LayoutAppHeader />
      
      <!-- Sidebar -->
      <LayoutAppSideBar ref="sidebarRef" />
      
      <!-- Main content area -->
      <v-main class="main-content">
        <v-container 
          class="content-container"
          :class="{
            'ml-sidebar': $vuetify.display.mdAndUp,
            'px-mobile': $vuetify.display.smAndDown
          }"
          fluid
        >
          <v-sheet
            class="content-sheet"
            elevation="1"
            rounded="lg"
          >
            <slot />
          </v-sheet>
        </v-container>
      </v-main>
      
      <!-- Footer -->
      <LayoutAppFooter />
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Sidebar reference for programmatic control
const sidebarRef = ref(null);

// Expose sidebar methods for parent components if needed
defineExpose({
  toggleSidebar: () => sidebarRef.value?.toggleDrawer?.()
});
</script>

<style scoped>
/* Main content area styles */
.main-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: calc(100vh - 130px);
  padding-top: 16px;
  padding-bottom: 16px;
}

/* Content container responsive styles */
.content-container {
  max-width: 100%;
  transition: margin-left 0.3s ease;
}

/* Sidebar margin for larger screens */
.ml-sidebar {
  margin-left: 132px;
  padding-left: 24px;
  padding-right: 24px;
}

/* Mobile padding */
.px-mobile {
  padding-left: 16px;
  padding-right: 16px;
}

/* Content sheet styles */
.content-sheet {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 24px;
  min-height: 400px;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .content-container {
    margin-left: 0 !important;
  }
}

/* Smooth transitions for all layout changes */
* {
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
