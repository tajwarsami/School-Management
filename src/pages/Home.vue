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
    <FeatureGrid class="section-grey" />
    <TemplateShowcase class="section-white" />
    <InstitutionTabs class="section-grey" />
    <MobileEcosystem class="section-white" />
    <PricingSection class="section-grey" />
    <ClientTicker class="section-white" />
    <ValueProposition class="section-grey" />
    <GlobalMap class="section-white" />
    <StatsCounter class="section-grey" />
    <CustomerExperience class="section-white" />
    <FaqSection class="section-grey" />
    <CtaSection class="section-white" />
    <Footer class="section-dark" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.section-white {
  background-color: #FFFFFF;
}

.section-grey {
  background-color: #F9FAFB;
}

.section-dark {
  background-color: #2D3E50;
}
</style>
