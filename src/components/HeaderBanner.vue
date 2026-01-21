<template>
  <section v-if="banner" class="header-banner">
    <img :src="banner.image" alt="Header Banner" />
    <div class="header-text">
      <h1>{{ banner.title }}</h1>
      <p v-if="banner.subtitle">{{ banner.subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { contents } from '@/data/contents'

const route = useRoute()

const resolveBanner = (fileName, title, subtitle = '') => ({
  image: new URL(`../assets/images/${fileName}`, import.meta.url).href,
  title,
  subtitle
})

const banner = computed(() => {
  const slug = route.params.slug
  if (slug && contents[slug]) {
    return resolveBanner('pages-banner.jpg', contents[slug].title)
  }

  return route.meta.banner || null
})
</script>

<style scoped>
.header-banner {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.header-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

.header-text h1 {
  font-size: 36px;
  margin: 0;
  font-weight: 600;
}

.header-text p {
  font-size: 18px;
  margin: 5px 0 0 0;
  line-height: 1.4;
}
</style>
