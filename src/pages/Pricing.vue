<script setup>
import PricingSection from '../components/PricingSection.vue'
import PricingComparison from '../components/PricingComparison.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="pricing-page">
    <PricingSection />
    <PricingComparison />
    <FaqSection />
    <CtaSection />
    <Footer />
  </main>
</template>

<style scoped>
.pricing-page {
  display: flex;
  flex-direction: column;
}
</style>
