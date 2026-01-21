<template>
  <div class="slider">
    <img :src="images[current].src" alt="Slider Image" />

    <div class="timestamp">{{ images[current].time }}</div>

    <div class="arrow left" @click="prevImage">&#10094;</div>
    <div class="arrow right" @click="nextImage">&#10095;</div>

    <div class="scroll-indicator" @click="scrollToAbout">
      <div class="scroll-arrow">▼</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import school1 from '@/assets/images/school1.jpg'
import school2 from '@/assets/images/school2.jpg'
import school3 from '@/assets/images/school3.jpg'

const images = [
  { src: school1, time: 'Morning Assembly' },
  { src: school2, time: 'Annual Program 2025' },
  { src: school3, time: 'Independence Day' }
]

const current = ref(0)

const nextImage = () => {
  current.value = (current.value + 1) % images.length
}

const prevImage = () => {
  current.value = (current.value - 1 + images.length) % images.length
}

const scrollToAbout = () => {
  const about = document.getElementById('about-section')
  if (about) {
    const yOffset = -20
    const y = about.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

onMounted(() => {
  setInterval(nextImage, 5000)
})
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; 
  overflow: hidden;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timestamp {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 1rem;
}

.arrow {
  position: absolute;
  color: white;
  font-size: 2rem;
  padding: 10px;
  background: rgba(0,0,0,0.4);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}

.slider:hover .arrow { 
  opacity: 1; 
}
.arrow:hover { 
  background: rgba(0,0,0,0.7); 
}

.arrow.left { 
  top: 50%; left: 15px; 
  transform: translateY(-50%); 
}
.arrow.right { 
  top: 50%; right: 15px; 
  transform: translateY(-50%); 
}

.scroll-indicator {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 60px;
  border: 2px solid white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.scroll-arrow {
  color: white;
  font-size: 18px;
  animation: scrollMove 1.5s infinite;
}

@keyframes scrollMove {
  0% { transform: translateY(8px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(30px); opacity: 0; }
}

@media (max-width: 768px) {
  .slider { 
    aspect-ratio: 4 / 3; 
  }
  .timestamp { 
    font-size: 0.9rem; 
    padding: 4px 8px; 
  }
  .arrow { 
    font-size: 1.5rem; 
    padding: 6px; 
  }
  .scroll-indicator { 
    width: 30px; 
    height: 50px; 
  }
  .scroll-arrow { 
    font-size: 16px; 
  }
}
</style>
