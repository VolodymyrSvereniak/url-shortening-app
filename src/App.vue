<template>
  <div class="app">
    <div class="header-wrapper">
      <app-header />
      <started-section :scrollToTarget="scrollToTarget" />
    </div>
    <input-element ref="inputRef" />
    <statistics-section />
    <c-t-a-section :scrollToTarget="scrollToTarget" />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import StartedSection from '@/components/StartedSection.vue';
import InputElement from '@/components/InputElement.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import CTASection from '@/components/CTASection.vue';
import AppFooter from '@/components/AppFooter.vue';
import scrollIntoView from '@/features/scrollIntoView';

export default {
  components: {
    AppHeader,
    StartedSection,
    InputElement,
    StatisticsSection,
    CTASection,
    AppFooter
  },
  methods: {
    scrollToTarget() {
      scrollIntoView(this.$refs.inputRef.$refs.inputRef);
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;

  .header-wrapper {
    width: 80vw;
    height: 100vh;
    margin: 2.1875rem 4rem;

    @media (max-width: 768px) {
      max-width: 30vw;
      margin: 19px 1.2rem;
    }
  }
}
</style>
