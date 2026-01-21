<template>
  <div class="notice-board">
    <h3 class="board-title">Notice Board</h3>

    <div class="notice-filters">
      <button
        v-for="type in types"
        :key="type"
        :class="['filter-btn', { active: selectedType === type }]"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
    </div>

    <ul>
      <li v-for="n in visibleNotices" :key="n.id" class="notice-item">
        <span class="notice-title">{{ n.title }}</span>
        <small class="notice-date">{{ formatDate(n.date) }}</small>
      </li>
    </ul>

    <router-link
      v-if="filteredNotices.length > limit"
      :to="`/notices/${selectedType}`"
      class="see-more"
    >
      See more →
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { notices } from '@/data/notices'

const limit = 2
const types = ['general', 'academics', 'admission']
const selectedType = ref('general')

const filteredNotices = computed(() =>
  notices.filter(n => n.type === selectedType.value)
)

const visibleNotices = computed(() =>
  [...filteredNotices.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
)

const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
</script>

<style scoped>
.notice-board {
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
}

.board-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #007bff;
  text-align: center;
}

.notice-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 12px;
  border: 1px solid #007bff;
  background: #fff;
  color: #007bff;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  background: #007bff;
  color: #fff;
}

.notice-item {
  background: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid #007bff;
}

.notice-title {
  font-weight: 600;
}

.notice-date {
  font-size: 13px;
  color: #555;
}

.see-more {
  display: inline-block;
  margin-top: 12px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 768px) {
  .board-title {
    font-size: 20px;
  }
  .notice-item {
    padding: 10px 12px;
  }
  .notice-date {
    font-size: 12px;
  }
}
</style>
