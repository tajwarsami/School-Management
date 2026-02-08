<script setup>
</script>

<template>
  <section class="map-section">
    <div class="container">
      <div class="section-title">
        <h2>Trusted Across Multiple Countries</h2>
        <p>Connecting education globally with a unified platform.</p>
      </div>
      
      <div class="map-container">
        <div class="world-map">
           <div class="map-image-placeholder">World Map</div>
           
           <div class="hotspot bangladesh" style="top: 45%; left: 70%;"></div>
           <div class="hotspot usa" style="top: 35%; left: 20%;"></div>
           <div class="hotspot uk" style="top: 30%; left: 48%;"></div>
           <div class="hotspot dubai" style="top: 45%; left: 60%;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-section {
  padding: 6rem 0;
  background-color: var(--color-card-dark);
  color: white;
  text-align: center;
}

.section-title {
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-title p {
  color: #9CA3AF;
  font-size: 1.1rem;
}

.map-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.map-image-placeholder {
  font-size: 5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  letter-spacing: 10px;
  user-select: none;
}

.hotspot {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7);
  animation: pulse 2s infinite;
}

.hotspot::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  opacity: 0.5;
  animation: ripple 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 107, 0, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
}

@keyframes ripple {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
</style>
