<template>
  <section class="templates-section">
    <div class="container">

      <div class="section-header">
        <span class="section-badge">Website Templates</span>
        <h2 class="title">
          Choose Your School's
          <span class="title-accent">Perfect Look</span>
        </h2>
        <p class="subtitle">
          Professionally designed templates built for schools.
          Pick one, we handle the rest — custom domain, content, and launch.
        </p>
      </div>

      <div class="templates-grid">
        <div
          v-for="(template, index) in templates"
          :key="template.id"
          class="template-card"
          :class="{ selected: selectedId === template.id }"
          :style="{ '--delay': `${index * 0.08}s` }"
          @click="selectTemplate(template)"
        >
          <div class="preview-window">
            <div class="browser-bar">
              <div class="browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-url">www.{{ template.name.toLowerCase().replace(/\s+/g, '') }}.edu</div>
            </div>

            <div class="mock-site" :style="{ background: template.preview.bg }">
              <div class="mock-nav">
                <div class="mock-logo" :style="{ background: template.preview.accent, opacity: 0.9 }"></div>
                <div class="mock-nav-links">
                  <span v-for="i in 3" :key="i" :style="{ background: template.preview.accent, opacity: 0.5 }"></span>
                </div>
              </div>

              <div class="mock-hero">
                <div class="mock-hero-text">
                  <div class="mock-h1" :style="{ background: template.preview.accent }"></div>
                  <div class="mock-h2" :style="{ background: template.preview.accent, opacity: 0.6 }"></div>
                  <div class="mock-btn" :style="{ background: template.preview.accent }"></div>
                </div>
                <div class="mock-hero-img" :style="{ background: `${template.preview.accent}22` }">
                  <div class="mock-img-inner" :style="{ background: `${template.preview.accent}44` }"></div>
                </div>
              </div>

              <div class="mock-cards">
                <div
                  v-for="i in 3"
                  :key="i"
                  class="mock-card"
                  :style="{ background: `${template.preview.accent}18` }"
                >
                  <div class="mock-card-icon" :style="{ background: template.preview.accent, opacity: 0.7 }"></div>
                  <div class="mock-card-lines">
                    <span :style="{ background: template.preview.accent, opacity: 0.5 }"></span>
                    <span :style="{ background: template.preview.accent, opacity: 0.3 }"></span>
                  </div>
                </div>
              </div>

              <div class="preview-overlay">
                <p class="overlay-hero">{{ template.preview.heroText }}</p>
                <p class="overlay-sub">{{ template.preview.subText }}</p>
              </div>
            </div>

            <div class="template-badge">{{ template.badge }}</div>

            <div class="selected-overlay" v-if="selectedId === template.id">
              <div class="check-circle">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5L18 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Selected</span>
            </div>
          </div>

          <div class="card-info">
            <div class="card-top-row">
              <div>
                <h3 class="template-name">{{ template.name }}</h3>
                <p class="template-tag">{{ template.tag }}</p>
              </div>
              <div class="palette-dots">
                <span
                  v-for="color in template.palette"
                  :key="color"
                  class="palette-dot"
                  :style="{ background: color }"
                ></span>
              </div>
            </div>

            <p class="template-desc">{{ template.description }}</p>

            <div class="feature-list">
              <span v-for="feat in template.features" :key="feat" class="feature-chip">{{ feat }}</span>
            </div>

            <div class="card-actions">
              <button class="btn-preview" @click.stop="openPreview(template)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Preview
              </button>
              <button
                class="btn-select"
                :class="{ selected: selectedId === template.id }"
                @click.stop="selectTemplate(template)"
              >
                {{ selectedId === template.id ? '✓ Selected' : 'Choose Template' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <transition name="slide-up">
        <div class="cta-bar" v-if="selectedTemplate">
          <div class="cta-bar-left">
            <div class="cta-preview-dot" :style="{ background: selectedTemplate.preview.bg }"></div>
            <div>
              <p class="cta-label">Selected Template</p>
              <p class="cta-name">{{ selectedTemplate.name }}</p>
            </div>
          </div>
          <div class="cta-bar-right">
            <button class="btn-ghost" @click="selectedId = null; selectedTemplate = null">Change</button>
            <button class="btn-cta">Get Started with This Template →</button>
          </div>
        </div>
      </transition>

    </div>

    <transition name="fade">
      <div class="modal-backdrop" v-if="previewTemplate" @click.self="previewTemplate = null">
        <div class="modal">
          <div class="modal-header">
            <div>
              <h3>{{ previewTemplate.name }}</h3>
              <p>{{ previewTemplate.tag }}</p>
            </div>
            <button class="modal-close" @click="previewTemplate = null">✕</button>
          </div>
          <div class="modal-preview" :style="{ background: previewTemplate.preview.bg }">
            <div class="modal-mock-nav">
              <div class="modal-mock-logo" :style="{ color: previewTemplate.preview.accent }">
                🎓 {{ previewTemplate.name }}
              </div>
              <div class="modal-mock-links">
                <span v-for="link in ['About', 'Academics', 'Admissions', 'Contact']" :key="link" :style="{ color: previewTemplate.preview.accent, opacity: 0.8 }">
                  {{ link }}
                </span>
              </div>
            </div>
            <div class="modal-mock-hero">
              <h2 :style="{ color: previewTemplate.preview.accent }">{{ previewTemplate.preview.heroText }}</h2>
              <p :style="{ color: previewTemplate.preview.accent, opacity: 0.75 }">{{ previewTemplate.preview.subText }}</p>
              <button class="modal-mock-btn" :style="{ background: previewTemplate.preview.accent }">Apply Now</button>
            </div>
            <div class="modal-mock-features">
              <div
                v-for="feat in previewTemplate.features"
                :key="feat"
                class="modal-feat-card"
                :style="{ background: `${previewTemplate.preview.accent}20`, borderColor: `${previewTemplate.preview.accent}40` }"
              >
                <span :style="{ color: previewTemplate.preview.accent }">✦</span>
                <p :style="{ color: previewTemplate.preview.accent }">{{ feat }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-ghost" @click="previewTemplate = null">Close</button>
            <button class="btn-cta" @click="selectTemplate(previewTemplate); previewTemplate = null">Choose This Template</button>
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref } from 'vue';
import { templates } from '../data/templateData.js';

const selectedId = ref(null);
const selectedTemplate = ref(null);
const previewTemplate = ref(null);

const selectTemplate = (template) => {
  if (selectedId.value === template.id) {
    selectedId.value = null;
    selectedTemplate.value = null;
  } else {
    selectedId.value = template.id;
    selectedTemplate.value = template;
  }
};

const openPreview = (template) => {
  previewTemplate.value = template;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Lato:wght@400;500;600&display=swap');

* { box-sizing: border-box; }

.templates-section {
  font-family: 'Lato', sans-serif;
  background: var(--color-bg-body, #F9FAFB);
  padding: 5rem 1.5rem 8rem;
}

.container {
  max-width: var(--container-width, 1280px);
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: var(--radius-full, 9999px);
  background: var(--badge-bg, #E6F2FF);
  color: var(--badge-text, #003D73);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 800;
  color: var(--color-text-main, #111827);
  line-height: 1.12;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.title-accent {
  background: var(--gradient-hero, linear-gradient(135deg, #00529B 0%, #6B4E9B 50%, #E83E8C 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.05rem;
  color: var(--color-text-secondary, #6B7280);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.template-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: fadeUp 0.45s ease both;
  animation-delay: var(--delay, 0s);
  border: 2px solid transparent;
}

.template-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}

.template-card.selected {
  border-color: var(--color-primary, #00529B);
  box-shadow: 0 0 0 4px rgba(0,82,155,0.12), 0 16px 40px rgba(0,0,0,0.1);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.preview-window {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.85rem;
  background: #F3F4F6;
  border-bottom: 1px solid #E5E7EB;
  height: 32px;
}

.browser-dots {
  display: flex;
  gap: 4px;
}

.browser-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.browser-dots span:nth-child(1) { background: #FC635D; }
.browser-dots span:nth-child(2) { background: #FDBC40; }
.browser-dots span:nth-child(3) { background: #35CD4B; }

.browser-url {
  font-size: 0.68rem;
  color: #9CA3AF;
  background: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #E5E7EB;
  flex: 1;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mock-site {
  height: calc(100% - 32px);
  padding: 10px 12px;
  position: relative;
  overflow: hidden;
}

.mock-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.mock-logo {
  width: 50px;
  height: 10px;
  border-radius: 3px;
}

.mock-nav-links {
  display: flex;
  gap: 6px;
}

.mock-nav-links span {
  width: 28px;
  height: 7px;
  border-radius: 2px;
  display: block;
}

.mock-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.mock-hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mock-h1 { height: 12px; border-radius: 3px; width: 85%; }
.mock-h2 { height: 8px; border-radius: 2px; width: 70%; }
.mock-btn { width: 55px; height: 14px; border-radius: 4px; margin-top: 4px; }

.mock-hero-img {
  width: 70px;
  height: 55px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mock-img-inner { width: 40px; height: 32px; border-radius: 4px; }

.mock-cards { display: flex; gap: 6px; }

.mock-card {
  flex: 1;
  border-radius: 5px;
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.mock-card-icon { width: 16px; height: 16px; border-radius: 3px; }

.mock-card-lines { display: flex; flex-direction: column; gap: 3px; }

.mock-card-lines span { display: block; height: 5px; border-radius: 2px; }
.mock-card-lines span:first-child { width: 80%; }
.mock-card-lines span:last-child { width: 55%; }

.preview-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  gap: 0.4rem;
}

.template-card:hover .preview-overlay { opacity: 1; }

.overlay-hero {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.overlay-sub {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.8);
  margin: 0;
}

.template-badge {
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  background: rgba(0,0,0,0.6);
  color: white;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
}

.selected-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,82,155,0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
}

.check-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary, #00529B);
  border: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-info {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.template-name {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text-main, #111827);
  margin: 0 0 0.2rem;
}

.template-tag {
  font-size: 0.78rem;
  color: var(--color-primary, #00529B);
  font-weight: 600;
  margin: 0;
}

.palette-dots { display: flex; gap: 4px; align-items: center; }

.palette-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}

.template-desc {
  font-size: 0.85rem;
  color: var(--color-text-secondary, #6B7280);
  line-height: 1.6;
  margin: 0;
}

.feature-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.feature-chip {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full, 9999px);
  background: var(--badge-bg, #E6F2FF);
  color: var(--badge-text, #003D73);
}

.card-actions { display: flex; gap: 0.6rem; margin-top: 0.25rem; }

.btn-preview {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-sm, 8px);
  font-size: 0.82rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid var(--color-border, #E5E7EB);
  background: white;
  color: var(--color-text-secondary, #6B7280);
  transition: all 0.2s ease;
}

.btn-preview:hover {
  border-color: var(--color-primary, #00529B);
  color: var(--color-primary, #00529B);
}

.btn-select {
  flex: 1;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-sm, 8px);
  font-size: 0.82rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: var(--gradient-primary, linear-gradient(135deg, #00529B, #0066C0));
  color: white;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(0,82,155,0.2);
}

.btn-select:hover {
  background: var(--gradient-primary-dark, linear-gradient(135deg, #003D73, #00529B));
  box-shadow: 0 6px 16px rgba(0,82,155,0.35);
  transform: translateY(-1px);
}

.btn-select.selected {
  background: linear-gradient(135deg, #10B981, #059669);
  box-shadow: 0 4px 12px rgba(16,185,129,0.3);
}

.cta-bar {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-width: min(680px, 90vw);
  z-index: 100;
  border: 1.5px solid var(--color-border, #E5E7EB);
}

.cta-bar-left { display: flex; align-items: center; gap: 0.85rem; }

.cta-preview-dot {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
}

.cta-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted, #9CA3AF);
  font-weight: 600;
  margin: 0 0 0.15rem;
}

.cta-name {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-main, #111827);
  margin: 0;
}

.cta-bar-right { display: flex; align-items: center; gap: 0.75rem; }

.btn-ghost {
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-sm, 8px);
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid var(--color-border, #E5E7EB);
  background: transparent;
  color: var(--color-text-secondary, #6B7280);
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: var(--color-primary, #00529B);
  color: var(--color-primary, #00529B);
}

.btn-cta {
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-sm, 8px);
  font-size: 0.88rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: var(--gradient-hero, linear-gradient(135deg, #00529B 0%, #6B4E9B 50%, #E83E8C 100%));
  color: white;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(0,82,155,0.3);
  white-space: nowrap;
}

.btn-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0,82,155,0.35);
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  width: min(760px, 95vw);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 40px 80px rgba(0,0,0,0.25);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-border, #E5E7EB);
}

.modal-header h3 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0 0 0.15rem;
  color: var(--color-text-main, #111827);
}

.modal-header p {
  font-size: 0.8rem;
  color: var(--color-text-secondary, #6B7280);
  margin: 0;
}

.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1.5px solid var(--color-border, #E5E7EB);
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-text-secondary, #6B7280);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.modal-close:hover {
  background: var(--color-bg-section-alt, #F3F4F6);
  color: var(--color-text-main, #111827);
}

.modal-preview {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modal-mock-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-mock-logo {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 1rem;
}

.modal-mock-links { display: flex; gap: 1.5rem; font-size: 0.85rem; font-weight: 600; }

.modal-mock-hero {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem 0;
}

.modal-mock-hero h2 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  margin: 0;
  line-height: 1.15;
}

.modal-mock-hero p { font-size: 1rem; margin: 0; line-height: 1.6; }

.modal-mock-btn {
  align-self: flex-start;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  color: rgba(0,0,0,0.7);
  margin-top: 0.5rem;
}

.modal-mock-features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.75rem;
}

.modal-feat-card {
  border-radius: 10px;
  border: 1px solid;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.modal-feat-card span { font-size: 1rem; }
.modal-feat-card p { font-size: 0.8rem; font-weight: 600; margin: 0; }

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--color-border, #E5E7EB);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .templates-section { padding: 3rem 1rem 6rem; }
  .templates-grid { grid-template-columns: 1fr; }
  .cta-bar { flex-direction: column; gap: 1rem; padding: 1rem; bottom: 1rem; }
  .cta-bar-right { width: 100%; }
  .btn-cta { flex: 1; text-align: center; }
  .modal-mock-links { display: none; }
}
</style>