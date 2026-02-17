<script setup>
import { clients } from '../data/clients.js'

const clientTrack = [...clients, ...clients, ...clients]
</script>

<template>
  <section class="ticker-section">

    <p class="headline">Trusted by <strong>600+</strong> Institutes Across Bangladesh &amp; Beyond</p>

    <div class="track-viewport">
      <div class="fade-left"></div>
      <div class="fade-right"></div>

      <div class="track">
        <div class="card" v-for="(client, i) in clientTrack" :key="i">
          <img :src="client.logo" :alt="client.name" class="logo" />
          <span class="name">{{ client.name }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');

.ticker-section {
  background: #ffffff;
  padding: 48px 0 52px;
  overflow: hidden;
  font-family: 'Outfit', sans-serif;
  border-top: 1px solid #e8ecf2;
  border-bottom: 1px solid #e8ecf2;
}

.headline {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
  margin: 0 0 36px;
}

.headline strong {
  color: #1e40af;
  font-weight: 600;
}

.track-viewport {
  position: relative;
  overflow: hidden;
}

.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.fade-left  { left: 0;  background: linear-gradient(90deg,  #ffffff, transparent); }
.fade-right { right: 0; background: linear-gradient(270deg, #ffffff, transparent); }

.track {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 4px 0 8px;
  width: max-content;
  animation: scroll-ltr 36s linear infinite;
}

.track-viewport:hover .track {
  animation-play-state: paused;
}

@keyframes scroll-ltr {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.card {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 16px;
  width: 155px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #ffffff;
  transition: border-color 0.25s, box-shadow 0.25s;
  cursor: default;
}

.card:hover {
  border-color: #1e40af;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.08);
}

.logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.name {
  font-size: 11.5px;
  font-weight: 500;
  color: #475569;
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .ticker-section { padding: 36px 0 40px; }
  .card { width: 130px; padding: 16px 14px 14px; }
  .logo { width: 46px; height: 46px; }
  .fade-left, .fade-right { width: 60px; }
}
</style>