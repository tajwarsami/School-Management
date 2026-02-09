<template>
  <div class="demo-request-page">
    <div class="form-container">
      <h1>Request a Demo</h1>
      <p>Fill out the form below and our expert will contact you soon.</p>

      <form @submit.prevent="handleSubmit">

        <div class="form-row">
          <div class="form-group">
            <input type="text" id="fullName" v-model="form.fullName" required placeholder=" " />
            <label for="fullName">Full Name *</label>
          </div>
          <div class="form-group">
            <select id="totalStudents" v-model="form.totalStudents">
              <option value="" disabled>Select range</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
            <label for="totalStudents">Total Students</label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <input type="text" id="instituteName" v-model="form.instituteName" required placeholder=" " />
            <label for="instituteName">Institute Name *</label>
          </div>
          <div class="form-group">
            <input type="text" id="state" v-model="form.state" required placeholder=" " />
            <label for="state">State *</label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <textarea id="instituteAddress" v-model="form.instituteAddress" required placeholder=" "></textarea>
            <label for="instituteAddress">Institute Address *</label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <select id="country" v-model="form.country" required>
              <option value="Bangladesh">Bangladesh</option>
            </select>
            <label for="country">Country *</label>
          </div>

          <div class="form-group phone-group">
            <label for="phone">Phone Number *</label>
            <div class="phone-wrapper">
              <span class="country-code">+880</span>
              <input type="tel" id="phone" v-model="form.phone" placeholder="Enter number" required />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <textarea id="message" v-model="form.message" placeholder=" "></textarea>
            <label for="message">Message (optional)</label>
          </div>
        </div>

        <div class="form-group terms">
          <input type="checkbox" id="terms" v-model="form.agreeTerms" required />
          <label for="terms">I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></label>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRequest",
  data() {
    return {
      form: {
        fullName: "",
        totalStudents: "",
        instituteName: "",
        instituteAddress: "",
        state: "",
        country: "Bangladesh",
        phone: "",
        message: "",
        agreeTerms: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.form.agreeTerms) {
        alert("Please agree to the Terms & Conditions.");
        return;
      }
      console.log("Form Submitted:", this.form);
      alert("Demo request sent successfully!");
    },
  },
};
</script>

<style scoped>
.demo-request-page {
  max-width: 800px;
  margin: 50px auto;
  font-family: 'Inter', sans-serif;
  background: #f0f2f5;
  padding: 20px;
  border-radius: 12px;
}

.form-container {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-weight: 700;
}

p {
  text-align: center;
  margin-bottom: 30px;
  color: #555;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.form-group {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.form-group.full-width {
  flex: 100%;
}

input, select, textarea {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  background: #f9f9f9;
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  border-color: #007bff;
  background: #fff;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

label {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #fff;
  padding: 0 4px;
  color: #999;
  pointer-events: none;
  transition: 0.2s ease all;
}

input:focus + label,
input:not(:placeholder-shown) + label,
select:focus + label,
select:not([value=""]) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  top: -10px;
  left: 12px;
  font-size: 13px;
  color: #007bff;
}

.phone-group label {
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 13px;
  color: #007bff;
  background: #fff;
  padding: 0 4px;
}

.phone-wrapper {
  display: flex;
  align-items: center;
}

.country-code {
  padding: 14px;
  background: #e9ecef;
  border: 1.5px solid #d1d5db;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  pointer-events: none;
}

.phone-wrapper input {
  border-radius: 0 8px 8px 0;
  border: 1.5px solid #d1d5db;
  border-left: none;
  flex: 1;
  padding: 14px;
  font-size: 16px;
  outline: none;
  background: #f9f9f9;
}

.phone-wrapper input:focus {
  border-color: #007bff;
  background: #fff;
}

.terms {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.terms input {
  width: auto;
}

.terms label {
  margin-left: 10px;
  font-weight: 400;
  color: #555;
}

.terms a {
  color: #007bff;
  text-decoration: none;
}

.terms a:hover {
  text-decoration: underline;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
