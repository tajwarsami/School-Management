<script setup>
import { Smartphone, Download } from 'lucide-vue-next';
</script>

<template>
  <section class="mobile-section">
    <div class="container">
      <div class="section-header">
        <h2>Complete Mobile Ecosystem</h2>
        <p>Stay connected on the go with dedicated apps for everyone.</p>
      </div>

      <div class="phones-container">
        <div class="phone-mockup admin">
          <div class="notch"></div>
          <div class="screen">
            <div class="app-header">Admin</div>
            <div class="chart-placeholder"></div>
            <div class="list-placeholder">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
          <p class="phone-label">Admin App</p>
        </div>

        <div class="phone-mockup teacher">
          <div class="notch"></div>
          <div class="screen">
            <div class="app-header">Teacher</div>
            <div class="grid-placeholder">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
          </div>
          <p class="phone-label">Teacher App</p>
        </div>

        <div class="phone-mockup guardian">
          <div class="notch"></div>
          <div class="screen">
            <div class="app-header">Guardian</div>
            <div class="card-placeholder"></div>
            <div class="card-placeholder"></div>
          </div>
          <p class="phone-label">Guardian App</p>
        </div>
      </div>

      <div class="app-badges">
        <button class="store-badge">
          <Download :size="20" />
          <div class="text">
            <span class="small">Download on</span>
            <span class="large">App Store</span>
          </div>
        </button>
        <button class="store-badge outline">
          <Download :size="20" />
          <div class="text">
            <span class="small">Get it on</span>
            <span class="large">Google Play</span>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--color-white) 0%, #F0F4FF 100%);
  text-align: center;
  overflow: hidden;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--color-text-muted);
  margin-bottom: 4rem;
}

.phones-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  perspective: 1000px;
}

@media (max-width: 768px) {
  .phones-container {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
}

.phone-mockup {
  width: 260px;
  height: 520px;
  background: #1D1D1F;
  border-radius: 40px;
  padding: 12px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease;
  border: 4px solid #333;
}

.phone-mockup:hover {
  transform: translateY(-20px) rotateY(5deg);
}

.notch {
  width: 120px;
  height: 24px;
  background: #1D1D1F;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 16px 16px;
  z-index: 20;
}

.screen {
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  padding-top: 40px;
}

.app-header {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

/* Screen Placeholders */
.chart-placeholder {
  height: 120px;
  background: #E0E7FF;
  margin: 16px;
  border-radius: 12px;
}

.list-placeholder {
  padding: 0 16px;
}
.line {
  height: 40px;
  background: #F3F4F6;
  margin-bottom: 12px;
  border-radius: 8px;
}

.grid-placeholder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
  gap: 12px;
}
.box {
  height: 80px;
  background: #ECFDF5;
  border-radius: 12px;
}

.card-placeholder {
  height: 100px;
  background: #FFF7ED;
  margin: 16px;
  border-radius: 12px;
  border-left: 4px solid var(--color-accent);
}

.phone-label {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  color: var(--color-text-muted);
}

.app-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-text-main);
  color: white;
  padding: 10px 24px;
  border-radius: 12px;
  text-align: left;
  transition: all 0.2s;
}

.store-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.store-badge.outline {
  background-color: white;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
}

.store-badge .text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.store-badge .small {
  font-size: 0.7rem;
  opacity: 0.8;
}

.store-badge .large {
  font-weight: 700;
  font-size: 1.1rem;
}
</style>
