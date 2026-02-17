import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Features from '../pages/Features.vue'
import Pricing from '../pages/Pricing.vue'
import Templates from '../pages/Templates.vue'
import Services from '../pages/Services.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Blog from '../pages/Blog.vue'
import Checkout from '../pages/Checkout.vue'
import DemoRequest from '../pages/DemoRequest.vue'
import BlogDetail from '../pages/BlogDetail.vue'
import OurTeam from '../pages/OurTeam.vue'
import Clients from '../pages/Clients.vue'


const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/features',
    component: Features,
    meta: { title: 'Key Features of School Management' }
  },
  {
    path: '/pricing',
    component: Pricing,
    meta: { title: 'Academy Pricing : Choose your desired plan' }
  },
  {
    path: '/templates',
    component: Templates,
    meta: { title: 'Academy templates' }
  },
  {
    path: '/services',
    component: Services,
    meta: { title: 'Our Services' }
  },
  {
    path: '/about',
    component: About,
    meta: { title: 'About Academy – Smarter Education' }
  },
  {
    path: '/contact',
    component: Contact,
    meta: { title: 'Contact Us' }
  },
  {
    path: '/ourteam',
    component: OurTeam,
    meta: { title: 'Academy : Meet Our Team' }
  },
  {
    path: '/blog',
    component: Blog,
    meta: { title: 'Academy ; Check our blog' }
  },
  {
    path: '/checkout',
    component: Checkout,
    meta: { title: 'Checkout' }
  },
  {
    path: '/request-demo',
    component: DemoRequest,
    meta: { title: 'Request a Demo' }
  },
  {
    path: '/clients',
    component: Clients,
    meta: { title: 'Our Clients' }
  },
  {
    path: '/blog/:slug',
    component: BlogDetail,
    meta: { title: 'Blog' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Academy - School Management System'
  document.title = to.meta.title
    ? `${to.meta.title}`
    : defaultTitle
  next()
})

export default router