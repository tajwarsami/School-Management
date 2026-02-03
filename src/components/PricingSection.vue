<script setup>
import { Check } from 'lucide-vue-next';

const plans = [
  {
    name: "Basic",
    price: "$29",
    desc: "Essential features for small schools.",
    features: ["Student Management", "Attendance Tracking", "Basic Reports", "Email Support", "1 Admin User"],
    highlight: false
  },
  {
    name: "Standard",
    price: "$59",
    desc: "Perfect for growing institutions.",
    features: ["All Basic Features", "Fee Management", "Exam & Results", "Parent Mobile App", "5 Admin Users"],
    highlight: true
  },
  {
    name: "Premium",
    price: "$99",
    desc: "Advanced tools for large colleges.",
    features: ["All Standard Features", "Library Management", "Transport System", "Teacher Mobile App", "Unlimited Users"],
    highlight: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for networks.",
    features: ["All Premium Features", "Custom Development", "Dedicated Server", "24/7 Priority Support", "White Labeling"],
    highlight: false
  }
];
</script>

<template>
  <section class="pricing-section">
    <div class="container">
      <div class="section-title">
        <h2>Transparent Pricing</h2>
        <p>Choose the plan that fits your institution's size and needs.</p>
      </div>

      <div class="pricing-grid">
        <div 
          v-for="plan in plans" 
          :key="plan.name" 
          class="pricing-card"
          :class="{ highlighted: plan.highlight }"
        >
          <div v-if="plan.highlight" class="popular-badge">Most Popular</div>
          
          <h3 class="plan-name" :class="{ 'text-primary': !plan.highlight }">{{ plan.name }}</h3>
          <div class="plan-price">
            <span class="currency" v-if="plan.price !== 'Custom'">$</span>
            {{ plan.price.replace('$', '') }}
            <span class="period" v-if="plan.price !== 'Custom'">/mo</span>
          </div>
          <p class="plan-desc">{{ plan.desc }}</p>

          <button class="btn btn-block" :class="plan.highlight ? 'btn-primary' : 'btn-outline'">
            Choose {{ plan.name }}
          </button>

          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">
              <Check :size="16" class="check-icon" :class="{ 'light': plan.highlight }" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: 6rem 0;
  background-color: var(--color-white);
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: center;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}

.pricing-card {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 1.5rem;
  position: relative;
  transition: transform 0.3s;
}

.pricing-card.highlighted {
  border-color: var(--color-accent);
  box-shadow: 0 20px 40px -10px rgba(255, 107, 0, 0.15);
  transform: scale(1.05);
  z-index: 10;
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.plan-price {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.period {
  font-size: 1rem;
  color: var(--color-text-muted);
  font-weight: 400;
}

.plan-desc {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.btn-block {
  width: 100%;
  margin-bottom: 2rem;
}

.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--color-text-main);
}

.check-icon {
  color: var(--color-primary);
}

.check-icon.light {
  color: var(--color-accent);
}
</style>
