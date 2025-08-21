<template>
  
    <v-app>
      <v-layout>
        <!-- Header -->
        <LayoutAppHeader />
        <!-- Ana içerik alanı -->
        <LayoutAppSideBar ref="sidebarRef" />
        <v-main class="d-flex align-start justify-star tw:bg-blue-300 tw:hover:bg-blue-100">
          <v-container
            :style="{
              marginLeft: $vuetify.display.mdAndUp ? '132px' : '0px',
              paddingLeft: $vuetify.display.smAndDown ? '16px' : '0px',
              paddingRight: $vuetify.display.smAndDown ? '16px' : '0px',
            }"
          >
            <v-sheet
              class="d-flex align-center justify-star text-center"
              elevation="2"
              rounded
            >
              <slot />
            </v-sheet>
          </v-container>
        </v-main>
        <!-- Footer -->
      </v-layout>

      <LayoutAppFooter />
    </v-app>
  
</template>

<script setup>
import { ref } from "vue";

// Sidebar referansı
const sidebarRef = ref(null);
</script>

<style>
/* Sayfanın arka plan rengini tasarıma uygun hale getirebiliriz.
  Tailwind CSS kullanarak: <v-main class="bg-grey-lighten-4">
  Veya CSS ile:
*/
</style>
