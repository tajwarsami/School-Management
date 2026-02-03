<script setup>
import { onMounted, ref } from 'vue';

const stats = ref([
  { label: 'Institute Registered', value: 600, suffix: '+', current: 0 },
  { label: 'Students Registered', value: 50000, suffix: '+', current: 0 },
  { label: 'Teachers Registered', value: 6000, suffix: '+', current: 0 },
  { label: 'Guardians Registered', value: 25000, suffix: '+', current: 0 },
]);

// Simple simulation of "animate on view" - in production use IntersectionObserver
onMounted(() => {
  stats.value.forEach(stat => {
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    const stepValue = stat.value / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      stat.current = Math.min(Math.floor(stepValue * step), stat.value);
      if (step >= steps) clearInterval(timer);
    }, intervalTime);
  });
});
</script>

<template>
  <section class="stats-section">
    <div class="container stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-item">
        <h3 class="stat-number">
          {{ stat.current.toLocaleString() }}{{ stat.suffix }}
        </h3>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 5rem 0;
  background-color: var(--color-primary);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}
</style>
