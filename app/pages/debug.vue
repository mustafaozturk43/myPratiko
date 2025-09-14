<template>
  <div>
    <h1 class="text-3xl font-weight-bold mb-4 primary--text">
      Debug Sayfası
    </h1>
    
    <v-card class="mb-4 pa-4" elevation="2">
      <v-card-title>Loading State Debug</v-card-title>
      <v-card-text>
        <p><strong>Current Time:</strong> {{ currentTime }}</p>
        <p><strong>Route Path:</strong> {{ $route.path }}</p>
        <p><strong>Route Name:</strong> {{ $route.name }}</p>
        <p><strong>Page Loaded:</strong> {{ pageLoaded ? 'Yes' : 'No' }}</p>
      </v-card-text>
    </v-card>

    <v-card class="mb-4 pa-4" elevation="2">
      <v-card-title>Test Navigation</v-card-title>
      <v-card-text>
        <div class="d-flex gap-3">
          <v-btn color="primary" @click="$router.push('/')">
            Ana Sayfa
          </v-btn>
          <v-btn color="success" @click="$router.push('/deneme')">
            Deneme Sayfası
          </v-btn>
          <v-btn color="info" @click="$router.push('/customers')">
            Müşteriler
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="pa-4" elevation="2">
      <v-card-title>Console Logs</v-card-title>
      <v-card-text>
        <p>Console'da loading state değişimlerini kontrol edin.</p>
        <v-btn color="warning" @click="testLog">
          Test Log
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({
  title: 'Debug Sayfası',
  layout: 'default'
})

const currentTime = ref('')
const pageLoaded = ref(false)

onMounted(() => {
  console.log('Debug page mounted')
  currentTime.value = new Date().toLocaleString('tr-TR')
  pageLoaded.value = true
  
  // Test loading state
  setTimeout(() => {
    console.log('Debug page fully loaded')
  }, 500)
})

const testLog = () => {
  console.log('Test button clicked at:', new Date().toISOString())
}
</script>
