<template>
  <div class="services-page">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Our Services & Products
          </div>
          <h1 class="hero-title">
            {{ serviceHighlights.title }}
          </h1>
          <p class="hero-subtitle">
            {{ serviceHighlights.subtitle }}
          </p>
          
          <div class="hero-stats">
            <div 
              class="stat-box" 
              v-for="(stat, index) in serviceHighlights.stats" 
              :key="index"
              data-aos="zoom-in" 
              :data-aos-delay="index * 100"
            >
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Our Services</h2>
          <p class="section-description">
            Comprehensive solutions tailored to meet your unique business needs
          </p>
        </div>

        <div class="services-grid">
          <div 
            class="service-card" 
            v-for="(service, index) in servicesData" 
            :key="service.id"
            data-aos="fade-up" 
            :data-aos-delay="index * 100"
          >
            <div class="service-header">
              <div class="service-icon-wrapper">
                <div class="service-icon">{{ service.icon }}</div>
                <div class="icon-glow"></div>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
            </div>
            
            <p class="service-description">{{ service.description }}</p>
            
            <ul class="service-features">
              <li v-for="(feature, idx) in service.features" :key="idx">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            
            <button class="service-button">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">Our Products</h2>
          <p class="section-description">
            Powerful, ready-to-deploy solutions to accelerate your digital transformation
          </p>
        </div>

        <div class="products-grid">
          <div 
            class="product-card" 
            v-for="(product, index) in productsData" 
            :key="product.id"
            :style="{ '--product-color': product.color }"
            data-aos="zoom-in" 
            :data-aos-delay="index * 150"
          >
            <div class="product-glow"></div>
            
            <div class="product-header">
              <div class="product-icon-wrapper">
                <div class="product-icon">{{ product.icon }}</div>
              </div>
              <h3 class="product-title">{{ product.title }}</h3>
            </div>
            
            <p class="product-description">{{ product.description }}</p>
            
            <ul class="product-features">
              <li v-for="(feature, idx) in product.features" :key="idx">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
            
            <a :href="product.link" class="product-link">
              <span>Explore Product</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { servicesData, productsData, serviceHighlights } from '../data/servicesData.js';

export default {
  name: 'Services',
  data() {
    return {
      servicesData,
      productsData,
      serviceHighlights
    }
  },
  mounted() {
    this.initAOS();
  },
  methods: {
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
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.services-page {
  font-family: 'Poppins', sans-serif;
  color: #1f2937;
  overflow-x: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-section {
  position: relative;
  background: linear-gradient(135deg, #00529B 0%, #1a237e 50%, #6B4E9B 100%);
  color: white;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(107, 78, 155, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 32px;
  letter-spacing: 0.5px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

.hero-title {
  font-family: 'Outfit', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.95;
  margin-bottom: 60px;
  font-weight: 400;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 60px;
}

.stat-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 32px 24px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.stat-box:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-8px);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 500;
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -80px;
  left: -80px;
  animation-delay: 7s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(50px, -30px) rotate(120deg); }
  66% { transform: translate(-30px, 50px) rotate(240deg); }
}

.services-section {
  padding: 20px 0px;
  background: #f9fafb;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  color: white;
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
}

.section-title {
  font-family: 'Outfit', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service-card {
  background: white;
  padding: 40px 32px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 48px rgba(0, 82, 155, 0.15);
  border-color: #00529B;
}

.service-header {
  margin-bottom: 24px;
}

.service-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 82, 155, 0.3);
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.service-icon {
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
}

.icon-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .icon-glow {
  opacity: 1;
}

.service-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
  line-height: 1.3;
}

.service-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 24px;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  margin-bottom: 28px;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.5;
}

.service-features li svg {
  flex-shrink: 0;
  color: #00529B;
  margin-top: 2px;
}

.service-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.service-button:hover {
  gap: 14px;
  box-shadow: 0 8px 24px rgba(0, 82, 155, 0.4);
  transform: translateX(4px);
}

.products-section {
  padding: 20px 0px;
  background: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.product-card {
  position: relative;
  background: linear-gradient(135deg, var(--product-color) 0%, color-mix(in srgb, var(--product-color) 80%, black) 100%);
  color: white;
  padding: 48px 40px;
  border-radius: 32px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
}

.product-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .product-glow {
  opacity: 1;
}

.product-header {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.product-icon-wrapper {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.product-icon {
  font-size: 2.25rem;
}

.product-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}

.product-description {
  font-size: 1.0625rem;
  margin-bottom: 32px;
  opacity: 0.95;
  line-height: 1.7;
}

.product-features {
  list-style: none;
  margin-bottom: 36px;
}

.product-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.9375rem;
  font-weight: 500;
}

.product-features li svg {
  flex-shrink: 0;
  color: #4ade80;
}

.product-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.0625rem;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.product-link:hover {
  background: rgba(255, 255, 255, 0.3);
  gap: 14px;
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>