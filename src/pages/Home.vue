<script setup>
import HeroSection from '../components/HeroSection.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import TemplateShowcase from '../components/TemplateShowcase.vue'
import InstitutionTabs from '../components/InstitutionTabs.vue'
import MobileEcosystem from '../components/MobileEcosystem.vue'
import PricingSection from '../components/PricingSection.vue'
import ClientTicker from '../components/ClientTicker.vue'
import ValueProposition from '../components/ValueProposition.vue'
import GlobalMap from '../components/GlobalMap.vue'
import StatsCounter from '../components/StatsCounter.vue'
import CustomerExperience from '../components/CustomerExperience.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <HeroSection />
    <FeatureGrid />
    <TemplateShowcase />
    <InstitutionTabs />
    <MobileEcosystem />
    <PricingSection />
    <ClientTicker />
    <ValueProposition />
    <GlobalMap />
    <StatsCounter />
    <CustomerExperience />
    <FaqSection />
    <CtaSection />
    <Footer />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
