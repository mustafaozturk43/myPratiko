<template>
  <div>
    <!-- Loading indicator -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    </div>
    
    <!-- Main app content -->
    <div v-show="!isLoading" class="app-content">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onErrorCaptured } from 'vue'

const isLoading = ref(true)

// Error handling
onErrorCaptured((error, instance, info) => {
  console.warn('Error captured:', error)
  console.warn('Component:', instance)
  console.warn('Info:', info)
  return false // Prevent error from propagating
})

onMounted(async () => {
  try {
    console.log('App mounted, isLoading:', isLoading.value)
    
    // Wait for next tick to ensure DOM is ready
    await nextTick()
    
    // Simulate loading time for CSS to load
    setTimeout(() => {
      console.log('Setting isLoading to false')
      isLoading.value = false
      console.log('isLoading after change:', isLoading.value)
    }, 200)
  } catch (error) {
    console.error('Error in app mount:', error)
    // Fallback: show content anyway
    isLoading.value = false
  }
})

// Global error handler
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.warn('Global error:', event.error)
  })
  
  window.addEventListener('unhandledrejection', (event) => {
    console.warn('Unhandled promise rejection:', event.reason)
  })
}
</script>

<style>
/* Preload critical fonts and icons - must be first */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

/* Critical CSS - inline for faster loading */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.app-content {
  width: 100%;
  min-height: 100vh;
}

.loading-spinner {
  text-align: center;
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
