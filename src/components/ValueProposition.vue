<script setup>
import { Settings, Shield, Zap } from 'lucide-vue-next';

const values = [
  {
    title: "Streamlined Operations",
    desc: "Automate daily administrative tasks, reduce paperwork, and focus more on education quality. Our intelligent workflows handle the boring stuff for you.",
    icon: Settings,
    color: "#6A1B9A"
  },
  {
    title: "Bank-Grade Security",
    desc: "Your data is protected with enterprise-grade encryption and daily backups. We ensure that sensitive student and financial records never fall into the wrong hands.",
    icon: Shield,
    color: "#E91E63"
  },
  {
    title: "Lightning Fast Performance",
    desc: "Built on modern cloud infrastructure, Edufy ensures zero lag even during peak admission seasons. Experience an interface that keeps up with your speed.",
    icon: Zap,
    color: "#1565C0"
  }
];
</script>

<template>
  <section class="value-section">
    <div class="container">
      <div class="section-title">
        <h2>Why Edufy Is the Smartest Choice</h2>
        <p>We solve the real problems educational institutions face every day.</p>
      </div>

      <div class="values-list">
        <div 
          v-for="(value, index) in values" 
          :key="index" 
          class="value-item"
          :class="{ reversed: index % 2 !== 0 }"
        >
          <div class="text-content">
            <div class="icon-box" :style="{ backgroundColor: value.color + '20', color: value.color }">
              <component :is="value.icon" :size="32" />
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
          
          <div class="visual-content">
            <div class="abstract-visual">
              <div class="layer layer-1" :style="{ backgroundColor: value.color }"></div>
              <div class="layer layer-2" :style="{ borderColor: value.color }"></div>
              <div class="layer layer-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #F3E5F5 0%, #FFFFFF 100%);
}

.section-title {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.values-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.value-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background-color: var(--color-card-dark);
  padding: 3rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--color-card-dark);
  padding: 3rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 968px) {
  .value-item {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.value-item.reversed {
  direction: rtl;
}

.value-item.reversed .text-content {
  direction: ltr;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
}

@media (max-width: 968px) {
  .text-content {
    align-items: center;
    margin: 0 auto;
  }
}

.icon-box {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.text-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-card);
  color: var(--color-text-card);
}

.text-content p {
  color: var(--color-text-card-muted);
  font-size: 1.1rem;
  line-height: 1.6;
}

.visual-content {
  display: flex;
  justify-content: center;
}

.abstract-visual {
  width: 100%;
  max-width: 400px;
  height: 300px;
  position: relative;
}

.layer {
  position: absolute;
  border-radius: var(--radius-lg);
}

.layer-1 {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  opacity: 0.1;
  z-index: 1;
}

.layer-2 {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border: 2px solid;
  z-index: 2;
  opacity: 0.3;
}

.layer-3 {
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  background: white;
  box-shadow: var(--shadow-lg);
  z-index: 3;
}
</style>
