<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="animated-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="description" data-aos="fade-right">
            <div class="badge-tag">
              <span class="pulse-dot"></span>
              Education Technology
            </div>
            <h1 class="main-title">
              About <span class="gradient-text">Edumate</span>
            </h1>
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
            <div class="hero-stats">
              <div class="hero-stat-item">
                <div class="stat-value">10K+</div>
                <div class="stat-text">Active Users</div>
              </div>
              <div class="hero-stat-item">
                <div class="stat-value">150+</div>
                <div class="stat-text">Schools</div>
              </div>
              <div class="hero-stat-item">
                <div class="stat-value">99.9%</div>
                <div class="stat-text">Uptime</div>
              </div>
            </div>
          </div>
          <div class="image-carousel" data-aos="fade-left">
            <div class="carousel-frame">
              <transition name="fade" mode="out-in">
                <img 
                  :key="currentImage" 
                  :src="carouselImages[currentImage]" 
                  :alt="`School image ${currentImage + 1}`"
                  class="carousel-image"
                />
              </transition>
              <div class="carousel-indicators">
                <span 
                  v-for="(img, index) in carouselImages" 
                  :key="index"
                  :class="['indicator', { active: currentImage === index }]"
                  @click="currentImage = index"
                ></span>
              </div>
            </div>
            <div class="floating-card card-1">
              <div class="card-icon">📚</div>
              <div class="card-text">Smart Learning</div>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon">🎓</div>
              <div class="card-text">Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mission-vision-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Our Purpose</span>
          <h2 class="section-title-alt">Mission & Vision</h2>
        </div>
        <div class="mv-grid">
          <div class="mv-card mission" data-aos="fade-up" data-aos-delay="100">
            <div class="card-glow"></div>
            <div class="mv-number">01</div>
            <h2>Our Mission</h2>
            <p>
              To revolutionize educational management by providing innovative, user-friendly
              solutions that empower schools to deliver exceptional education. We strive to
              bridge the gap between traditional educational practices and modern technology,
              creating seamless experiences for administrators, teachers, students, and parents.
            </p>
            <div class="card-decoration"></div>
          </div>
          <div class="mv-card vision" data-aos="fade-up" data-aos-delay="200">
            <div class="card-glow"></div>
            <div class="mv-number">02</div>
            <h2>Our Vision</h2>
            <p>
              To be the leading force in educational technology transformation, where every
              school has access to world-class management tools that foster collaboration,
              transparency, and academic success. We envision a future where technology
              enhances human connection and elevates the quality of education globally.
            </p>
            <div class="card-decoration"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="values-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What We Stand For</span>
          <h2 class="section-title-alt">Core Values</h2>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="value.id" 
               data-aos="zoom-in" :data-aos-delay="index * 100">
            <div class="value-icon-wrapper">
              <div class="value-icon">{{ value.icon }}</div>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="company-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Meet Our Company</span>
          <h2 class="section-title-alt">About Automate IT</h2>
        </div>
        <div class="company-content">
          <div class="company-showcase">
            <div class="company-text" data-aos="fade-right">
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
                  <div class="stat-icon">🏆</div>
                  <div class="stat-number">500+</div>
                  <div class="stat-label">Projects Delivered</div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">👥</div>
                  <div class="stat-number">50+</div>
                  <div class="stat-label">Expert Team</div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">⭐</div>
                  <div class="stat-number">98%</div>
                  <div class="stat-label">Client Satisfaction</div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">🕐</div>
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Support Available</div>
                </div>
              </div>
            </div>
            <div class="company-images" data-aos="fade-left">
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
                  <div class="img-border"></div>
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
                  <div class="img-border"></div>
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
                  <div class="img-border"></div>
                </div>
              </div>
              <div class="awards-badge">
                <div class="award-icon">🏅</div>
                <div class="award-text">
                  <div class="award-title">Award Winning</div>
                  <div class="award-subtitle">Excellence in Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title-alt">Our Services</h2>
          <p class="section-description">Comprehensive solutions tailored to your needs</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="service.id"
               data-aos="flip-left" :data-aos-delay="index * 100">
            <div class="service-bg-pattern"></div>
            <div class="service-icon-wrapper">
              <div class="service-icon">{{ service.icon }}</div>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="service-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="products-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Our Solutions</span>
          <h2 class="section-title-alt">Featured Products</h2>
          <p class="section-description">Powerful tools to accelerate your growth</p>
        </div>
        <div class="products-grid">
          <div class="product-card" v-for="(product, index) in products" :key="product.id"
               data-aos="fade-up" :data-aos-delay="index * 150">
            <div class="product-glow"></div>
            <div class="product-header">
              <div class="product-icon-wrapper">
                <div class="product-icon">{{ product.icon }}</div>
              </div>
              <h3>{{ product.title }}</h3>
            </div>
            <p class="product-description">{{ product.description }}</p>
            <ul class="product-features">
              <li v-for="(feature, index) in product.features" :key="index">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
            <a :href="product.link" class="product-link">
              <span>Explore Product</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
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
      values: [
        {
          id: 1,
          icon: '💡',
          title: 'Innovation',
          description: 'Constantly pushing boundaries to deliver cutting-edge solutions that stay ahead of the curve.'
        },
        {
          id: 2,
          icon: '🤝',
          title: 'Integrity',
          description: 'Building trust through transparency, honesty, and ethical practices in everything we do.'
        },
        {
          id: 3,
          icon: '⚡',
          title: 'Excellence',
          description: 'Committed to delivering the highest quality in every project, every time.'
        },
        {
          id: 4,
          icon: '🎯',
          title: 'Customer Focus',
          description: 'Your success is our priority. We listen, understand, and deliver solutions that matter.'
        },
        {
          id: 5,
          icon: '🌱',
          title: 'Growth',
          description: 'Fostering continuous learning and development for our team and clients.'
        },
        {
          id: 6,
          icon: '🌍',
          title: 'Impact',
          description: 'Creating meaningful change in education and business through technology.'
        }
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
    this.initAOS();
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
      }, 4000);
    },
    initAOS() {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic'
        });
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.about-page {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  overflow-x: hidden;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0 60px;
  overflow: hidden;
}
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
}
.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  top: -200px;
  left: -100px;
  animation-delay: 0s;
}
.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(118,75,162,0.6) 0%, transparent 70%);
  bottom: -150px;
  right: -100px;
  animation-delay: 5s;
}
.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(102,126,234,0.5) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 100px) scale(0.9); }
}
.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
}
.pulse-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}
.main-title {
  font-size: 3.5rem;
  margin-bottom: 32px;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.gradient-text {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 24px;
  opacity: 0.95;
  font-weight: 400;
}
.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 32px;
}
.hero-stat-item {
  text-align: center;
}
.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
}
.stat-text {
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 500;
}
.image-carousel {
  position: relative;
}
.carousel-frame {
  position: relative;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}
.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}
.indicator.active {
  width: 32px;
  border-radius: 5px;
  background: white;
}
.floating-card {
  position: absolute;
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: floatCard 3s infinite ease-in-out;
}
.card-1 {
  top: 60px;
  right: -40px;
  animation-delay: 0s;
}
.card-2 {
  bottom: 60px;
  left: -40px;
  animation-delay: 1.5s;
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.card-icon {
  font-size: 2rem;
}
.card-text {
  font-size: 1rem;
  font-weight: 700;
  color: #667eea;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.section-header {
  text-align: center;
  margin-bottom: 40px;
}
.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 20px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.section-title-alt {
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}
.section-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}
.mission-vision-section {
  padding: 30px 0;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
}
.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.mv-card {
  position: relative;
  background: white;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}
.mv-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}
.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(102,126,234,0.1), transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.mv-card:hover .card-glow {
  opacity: 1;
}
.mv-card .mv-number {
  font-size: 5rem;
  font-weight: 800;
  color: #667eea;
  opacity: 0.15;
  line-height: 1;
  margin-bottom: 24px;
  font-family: 'Inter', sans-serif;
}
.mv-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #1f2937;
  font-weight: 700;
}
.mv-card p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #6b7280;
}
.card-decoration {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  opacity: 0.05;
}
.values-section {
  padding: 20px 0;
  background: white;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.value-card {
  text-align: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  border-radius: 20px;
  border: 2px solid #f3f4f6;
  transition: all 0.3s ease;
}
.value-card:hover {
  border-color: #667eea;
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
}
.value-icon-wrapper {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.25);
}
.value-icon {
  font-size: 2rem;
}
.value-card h3 {
  font-size: 1.375rem;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 700;
}
.value-card p {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.7;
}
.company-section {
  padding: 60px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
}
.company-content {
  max-width: 1280px;
  margin: 0 auto;
}
.company-showcase {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 0;
}
.company-text {
  padding: 24px;
}
.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 28px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  font-size: 0.9375rem;
}
.badge-icon {
  font-size: 1.375rem;
}
.company-subtitle {
  font-size: 2.25rem;
  color: #1f2937;
  margin-bottom: 28px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.company-para {
  font-size: 1.0625rem;
  line-height: 1.9;
  color: #4b5563;
  margin-bottom: 24px;
}
.company-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
}
.stat-item {
  text-align: center;
  padding: 28px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
}
.stat-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}
.stat-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  line-height: 1;
}
.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
}
.company-images {
  position: relative;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.main-img {
  grid-column: 1 / -1;
}
.company-img-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.company-img-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2);
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
  height: 320px;
}
.image-grid .company-img-wrapper:not(.main-img) .company-img {
  height: 220px;
}
.img-border {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  pointer-events: none;
}
.img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  color: white;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.img-overlay span {
  font-weight: 700;
  font-size: 1.125rem;
}
.awards-badge {
  position: absolute;
  top: 20px;
  right: -20px;
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: floatBadge 3s infinite ease-in-out;
}
@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.award-icon {
  font-size: 2rem;
}
.award-title {
  font-weight: 700;
  color: #1f2937;
  font-size: 0.9375rem;
}
.award-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}
.services-section {
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  position: relative;
  background: white;
  padding: 36px 28px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  overflow: hidden;
}
.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 48px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}
.service-bg-pattern {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102,126,234,0.05) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.service-card:hover .service-bg-pattern {
  opacity: 1;
}
.service-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
  transition: transform 0.4s ease;
}
.service-card:hover .service-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}
.service-icon {
  font-size: 2.5rem;
}
.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #1f2937;
  font-weight: 700;
}
.service-card p {
  color: #6b7280;
  line-height: 1.75;
  font-size: 0.9375rem;
  margin-bottom: 20px;
}
.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  font-weight: 700;
  font-size: 0.9375rem;
  transition: gap 0.3s ease;
}
.service-card:hover .service-link {
  gap: 12px;
}
.products-section {
  padding: 60px 0;
  background: white;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.product-card {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 36px;
  border-radius: 28px;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 24px 64px rgba(102, 126, 234, 0.35);
}
.product-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
  pointer-events: none;
}
.product-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.product-icon-wrapper {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.product-icon {
  font-size: 2.25rem;
}
.product-card h3 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
}
.product-description {
  font-size: 1.0625rem;
  margin-bottom: 28px;
  opacity: 0.95;
  line-height: 1.7;
}
.product-features {
  list-style: none;
  margin-bottom: 32px;
}
.product-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.9375rem;
  font-weight: 500;
}
.product-features li svg {
  flex-shrink: 0;
  color: #4ade80;
}
.product-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.0625rem;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.product-link:hover {
  background: rgba(255, 255, 255, 0.25);
  gap: 14px;
  transform: translateX(4px);
}
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .carousel-frame {
    height: 400px;
  }
  .mv-grid {
    grid-template-columns: 1fr;
  }
  .company-showcase {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  .section-title-alt {
    font-size: 2.25rem;
  }
  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }
  .company-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .values-grid {
    grid-template-columns: 1fr;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .main-title {
    font-size: 2rem;
  }
  .company-subtitle {
    font-size: 1.75rem;
  }
  .company-stats {
    grid-template-columns: 1fr;
  }
  .section-title-alt {
    font-size: 2rem;
  }
  .floating-card {
    display: none;
  }
}
</style>