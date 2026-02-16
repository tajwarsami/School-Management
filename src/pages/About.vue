<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="animated-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="description" data-aos="fade-right">
            <div class="badge-tag">
              <span class="pulse-dot"></span>
              {{ aboutData.hero.badge }}
            </div>
            <h1 class="main-title">
              About <span class="gradient-text">Academy</span>
            </h1>
            <p class="intro-text">
              {{ aboutData.hero.description[0] }}
            </p>
            <div class="hero-stats">
              <div 
                class="hero-stat-item" 
                v-for="(stat, index) in aboutData.hero.stats" 
                :key="index"
              >
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-text">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="image-carousel" data-aos="fade-left">
            <div class="carousel-frame">
              <transition name="fade" mode="out-in">
                <img 
                  :key="currentImage" 
                  :src="carouselImages[currentImage]" 
                  :alt="`School image ${currentImage + 1}`"
                  class="carousel-image"
                />
              </transition>
              <div class="carousel-indicators">
                <span 
                  v-for="(img, index) in carouselImages" 
                  :key="index"
                  :class="['indicator', { active: currentImage === index }]"
                  @click="currentImage = index"
                ></span>
              </div>
            </div>
            <div class="floating-card card-1">
              <div class="card-icon">📚</div>
              <div class="card-text">Smart Learning</div>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon">🎓</div>
              <div class="card-text">Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Our Purpose</span>
          <h2 class="section-title-alt">Vision & Mission</h2>
        </div>
        <div class="mv-grid">
          <div class="mv-card vision" data-aos="fade-up" data-aos-delay="100">
            <div class="card-glow"></div>
            <div class="mv-number">01</div>
            <h2>{{ aboutData.vision.title }}</h2>
            <p>{{ aboutData.vision.content }}</p>
            <div class="card-decoration"></div>
          </div>
          <div class="mv-card mission" data-aos="fade-up" data-aos-delay="200">
            <div class="card-glow"></div>
            <div class="mv-number">02</div>
            <h2>{{ aboutData.mission.title }}</h2>
            <p>{{ aboutData.mission.content }}</p>
            <div class="card-decoration"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What We Stand For</span>
          <h2 class="section-title-alt">Our Commitment</h2>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in commitmentData" :key="value.id" 
               data-aos="zoom-in" :data-aos-delay="index * 100">
            <div class="value-icon-wrapper">
              <div class="value-icon">{{ value.icon }}</div>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <ValueProposition theme="light" />

    <section class="company-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Meet Our Company</span>
          <h2 class="section-title-alt">About Automate IT</h2>
        </div>
        <div class="company-content">
          <div class="company-showcase">
            <div class="company-text" data-aos="fade-right">
              <div class="company-badge">
                <span class="badge-icon">{{ companyData.badge.icon }}</span>
                <span class="badge-text">{{ companyData.badge.text }}</span>
              </div>
              <h3 class="company-subtitle">{{ companyData.subtitle }}</h3>
              <p class="company-para">{{ companyData.description }}</p>
              <div class="company-stats">
                <div 
                  class="stat-item" 
                  v-for="(stat, index) in companyData.stats" 
                  :key="index"
                >
                  <div class="stat-icon">{{ stat.icon }}</div>
                  <div class="stat-number">{{ stat.number }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
            <div class="company-images" data-aos="fade-left">
              <div class="image-grid">
                <div 
                  v-for="(image, index) in companyData.images" 
                  :key="index"
                  :class="['company-img-wrapper', { 'main-img': image.main }]"
                >
                  <img 
                    :src="image.url" 
                    :alt="image.alt"
                    class="company-img"
                  />
                  <div class="img-overlay">
                    <span>{{ image.label }}</span>
                  </div>
                  <div class="img-border"></div>
                </div>
              </div>
              <div class="awards-badge">
                <div class="award-icon">{{ companyData.award.icon }}</div>
                <div class="award-text">
                  <div class="award-title">{{ companyData.award.title }}</div>
                  <div class="award-subtitle">{{ companyData.award.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection/>
  </div>
</template>

<script>
import ValueProposition from '../components/ValueProposition.vue';
import CtaSection from '../components/CtaSection.vue';
import { aboutData, commitmentData, companyData, carouselImages } from '../data/aboutContent.js';

export default {
  name: 'About',
  components: {
    ValueProposition,
    CtaSection
  },
  data() {
    return {
      aboutData,
      commitmentData,
      companyData,
      carouselImages,
      currentImage: 0
    }
  },
  mounted() {
    this.startCarousel();
    this.initAOS();
  },
  beforeUnmount() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
      }, 4000);
    },
    initAOS() {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-page {
  font-family: 'DM Sans', sans-serif;
  color: #1a1a2e;
  overflow-x: hidden;
  background: #fafbfc;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-section {
  position: relative;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  color: white;
  padding: 60px 0 40px;
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.6) 0%, transparent 70%);
  top: -250px;
  left: -150px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(78, 205, 196, 0.5) 0%, transparent 70%);
  bottom: -200px;
  right: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 195, 113, 0.5) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(120px, -60px) scale(1.15); }
  66% { transform: translate(-70px, 120px) scale(0.9); }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.25), rgba(78, 205, 196, 0.25));
  backdrop-filter: blur(20px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.pulse-dot {
  width: 9px;
  height: 9px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
}

@keyframes pulse {
  0% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
  }
  50% { 
    transform: scale(1.1);
    box-shadow: 0 0 0 8px rgba(74, 222, 128, 0);
  }
  100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

.main-title {
  font-size: 4rem;
  margin-bottom: 32px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-family: 'Playfair Display', serif;
}

.gradient-text {
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s infinite linear;
  background-size: 200% 200%;
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.intro-text {
  font-size: 1.15rem;
  line-height: 1.9;
  margin-bottom: 28px;
  opacity: 0.95;
  font-weight: 400;
  color: #e8f4f8;
}

.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 40px;
}

.hero-stat-item {
  text-align: center;
  padding: 20px 28px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.hero-stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-value {
  font-size: 2.75rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ffd93d, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Playfair Display', serif;
}

.stat-text {
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 500;
}

.image-carousel {
  position: relative;
}

.carousel-frame {
  position: relative;
  height: 520px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border: 5px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 14px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.indicator {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  width: 36px;
  border-radius: 6px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.5);
}

.floating-card {
  position: absolute;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.95), rgba(255, 195, 113, 0.95));
  padding: 18px 28px;
  border-radius: 20px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 14px;
  animation: floatCard 3s infinite ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.card-1 {
  top: 70px;
  right: -50px;
  animation-delay: 0s;
}

.card-2 {
  bottom: 70px;
  left: -50px;
  animation-delay: 1.5s;
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.95), rgba(102, 252, 241, 0.95));
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-18px) rotate(2deg); }
}

.card-icon {
  font-size: 2.25rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.card-text {
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  color: white;
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
}

.section-title-alt {
  font-size: 3.25rem;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
  font-family: 'Playfair Display', serif;
}

.mission-vision-section {
  padding: 40px 0;
  background: linear-gradient(135deg, #fff5f5 0%, #e0f7fa 100%);
  position: relative;
}

.mission-vision-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" fill="none"/><circle cx="40" cy="40" r="2" fill="rgba(255,107,107,0.15)"/></svg>');
  opacity: 0.4;
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;
}

.mv-card {
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 2px solid transparent;
}

.mv-card.vision {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
  border-color: rgba(255, 107, 107, 0.2);
}

.mv-card.mission {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  border-color: rgba(78, 205, 196, 0.2);
}

.mv-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.15);
}

.mv-card.vision:hover {
  border-color: #ff6b6b;
}

.mv-card.mission:hover {
  border-color: #4ecdc4;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.mv-card.vision .card-glow {
  background: radial-gradient(circle at top right, rgba(255, 107, 107, 0.25), transparent 60%);
}

.mv-card.mission .card-glow {
  background: radial-gradient(circle at top right, rgba(78, 205, 196, 0.25), transparent 60%);
}

.mv-card:hover .card-glow {
  opacity: 1;
}

.mv-card .mv-number {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.08), rgba(78, 205, 196, 0.08));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 28px;
  font-family: 'Playfair Display', serif;
}

.mv-card h2 {
  font-size: 2.25rem;
  margin-bottom: 24px;
  color: #1a1a2e;
  font-weight: 800;
  font-family: 'Playfair Display', serif;
}

.mv-card p {
  font-size: 1.0625rem;
  line-height: 1.9;
  color: #4a5568;
}

.card-decoration {
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  opacity: 0.12;
}

.mv-card.vision .card-decoration {
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%);
}

.mv-card.mission .card-decoration {
  background: linear-gradient(135deg, #4ecdc4 0%, #66fcf1 100%);
}

.values-section {
  padding: 40px 0;
  background: white;
  position: relative;
}

.values-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, rgba(78, 205, 196, 0.05), transparent);
  pointer-events: none;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  position: relative;
  z-index: 1;
}

.value-card {
  text-align: center;
  padding: 40px 28px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  border: 2px solid #e9ecef;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.value-card:hover::before {
  opacity: 1;
}

.value-card:hover {
  border-color: #ff6b6b;
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 16px 48px rgba(255, 107, 107, 0.2);
}

.value-icon-wrapper {
  width: 90px;
  height: 90px;
  margin: 0 auto 28px;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 32px rgba(255, 107, 107, 0.35);
  position: relative;
  z-index: 1;
  transition: all 0.4s ease;
}

.value-card:hover .value-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 16px 48px rgba(255, 107, 107, 0.5);
}

.value-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.value-card h3 {
  font-size: 1.6rem;
  color: #1a1a2e;
  margin-bottom: 18px;
  font-weight: 800;
  font-family: 'Playfair Display', serif;
  position: relative;
  z-index: 1;
}

.value-card p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  position: relative;
  z-index: 1;
}

.company-section {
  padding: 40px 0;
  background: linear-gradient(180deg, #f0f4f8 0%, #d9e2ec 100%);
  position: relative;
  overflow: hidden;
}

.company-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(78, 205, 196, 0.1), transparent 70%);
  border-radius: 50%;
}

.company-content {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.company-showcase {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 70px;
  align-items: center;
}

.company-text {
  padding: 24px;
}

.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  margin-bottom: 32px;
  font-weight: 700;
  box-shadow: 0 10px 32px rgba(255, 107, 107, 0.4);
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.company-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 14px 40px rgba(255, 107, 107, 0.5);
}

.badge-icon {
  font-size: 1.5rem;
}

.company-subtitle {
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 32px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-family: 'Playfair Display', serif;
}

.company-para {
  font-size: 1.0625rem;
  line-height: 2;
  color: #2d3748;
  margin-bottom: 28px;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 28px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-item:hover::before {
  opacity: 1;
}

.stat-item:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  border-color: #4ecdc4;
}

.stat-icon {
  font-size: 2.25rem;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}

.stat-number {
  font-size: 2.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  line-height: 1;
  font-family: 'Playfair Display', serif;
  position: relative;
  z-index: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.company-images {
  position: relative;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.main-img {
  grid-column: 1 / -1;
}

.company-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid rgba(255, 255, 255, 0.8);
}

.company-img-wrapper:hover {
  transform: scale(1.08) rotate(-2deg);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
  border-color: #ff6b6b;
}

.company-img-wrapper:hover .img-overlay {
  opacity: 1;
}

.company-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.company-img-wrapper:hover .company-img {
  transform: scale(1.1);
}

.main-img .company-img {
  height: 340px;
}

.image-grid .company-img-wrapper:not(.main-img) .company-img {
  height: 240px;
}

.img-border {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  bottom: 14px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  pointer-events: none;
  transition: all 0.4s ease;
}

.company-img-wrapper:hover .img-border {
  border-color: rgba(255, 107, 107, 0.8);
  border-width: 3px;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(255, 107, 107, 0.95), rgba(78, 205, 196, 0.85));
  color: white;
  padding: 28px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.img-overlay span {
  font-weight: 800;
  font-size: 1.2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.awards-badge {
  position: absolute;
  top: 24px;
  right: -24px;
  background: linear-gradient(135deg, #ffd93d, #ff6b6b);
  padding: 20px 28px;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(255, 107, 107, 0.4);
  display: flex;
  align-items: center;
  gap: 14px;
  animation: floatBadge 3s infinite ease-in-out;
  border: 3px solid white;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-14px) rotate(3deg); }
}

.award-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
}

.award-title {
  font-weight: 800;
  color: white;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.award-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .carousel-frame {
    height: 420px;
  }
  
  .mv-grid {
    grid-template-columns: 1fr;
  }
  
  .company-showcase {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.75rem;
  }
  
  .section-title-alt {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }
  
  .company-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2.25rem;
  }
  
  .company-subtitle {
    font-size: 1.9rem;
  }
  
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .section-title-alt {
    font-size: 2rem;
  }
  
  .floating-card {
    display: none;
  }
}
</style>