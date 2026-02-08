<script setup>
import { ref } from 'vue';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-vue-next';

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Principal",
    institution: "Oxford International School",
    quote: "Edufy has completely transformed how we manage our administrative tasks. The parent communication features are a game-changer.",
    avatarColor: "#FF6B6B"
  },
  {
    name: "Mr. Rafiqul Islam",
    role: "Administrator",
    institution: "Dhaka City College",
    quote: "The best school management software we've used in 10 years. The support team is incredibly responsive and helpful.",
    avatarColor: "#4ECDC4"
  },
  {
    name: "Ms. Jennifer Wu",
    role: "Director",
    institution: "Creative Minds Kindergarten",
    quote: "Simple, intuitive, and powerful. Our teachers love using the mobile app to mark attendance and upload photos.",
    avatarColor: "#FFE66D"
  }
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1;
};
</script>

<template>
  <section class="testimonial-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="nav-buttons">
          <button @click="prev" class="nav-btn"><ArrowLeft :size="20" /></button>
          <button @click="next" class="nav-btn"><ArrowRight :size="20" /></button>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="quote-icon">
          <Quote :size="48" fill="currentColor" />
        </div>
        
        <p class="quote-text">"{{ testimonials[currentIndex].quote }}"</p>
        
        <div class="author-info">
          <div class="avatar" :style="{ backgroundColor: testimonials[currentIndex].avatarColor }">
            {{ testimonials[currentIndex].name.charAt(0) }}
          </div>
          <div class="details">
            <h4 class="author-name">{{ testimonials[currentIndex].name }}</h4>
            <p class="author-role">
              {{ testimonials[currentIndex].role }}, 
              <span class="institution">{{ testimonials[currentIndex].institution }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  padding: 6rem 0;
  background-color: var(--color-bg-light);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background: var(--color-card-dark);
  color: var(--color-text-card);
  border-color: rgba(255, 255, 255, 0.1);
}

.nav-btn:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.testimonial-card {
  background-color: var(--color-card-dark);
  padding: 4rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }
}

.quote-icon {
  color: var(--color-primary);
  opacity: 0.1;
  margin-bottom: 1.5rem;
}

.quote-text {
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
  color: var(--color-text-card);
  margin-bottom: 3rem;
  max-width: 900px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.author-role {
  font-size: 0.95rem;
  color: var(--color-text-card-muted);
}

.institution {
  color: var(--color-accent);
  font-weight: 500;
}
</style>
