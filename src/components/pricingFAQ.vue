<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqs = ref([
  {
    id: 1,
    question: 'How does the pricing work?',
    answer: 'Our pricing is based on the number of active students or users at your institution. Each plan includes a specific number of users, and you can upgrade or add more users as your institution grows. All plans are billed annually with flexible payment options available.',
    isOpen: false
  },
  {
    id: 2,
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When you upgrade, you\'ll get immediate access to new features and we\'ll prorate the cost difference. If you downgrade, the changes will take effect at your next billing cycle.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required. You\'ll have full access to all features during the trial period so you can explore everything before making a commitment.',
    isOpen: false
  },
  {
    id: 4,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and purchase orders for annual plans. For Enterprise customers, we can also arrange custom payment terms and invoicing.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Are there any setup fees or hidden costs?',
    answer: 'No hidden fees! The price you see is what you pay. Setup and onboarding are included in all plans at no extra cost. We also provide free training materials and customer support to help you get started.',
    isOpen: false
  },
  {
    id: 6,
    question: 'What happens if I exceed my user limit?',
    answer: 'If you approach your user limit, we\'ll notify you in advance. You can either upgrade to a higher plan or purchase additional user seats. We\'ll work with you to find the most cost-effective solution for your needs.',
    isOpen: false
  },
  {
    id: 7,
    question: 'Do you offer discounts for non-profits or educational institutions?',
    answer: 'Yes! We offer special discounts for non-profit organizations and educational institutions. Contact our sales team to learn more about our education and non-profit pricing programs.',
    isOpen: false
  },
  {
    id: 8,
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. For monthly plans, cancellation takes effect at the end of your current billing cycle. For annual plans, you\'ll retain access until the end of your paid period. We also offer a 30-day money-back guarantee.',
    isOpen: false
  },
  {
    id: 9,
    question: 'What\'s included in customer support?',
    answer: 'All plans include email support with 24-hour response time. Standard and Premium plans get priority support with faster response times. Premium and Enterprise plans also include dedicated account management and phone support.',
    isOpen: false
  },
  {
    id: 10,
    question: 'How does the Enterprise plan work?',
    answer: 'The Enterprise plan is fully customizable to meet your specific needs. It includes everything in Premium plus custom integrations, dedicated support, SLA guarantees, and volume discounts. Contact our sales team for a personalized quote and demo.',
    isOpen: false
  }
])

const toggleFAQ = (id) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Everything you need to know about our pricing</p>
      </div>

      <div class="faq-container">
        <div 
          v-for="faq in faqs" 
          :key="faq.id" 
          class="faq-item"
          :class="{ 'is-open': faq.isOpen }"
        >
          <button 
            class="faq-question"
            @click="toggleFAQ(faq.id)"
            :aria-expanded="faq.isOpen"
          >
            <span class="question-text">{{ faq.question }}</span>
            <ChevronDown 
              class="chevron-icon" 
              :class="{ 'rotated': faq.isOpen }"
              :size="20" 
            />
          </button>
          
          <transition name="slide-fade">
            <div v-if="faq.isOpen" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>

      <div class="faq-footer">
        <p class="footer-text">Still have questions?</p>
        <a href="#contact" class="contact-link">Contact our sales team</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 6rem 1.5rem;
  background-color: var(--color-bg-body);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.section-subtitle {
  font-size: 1rem;
  color: #64748b;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--color-card-dark);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 255, 255, 0.15);
}

.faq-item.is-open {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-card);
  padding-right: 1rem;
}

.chevron-icon {
  flex-shrink: 0;
  color: var(--color-primary);
  transition: transform 0.3s ease;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
}

.faq-answer p {
  color: var(--color-text-card-muted);
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.faq-footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  font-size: 1rem;
  color: var(--color-text-card-muted);
  margin-bottom: 0.75rem;
}

.contact-link {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .faq-section {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .faq-question {
    padding: 1.25rem;
  }

  .question-text {
    font-size: 1rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.25rem;
  }

  .faq-answer p {
    font-size: 0.9rem;
  }

  .faq-footer {
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .faq-section {
    padding: 3rem 0.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .faq-question {
    padding: 1rem;
  }

  .question-text {
    font-size: 0.95rem;
  }

  .chevron-icon {
    width: 18px;
    height: 18px;
  }

  .faq-answer {
    padding: 0 1rem 1rem;
  }

  .contact-link {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }
}
</style>