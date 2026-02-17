<template>
  <section class="clients-section">

    <div class="bg-grid" aria-hidden="true"></div>
    <div class="bg-glow glow-blue" aria-hidden="true"></div>
    <div class="bg-glow glow-gold" aria-hidden="true"></div>

    <div class="container">

      <div class="block">
        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">Trusted By</span>
          <span class="eyebrow-line"></span>
        </div>

        <h2 class="heading">Our <em>Clients</em></h2>
        <p class="subheading">Institutions across Bangladesh that rely on our solutions</p>

        <div class="slider">
          <div class="slider-stage" :class="{ 'is-transitioning': clientTransitioning }">
            <div
              class="card card--client"
              v-for="client in visibleClients"
              :key="'c-' + client.name + '-' + clientPage"
              :style="{ '--i': visibleClients.indexOf(client) }"
            >
              <div class="card-logo-wrap">
                <img :src="client.logo" :alt="client.name" class="card-logo" @error="onImgError" />
              </div>
              <span class="card-name">{{ client.name }}</span>
            </div>
          </div>

          <div class="dots">
            <button
              v-for="(_, i) in clientPages"
              :key="i"
              class="dot"
              :class="{ 'dot--active': i === clientPage }"
              @click="goToClientPage(i)"
              :aria-label="'Page ' + (i + 1)"
            ></button>
          </div>
        </div>
      </div>

      <div class="divider" aria-hidden="true">
        <span class="divider-line"></span>
        <span class="divider-diamond"></span>
        <span class="divider-line"></span>
      </div>

      <div class="block">
        <div class="eyebrow">
          <span class="eyebrow-line eyebrow-line--gold"></span>
          <span class="eyebrow-text eyebrow-text--gold">Strategic Partners</span>
          <span class="eyebrow-line eyebrow-line--gold"></span>
        </div>

        <h2 class="heading heading--gold">Our <em>Partners</em></h2>
        <p class="subheading">Powering our ecosystem through trusted alliances</p>

        <div class="slider">
          <div class="slider-stage slider-stage--partner" :class="{ 'is-transitioning': partnerTransitioning }">
            <div
              class="card card--partner"
              v-for="partner in visiblePartners"
              :key="'p-' + partner.name + '-' + partnerPage"
              :style="{ '--i': visiblePartners.indexOf(partner) }"
            >
              <div class="card-logo-wrap card-logo-wrap--partner">
                <img :src="partner.logo" :alt="partner.name" class="card-logo" @error="onImgError" />
              </div>
              <span class="card-name">{{ partner.name }}</span>
            </div>
          </div>

          <div class="dots">
            <button
              v-for="(_, i) in partnerPages"
              :key="i"
              class="dot dot--gold"
              :class="{ 'dot--active': i === partnerPage }"
              @click="goToPartnerPage(i)"
              :aria-label="'Page ' + (i + 1)"
            ></button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { clients, partners } from '../data/clients.js'

const CLIENTS_PER_PAGE = 5
const PARTNERS_PER_PAGE = 4
const AUTO_INTERVAL = 3200
const TRANSITION_DURATION = 450

export default {
  name: 'ClientsSection',

  data() {
    return {
      clients,
      partners,
      clientPage: 0,
      partnerPage: 0,
      clientTransitioning: false,
      partnerTransitioning: false,
      clientTimer: null,
      partnerTimer: null,
    }
  },

  computed: {
    clientPages() {
      return Math.ceil(this.clients.length / CLIENTS_PER_PAGE)
    },
    partnerPages() {
      return Math.ceil(this.partners.length / PARTNERS_PER_PAGE)
    },
    visibleClients() {
      const s = this.clientPage * CLIENTS_PER_PAGE
      return this.clients.slice(s, s + CLIENTS_PER_PAGE)
    },
    visiblePartners() {
      const s = this.partnerPage * PARTNERS_PER_PAGE
      return this.partners.slice(s, s + PARTNERS_PER_PAGE)
    },
  },

  mounted() {
    this.startClientTimer()
    this.startPartnerTimer()
  },

  beforeUnmount() {
    clearInterval(this.clientTimer)
    clearInterval(this.partnerTimer)
  },

  methods: {
    startClientTimer() {
      this.clientTimer = setInterval(() => {
        this.advanceClient()
      }, AUTO_INTERVAL)
    },
    startPartnerTimer() {
      this.partnerTimer = setInterval(() => {
        this.advancePartner()
      }, AUTO_INTERVAL + 600)
    },
    advanceClient() {
      this.clientTransitioning = true
      setTimeout(() => {
        this.clientPage = (this.clientPage + 1) % this.clientPages
        this.clientTransitioning = false
      }, TRANSITION_DURATION)
    },
    advancePartner() {
      this.partnerTransitioning = true
      setTimeout(() => {
        this.partnerPage = (this.partnerPage + 1) % this.partnerPages
        this.partnerTransitioning = false
      }, TRANSITION_DURATION)
    },
    goToClientPage(i) {
      if (i === this.clientPage) return
      clearInterval(this.clientTimer)
      this.clientTransitioning = true
      setTimeout(() => {
        this.clientPage = i
        this.clientTransitioning = false
        this.startClientTimer()
      }, TRANSITION_DURATION)
    },
    goToPartnerPage(i) {
      if (i === this.partnerPage) return
      clearInterval(this.partnerTimer)
      this.partnerTransitioning = true
      setTimeout(() => {
        this.partnerPage = i
        this.partnerTransitioning = false
        this.startPartnerTimer()
      }, TRANSITION_DURATION)
    },
    onImgError(e) {
      e.target.style.opacity = '0.12'
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=Outfit:wght@300;400;500&display=swap');

.clients-section {
  position: relative;
  background: #090d18;
  padding: 110px 0 130px;
  overflow: hidden;
  font-family: 'Outfit', sans-serif;
  color: #dce4f5;
}

.bg-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
  background-size: 68px 68px;
  mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 100%);
}

.bg-glow {
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  filter: blur(130px);
  pointer-events: none;
}

.glow-blue  { top: -180px;    left: -150px;  background: radial-gradient(circle, rgba(79,126,248,0.15) 0%, transparent 70%); }
.glow-gold  { bottom: -180px; right: -150px; background: radial-gradient(circle, rgba(212,146,42,0.13) 0%, transparent 70%); }

.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 48px;
  position: relative;
  z-index: 1;
}

.block { text-align: center; }

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.eyebrow-line {
  display: block;
  width: 38px;
  height: 1px;
  background: rgba(79,126,248,0.3);
}
.eyebrow-line--gold { background: rgba(212,146,42,0.35); }

.eyebrow-text {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #4f7ef8;
}
.eyebrow-text--gold { color: #d4922a; }

.heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 600;
  color: #eef1fa;
  margin: 0 0 12px;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.heading em {
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(130deg, #6b96ff 0%, #aac0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.heading--gold em {
  background: linear-gradient(130deg, #d4922a 0%, #f0c06a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subheading {
  font-size: 14.5px;
  font-weight: 300;
  color: rgba(180,195,228,0.5);
  margin: 0 0 50px;
  letter-spacing: 0.015em;
}

.slider { position: relative; }

.slider-stage {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  min-height: 210px;
  align-items: center;
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.slider-stage.is-transitioning {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
  pointer-events: none;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 176px;
  padding: 28px 18px 22px;
  background: rgba(255,255,255,0.033);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  cursor: default;
  position: relative;
  overflow: hidden;
  transition: background 0.32s, border-color 0.32s, transform 0.32s, box-shadow 0.32s;
  animation: cardIn 0.5s ease both;
  animation-delay: calc(var(--i, 0) * 80ms);
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(14px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}

.card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  opacity: 0;
  transition: opacity 0.32s;
}
.card--client::after  { background: linear-gradient(90deg, transparent, rgba(79,126,248,0.6), transparent); }
.card--partner::after { background: linear-gradient(90deg, transparent, rgba(212,146,42,0.6), transparent); }

.card--client:hover {
  background: rgba(79,126,248,0.09);
  border-color: rgba(79,126,248,0.28);
  transform: translateY(-5px);
  box-shadow: 0 18px 48px rgba(79,126,248,0.13);
}
.card--partner:hover {
  background: rgba(212,146,42,0.08);
  border-color: rgba(212,146,42,0.28);
  transform: translateY(-5px);
  box-shadow: 0 18px 48px rgba(212,146,42,0.10);
}
.card:hover::after { opacity: 1; }

.card-logo-wrap {
  width: 82px;
  height: 82px;
  border-radius: 14px;
  background: rgba(255,255,255,0.055);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;
  transition: border-color 0.32s;
}

.card--client:hover .card-logo-wrap  { border-color: rgba(79,126,248,0.35); }
.card--partner:hover .card-logo-wrap { border-color: rgba(212,146,42,0.35); }

.card-logo {
  width: 58px;
  height: 58px;
  object-fit: contain;
  filter: brightness(1.05) saturate(0.85);
  transition: filter 0.32s, transform 0.32s;
}
.card:hover .card-logo {
  filter: brightness(1.2) saturate(1.1);
  transform: scale(1.06);
}

.card-name {
  font-size: 12px;
  font-weight: 400;
  color: rgba(195,210,242,0.65);
  text-align: center;
  line-height: 1.55;
  letter-spacing: 0.01em;
  transition: color 0.3s;
}
.card--client:hover  .card-name { color: rgba(170,195,255,0.95); }
.card--partner:hover .card-name { color: rgba(240,192,100,0.95); }

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
}

.dot {
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.16);
  cursor: pointer;
  padding: 0;
  transition: background 0.35s, width 0.35s, border-color 0.35s;
}

.dot.dot--active {
  width: 26px;
  background: #4f7ef8;
  border-color: #4f7ef8;
}
.dot--gold.dot--active {
  background: #d4922a;
  border-color: #d4922a;
}

.divider {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 88px 0 90px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
}

.divider-diamond {
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  transform: rotate(45deg);
}

@media (max-width: 860px) {
  .clients-section { padding: 80px 0 100px; }
  .container       { padding: 0 24px; }
  .card            { width: 148px; padding: 22px 14px 18px; }
  .card-logo-wrap  { width: 66px; height: 66px; }
  .card-logo       { width: 46px; height: 46px; }
  .divider         { margin: 64px 0 66px; }
}

@media (max-width: 520px) {
  .card    { width: 130px; }
  .heading { font-size: 2rem; }
}
</style>