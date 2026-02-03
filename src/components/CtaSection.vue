<script setup>
</script>

<template>
  <section class="cta-wrapper">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your School?</h2>
          <p class="cta-desc">Join 600+ institutions already using Edufy to streamline their operations.</p>
        </div>
        <div class="cta-actions">
          <button class="btn btn-white">Get Started</button>
          <button class="btn btn-outline-white">Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrapper {
  transform: translateY(50%);
  position: relative;
  z-index: 10;
}

.cta-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  padding: 4rem;
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 20px 40px -10px rgba(43, 89, 255, 0.4);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(30%, -30%);
}

.cta-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transform: translate(-30%, 30%);
}

@media (max-width: 768px) {
  .cta-card {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 3rem 2rem;
  }
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.cta-desc {
  font-size: 1.2rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  z-index: 2;
}

.btn-white {
  background-color: white;
  color: var(--color-primary);
}

.btn-white:hover {
  background-color: #f0f0f0;
}

.btn-outline-white {
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-outline-white:hover {
  border-color: white;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
