<script setup>
import { whyChooseUsData } from '../data/whyChooseUsData.js';
</script>

<template>
  <section class="why-choose-section">
    <div class="background-pattern"></div>
    
    <div class="container">
      <div class="section-header">
        <div class="header-decoration"></div>
        <h2 class="section-title">Why Choose Us</h2>
        <p class="section-subtitle">Your Partner in Intelligent Automation</p>
      </div>

      <div class="benefits-grid">
        <div 
          v-for="(item, index) in whyChooseUsData" 
          :key="index" 
          class="benefit-card"
          :style="{ '--card-delay': index * 0.1 + 's' }"
        >
          <div class="card-inner">
            <div class="icon-wrapper" :style="{ '--theme-color': item.color }">
              <div class="icon-bg"></div>
              <component :is="item.icon" :size="28" class="icon" />
              <div class="icon-glow"></div>
            </div>
            
            <div class="content">
              <h3 class="benefit-title">{{ item.title }}</h3>
              <p class="benefit-desc">{{ item.desc }}</p>
            </div>

            <div class="card-accent" :style="{ backgroundColor: item.color }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');

.why-choose-section {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1629 100%);
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px);
  background-size: 60px 60px;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
}

.header-decoration {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #FF6B35, #F77F00, #06A77D);
  margin: 0 auto 2rem;
  border-radius: 2px;
  animation: slideIn 0.8s ease-out;
}

.section-title {
  font-family: 'Archivo', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #8892b0;
  font-weight: 400;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  animation: cardFadeIn 0.6s ease-out var(--card-delay) both;
}

.card-inner {
  position: relative;
  background: rgba(20, 25, 45, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2.5rem;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.benefit-card:hover .card-inner {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.benefit-card:hover .card-inner::before {
  opacity: 1;
}

.icon-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--theme-color);
  opacity: 0.15;
  border-radius: 12px;
  transform: rotate(5deg);
  transition: all 0.4s ease;
}

.benefit-card:hover .icon-bg {
  opacity: 0.25;
  transform: rotate(10deg) scale(1.1);
}

.icon {
  position: relative;
  z-index: 2;
  color: var(--theme-color);
  filter: drop-shadow(0 4px 12px var(--theme-color));
  transition: transform 0.4s ease;
}

.benefit-card:hover .icon {
  transform: scale(1.1) rotate(-5deg);
}

.icon-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--theme-color), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 50%;
}

.benefit-card:hover .icon-glow {
  opacity: 0.3;
}

.content {
  position: relative;
  z-index: 2;
}

.benefit-title {
  font-family: 'Archivo', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e6e9f0;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.benefit-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #8892b0;
  font-weight: 400;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.benefit-card:hover .card-accent {
  opacity: 1;
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 80px;
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 968px) {
  .why-choose-section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .card-inner {
    padding: 2rem;
  }

  .benefit-title {
    font-size: 1.3rem;
  }

  .benefit-desc {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .benefits-grid {
    gap: 1.5rem;
  }
}
</style>