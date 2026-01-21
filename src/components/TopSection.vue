<template>
  <section class="top-section">
    <div class="left">
      <ImageSlider />
    </div>
    <div class="right">
      <NoticeBoard />
    </div>
  </section>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue'
import NoticeBoard from './NoticeBoard.vue'
</script>

<style scoped>
.top-section {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch; 
  width: 100%;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
}

.left {
  flex: 0 0 75%;
  min-width: 300px;
}

.right {
  flex: 0 0 25%;
  min-width: 280px;
  border-left: 1px solid #ddd;
  overflow-y: auto;    
}


@media (max-width: 768px) {
  .top-section {
    flex-direction: column; 
    gap: 15px;
  }

  .left,
  .right {
    width: 100%;
    border-left: none;
    border-top: 1px solid #ddd;
  }

  .right {
    margin-top: 10px;
  }
}
</style>
