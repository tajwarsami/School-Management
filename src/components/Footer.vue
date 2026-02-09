<script setup>
import { Facebook, Linkedin, Twitter, Download } from 'lucide-vue-next';
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-col brand-col">
        <div class="logo">
          <span class="logo-text">Edufy</span>
          <div class="logo-dot"></div>
        </div>
        <p class="brand-desc">
          The most comprehensive school management system designed to simplify administrative tasks and connect your educational community.
        </p>
        <div class="social-links">
          <a href="#" class="social-link"><Facebook :size="20" /></a>
          <a href="#" class="social-link"><Twitter :size="20" /></a>
          <a href="#" class="social-link"><Linkedin :size="20" /></a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Support</h4>
        <ul class="footer-links">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Get Our App</h4>
        <div class="app-buttons">
          <button class="store-btn">
            <Download :size="16" /> App Store
          </button>
          <button class="store-btn">
            <Download :size="16" /> Google Play
          </button>
        </div>
        <div class="contact-info">
          <p>hello@edufy.com</p>
          <p>+880 1234 567890</p>
        </div>
      </div>
    </div>
    
    <div class="container copyright">
      <p>&copy; 2026 Academy. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-card-dark);
  color: var(--color-text-on-dark-muted);
  padding-top: 12rem;
  padding-bottom: 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
}

.brand-desc {
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 300px;
}

@media (max-width: 640px) {
  .brand-desc {
    margin: 0 auto 2rem;
  }
}

.social-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 640px) {
  .social-links {
    justify-content: center;
  }
}

.social-link {
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: white;
}

.social-link:hover {
  background: var(--gradient-primary);
}

.col-title {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-accent);
}

.app-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.store-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
  font-weight: 500;
}

.store-btn:hover {
  background: rgba(255,255,255,0.1);
  border-color: white;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.copyright {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
}
</style>
