<template>
  <div class="refund-page">
    <section class="policy-hero">
      <div class="container">
        <div class="hero-badge">Legal</div>
        <h1>Refund <span class="gradient-text">Policy</span></h1>
        <p>Last updated: <strong>January 15, 2025</strong></p>
      </div>
    </section>

    <section class="summary-section">
      <div class="container">
        <h2 class="section-title">The Short Version</h2>
        <div class="summary-grid">
          <div class="summary-card" v-for="s in summaryCards" :key="s.title">
            <div class="summary-icon">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <span class="summary-badge" :class="s.type">{{ s.badge }}</span>
          </div>
        </div>
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
        <div class="contact-cta">
          <p>Need help with a refund?</p>
          <button class="btn-contact">Contact Support</button>
        </div>
      </aside>

      <main class="policy-content">
        <div class="intro-box">
          <p>At <strong>Academy</strong>, we're committed to your learning satisfaction. We've designed this Refund Policy to be fair and transparent. Please read it carefully before making a purchase.</p>
        </div>

        <section id="eligibility" class="policy-section">
          <h2><span class="section-num">01</span> Refund Eligibility</h2>
          <p>We offer refunds under the following conditions:</p>
          <div class="eligibility-grid">
            <div class="eligibility-card eligible">
              <div class="elig-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Eligible for Refund
              </div>
              <ul>
                <li v-for="e in eligible" :key="e">{{ e }}</li>
              </ul>
            </div>
            <div class="eligibility-card not-eligible">
              <div class="elig-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Not Eligible for Refund
              </div>
              <ul>
                <li v-for="n in notEligible" :key="n">{{ n }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="timeframes" class="policy-section">
          <h2><span class="section-num">02</span> Refund Timeframes</h2>
          <p>The following timeframes apply to all refund requests:</p>
          <div class="timeline">
            <div class="timeline-item" v-for="t in timeframes" :key="t.label">
              <div class="timeline-dot" :class="t.color"></div>
              <div class="timeline-content">
                <strong>{{ t.label }}</strong>
                <p>{{ t.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-request" class="policy-section">
          <h2><span class="section-num">03</span> How to Request a Refund</h2>
          <p>To submit a refund request, follow these steps:</p>
          <div class="steps-list">
            <div class="step" v-for="(step, i) in steps" :key="i">
              <div class="step-num">{{ i + 1 }}</div>
              <div class="step-content">
                <strong>{{ step.title }}</strong>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="processing" class="policy-section">
          <h2><span class="section-num">04</span> Processing & Timelines</h2>
          <p>Once your refund request is received:</p>
          <div class="processing-cards">
            <div class="processing-card" v-for="p in processing" :key="p.title">
              <div class="proc-icon">{{ p.icon }}</div>
              <strong>{{ p.title }}</strong>
              <p>{{ p.desc }}</p>
            </div>
          </div>
          <p class="note-text">💡 Refunds are always returned to the original payment method. We cannot issue refunds to a different card or account.</p>
        </section>

        <section id="subscriptions" class="policy-section">
          <h2><span class="section-num">05</span> Subscription Refunds</h2>
          <p>For subscription plans (monthly or annual):</p>
          <ul>
            <li>Monthly subscriptions can be cancelled anytime; no refund is issued for the current billing period.</li>
            <li>Annual subscriptions are eligible for a pro-rated refund within 30 days of purchase.</li>
            <li>After 30 days, annual subscriptions are non-refundable but will remain active until the end of the billing period.</li>
            <li>Promotional or discounted subscriptions are not eligible for refunds.</li>
          </ul>
        </section>

        <section id="exceptions" class="policy-section">
          <h2><span class="section-num">06</span> Special Exceptions</h2>
          <p>We may grant exceptions to this policy at our sole discretion in extraordinary circumstances, such as:</p>
          <ul>
            <li>Extended technical outages that prevented course access</li>
            <li>Accidental or duplicate purchases (reported within 48 hours)</li>
            <li>Medical emergencies with documentation</li>
          </ul>
          <p>To request an exception, contact our support team with relevant documentation.</p>
        </section>

        <section id="contact" class="policy-section">
          <h2><span class="section-num">07</span> Contact Us</h2>
          <p>For refund requests or questions, please reach out to our support team:</p>
          <div class="contact-info">
            <p>📧 <a href="mailto:refunds@academy.com" class="link">refunds@academy.com</a></p>
            <p>💬 Live chat available on the platform (Mon–Fri, 9am–6pm PST)</p>
            <p>📞 +1 (800) 555-0199</p>
            <p>⏱️ Average response time: within 24 hours on business days</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSection = ref('eligibility')

const sections = [
  { id: 'eligibility', title: 'Refund Eligibility' },
  { id: 'timeframes', title: 'Refund Timeframes' },
  { id: 'how-to-request', title: 'How to Request a Refund' },
  { id: 'processing', title: 'Processing & Timelines' },
  { id: 'subscriptions', title: 'Subscription Refunds' },
  { id: 'exceptions', title: 'Special Exceptions' },
  { id: 'contact', title: 'Contact Us' },
]

const summaryCards = [
  { icon: '📅', title: '30-Day Guarantee', desc: 'Full refund within 30 days of purchase for most courses.', badge: 'Standard', type: 'success' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Refunds are processed within 5–10 business days.', badge: '5–10 days', type: 'info' },
  { icon: '🔄', title: 'Easy Process', desc: 'Simple one-step request via email or support chat.', badge: 'Simple', type: 'neutral' },
  { icon: '❌', title: 'Non-Refundable', desc: 'Certificates and completed courses are not eligible.', badge: 'Exceptions Apply', type: 'warning' },
]

const eligible = [
  'Purchases made within 30 days',
  'Courses with less than 20% completion',
  'Technical issues preventing course access (unresolved)',
  'Accidental duplicate purchases',
  'Annual subscriptions within 30 days of purchase',
]

const notEligible = [
  'Purchases made more than 30 days ago',
  'Courses with more than 20% completion',
  'Certificates that have already been issued',
  'Courses purchased during a promotional discount',
  'Monthly subscription fees for the current billing period',
  'Downloadable resources or supplementary materials',
]

const timeframes = [
  { label: '0–30 Days', desc: 'Full refund available for courses with less than 20% completion.', color: 'green' },
  { label: '31–60 Days', desc: 'No refund unless a technical issue prevented access and was reported.', color: 'yellow' },
  { label: '60+ Days', desc: 'No refunds issued. Contact us for exceptional circumstances.', color: 'red' },
]

const steps = [
  { title: 'Log in to your account', desc: 'Go to your Account Settings and navigate to "Purchase History".' },
  { title: 'Find the order', desc: 'Locate the course or subscription you wish to refund and click "Request Refund".' },
  { title: 'Fill out the form', desc: 'Provide a brief reason for your refund request (optional but helpful).' },
  { title: 'Wait for confirmation', desc: 'Our team will review your request and send an email confirmation within 1–2 business days.' },
]

const processing = [
  { icon: '📋', title: 'Review (1–2 days)', desc: 'Our team reviews your request and verifies eligibility.' },
  { icon: '✅', title: 'Approval (1 day)', desc: 'You receive an email confirming your refund has been approved.' },
  { icon: '💸', title: 'Refund (5–10 days)', desc: 'Funds are returned to your original payment method.' },
]

function scrollTo(id) {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.refund-page { font-family: 'Outfit', sans-serif; background: #F9FAFB; color: #111827; }

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

.summary-section { padding: 4rem 1.5rem; background: #fff; border-bottom: 1px solid #E5E7EB; }
.section-title { font-size: 1.75rem; font-weight: 700; text-align: center; margin-bottom: 2rem; }
.summary-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.25rem; }
.summary-card {
  background: #F9FAFB; border-radius: 16px; padding: 1.75rem;
  border: 1px solid #E5E7EB; text-align: center; transition: all 0.2s;
}
.summary-card:hover { box-shadow: 0 8px 24px rgba(0,82,155,0.1); transform: translateY(-2px); }
.summary-icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
.summary-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; color: #111827; }
.summary-card p { font-size: 0.85rem; color: #6B7280; margin-bottom: 1rem; line-height: 1.6; }
.summary-badge { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.78rem; font-weight: 600; }
.summary-badge.success { background: #D1FAE5; color: #065F46; }
.summary-badge.info { background: #E6F2FF; color: #003D73; }
.summary-badge.neutral { background: #F3E8FF; color: #563D7C; }
.summary-badge.warning { background: #FEF3C7; color: #92400E; }

.policy-layout {
  display: grid; grid-template-columns: 260px 1fr; gap: 3rem;
  padding-top: 3rem; padding-bottom: 5rem; align-items: start;
}
@media (max-width: 768px) {
  .policy-layout { grid-template-columns: 1fr; }
  .toc-sidebar { display: none; }
}

.toc-sidebar { position: sticky; top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
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

.contact-cta {
  background: linear-gradient(135deg, #00529B, #6B4E9B);
  border-radius: 16px; padding: 1.5rem; text-align: center; color: #fff;
}
.contact-cta p { font-size: 0.9rem; margin-bottom: 0.85rem; opacity: 0.9; }
.btn-contact {
  background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3);
  color: #fff; padding: 0.65rem 1.5rem; border-radius: 8px; font-weight: 600;
  font-size: 0.9rem; cursor: pointer; font-family: 'Outfit', sans-serif; transition: all 0.2s;
}
.btn-contact:hover { background: rgba(255,255,255,0.3); }

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
.policy-section ul { padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem; }
.policy-section ul li { font-size: 0.95rem; color: #6B7280; line-height: 1.7; }

.eligibility-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0; }
@media (max-width: 640px) { .eligibility-grid { grid-template-columns: 1fr; } }
.eligibility-card { border-radius: 12px; padding: 1.25rem; }
.eligibility-card.eligible { background: #D1FAE5; border: 1px solid #A7F3D0; }
.eligibility-card.not-eligible { background: #FEE2E2; border: 1px solid #FECACA; }
.elig-header {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.9rem; font-weight: 700; margin-bottom: 0.85rem;
}
.eligible .elig-header { color: #065F46; }
.eligible .elig-header svg { color: #059669; }
.not-eligible .elig-header { color: #991B1B; }
.not-eligible .elig-header svg { color: #EF4444; }
.eligibility-card ul { padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.35rem; }
.eligibility-card ul li { font-size: 0.85rem; line-height: 1.6; }
.eligible ul li { color: #065F46; }
.not-eligible ul li { color: #991B1B; }

.timeline { display: flex; flex-direction: column; gap: 0; margin: 1rem 0; position: relative; }
.timeline::before {
  content: ''; position: absolute; left: 11px; top: 20px; bottom: 20px; width: 2px; background: #E5E7EB;
}
.timeline-item { display: flex; gap: 1.25rem; align-items: flex-start; padding: 0.75rem 0; }
.timeline-dot {
  width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; z-index: 1; border: 3px solid #fff;
  box-shadow: 0 0 0 2px currentColor;
}
.timeline-dot.green { background: #10B981; color: #10B981; }
.timeline-dot.yellow { background: #F59E0B; color: #F59E0B; }
.timeline-dot.red { background: #EF4444; color: #EF4444; }
.timeline-content strong { font-size: 0.95rem; color: #111827; display: block; margin-bottom: 0.25rem; }
.timeline-content p { font-size: 0.88rem; color: #6B7280; margin: 0; line-height: 1.6; }

.steps-list { display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; }
.step { display: flex; gap: 1.25rem; align-items: flex-start; }
.step-num {
  width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #00529B, #6B4E9B); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.9rem;
}
.step-content strong { font-size: 0.95rem; color: #111827; display: block; margin-bottom: 0.25rem; }
.step-content p { font-size: 0.88rem; color: #6B7280; margin: 0; line-height: 1.6; }

.processing-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; margin: 1rem 0; }
.processing-card {
  background: #fff; border-radius: 12px; padding: 1.25rem; text-align: center;
  border: 1px solid #E5E7EB;
}
.proc-icon { font-size: 2rem; margin-bottom: 0.75rem; }
.processing-card strong { font-size: 0.9rem; color: #111827; display: block; margin-bottom: 0.4rem; }
.processing-card p { font-size: 0.82rem; color: #9CA3AF; line-height: 1.5; margin: 0; }

.note-text { background: #F3E8FF; border-radius: 10px; padding: 0.9rem 1.25rem; font-size: 0.9rem; color: #563D7C !important; border: 1px solid #E9D5FF; }

.contact-info { background: #fff; border-radius: 12px; padding: 1.5rem; border: 1px solid #E5E7EB; margin-top: 1rem; }
.contact-info p { margin: 0.5rem 0; font-size: 0.95rem; color: #374151; }
.link { color: #00529B; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
</style>