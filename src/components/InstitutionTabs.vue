<script setup>
import { ref } from 'vue';
import { BookOpen, GraduationCap, School, Book, University } from 'lucide-vue-next';

const tabs = [
  { id: 'kindergarten', label: 'Kindergarten', icon: BookOpen },
  { id: 'school', label: 'School', icon: School },
  { id: 'madrasah', label: 'Madrasah', icon: Book },
  { id: 'college', label: 'College', icon: GraduationCap },
  { id: 'university', label: 'university', icon: University }
];

const activeTab = ref('school');

const content = {
  kindergarten: {
    title: "Joyful Learning Management",
    desc: "Track milestones, daily activities, and share moments with parents instantly.",
    features: ["Daily Reports", "Activity Photo Gallery", "Nap & Meal Tracking"]
  },
  school: {
    title: "Complete School Administration",
    desc: "From admissions to alumni management, handle everything in one unified platform.",
    features: ["Class Routine", "Exam Management", "Transport Tracking"]
  },
  madrasah: {
    title: "Islamic Studies Tracking",
    desc: "Specialized tools for Hifz, Nazra, and Kitab departments with tailored reporting.",
    features: ["Hifz Progress Tracker", "Daily Lesson Logs", "Board Exam Prep"]
  },
  college: {
    title: "Higher Ed Academic System",
    desc: "Manage courses, credit hours, and complex department structures with ease.",
    features: ["Course Management", "Transcript Generation", "Research Publishing"]
  },
  university: {
    title: "Higher Ed Academic System",
    desc: "Manage courses, credit hours, and complex department structures with ease.",
    features: ["Course Management", "Transcript Generation", "Research Publishing"]
  }
};
</script>

<template>
  <section class="tabs-section">
    <div class="container">
      <div class="section-title-wrap">
        <h2>Tailored for Every Institution</h2>
      </div>

      <div class="tabs-header">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <component :is="tab.icon" :size="18" />
          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content">
        <div class="content-text">
          <span class="badge">{{ tabs.find(t => t.id === activeTab).label }} Features</span>
          <h3 class="content-title">{{ content[activeTab].title }}</h3>
          <p class="content-desc">{{ content[activeTab].desc }}</p>
          <ul class="feature-list">
            <li v-for="feat in content[activeTab].features" :key="feat">
              <div class="check-icon">✓</div>
              {{ feat }}
            </li>
          </ul>
        </div>
        <div class="content-visual">
          <div class="visual-card" :class="activeTab">
            <div class="circle c1"></div>
            <div class="circle c2"></div>
            <div class="bar b1"></div>
            <div class="bar b2"></div>
            <div class="bar b3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs-section {
  padding: 5rem 0;
  background-color: var(--color-bg-light);
}

.section-title-wrap {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title-wrap h2 {
  font-size: 2rem;
  font-weight: 700;
}

.tabs-header {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-weight: 500;
  color: var(--color-text-muted);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tab-btn.active {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(43, 89, 255, 0.3);
  transform: translateY(-2px);
}

.tab-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background-color: var(--color-white);
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

@media (max-width: 968px) {
  .tab-content {
    grid-template-columns: 1fr;
  }
}

.badge {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
  background: rgba(255, 107, 0, 0.1);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
}

.content-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-main);
}

.content-desc {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.check-icon {
  width: 24px;
  height: 24px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.visual-card {
  height: 300px;
  background: #F8FAFC;
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  border: 1px solid #E2E8F0;
}

.visual-card .circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.visual-card .bar {
  position: absolute;
  height: 20px;
  background-color: white;
  border-radius: 10px;
  left: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.visual-card.kindergarten { background: #E0F2FE; }
.visual-card.kindergarten .c1 { width: 100px; height: 100px; background: #0EA5E9; right: -20px; top: -20px; }
.visual-card.kindergarten .b1 { width: 200px; top: 100px; }

.visual-card.school { background: #F0F9FF; }
.visual-card.school .c1 { width: 150px; height: 150px; background: var(--color-primary); bottom: -50px; right: -30px; }
.visual-card.school .b1 { width: 60%; top: 60px; }
.visual-card.school .b2 { width: 80%; top: 100px; }
.visual-card.school .b3 { width: 40%; top: 140px; }

.visual-card.madrasah { background: #ECFDF5; }
.visual-card.madrasah .c1 { width: 80px; height: 80px; background: #10B981; top: 20px; right: 20px; }

.visual-card.college { background: #EEF2FF; }
.visual-card.college .c1 { width: 200px; height: 200px; border: 20px solid #6366F1; opacity: 0.1; left: -50px; bottom: -50px; }

</style>
