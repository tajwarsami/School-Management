<template>
  <div class="gm-wrapper">

    <div class="gm-header">
      <div class="gm-header-left">
        <span class="gm-header-icon">🗺️</span>
        <div>
          <h1 class="gm-title">Institution Map</h1>
          <p class="gm-subtitle">Bangladesh · Educational Infrastructure</p>
        </div>
      </div>
      <div class="gm-header-right">
        <button
          v-for="f in filterTypes"
          :key="f.value"
          class="gm-filter-btn"
          :class="{ 'gm-filter-active': activeFilters.includes(f.value) }"
          @click="toggleFilter(f.value)"
        >
          <span class="gm-filter-dot" :style="{ background: f.color }" />
          {{ f.label }}
        </button>
        <button class="gm-view-btn" @click="toggleView">
          {{ viewMode === 'division' ? '🏙 Districts' : '🗂 Divisions' }}
        </button>
      </div>
    </div>

    <div class="gm-body">

      <div class="gm-map-wrap" ref="mapWrap">
        <svg
          class="gm-svg"
          viewBox="0 0 600 720"
          preserveAspectRatio="xMidYMid meet"
          @mousemove="onSvgMouseMove"
          @mouseleave="hoveredClient = null"
        >
          <defs>
            <filter id="gmGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="gmShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3" />
            </filter>
            <pattern id="gmGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0L0 0 0 24" fill="none" stroke="#1e3a5f" stroke-width="0.4" opacity="0.5" />
            </pattern>
            <radialGradient id="gmBg" cx="50%" cy="50%" r="60%">
              <stop offset="0%"   stop-color="#0d2044" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#060d1a" stop-opacity="0" />
            </radialGradient>
          </defs>

          <rect width="600" height="720" fill="url(#gmGrid)" />
          <rect width="600" height="720" fill="url(#gmBg)" />

          <g v-if="viewMode === 'division'">
            <g
              v-for="div in divisions"
              :key="'div' + div.id"
              style="cursor: pointer"
              @click="onClickDivision(div)"
            >
              <circle
                :cx="px(div.lng)" :cy="py(div.lat)"
                :r="divRadius(div) + 6"
                :fill="div.color"
                fill-opacity="0.04"
                :stroke="div.color"
                stroke-width="0.5"
                stroke-opacity="0.25"
              />
              <circle
                :cx="px(div.lng)" :cy="py(div.lat)"
                :r="divRadius(div)"
                :fill="div.color"
                :fill-opacity="selectedDivision?.id === div.id ? 0.35 : 0.13"
                :stroke="div.color"
                :stroke-width="selectedDivision?.id === div.id ? 2 : 1.2"
                stroke-opacity="0.6"
                class="gm-div-circle"
              />
              <circle
                :cx="px(div.lng)" :cy="py(div.lat)"
                r="4"
                :fill="div.color"
                filter="url(#gmGlow)"
              />
              <text
                :x="px(div.lng)" :y="py(div.lat) + 4"
                text-anchor="middle"
                :fill="div.color"
                font-size="10"
                font-family="'JetBrains Mono', monospace"
                font-weight="600"
                opacity="0.9"
              >{{ div.totalInstitutions.toLocaleString() }}</text>
              <text
                :x="px(div.lng)" :y="py(div.lat) - divRadius(div) - 7"
                text-anchor="middle"
                :fill="div.color"
                font-size="9"
                font-family="'Space Grotesk', sans-serif"
                font-weight="700"
                letter-spacing="0.6"
                opacity="0.9"
              >{{ div.name.toUpperCase() }}</text>
            </g>
          </g>

          <g v-if="viewMode === 'district'">
            <g v-for="dist in districts" :key="'dist' + dist.id">
              <circle
                :cx="px(dist.lng)" :cy="py(dist.lat)"
                :r="Math.max(3.5, Math.min(10, dist.institutions / 30))"
                :fill="divColor(dist.divisionId)"
                fill-opacity="0.2"
                :stroke="divColor(dist.divisionId)"
                stroke-width="1"
              />
              <circle
                :cx="px(dist.lng)" :cy="py(dist.lat)"
                r="2.5"
                :fill="divColor(dist.divisionId)"
              />
              <text
                :x="px(dist.lng) + 6" :y="py(dist.lat) + 3"
                :fill="divColor(dist.divisionId)"
                font-size="7.5"
                font-family="'Space Grotesk', sans-serif"
                opacity="0.8"
              >{{ dist.name }}</text>
            </g>
          </g>

          <g v-for="client in visibleClients" :key="'client' + client.id">
            <circle
              :cx="px(client.lng)" :cy="py(client.lat)"
              r="7"
              :fill="typeColor(client.type)"
              fill-opacity="0.12"
              class="gm-pulse"
            />
            <path
              :d="pinPath(px(client.lng), py(client.lat))"
              :fill="typeColor(client.type)"
              filter="url(#gmShadow)"
              class="gm-pin"
              :class="{ 'gm-pin-selected': selectedClient?.id === client.id }"
              style="cursor: pointer"
              @mouseenter="hoveredClient = client"
              @click="selectedClient = selectedClient?.id === client.id ? null : client"
            />
            <circle
              :cx="px(client.lng)" :cy="py(client.lat) - 7"
              r="2"
              fill="white"
              fill-opacity="0.85"
              style="pointer-events: none"
            />
          </g>
        </svg>

        <div class="gm-legend">
          <div class="gm-legend-title">Types</div>
          <div v-for="f in filterTypes" :key="'lg' + f.value" class="gm-legend-row">
            <span class="gm-legend-dot" :style="{ background: f.color }" />
            {{ f.label }}
          </div>
        </div>

        <div v-if="hoveredClient" class="gm-tooltip" :style="tooltipPos">
          <div class="gm-tt-name">{{ hoveredClient.name }}</div>
          <div class="gm-tt-row">
            <span class="gm-tt-badge" :style="{ background: typeColor(hoveredClient.type) }">
              {{ hoveredClient.type }}
            </span>
            <span class="gm-tt-loc">{{ hoveredClient.district }}</span>
          </div>
          <div class="gm-tt-stats">
            <span>📍 {{ hoveredClient.division }}</span>
            <span>✅ {{ hoveredClient.status }}</span>
          </div>
        </div>

        <div class="gm-zoom">
          <button class="gm-zoom-btn" @click="zoom = Math.min(zoom + 0.25, 2.5)">+</button>
          <button class="gm-zoom-btn" @click="zoom = 1">⊙</button>
          <button class="gm-zoom-btn" @click="zoom = Math.max(zoom - 0.25, 0.6)">−</button>
        </div>
      </div>

      <div class="gm-panel">

        <div class="gm-cards">
          <div class="gm-card gm-card-blue">
            <div class="gm-card-icon">🏫</div>
            <div class="gm-card-val">{{ mapSummary.totalInstitutions.toLocaleString() }}</div>
            <div class="gm-card-lbl">Institutions</div>
          </div>
          <div class="gm-card gm-card-green">
            <div class="gm-card-icon">👩‍🎓</div>
            <div class="gm-card-val">{{ shortNum(mapSummary.totalStudents) }}</div>
            <div class="gm-card-lbl">Students</div>
          </div>
          <div class="gm-card gm-card-purple">
            <div class="gm-card-icon">🤝</div>
            <div class="gm-card-val">{{ clients.length }}</div>
            <div class="gm-card-lbl">Clients</div>
          </div>
          <div class="gm-card gm-card-orange">
            <div class="gm-card-icon">🌐</div>
            <div class="gm-card-val">{{ partners.length }}</div>
            <div class="gm-card-lbl">Partners</div>
          </div>
        </div>

        <div class="gm-section">
          <div class="gm-section-title">By Type</div>
          <div v-for="row in typeBreakdown" :key="row.type" class="gm-brow">
            <span class="gm-bdot" :style="{ background: typeColor(row.type) }" />
            <span class="gm-bname">{{ row.label }}</span>
            <div class="gm-bbar-wrap">
              <div
                class="gm-bbar"
                :style="{ width: (row.count / mapSummary.totalInstitutions * 100) + '%', background: typeColor(row.type) }"
              />
            </div>
            <span class="gm-bcount">{{ row.count.toLocaleString() }}</span>
          </div>
        </div>

        <div class="gm-section">
          <div class="gm-section-title">Divisions Ranking</div>
          <div
            v-for="(div, i) in sortedDivisions"
            :key="'rk' + div.id"
            class="gm-rank-row"
            :class="{ 'gm-rank-sel': selectedDivision?.id === div.id }"
            @click="onClickDivision(div)"
          >
            <span class="gm-rank-num">{{ i + 1 }}</span>
            <span class="gm-rank-dot" :style="{ background: div.color }" />
            <span class="gm-rank-name">{{ div.name }}</span>
            <div class="gm-rank-bar-wrap">
              <div
                class="gm-rank-bar"
                :style="{ width: (div.totalInstitutions / sortedDivisions[0].totalInstitutions * 100) + '%', background: div.color }"
              />
            </div>
            <span class="gm-rank-val">{{ div.totalInstitutions.toLocaleString() }}</span>
          </div>
        </div>

        <div class="gm-section">
          <div class="gm-section-title">Partners</div>
          <div class="gm-partners-grid">
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="gm-partner-card"
              :title="partner.name"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="gm-partner-logo"
                @error="e => e.target.style.display='none'"
              />
              <div class="gm-partner-name">{{ partner.name }}</div>
            </div>
          </div>
        </div>

        <div v-if="selectedClient" class="gm-section gm-detail">
          <div class="gm-section-title">
            Selected
            <button class="gm-detail-close" @click="selectedClient = null">✕</button>
          </div>
          <div class="gm-detail-badge" :style="{ background: typeColor(selectedClient.type) }">
            {{ selectedClient.type }}
          </div>
          <div class="gm-detail-name">{{ selectedClient.name }}</div>
          <div class="gm-detail-loc">📍 {{ selectedClient.district }}, {{ selectedClient.division }}</div>
          <div class="gm-detail-stats">
            <div class="gm-dstat">
              <div class="gm-dstat-val" style="text-transform:capitalize">{{ selectedClient.status }}</div>
              <div class="gm-dstat-key">Status</div>
            </div>
            <div class="gm-dstat">
              <div class="gm-dstat-val" style="text-transform:capitalize">{{ selectedClient.type }}</div>
              <div class="gm-dstat-key">Type</div>
            </div>
            <div class="gm-dstat">
              <div class="gm-dstat-val">{{ selectedClient.division }}</div>
              <div class="gm-dstat-key">Division</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { divisions, districts, clients, partners, mapSummary } from '../data/clients.js'

const BOUNDS = { minLat: 20.4, maxLat: 26.75, minLng: 87.9, maxLng: 92.8 }
const SVG_W  = 600
const SVG_H  = 720

const TYPE_COLORS = {
  university:  '#6366f1',
  college:     '#10b981',
  school:      '#f59e0b',
  government:  '#3b82f6',
  private:     '#ec4899',
  cooperative: '#14b8a6',
}

export default {
  name: 'GlobalMap',

  data() {
    return {
      divisions,
      districts,
      clients,
      partners,
      mapSummary,

      viewMode:      'division',
      activeFilters: ['university', 'college', 'school', 'government', 'private', 'cooperative'],
      filterTypes: [
        { value: 'university',  label: 'University',  color: '#6366f1' },
        { value: 'college',     label: 'College',     color: '#10b981' },
        { value: 'school',      label: 'School',      color: '#f59e0b' },
        { value: 'government',  label: 'Government',  color: '#3b82f6' },
        { value: 'private',     label: 'Private',     color: '#ec4899' },
        { value: 'cooperative', label: 'Cooperative', color: '#14b8a6' },
      ],

      selectedDivision: null,
      selectedClient:   null,
      hoveredClient:    null,

      tooltipX: 0,
      tooltipY: 0,
      zoom:     1,
    }
  },

  computed: {
    visibleClients() {
      return this.clients.filter(c => this.activeFilters.includes(c.type))
    },
    sortedDivisions() {
      return [...this.divisions].sort((a, b) => b.totalInstitutions - a.totalInstitutions)
    },
    typeBreakdown() {
      return [
        { type: 'university', label: 'Universities', count: this.mapSummary.breakdown.universities },
        { type: 'college',    label: 'Colleges',     count: this.mapSummary.breakdown.colleges    },
        { type: 'school',     label: 'Schools',      count: this.mapSummary.breakdown.schools     },
      ]
    },
    tooltipPos() {
      return { left: this.tooltipX + 'px', top: this.tooltipY + 'px' }
    },
  },

  methods: {
    px(lng) {
      return ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * SVG_W
    },
    py(lat) {
      return ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * SVG_H
    },
    divRadius(div) {
      return 28 + (div.totalInstitutions / 1240) * 52
    },
    divColor(divisionId) {
      return this.divisions.find(d => d.id === divisionId)?.color ?? '#64748b'
    },
    typeColor(type) {
      return TYPE_COLORS[type] ?? '#64748b'
    },
    pinPath(x, y) {
      return `M${x} ${y} C${x-6} ${y-6},${x-7} ${y-11},${x} ${y-15} C${x+7} ${y-11},${x+6} ${y-6},${x} ${y} Z`
    },
    toggleFilter(val) {
      const idx = this.activeFilters.indexOf(val)
      if (idx >= 0) {
        if (this.activeFilters.length > 1) this.activeFilters.splice(idx, 1)
      } else {
        this.activeFilters.push(val)
      }
    },
    toggleView() {
      this.viewMode = this.viewMode === 'division' ? 'district' : 'division'
    },
    onClickDivision(div) {
      this.selectedDivision = this.selectedDivision?.id === div.id ? null : div
    },
    onSvgMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      this.tooltipX = e.clientX - rect.left + 14
      this.tooltipY = e.clientY - rect.top  - 50
    },
    shortNum(n) {
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
      if (n >= 1_000)     return (n / 1_000).toFixed(0)     + 'K'
      return n
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

.gm-wrapper {
  font-family: 'Space Grotesk', sans-serif;
  background: #060d1a;
  color: #e2e8f0;
  min-height: 100vh;
  padding: 12px 20px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
}

.gm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  background: linear-gradient(135deg, #0f1e35, #0d1a2e);
  border: 1px solid #1e3a5f;
  border-radius: 14px;
  padding: 10px 20px;
}
.gm-header-left  { display: flex; align-items: center; gap: 14px; }
.gm-header-right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.gm-header-icon  { font-size: 28px; filter: drop-shadow(0 0 8px #3b82f6); }
.gm-title   { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -.3px; }
.gm-subtitle { margin: 2px 0 0; font-size: 12px; color: #64748b; letter-spacing: .4px; }

.gm-filter-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 5px 12px; border-radius: 20px;
  border: 1px solid #1e3a5f; background: #0d1a2e;
  color: #94a3b8; font-size: 12px; font-family: inherit;
  cursor: pointer; transition: all .2s;
}
.gm-filter-btn:hover { border-color: #3b82f6; color: #e2e8f0; }
.gm-filter-active    { background: #1e3a5f; color: #e2e8f0; border-color: #3b82f6; }
.gm-filter-dot       { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.gm-view-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1px solid #3b82f6; background: #1e3a5f;
  color: #93c5fd; font-size: 12px; font-family: inherit;
  cursor: pointer; transition: all .2s;
}
.gm-view-btn:hover { background: #2563eb; color: #fff; }

.gm-body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 16px;
  flex: 1;
}

.gm-map-wrap {
  position: relative;
  background: linear-gradient(160deg, #060d1a, #0a1628 50%, #060f1e);
  border: 1px solid #1e3a5f;
  border-radius: 14px;
  overflow: hidden;
  min-height: 540px;
}
.gm-svg {
  width: 100%; height: 100%;
  min-height: 540px; display: block;
  transition: transform .2s ease;
}

.gm-pin {
  transition: transform .15s, filter .15s;
  transform-box: fill-box;
  transform-origin: center bottom;
}
.gm-pin:hover,
.gm-pin-selected {
  transform: scale(1.45);
  filter: brightness(1.4) drop-shadow(0 0 6px rgba(255,255,255,.35));
}
@keyframes gmPulse {
  0%   { r: 5;  opacity: .4; }
  70%  { r: 13; opacity: 0; }
  100% { r: 13; opacity: 0; }
}
.gm-pulse      { animation: gmPulse 2.6s ease-out infinite; }
.gm-div-circle { transition: fill-opacity .2s; }

.gm-legend {
  position: absolute; bottom: 60px; left: 16px;
  background: rgba(6,13,26,.92); border: 1px solid #1e3a5f;
  border-radius: 10px; padding: 10px 14px;
  backdrop-filter: blur(8px);
}
.gm-legend-title { font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: .8px; margin-bottom: 8px; }
.gm-legend-row   { display: flex; align-items: center; gap: 7px; font-size: 11px; color: #94a3b8; margin-bottom: 4px; }
.gm-legend-dot   { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

.gm-tooltip {
  position: absolute; pointer-events: none; z-index: 50;
  background: rgba(6,13,26,.96); border: 1px solid #2563eb;
  border-radius: 10px; padding: 10px 14px; min-width: 180px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(37,99,235,.2);
}
.gm-tt-name  { font-size: 13px; font-weight: 600; margin-bottom: 5px; }
.gm-tt-row   { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.gm-tt-badge { font-size: 10px; color: #fff; padding: 2px 8px; border-radius: 10px; font-weight: 600; text-transform: capitalize; }
.gm-tt-loc   { font-size: 11px; color: #64748b; }
.gm-tt-stats { display: flex; gap: 10px; font-size: 11px; color: #94a3b8; font-family: 'JetBrains Mono', monospace; }

.gm-zoom { position: absolute; bottom: 16px; right: 16px; display: flex; flex-direction: column; gap: 4px; }
.gm-zoom-btn {
  width: 32px; height: 32px; border-radius: 8px;
  border: 1px solid #1e3a5f; background: rgba(6,13,26,.9);
  color: #64748b; font-size: 16px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all .2s;
}
.gm-zoom-btn:hover { background: #1e3a5f; color: #e2e8f0; }

.gm-panel { display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }

.gm-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.gm-card {
  background: linear-gradient(135deg, #0f1e35, #0a1628);
  border: 1px solid #1e3a5f; border-radius: 12px;
  padding: 10px; text-align: center; transition: transform .2s;
}
.gm-card:hover { transform: translateY(-2px); }
.gm-card-icon { font-size: 18px; margin-bottom: 4px; }
.gm-card-val  { font-size: 18px; font-weight: 700; font-family: 'JetBrains Mono', monospace; line-height: 1; margin-bottom: 3px; }
.gm-card-lbl  { font-size: 10px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: .5px; }
.gm-card-blue   { border-color: rgba(59,130,246,.3); }  .gm-card-blue   .gm-card-val { color: #3b82f6; }
.gm-card-green  { border-color: rgba(16,185,129,.3); }  .gm-card-green  .gm-card-val { color: #10b981; }
.gm-card-purple { border-color: rgba(139,92,246,.3); }  .gm-card-purple .gm-card-val { color: #8b5cf6; }
.gm-card-orange { border-color: rgba(245,158,11,.3); }  .gm-card-orange .gm-card-val { color: #f59e0b; }

.gm-section {
  background: linear-gradient(135deg, #0f1e35, #0a1628);
  border: 1px solid #1e3a5f; border-radius: 12px; padding: 12px;
}
.gm-section-title {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11px; font-weight: 700; color: #64748b;
  text-transform: uppercase; letter-spacing: .8px; margin-bottom: 10px;
}

.gm-brow   { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.gm-bdot   { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.gm-bname  { font-size: 11px; color: #94a3b8; width: 80px; flex-shrink: 0; }
.gm-bbar-wrap { flex: 1; height: 6px; background: #0a1628; border-radius: 3px; overflow: hidden; }
.gm-bbar   { height: 100%; border-radius: 3px; opacity: .85; transition: width .8s ease; }
.gm-bcount { font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #64748b; width: 42px; text-align: right; flex-shrink: 0; }

.gm-rank-row {
  display: flex; align-items: center; gap: 8px;
  padding: 4px 8px; border-radius: 8px; border: 1px solid transparent;
  cursor: pointer; transition: background .15s; margin-bottom: 2px;
}
.gm-rank-row:hover { background: rgba(30,58,95,.4); }
.gm-rank-sel { background: rgba(37,99,235,.12) !important; border-color: rgba(37,99,235,.3); }
.gm-rank-num      { font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #475569; width: 14px; flex-shrink: 0; }
.gm-rank-dot      { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.gm-rank-name     { font-size: 12px; color: #94a3b8; width: 70px; flex-shrink: 0; white-space: nowrap; }
.gm-rank-bar-wrap { flex: 1; height: 5px; background: #0a1628; border-radius: 3px; overflow: hidden; }
.gm-rank-bar      { height: 100%; border-radius: 3px; opacity: .7; transition: width .8s ease; }
.gm-rank-val      { font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #64748b; width: 36px; text-align: right; flex-shrink: 0; }

.gm-partners-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.gm-partner-card {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 10px 6px; border-radius: 8px;
  background: #060d1a; border: 1px solid #1e3a5f;
  transition: border-color .2s;
  text-align: center;
}
.gm-partner-card:hover { border-color: #3b82f6; }
.gm-partner-logo {
  width: 48px; height: 28px; object-fit: contain;
}
.gm-partner-name {
  font-size: 9px; color: #64748b; font-weight: 600;
  line-height: 1.2; text-align: center;
}

.gm-detail { 
  position: relative; 
}
.gm-detail-close {
  background: #1e3a5f; border: none; color: #94a3b8;
  width: 20px; height: 20px; border-radius: 50%;
  font-size: 10px; cursor: pointer;
}
.gm-detail-close:hover { 
  color: #ef4444; 
}
.gm-detail-badge { 
  display: inline-block; 
  font-size: 10px; 
  font-weight: 700; 
  color: #fff; 
  padding: 2px 10px; 
  border-radius: 10px; 
  text-transform: uppercase; 
  letter-spacing: .5px; 
  margin-bottom: 8px; 
}
.gm-detail-name  { 
  font-size: 15px; 
  font-weight: 700; 
  color: #e2e8f0; 
  margin-bottom: 4px; 
  line-height: 1.3; 
}
.gm-detail-loc   { 
  font-size: 12px; 
  color: #64748b;
   margin-bottom: 12px; 
  }
.gm-detail-stats { 
  display: flex; 
  gap: 10px; 
}
.gm-dstat        { 
  flex: 1; 
  text-align: center; 
  background: #060d1a; 
  border-radius: 8px; 
  padding: 8px 4px; 
}
.gm-dstat-val    { 
  font-size: 13px; 
  font-weight: 700; 
  font-family: 'JetBrains Mono', monospace; 
  color: #3b82f6; 
}
.gm-dstat-key    { 
  font-size: 10px; 
  color: #475569;
   margin-top: 2px; 
  }

@media (max-width: 900px) {
  .gm-body { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .gm-wrapper {
    padding: 8px 12px 0;
    gap: 8px;
  }
  .gm-header { 
    flex-direction: column; 
  }
  .gm-cards  { 
    grid-template-columns: 1fr 1fr; 
  }
}
</style>