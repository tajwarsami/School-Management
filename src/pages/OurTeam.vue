<template>
  <section class="team-section">
    <div class="container">

      <div class="section-header">
        <span class="section-badge">Our Team</span>
        <h2 class="title">
          The Engineers Who Make
          <span class="title-accent">IT Run Itself</span>
        </h2>
        <p class="subtitle">
          Elite specialists in automation, cloud infrastructure, and AI-driven ops —
          obsessed with eliminating manual work across every layer of your IT stack.
        </p>
      </div>

      <div class="filter-row">
        <button
          v-for="dept in departments"
          :key="dept"
          class="filter-btn"
          :class="{ active: activeDept === dept }"
          @click="activeDept = dept"
        >
          {{ dept }}
        </button>
      </div>

      <div class="team-grid">
        <div
          v-for="(member, index) in filteredMembers"
          :key="member.id"
          class="member-card"
          :style="{ '--delay': `${index * 0.06}s` }"
        >
          <div class="card-accent-bar" :style="{ background: member.accentGradient }"></div>

          <div class="card-body">
            <div class="photo-row">
              <div class="photo-wrap">
                <img :src="member.photo" :alt="member.name" class="member-photo" />
                <span class="status-dot" :class="member.status"></span>
              </div>
              <div class="member-meta">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <span class="dept-badge">{{ member.department }}</span>
              </div>
            </div>

            <p class="member-bio">{{ member.bio }}</p>

            <div class="skill-tags">
              <span v-for="skill in member.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>

            <div class="card-stats">
              <div class="stat-item">
                <span class="stat-value">{{ member.automations }}+</span>
                <span class="stat-label">Automations</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-value">{{ member.uptime }}</span>
                <span class="stat-label">Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-footer">
        <div class="footer-stat" v-for="stat in footerStats" :key="stat.label">
          <span class="footer-num">{{ stat.value }}</span>
          <span class="footer-label">{{ stat.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { teamMembers, departments, footerStats } from '../data/teamData.js';

const activeDept = ref('All');

const filteredMembers = computed(() =>
  activeDept.value === 'All'
    ? teamMembers
    : teamMembers.filter(m => m.department === activeDept.value)
);
</script>

<style scoped>
.team-section {
  font-family: var(--font-family, 'Outfit', sans-serif);
  background: var(--color-bg-section-alt, #F3F4F6);
  padding: 5rem 1.5rem;
}

.container {
  max-width: var(--container-width, 1280px);
  margin: 0 auto;
  padding: 0 var(--container-padding, 1.5rem);
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: var(--radius-full, 9999px);
  background: var(--badge-bg, #E6F2FF);
  color: var(--badge-text, #003D73);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  color: var(--color-text-main, #111827);
  line-height: 1.15;
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
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--color-text-secondary, #6B7280);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.filter-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.45rem 1.2rem;
  border-radius: var(--radius-full, 9999px);
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid var(--color-border, #E5E7EB);
  background: var(--color-card-light, #fff);
  color: var(--color-text-secondary, #6B7280);
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--color-primary, #00529B);
  color: var(--color-primary, #00529B);
}

.filter-btn.active {
  background: var(--gradient-primary, linear-gradient(135deg, #00529B 0%, #0066C0 100%));
  border-color: transparent;
  color: #fff;
  box-shadow: var(--btn-primary-shadow, 0 4px 6px rgba(0, 82, 155, 0.3));
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.member-card {
  background: var(--color-card-light, #FFFFFF);
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: fadeUp 0.45s ease both;
  animation-delay: var(--delay, 0s);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-card-hover, 0 10px 25px rgba(139, 92, 246, 0.15));
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card-accent-bar {
  height: 5px;
  flex-shrink: 0;
}

.card-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.photo-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.photo-wrap {
  position: relative;
  flex-shrink: 0;
}

.member-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-border, #E5E7EB);
  display: block;
}

.status-dot {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}
.status-dot.online { background: var(--color-success, #10B981); }
.status-dot.busy   { background: var(--color-warning, #F59E0B); }

.member-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.member-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-main, #111827);
  margin: 0;
  line-height: 1.2;
}

.member-role {
  font-size: 0.8rem;
  color: var(--color-primary, #00529B);
  font-weight: 600;
  margin: 0;
}

.dept-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-full, 9999px);
  background: var(--badge-bg, #E6F2FF);
  color: var(--badge-text, #003D73);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  width: fit-content;
}

.member-bio {
  font-size: 0.88rem;
  color: var(--color-text-secondary, #6B7280);
  line-height: 1.65;
  flex: 1;
  margin: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full, 9999px);
  background: var(--badge-secondary-bg, #F3E8FF);
  color: var(--badge-secondary-text, #563D7C);
}

.card-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border, #E5E7EB);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-primary, #00529B);
  line-height: 1;
}

.stat-label {
  font-size: 0.68rem;
  color: var(--color-text-muted, #9CA3AF);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: var(--color-border, #E5E7EB);
}

.team-footer {
  background: var(--gradient-primary-dark, linear-gradient(135deg, #003D73 0%, #00529B 100%));
  border-radius: var(--radius-lg, 16px);
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.footer-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
  padding: 1rem 2.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-stat:last-child {
  border-right: none;
}

.footer-num {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
}

.footer-label {
  font-size: 0.75rem;
  color: var(--color-text-on-dark-muted, #D1D5DB);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

@media (max-width: 768px) {
  .team-section { padding: 3rem 1rem; }
  .team-grid { grid-template-columns: 1fr; }
  .team-footer { flex-direction: column; }

  .footer-stat {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 1.25rem 1rem;
  }

  .footer-stat:last-child { border-bottom: none; }
}
</style>