<script setup>
import { ArrowLeft, ArrowRight, LayoutTemplate } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const templates = [
  { name: "Horizon Academy", color: "#2E86AB" },
  { name: "Greenleaf Campus", color: "#52B788" }
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

const goToTemplates = () => {
  router.push('/templates');
};
</script>

<template>
  <section class="showcase-section">
    <div class="container">
      <div class="header-group">
        <h2 class="headline">
          Choose School Website with <span class="text-accent">Academy</span>
        </h2>
        <div class="header-right">
          <button class="btn-view-all" @click="goToTemplates">
            <LayoutTemplate :size="16" />
            View All Templates
          </button>
        </div>
      </div>

      <div class="carousel-container" ref="scrollContainer">
        <div
          class="template-card"
          v-for="(template, index) in templates"
          :key="index"
          @click="goToTemplates"
        >
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
          <p class="template-cta">Click to explore →</p>
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
  gap: 1.5rem;
}

.headline {
  font-size: 2.25rem;
  font-weight: 700;
  max-width: 600px;
  line-height: 1.2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
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
  cursor: pointer;
  background: transparent;
}

.nav-btn:hover {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid var(--color-primary, #00529B);
  color: var(--color-primary, #00529B);
  background: transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-view-all:hover {
  background: var(--color-primary, #00529B);
  color: white;
}

.btn-view-all.secondary {
  border: none;
  background: var(--gradient-primary, linear-gradient(135deg, #00529B, #0066C0));
  color: white;
  padding: 0.65rem 1.4rem;
  font-size: 0.9rem;
  box-shadow: 0 4px 14px rgba(0, 82, 155, 0.25);
}

.btn-view-all.secondary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 82, 155, 0.35);
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
  flex: 1 1 0;
  min-width: 280px;
  scroll-snap-align: start;
  cursor: pointer;
}

.template-card:hover .mockup-frame {
  transform: translateY(-5px);
}

.template-card:hover .template-cta {
  color: var(--color-primary);
}

.mockup-frame {
  margin-bottom: 1.5rem;
  transition: transform 0.3s;
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

.dot { width: 8px; height: 8px; border-radius: 50%; }
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

.skeleton-row.short { width: 60%; }

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
  margin-bottom: 0.25rem;
}

.template-cta {
  text-align: center;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-muted, #9CA3AF);
  transition: color 0.2s ease;
  margin: 0;
}

.bottom-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg-body, #F9FAFB);
  border: 1px solid var(--color-border, #E5E7EB);
  border-radius: 12px;
  margin-top: 0.5rem;
}

.bottom-cta-text {
  font-size: 0.9rem;
  color: var(--color-text-secondary, #6B7280);
  font-weight: 500;
}

@media (max-width: 768px) {
  .template-card { flex: 0 0 85vw; }
  .header-group { flex-direction: column; align-items: flex-start; }
  .header-right { width: 100%; justify-content: space-between; }
  .bottom-cta { flex-direction: column; gap: 1rem; text-align: center; }
  .btn-view-all.secondary { width: 100%; justify-content: center; }
}
</style>