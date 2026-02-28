<template>
  <div class="help-center">
    <section class="help-hero">
      <div class="container">
        <div class="hero-badge">Support Center</div>
        <h1>How can we <span class="gradient-text">help you?</span></h1>
        <p>Find answers to common questions or reach out to our team.</p>
        <div class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" v-model="searchQuery" placeholder="Search for articles, topics, answers..." />
          <button class="btn btn-primary search-btn">Search</button>
        </div>
      </div>
    </section>

    <section class="help-categories">
      <div class="container">
        <h2 class="section-title">Browse by Category</h2>
        <div class="categories-grid">
          <div class="category-card" v-for="cat in categories" :key="cat.id" @click="activeCategory = cat.id" :class="{ active: activeCategory === cat.id }">
            <div class="cat-icon">{{ cat.icon }}</div>
            <h3>{{ cat.title }}</h3>
            <p>{{ cat.desc }}</p>
            <span class="article-count">{{ cat.count }} articles</span>
          </div>
        </div>
      </div>
    </section>

    <section class="help-faq">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in faqs" :key="i" @click="toggleFaq(i)" :class="{ open: openFaq === i }">
            <div class="faq-question">
              <span>{{ faq.q }}</span>
              <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="faq-answer" v-show="openFaq === i">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="help-contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card" v-for="c in contactOptions" :key="c.id">
            <div class="contact-icon">{{ c.icon }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
            <button class="btn btn-outline">{{ c.action }}</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const activeCategory = ref(1)
const openFaq = ref(null)

const categories = [
  { id: 1, icon: '🎓', title: 'Getting Started', desc: 'Set up your account and explore the platform.', count: 12 },
  { id: 2, icon: '💳', title: 'Billing & Payments', desc: 'Manage subscriptions, invoices, and payments.', count: 8 },
  { id: 3, icon: '📚', title: 'Courses & Content', desc: 'Enrolling, accessing, and completing courses.', count: 15 },
  { id: 4, icon: '🏆', title: 'Certificates', desc: 'Download and verify your certificates.', count: 6 },
  { id: 5, icon: '👤', title: 'Account & Profile', desc: 'Update your info and manage preferences.', count: 9 },
  { id: 6, icon: '🔧', title: 'Technical Issues', desc: 'Troubleshoot common technical problems.', count: 11 },
]

const faqs = [
  { q: 'How do I enroll in a course?', a: 'Browse our course catalog, click on any course you\'re interested in, and click the "Enroll Now" button. If it\'s a paid course, you\'ll be prompted to complete payment before gaining access.' },
  { q: 'Can I access courses on mobile devices?', a: 'Yes! Our platform is fully responsive and works on all modern devices including smartphones and tablets. You can also download content for offline viewing on our mobile app.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual enterprise plans.' },
  { q: 'How do I get my certificate after completing a course?', a: 'Once you\'ve completed all lessons and passed any required assessments, your certificate will be automatically generated and available in your profile under the "Certificates" section.' },
  { q: 'Can I get a refund if I\'m not satisfied?', a: 'We offer a 30-day money-back guarantee on all paid courses. See our Refund Policy for full details and eligibility requirements.' },
  { q: 'Is my progress saved if I pause a course?', a: 'Absolutely. Your progress is automatically saved after every lesson. You can pick up exactly where you left off on any device.' },
]

const contactOptions = [
  { id: 1, icon: '💬', title: 'Live Chat', desc: 'Chat with our support team in real time. Available Mon–Fri, 9am–6pm.', action: 'Start Chat' },
  { id: 2, icon: '📧', title: 'Email Support', desc: 'Send us a message and we\'ll get back to you within 24 hours.', action: 'Send Email' },
  { id: 3, icon: '📞', title: 'Phone Support', desc: 'Speak directly with a support specialist for urgent issues.', action: 'Call Now' },
]

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.help-center {
  font-family: 'Outfit', sans-serif;
  background: #F9FAFB;
  color: #111827;
}

.help-hero {
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 50%, #E83E8C 100%);
  padding: 5rem 1.5rem;
  text-align: center;
  color: #fff;
}
.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.help-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.15;
}
.gradient-text {
  background: linear-gradient(135deg, #FFD6EC, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.help-hero p {
  font-size: 1.15rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  max-width: 680px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
.search-box svg { color: #9CA3AF; flex-shrink: 0; }
.search-box input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Outfit', sans-serif;
  color: #111827;
}
.search-btn {
  background: linear-gradient(135deg, #00529B, #0066C0);
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}
.search-btn:hover { background: linear-gradient(135deg, #003D73, #00529B); }

.help-categories { padding: 5rem 1.5rem; }
.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}
.category-card {
  background: #fff;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 1.75rem;
  cursor: pointer;
  transition: all 0.2s;
}
.category-card:hover, .category-card.active {
  border-color: #00529B;
  box-shadow: 0 8px 24px rgba(0,82,155,0.12);
  transform: translateY(-2px);
}
.cat-icon { font-size: 2rem; margin-bottom: 0.75rem; }
.category-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; }
.category-card p { font-size: 0.88rem; color: #6B7280; margin-bottom: 1rem; }
.article-count { font-size: 0.8rem; color: #003D73; font-weight: 600; background: #E6F2FF; padding: 0.25rem 0.65rem; border-radius: 9999px; }

.help-faq { background: #F3F4F6; padding: 5rem 1.5rem; }
.faq-list { max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.75rem; }
.faq-item {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.faq-item:hover { box-shadow: 0 4px 12px rgba(0,82,155,0.08); }
.faq-item.open { border-color: #00529B; }
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #111827;
}
.faq-icon { flex-shrink: 0; transition: transform 0.3s; color: #00529B; }
.faq-item.open .faq-icon { transform: rotate(180deg); }
.faq-answer { padding: 0 1.5rem 1.25rem; color: #6B7280; font-size: 0.95rem; line-height: 1.7; }

.help-contact { padding: 5rem 1.5rem; }
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.contact-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #E5E7EB;
  transition: all 0.2s;
}
.contact-card:hover { box-shadow: 0 8px 24px rgba(0,82,155,0.1); transform: translateY(-2px); }
.contact-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.contact-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
.contact-card p { font-size: 0.9rem; color: #6B7280; margin-bottom: 1.5rem; line-height: 1.6; }
.btn-outline {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.65rem 1.5rem; border-radius: 8px; font-weight: 600;
  font-size: 0.95rem; border: 2px solid #00529B; color: #00529B;
  background: #fff; cursor: pointer; transition: all 0.2s;
  font-family: 'Outfit', sans-serif;
}
.btn-outline:hover { background: #E6F2FF; }

.container { max-width: 1280px; margin: 0 auto; }
</style>