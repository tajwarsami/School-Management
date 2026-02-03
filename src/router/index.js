import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Features from '../pages/Features.vue'
import Pricing from '../pages/Pricing.vue'
import Templates from '../pages/Templates.vue'
import Plugins from '../pages/Plugins.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Ticket from '../pages/Ticket.vue'
import Blog from '../pages/Blog.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/features', component: Features },
  { path: '/pricing', component: Pricing },
  { path: '/templates', component: Templates },
  { path: '/plugins', component: Plugins },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/ticket', component: Ticket },
  { path: '/blog', component: Blog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
