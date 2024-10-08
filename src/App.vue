<template>
  <div class="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
}
</style>
