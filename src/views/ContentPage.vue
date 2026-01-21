<template>
  <div class="content-page" v-if="content">
    <h1>{{ content.title }}</h1>
    <div class="content-body" v-html="content.body"></div>
  </div>

  <div v-else class="content-page">
    <h1>Content Not Found</h1>
    <p>Please contact administration.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { contents } from '@/data/contents'

const route = useRoute()
const content = computed(() => contents[route.params.slug])
</script>

<style scoped>
.content-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.content-page h1 {
  color: #0a728a;
  margin-bottom: 20px;
}

.content-body p,
.content-body li {
  font-size: 16px;
  line-height: 1.8;
}
</style>
