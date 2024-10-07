<template>
  <div>
    <started-section :scrollToTarget="scrollToTarget" />
    <input-element ref="inputRef" />
    <statistics-section />
    <c-t-a-section :scrollToTarget="scrollToTarget" />
    <app-footer />
  </div>
</template>

<script>
import StartedSection from '@/components/StartedSection.vue';
import InputElement from '@/components/InputElement.vue';
import StatisticsSection from '@/components/StatisticsSection.vue';
import CTASection from '@/components/CTASection.vue';
import AppFooter from '@/components/AppFooter.vue';
import scrollIntoView from '@/features/scrollIntoView';

export default {
  components: {
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
