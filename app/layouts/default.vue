<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <LayoutAppHeader />

      <!-- Sidebar -->
      <LayoutAppSideBar ref="sidebarRef" />

      <!-- Main content area -->
      <v-main
        class="tw:bg-gradient-to-br tw:from-slate-50 tw:to-blue-200 tw:min-h-[calc(100vh-130px)] tw:pt-4 tw:pb-4"
      >
        <v-container
          class="tw:max-w-full tw:transition-all tw:duration-300 tw:ease-in-out m:5"
          :class="{
            'tw:ml-[132px] tw:pl-6 tw:pr-6': $vuetify.display.mdAndUp,
            'tw:ml-0 tw:px-4': $vuetify.display.smAndDown,
          }"
          fluid
        >
          <v-sheet
            class="tw:bg-white/95 tw:backdrop-blur-md tw:border tw:border-white/20 tw:p-6 tw:min-h-[400px] tw:w-full tw:rounded-lg tw:shadow-sm"
            elevation="1"
            rounded="lg"
          >
            <slot />
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
    margin-left: 0 !important;
  }
}
</style>
