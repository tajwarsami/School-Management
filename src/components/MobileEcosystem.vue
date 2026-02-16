<script setup>
import { ref, computed } from 'vue';
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { mobileApps } from '../data/mobileApps';

const selectedApp = ref(null);
const currentImageIndex = ref(0);

const appsList = computed(() => {
  return Object.entries(mobileApps).map(([key, value]) => ({
    id: key,
    ...value
  }));
});

const openApp = (appId) => {
  selectedApp.value = appId;
  currentImageIndex.value = 0;
  document.body.style.overflow = 'hidden';
};

const closeApp = () => {
  selectedApp.value = null;
  document.body.style.overflow = 'auto';
};

const getSelectedApp = () => {
  return appsList.value.find(app => app.id === selectedApp.value);
};

const nextImage = () => {
  const app = getSelectedApp();
  if (app && app.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % app.images.length;
  }
};

const prevImage = () => {
  const app = getSelectedApp();
  if (app && app.images) {
    currentImageIndex.value = (currentImageIndex.value - 1 + app.images.length) % app.images.length;
  }
};
</script>

<template>
  <section class="mobile-section">
    <div class="container">
      <div class="header">
        <p>Stay connected on the go with dedicated apps for everyone. Click any app to explore.</p>
      </div>

      <div class="cards-grid">
        <div
          v-for="app in appsList"
          :key="app.id"
          class="card"
          :class="`color-${app.colorName || 'purple'}`"
          @click="openApp(app.id)"
        >
          <div class="card-header">
            <span class="emoji">{{ app.emoji }}</span>
            <h3>{{ app.name }}</h3>
          </div>

          <div class="card-image">
            <img 
              v-if="app.images && app.images.length > 0"
              :src="app.images[0]" 
              :alt="app.name"
              class="img"
            />
          </div>

          <div class="card-content">
            <p class="desc">{{ app.description }}</p>
            <div class="highlights">
              <span v-for="(feature, i) in (app.features || []).slice(0, 2)" :key="i" class="highlight">
                ✓ {{ feature }}
              </span>
            </div>
          </div>

          <div class="card-footer">Click to Explore →</div>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="selectedApp" class="overlay" @click="closeApp">
        <div class="modal" @click.stop>
          <button class="close" @click="closeApp">
            <X :size="24" />
          </button>

          <div v-if="getSelectedApp()" class="modal-body" :class="`color-${getSelectedApp().colorName || 'purple'}`">
            <div class="gallery-section">
              <div class="gallery">
                <button 
                  class="nav-btn left" 
                  @click="prevImage"
                  :disabled="getSelectedApp().images.length <= 1"
                >
                  <ChevronLeft :size="24" />
                </button>

                <div class="carousel">
                  <img 
                    v-if="getSelectedApp().images"
                    :src="getSelectedApp().images[currentImageIndex]"
                    :alt="getSelectedApp().name"
                    class="carousel-img"
                  />
                  <span v-if="getSelectedApp().images" class="counter">
                    {{ currentImageIndex + 1 }} / {{ getSelectedApp().images.length }}
                  </span>
                </div>

                <button 
                  class="nav-btn right" 
                  @click="nextImage"
                  :disabled="getSelectedApp().images.length <= 1"
                >
                  <ChevronRight :size="24" />
                </button>
              </div>

              <div class="dots">
                <button
                  v-for="(_, idx) in getSelectedApp().images"
                  :key="idx"
                  class="dot"
                  :class="{ active: idx === currentImageIndex }"
                  @click="currentImageIndex = idx"
                />
              </div>
            </div>

            <div class="info-section">
              <div class="info-header">
                <span class="info-emoji">{{ getSelectedApp().emoji }}</span>
                <h2>{{ getSelectedApp().name }}</h2>
              </div>
              <p class="info-desc">{{ getSelectedApp().description }}</p>
              <div class="features">
                <h3>Key Features</h3>
                <ul>
                  <li v-for="(feature, i) in getSelectedApp().features" :key="i">
                    <span>✓</span> {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.mobile-section {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f1f3 100%);
  min-height: 100vh;
  position: relative;
}

.mobile-section::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%);
  pointer-events: none;
  border-radius: 50%;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
}

.header p {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card.color-purple { --color: #8B5CF6; }

.card-header {
  padding: 1.5rem;
  background: var(--color);
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-header .emoji {
  font-size: 2rem;
  line-height: 1;
}

.card-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.card-image {
  width: 100%;
  height: 240px;
  background: #f3f4f6;
  overflow: hidden;
}

.card-image .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image .img {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-content .desc {
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlight {
  font-size: 0.85rem;
  color: var(--color);
  font-weight: 600;
}

.card-footer {
  padding: 1rem 1.5rem;
  text-align: center;
  font-weight: 700;
  color: var(--color);
  border-top: 1px solid #e5e7eb;
  font-size: 0.95rem;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal {
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
}

.close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1010;
  color: #374151;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.close:hover {
  transform: rotate(90deg);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  align-items: stretch;
  max-height: 85vh;
  overflow-y: auto;
}

.gallery-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.nav-btn {
  background: white;
  border: 1px solid #e5e7eb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #374151;
  flex-shrink: 0;
}

.nav-btn:hover:not(:disabled) {
  background: var(--color);
  color: white;
  border-color: var(--color);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 360px;
  aspect-ratio: 9 / 16;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  background: #f3f4f6;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.counter {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
}

.dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  width: 28px;
  border-radius: 4px;
  background: var(--color);
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  padding-right: 1rem;
}

.info-section::-webkit-scrollbar {
  width: 4px;
}

.info-section::-webkit-scrollbar-track {
  background: transparent;
}

.info-section::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 2px;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.info-emoji {
  font-size: 2.5rem;
  line-height: 1;
}

.info-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #111827;
  margin: 0;
}

.info-desc {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
  flex-shrink: 0;
}

.features {
  flex-shrink: 0;
}

.features h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.5;
}

.features span {
  color: var(--color);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.2s ease;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.95);
}

@media (max-width: 1024px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-height: 90vh;
  }

  .gallery-section {
    min-height: auto;
    order: -1;
  }
}

@media (max-width: 768px) {
  .mobile-section {
    padding: 2rem 1rem;
  }

  .header h2 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }

  .cards-grid {
    gap: 1.5rem;
  }

  .card-header {
    padding: 1.2rem;
  }

  .card-header .emoji {
    font-size: 1.75rem;
  }

  .card-header h3 {
    font-size: 1.1rem;
  }

  .card-image {
    height: 200px;
  }

  .card-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .card-content .desc {
    font-size: 0.9rem;
  }

  .highlight {
    font-size: 0.8rem;
  }

  .card-footer {
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
  }

  .modal {
    border-radius: 20px;
    max-width: 95%;
  }

  .modal-body {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .close {
    width: 40px;
    height: 40px;
    top: 1rem;
    right: 1rem;
  }

  .gallery-section {
    gap: 1rem;
  }

  .info-header h2 {
    font-size: 1.5rem;
  }

  .info-emoji {
    font-size: 2rem;
  }

  .info-desc {
    font-size: 0.9rem;
  }

  .features h3 {
    font-size: 1rem;
  }

  .features li {
    font-size: 0.9rem;
  }

  .nav-btn {
    width: 36px;
    height: 36px;
  }

  .nav-btn svg {
    width: 20px;
    height: 20px;
  }

  .carousel {
    max-width: 300px;
  }

  .dots {
    gap: 0.4rem;
  }

  .dot {
    width: 7px;
    height: 7px;
  }

  .dot.active {
    width: 24px;
  }
}

@media (max-width: 540px) {
  .mobile-section {
    padding: 1.5rem 0.75rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  .header h2 {
    font-size: 1.5rem;
  }

  .header p {
    font-size: 0.9rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .card {
    border-radius: 16px;
  }

  .card-header {
    padding: 1rem;
    gap: 0.75rem;
  }

  .card-header .emoji {
    font-size: 1.5rem;
  }

  .card-header h3 {
    font-size: 1rem;
  }

  .card-image {
    height: 180px;
  }

  .card-content {
    padding: 1rem;
    gap: 0.75rem;
  }

  .card-content .desc {
    font-size: 0.8rem;
  }

  .highlight {
    font-size: 0.75rem;
  }

  .card-footer {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }

  .overlay {
    padding: 0.5rem;
  }

  .modal {
    border-radius: 16px;
    max-width: 98%;
  }

  .modal-body {
    padding: 1rem;
    gap: 1rem;
    grid-template-columns: 1fr;
    max-height: 92vh;
  }

  .close {
    width: 36px;
    height: 36px;
    top: 0.75rem;
    right: 0.75rem;
  }

  .close svg {
    width: 20px;
    height: 20px;
  }

  .gallery {
    gap: 0.5rem;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
  }

  .nav-btn svg {
    width: 18px;
    height: 18px;
  }

  .carousel {
    max-width: 100%;
    aspect-ratio: 10 / 16;
  }

  .counter {
    bottom: 0.75rem;
    right: 0.75rem;
    font-size: 0.7rem;
    padding: 0.4rem 0.6rem;
  }

  .gallery-section {
    min-height: auto;
  }

  .dots {
    gap: 0.35rem;
    margin-top: 0.5rem;
  }

  .dot {
    width: 6px;
    height: 6px;
  }

  .dot.active {
    width: 20px;
  }

  .info-section {
    gap: 1.2rem;
    padding-right: 0.5rem;
  }

  .info-header {
    gap: 0.75rem;
  }

  .info-emoji {
    font-size: 2rem;
  }

  .info-header h2 {
    font-size: 1.3rem;
  }

  .info-desc {
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .features h3 {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }

  .features ul {
    gap: 0.6rem;
  }

  .features li {
    font-size: 0.8rem;
    gap: 0.5rem;
  }
}
</style>