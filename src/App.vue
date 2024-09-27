<template>
  <div>
    <header-component />
    <started-section />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import StartedSection from '@/components/StartedSection.vue'

export default {
  components: {
    HeaderComponent,
    StartedSection
  }
}
</script>