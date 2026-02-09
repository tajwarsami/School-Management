<script setup>
import { ref } from 'vue'

const institutions = [
  { name: 'Dhaka College', division: 'Dhaka', cx: 520, cy: 360, students: '5000+' },
  { name: 'Motijheel School', division: 'Dhaka', cx: 530, cy: 370, students: '3000+' },
  { name: 'Uttara Academy', division: 'Dhaka', cx: 510, cy: 345, students: '2500+' },
  { name: 'Mirpur Institute', division: 'Dhaka', cx: 500, cy: 358, students: '4000+' },
  

  { name: 'Chittagong College', division: 'Chittagong', cx: 680, cy: 410, students: '6000+' },
  { name: 'Cox\'s Bazar School', division: 'Chittagong', cx: 660, cy: 490, students: '2000+' },
  { name: 'Rangamati Institute', division: 'Chittagong', cx: 640, cy: 440, students: '1500+' },
  
  { name: 'Rajshahi University', division: 'Rajshahi', cx: 260, cy: 260, students: '8000+' },
  { name: 'Pabna College', division: 'Rajshahi', cx: 300, cy: 300, students: '3500+' },
  

  { name: 'Khulna Academy', division: 'Khulna', cx: 280, cy: 430, students: '4500+' },
  { name: 'Jessore School', division: 'Khulna', cx: 310, cy: 400, students: '2800+' },
  

  { name: 'Sylhet College', division: 'Sylhet', cx: 660, cy: 220, students: '5500+' },
  { name: 'Moulvibazar Institute', division: 'Sylhet', cx: 680, cy: 250, students: '2200+' },

  { name: 'Barisal University', division: 'Barisal', cx: 450, cy: 480, students: '4000+' },
  { name: 'Patuakhali School', division: 'Barisal', cx: 480, cy: 510, students: '1800+' },
  
  { name: 'Rangpur College', division: 'Rangpur', cx: 280, cy: 140, students: '3800+' },
  { name: 'Dinajpur Academy', division: 'Rangpur', cx: 310, cy: 165, students: '2600+' },
  
  { name: 'Mymensingh School', division: 'Mymensingh', cx: 520, cy: 240, students: '3200+' },
  { name: 'Jamalpur Institute', division: 'Mymensingh', cx: 490, cy: 220, students: '2100+' }
]

const divisions = [
  { name: 'Dhaka', color: '#3b82f6', count: 4 },
  { name: 'Chittagong', color: '#ec4899', count: 3 },
  { name: 'Rajshahi', color: '#10b981', count: 2 },
  { name: 'Khulna', color: '#f59e0b', count: 2 },
  { name: 'Sylhet', color: '#8b5cf6', count: 2 },
  { name: 'Barisal', color: '#06b6d4', count: 2 },
  { name: 'Rangpur', color: '#ef4444', count: 2 },
  { name: 'Mymensingh', color: '#6366f1', count: 2 }
]

const hoveredInstitution = ref(null)

const handleHover = (institution) => {
  hoveredInstitution.value = institution
}

const clearHover = () => {
  hoveredInstitution.value = null
}
</script>

<template>
  <section class="map-section">
    <div class="container">
      <div class="section-title">
        <h2>Empowering Education Across Bangladesh</h2>
        <p>Connecting institutions in all 8 divisions with our unified platform</p>
      </div>
      
      <div class="map-container">
        <div class="bangladesh-map">
          <svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" class="map-svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgba(0,82,155,0.03);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(236,72,153,0.03);stop-opacity:1" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <rect width="1000" height="600" fill="transparent" />
            
            <path 
              d="M 200 100 
                 L 280 90 L 360 95 L 440 105 L 520 120 L 580 140 L 630 165 L 670 195 
                 L 700 230 L 720 270 L 735 315 L 745 360 L 750 405 L 745 445 
                 L 730 480 L 705 510 L 670 530 L 625 545 L 575 555 L 520 560 
                 L 465 558 L 410 550 L 360 535 L 315 515 L 275 490 L 245 460 
                 L 220 425 L 205 385 L 195 340 L 190 295 L 188 250 L 190 205 
                 L 195 160 L 205 125 Z" 
              fill="rgba(15, 23, 42, 0.4)" 
              stroke="rgba(59, 130, 246, 0.5)" 
              stroke-width="3"
              class="country-border"
            />
            
            <g stroke="rgba(148, 163, 184, 0.25)" stroke-width="1.5" fill="none" stroke-dasharray="8,8">
              <path d="M 200 180 L 720 210" />
              <path d="M 195 320 L 735 345" />
              <path d="M 220 450 L 720 470" />
              <path d="M 350 95 L 325 535" />
              <path d="M 520 115 L 510 558" />
              <path d="M 650 175 L 655 535" />
            </g>
            
            <g stroke="rgba(148, 163, 184, 0.05)" stroke-width="1" fill="none">
              <line x1="0" y1="150" x2="1000" y2="150" />
              <line x1="0" y1="300" x2="1000" y2="300" />
              <line x1="0" y1="450" x2="1000" y2="450" />
              <line x1="250" y1="0" x2="250" y2="600" />
              <line x1="500" y1="0" x2="500" y2="600" />
              <line x1="750" y1="0" x2="750" y2="600" />
            </g>
            
            <g>
              <circle 
                v-for="(institution, index) in institutions" 
                :key="index"
                :cx="institution.cx" 
                :cy="institution.cy" 
                r="8"
                :fill="divisions.find(d => d.name === institution.division)?.color || '#3b82f6'"
                class="institution-marker"
                filter="url(#glow)"
                @mouseenter="handleHover(institution)"
                @mouseleave="clearHover"
              />
            </g>
            
            <g class="division-labels" fill="rgba(255,255,255,0.9)" font-size="22" font-weight="700" text-anchor="middle">
              <text x="280" y="145">RANGPUR</text>
              <text x="520" y="240">MYMENSINGH</text>
              <text x="260" y="270">RAJSHAHI</text>
              <text x="520" y="370">DHAKA</text>
              <text x="670" y="230">SYLHET</text>
              <text x="680" y="425">CHITTAGONG</text>
              <text x="290" y="440">KHULNA</text>
              <text x="460" y="500">BARISAL</text>
            </g>
          </svg>
          
          <div 
            v-for="(institution, index) in institutions" 
            :key="'pulse-' + index"
            class="pulse-wrapper" 
            :style="{ 
              top: `${(institution.cy / 600) * 100}%`, 
              left: `${(institution.cx / 1000) * 100}%` 
            }"
            @mouseenter="handleHover(institution)"
            @mouseleave="clearHover"
          >
            <div class="pulse-dot" :style="{ backgroundColor: divisions.find(d => d.name === institution.division)?.color }"></div>
            <div class="pulse-ring" :style="{ borderColor: divisions.find(d => d.name === institution.division)?.color }"></div>
            <div class="pulse-ring delay-1" :style="{ borderColor: divisions.find(d => d.name === institution.division)?.color }"></div>
          </div>
        </div>
        
        <div 
          v-if="hoveredInstitution" 
          class="institution-tooltip"
          :style="{ 
            top: `${(hoveredInstitution.cy / 600) * 100 - 8}%`, 
            left: `${(hoveredInstitution.cx / 1000) * 100 + 3}%` 
          }"
        >
          <div class="tooltip-title">{{ hoveredInstitution.name }}</div>
          <div class="tooltip-info">
            <span class="tooltip-division">{{ hoveredInstitution.division }}</span>
            <span class="tooltip-students">{{ hoveredInstitution.students }}</span>
          </div>
        </div>
        
        <div class="division-legend">
          <div class="legend-title">Divisions Coverage</div>
          <div class="legend-items">
            <div 
              v-for="division in divisions" 
              :key="division.name"
              class="legend-item"
            >
              <div class="legend-color" :style="{ backgroundColor: division.color }"></div>
              <span class="legend-name">{{ division.name }}</span>
              <span class="legend-count">{{ division.count }} institutions</span>
            </div>
          </div>
        </div>
        
        <div class="stats-overlay">
          <div class="stat-item">
            <div class="stat-number">{{ institutions.length }}+</div>
            <div class="stat-label">Institutions</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">8</div>
            <div class="stat-label">Divisions</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">65K+</div>
            <div class="stat-label">Students</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Coverage</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.map-section::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -15%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.map-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -15%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 15s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.05); }
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-title {
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.section-title p {
  color: #94a3b8;
  font-size: 1.15rem;
}

.map-container {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 3rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.bangladesh-map {
  position: relative;
  width: 100%;
  aspect-ratio: 5/3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.map-svg {
  width: 100%;
  height: 100%;
}

.country-border {
  transition: all 0.3s ease;
}

.country-border:hover {
  fill: rgba(15, 23, 42, 0.6);
  stroke: rgba(59, 130, 246, 0.8);
  stroke-width: 4;
}

.institution-marker {
  transition: all 0.3s ease;
  cursor: pointer;
}

.institution-marker:hover {
  r: 12;
  opacity: 1;
}

.pulse-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.pulse-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
  animation: pulse-dot 2s ease-in-out infinite;
  cursor: pointer;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border: 3px solid;
  border-radius: 50%;
  opacity: 1;
  animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.pulse-ring.delay-1 {
  animation-delay: 0.7s;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0.9;
  }
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3.5);
    opacity: 0;
  }
}

.institution-tooltip {
  position: absolute;
  background: rgba(15, 23, 42, 0.98);
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  z-index: 100;
  pointer-events: none;
  min-width: 220px;
  backdrop-filter: blur(10px);
  animation: tooltipFadeIn 0.2s ease;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tooltip-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: white;
}

.tooltip-info {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.9rem;
}

.tooltip-division {
  color: #94a3b8;
}

.tooltip-students {
  color: #3b82f6;
  font-weight: 700;
}

.division-legend {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.legend-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.legend-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
}

.legend-item:hover {
  background: rgba(15, 23, 42, 0.7);
  transform: translateX(6px);
  border-color: rgba(148, 163, 184, 0.3);
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 15px currentColor;
}

.legend-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  flex: 1;
}

.legend-count {
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 500;
}

.stats-overlay {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 2px solid rgba(148, 163, 184, 0.2);
}

.stat-item {
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(15, 23, 42, 0.6);
  transform: translateY(-6px);
  border-color: rgba(148, 163, 184, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  color: #94a3b8;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .legend-items {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stats-overlay {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .map-section {
    padding: 4rem 0;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .map-container {
    padding: 2rem 1rem;
  }

  .bangladesh-map {
    margin-bottom: 2rem;
  }

  .legend-items {
    grid-template-columns: 1fr;
  }

  .stats-overlay {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
  
  .division-labels text {
    font-size: 16px;
  }
}
</style>