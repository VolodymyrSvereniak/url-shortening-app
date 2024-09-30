<template>
  <div class="app">
    <div class="header-wrapper">
      <app-header />
      <started-section />
    </div>
    <input-element />
    <statistics-section />
    <cta-section />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import StartedSection from '@/components/StartedSection.vue'
import InputElement from '@/components/InputElement.vue'
import StatisticsSection from './components/StatisticsSection.vue'
import CtaSection from './components/CtaSection.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    StartedSection,
    InputElement,
    StatisticsSection,
    CtaSection,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;

  .header-wrapper {
    width: 80vw;
    height: 100vh;
    margin: 2.1875rem 4rem;
  }
}
</style>
