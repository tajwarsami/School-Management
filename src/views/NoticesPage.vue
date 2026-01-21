<template>
  <div class="notices-page">
    <h2 class="page-title">{{ pageTitle }} Notices</h2>

    <ul>
      <li v-for="n in sortedNotices" :key="n.id" class="notice-item">
        <span class="notice-title">{{ n.title }}</span>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>

    <router-link to="/" class="back-link">← Back to Home</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { notices } from '@/data/notices'

const route = useRoute()

const type = computed(() => route.params.type)

const filteredNotices = computed(() =>
  notices.filter(n => n.type === type.value)
)

const sortedNotices = computed(() =>
  [...filteredNotices.value].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
)

const pageTitle = computed(() =>
  type.value.charAt(0).toUpperCase() + type.value.slice(1)
)

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notices-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-title {
  text-align: center;
  color: #007bff;
  margin-bottom: 25px;
}

.notice-item {
  background: #fff;
  padding: 14px 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid #007bff;
}

.notice-title {
  font-weight: 600;
}

.notice-date {
  font-size: 13px;
  color: #666;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}
</style>
