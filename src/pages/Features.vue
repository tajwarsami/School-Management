<template>
  <div class="container">
    <section class="demo-section">
      <div class="demo-content">
        <div class="demo-text">
          <h1 class="demo-title">Experience the Future of Management</h1>
          <p class="demo-description">
            Schedule a personalized demo with our team and discover how our platform can transform your organization's workflow, boost productivity, and streamline operations.
          </p>
          <button class="demo-btn">
            <span>Request Demo</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="demo-visual">
          <div class="floating-card card-1">
            <div class="card-icon">📊</div>
            <div class="card-text">Analytics</div>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🚀</div>
            <div class="card-text">Performance</div>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">✨</div>
            <div class="card-text">Innovation</div>
          </div>
        </div>
      </div>
    </section>

    <section class="modules-section">
      <h2 class="section-title">Comprehensive Platform Modules</h2>
      <p class="section-subtitle">Everything you need to manage your organization efficiently</p>

      <div class="accordion-container">
        <div
          v-for="(module, index) in modules"
          :key="module.name"
          class="accordion-item"
          :class="{ active: activeModule === module.name }"
          :style="{ '--gradient': module.color }"
        >
          <div 
            class="accordion-header"
            @click="toggleModule(module.name)"
          >
            <div class="header-left">
              <div class="module-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="module-icon-wrapper">
                <span class="module-icon">{{ module.icon }}</span>
              </div>
              <div class="module-info">
                <h3 class="module-name">{{ module.name }}</h3>
                <p class="module-subtitle">{{ module.subtitle }}</p>
              </div>
            </div>
            <div class="header-right">
              <div class="toggle-icon" :class="{ rotated: activeModule === module.name }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <transition name="accordion">
            <div v-if="activeModule === module.name" class="accordion-content">
              <div class="content-description">
                <p>{{ module.description }}</p>
              </div>
              
              <div class="features-masonry">
                <div
                  v-for="(item, idx) in module.items"
                  :key="item.name"
                  class="feature-box"
                  :style="{ animationDelay: `${idx * 0.06}s` }"
                >
                  <div class="feature-icon-circle">
                    <span>{{ item.icon }}</span>
                  </div>
                  <h4 class="feature-name">{{ item.name }}</h4>
                  <p class="feature-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="why-switch-section">
      <h2 class="section-title">Why Organizations Are Switching</h2>
      <p class="section-subtitle">Join thousands of companies that have transformed their operations</p>
      
      <div class="benefits-grid">
        <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <div class="benefit-icon" :style="{ background: benefit.color }">
            {{ benefit.icon }}
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-description">{{ benefit.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeModule = ref('Main Modules')

const benefits = [
  {
    icon: '⚡',
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast performance with our optimized platform that saves you hours every week.',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: '🔒',
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and compliance with industry standards to keep your data safe and secure.',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: '📈',
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with powerful analytics and real-time reporting dashboards.',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    icon: '🤝',
    title: 'Seamless Collaboration',
    description: 'Connect your team with integrated communication tools and shared workspaces.',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    icon: '🎯',
    title: 'Easy Integration',
    description: 'Connect with your existing tools and workflows without disrupting your operations.',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    icon: '💰',
    title: 'Cost Effective Solution',
    description: 'Reduce operational costs by up to 40% while increasing productivity and efficiency.',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  }
]

const modules = [
  {
    name: 'Main Modules',
    subtitle: 'Core platform overview',
    description: 'Explore our comprehensive suite of modules designed to streamline every aspect of your organization.',
    icon: '🏠',
    color: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
    items: [
      {
        icon: '⚙️',
        name: 'Administrative Module',
        description: 'Complete administrative control with user management, roles, permissions, and system settings.'
      },
      {
        icon: '💬',
        name: 'Communication Management',
        description: 'Stay connected with email notifications, messaging, announcements, and real-time collaboration tools.'
      },
      {
        icon: '📊',
        name: 'Information Management',
        description: 'Organize and access your data with advanced records, reports, search, and analytics capabilities.'
      },
      {
        icon: '🔌',
        name: 'Integrations / Addons',
        description: 'Extend your platform with API integrations, third-party tools, and custom plugins.'
      }
    ]
  },
  {
    name: 'Administrative Module',
    subtitle: 'Complete system control',
    description: 'Comprehensive administrative tools to manage your entire organization with precision and ease.',
    icon: '⚙️',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    items: [
      {
        icon: '👥',
        name: 'User Management',
        description: 'Create, edit, and manage user accounts with advanced permission controls.'
      },
      {
        icon: '🔐',
        name: 'Roles & Permissions',
        description: 'Define custom roles and set granular permissions for secure access.'
      },
      {
        icon: '🛠️',
        name: 'System Settings',
        description: 'Configure platform preferences and optimize system performance.'
      },
      {
        icon: '📋',
        name: 'Activity Logs',
        description: 'Track all system activities with detailed audit trails and logs.'
      },
      {
        icon: '🏢',
        name: 'Organization Structure',
        description: 'Build and manage your organizational hierarchy and departments.'
      },
      {
        icon: '🔄',
        name: 'Backup & Restore',
        description: 'Automated backups with quick restore capabilities for data safety.'
      },
      {
        icon: '📊',
        name: 'Admin Dashboard',
        description: 'Real-time overview of system health and organizational metrics.'
      },
      {
        icon: '🎨',
        name: 'Branding & Customization',
        description: 'Customize the platform appearance to match your brand identity.'
      }
    ]
  },
  {
    name: 'Communication Management',
    subtitle: 'Stay connected always',
    description: 'Powerful communication tools to keep your entire team connected and informed in real-time.',
    icon: '💬',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    items: [
      {
        icon: '📧',
        name: 'Email Notifications',
        description: 'Automated email alerts with customizable templates and triggers.'
      },
      {
        icon: '💭',
        name: 'Instant Messaging',
        description: 'Real-time chat system for quick team communication and collaboration.'
      },
      {
        icon: '📢',
        name: 'Announcements',
        description: 'Broadcast important updates to specific groups or entire organization.'
      },
      {
        icon: '🔔',
        name: 'Push Notifications',
        description: 'Mobile and desktop push notifications for critical updates.'
      },
      {
        icon: '📱',
        name: 'SMS Integration',
        description: 'Send SMS alerts and reminders directly from the platform.'
      },
      {
        icon: '🗓️',
        name: 'Meeting Scheduler',
        description: 'Schedule and manage meetings with calendar integration.'
      },
      {
        icon: '📝',
        name: 'Internal Forums',
        description: 'Discussion boards for team collaboration and knowledge sharing.'
      },
      {
        icon: '🎥',
        name: 'Video Conferencing',
        description: 'Built-in video call capabilities for remote team meetings.'
      },
      {
        icon: '📬',
        name: 'Message Templates',
        description: 'Create and use reusable message templates for efficiency.'
      }
    ]
  },
  {
    name: 'Information Management',
    subtitle: 'Organize your data',
    description: 'Advanced data management system to store, organize, and retrieve information effortlessly.',
    icon: '📊',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    items: [
      {
        icon: '📁',
        name: 'Data Records',
        description: 'Centralized database for all your critical information and documents.'
      },
      {
        icon: '📈',
        name: 'Reports & Analytics',
        description: 'Generate comprehensive reports with visual data representations.'
      },
      {
        icon: '🔍',
        name: 'Advanced Search',
        description: 'Powerful search engine with filters and smart suggestions.'
      },
      {
        icon: '📄',
        name: 'Document Management',
        description: 'Store, version control, and share documents securely.'
      },
      {
        icon: '🗂️',
        name: 'Category Management',
        description: 'Organize data into custom categories and taxonomies.'
      },
      {
        icon: '📊',
        name: 'Data Visualization',
        description: 'Interactive charts and graphs for better data understanding.'
      },
      {
        icon: '💾',
        name: 'Data Import/Export',
        description: 'Bulk import and export data in various formats.'
      },
      {
        icon: '🔄',
        name: 'Data Synchronization',
        description: 'Real-time sync across all devices and platforms.'
      },
      {
        icon: '🏷️',
        name: 'Tagging System',
        description: 'Flexible tagging for easy categorization and retrieval.'
      },
      {
        icon: '📋',
        name: 'Custom Fields',
        description: 'Create custom data fields to match your specific needs.'
      }
    ]
  },
  {
    name: 'Integrations / Addons',
    subtitle: 'Extend capabilities',
    description: 'Seamlessly connect with your favorite tools and extend functionality with powerful integrations.',
    icon: '🔌',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    items: [
      {
        icon: '🔗',
        name: 'API Integration',
        description: 'Robust REST API for custom integrations and automations.'
      },
      {
        icon: '🧩',
        name: 'Third-Party Tools',
        description: 'Pre-built connectors for popular business applications.'
      },
      {
        icon: '🎨',
        name: 'Custom Plugins',
        description: 'Develop and install custom plugins for specific requirements.'
      },
      {
        icon: '☁️',
        name: 'Cloud Storage',
        description: 'Integration with Google Drive, Dropbox, OneDrive, and more.'
      },
      {
        icon: '📧',
        name: 'Email Services',
        description: 'Connect with Gmail, Outlook, and other email providers.'
      },
      {
        icon: '💳',
        name: 'Payment Gateways',
        description: 'Integrate payment processors like Stripe, PayPal, and others.'
      },
      {
        icon: '📊',
        name: 'Analytics Tools',
        description: 'Connect Google Analytics, Mixpanel, and tracking tools.'
      },
      {
        icon: '🤖',
        name: 'Automation Workflows',
        description: 'Zapier and Make.com integration for workflow automation.'
      }
    ]
  }
]

function toggleModule(name) {
  activeModule.value = activeModule.value === name ? null : name
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.demo-section {
  background: linear-gradient(135deg, #6A1B9A 0%, #E91E63 100%);
  border-radius: 24px;
  padding: 60px;
  margin-bottom: 80px;
  color: white;
  box-shadow: 0 20px 60px rgba(106, 27, 154, 0.3);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.demo-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.demo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.demo-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.demo-description {
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 30px;
}

.demo-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: white;
  color: #6A1B9A;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.demo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(0,0,0,0.15);
}

.demo-visual {
  position: relative;
  height: 300px;
}

.floating-card {
  position: absolute;
  background: rgba(42, 10, 59, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 20px;
  left: 40px;
  animation-delay: 0s;
}

.card-2 {
  top: 100px;
  right: 60px;
  animation-delay: 0.5s;
}

.card-3 {
  bottom: 40px;
  left: 100px;
  animation-delay: 1s;
}

.card-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.card-text {
  font-size: 14px;
  font-weight: 600;
  opacity: 0.9;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.modules-section {
  margin-bottom: 100px;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 12px 0;
  color: #1a202c;
}

.section-subtitle {
  font-size: 18px;
  text-align: center;
  color: #718096;
  margin: 0 0 50px 0;
}

.accordion-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.accordion-item {
  background: var(--color-card-dark);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.accordion-item:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.accordion-item.active {
  border-color: #E91E63;
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}

.accordion-item.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient);
  z-index: 10;
}

.accordion-item {
  position: relative;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 36px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.accordion-header:hover {
  background: rgba(255, 255, 255, 0.05);
}

.accordion-item.active .accordion-header {
  background: rgba(255, 255, 255, 0.05);
  padding-bottom: 24px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
}

.module-number {
  font-size: 32px;
  font-weight: 800;
  color: #e2e8f0;
  min-width: 50px;
  font-family: 'Georgia', serif;
}

.module-icon-wrapper {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.accordion-item.active .module-icon-wrapper {
  background: var(--gradient);
}

.module-icon {
  font-size: 36px;
}

.module-info {
  flex: 1;
}

.module-name {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: var(--color-text-card);
}

.module-subtitle {
  font-size: 15px;
  color: var(--color-text-card-muted);
  margin: 0;
}

.header-right {
  margin-left: 20px;
}

.toggle-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: var(--color-text-card-muted);
}

.toggle-icon.rotated {
  transform: rotate(180deg);
  background: var(--gradient);
  color: white;
}

.accordion-content {
  padding: 0 36px 36px 36px;
}

.content-description {
  padding: 0 0 32px 146px;
}

.content-description p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-card-muted);
  margin: 0;
}

.features-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.feature-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  animation: popIn 0.4s ease forwards;
  opacity: 0;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.feature-box:hover {
  border-color: #E91E63;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
}

.feature-icon-circle {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
}

.feature-name {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--color-text-card);
}

.feature-text {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-card-muted);
  margin: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 2000px;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.why-switch-section {
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: var(--color-card-dark);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  border-color: #E91E63;
}

.benefit-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.benefit-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #1a202c;
}

.benefit-description {
  font-size: 15px;
  line-height: 1.6;
  color: #718096;
  margin: 0;
}

@media (max-width: 968px) {
  .demo-content {
    grid-template-columns: 1fr;
  }
  
  .demo-visual {
    display: none;
  }
  
  .demo-title {
    font-size: 36px;
  }
  
  .accordion-header {
    padding: 24px 20px;
  }
  
  .accordion-content {
    padding: 0 20px 24px 20px;
  }
  
  .content-description {
    padding: 0 0 24px 0;
  }
  
  .header-left {
    gap: 16px;
  }
  
  .module-number {
    font-size: 24px;
    min-width: 40px;
  }
  
  .module-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .module-icon {
    font-size: 28px;
  }
  
  .module-name {
    font-size: 20px;
  }
  
  .features-masonry {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 40px 20px;
  }
  
  .demo-section {
    padding: 40px 30px;
  }
  
  .demo-title {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .module-number {
    display: none;
  }
}
</style>