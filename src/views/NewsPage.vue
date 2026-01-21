<template>
  <section class="media-section">
    <h2 class="section-title">All News & Events</h2>
    <ul class="news-list">
      <li v-for="(item, index) in news" :key="index" class="news-item">
        <span class="news-title">{{ item.title }}</span>
        <span class="news-date">{{ item.date }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
const news = [
  { title: "Farewell Ceremony", date: "Mar 15, 2026" },
  { title: "Music Competition", date: "Apr 10, 2026" },
  { title: "Sports Day", date: "May 5, 2026" },
  { title: "Science Fair", date: "Jun 12, 2026" },
  { title: "Art Exhibition", date: "Jul 20, 2026" },
];
</script>

<style scoped>
.media-section { max-width: 1200px; margin: auto; padding: 40px 20px; font-family: Arial, sans-serif; }
.section-title { font-size: 28px; font-weight: 700; color: #007bff; margin-bottom: 25px; text-align: center; }
.news-list { list-style: none; padding: 0; margin: 0; }
.news-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; margin-bottom: 12px; border-left: 4px solid #007bff; background: #f7f9fc; border-radius: 8px; transition: background 0.3s, transform 0.3s; }
.news-item:hover { background: #e3f2ff; transform: translateX(3px); }
.news-title { font-weight: 600; color: #222; }
.news-date { font-size: 14px; color: #555; }
</style>
