<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronDown } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const showMore = ref(false)

const goTo = (path) => {
  showMore.value = false
  router.push(path)
}

const isActive = (path) => route.path === path
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      <div class="logo" @click="goTo('/')">
        <span class="logo-text">Edufy</span>
        <div class="logo-dot"></div>
      </div>

      <nav class="nav-links">
        <a @click.prevent="goTo('/')" :class="['nav-link', isActive('/') && 'active']">Home</a>
        <a @click.prevent="goTo('/features')" :class="['nav-link', isActive('/features') && 'active']">Features</a>
        <a @click.prevent="goTo('/pricing')" :class="['nav-link', isActive('/pricing') && 'active']">Package & Pricing</a>
        <a @click.prevent="goTo('/templates')" :class="['nav-link', isActive('/templates') && 'active']">Templates</a>
        <a @click.prevent="goTo('/plugins')" :class="['nav-link', isActive('/plugins') && 'active']">Plugins</a>
        <a @click.prevent="goTo('/about')" :class="['nav-link', isActive('/about') && 'active']">About Us</a>
        <a @click.prevent="goTo('/contact')" :class="['nav-link', isActive('/contact') && 'active']">Contact</a>

        <div class="more-wrapper" @mouseleave="showMore = false">
          <button class="btn-more" @click="showMore = !showMore">
            More <ChevronDown :size="16" />
          </button>

          <div v-if="showMore" class="dropdown">
            <button
              class="dropdown-item"
              @click="goTo('/ticket')"
            >
              Ticket
            </button>
            <button
              class="dropdown-item"
              @click="goTo('/blog')"
            >
              Blog
            </button>
          </div>
        </div>
      </nav>

      <div class="nav-actions">
        <button class="btn btn-primary">Request Demo</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  cursor: pointer;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
}


.more-wrapper {
  position: relative;
}

.btn-more {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--color-text-main);
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 130%;
  right: 0;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  min-width: 150px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.dropdown-item {
  width: 100%;
  padding: 0.65rem 1rem;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #f5f7fa;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
