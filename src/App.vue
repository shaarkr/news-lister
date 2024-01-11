<template>
  <div class="h-screen">
    <!-- header -->
    <app-header />

    <!-- main -->
    <main id="content" class="pt-16 h-screen">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>
