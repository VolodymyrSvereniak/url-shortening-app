<template>
  <div>
    <div class="header-wrapper">
      <app-header />
      <started-section />
    </div>
    <input-element />
    <statistics-section />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import StartedSection from '@/components/StartedSection.vue'
import InputElement from '@/components/InputElement.vue'
import StatisticsSection from './components/StatisticsSection.vue'

export default {
  components: {
    AppHeader,
    StartedSection,
    InputElement,
    StatisticsSection
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 80vw;
  height: 100vh;
  margin: 2.1875rem 4rem;
}
</style>
