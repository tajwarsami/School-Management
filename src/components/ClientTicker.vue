<script setup>
const clients = [
  "St. Xavier's College", "Dhaka City School", "Little Gems Kindergarten", 
  "Oxford International", "Maple Leaf", "Scholastica", "Viqarunnisa Noon", 
  "Rajuk Uttara", "Notre Dame", "Holy Cross", "Sunnydale", "Mastermind"
];
</script>

<template>
  <section class="ticker-section">
    <div class="container header">
      <p class="trusted-text">Trusted by 600+ Institutes Across Bangladesh and Global</p>
    </div>
    
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker-item" v-for="(client, index) in [...clients, ...clients]" :key="index">
          <span class="client-logo">{{ client }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticker-section {
  padding: 4rem 0;
  background-color: var(--color-card-dark);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.trusted-text {
  font-weight: 600;
  color: var(--color-text-card-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.ticker-wrap::before, .ticker-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.ticker-wrap::before {
  left: 0;
  background: linear-gradient(to right, var(--color-card-dark), transparent);
}

.ticker-wrap::after {
  right: 0;
  background: linear-gradient(to left, var(--color-card-dark), transparent);
}

.ticker {
  display: flex;
  width: fit-content;
  animation: ticker 40s linear infinite;
}

.ticker-item {
  flex-shrink: 0;
  padding: 0 3rem;
  display: flex;
  align-items: center;
}

.client-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-card-muted);
  white-space: nowrap;
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
