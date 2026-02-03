<script setup>
import { Users, Clock, CreditCard, GraduationCap } from 'lucide-vue-next';

const features = [
  {
    icon: Users,
    title: "Admission Management",
    description: "Streamline student enrollment with digital forms and automated workflows."
  },
  {
    icon: Clock,
    title: "Smart Attendance",
    description: "Track student and staff attendance endlessly with biometric integration."
  },
  {
    icon: CreditCard,
    title: "Fee Collection",
    description: "Automate fee structures, invoices, and accept online payments securely."
  },
  {
    icon: GraduationCap,
    title: "Exam & Results",
    description: "Manage exam schedules, grading, and generate report cards instantly."
  }
];
</script>

<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Core Features</h2>
        <p class="section-subtitle">Everything you need to run your institution efficiently.</p>
      </div>
      
      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="icon-wrapper">
            <component :is="feature.icon" :size="24" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 5rem 0;
  background-color: var(--color-bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-main);
}

.section-subtitle {
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(43, 89, 255, 0.1);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background-color: rgba(43, 89, 255, 0.1);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.feature-card:hover .icon-wrapper {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text-main);
}

.feature-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}
</style>
