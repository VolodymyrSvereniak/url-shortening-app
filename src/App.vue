<template>
  <div>
    <app-header />
    <started-section />
    <input-element/>
    <statistics-section/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import StartedSection from '@/components/StartedSection.vue'
import InputElement from '@/components/InputElement.vue';
import StatisticsSection from './components/StatisticsSection.vue';

export default {
  components: {
    AppHeader,
    StartedSection,
    InputElement,
    StatisticsSection
  }
}
</script>