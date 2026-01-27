<template>
  <section class="media-section-wrapper">
    <div class="media-section">

      <h2 class="section-title">Video Gallery</h2>
      <div class="video-grid">
        <div
          v-for="video in videos.slice(0,3)"
          :key="video.id"
          class="video-item"
          @click="goToVideo(video.id)"
          style="cursor:pointer"
        >
          <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
          <p class="video-title">{{ video.title }}</p>
        </div>
      </div>
      <div class="see-more">
        <router-link to="/videos" class="see-more-link">See More</router-link>
      </div>

      <h2 class="section-title">Photo Gallery</h2>
      <div class="photo-grid">
        <div
          v-for="photo in photos.slice(0,4)"
          :key="photo.id"
          class="photo-item"
          @click="openPhoto(photo)"
          style="cursor:pointer"
        >
          <img :src="photo.url" :alt="photo.title" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
      <div class="see-more">
        <router-link to="/photogallery" class="see-more-link">See More</router-link>
      </div>

      <div
        v-if="selectedPhoto"
        class="photo-modal"
        @click.self="closePhoto"
      >
        <div class="photo-modal-content">
          <button class="close-btn" @click="closePhoto">×</button>
          <img :src="selectedPhoto.url" :alt="selectedPhoto.title" />
          <p class="modal-title">{{ selectedPhoto.title }}</p>
        </div>
      </div>

      <h2 class="section-title">News & Events</h2>
      <div class="news-card-grid">
        <router-link
          v-for="item in latestNews"
          :key="item.id"
          :to="{ path: '/news', query: { id: item.id } }"
          class="news-card-link"
        >
          <div class="news-card">
            <div v-if="item.image" class="news-card-image">
              <img :src="item.image" alt="news" />
            </div>
            <div class="news-card-body">
              <h3 class="news-card-title">{{ item.title }}</h3>
              <p class="news-card-date">{{ item.date }}</p>
              <div v-if="item.body" class="news-card-preview">
                {{ item.body.replace(/<[^>]+>/g, '').slice(0, 100) }}...
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="see-more">
        <router-link to="/news" class="see-more-link">Explore All</router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { videos } from '@/data/videos'
import { photos } from '@/data/photos'
import { newsData } from '@/data/newsData'

const router = useRouter()
const selectedPhoto = ref(null)

const goToVideo = (id) => {
  router.push({ name: 'VideoDetail', params: { id } })
}

const openPhoto = (photo) => {
  selectedPhoto.value = photo
}

const closePhoto = () => {
  selectedPhoto.value = null
}

const latestNews = newsData.slice(0, 3)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.media-section-wrapper {
  width: 100%;
  background-color: #ffffff;
  padding: 40px 0;
}

.media-section {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #0d6efd;
  margin-bottom: 25px;
  text-align: center;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.video-item {
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.video-item:hover {
  transform: translateY(-6px);
}

.video-item iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
}

.video-title {
  margin-top: 10px;
  text-align: center;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.photo-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.photo-item:hover {
  transform: translateY(-6px);
}

.photo-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.photo-title {
  text-align: center;
  padding: 8px;
  font-weight: 500;
}

.photo-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.photo-modal-content {
  position: relative;
  max-width: 90%;
  text-align: center;
}

.photo-modal-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 12px;
  animation: zoomIn 0.3s ease;
}

.modal-title {
  color: #fff;
  margin-top: 10px;
}

.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

@keyframes zoomIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.news-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.news-card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-6px);
}

.news-card-image img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.news-card-body {
  padding: 15px;
}

.news-card-title {
  color: #0d6efd;
  font-size: 16px;
}

.see-more {
  text-align: center;
  margin: 25px 0;
}

.see-more-link {
  padding: 10px 28px;
  border-radius: 50px;
  color: #fff;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  text-decoration: none;
  font-weight: 600;
}
</style>
