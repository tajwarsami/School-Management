<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Let's have a talk</h1>
      <p>Contact our experts if you have a problem. Our experts are always ready to help you. We are available 24/7.</p>
    </div>

    <div class="form-section">
      <h2>Send Us a Message</h2>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name <span class="required">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Phone Number <span class="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              placeholder="+880 1XXX-XXXXXX"
              required
            />
          </div>

          <div class="form-group">
            <label for="district">Location <span class="required">*</span></label>
            <select 
              id="district" 
              v-model="formData.district"
              required
            >
              <option value="" disabled>Select your district</option>
              <option v-for="district in bangladeshDistricts" :key="district" :value="district">
                {{ district }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="hearAbout">How did you hear about us? <span class="required">*</span></label>
          <select 
            id="hearAbout" 
            v-model="formData.hearAbout"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="google">Google Search</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="friend">Friend or Colleague</option>
            <option value="advertisement">Advertisement</option>
            <option value="event">Event or Workshop</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Tell us how we can help you <span class="required">*</span></label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            rows="6"
            placeholder="Describe your inquiry or issue..."
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>

    <div class="location-map-section">
      <h2>Our Location</h2>
      <div class="location-content">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0276977267287!2d90.41414631498175!3d23.780935084577174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f5e5e5e5%3A0x1f5e5e5e5e5e5e5!2sGulshan%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="location-info">
          <div class="icon-wrapper location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <h3>Corporate Office</h3>
            <p>Tower of Aakash, Level- 18</p>
            <p>54 Gulshan Avenue</p>
            <p>Dhaka-1212, Bangladesh</p>
          </div>
          <div style="margin-top: 20px;">
            <h3>Head Office</h3>
            <p>Hazi Motaleb Plaza</p>
            <p>Bandar, Narayanganj</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </div>

    <div class="get-in-touch-section">
      <h2>Get In Touch</h2>
      <div class="touch-cards">
        <div class="touch-card">
          <div class="icon-wrapper phone-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3>Phone Number</h3>
          <p><a href="tel:+8801236547895">+880 1236547895</a></p>
        </div>

        <div class="touch-card">
          <div class="icon-wrapper email-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3>Email Address</h3>
          <p><a href="mailto:support.automation@gmail.com">support.automation@gmail.com</a></p>
        </div>

        <div class="touch-card">
          <div class="icon-wrapper clock-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Working Hours</h3>
          <div class="working-hours">
            <p><strong>Saturday - Thursday:</strong></p>
            <p>9:00 AM - 6:00 PM</p>
            <p class="closed"><strong>Friday:</strong> Closed</p>
          </div>
        </div>

        <div class="touch-card">
          <div class="icon-wrapper whatsapp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <button class="contact-link-btn whatsapp-link" @click="openWhatsApp">
            Chat on WhatsApp
          </button>
        </div>

        <div class="touch-card">
          <div class="icon-wrapper messenger-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.11C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
            </svg>
          </div>
          <h3>Messenger</h3>
          <button class="contact-link-btn messenger-link" @click="openMessenger">
            Chat on Messenger
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        district: '',
        hearAbout: '',
        message: ''
      },
      bangladeshDistricts: [
        'Dhaka',
        'Chittagong',
        'Rajshahi',
        'Khulna',
        'Barisal',
        'Sylhet',
        'Rangpur',
        'Mymensingh',
        'Comilla',
        'Narayanganj',
        'Gazipur',
        'Tangail',
        'Jamalpur',
        'Sherpur',
        'Netrokona',
        'Kishoreganj',
        'Manikganj',
        'Munshiganj',
        'Narsingdi',
        'Rajbari',
        'Madaripur',
        'Gopalganj',
        'Shariatpur',
        'Faridpur',
        'Panchagarh',
        'Dinajpur',
        'Lalmonirhat',
        'Nilphamari',
        'Gaibandha',
        'Thakurgaon',
        'Kurigram',
        'Bogra',
        'Joypurhat',
        'Naogaon',
        'Natore',
        'Chapainawabganj',
        'Pabna',
        'Sirajganj',
        'Chuadanga',
        'Kushtia',
        'Meherpur',
        'Jessore',
        'Jhenaidah',
        'Magura',
        'Narail',
        'Satkhira',
        'Bagerhat',
        'Pirojpur',
        'Jhalokati',
        'Patuakhali',
        'Barguna',
        'Bhola',
        'Habiganj',
        'Moulvibazar',
        'Sunamganj',
        'Brahmanbaria',
        'Chandpur',
        'Lakshmipur',
        'Noakhali',
        'Feni',
        'Khagrachhari',
        'Rangamati',
        'Bandarban',
        'Cox\'s Bazar'
      ]
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // API 
      alert('Thank you! Your message has been submitted successfully. We will get back to you soon.');
      
      this.formData = {
        name: '',
        email: '',
        phone: '',
        district: '',
        hearAbout: '',
        message: ''
      };
    },
    openWhatsApp() {
      // Replace with WhatsApp number and Facebook page username
      window.open('https://wa.me/8801712345678', '_blank');
    },
    openMessenger() {
      window.open('https://m.me/Academybd', '_blank');
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: var(--color-text-main);
  margin-bottom: 15px;
}

.contact-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}


.get-in-touch-section {
  margin-bottom: 60px;
}

.get-in-touch-section h2 {
  font-size: 2rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 40px;
}

.touch-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.touch-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.touch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 25px rgba(0,0,0,0.15);
}

.icon-wrapper {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.phone-icon {
  background: var(--badge-bg);
  color: var(--color-primary);
}

.email-icon {
  background: var(--badge-secondary-bg);
  color: var(--color-secondary);
}

.clock-icon {
  background: var(--badge-accent-bg);
  color: var(--color-accent);
}

.location-icon {
  background: #F3E8FF;
  color: var(--color-primary);
}

.whatsapp-icon {
  background: #dcf8c6;
  color: #25D366;
}

.messenger-icon {
  background: #e3f2fd;
  color: #0084FF;
}

.contact-link-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  color: white;
}

.whatsapp-link {
  background: #25D366;
}

.whatsapp-link:hover {
  background: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.messenger-link {
  background: #0084FF;
}

.messenger-link:hover {
  background: #0073e6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 132, 255, 0.3);
}

.touch-card h3 {
  color: var(--color-text-main);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.touch-card p {
  color: #555;
  margin: 8px 0;
  line-height: 1.6;
}

.touch-card a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.touch-card a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.working-hours p {
  margin: 5px 0;
}

.working-hours .closed {
  color: #e74c3c;
}

.location-map-section {
  margin-bottom: 60px;
}

.location-map-section h2 {
  font-size: 2rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 40px;
}

.location-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.location-info {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.location-info h3 {
  color: var(--color-primary);
  margin-bottom: 10px;
  margin-top: 15px;
  font-size: 1.3rem;
}

.location-info p {
  color: #555;
  margin: 5px 0;
  line-height: 1.6;
}

.map-container {
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.form-section {
  margin-bottom: 60px;
}

.form-section h2 {
  font-size: 2rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 40px;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-main);
  font-weight: 600;
}

.required {
  color: #e74c3c;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 40px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s, transform 0.2s;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 82, 155, 0.3);
}

@media (max-width: 1024px) {
  .touch-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }

  .touch-cards {
    grid-template-columns: 1fr;
  }

  .location-content {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 25px;
  }
}
</style>
