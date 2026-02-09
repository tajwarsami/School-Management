<template>
  <section class="blog-detail" v-if="blog">
    <img :src="blog.image" alt="" />

    <h1>{{ blog.title }}</h1>

    <div class="content" v-html="blog.content"></div>
  </section>
</template>

<script>
import { blogs } from "../data/blogs";

export default {
  name: "BlogDetail",
  computed: {
    blog() {
      return blogs.find(
        b => b.slug === this.$route.params.slug
      );
    },
  },
};
</script>

<style scoped>
.blog-detail {
  padding: 80px 5%;
  max-width: 900px;
  margin: auto;
}

.blog-detail img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 40px;
}

.blog-detail h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.content p {
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 16px;
}
</style>
