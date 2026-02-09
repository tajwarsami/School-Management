<script setup>
import PricingSection from '../components/PricingSection.vue'
import PricingComparison from '../components/PricingComparison.vue'
import CtaSection from '../components/CtaSection.vue'
</script>

<template>
  <main class="pricing-page">
    <PricingSection />
    <PricingComparison />
    <CtaSection />
  </main>
</template>

<style scoped>
.pricing-page {
  display: flex;
  flex-direction: column;
}
</style>
