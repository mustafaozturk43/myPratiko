<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <LayoutAppHeader />
      <!-- Sidebar -->
      <LayoutAppSideBar ref="sidebarRef" />
      <!-- Main content area -->
      <v-main>
        <v-container>
          <v-sheet
            :elevation="5"
            border
            color="red-600"
            rounded
            class="pa-6"
          >

          </v-sheet>
        </v-container>
      </v-main>
      <LayoutAppFooter />
      <!-- Footer -->
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Sidebar reference for programmatic control
const sidebarRef = ref(null);

// Expose sidebar methods for parent components if needed
defineExpose({
  toggleSidebar: () => sidebarRef.value?.toggleDrawer?.(),
});
</script>

<style scoped>
/* Tailwind CSS kullanarak minimal stil tanımlaması */
/* Responsive geçişler ve özel overrides için reserved alan */

/* Responsive adjustments için global override */
@media (max-width: 960px) {
  .tw\:ml-\[132px\] {
    margin-left: "10px" !important;
  }
}
</style>
