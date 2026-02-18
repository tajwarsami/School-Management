<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
  autoPlayInterval.value = setInterval(() => nextSlide(), 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

onMounted(() => startAutoPlay());
onUnmounted(() => stopAutoPlay());
</script>

<template>
  <section class="experience-section" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="background-pattern"></div>

    <div class="container">
      <div class="section-header">
        <h2 class="title">Customer Experiences</h2>
        <p class="subtitle">Join thousands of schools transforming education with Academy</p>
      </div>

      <div class="testimonial-wrapper">
        <div class="testimonial-card" :class="{ animating: isAnimating, [direction]: true }">
          <div class="quote-decoration">
            <Quote :size="100" />
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
                  <Star :size="14" fill="currentColor" />
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
                  <MapPin :size="13" />
                  {{ currentCustomer.location }}
                </p>
              </div>

              <div class="stats-grid">
                <div class="stat-item">
                  <Users :size="18" />
                  <div>
                    <div class="stat-value">{{ currentCustomer.studentCount.toLocaleString() }}</div>
                    <div class="stat-label">Students</div>
                  </div>
                </div>
                <div class="stat-item">
                  <Calendar :size="18" />
                  <div>
                    <div class="stat-value">{{ currentCustomer.yearsUsing }}+ Years</div>
                    <div class="stat-label">Using Academy</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="experience-content">
              <div class="stars">
                <Star v-for="i in 5" :key="i" :size="18" fill="currentColor" />
              </div>

              <blockquote class="experience-text">
                "{{ currentCustomer.experience }}"
              </blockquote>

              <div class="controls">
                <button @click="prevSlide" class="control-btn" aria-label="Previous">
                  <ChevronLeft :size="22" />
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

                <button @click="nextSlide" class="control-btn" aria-label="Next">
                  <ChevronRight :size="22" />
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

* { box-sizing: border-box; }

.experience-section {
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.background-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.6);
  max-width: 560px;
  margin: 0 auto;
}

.testimonial-wrapper {
  margin-bottom: 2.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: clamp(1.25rem, 4vw, 3.5rem);
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

.quote-decoration {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: rgba(139, 92, 246, 0.07);
  pointer-events: none;
  transform: rotate(15deg);
}

.card-grid {
  padding: 1rem;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.customer-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.image-ring {
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
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
  width: clamp(110px, 18vw, 180px);
  height: clamp(110px, 18vw, 180px);
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  display: block;
}

.rating-badge {
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: white;
  padding: 0.35rem 0.6rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-weight: 700;
  font-size: 0.82rem;
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.4);
  z-index: 2;
  font-family: 'Manrope', sans-serif;
}

.customer-details {
  margin-bottom: 1.25rem;
}

.customer-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 3vw, 1.85rem);
  font-weight: 700;
  color: white;
  margin: 0 0 0.4rem;
}

.customer-position {
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  color: #a78bfa;
  font-weight: 600;
  margin: 0 0 0.2rem;
}

.customer-institution {
  margin: 0 0 0.35rem;
}

.institution-name {
  font-family: 'Manrope', sans-serif;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.customer-location {
  font-family: 'Manrope', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 320px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #a78bfa;
}

.stat-value {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.15rem);
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.2rem;
}

.stat-label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stars {
  display: flex;
  gap: 0.4rem;
  color: #fbbf24;
}

.experience-text {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 400;
  font-style: italic;
  margin: 0;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.control-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
}

.control-btn:hover {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-color: transparent;
  transform: scale(1.1);
}

.dots {
  display: flex;
  gap: 0.6rem;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover { background: rgba(255, 255, 255, 0.4); }

.dot.active {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  width: 28px;
  border-radius: 5px;
}

.customers-strip {
  text-align: center;
}

.strip-label {
  font-family: 'Manrope', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.customer-avatars {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.avatar-item {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.5;
  flex-shrink: 0;
}

.avatar-item:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.avatar-item.active {
  border-color: #8b5cf6;
  opacity: 1;
  transform: scale(1.15);
  box-shadow: 0 0 18px rgba(139, 92, 246, 0.5);
}

.avatar-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .quote-decoration {
    display: none;
  }
}

@media (max-width: 640px) {
  .experience-section {
    padding: 2rem 0.85rem 0.75rem;
  }

  .section-header {
    margin-bottom: 1.25rem;
  }

  .testimonial-card {
    border-radius: 20px;
  }

  .stats-grid {
    max-width: 100%;
  }

  .stat-item {
    padding: 0.75rem;
    gap: 0.5rem;
  }

  .controls {
    gap: 0.75rem;
  }

  .control-btn {
    width: 40px;
    height: 40px;
  }

  .avatar-item {
    width: 44px;
    height: 44px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .dot.active {
    width: 22px;
  }
}

@media (max-width: 400px) {
  .experience-section {
    padding: 2rem 0.65rem 0.5rem;
  }

  .section-header {
    margin-bottom: 1rem;
  }

  .testimonial-card {
    border-radius: 16px;
    padding: 1rem;
  }

  .stats-grid {
    gap: 0.75rem;
  }

  .stat-item {
    padding: 0.6rem;
    border-radius: 10px;
  }

  .controls {
    gap: 0.5rem;
  }

  .control-btn {
    width: 36px;
    height: 36px;
  }

  .avatar-item {
    width: 38px;
    height: 38px;
    border-width: 2px;
  }

  .customer-avatars {
    gap: 0.5rem;
  }
}
</style>