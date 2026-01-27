<template>
  <section class="media-section-wrapper">
    <div class="media-section">
      <h2 class="section-title">Photo Gallery</h2>

      <div class="photo-grid">
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="photo-item"
          @click="openPhoto(photo)"
        >
          <img :src="photo.url" :alt="photo.title" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </div>

    <div v-if="selectedPhoto" class="modal" @click.self="closePhoto">
      <img class="modal-img" :src="selectedPhoto.url" :alt="selectedPhoto.title" />

      <p class="modal-title">{{ selectedPhoto.title }}</p>

      <button class="close-btn" @click="closePhoto">×</button>

      <button class="nav-btn prev-btn" @click.stop="prevPhoto">‹</button>
      <button class="nav-btn next-btn" @click.stop="nextPhoto">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { photos } from '@/data/photos'

const selectedPhoto = ref(null)
const currentIndex = ref(null)

const openPhoto = (photo) => {
  currentIndex.value = photos.findIndex(p => p.id === photo.id)
  selectedPhoto.value = photo
}

const closePhoto = () => {
  selectedPhoto.value = null
}

const prevPhoto = () => {
  if (currentIndex.value === 0) currentIndex.value = photos.length - 1
  else currentIndex.value--
  selectedPhoto.value = photos[currentIndex.value]
}

const nextPhoto = () => {
  if (currentIndex.value === photos.length - 1) currentIndex.value = 0
  else currentIndex.value++
  selectedPhoto.value = photos[currentIndex.value]
}

const handleKey = (e) => {
  if (!selectedPhoto.value) return
  if (e.key === 'ArrowRight') nextPhoto()
  if (e.key === 'ArrowLeft') prevPhoto()
  if (e.key === 'Escape') closePhoto()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))

watch(selectedPhoto, (newVal) => {
  if (newVal) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
})
</script>

<style scoped>
.media-section-wrapper {
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: 700;
  color: #0d6efd;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.photo-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.3s;
}

.photo-item:hover {
  transform: scale(1.05);
}

.photo-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.photo-title {
  text-align: center;
  padding: 10px;
  font-weight: 500;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
}

.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0;
}

.modal-title {
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}

.close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #fff;
  border: none;
  font-size: 28px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10000;
  font-weight: bold;
}

.nav-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.8);
  border: none;
  font-size: 36px;
  width: 50px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.nav-btn:hover {
  background: rgba(255,255,255,1);
}

.prev-btn { left: 15px; }
.next-btn { right: 15px; }


@media (max-width: 768px) {
  .photo-grid { 
    grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); 
}
  .photo-item img { 
    height: 150px; 
}
  .nav-btn { 
    width: 40px; 
    height: 50px; 
    font-size: 28px; 
}
}

@media (max-width: 480px) {
  .photo-grid { 
    grid-template-columns: 1fr 1fr; 
    gap: 10px; 

}
  .photo-item img { 
    height: 120px; 
}
  .nav-btn { 
    width: 35px; 
    height: 45px; 
    font-size: 24px; 
}
  .close-btn { 
    width: 36px; 
    height: 36px; 
    font-size: 24px; 
}
}
</style>
