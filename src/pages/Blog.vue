<template>
  <section class="blog-page">
    <div class="blog-header">
      <h1>Our Blog</h1>
      <p>Insights, updates, and stories from our team</p>
    </div>

    <div class="blog-grid">
      <div
        class="blog-card"
        v-for="blog in visibleBlogs"
        :key="blog.id"
      >
        <img :src="blog.image" alt="Blog image" />

        <div class="blog-content">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.excerpt }}</p>

          <RouterLink
            :to="`/blog/${blog.slug}`"
            class="read-more"
          >
            Read More →
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="see-more-wrapper" v-if="showSeeMore">
      <button class="see-more-btn" @click="loadMore">
        See More Blogs
      </button>
    </div>
  </section>
</template>

<script>
import { blogs } from "../data/blogs";

export default {
  name: "Blog",
  data() {
    return {
      blogs,
      visibleCount: 3,
    };
  },
  computed: {
    visibleBlogs() {
      return this.blogs.slice(0, this.visibleCount);
    },
    showSeeMore() {
      return this.visibleCount < this.blogs.length;
    },
  },
  methods: {
    loadMore() {
      this.visibleCount += 3;
    },
  },
};
</script>

<style scoped>
.blog-page {
  padding: 80px 5%;
  background: #f9fafb;
  font-family: "Inter", system-ui, sans-serif;
}

.blog-header {
  text-align: center;
  margin-bottom: 60px;
}

.blog-header h1 {
  font-size: 2.8rem;
  color: #1f2933;
}

.blog-header p {
  color: #6b7280;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 24px;
}

.read-more {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
}

.read-more:hover {
  transform: translateX(4px);
}

.see-more-wrapper {
  text-align: center;
  margin-top: 60px;
}

.see-more-btn {
  padding: 14px 36px;
  border-radius: 999px;
  background: #2563eb;
  color: #fff;
  border: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
