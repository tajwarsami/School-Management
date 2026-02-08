<script setup>
import { ref } from 'vue';
import { X, Bell, Search } from 'lucide-vue-next';
import { mobileApps } from '../data/mobileApps';

const selectedApp = ref(null);

const openApp = (appName) => {
  selectedApp.value = appName;
  document.body.style.overflow = 'hidden';
};

const closeApp = () => {
  selectedApp.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <section class="mobile-section">
    <div class="container">
      <div class="section-header">
        <h2>Complete Mobile Ecosystem</h2>
        <p>Stay connected on the go with dedicated apps for everyone. Click to explore each app.</p>
      </div>

      <div class="phones-container">
        <!-- Admin App Mockup -->
        <div class="phone-mockup admin" @click="openApp('admin')">
          <div class="click-hint">Click to Explore</div>
          <div class="phone-frame">
            <div class="notch"></div>
            <div class="screen">
              <div class="app-header" :class="mobileApps.admin.headerClass">
                <component :is="mobileApps.admin.icon" :size="20" />
                <span>{{ mobileApps.admin.label }}</span>
              </div>
              <div class="chart-placeholder admin-chart">
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 85%"></div>
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 70%"></div>
              </div>
              <div class="list-placeholder">
                <div class="line admin-line">
                  <div class="line-icon"></div>
                  <div class="line-content"></div>
                </div>
                <div class="line admin-line">
                  <div class="line-icon"></div>
                  <div class="line-content"></div>
                </div>
                <div class="line admin-line">
                  <div class="line-icon"></div>
                  <div class="line-content"></div>
                </div>
              </div>
            </div>
          </div>
          <p class="phone-label">
            <span class="label-icon">{{ mobileApps.admin.emoji }}</span>
            {{ mobileApps.admin.name }}
          </p>
        </div>

        <!-- Teacher App Mockup -->
        <div class="phone-mockup teacher" @click="openApp('teacher')">
          <div class="click-hint">Click to Explore</div>
          <div class="phone-frame">
            <div class="notch"></div>
            <div class="screen">
              <div class="app-header" :class="mobileApps.teacher.headerClass">
                <component :is="mobileApps.teacher.icon" :size="20" />
                <span>{{ mobileApps.teacher.label }}</span>
              </div>
              <div class="grid-placeholder">
                <div v-for="(item, index) in mobileApps.teacher.gridItems" :key="index" :class="['box', item.class]">
                  <div class="box-icon">{{ item.icon }}</div>
                  <div class="box-text">{{ item.text }}</div>
                </div>
              </div>
              <div class="teacher-stats">
                <div class="stat-card">
                  <div class="stat-number">24</div>
                  <div class="stat-label">Students</div>
                </div>
                <div class="stat-card">
                  <div class="stat-number">5</div>
                  <div class="stat-label">Classes</div>
                </div>
              </div>
            </div>
          </div>
          <p class="phone-label">
            <span class="label-icon">{{ mobileApps.teacher.emoji }}</span>
            {{ mobileApps.teacher.name }}
          </p>
        </div>

        <!-- Guardian App Mockup -->
        <div class="phone-mockup guardian" @click="openApp('guardian')">
          <div class="click-hint">Click to Explore</div>
          <div class="phone-frame">
            <div class="notch"></div>
            <div class="screen">
              <div class="app-header" :class="mobileApps.guardian.headerClass">
                <component :is="mobileApps.guardian.icon" :size="20" />
                <span>{{ mobileApps.guardian.label }}</span>
              </div>
              <div class="student-card">
                <div class="student-avatar">👦</div>
                <div class="student-info">
                  <div class="student-name">John Doe</div>
                  <div class="student-class">Class 8-A</div>
                </div>
                <div class="student-status">✓</div>
              </div>
              <div class="card-placeholder guardian-card">
                <div class="card-header">📅 Today's Schedule</div>
                <div class="card-body">
                  <div class="schedule-item">Math • 9:00 AM</div>
                  <div class="schedule-item">Science • 10:30 AM</div>
                </div>
              </div>
              <div class="card-placeholder guardian-card">
                <div class="card-header">📊 Performance</div>
                <div class="card-body">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="phone-label">
            <span class="label-icon">{{ mobileApps.guardian.emoji }}</span>
            {{ mobileApps.guardian.name }}
          </p>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <Transition name="modal">
      <div v-if="selectedApp" class="modal-overlay" @click="closeApp">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeApp">
            <X :size="24" />
          </button>

          <!-- Admin Detail View -->
          <div v-if="selectedApp === 'admin'" class="app-detail admin-detail">
            <div class="app-phone">
              <div class="phone-frame-large">
                <div class="notch"></div>
                <div class="screen-large">
                  <div class="status-bar">
                    <span class="time">9:41</span>
                    <div class="status-icons">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  <div class="app-content">
                    <div class="top-bar" :class="mobileApps.admin.bgClass">
                      <div class="top-bar-left">
                        <h3>{{ mobileApps.admin.label }}</h3>
                        <p>Welcome back, Administrator</p>
                      </div>
                      <div class="top-bar-right">
                        <Bell :size="20" />
                        <div class="notification-badge">3</div>
                      </div>
                    </div>

                    <div class="stats-grid">
                      <div v-for="(stat, index) in mobileApps.admin.stats" :key="index" :class="['stat-box', stat.class]">
                        <div class="stat-icon">{{ stat.icon }}</div>
                        <div class="stat-value">{{ stat.value }}</div>
                        <div class="stat-name">{{ stat.name }}</div>
                      </div>
                    </div>

                    <div class="chart-section">
                      <h4>Weekly Overview</h4>
                      <div class="full-chart">
                        <div class="chart-bar-full" style="height: 45%"><span>Mon</span></div>
                        <div class="chart-bar-full" style="height: 65%"><span>Tue</span></div>
                        <div class="chart-bar-full" style="height: 85%"><span>Wed</span></div>
                        <div class="chart-bar-full" style="height: 55%"><span>Thu</span></div>
                        <div class="chart-bar-full" style="height: 75%"><span>Fri</span></div>
                        <div class="chart-bar-full" style="height: 40%"><span>Sat</span></div>
                        <div class="chart-bar-full" style="height: 30%"><span>Sun</span></div>
                      </div>
                    </div>

                    <div class="recent-activity">
                      <h4>Recent Activities</h4>
                      <div v-for="(activity, index) in mobileApps.admin.activities" :key="index" class="activity-item">
                        <div class="activity-icon" :class="activity.iconClass">{{ activity.icon }}</div>
                        <div class="activity-text">
                          <div class="activity-title">{{ activity.title }}</div>
                          <div class="activity-time">{{ activity.time }}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bottom-nav" :class="mobileApps.admin.navClass">
                    <div v-for="(nav, index) in mobileApps.admin.navItems" :key="index" :class="['nav-item', { active: nav.active }]">
                      <component :is="nav.icon" :size="20" />
                      <span>{{ nav.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="app-info">
              <h2>{{ mobileApps.admin.emoji }} {{ mobileApps.admin.name }}</h2>
              <p class="app-description">{{ mobileApps.admin.description }}</p>
              
              <div class="features-list">
                <h3>Key Features:</h3>
                <ul>
                  <li v-for="(feature, index) in mobileApps.admin.features" :key="index">✅ {{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Teacher Detail View -->
          <div v-if="selectedApp === 'teacher'" class="app-detail teacher-detail">
            <div class="app-phone">
              <div class="phone-frame-large">
                <div class="notch"></div>
                <div class="screen-large">
                  <div class="status-bar">
                    <span class="time">9:41</span>
                    <div class="status-icons">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  <div class="app-content">
                    <div class="top-bar" :class="mobileApps.teacher.bgClass">
                      <div class="top-bar-left">
                        <h3>{{ mobileApps.teacher.label }}</h3>
                        <p>Hello, Mr. Rahman</p>
                      </div>
                      <div class="top-bar-right">
                        <Search :size="20" />
                        <Bell :size="20" />
                      </div>
                    </div>

                    <div class="quick-actions">
                      <div v-for="(action, index) in mobileApps.teacher.quickActions" :key="index" :class="['action-card', action.class]">
                        <div class="action-icon">{{ action.icon }}</div>
                        <div class="action-label">{{ action.label }}</div>
                      </div>
                    </div>

                    <div class="class-list">
                      <h4>Today's Classes</h4>
                      <div v-for="(cls, index) in mobileApps.teacher.classes" :key="index" :class="['class-card teacher-card', { 'active-class': cls.active }]">
                        <div class="class-time">{{ cls.time }}</div>
                        <div class="class-info">
                          <div class="class-name">{{ cls.name }}</div>
                          <div class="class-students">{{ cls.students }}</div>
                        </div>
                        <div :class="['class-status', cls.statusClass]">{{ cls.status }}</div>
                      </div>
                    </div>

                    <div class="pending-tasks">
                      <h4>Pending Tasks ({{ mobileApps.teacher.pendingTasks.length }})</h4>
                      <div v-for="(task, index) in mobileApps.teacher.pendingTasks" :key="index" class="task-item">
                        <input type="checkbox" />
                        <span>{{ task }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="bottom-nav" :class="mobileApps.teacher.navClass">
                    <div v-for="(nav, index) in mobileApps.teacher.navItems" :key="index" :class="['nav-item', { active: nav.active }]">
                      <component :is="nav.icon" :size="20" />
                      <span>{{ nav.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="app-info">
              <h2>{{ mobileApps.teacher.emoji }} {{ mobileApps.teacher.name }}</h2>
              <p class="app-description">{{ mobileApps.teacher.description }}</p>
              
              <div class="features-list">
                <h3>Key Features:</h3>
                <ul>
                  <li v-for="(feature, index) in mobileApps.teacher.features" :key="index">✅ {{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Guardian Detail View -->
          <div v-if="selectedApp === 'guardian'" class="app-detail guardian-detail">
            <div class="app-phone">
              <div class="phone-frame-large">
                <div class="notch"></div>
                <div class="screen-large">
                  <div class="status-bar">
                    <span class="time">9:41</span>
                    <div class="status-icons">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  <div class="app-content">
                    <div class="top-bar" :class="mobileApps.guardian.bgClass">
                      <div class="top-bar-left">
                        <h3>My Children</h3>
                        <p>Stay updated with their progress</p>
                      </div>
                      <div class="top-bar-right">
                        <Bell :size="20" />
                      </div>
                    </div>

                    <div class="children-selector">
                      <div v-for="(child, index) in mobileApps.guardian.students" :key="index" :class="['child-tab', { active: child.active }]">
                        <div class="child-avatar">{{ child.avatar }}</div>
                        <div class="child-name">{{ child.name }}</div>
                      </div>
                    </div>

                    <div class="guardian-overview">
                      <div :class="['overview-card', mobileApps.guardian.overview.class]">
                        <div class="card-icon">{{ mobileApps.guardian.overview.icon }}</div>
                        <div class="card-content">
                          <div class="card-title">{{ mobileApps.guardian.overview.title }}</div>
                          <div class="performance-score">{{ mobileApps.guardian.overview.score }}</div>
                          <div class="performance-label">{{ mobileApps.guardian.overview.label }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="today-schedule">
                      <h4>📅 Today's Schedule</h4>
                      <div v-for="(item, index) in mobileApps.guardian.schedule" :key="index" class="schedule-card guardian-schedule">
                        <div class="schedule-time">{{ item.time }}</div>
                        <div class="schedule-subject">{{ item.subject }}</div>
                        <div class="schedule-teacher">{{ item.teacher }}</div>
                      </div>
                    </div>

                    <div class="recent-updates">
                      <h4>Recent Updates</h4>
                      <div v-for="(update, index) in mobileApps.guardian.updates" :key="index" class="update-item">
                        <div class="update-icon">{{ update.icon }}</div>
                        <div class="update-text">
                          <div class="update-title">{{ update.title }}</div>
                          <div class="update-time">{{ update.time }}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bottom-nav" :class="mobileApps.guardian.navClass">
                    <div v-for="(nav, index) in mobileApps.guardian.navItems" :key="index" :class="['nav-item', { active: nav.active }]">
                      <component :is="nav.icon" :size="20" />
                      <span>{{ nav.label }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="app-info">
              <h2>{{ mobileApps.guardian.emoji }} {{ mobileApps.guardian.name }}</h2>
              <p class="app-description">{{ mobileApps.guardian.description }}</p>
              
              <div class="features-list">
                <h3>Key Features:</h3>
                <ul>
                  <li v-for="(feature, index) in mobileApps.guardian.features" :key="index">✅ {{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.mobile-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
  text-align: center;
  overflow: hidden;
  position: relative;
}

.mobile-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  color: #6B7280;
  font-size: 1.1rem;
  margin-bottom: 4rem;
}

.phones-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  perspective: 1500px;
}

@media (max-width: 992px) {
  .phones-container {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .phones-container {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
}

.phone-mockup {
  position: relative;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.phone-mockup:hover {
  transform: translateY(-30px) scale(1.05);
}

.phone-mockup:hover .click-hint {
  opacity: 1;
  transform: translateY(0);
}

.click-hint {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  z-index: 10;
}

.phone-frame {
  width: 280px;
  height: 560px;
  background: linear-gradient(145deg, #2D2D2D 0%, #1A1A1A 100%);
  border-radius: 45px;
  padding: 14px;
  position: relative;
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  border: 5px solid #0D0D0D;
}

.notch {
  width: 140px;
  height: 28px;
  background: #0D0D0D;
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 20px 20px;
  z-index: 20;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.screen {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  padding-top: 50px;
  padding-bottom: 20px;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  padding: 12px 20px;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  border-radius: 20px;
  margin: 0 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.admin-header {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  color: white;
}

.teacher-header {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
}

.guardian-header {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  color: white;
}

.admin-chart {
  height: 140px;
  background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%);
  margin: 0 20px 20px;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%);
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
}

.phone-mockup:hover .chart-bar {
  transform: scaleY(1.1);
}

.list-placeholder {
  padding: 0 20px;
}

.line {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.admin-line {
  background: linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%);
  border-left: 4px solid #8B5CF6;
}

.line-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
  border-radius: 8px;
  flex-shrink: 0;
}

.line-content {
  flex: 1;
  height: 16px;
  background: linear-gradient(90deg, #DDD6FE 0%, #EDE9FE 100%);
  border-radius: 4px;
}

.grid-placeholder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
  gap: 14px;
  margin-bottom: 20px;
}

.box {
  height: 100px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
}

.teacher-box {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  border-bottom: 4px solid #10B981;
}

.box-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.box-text {
  font-weight: 700;
  font-size: 0.75rem;
  color: #065F46;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.teacher-stats {
  display: flex;
  gap: 12px;
  padding: 0 20px;
}

.stat-card {
  flex: 1;
  background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
  padding: 16px;
  border-radius: 12px;
  border-top: 3px solid #10B981;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.7rem;
  color: #065F46;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.student-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
  margin: 0 20px 20px;
  padding: 16px;
  border-radius: 16px;
  border-left: 4px solid #F59E0B;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);
}

.student-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
}

.student-info {
  flex: 1;
  text-align: left;
}

.student-name {
  font-weight: 700;
  color: #92400E;
  font-size: 0.9rem;
  margin-bottom: 2px;
}

.student-class {
  font-size: 0.7rem;
  color: #B45309;
}

.student-status {
  width: 28px;
  height: 28px;
  background: #10B981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.card-placeholder {
  margin: 0 20px 16px;
  border-radius: 16px;
  padding: 16px;
  text-align: left;
  transition: all 0.3s ease;
}

.guardian-card {
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
  border-left: 4px solid #F59E0B;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.1);
}

.card-header {
  font-weight: 700;
  color: #92400E;
  margin-bottom: 12px;
  font-size: 0.8rem;
}

.card-body {
  font-size: 0.75rem;
  color: #B45309;
}

.schedule-item {
  padding: 6px 0;
  border-bottom: 1px solid #FDE68A;
}

.schedule-item:last-child {
  border-bottom: none;
}

.progress-bar {
  height: 8px;
  background: #FDE68A;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.phone-label {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 700;
  color: #374151;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.label-icon {
  font-size: 1.3rem;
}

.app-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.store-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 14px;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.store-badge:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.store-badge.apple {
  background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
  color: white;
}

.store-badge.google {
  background: white;
  color: #111827;
  border: 2px solid #E5E7EB;
}

.store-badge.google:hover {
  border-color: #8B5CF6;
  background: linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%);
}

.store-badge .text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.store-badge .small {
  font-size: 0.7rem;
  opacity: 0.8;
}

.store-badge .large {
  font-weight: 700;
  font-size: 1.15rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
}

.modal-content {
  position: relative;
  max-width: 1400px;
  width: 100%;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  max-height: 90vh;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .modal-content {
    padding: 2rem;
  }
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #F3F4F6;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: #E5E7EB;
  transform: rotate(90deg);
}

.app-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .app-detail {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.app-phone {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 2rem;
}

.phone-frame-large {
  width: 380px;
  height: 760px;
  background: linear-gradient(145deg, #2D2D2D 0%, #1A1A1A 100%);
  border-radius: 50px;
  padding: 16px;
  position: relative;
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  border: 6px solid #0D0D0D;
}

.screen-large {
  background: #F9FAFB;
  width: 100%;
  height: 100%;
  border-radius: 42px;
  overflow-y: auto;
  position: relative;
}

.screen-large::-webkit-scrollbar {
  width: 4px;
}

.screen-large::-webkit-scrollbar-track {
  background: transparent;
}

.screen-large::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 2px;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  position: sticky;
  top: 0;
  background: #F9FAFB;
  z-index: 10;
}

.time {
  font-weight: 700;
}

.status-icons {
  display: flex;
  gap: 6px;
}

.app-content {
  padding-bottom: 80px;
}

.top-bar {
  padding: 24px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.admin-bg {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
}

.teacher-bg {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
}

.guardian-bg {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
}

.top-bar-left h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.top-bar-left p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.top-bar-right {
  display: flex;
  gap: 16px;
  position: relative;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #EF4444;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 24px;
  margin-bottom: 24px;
}

.stat-box {
  padding: 20px;
  border-radius: 16px;
  text-align: center;
}

.admin-stat {
  background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%);
  border-bottom: 4px solid #8B5CF6;
}

.stat-box .stat-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.stat-box .stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #7C3AED;
  margin-bottom: 4px;
}

.stat-box .stat-name {
  font-size: 0.75rem;
  color: #6B21A8;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.chart-section {
  padding: 0 24px;
  margin-bottom: 24px;
}

.chart-section h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.full-chart {
  background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%);
  padding: 24px 16px 16px;
  border-radius: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 8px;
  height: 200px;
}

.chart-bar-full {
  flex: 1;
  background: linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%);
  border-radius: 8px 8px 0 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 8px;
}

.chart-bar-full span {
  font-size: 0.7rem;
  color: white;
  font-weight: 600;
}

.recent-activity {
  padding: 0 24px;
}

.recent-activity h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.activity-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.admin-icon {
  background: linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%);
}

.activity-text {
  flex: 1;
  text-align: left;
}

.activity-title {
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  font-size: 0.9rem;
}

.activity-time {
  font-size: 0.75rem;
  color: #6B7280;
}

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 24px;
  margin-bottom: 24px;
}

.action-card {
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.teacher-action {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  border-bottom: 4px solid #10B981;
}

.teacher-action:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
}

.action-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.action-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #065F46;
}

.class-list {
  padding: 0 24px;
  margin-bottom: 24px;
}

.class-list h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.class-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
}

.teacher-card {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #10B981;
}

.active-class {
  background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
  border-left: 4px solid #059669;
}

.class-time {
  font-size: 0.75rem;
  font-weight: 600;
  color: #059669;
  background: #D1FAE5;
  padding: 8px 12px;
  border-radius: 8px;
}

.class-info {
  flex: 1;
  text-align: left;
}

.class-name {
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  font-size: 0.9rem;
}

.class-students {
  font-size: 0.75rem;
  color: #6B7280;
}

.class-status {
  font-size: 1.2rem;
  font-weight: 700;
}

.completed {
  color: #10B981;
}

.ongoing {
  color: #F59E0B;
  animation: pulse 2s infinite;
}

.upcoming {
  color: #6B7280;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pending-tasks {
  padding: 0 24px;
}

.pending-tasks h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #374151;
}

.task-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.children-selector {
  display: flex;
  gap: 12px;
  padding: 0 24px;
  margin-bottom: 24px;
}

.child-tab {
  flex: 1;
  padding: 16px;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #E5E7EB;
}

.child-tab.active {
  background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
  border-color: #F59E0B;
}

.child-avatar {
  font-size: 2rem;
}

.child-name {
  font-weight: 700;
  font-size: 0.85rem;
  color: #111827;
}

.guardian-overview {
  padding: 0 24px;
  margin-bottom: 24px;
}

.overview-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: 16px;
}

.guardian-card-full {
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
  border-left: 4px solid #F59E0B;
}

.overview-card .card-icon {
  font-size: 3rem;
}

.card-content {
  flex: 1;
  text-align: left;
}

.card-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #92400E;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.performance-score {
  font-size: 2.5rem;
  font-weight: 700;
  color: #D97706;
  margin-bottom: 4px;
}

.performance-label {
  font-size: 0.9rem;
  color: #B45309;
  font-weight: 600;
}

.today-schedule {
  padding: 0 24px;
  margin-bottom: 24px;
}

.today-schedule h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.schedule-card {
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
}

.guardian-schedule {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #F59E0B;
}

.schedule-time {
  font-size: 0.75rem;
  font-weight: 700;
  color: #D97706;
  margin-bottom: 8px;
}

.schedule-subject {
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  font-size: 0.95rem;
}

.schedule-teacher {
  font-size: 0.75rem;
  color: #6B7280;
}

.recent-updates {
  padding: 0 24px;
}

.recent-updates h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.update-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.update-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.update-text {
  flex: 1;
  text-align: left;
}

.update-title {
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
  font-size: 0.9rem;
}

.update-time {
  font-size: 0.75rem;
  color: #6B7280;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 16px 24px;
  background: white;
  border-top: 1px solid #E5E7EB;
  border-radius: 0 0 42px 42px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #9CA3AF;
  transition: all 0.3s ease;
}

.nav-item span {
  font-size: 0.7rem;
  font-weight: 600;
}

.admin-nav .nav-item.active {
  color: #8B5CF6;
}

.teacher-nav .nav-item.active {
  color: #10B981;
}

.guardian-nav .nav-item.active {
  color: #F59E0B;
}

.app-info h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.app-description {
  font-size: 1.1rem;
  color: #6B7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-list h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.features-list ul {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 12px 0;
  font-size: 1rem;
  color: #374151;
  border-bottom: 1px solid #E5E7EB;
}

.features-list li:last-child {
  border-bottom: none;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.apple-btn {
  background: linear-gradient(135deg, #111827 0%, #1F2937 100%);
  color: white;
}

.android-btn {
  background: white;
  color: #111827;
  border: 2px solid #E5E7EB;
}

.download-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.phone-mockup {
  animation: float 6s ease-in-out infinite;
}

.phone-mockup:nth-child(2) {
  animation-delay: -2s;
}

.phone-mockup:nth-child(3) {
  animation-delay: -4s;
}
</style>