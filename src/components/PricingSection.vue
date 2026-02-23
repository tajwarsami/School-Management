<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Check, Users, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { plans as initialPlans, studentRanges } from '../data/pricing'

const router = useRouter()
const billingType = ref('monthly')
const plans = ref(JSON.parse(JSON.stringify(initialPlans)))
const currentSlide = ref(0)

const getPrice = (plan) => {
  if (plan.custom) return 'Custom'
  return plan.prices[billingType.value][plan.selectedRange]
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-BD').format(price)
}

const handleOrderClick = (plan) => {
  if (plan.custom) {
    router.push('/contact')
  } else {
    router.push({
      path: '/checkout',
      query: {
        plan: plan.name,
        range: plan.selectedRange,
        billing: billingType.value
      }
    })
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) currentSlide.value--
}

const nextSlide = () => {
  if (currentSlide.value < plans.value.length - 1) currentSlide.value++
}

const touchStartX = ref(0)
const touchEndX = ref(0)

const onTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const onTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  const diff = touchStartX.value - touchEndX.value
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide()
    else prevSlide()
  }
}
</script>

<template>
  <section class="pricing-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Choose Your Perfect Plan</h2>
        <p class="section-subtitle">
          Flexible pricing designed to grow with your institution. No hidden fees, transparent pricing.
        </p>
      </div>

      <div class="billing-toggle-wrapper">
        <div class="billing-toggle">
          <button 
            :class="{ active: billingType === 'monthly' }" 
            @click="billingType = 'monthly'"
          >
            Monthly
          </button>
          <button 
            :class="{ active: billingType === 'yearly' }" 
            @click="billingType = 'yearly'"
          >
            Yearly
            <span class="save-badge">Save 10%</span>
          </button>
        </div>
      </div>

      <div class="pricing-grid desktop-grid">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="pricing-card"
          :class="{ 
            recommended: plan.recommended,
            custom: plan.custom 
          }"
        >
          <div v-if="plan.recommended" class="recommended-badge">
            ⭐ Most Popular
          </div>

          <div class="card-header">
            <div class="plan-icon">{{ plan.icon }}</div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-description">{{ plan.description }}</p>
          </div>

          <div class="price-section">
            <div v-if="!plan.custom" class="price">
              <span class="currency">৳</span>
              <span class="amount">{{ formatPrice(getPrice(plan)) }}</span>
              <span class="period">/ {{ billingType }}</span>
            </div>
            <div v-else class="price custom-price">
              <span class="amount">Let's Talk</span>
            </div>

            <p v-if="!plan.custom" class="one-time-charge">
              + ৳{{ formatPrice(plan.oneTimeCharge) }} one-time setup
            </p>
          </div>

          <div v-if="!plan.custom" class="range-selector">
            <label class="range-label">
              <Users :size="16" />
              Select Student Range
            </label>
            <div class="range-grid">
              <button
                v-for="range in studentRanges"
                :key="range.value"
                :class="{ active: plan.selectedRange === range.value }"
                @click="plan.selectedRange = range.value"
                class="range-button"
              >
                <span class="radio-circle">
                  <span class="radio-inner"></span>
                </span>
                <span class="range-text">{{ range.label }}</span>
              </button>
            </div>
          </div>

          <div v-if="plan.custom" class="features-section">
            <h4 class="features-title">What's included:</h4>
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                <div class="check-icon">
                  <Check :size="16" />
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <button 
            class="cta-button" 
            :class="{ primary: plan.recommended }"
            @click="handleOrderClick(plan)"
          >
            {{ plan.custom ? 'Contact Sales' : 'Order Now' }}
            <span class="arrow">→</span>
          </button>
        </div>
      </div>

      <div class="mobile-carousel">
        <div 
          class="carousel-track-wrapper"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 1}rem))` }"
          >
            <div
              v-for="plan in plans"
              :key="plan.name"
              class="pricing-card carousel-card"
              :class="{ 
                recommended: plan.recommended,
                custom: plan.custom 
              }"
            >
              <div v-if="plan.recommended" class="recommended-badge">
                ⭐ Most Popular
              </div>

              <div class="card-header">
                <div class="plan-icon">{{ plan.icon }}</div>
                <h3 class="plan-name">{{ plan.name }}</h3>
                <p class="plan-description">{{ plan.description }}</p>
              </div>

              <div class="price-section">
                <div v-if="!plan.custom" class="price">
                  <span class="currency">৳</span>
                  <span class="amount">{{ formatPrice(getPrice(plan)) }}</span>
                  <span class="period">/ {{ billingType }}</span>
                </div>
                <div v-else class="price custom-price">
                  <span class="amount">Let's Talk</span>
                </div>
                <p v-if="!plan.custom" class="one-time-charge">
                  + ৳{{ formatPrice(plan.oneTimeCharge) }} one-time setup
                </p>
              </div>

              <div v-if="!plan.custom" class="range-selector">
                <label class="range-label">
                  <Users :size="16" />
                  Select Student Range
                </label>
                <div class="range-grid">
                  <button
                    v-for="range in studentRanges"
                    :key="range.value"
                    :class="{ active: plan.selectedRange === range.value }"
                    @click="plan.selectedRange = range.value"
                    class="range-button"
                  >
                    <span class="radio-circle">
                      <span class="radio-inner"></span>
                    </span>
                    <span class="range-text">{{ range.label }}</span>
                  </button>
                </div>
              </div>

              <div v-if="plan.custom" class="features-section">
                <h4 class="features-title">What's included:</h4>
                <ul class="features-list">
                  <li v-for="feature in plan.features" :key="feature">
                    <div class="check-icon">
                      <Check :size="16" />
                    </div>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <button 
                class="cta-button" 
                :class="{ primary: plan.recommended }"
                @click="handleOrderClick(plan)"
              >
                {{ plan.custom ? 'Contact Sales' : 'Order Now' }}
                <span class="arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button 
            class="carousel-arrow left" 
            :disabled="currentSlide === 0"
            @click="prevSlide"
            aria-label="Previous plan"
          >
            <ChevronLeft :size="22" />
          </button>

          <div class="carousel-dots">
            <button
              v-for="(plan, index) in plans"
              :key="index"
              class="carousel-dot"
              :class="{ active: currentSlide === index }"
              @click="currentSlide = index"
              :aria-label="`Go to ${plan.name}`"
            />
          </div>

          <button 
            class="carousel-arrow right" 
            :disabled="currentSlide === plans.length - 1"
            @click="nextSlide"
            aria-label="Next plan"
          >
            <ChevronRight :size="22" />
          </button>
        </div>

        <p class="carousel-counter">{{ currentSlide + 1 }} / {{ plans.length }}</p>
      </div>

      <div class="info-section">
        <div class="info-cards">
          <div class="info-card">
            <div class="info-icon">💳</div>
            <h4>Flexible Payment</h4>
            <p>Pay monthly or yearly with secure payment options</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🔒</div>
            <h4>Secure & Reliable</h4>
            <p>99.9% uptime guarantee with enterprise-grade security</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📞</div>
            <h4>24/7 Support</h4>
            <p>Dedicated support team ready to help you succeed</p>
          </div>
        </div>
      </div>

      <div class="notes">
        <p>* 5% VAT applicable on all fees and charges</p>
        <p>* Each add-on module has a separate charge</p>
        <p>* All prices are in Bangladeshi Taka (BDT)</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.pricing-section {
  padding: 3rem 1.5rem;
  background: linear-gradient(to bottom, var(--color-card-light) 0%, var(--color-bg-section-alt) 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.pricing-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 82, 155, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.pricing-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
}

.billing-toggle-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.billing-toggle {
  display: inline-flex;
  background: white;
  border-radius: 50px;
  padding: 4px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05);
  gap: 4px;
}

.billing-toggle button {
  padding: 0.5rem 1.5rem;
  border: none;
  background: transparent;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: #666;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.billing-toggle button.active {
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 82, 155, 0.4);
  transform: scale(1.02);
}

.save-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-size: 0.6rem;
  padding: 2px 5px;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.desktop-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.mobile-carousel {
  display: none;
}
.pricing-card {
  background: var(--color-card-dark);
  border-radius: 16px;
  padding: 1rem 1rem 0.85rem;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 82, 155, 0.3);
}

.pricing-card.recommended {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-card-dark) 100%);
  box-shadow: 0 8px 25px rgba(0, 82, 155, 0.3);
  transform: scale(1.03);
}

.pricing-card.recommended:hover {
  box-shadow: 0 15px 40px rgba(0, 82, 155, 0.25);
  transform: translateY(-5px) scale(1.03);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-primary);
  color: white;
  padding: 5px 15px;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 82, 155, 0.4);
  white-space: nowrap;
}

.card-header {
  text-align: center;
  margin-bottom: 0.75rem;
}

.plan-icon {
  font-size: 2rem;
  margin-bottom: 0.3rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.plan-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-card);
  margin-bottom: 0.25rem;
  letter-spacing: -0.3px;
}

.plan-description {
  color: #666;
  font-size: 0.8rem;
  line-height: 1.4;
}

.price-section {
  text-align: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.4rem;
}

.currency {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-accent);
}

.amount {
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--color-text-card);
  line-height: 1;
  letter-spacing: -1px;
}

.period {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.custom-price .amount {
  font-size: 2rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.one-time-charge {
  color: #888;
  font-size: 0.75rem;
  font-weight: 500;
}

.range-selector {
  margin-bottom: 0.75rem;
}

.range-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--color-text-card);
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.range-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.35rem;
}

.range-button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.55rem;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-card-muted);
}

.range-button:hover {
  border-color: var(--color-primary);
  background: rgba(0, 82, 155, 0.1);
  transform: scale(1.03);
}

.range-button.active {
  border-color: var(--color-primary);
  background: var(--gradient-primary);
  color: white;
  box-shadow: 0 3px 10px rgba(0, 82, 155, 0.3);
}

.radio-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.radio-inner {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.range-button.active .radio-inner {
  transform: scale(1);
}

.range-text {
  flex: 1;
  text-align: left;
}

.features-section {
  margin-bottom: 0.75rem;
  flex-grow: 1;
}

.features-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-card);
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.4rem 0;
  color: var(--color-text-card-muted);
  font-size: 0.8rem;
  line-height: 1.4;
}

.check-icon {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  margin-top: 1px;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
}

.cta-button {
  width: 100%;
  padding: 0.55rem 1.25rem;
  border: 2px solid var(--color-primary);
  background: white;
  color: var(--color-primary);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: auto;
}

.cta-button:hover {
  background: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 82, 155, 0.35);
}

.cta-button.primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 82, 155, 0.35);
}

.cta-button.primary:hover {
  box-shadow: 0 8px 25px rgba(0, 82, 155, 0.45);
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 1.1rem;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

.info-section {
  margin: 2.5rem 0 2rem;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.info-card {
  background: var(--color-card-dark);
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.info-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
  border-color: rgba(0, 82, 155, 0.2);
}

.info-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.info-card h4 {
  font-size: 1rem;
  color: var(--color-text-card);
  margin-bottom: 0.4rem;
  font-weight: 700;
}

.info-card p {
  color: var(--color-text-card-muted);
  font-size: 0.85rem;
  line-height: 1.4;
}

.notes {
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 82, 155, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(0, 82, 155, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.notes p {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  margin: 0.3rem 0;
}

@media (max-width: 1400px) {
  .desktop-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .pricing-card.recommended {
    transform: scale(1);
  }
  
  .pricing-card.recommended:hover {
    transform: translateY(-5px) scale(1);
  }
}

@media (max-width: 768px) {
  .pricing-section {
    padding: 0.75rem 0.75rem 1rem;
  }

  .section-header {
    margin-bottom: 0.6rem;
  }

  .section-title {
    font-size: 1.25rem;
    margin-bottom: 0.2rem;
  }

  .section-subtitle {
    font-size: 0.72rem;
    line-height: 1.3;
  }

  .billing-toggle-wrapper {
    margin-bottom: 0.6rem;
  }

  .billing-toggle {
    padding: 3px;
  }

  .billing-toggle button {
    padding: 0.3rem 0.9rem;
    font-size: 0.75rem;
  }

  .desktop-grid {
    display: none;
  }

  .mobile-carousel {
    display: block;
    margin-bottom: 0;
  }

  .carousel-track-wrapper {
    overflow: hidden;
    width: 100%;
    border-radius: 14px;
  }

  .carousel-track {
    display: flex;
    gap: 1rem;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .carousel-card {
    flex: 0 0 100%;
    min-width: 0;
  }

  .carousel-card:hover,
  .carousel-card.recommended,
  .carousel-card.recommended:hover {
    transform: none;
  }

  .carousel-card.recommended {
    border-color: var(--color-accent);
  }

  .carousel-card.pricing-card {
    padding: 0.65rem 0.75rem 0.6rem;
    border-radius: 14px;
  }

  .card-header {
    margin-bottom: 0.4rem;
  }

  .plan-icon {
    font-size: 1.4rem;
    margin-bottom: 0.15rem;
  }

  .plan-name {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }

  .plan-description {
    font-size: 0.68rem;
    line-height: 1.3;
  }

  .price-section {
    margin-bottom: 0.4rem;
    padding-bottom: 0.4rem;
  }

  .amount {
    font-size: 1.5rem;
  }

  .currency {
    font-size: 0.85rem;
  }

  .period {
    font-size: 0.7rem;
  }

  .one-time-charge {
    font-size: 0.65rem;
    margin-top: 0.1rem;
  }

  .range-selector {
    margin-bottom: 0.4rem;
  }

  .range-label {
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    gap: 0.3rem;
  }

  .range-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
  }

  .range-button {
    padding: 0.28rem 0.4rem;
    font-size: 0.65rem;
    gap: 0.3rem;
    border-radius: 7px;
  }

  .radio-circle {
    width: 12px;
    height: 12px;
  }

  .radio-inner {
    width: 6px;
    height: 6px;
  }

  .features-section {
    margin-bottom: 0.4rem;
  }

  .features-title {
    font-size: 0.72rem;
    margin-bottom: 0.3rem;
  }

  .features-list li {
    font-size: 0.68rem;
    padding: 0.2rem 0;
    gap: 0.35rem;
  }

  .check-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  .cta-button {
    padding: 0.42rem 1rem;
    font-size: 0.78rem;
    border-radius: 8px;
  }

  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 0.65rem;
  }

  .carousel-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 2px solid var(--color-primary, #00529b);
    background: white;
    color: var(--color-primary, #00529b);
    cursor: pointer;
    transition: all 0.25s ease;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 82, 155, 0.15);
  }

  .carousel-arrow:hover:not(:disabled) {
    background: var(--color-primary, #00529b);
    color: white;
    transform: scale(1.08);
  }

  .carousel-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  .carousel-dots {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .carousel-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 82, 155, 0.2);
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
  }

  .carousel-dot.active {
    background: var(--color-primary, #00529b);
    width: 18px;
    border-radius: 4px;
  }

  .carousel-counter {
    text-align: center;
    color: #888;
    font-size: 0.68rem;
    margin-top: 0.3rem;
    font-weight: 500;
  }

  .info-section {
    margin: 1rem 0 0.75rem;
  }

  .info-cards {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .info-card {
    padding: 0.75rem;
    border-radius: 10px;
  }

  .info-icon {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }

  .info-card h4 {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }

  .info-card p {
    font-size: 0.7rem;
  }

  .notes {
    padding: 0.75rem;
  }

  .notes p {
    font-size: 0.68rem;
    margin: 0.2rem 0;
  }
}
</style>