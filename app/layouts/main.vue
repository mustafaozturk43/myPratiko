<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <LayoutAppHeader />
      <!-- Sidebar -->
      <!-- Main content area -->
      <v-main>
            <slot />
      </v-main>
      <LayoutAppFooter />
      <!-- Footer -->
    </v-layout>
  </v-app>
</template>

<script setup>
import {  onMounted } from "vue";
import { useRoute } from "vue-router";

// Sidebar reference for programmatic control
const route = useRoute();

// Update page title based on route
onMounted(() => {
  if (route.meta?.title) {
    document.title = `${route.meta.title} - Pratiko ERP`;
  }
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
