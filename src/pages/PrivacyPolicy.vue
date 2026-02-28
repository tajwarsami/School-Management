<template>
  <div class="privacy-page">
    <section class="policy-hero">
      <div class="container">
        <div class="hero-badge">Legal</div>
        <h1>Privacy <span class="gradient-text">Policy</span></h1>
        <p>Last updated: <strong>January 15, 2025</strong></p>
      </div>
    </section>

    <div class="policy-layout container">
      <aside class="toc-sidebar">
        <div class="toc-card">
          <h4>Table of Contents</h4>
          <nav>
            <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" :class="{ active: activeSection === section.id }" @click.prevent="scrollTo(section.id)">
              {{ section.title }}
            </a>
          </nav>
        </div>
      </aside>

      <main class="policy-content">
        <div class="intro-box">
          <p>At <strong>Academy</strong>, your privacy is a top priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully.</p>
        </div>

        <section id="information-we-collect" class="policy-section">
          <h2><span class="section-num">01</span> Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact our support team.</p>
          <h3>Personal Information</h3>
          <ul>
            <li>Full name, email address, and password</li>
            <li>Billing information (processed securely via third-party payment processors)</li>
            <li>Profile photo and biographical information (optional)</li>
            <li>Communications you send to us</li>
          </ul>
          <h3>Usage Information</h3>
          <ul>
            <li>Course progress, quiz scores, and completion data</li>
            <li>Pages visited, features used, and time spent on the platform</li>
            <li>Device information (browser type, operating system, IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section id="how-we-use" class="policy-section">
          <h2><span class="section-num">02</span> How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <div class="use-cards">
            <div class="use-card" v-for="u in uses" :key="u.title">
              <div class="use-icon">{{ u.icon }}</div>
              <div>
                <strong>{{ u.title }}</strong>
                <p>{{ u.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="information-sharing" class="policy-section">
          <h2><span class="section-num">03</span> Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted vendors who assist in operating our platform (payment processors, email services, analytics).</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect the rights and safety of our users.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.</li>
            <li><strong>With Your Consent:</strong> For any other purpose with your explicit consent.</li>
          </ul>
        </section>

        <section id="data-security" class="policy-section">
          <h2><span class="section-num">04</span> Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These include:</p>
          <div class="security-grid">
            <div class="security-item" v-for="s in securityMeasures" :key="s">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ s }}
            </div>
          </div>
          <p>However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section id="your-rights" class="policy-section">
          <h2><span class="section-num">05</span> Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data, subject to certain legal exceptions.</li>
            <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:privacy@academy.com" class="link">privacy@academy.com</a>.</p>
        </section>

        <section id="cookies" class="policy-section">
          <h2><span class="section-num">06</span> Cookies & Tracking</h2>
          <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content. You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect platform functionality.</p>
        </section>

        <section id="childrens-privacy" class="policy-section">
          <h2><span class="section-num">07</span> Children's Privacy</h2>
          <p>Our platform is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately and we will take steps to remove it.</p>
        </section>

        <section id="contact" class="policy-section">
          <h2><span class="section-num">08</span> Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
          <div class="contact-info">
            <p>📧 <a href="mailto:privacy@academy.com" class="link">privacy@academy.com</a></p>
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

const activeSection = ref('information-we-collect')

const sections = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'information-sharing', title: 'Information Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'childrens-privacy', title: "Children's Privacy" },
  { id: 'contact', title: 'Contact Us' },
]

const uses = [
  { icon: '🎓', title: 'Provide Services', desc: 'Deliver courses, track your progress, and issue certificates.' },
  { icon: '💡', title: 'Personalization', desc: 'Recommend courses and content tailored to your interests.' },
  { icon: '📊', title: 'Analytics', desc: 'Understand how the platform is used to improve features.' },
  { icon: '📢', title: 'Communications', desc: 'Send updates, newsletters, and promotional offers (with your consent).' },
]

const securityMeasures = [
  'SSL/TLS encryption for data in transit',
  'AES-256 encryption for data at rest',
  'Regular security audits and penetration testing',
  'Two-factor authentication support',
  'Role-based access controls for staff',
  'SOC 2 Type II compliance',
]

function scrollTo(id) {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.privacy-page { font-family: 'Outfit', sans-serif; background: #F9FAFB; color: #111827; }

.policy-hero {
  background: linear-gradient(135deg, #00529B 0%, #6B4E9B 50%, #E83E8C 100%);
  padding: 4rem 1.5rem;
  text-align: center;
  color: #fff;
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
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 5rem;
  align-items: start;
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
  font-size: 0.88rem; color: #6B7280; padding: 0.45rem 0.75rem; border-radius: 8px;
  transition: all 0.2s; font-weight: 500;
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
.policy-section h3 { font-size: 1rem; font-weight: 700; color: #374151; margin: 1.25rem 0 0.5rem; }
.policy-section p { font-size: 0.95rem; color: #6B7280; line-height: 1.8; margin-bottom: 0.75rem; }
.policy-section ul { padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
.policy-section ul li { font-size: 0.95rem; color: #6B7280; line-height: 1.7; }
.policy-section ul li strong { color: #374151; }

.use-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin: 1rem 0; }
.use-card {
  background: #fff; border-radius: 12px; padding: 1.25rem;
  border: 1px solid #E5E7EB; display: flex; gap: 1rem; align-items: flex-start;
}
.use-icon { font-size: 1.5rem; }
.use-card strong { font-size: 0.95rem; color: #111827; display: block; margin-bottom: 0.25rem; }
.use-card p { font-size: 0.85rem; color: #9CA3AF; line-height: 1.5; margin: 0; }

.security-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.6rem; margin: 1rem 0;
}
.security-item {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.88rem; color: #374151; font-weight: 500;
  background: #D1FAE5; padding: 0.6rem 0.9rem; border-radius: 8px;
}
.security-item svg { color: #059669; flex-shrink: 0; }

.contact-info { background: #fff; border-radius: 12px; padding: 1.5rem; border: 1px solid #E5E7EB; margin-top: 1rem; }
.contact-info p { margin: 0.5rem 0; font-size: 0.95rem; color: #374151; }
.link { color: #00529B; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
</style>