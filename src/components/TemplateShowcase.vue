<script setup>
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { ref } from 'vue';

const templates = [
  { name: "Modern High School", color: "#4CC9F0" },
  { name: "Global University", color: "#4361EE" },
  { name: "Kids Kindergarten", color: "#F72585" },
  { name: "Islamic Madrasah", color: "#06D6A0" }
];

const scrollContainer = ref(null);

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = 400;
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <section class="showcase-section">
    <div class="container">
      <div class="header-group">
        <h2 class="headline">Get a Free School Website with <span class="text-accent">Edufy Premium</span></h2>
        <div class="nav-buttons">
          <button @click="scroll('left')" class="nav-btn">
            <ArrowLeft :size="20" />
          </button>
          <button @click="scroll('right')" class="nav-btn">
            <ArrowRight :size="20" />
          </button>
        </div>
      </div>

      <div class="carousel-container" ref="scrollContainer">
        <div class="template-card" v-for="(template, index) in templates" :key="index">
          <div class="mockup-frame">
            <div class="mockup-screen" :style="{ backgroundColor: template.color + '15' }">
              <div class="mockup-header">
                <div class="dot red"></div>
                <div class="dot yellow"></div>
                <div class="dot green"></div>
              </div>
              <div class="mockup-content">
                <div class="skeleton-hero" :style="{ backgroundColor: template.color }"></div>
                <div class="skeleton-row"></div>
                <div class="skeleton-row short"></div>
                <div class="skeleton-grid">
                  <div class="grid-item"></div>
                  <div class="grid-item"></div>
                  <div class="grid-item"></div>
                </div>
              </div>
            </div>
            <div class="mockup-base"></div>
          </div>
          <p class="template-name">{{ template.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  padding: 5rem 0;
  background-color: var(--color-white);
  overflow: hidden;
}

.header-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.headline {
  font-size: 2.25rem;
  font-weight: 700;
  max-width: 600px;
  line-height: 1.2;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: var(--color-text-main);
}

.nav-btn:hover {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-white);
}

.carousel-container {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding-bottom: 2rem;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.template-card {
  flex: 0 0 450px;
  scroll-snap-align: start;
}

@media (max-width: 768px) {
  .template-card {
    flex: 0 0 85vw;
  }
}

.mockup-frame {
  margin-bottom: 1.5rem;
  transition: transform 0.3s;
}

.template-card:hover .mockup-frame {
  transform: translateY(-5px);
}

.mockup-screen {
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px 8px 0 0;
  height: 280px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

.mockup-header {
  display: flex;
  gap: 6px;
  margin-bottom: 1rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.red { background: #FF5F56; }
.yellow { background: #FFBD2E; }
.green { background: #27C93F; }

.mockup-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skeleton-hero {
  height: 100px;
  border-radius: 6px;
  opacity: 0.2;
}

.skeleton-row {
  height: 12px;
  width: 100%;
  background-color: #CBD5E1;
  border-radius: 4px;
  opacity: 0.5;
}

.skeleton-row.short {
  width: 60%;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 8px;
}

.grid-item {
  height: 40px;
  background-color: #E2E8F0;
  border-radius: 4px;
}

.mockup-base {
  height: 12px;
  background-color: #CBD5E1;
  margin: 0 5%;
  border-radius: 0 0 12px 12px;
}

.template-name {
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  color: var(--color-text-main);
}
</style>
