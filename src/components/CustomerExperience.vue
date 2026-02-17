<script setup>
import { ref, computed, onMounted } from 'vue';
import { ChevronLeft, ChevronRight, Star, Users, Calendar, MapPin, Quote } from 'lucide-vue-next';
import { customers } from '../data/customers.js';

const currentIndex = ref(0);
const isAnimating = ref(false);
const direction = ref('next');

const currentCustomer = computed(() => customers[currentIndex.value]);

const nextSlide = () => {
  if (isAnimating.value) return;
  direction.value = 'next';
  isAnimating.value = true;
  currentIndex.value = (currentIndex.value + 1) % customers.length;
  setTimeout(() => isAnimating.value = false, 500);
};

const prevSlide = () => {
  if (isAnimating.value) return;
  direction.value = 'prev';
  isAnimating.value = true;
  currentIndex.value = currentIndex.value === 0 ? customers.length - 1 : currentIndex.value - 1;
  setTimeout(() => isAnimating.value = false, 500);
};

const goToSlide = (index) => {
  if (isAnimating.value || index === currentIndex.value) return;
  direction.value = index > currentIndex.value ? 'next' : 'prev';
  isAnimating.value = true;
  currentIndex.value = index;
  setTimeout(() => isAnimating.value = false, 500);
};

const autoPlayInterval = ref(null);

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

onMounted(() => {
  startAutoPlay();
});
</script>

<template>
  <section class="experience-section" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="background-pattern"></div>
    
    <div class="container">
      <div class="section-header">
        <div class="header-content">
          <h2 class="title">Customer Experiences</h2>
          <p class="subtitle">
            Join thousands of schools transforming education with Academy
          </p>
        </div>
      </div>

      <div class="testimonial-wrapper">
        <div class="testimonial-card" :class="{ 'animating': isAnimating, [direction]: true }">
          <div class="quote-decoration">
            <Quote :size="120" />
          </div>

          <div class="card-grid">
            <div class="customer-info">
              <div class="image-wrapper">
                <div class="image-ring"></div>
                <img 
                  :src="currentCustomer.image" 
                  :alt="currentCustomer.name"
                  class="customer-image"
                />
                <div class="rating-badge">
                  <Star :size="16" fill="currentColor" />
                  <span>{{ currentCustomer.rating }}</span>
                </div>
              </div>

              <div class="customer-details">
                <h3 class="customer-name">{{ currentCustomer.name }}</h3>
                <p class="customer-position">{{ currentCustomer.position }}</p>
                <p class="customer-institution">
                  <span class="institution-name">{{ currentCustomer.institution }}</span>
                </p>
                <p class="customer-location">
                  <MapPin :size="14" />
                  {{ currentCustomer.location }}
                </p>
              </div>

              <div class="stats-grid">
                <div class="stat-item">
                  <Users :size="20" />
                  <div>
                    <div class="stat-value">{{ currentCustomer.studentCount.toLocaleString() }}</div>
                    <div class="stat-label">Students</div>
                  </div>
                </div>
                <div class="stat-item">
                  <Calendar :size="20" />
                  <div>
                    <div class="stat-value">{{ currentCustomer.yearsUsing }}+ Years</div>
                    <div class="stat-label">Using Edufy</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="experience-content">
              <div class="stars">
                <Star v-for="i in 5" :key="i" :size="20" fill="currentColor" />
              </div>
              
              <blockquote class="experience-text">
                "{{ currentCustomer.experience }}"
              </blockquote>

              <div class="controls">
                <button @click="prevSlide" class="control-btn" aria-label="Previous testimonial">
                  <ChevronLeft :size="24" />
                </button>
                
                <div class="dots">
                  <button 
                    v-for="(customer, index) in customers" 
                    :key="customer.id"
                    @click="goToSlide(index)"
                    class="dot"
                    :class="{ active: index === currentIndex }"
                    :aria-label="`Go to testimonial ${index + 1}`"
                  ></button>
                </div>
                
                <button @click="nextSlide" class="control-btn" aria-label="Next testimonial">
                  <ChevronRight :size="24" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="customers-strip">
        <p class="strip-label">Trusted by leading institutions</p>
        <div class="customer-avatars">
          <div 
            v-for="(customer, index) in customers" 
            :key="customer.id"
            class="avatar-item"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
          >
            <img :src="customer.image" :alt="customer.name" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Manrope:wght@400;500;600;700&display=swap');

.experience-section {
  padding: 2rem 0;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.background-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: drift 60s linear infinite;
}

@keyframes drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 50px;
  color: #a78bfa;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-family: 'Manrope', sans-serif;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.25rem;
  }
  
  .subtitle {
    font-size: 1.05rem;
  }
}

.testimonial-wrapper {
  position: relative;
  z-index: 1;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.testimonial-card.animating {
  transform: scale(0.98);
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

@media (max-width: 968px) {
  .testimonial-card {
    padding: 3rem 2rem;
  }
}

@media (max-width: 640px) {
  .testimonial-card {
    padding: 2rem 1.5rem;
  }
}

.quote-decoration {
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: rgba(139, 92, 246, 0.08);
  pointer-events: none;
  transform: rotate(15deg);
}

@media (max-width: 768px) {
  .quote-decoration {
    display: none;
  }
}

.card-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 968px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.customer-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-wrapper {
  position: relative;
  margin-bottom: 2rem;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.image-ring {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  animation: rotate 8s linear infinite;
  opacity: 0.5;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.customer-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

@media (max-width: 640px) {
  .customer-image {
    width: 150px;
    height: 150px;
  }
}

.rating-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.4);
  z-index: 2;
  font-family: 'Manrope', sans-serif;
}

.customer-details {
  margin-bottom: 2rem;
}

.customer-name {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.customer-position {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  color: #a78bfa;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.customer-institution {
  margin-bottom: 0.5rem;
}

.institution-name {
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.customer-location {
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 360px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #a78bfa;
}

.stat-value {
  font-family: 'Manrope', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stars {
  display: flex;
  gap: 0.5rem;
  color: #fbbf24;
}

.experience-text {
  font-family: 'Manrope', sans-serif;
  font-size: 1.375rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  font-style: italic;
  margin: 0;
}

@media (max-width: 640px) {
  .experience-text {
    font-size: 1.125rem;
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.control-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.control-btn:hover {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-color: transparent;
  transform: scale(1.1);
}

.dots {
  display: flex;
  gap: 0.75rem;
  flex: 1;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.dot.active {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  width: 32px;
  border-radius: 6px;
}

.customers-strip {
  text-align: center;
  position: relative;
  z-index: 1;
}

.strip-label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.customer-avatars {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.avatar-item {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.avatar-item:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.avatar-item.active {
  border-color: #8b5cf6;
  opacity: 1;
  transform: scale(1.15);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.avatar-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>