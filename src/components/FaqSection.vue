<script setup>
import { ref } from 'vue';
import { Plus, Minus } from 'lucide-vue-next';

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Standard and Premium plans. No credit card required to start."
  },
  {
    question: "Can I migrate student data from excel?",
    answer: "Absolutely. Academy comes with a powerful import tool that lets you bulk upload students, teachers, and staff from Excel or CSV files."
  },
  {
    question: "Is my data secure?",
    answer: "Data security is our top priority. We use bank-grade encryption (256-bit SSL) and host your data on secure AWS servers with daily backups."
  },
  {
    question: "What hardware do I need?",
    answer: "Academy is cloud-based, so you don't need any special hardware. It works on any computer, tablet, or smartphone with an internet connection."
  },
  {
    question: "Do you provide training?",
    answer: "Yes, we provide comprehensive training sessions for your admin staff and teachers. We also have a library of video tutorials."
  }
];

const openIndex = ref(0);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </div>

      <div class="faq-list">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-item"
          :class="{ open: openIndex === index }"
        >
          <button class="faq-question" @click="toggle(index)">
            {{ faq.question }}
            <span class="icon-wrap">
              <Minus v-if="openIndex === index" :size="20" />
              <Plus v-else :size="20" />
            </span>
          </button>
          <div class="faq-answer" v-show="openIndex === index">
            <div class="answer-content">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 6rem 0;
  background-color: var(--color-white);
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.open {
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 82, 155, 0.2);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: var(--color-card-dark);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-card);
  text-align: left;
}

.faq-question:hover {
  color: var(--color-primary);
}

.icon-wrap {
  color: var(--color-text-card-muted);
  display: flex;
  align-items: center;
}

.faq-item.open .icon-wrap {
  color: var(--color-accent);
}

.faq-answer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: var(--color-card-dark);
  animation: slideDown 0.3s ease-out;
}

.answer-content {
  padding: 1.5rem;
  color: var(--color-text-card-muted);
  line-height: 1.6;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
