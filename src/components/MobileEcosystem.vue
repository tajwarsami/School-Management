<script setup>
import { ref, computed, onMounted } from 'vue';
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { mobileApps } from '../data/mobileApps';

const selectedApp = ref(null);
const currentImageIndex = ref(0);
const headerVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    headerVisible.value = true;
  }, 100);
});

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
      <div class="header" :class="{ visible: headerVisible }">
        <h2 class="header-title">
          <span class="title-line line-1">Mobile Apps for</span>
          <span class="title-line line-2">
            <span class="highlight-word">Administrators</span>,
            <span class="highlight-word">Teachers</span>,
          </span>
          <span class="title-line line-3">and <span class="highlight-word">Guardians</span></span>
        </h2>
        <p class="header-desc">
          Our academy’s mobile app empowers teachers, administrators, and parents with seamless access to daily school operations. Monitor attendance, receive instant notifications, manage fee records, and track academic progress — all in real time.

           Whether you're on campus or on the move, everything you need is just a tap away   </p>
        <div class="header-badges">
          <span class="badge">📋 Attendance</span>
          <span class="badge">📢 Notices</span>
          <span class="badge">💳 Fees</span>
          <span class="badge">📊 Academic Updates</span>
        </div>
        <div class="header-hint">Click any app to explore →</div>
      </div>

      <div class="cards-grid">
        <div
          v-for="(app, index) in appsList"
          :key="app.id"
          class="card"
          :class="`color-${app.colorName || 'purple'}`"
          :style="`--card-index: ${index}`"
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
            <X :size="20" />
          </button>

          <div v-if="getSelectedApp()" class="modal-body" :class="`color-${getSelectedApp().colorName || 'purple'}`">
            <div class="gallery-section">
              <div class="gallery">
                <button 
                  class="nav-btn left" 
                  @click="prevImage"
                  :disabled="getSelectedApp().images.length <= 1"
                >
                  <ChevronLeft :size="18" />
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
                  <ChevronRight :size="18" />
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
  overflow: hidden;
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
  animation: floatOrb 8s ease-in-out infinite;
}

.mobile-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%);
  pointer-events: none;
  border-radius: 50%;
  animation: floatOrb 10s ease-in-out infinite reverse;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.05); }
  66% { transform: translate(-10px, 15px) scale(0.97); }
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.header.visible {
  opacity: 1;
  transform: translateY(0);
}

.header-label {
  display: inline-block;
  background: rgba(139, 92, 246, 0.1);
  color: #7c3aed;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  animation: pulseBadge 3s ease-in-out infinite;
}

@keyframes pulseBadge {
  0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.2); }
  50% { box-shadow: 0 0 0 6px rgba(139, 92, 246, 0); }
}

.header-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  color: #111827;
  margin: 0 0 1.25rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.title-line {
  display: block;
}

.line-1 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}

.line-2 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
}

.line-3 {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
}

@keyframes slideUpFade {
  to { opacity: 1; transform: translateY(0); }
}

.highlight-word {
  position: relative;
  color: #7c3aed;
  display: inline-block;
}

.highlight-word::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8B5CF6, #a78bfa);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  animation: underlineReveal 0.5s ease 1s forwards;
}

@keyframes underlineReveal {
  to { transform: scaleX(1); }
}

.header-desc {
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 680px;
  margin: 0 auto 1.75rem;
  line-height: 1.75;
  opacity: 0;
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards;
}

.header-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
  margin-bottom: 1.25rem;
  opacity: 0;
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards;
}

.badge {
  background: white;
  border: 1px solid #e5e7eb;
  color: #374151;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  transition: all 0.25s ease;
  cursor: default;
}

.badge:hover {
  background: #8B5CF6;
  border-color: #8B5CF6;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.3);
}

.header-hint {
  font-size: 0.85rem;
  color: #9ca3af;
  font-weight: 500;
  letter-spacing: 0.04em;
  opacity: 0;
  animation: slideUpFade 0.7s ease 1.05s forwards;
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
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) calc(0.2s + var(--card-index, 0) * 0.1s) forwards;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.14);
}

.card.color-purple { --color: #8B5CF6; }

.card-header {
  padding: 1.5rem;
  background: var(--color);
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.card-header::after {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 100px;
  height: 100px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
}

.card-header .emoji {
  font-size: 2rem;
  line-height: 1;
  transition: transform 0.3s ease;
}

.card:hover .card-header .emoji {
  transform: scale(1.2) rotate(-5deg);
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
  transition: transform 0.4s ease;
}

.card:hover .card-image .img {
  transform: scale(1.07);
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
  transition: background 0.25s ease, color 0.25s ease;
}

.card:hover .card-footer {
  background: var(--color);
  color: white;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
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
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  color: #374151;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.close:hover {
  transform: rotate(90deg);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 3rem 2rem 2rem;
  align-items: start;
  max-height: 90vh;
  overflow-y: auto;
}

.gallery-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
}

.nav-btn {
  background: white;
  border: 1px solid #e5e7eb;
  width: 36px;
  height: 36px;
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
  max-width: 260px;
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
  bottom: 0.75rem;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.35rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
}

.dots {
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-wrap: wrap;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  width: 24px;
  border-radius: 4px;
  background: var(--color);
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-y: auto;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.info-emoji {
  font-size: 2rem;
  line-height: 1;
}

.info-header h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #111827;
  margin: 0;
}

.info-desc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
}

.features h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.features li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
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
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}

.modal-leave-active .modal {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.92) translateY(16px);
}

@media (max-width: 1024px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-height: 90vh;
  }
}

@media (max-width: 768px) {
  .mobile-section {
    padding: 2rem 1rem;
  }
  .header-title {
    font-size: clamp(1.5rem, 5vw, 2.2rem);
  }
  .header-desc {
    font-size: 0.95rem;
  }
  .cards-grid {
    gap: 1.5rem;
  }
  .card-image {
    height: 200px;
  }
  .overlay {
    padding: 0;
    align-items: flex-end;
  }
  .modal {
    border-radius: 20px 20px 0 0;
    max-width: 100%;
    width: 100%;
    max-height: 92vh;
  }
  .modal-body {
    grid-template-columns: 1fr;
    padding: 2.5rem 1rem 1.5rem;
    gap: 1.25rem;
    max-height: 92vh;
    overflow-y: auto;
  }
  .close {
    top: 0.6rem;
    right: 0.6rem;
    width: 34px;
    height: 34px;
  }
  .carousel {
    max-width: 200px;
  }
  .gallery {
    gap: 0.5rem;
  }
  .nav-btn {
    width: 32px;
    height: 32px;
  }
  .info-header h2 {
    font-size: 1.3rem;
  }
  .info-emoji {
    font-size: 1.75rem; 
  }
}

@media (max-width: 480px) {
  .mobile-section { 
    padding: 1.5rem 0.75rem; 
  }
  .header { 
    margin-bottom: 1.5rem; 
  }
  .header-title { 
    font-size: 1.5rem; 
  }
  .header-desc { 
    font-size: 0.85rem; 
  }
  .cards-grid { 
    grid-template-columns: 1fr; 
    gap: 1rem; 
  }
  .card { 
    border-radius: 16px; 
  }
  .card-image { 
    height: 170px; 
  }
  .card-content { 
    padding: 1rem; 
  }
  .card-content .desc { 
    font-size: 0.85rem; 
  }
  .highlight { 
    font-size: 0.78rem; 
  }
  .card-footer { 
    padding: 0.75rem 1rem; 
    font-size: 0.85rem; 
  }
  .overlay { 
    padding: 0; 
    align-items: flex-start; 
  }
  .modal { 
    border-radius: 0; 
    max-height: 100dvh; 
    height: 100dvh; 
    display: flex; 
    flex-direction: column; 
  }
  .modal-body { 
    flex: 1; 
    padding: 2.8rem 0.85rem 1rem; 
    gap: 1rem; 
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch; 
  }
  .close {
    top: 0.5rem;
    right: 0.5rem;
    width: 32px;
    height: 32px;
  }
  .gallery-section {
    gap: 0.75rem;
  }
  .carousel {
    max-width: 160px;
    border-radius: 12px;
  }
  .nav-btn {
    width: 28px;
    height: 28px;
  }
  .nav-btn svg { 
    width: 16px;
    height: 16px;
  }
  .counter { 
    font-size: 0.65rem; 
    padding: 0.25rem 0.5rem; 
    bottom: 0.5rem; 
    right: 0.5rem; 
  }
  .dot { 
    width: 6px; 
    height: 6px; 
  }
  .dot.active { 
    width: 18px;
  }
  .info-header { 
    gap: 0.6rem; 
  }
  .info-emoji { 
    font-size: 1.5rem; 
  }
  .info-header h2 { 
    font-size: 1.15rem; 
  }
  .info-desc { 
    font-size: 0.82rem; 
    line-height: 1.6; 
  }
  .features h3 { 
    font-size: 0.9rem; 
  }
  .features li { 
    font-size: 0.82rem; 
  }
  .features ul { 
    gap: 0.5rem; 
  }
}
</style>