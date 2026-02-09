<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const showMore = ref(false)
const mobileMenuOpen = ref(false)

const goTo = (path) => {
  showMore.value = false
  mobileMenuOpen.value = false
  router.push(path)
}

const isActive = (path) => route.path === path

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  showMore.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      <div class="logo" @click="goTo('/')">
        <span class="logo-text">Academy</span>
        <div class="logo-dot"></div>
      </div>

      <nav class="nav-links desktop-nav">
        <a @click.prevent="goTo('/')" :class="['nav-link', isActive('/') && 'active']">Home</a>
        <a @click.prevent="goTo('/features')" :class="['nav-link', isActive('/features') && 'active']">Features</a>
        <a @click.prevent="goTo('/pricing')" :class="['nav-link', isActive('/pricing') && 'active']">Pricing</a>
        <a @click.prevent="goTo('/templates')" :class="['nav-link', isActive('/templates') && 'active']">Templates</a>
        <a @click.prevent="goTo('/plugins')" :class="['nav-link', isActive('/plugins') && 'active']">Plugins</a>
        <a @click.prevent="goTo('/about')" :class="['nav-link', isActive('/about') && 'active']">About</a>
        <a @click.prevent="goTo('/contact')" :class="['nav-link', isActive('/contact') && 'active']">Contact</a>

        <div class="more-wrapper" @mouseenter="showMore = true" @mouseleave="showMore = false">
          <button class="btn-more" @click="showMore = !showMore">
            More 
            <ChevronDown :size="16" :class="['chevron', showMore && 'rotated']" />
          </button>

          <Transition name="dropdown-fade">
            <div v-if="showMore" class="dropdown">
              <a @click.prevent="goTo('/ticket')" class="dropdown-item">
                Ticket
              </a>
              <a @click.prevent="goTo('/blog')" class="dropdown-item">
                Blog
              </a>
            </div>
          </Transition>
        </div>
      </nav>

      <div class="nav-actions">
        <button class="btn btn-primary desktop-cta">Request Demo</button>
        
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-nav">
        <nav class="mobile-nav-links">
          <a @click.prevent="goTo('/')" :class="['mobile-nav-link', isActive('/') && 'active']">Home</a>
          <a @click.prevent="goTo('/features')" :class="['mobile-nav-link', isActive('/features') && 'active']">Features</a>
          <a @click.prevent="goTo('/pricing')" :class="['mobile-nav-link', isActive('/pricing') && 'active']">Pricing</a>
          <a @click.prevent="goTo('/templates')" :class="['mobile-nav-link', isActive('/templates') && 'active']">Templates</a>
          <a @click.prevent="goTo('/plugins')" :class="['mobile-nav-link', isActive('/plugins') && 'active']">Plugins</a>
          <a @click.prevent="goTo('/about')" :class="['mobile-nav-link', isActive('/about') && 'active']">About</a>
          <a @click.prevent="goTo('/contact')" :class="['mobile-nav-link', isActive('/contact') && 'active']">Contact</a>
          
          <div class="mobile-more-section">
            <button class="mobile-more-toggle" @click="showMore = !showMore">
              More
              <ChevronDown :size="16" :class="['chevron', showMore && 'rotated']" />
            </button>
            
            <Transition name="slide-down">
              <div v-if="showMore" class="mobile-more-items">
                <a @click.prevent="goTo('/ticket')" class="mobile-nav-link submenu">Ticket</a>
                <a @click.prevent="goTo('/blog')" class="mobile-nav-link submenu">Blog</a>
              </div>
            </Transition>
          </div>

          <button class="btn btn-primary mobile-cta" @click="goTo('/demo')">Request Demo</button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--gradient-primary);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 1.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
  user-select: none;
  flex-shrink: 0;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-text {
  color: #FFFFFF;
  font-weight: 800;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  border-radius: 50%;
  animation: pulse 2s infinite;
  margin-bottom: 4px;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.desktop-nav {
  display: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  font-weight: 500;
  font-size: 0.938rem;
  color: var(--color-text-card-muted);
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  padding: 0.25rem 0;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #FFFFFF;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover {
  color: #FFFFFF;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: #FFFFFF;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
}

.more-wrapper {
  position: relative;
}

.btn-more {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.938rem;
  color: var(--color-text-card);
  padding: 0.5rem 0.875rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  background: transparent;
  border: none;
  white-space: nowrap;
}

.btn-more:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #FFFFFF;
}

.chevron {
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--color-card-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  min-width: 160px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 100;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.75rem 1.125rem;
  text-align: left;
  font-size: 0.938rem;
  font-weight: 500;
  color: var(--color-text-card);
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  border: none;
  text-decoration: none;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-accent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.btn-primary {
  padding: 0.625rem 1.5rem;
  font-weight: 600;
  font-size: 0.938rem;
  background: #FFFFFF;
  color: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.25);
  white-space: nowrap;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.9);
}

.btn-primary:active {
  transform: translateY(0);
}

.desktop-cta {
  display: none;
}

.mobile-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
  flex-shrink: 0;
}

.mobile-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-toggle:active {
  background: rgba(0, 0, 0, 0.1);
}

.mobile-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--color-card-dark);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.mobile-nav-link {
  padding: 0.875rem 1.25rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-text-card-muted);
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  text-decoration: none;
  display: block;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: white;
  background: rgba(255, 255, 255, 0.05);
  border-left-color: #FFFFFF;
}

.mobile-nav-link.active {
  font-weight: 600;
}

.mobile-nav-link.submenu {
  padding-left: 2.5rem;
  font-size: 0.938rem;
  background: rgba(0,0,0,0.2);
}

.mobile-nav-link.submenu:hover {
  background: rgba(255, 255, 255, 0.08);
}

.mobile-more-section {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
}

.mobile-more-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.mobile-more-toggle:hover {
  background: rgba(0, 0, 0, 0.03);
}

.mobile-more-items {
  background: rgba(0, 0, 0, 0.2);
}

.mobile-cta {
  margin: 1rem 1.25rem 0.5rem;
  width: calc(100% - 2.5rem);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 600px;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 200px;
}

@media (max-width: 1023px) {
  .navbar-content {
    padding: 0.875rem 0;
  }

  .logo {
    font-size: 1.5rem;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .desktop-cta {
    display: none;
  }
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-menu-toggle {
    display: none;
  }

  .desktop-cta {
    display: inline-block;
  }

  .mobile-cta {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .logo {
    font-size: 1.6rem;
  }
}

@media (max-width: 374px) {
  .logo {
    font-size: 1.25rem;
  }
  
  .logo-dot {
    width: 6px;
    height: 6px;
  }
}
</style>