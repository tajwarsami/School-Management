import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Downloads from '../views/Downloads.vue'
import Contact from '../views/Contact.vue'
import NoticesPage from '../views/NoticesPage.vue'
import AboutDetails from '../views/AboutDetails.vue'
import ContentPage from '../views/ContentPage.vue'
import { contents } from '@/data/contents'
import NewsPage from '../views/NewsPage.vue'

const resolveBanner = (fileName, title, subtitle = '') => ({
  image: new URL(`../assets/images/${fileName}`, import.meta.url).href,
  title,
  subtitle
})

const routes = [
  {
    path: '/',
    component: Home,
    meta: { banner: null }
  },
  {
    path: '/downloads',
    component: Downloads,
    meta: { banner: resolveBanner('pages-banner.jpg', 'Downloads') }
  },
  {
    path: '/contact',
    component: Contact,
    meta: { banner: resolveBanner('pages-banner.jpg', 'Contact Us', 'We would love to hear from you') }
  },
  {
    path: '/notices/:type',
    component: NoticesPage,
    props: true,
    meta: { banner: resolveBanner('pages-banner.jpg', 'Notices') }
  },
  {
    path: '/news',
    component: NewsPage,
    meta: { banner: resolveBanner('pages-banner.jpg', 'News & Events') }
  },
  {
    path: '/about-details',
    component: AboutDetails,
    meta: { banner: resolveBanner('pages-banner.jpg', 'About Cantonment English School & College', 'Our history, mission, and achievements') }
  },
  {
    path: '/content/:slug',
    component: ContentPage,
    props: true,
    meta: route => {
      const slug = route.params.slug
      const title = contents[slug]?.title || 'Page'
      return { banner: resolveBanner('pages-banner.jpg', title) }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
