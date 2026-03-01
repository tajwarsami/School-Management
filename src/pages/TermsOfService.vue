<template>
  <div class="tos-page">
    <section class="policy-hero">
      <div class="container">
        <div class="hero-badge">Legal</div>
        <h1>Terms of <span class="gradient-text">Service</span></h1>
        <p>Last updated: <strong>January 15, 2025</strong> &nbsp;·&nbsp; Effective: <strong>February 1, 2025</strong></p>
      </div>
    </section>

    <div class="policy-layout container">
      <aside class="toc-sidebar">
        <div class="toc-card">
          <h4>Table of Contents</h4>
          <nav>
            <a v-for="s in sections" :key="s.id" :href="`#${s.id}`" :class="{ active: activeSection === s.id }" @click.prevent="scrollTo(s.id)">
              {{ s.title }}
            </a>
          </nav>
        </div>
      </aside>

      <main class="policy-content">
        <div class="intro-box">
          <p>Welcome to <strong>Academy</strong>. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <section id="acceptance" class="policy-section">
          <h2><span class="section-num">01</span> Acceptance of Terms</h2>
          <p>By creating an account or accessing any part of the Academy platform, you confirm that you are at least 18 years of age (or have parental consent), that you have read and understood these Terms, and that you agree to be legally bound by them. These Terms apply to all users, including learners, instructors, and visitors.</p>
        </section>

        <section id="account-registration" class="policy-section">
          <h2><span class="section-num">02</span> Account Registration</h2>
          <p>To access certain features of the platform, you must register for an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password confidential and secure</li>
            <li>Notify us immediately of any unauthorized access to your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section id="platform-use" class="policy-section">
          <h2><span class="section-num">03</span> Platform Use & Restrictions</h2>
          <p>You agree to use Academy solely for lawful, educational purposes. The following activities are strictly prohibited:</p>
          <div class="prohibited-list">
            <div class="prohibited-item" v-for="item in prohibited" :key="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              {{ item }}
            </div>
          </div>
        </section>

        <section id="intellectual-property" class="policy-section">
          <h2><span class="section-num">04</span> Intellectual Property</h2>
          <p>All content on the Academy platform — including courses, videos, text, graphics, logos, and software — is the intellectual property of Academy or its content partners and is protected by copyright, trademark, and other applicable laws.</p>
          <p>Your enrollment grants you a limited, non-exclusive, non-transferable license to access and view course content for personal, non-commercial educational use only. You may not:</p>
          <ul>
            <li>Download, reproduce, or redistribute course materials without permission</li>
            <li>Screen record, re-upload, or share course content on other platforms</li>
            <li>Remove or alter any copyright, trademark, or proprietary notices</li>
          </ul>
        </section>

        <section id="payments" class="policy-section">
          <h2><span class="section-num">05</span> Payments & Subscriptions</h2>
          <div class="info-cards">
            <div class="info-card" v-for="p in paymentInfo" :key="p.title">
              <div class="info-icon">{{ p.icon }}</div>
              <div>
                <strong>{{ p.title }}</strong>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>
          <p>All prices are listed in USD and are subject to applicable taxes. We reserve the right to modify pricing with reasonable notice.</p>
        </section>

        <section id="disclaimers" class="policy-section">
          <h2><span class="section-num">06</span> Disclaimers & Warranties</h2>
          <div class="warning-box">
            <p>THE ACADEMY PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
          </div>
          <p>We make no representations that courses will lead to specific employment or career outcomes. Educational results vary based on individual effort, background, and other factors.</p>
        </section>

        <section id="limitation-of-liability" class="policy-section">
          <h2><span class="section-num">07</span> Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to loss of data, lost profits, or business interruption.</p>
          <p>Our total liability to you for any claims shall not exceed the amount paid by you to Academy in the twelve (12) months preceding the claim.</p>
        </section>

        <section id="termination" class="policy-section">
          <h2><span class="section-num">08</span> Termination</h2>
          <p>We reserve the right to suspend or terminate your access to Academy at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. You may also terminate your account at any time by contacting our support team.</p>
        </section>

        <section id="governing-law" class="policy-section">
          <h2><span class="section-num">09</span> Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved exclusively in the state or federal courts located in San Francisco, California.</p>
        </section>

        <section id="contact" class="policy-section">
          <h2><span class="section-num">10</span> Contact Us</h2>
          <p>For questions about these Terms of Service, please contact our legal team:</p>
          <div class="contact-info">
            <p>📧 <a href="mailto:legal@academy.com" class="link">legal@academy.com</a></p>
            <p>📍 Academy Inc., 123 Learning Street, San Francisco, CA 94103</p>
            <p>📞 +1 (800) 555-0199</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref('acceptance')

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'account-registration', title: 'Account Registration' },
  { id: 'platform-use', title: 'Platform Use & Restrictions' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'payments', title: 'Payments & Subscriptions' },
  { id: 'disclaimers', title: 'Disclaimers & Warranties' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact', title: 'Contact Us' },
]

const prohibited = [
  'Sharing account credentials with other users',
  'Attempting to hack, scrape, or reverse-engineer the platform',
  'Uploading malicious code, viruses, or harmful content',
  'Harassing, threatening, or abusing other users or instructors',
  'Misrepresenting your identity or credentials',
  'Reselling access to courses or platform features',
  'Violating any applicable local, national, or international law',
]

const paymentInfo = [
  { icon: '💳', title: 'One-Time Purchases', desc: 'Course purchases are final upon completion of payment and grant lifetime access to that course.' },
  { icon: '🔄', title: 'Subscriptions', desc: 'Subscription plans auto-renew at the end of each billing period. You may cancel anytime before renewal.' },
  { icon: '💰', title: 'Refunds', desc: 'Refunds are subject to our Refund Policy. Please review it for eligibility and processing details.' },
]

function scrollTo(id) {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.tos-page { font-family: 'Outfit', sans-serif; background: #F9FAFB; color: #111827; }

.policy-hero {
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 50%, #E83E8C 100%);
  padding: 4rem 1.5rem; text-align: center; color: #fff;
}
.hero-badge {
  display: inline-block; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 0.35rem 1rem;
  border-radius: 9999px; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; margin-bottom: 1.25rem;
}
.policy-hero h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; margin-bottom: 0.75rem; }
.gradient-text {
  background: linear-gradient(135deg, #FFD6EC, #ffffff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.policy-hero p { font-size: 0.95rem; opacity: 0.85; }

.policy-layout {
  display: grid; grid-template-columns: 260px 1fr; gap: 3rem;
  padding-top: 3rem; padding-bottom: 5rem; align-items: start;
}
@media (max-width: 768px) {
  .policy-layout { grid-template-columns: 1fr; }
  .toc-sidebar { display: none; }
}

.toc-sidebar { position: sticky; top: 2rem; }
.toc-card {
  background: #fff; border-radius: 16px; padding: 1.5rem;
  border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.toc-card h4 { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF; margin-bottom: 1rem; }
.toc-card nav { display: flex; flex-direction: column; gap: 0.35rem; }
.toc-card nav a {
  font-size: 0.88rem; color: #6B7280; padding: 0.45rem 0.75rem; border-radius: 8px; transition: all 0.2s; font-weight: 500;
}
.toc-card nav a:hover, .toc-card nav a.active { background: #E6F2FF; color: #00529B; }

.intro-box {
  background: linear-gradient(135deg, #E6F2FF, #F3E8FF);
  border-left: 4px solid #00529B; border-radius: 0 12px 12px 0;
  padding: 1.25rem 1.5rem; margin-bottom: 2.5rem;
  font-size: 0.95rem; color: #374151; line-height: 1.7;
}

.policy-section { margin-bottom: 3rem; }
.policy-section h2 {
  font-size: 1.5rem; font-weight: 700; color: #111827;
  margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;
}
.section-num {
  font-size: 0.75rem; font-weight: 700; color: #fff;
  background: linear-gradient(135deg, #00529B, #6B4E9B);
  padding: 0.25rem 0.6rem; border-radius: 6px; letter-spacing: 0.05em;
}
.policy-section p { font-size: 0.95rem; color: #6B7280; line-height: 1.8; margin-bottom: 0.75rem; }
.policy-section ul { padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
.policy-section ul li { font-size: 0.95rem; color: #6B7280; line-height: 1.7; }
.policy-section ul li strong { color: #374151; }

.prohibited-list { display: flex; flex-direction: column; gap: 0.6rem; margin: 1rem 0; }
.prohibited-item {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.9rem; color: #991B1B; font-weight: 500;
  background: #FEE2E2; padding: 0.75rem 1rem; border-radius: 8px;
}
.prohibited-item svg { color: #EF4444; flex-shrink: 0; }

.info-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin: 1rem 0; }
.info-card {
  background: #fff; border-radius: 12px; padding: 1.25rem;
  border: 1px solid #E5E7EB; display: flex; gap: 1rem; align-items: flex-start;
}
.info-icon { font-size: 1.5rem; }
.info-card strong { font-size: 0.95rem; color: #111827; display: block; margin-bottom: 0.25rem; }
.info-card p { font-size: 0.85rem; color: #9CA3AF; line-height: 1.5; margin: 0; }

.warning-box {
  background: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 0 12px 12px 0;
  padding: 1.25rem 1.5rem; margin: 1rem 0;
  font-size: 0.85rem; color: #92400E; line-height: 1.7; font-weight: 600;
}
.warning-box p { margin: 0; color: #92400E; }

.contact-info { background: #fff; border-radius: 12px; padding: 1.5rem; border: 1px solid #E5E7EB; margin-top: 1rem; }
.contact-info p { margin: 0.5rem 0; font-size: 0.95rem; color: #374151; }
.link { color: #00529B; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
</style>