<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <h2 class="title">Advanced Statistics</h2>
        <p class="description">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <statistics-details />
    </div>
  </section>
</template>

<script>
import StatisticsDetails from './StatisticsDetails.vue'

export default {
  components: {
    StatisticsDetails
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #eff1f7;
  height: 100vh;
  padding-top: 150px;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    text-align: center;

    .title {
      font-weight: 700;
      font-size: 40px;
    }

    .description {
      color: hsl(257, 7%, 63%);
    }
  }
}
</style>
