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

    <section class="cta-section">
      <div class="container">
        <div class="cta-content" data-aos="zoom-in">
          <div class="cta-text">
            <h2 class="cta-title">Ready to Transform Your Institution?</h2>
            <p class="cta-description">
              Discover our comprehensive range of services designed to streamline your operations and enhance educational excellence.
            </p>
          </div>
          <button @click="goToServices" class="cta-button">
            <span>Explore Our Services</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ValueProposition from '../components/ValueProposition.vue';
import { aboutData, commitmentData, companyData, carouselImages } from '../data/aboutContent.js';

export default {
  name: 'About',
  components: {
    ValueProposition
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
    },
    goToServices() {
      this.$router.push('/services');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-page {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  overflow-x: hidden;
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
  padding: 80px 0 60px;
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
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  top: -200px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(118,75,162,0.6) 0%, transparent 70%);
  bottom: -150px;
  right: -100px;
  animation-delay: 5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(102,126,234,0.5) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 100px) scale(0.9); }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.main-title {
  font-size: 3.5rem;
  margin-bottom: 32px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 24px;
  opacity: 0.95;
  font-weight: 400;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 32px;
}

.hero-stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
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
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  width: 32px;
  border-radius: 5px;
  background: white;
}

.floating-card {
  position: absolute;
  background: rgba(42, 10, 59, 0.7);
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: floatCard 3s infinite ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-1 {
  top: 60px;
  right: -40px;
  animation-delay: 0s;
}

.card-2 {
  bottom: 60px;
  left: -40px;
  animation-delay: 1.5s;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-size: 1rem;
  font-weight: 700;
  color: #E83E8C;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  color: white;
  padding: 6px 20px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.section-title-alt {
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.mission-vision-section {
  padding: 80px 0;
  background: #f9fafb;
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.mv-card {
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.mv-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #00529B;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(0, 82, 155, 0.1), transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.mv-card:hover .card-glow {
  opacity: 1;
}

.mv-card .mv-number {
  font-size: 5rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.05);
  line-height: 1;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
}

.mv-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1f2937;
  font-weight: 700;
}

.mv-card p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #4b5563;
}

.card-decoration {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  border-radius: 50%;
  opacity: 0.05;
}

.values-section {
  padding: 80px 0;
  background: #f9fafb;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.value-card {
  text-align: center;
  padding: 40px 28px;
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  border-color: #00529B;
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 82, 155, 0.2);
}

.value-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 82, 155, 0.3);
}

.value-icon {
  font-size: 2.25rem;
}

.value-card h3 {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 700;
}

.value-card p {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
}

.company-section {
  padding: 80px 0;
  background: #f9fafb;
}

.company-content {
  max-width: 1280px;
  margin: 0 auto;
}

.company-showcase {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.company-text {
  padding: 24px;
}

.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  color: white;
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 82, 155, 0.3);
  font-size: 0.9375rem;
}

.badge-icon {
  font-size: 1.375rem;
}

.company-subtitle {
  font-size: 2.25rem;
  color: #1f2937;
  margin-bottom: 28px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.company-para {
  font-size: 1.0625rem;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 24px;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.stat-item {
  text-align: center;
  padding: 28px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  border-color: #00529B;
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
}

.company-images {
  position: relative;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.main-img {
  grid-column: 1 / -1;
}

.company-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.company-img-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2);
}

.company-img-wrapper:hover .img-overlay {
  opacity: 1;
}

.company-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.main-img .company-img {
  height: 320px;
}

.image-grid .company-img-wrapper:not(.main-img) .company-img {
  height: 220px;
}

.img-border {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  pointer-events: none;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  color: white;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.img-overlay span {
  font-weight: 700;
  font-size: 1.125rem;
}

.awards-badge {
  position: absolute;
  top: 20px;
  right: -20px;
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: floatBadge 3s infinite ease-in-out;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.award-icon {
  font-size: 2rem;
}

.award-title {
  font-weight: 700;
  color: #1f2937;
  font-size: 0.9375rem;
}

.award-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="none"/><circle cx="30" cy="30" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.4;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 60px;
  border-radius: 24px;
}

.cta-text {
  flex: 1;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #00529B;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  gap: 16px;
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .carousel-frame {
    height: 400px;
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

  .cta-content {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .section-title-alt {
    font-size: 2.25rem;
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

  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }
  
  .company-subtitle {
    font-size: 1.75rem;
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

  .cta-content {
    padding: 32px 24px;
  }

  .cta-title {
    font-size: 1.75rem;
  }
}
</style>