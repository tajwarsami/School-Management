<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content" data-aos="zoom-in">
        <div class="cta-text">
          <h2 class="cta-title">Ready to Transform Your Institution?</h2>
          <p class="cta-description">
            Discover our comprehensive range of services designed to streamline your operations and enhance educational excellence.
          </p>
        </div>
        <button @click="goToServices" class="cta-button">
          <span>Explore Our Services</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
  methods: {
    goToServices() {
      this.$router.push('/services');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" fill="none"/><circle cx="40" cy="40" r="2" fill="rgba(255,107,107,0.15)"/></svg>');
  opacity: 0.5;
}

.cta-section::after {
  content: '';
  position: absolute;
  top: -40%;
  left: -20%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.2), transparent 70%);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(78, 205, 196, 0.15));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 70px;
  border-radius: 32px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
}

.cta-text {
  flex: 1;
}

.cta-title {
  font-size: 2.75rem;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-family: 'Playfair Display', serif;
}

.cta-description {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
  color: white;
  padding: 22px 44px;
  border-radius: 50px;
  font-size: 1.15rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 12px 36px rgba(255, 107, 107, 0.4);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 20px 50px rgba(255, 107, 107, 0.6);
  gap: 20px;
}

.cta-button svg {
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.cta-button:hover svg {
  transform: translateX(6px);
}

@media (max-width: 1024px) {
  .cta-content {
    flex-direction: column;
    text-align: center;
    padding: 50px;
  }
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2.25rem;
  }

  .cta-description {
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  .cta-content {
    padding: 40px 28px;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>