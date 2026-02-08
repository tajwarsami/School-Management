<script setup>
import { ref } from 'vue'
import { Check, Users } from 'lucide-vue-next'
import { plans as initialPlans, studentRanges } from '../data/pricing'

const billingType = ref('monthly')

const plans = ref(JSON.parse(JSON.stringify(initialPlans)))

const getPrice = (plan) => {
  if (plan.custom) return 'Custom'
  return plan.prices[billingType.value][plan.selectedRange]
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-BD').format(price)
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

      <div class="pricing-grid">
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

          <button class="cta-button" :class="{ primary: plan.recommended }">
            {{ plan.custom ? 'Contact Sales' : 'Get Started' }}
            <span class="arrow">→</span>
          </button>
        </div>
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
  background: linear-gradient(to bottom, #FFFFFF 0%, #F3E5F5 100%);
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
  background: radial-gradient(circle, rgba(106, 27, 154, 0.1) 0%, transparent 70%);
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
  background: radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%);
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
  background: linear-gradient(135deg, #6A1B9A 0%, #AB47BC 50%, #E91E63 100%);
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
  background: linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(106, 27, 154, 0.4);
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
  box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.pricing-card {
  background: var(--color-card-dark);
  border-radius: 16px;
  padding: 1.5rem;
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
  border-color: rgba(255, 107, 0, 0.3);
}

.pricing-card.recommended {
  border-color: #E91E63;
  background: linear-gradient(135deg, #4A148C 0%, #2A0A3B 100%);
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
  transform: scale(1.03);
}

.pricing-card.recommended:hover {
  box-shadow: 0 15px 40px rgba(233, 30, 99, 0.25);
  transform: translateY(-5px) scale(1.03);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #E91E63 0%, #C2185B 100%);
  color: white;
  padding: 5px 15px;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
  white-space: nowrap;
}

.card-header {
  text-align: center;
  margin-bottom: 1.25rem;
}

.plan-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
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
  color: #ff6b00;
}

.amount {
  font-size: 2.2rem;
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
  background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%);
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
  margin-bottom: 1.25rem;
}

.range-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--color-text-card);
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
}

.range-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  max-height: 180px;
  overflow-y: auto;
  padding-right: 4px;
}

.range-grid::-webkit-scrollbar {
  width: 4px;
}

.range-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.range-grid::-webkit-scrollbar-thumb {
  background: #6A1B9A;
  border-radius: 10px;
}

.range-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.7rem;
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
  border-color: #6A1B9A;
  background: rgba(106, 27, 154, 0.2);
  transform: scale(1.03);
}

.range-button.active {
  border-color: #6A1B9A;
  background: linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%);
  color: white;
  box-shadow: 0 3px 10px rgba(106, 27, 154, 0.3);
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
  margin-bottom: 1.25rem;
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
  box-shadow: 0 2px 6px rgba(106, 27, 154, 0.3);
}

.cta-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: 2px solid #6A1B9A;
  background: white;
  color: #E91E63;
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
  background: #E91E63;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(106, 27, 154, 0.35);
}

.cta-button.primary {
  background: linear-gradient(135deg, #6A1B9A 0%, #E91E63 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.35);
}

.cta-button.primary:hover {
  box-shadow: 0 8px 25px rgba(233, 30, 99, 0.45);
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
  border-color: rgba(106, 27, 154, 0.2);
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
  background: rgba(42, 10, 59, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.notes p {
  color: var(--color-text-card-muted);
  font-size: 0.8rem;
  margin: 0.3rem 0;
}

@media (max-width: 1400px) {
  .pricing-grid {
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
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .range-grid {
    grid-template-columns: 1fr;
  }

  .billing-toggle button {
    padding: 0.5rem 1.2rem;
    font-size: 0.85rem;
  }

  .amount {
    font-size: 2rem;
  }
  
  .info-cards {
    grid-template-columns: 1fr;
  }
}
</style>