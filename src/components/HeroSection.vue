<script setup>
import { PlayCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDemo = () => router.push('/request-demo');
</script>

<template>
  <section class="hero-section">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="headline">
          The All-in-One <span class="text-primary">Education Management</span> Software for Any Institution
        </h1>
        <p class="subheadline">
          Streamline administrative tasks, enhance learning experiences, and foster collaboration between teachers, students, and parents with Academy.
        </p>
        <div class="cta-group">
          <button class="btn btn-primary" @click="goToDemo">Request Demo</button>
          <button class="btn btn-outline">
            <PlayCircle :size="20" style="margin-right: 8px;" />
            Watch Video
          </button>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="image-placeholder">
           <img src="/hero_dashboard.png" alt="Academy Dashboard" class="dashboard-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="fallback-box">
             <span>Dashboard Illustration</span>
           </div>
        </div>
      </div>
    </div>
    
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 82, 155, 0.03) 0%, rgba(107, 78, 155, 0.06) 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 10;
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.headline {
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text-main);
  letter-spacing: -1px;
}

.subheadline {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  max-width: 500px;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .subheadline {
    margin: 0 auto 2.5rem;
  }
}

.cta-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

@media (max-width: 968px) {
  .cta-group {
    justify-content: center;
  }
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
}

.dashboard-img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: var(--radius-lg);
  filter: drop-shadow(var(--shadow-soft));
  animation: float 6s ease-in-out infinite;
}

.fallback-box {
  display: none;
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--color-bg-body) 0%, #F3E8FF 100%);
  border-radius: var(--radius-lg);
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-weight: 600;
  border: 2px dashed var(--color-primary);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.6;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background-color: rgba(0, 82, 155, 0.08); 
  top: -150px;
  left: -100px;
  filter: blur(80px);
}

.blob-2 {
  width: 500px;
  height: 500px;
  background-color: rgba(107, 78, 155, 0.08);
  bottom: -100px;
  right: -50px;
  filter: blur(80px);
}
</style>