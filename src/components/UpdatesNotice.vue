<template>
  <div class="updates-notice">
    <div class="notice-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(notice, index) in notices" :key="index" class="notice-slide">
        {{ notice }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const notices = ref([
  "Admission for 2026 batch starts from Feb 1",
  "Annual Sports Day on March 15",
  "Parent-Teacher meeting scheduled for Jan 30",
  "New library books available now"
])

const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % notices.value.length
  }, 3000)
})
</script>

<style scoped>
.updates-notice {
  background-color: #f0f0f0;
  padding: 10px 20px;
  overflow: hidden;
  border: 1px solid #ddd;
  margin: 20px auto;
  max-width: 600px;
  border-radius: 8px;
  font-weight: 500;
  color: #333;
}

.notice-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.notice-slide {
  flex: 0 0 100%;
  text-align: center;
}
</style>
