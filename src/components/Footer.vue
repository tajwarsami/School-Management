<script setup>
import { Facebook, Linkedin, Twitter, Download, Mail, Phone } from 'lucide-vue-next';

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <footer class="footer" :class="{ 'footer-home': isHomePage }">
    <div class="container footer-content">
      <div class="footer-col brand-col">
        <div class="logo">
          <span class="logo-text">Academy</span>
          <div class="logo-dot"></div>
        </div>
        <p class="brand-desc">
          The most comprehensive school management system designed to simplify administrative tasks and connect your educational community.
        </p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <Facebook :size="20" />
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <Twitter :size="20" />
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <Linkedin :size="20" />
          </a>
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
          <a href="#" class="store-btn">
            <Download :size="18" />
            <span>App Store</span>
          </a>
          <a href="#" class="store-btn">
            <Download :size="18" />
            <span>Google Play</span>
          </a>
        </div>
        <div class="contact-info">
          <a href="mailto:hello@Academy.com" class="contact-item">
            <Mail :size="16" />
            <span>hello@academy.com</span>
          </a>
          <a href="tel:+8801234567890" class="contact-item">
            <Phone :size="16" />
            <span>+880 1234 567890</span>
          </a>
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
  padding: 4rem 0 2rem;
}

.footer-home {
  margin-top: -80px;
  padding-top: 10rem;
}

@media (max-width: 640px) {
  .footer {
    padding: 3rem 0 2rem;
    margin-top: 3rem;
  }
  
  .footer-home {
    margin-top: -60px;
    padding-top: 8rem;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
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

@media (max-width: 640px) {
  .logo {
    justify-content: center;
  }
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 50%;
  flex-shrink: 0;
}

.brand-desc {
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 320px;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .brand-desc {
    margin: 0 auto 1.5rem;
  }
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .social-links {
    justify-content: center;
  }
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
}

.social-link:hover {
  background: var(--gradient-primary);
  transform: translateY(-2px);
}

.col-title {
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-links a {
  transition: all 0.2s ease;
  text-decoration: none;
  color: var(--color-text-on-dark-muted);
  font-size: 0.95rem;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-accent);
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .footer-links a:hover {
    transform: none;
  }
}

.app-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.store-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
}

.store-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-on-dark-muted);
  transition: color 0.2s ease;
  text-decoration: none;
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .contact-item {
    justify-content: center;
  }
}

.contact-item:hover {
  color: var(--color-accent);
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
}
</style>