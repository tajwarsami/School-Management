<script setup>
import { ChevronDown } from 'lucide-vue-next';
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      <div class="logo">
        <span class="logo-text">Edufy</span>
        <div class="logo-dot"></div>
      </div>

      <nav class="nav-links">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Features</a>
        <a href="#" class="nav-link">Package & Pricing</a>
        <a href="#" class="nav-link">Templates</a>
        <a href="#" class="nav-link">Plugins</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>

      <div class="nav-actions">
        <button class="btn-more">
          More <ChevronDown :size="16" />
        </button>
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
  background-color: rgba(255, 255, 255, 0.95);
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
  letter-spacing: -0.5px;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-more {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--color-text-main);
  padding: 0.5rem 0.75rem;
  transition: opacity 0.2s;
}

.btn-more:hover {
  opacity: 0.7;
}
</style>
