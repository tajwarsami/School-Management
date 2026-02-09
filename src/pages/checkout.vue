<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Check, ArrowLeft, CreditCard, Building2, User, Mail, Phone, MapPin } from 'lucide-vue-next'
import { plans as initialPlans, studentRanges } from '../data/pricing'

const route = useRoute()
const router = useRouter()

const planName = ref(route.query.plan || '')
const selectedRange = ref(route.query.range || '')
const billingType = ref(route.query.billing || 'monthly')

const formData = ref({
  institutionName: '',
  contactPerson: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  paymentMethod: 'bank'
})

const selectedPlan = computed(() => {
  return initialPlans.find(p => p.name.toLowerCase() === planName.value.toLowerCase())
})

const rangeDetails = computed(() => {
  return studentRanges.find(r => r.value === selectedRange.value)
})

const subscriptionPrice = computed(() => {
  if (!selectedPlan.value || selectedPlan.value.custom) return 0
  return selectedPlan.value.prices[billingType.value][selectedRange.value]
})

const setupFee = computed(() => {
  if (!selectedPlan.value || selectedPlan.value.custom) return 0
  return selectedPlan.value.oneTimeCharge
})

const subtotal = computed(() => {
  return subscriptionPrice.value + setupFee.value
})

const vat = computed(() => {
  return Math.round(subtotal.value * 0.05)
})

const total = computed(() => {
  return subtotal.value + vat.value
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-BD').format(price)
}

const goBack = () => {
  router.push('/pricing')
}

const handleSubmit = () => {
  if (!formData.value.institutionName || !formData.value.contactPerson || 
      !formData.value.email || !formData.value.phone) {
    alert('Please fill in all required fields')
    return
  }

  console.log('Order submitted:', {
    plan: selectedPlan.value,
    range: rangeDetails.value,
    billing: billingType.value,
    pricing: {
      subscription: subscriptionPrice.value,
      setup: setupFee.value,
      vat: vat.value,
      total: total.value
    },
    customer: formData.value
  })

  alert('Order submitted successfully! We will contact you shortly.')
  router.push('/')
}

onMounted(() => {
  if (!planName.value || !selectedPlan.value) {
    router.push('/pricing')
  }
})
</script>

<template>
  <section class="checkout-section">
    <div class="container">
      <button class="back-button" @click="goBack">
        <ArrowLeft :size="20" />
        Back to Pricing
      </button>

      <div class="checkout-header">
        <h1 class="page-title">Complete Your Order</h1>
        <p class="page-subtitle">You're one step away from transforming your institution</p>
      </div>

      <div class="checkout-grid">
        <div class="order-summary">
          <div class="summary-card">
            <h2 class="summary-title">Order Summary</h2>
            
            <div class="plan-details">
              <div class="plan-header">
                <div class="plan-icon">{{ selectedPlan?.icon }}</div>
                <div>
                  <h3 class="plan-name">{{ selectedPlan?.name }}</h3>
                  <p class="plan-desc">{{ selectedPlan?.description }}</p>
                </div>
              </div>

              <div class="plan-info">
                <div class="info-row">
                  <span class="info-label">Student Range:</span>
                  <span class="info-value">{{ rangeDetails?.label }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Billing Cycle:</span>
                  <span class="info-value">{{ billingType === 'monthly' ? 'Monthly' : 'Yearly (10% off)' }}</span>
                </div>
              </div>
            </div>

            <div class="price-breakdown">
              <h3 class="breakdown-title">Price Breakdown</h3>
              
              <div class="price-row">
                <span>Subscription ({{ billingType }})</span>
                <span class="price-value">৳{{ formatPrice(subscriptionPrice) }}</span>
              </div>
              
              <div class="price-row">
                <span>One-time Setup Fee</span>
                <span class="price-value">৳{{ formatPrice(setupFee) }}</span>
              </div>
              
              <div class="price-row subtotal">
                <span>Subtotal</span>
                <span class="price-value">৳{{ formatPrice(subtotal) }}</span>
              </div>
              
              <div class="price-row">
                <span>VAT (5%)</span>
                <span class="price-value">৳{{ formatPrice(vat) }}</span>
              </div>
              
              <div class="price-row total">
                <span>Total Amount</span>
                <span class="price-value">৳{{ formatPrice(total) }}</span>
              </div>
            </div>

            <div class="features-included">
              <h3 class="features-title">What's Included</h3>
              <ul class="features-list">
                <li v-for="(feature, index) in selectedPlan?.features?.slice(0, 5)" :key="index">
                  <Check :size="16" class="check-icon" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="order-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-section">
              <h2 class="form-title">
                <Building2 :size="24" />
                Institution Details
              </h2>
              
              <div class="form-group">
                <label for="institutionName">Institution Name *</label>
                <input
                  id="institutionName"
                  v-model="formData.institutionName"
                  type="text"
                  placeholder="Enter your institution name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="address">Address *</label>
                <input
                  id="address"
                  v-model="formData.address"
                  type="text"
                  placeholder="Street address"
                  required
                />
              </div>

              <div class="form-group">
                <label for="city">City *</label>
                <input
                  id="city"
                  v-model="formData.city"
                  type="text"
                  placeholder="City name"
                  required
                />
              </div>
            </div>

            <div class="form-section">
              <h2 class="form-title">
                <User :size="24" />
                Contact Information
              </h2>
              
              <div class="form-group">
                <label for="contactPerson">Contact Person *</label>
                <input
                  id="contactPerson"
                  v-model="formData.contactPerson"
                  type="text"
                  placeholder="Full name"
                  required
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-section">
              <h2 class="form-title">
                <CreditCard :size="24" />
                Payment Method
              </h2>
              
              <div class="payment-methods">
                <label class="payment-option">
                  <input
                    v-model="formData.paymentMethod"
                    type="radio"
                    name="payment"
                    value="bank"
                  />
                  <div class="payment-card">
                    <div class="payment-icon">🏦</div>
                    <div>
                      <div class="payment-name">Bank Transfer</div>
                      <div class="payment-desc">Direct bank transfer</div>
                    </div>
                  </div>
                </label>

                <label class="payment-option">
                  <input
                    v-model="formData.paymentMethod"
                    type="radio"
                    name="payment"
                    value="bkash"
                  />
                  <div class="payment-card">
                    <div class="payment-icon">📱</div>
                    <div>
                      <div class="payment-name">bKash/Nagad</div>
                      <div class="payment-desc">Mobile banking</div>
                    </div>
                  </div>
                </label>

                <label class="payment-option">
                  <input
                    v-model="formData.paymentMethod"
                    type="radio"
                    name="payment"
                    value="card"
                  />
                  <div class="payment-card">
                    <div class="payment-icon">💳</div>
                    <div>
                      <div class="payment-name">Credit/Debit Card</div>
                      <div class="payment-desc">Visa, Mastercard</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn-secondary" @click="goBack">
                Cancel
              </button>
              <button type="submit" class="btn-primary">
                Place Order
                <span class="arrow">→</span>
              </button>
            </div>

            <p class="form-note">
              * By placing this order, you agree to our terms and conditions. 
              We'll contact you within 24 hours to confirm your order and arrange payment.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkout-section {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  padding: 2rem 1.5rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  color: #374151;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 2rem;
}

.back-button:hover {
  background: #f9fafb;
  border-color: #00529b;
  color: #00529b;
}

.checkout-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #00529b 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  align-items: start;
}

.order-summary {
  position: sticky;
  top: 2rem;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}

.summary-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.plan-details {
  padding-bottom: 1.5rem;
  border-bottom: 2px dashed #e5e7eb;
  margin-bottom: 1.5rem;
}

.plan-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.plan-icon {
  font-size: 3rem;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.plan-desc {
  font-size: 0.875rem;
  color: #6b7280;
}

.plan-info {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 10px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.info-label {
  color: #6b7280;
  font-size: 0.875rem;
}

.info-value {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.875rem;
}

.price-breakdown {
  padding-bottom: 1.5rem;
  border-bottom: 2px dashed #e5e7eb;
  margin-bottom: 1.5rem;
}

.breakdown-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  font-size: 0.95rem;
  color: #374151;
}

.price-row.subtotal {
  border-top: 1px solid #e5e7eb;
  margin-top: 0.5rem;
  padding-top: 1rem;
  font-weight: 600;
}

.price-row.total {
  background: linear-gradient(135deg, #00529b 0%, #0066c0 100%);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.price-value {
  font-weight: 600;
}

.features-included {
  margin-top: 1.5rem;
}

.features-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: #374151;
  font-size: 0.875rem;
}

.check-icon {
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.order-form {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
}

.form-section {
  margin-bottom: 2.5rem;
}

.form-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f3f4f6;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #00529b;
  box-shadow: 0 0 0 3px rgba(0, 82, 155, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.payment-methods {
  display: grid;
  gap: 1rem;
}

.payment-option {
  display: block;
  cursor: pointer;
}

.payment-option input[type="radio"] {
  display: none;
}

.payment-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: #f9fafb;
}

.payment-option input[type="radio"]:checked + .payment-card {
  border-color: #00529b;
  background: linear-gradient(135deg, rgba(0, 82, 155, 0.05) 0%, rgba(0, 102, 192, 0.05) 100%);
}

.payment-icon {
  font-size: 2rem;
}

.payment-name {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.payment-desc {
  font-size: 0.85rem;
  color: #6b7280;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-secondary,
.btn-primary {
  flex: 1;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-secondary {
  background: white;
  border: 2px solid #e5e7eb;
  color: #374151;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.btn-primary {
  background: linear-gradient(135deg, #00529b 0%, #0066c0 100%);
  border: none;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 82, 155, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(0, 82, 155, 0.4);
  transform: translateY(-2px);
}

.arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .arrow {
  transform: translateX(4px);
}

.form-note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #6b7280;
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .checkout-grid {
    grid-template-columns: 1fr;
  }

  .order-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .checkout-section {
    padding: 1.5rem 1rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .order-form {
    padding: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>