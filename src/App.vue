<template>
  <div class="app">
    <app-header />
    <main-view />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import MainView from './views/MainView.vue';

export default {
  components: {
    AppHeader,
    MainView
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
}
</style>
