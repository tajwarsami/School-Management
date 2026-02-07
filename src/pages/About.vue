<template>
  <div class="about-page">

    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="description">
            <h1 class="main-title">About Edumate</h1>
            <p class="intro-text">
              Welcome to our comprehensive school management solution designed to streamline
              educational administration and enhance the learning experience. Our platform
              integrates all aspects of school operations, from student enrollment and attendance
              tracking to academic performance monitoring and parent-teacher communication.
            </p>
            <p class="intro-text">
              We believe in empowering educational institutions with cutting-edge technology
              that simplifies complex processes, reduces administrative burden, and allows
              educators to focus on what matters most - nurturing young minds and fostering
              academic excellence.
            </p>
          </div>
          
          <div class="image-carousel">
            <transition name="fade" mode="out-in">
              <img 
                :key="currentImage" 
                :src="carouselImages[currentImage]" 
                :alt="`School image ${currentImage + 1}`"
                class="carousel-image"
              />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision-section">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card mission">
            <div class="icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To revolutionize educational management by providing innovative, user-friendly
              solutions that empower schools to deliver exceptional education. We strive to
              bridge the gap between traditional educational practices and modern technology,
              creating seamless experiences for administrators, teachers, students, and parents.
            </p>
          </div>
          
          <div class="mv-card vision">
            <div class="icon">🌟</div>
            <h2>Our Vision</h2>
            <p>
              To be the leading force in educational technology transformation, where every
              school has access to world-class management tools that foster collaboration,
              transparency, and academic success. We envision a future where technology
              enhances human connection and elevates the quality of education globally.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="company-section">
      <div class="container">
        <h2 class="section-title">About Automate IT</h2>
        
        <div class="company-content">
          <div class="company-showcase">
            <div class="company-text">
              <div class="company-badge">
                <span class="badge-icon">🚀</span>
                <span class="badge-text">Innovating Since 2015</span>
              </div>
              
              <h3 class="company-subtitle">Transforming Businesses Through Technology</h3>
              
              <p class="company-para">
                Automate IT is a forward-thinking software development company specializing in
                creating intelligent automation solutions for businesses and educational institutions.
                With years of expertise in software engineering, we develop robust, scalable, and
                innovative applications that transform the way organizations operate.
              </p>
              
              <p class="company-para">
                Our team of dedicated professionals combines technical excellence with deep industry
                knowledge to deliver solutions that not only meet but exceed our clients' expectations.
                From concept to deployment, we are committed to excellence in every project we undertake.
              </p>

              <div class="company-stats">
                <div class="stat-item">
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Projects Delivered</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">50+</div>
                  <div class="stat-label">Expert Team</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">98%</div>
                  <div class="stat-label">Client Satisfaction</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Support Available</div>
                </div>
              </div>
            </div>

            <div class="company-images">
              <div class="image-grid">
                <div class="company-img-wrapper main-img">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="Team collaboration"
                    class="company-img"
                  />
                  <div class="img-overlay">
                    <span>Our Team at Work</span>
                  </div>
                </div>
                <div class="company-img-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop" 
                    alt="Technology innovation"
                    class="company-img"
                  />
                  <div class="img-overlay">
                    <span>Innovation Hub</span>
                  </div>
                </div>
                <div class="company-img-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop" 
                    alt="Modern workspace"
                    class="company-img"
                  />
                  <div class="img-overlay">
                    <span>Modern Workspace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-wrapper">
            <div class="contact-banner">
              <div class="contact-content">
                <h3 class="contact-title">Let's Build Something Amazing Together</h3>
                <p class="contact-subtitle">Have a project in mind? We'd love to hear from you!</p>
              </div>
              
              <div class="contact-info-grid">
                <div class="contact-card">
                  <div class="contact-icon">📧</div>
                  <h4>Email Us</h4>
                  <a href="mailto:info@automateit.com" class="contact-link">info@automateit.com</a>
                  <a href="mailto:support@automateit.com" class="contact-link">support@automateit.com</a>
                </div>

                <div class="contact-card">
                  <div class="contact-icon">📞</div>
                  <h4>Call Us</h4>
                  <a href="tel:+8801234567890" class="contact-link">+880 123 456 7890</a>
                  <a href="tel:+8809876543210" class="contact-link">+880 987 654 3210</a>
                </div>

                <div class="contact-card">
                  <div class="contact-icon">📍</div>
                  <h4>Visit Us</h4>
                  <p class="contact-address">
                    House 123, Road 45<br>
                    Gulshan-2, Dhaka 1212<br>
                    Bangladesh
                  </p>
                </div>

                <div class="contact-card">
                  <div class="contact-icon">🌐</div>
                  <h4>Follow Us</h4>
                  <div class="social-links">
                    <a href="#" class="social-link" title="Facebook">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" class="social-link" title="LinkedIn">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" class="social-link" title="Twitter">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="cta-buttons">
                <a href="#contact-form" class="btn-primary">Get in Touch</a>
                <a href="#portfolio" class="btn-secondary">View Our Work</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card" v-for="service in services" :key="service.id">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <h2 class="section-title">Our Products</h2>
        <div class="products-grid">
          <div class="product-card" v-for="product in products" :key="product.id">
            <div class="product-header">
              <div class="product-icon">{{ product.icon }}</div>
              <h3>{{ product.title }}</h3>
            </div>
            <p class="product-description">{{ product.description }}</p>
            <ul class="product-features">
              <li v-for="(feature, index) in product.features" :key="index">
                {{ feature }}
              </li>
            </ul>
            <a :href="product.link" class="product-link">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      currentImage: 0,
      carouselImages: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop'
      ],
      services: [
        {
          id: 1,
          icon: '💻',
          title: 'Custom Software Development',
          description: 'Tailored software solutions designed to meet your unique business requirements and workflows.'
        },
        {
          id: 2,
          icon: '☁️',
          title: 'Cloud Solutions',
          description: 'Scalable cloud-based applications with high availability and security for modern businesses.'
        },
        {
          id: 3,
          icon: '📱',
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android devices.'
        },
        {
          id: 4,
          icon: '🔧',
          title: 'System Integration',
          description: 'Seamless integration of disparate systems to create unified, efficient workflows.'
        },
        {
          id: 5,
          icon: '🎓',
          title: 'Educational Technology',
          description: 'Specialized solutions for schools and educational institutions to enhance learning outcomes.'
        },
        {
          id: 6,
          icon: '🛡️',
          title: 'IT Consulting',
          description: 'Expert guidance on technology strategy, digital transformation, and IT infrastructure.'
        }
      ],
      products: [
        {
          id: 1,
          icon: '🏫',
          title: 'School Management System',
          description: 'Complete solution for managing all aspects of school operations.',
          features: [
            'Student Information Management',
            'Attendance Tracking',
            'Grade Management',
            'Parent Portal',
            'Fee Management'
          ],
          link: '/products/school-management'
        },
        {
          id: 2,
          icon: '📚',
          title: 'Learning Management System',
          description: 'Platform for online courses, assignments, and collaborative learning.',
          features: [
            'Course Creation & Management',
            'Assignment Submission',
            'Quiz & Assessment Tools',
            'Discussion Forums',
            'Progress Tracking'
          ],
          link: '/products/lms'
        },
        {
          id: 3,
          icon: '💼',
          title: 'HR Management Suite',
          description: 'Comprehensive human resource management for organizations.',
          features: [
            'Employee Database',
            'Payroll Processing',
            'Leave Management',
            'Performance Reviews',
            'Recruitment Module'
          ],
          link: '/products/hr-suite'
        },
        {
          id: 4,
          icon: '📊',
          title: 'Business Analytics Dashboard',
          description: 'Real-time insights and reporting for data-driven decisions.',
          features: [
            'Custom Dashboards',
            'Real-time Analytics',
            'Report Generation',
            'Data Visualization',
            'Predictive Analytics'
          ],
          link: '/products/analytics'
        }
      ]
    }
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
      }, 3000);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.main-title {
  font-size: 3rem;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 1.2;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  opacity: 0.95;
}

.image-carousel {
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.mission-vision-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.mv-card {
  background: white;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mv-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.mv-card .icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.mv-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #667eea;
}

.mv-card p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
}

.company-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #333;
  font-weight: 700;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.company-content {
  max-width: 1200px;
  margin: 0 auto;
}

.company-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}

.company-text {
  padding: 20px;
}

.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  margin-bottom: 25px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.badge-icon {
  font-size: 1.3rem;
}

.badge-text {
  font-size: 0.95rem;
}

.company-subtitle {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  font-weight: 700;
  line-height: 1.3;
}

.company-para {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.company-images {
  position: relative;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.main-img {
  grid-column: 1 / -1;
}

.company-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.company-img-wrapper:hover {
  transform: scale(1.05);
}

.company-img-wrapper:hover .img-overlay {
  opacity: 1;
}

.company-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.main-img .company-img {
  height: 300px;
}

.image-grid .company-img-wrapper:not(.main-img) .company-img {
  height: 200px;
}

.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.img-overlay span {
  font-weight: 600;
  font-size: 1.1rem;
}

.contact-wrapper {
  margin-top: 60px;
}

.contact-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  color: white;
}

.contact-content {
  text-align: center;
  margin-bottom: 50px;
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.contact-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.contact-card h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.contact-link {
  display: block;
  color: white;
  text-decoration: none;
  margin: 8px 0;
  font-size: 0.95rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.contact-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.contact-address {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.social-link:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.btn-primary,
.btn-secondary {
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
}

.services-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #333;
}

.service-card p {
  color: #666;
  line-height: 1.7;
}

.products-section {
  padding: 80px 0;
  background: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.product-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-icon {
  font-size: 2.5rem;
  margin-right: 15px;
}

.product-card h3 {
  font-size: 1.6rem;
  font-weight: 600;
}

.product-description {
  font-size: 1.05rem;
  margin-bottom: 20px;
  opacity: 0.95;
  line-height: 1.6;
}

.product-features {
  list-style: none;
  margin-bottom: 25px;
}

.product-features li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  font-size: 0.95rem;
}

.product-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #4ade80;
}

.product-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 12px 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: background 0.3s ease;
}

.product-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .mv-grid {
    grid-template-columns: 1fr;
  }

  .company-showcase {
    grid-template-columns: 1fr;
  }

  .company-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }

  .company-subtitle {
    font-size: 1.5rem;
  }

  .contact-banner {
    padding: 40px 25px;
  }

  .contact-title {
    font-size: 1.8rem;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
  }

  .company-stats {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>