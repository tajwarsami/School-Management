<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureGrid from './components/FeatureGrid.vue'
import TemplateShowcase from './components/TemplateShowcase.vue'
import InstitutionTabs from './components/InstitutionTabs.vue'
import MobileEcosystem from './components/MobileEcosystem.vue'
import PricingSection from './components/PricingSection.vue'
import ClientTicker from './components/ClientTicker.vue'
import ValueProposition from './components/ValueProposition.vue'
import GlobalMap from './components/GlobalMap.vue'
import StatsCounter from './components/StatsCounter.vue'
import Testimonials from './components/Testimonials.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <NavBar />
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
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
