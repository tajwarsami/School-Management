<template>
  <header>
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="left">
        Please follow contact page |
        <a href="mailto:cescctg05@gmail.com">E-mail: cescctg05@gmail.com</a>
      </div>
      <div class="right">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header">
      <div class="logo-area">
        <img :src="logo" />
        <h2>Cantonment English School & College</h2>
      </div>

      <!-- Hamburger for Mobile -->
      <div class="hamburger" @click="toggleMobileMenu">
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
        <span :class="{ open: mobileMenuOpen }"></span>
      </div>

      <!-- Menu -->
      <nav class="menu" :class="{ 'mobile-open': mobileMenuOpen }">
        <router-link to="/" :class="{ active: isActive('/') }">Home</router-link>

        <div
          v-for="menu in menus"
          :key="menu.name"
          class="dropdown"
          @mouseenter="isDesktop && openDropdown(menu.name)"
          @mouseleave="isDesktop && closeDropdown(menu.name)"
        >
          <span
            class="dropbtn"
            :class="{ active: isMenuRouteActive(menu.name) }"
            @click="!isDesktop && toggleMobileDropdown(menu.name)"
          >
            {{ menu.name }}
            <span class="arrow">{{ openMenus[menu.name] ? '▲' : '▼' }}</span>
          </span>

          <ul v-show="openMenus[menu.name]" class="dropdown-content">
            <li v-for="item in menu.items" :key="item.link">
              <router-link :to="item.link" :class="{ active: isActive(item.link) }">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <router-link to="/downloads" :class="{ active: isActive('/downloads') }">Downloads</router-link>
        <router-link to="/payment" :class="{ active: isActive('/payment') }">Payment Procedure</router-link>
        <router-link to="/contact" :class="{ active: isActive('/contact') }">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/logo.png'

const route = useRoute()

const menus = [
  { name: 'Management', items: [
      { name: 'Chief Patron Message', link: '/content/chief-patron-message' },
      { name: 'Chairman Message', link: '/content/chairman-message' },
      { name: 'Principal Message', link: '/content/principal-message' },
      { name: 'Managing Committee', link: '/content/managing-committee' },
      { name: 'Sub Committee', link: '/content/sub-committee' },
      { name: 'Mission & Vision', link: '/content/mission-vision' }
    ]
  },
  { name: 'Academic', items: [
      { name: 'Syllabus', link: '/content/syllabus' },
      { name: 'Dress Code', link: '/content/dress-code' }
    ]
  },
  { name: 'Admission', items: [
      { name: 'Tuition Fee', link: '/content/tuition-fee' },
      { name: 'How to Apply', link: '/content/how-to-apply' },
      { name: 'Apply Online', link: '/content/apply-online' }
    ]
  },
  { name: 'Careers', items: [
      { name: 'Job Vacancies', link: '/content/job-vacancies' },
      { name: 'Submit Resume', link: '/content/submit-resume' }
    ]
  }
]

const openMenus = reactive(Object.fromEntries(menus.map(m => [m.name, false])))

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value

const openDropdown = (name) => openMenus[name] = true
const closeDropdown = (name) => openMenus[name] = false
const toggleMobileDropdown = (name) => openMenus[name] = !openMenus[name]

const isActive = (link) => route.path === link
const isMenuRouteActive = (menuName) => {
  const menu = menus.find(m => m.name === menuName)
  if (!menu) return false
  return menu.items.some(item => item.link === route.path)
}

const windowWidth = ref(window.innerWidth)
const updateWidth = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))
const isDesktop = computed(() => windowWidth.value > 768)
</script>

<style scoped>
/* Top Bar */
.top-bar {
  background: #003f4f;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 4px 20px;
  font-size: 13px;
  z-index: 1000;
  position: relative;
}
.top-bar a {
  color: white;
  text-decoration: none;
  margin-left: 6px;
}

/* Main Header */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 1001; /* higher than banner */
  overflow: visible; /* ensure dropdown visible */
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-area img {
  width: 50px;
}
.logo-area h2 {
  font-size: 16px;
  margin: 0;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Menu */
.menu {
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  z-index: 1002; /* ensure above banner */
}

.dropdown {
  position: relative;
}
.dropbtn {
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 4px;
  transition: all 0.3s;
}
.dropbtn.active {
  color: white;
  background-color: #0a728a;
}
.dropbtn .arrow {
  margin-left: 2px;
}

.dropdown-content {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  min-width: 160px;
  border: 1px solid #ddd;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  z-index: 1002;
}
.dropdown-content[style*="display: none"] {
  display: none !important;
}
.dropdown-content li {
  padding: 8px 12px;
}
.dropdown-content li:hover {
  background-color: #f2f2f2;
}
.dropdown-content li a {
  text-decoration: none;
  color: #333;
  display: block;
  transition: all 0.3s;
}
.dropdown-content li a.active {
  color: white;
  background-color: #0a728a;
}
.dropdown-content li a:hover {
  color: #0a728a;
}

.menu > * {
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  padding: 4px 6px;
  border-radius: 4px;
}
.menu > *.active {
  color: white;
  background-color: #0a728a;
}
.menu > *:hover {
  color: #0a728a;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .menu {
    display: none;
    flex-direction: column;
    background: white;
    position: absolute;
    top: 60px;
    right: 0;
    width: 220px;
    border: 1px solid #ddd;
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    z-index: 1003; /* above banner */
  }
  .menu.mobile-open {
    display: flex;
  }
  .menu > * {
    padding: 8px 16px;
    width: 100%;
  }
  .dropdown-content {
    position: relative;
    top: 0;
    border: none;
    box-shadow: none;
  }
}
</style>
