<script setup>
import { Check, X } from 'lucide-vue-next'
import { plans } from '../data/pricing'

const comparisonPlans = plans.filter(p => !p.custom)

const basicPlan = plans.find(p => p.name === 'Basic')
const standardPlan = plans.find(p => p.name === 'Standard')
const premiumPlan = plans.find(p => p.name === 'Premium')

const basicFeatures = basicPlan.features
const standardUniqueFeatures = standardPlan.features.filter(f => !f.startsWith('Everything'))
const premiumUniqueFeatures = premiumPlan.features.filter(f => !f.startsWith('Everything'))

const allFeatures = [
    ...basicFeatures,
    ...standardUniqueFeatures,
    ...premiumUniqueFeatures
]

const featuresMap = {
    'Basic': new Set(basicFeatures),
    'Standard': new Set([...basicFeatures, ...standardUniqueFeatures]),
    'Premium': new Set([...basicFeatures, ...standardUniqueFeatures, ...premiumUniqueFeatures])
}

const hasFeature = (plan, feature) => {
    return featuresMap[plan.name]?.has(feature) ?? false
}
</script>

<template>
  <section class="comparison-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Compare Plans</h2>
            <p class="section-subtitle">Find the perfect fit for your institution's needs</p>
        </div>

        <div class="table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-col">Features</th>
                        <th v-for="plan in comparisonPlans" :key="plan.name" class="plan-header">
                            <span class="plan-name">{{ plan.name }}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="feature in allFeatures" :key="feature">
                        <td class="feature-name">{{ feature }}</td>
                        <td v-for="plan in comparisonPlans" :key="plan.name" class="feature-status">
                            <div class="status-icon">
                                <Check v-if="hasFeature(plan, feature)" class="check-icon" :size="20" />
                                <X v-else class="x-icon" :size="20" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </section>
</template>

<style scoped>
.comparison-section {
    padding: 6rem 1.5rem;
    background-color: var(--color-bg-body);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.section-subtitle {
    font-size: 1rem;
    color: #64748b;
}

.table-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    overflow-x: auto;
    background: var(--color-card-dark);
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
}

.feature-col {
    text-align: left;
    padding: 1.5rem;
    width: 40%;
    font-weight: 600;
    color: var(--color-text-card);
    background-color: var(--color-card-dark);
}

.plan-header {
    padding: 1.5rem;
    text-align: center;
    background-color: var(--color-card-dark);
}

.plan-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text-card);
}

tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

.feature-name {
    padding: 1rem 1.5rem;
    color: var(--color-text-card-muted);
    font-weight: 500;
    font-size: 0.95rem;
}

.feature-status {
    padding: 1rem;
    text-align: center;
}

.status-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.check-icon {
    color: var(--color-primary);
}

.x-icon {
    color: #cbd5e1;
}

@media (max-width: 768px) {
    .feature-name {
        padding: 0.75rem 1rem;
        font-size: 0.85rem;
    }
    
    .feature-col, .plan-header {
        padding: 1rem;
    }
}
</style>
