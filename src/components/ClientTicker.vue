<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import clients from '../data/clients.js'

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % clients.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="ticker-section">
    <div class="header">
      <p class="trusted-text">
        Trusted by 600+ Institutes Across Bangladesh and Global
      </p>
    </div>

    <div class="slider-wrap">
      <transition name="slide">
        <div
          class="slide-item"
          :key="clients[currentIndex].name"
        >
          <img
            :src="clients[currentIndex].logo"
            :alt="clients[currentIndex].name"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.ticker-section {
  padding: 3rem 0;
  background-color: #ffffff;
  overflow: hidden;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.trusted-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  text-transform: uppercase;
}

.slider-wrap {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide-item img {
  max-height: 65px;
  object-fit: contain;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter-from {
  transform: translateX(-120%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(120%);
  opacity: 0;
}
</style>
