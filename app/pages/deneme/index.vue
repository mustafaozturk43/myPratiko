<template>
    <div>
        <h1 class="text-3xl font-weight-bold mb-4 primary--text">Deneme Sayfası</h1>
        <p class="text-body-1 text-medium-emphasis">
            Bu bir test sayfasıdır. Vue Router routing testi için kullanılıyor.
        </p>
        <v-card class="mt-4 pa-4" elevation="2">
            <v-card-title>Test Bilgileri</v-card-title>
            <v-card-text>
                <p>Sayfa başarıyla yüklendi!</p>
                <p>Route: /deneme</p>
                <p>Timestamp: {{ currentTime }}</p>
            </v-card-text>
        </v-card>

        <!-- Test Navigation -->
        <v-card class="mt-4 pa-4" elevation="2">
            <v-card-title>Routing Test</v-card-title>
            <v-card-text>
                <p>Aşağıdaki linkleri test edin:</p>
                <div class="mt-3">
                    <v-btn class="mr-3" color="success" @click="$router.push('/deneme/test')">
                        /deneme/test sayfasına git
                    </v-btn>
                    <v-btn class="mr-3" color="info" @click="$router.push('/')"> Ana sayfaya dön </v-btn>
                    <v-btn color="warning" @click="refreshPage"> Sayfayı yenile </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Page metadata for Nuxt 4
definePageMeta({
    title: "Deneme Sayfası",
    layout: "default",
});

// Set document title manually
const currentTime = ref("");

onMounted(() => {
    // Set page title
    document.title = "Deneme Sayfası - Pratiko ERP";
    currentTime.value = new Date().toLocaleString("tr-TR");
});

const refreshPage = () => {
    window.location.reload();
};

// It's necessary to declare definePageMeta for Nuxt 3, but not for Nuxt 4
// Nuxt 4 uses auto-imports, so definePageMeta is available globally
// This is a workaround to make the code compatible with both Nuxt 3 and Nuxt 4
// In a Nuxt 4 project, this function will not be used
</script>

<style scoped>
/* Component-specific styles */
</style>
