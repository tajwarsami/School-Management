<template>
  <section class="institution-about-section">
    <div class="institution-about-container">
      <div class="institution-image">
        <img src="@/assets/images/school1.jpg" alt="Institution" />
      </div>

      <div class="about-details">
        <p>
          It is language through which one can transmit knowledge, thoughts and views to others. Language is the best medium of communication. To connect oneself with the world one has to know English. To keep pace with the international community, a nation should give great emphasis on learning English. With this view, this institution (previously known as Cantonment International School) started its journey in 1998. In 2005, it emerged as Cantonment English School (CES). Since then, it has upgraded to HSC level in 2010 and renamed as Cantonment English School & College (CESC). The institution is affiliated with Education Board, Chittagong. Students have excelled in board exams, and the school provides a congenial learning environment to nurture talents in curricular and co-curricular activities.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutDetails",
};
</script>

<style scoped>
.institution-about-section {
  padding: 40px 20px;
  background-color: #f5f5f5;
}

.institution-about-container {
  display: flex;          
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.institution-image {
  flex: 0 0 40%;          
  height: auto;
  border-radius: 10px;
  overflow: hidden;
}

.institution-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-details {
  flex: 0 0 60%;           
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  color: #080202;
}

.about-details p {
  line-height: 1.8;
  font-size: 18px;
}

@media (max-width: 768px) {
  .institution-about-container {
    flex-direction: column;  
  }

  .institution-image,
  .about-details {
    flex: 100%;
    max-width: 100%;
  }

  .institution-image img {
    height: 200px;
  }
}
</style>
