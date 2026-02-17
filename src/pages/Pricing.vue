<script setup>
import PricingSection from '../components/PricingSection.vue'
import PricingComparison from '../components/PricingComparison.vue'
import CtaSection from '../components/CtaSection.vue'
import pricingFAQ from '../components/pricingFAQ.vue';
</script>

<template>
  <main class="pricing-page">
    <PricingSection />
    <PricingComparison />
    <pricingFAQ/>  
    <CtaSection />
  </main>
</template>

<style scoped>
</style>
