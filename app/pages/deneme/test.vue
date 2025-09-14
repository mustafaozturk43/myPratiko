<template>
    <div>
        <h2 class="text-2xl font-weight-bold mb-4 primary--text">Test Alt Sayfası</h2>
        <p class="text-body-1 text-medium-emphasis mb-4">
            Bu sayfa /deneme/test route'unu test etmek için oluşturuldu.
        </p>
        <v-card class="pa-4" elevation="2">
            <v-card-title>Route Bilgileri</v-card-title>
            <v-card-text>
                <p><strong>Current Route:</strong> {{ $route.path }}</p>
                <p><strong>Full Path:</strong> {{ $route.fullPath }}</p>
                <p><strong>Route Name:</strong> {{ $route.name }}</p>
            </v-card-text>
        </v-card>
        <v-btn class="mt-4" color="primary" @click="$router.push('/deneme')"> Ana Deneme Sayfasına Dön </v-btn>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Test Alt Sayfası",
    layout: "default",
});
</script>
