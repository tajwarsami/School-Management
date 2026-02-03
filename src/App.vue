<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-wrapper">
    <NavBar />

    <router-view />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

router-view > * {
  flex: 1;
}
</style>
