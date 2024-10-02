<template>
  <section class="container">
    <shortened-url-item />
    <div class="statistics-wrapper">
      <div class="statistics-info">
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
import StatisticsDetails from './StatisticsDetails.vue';
import ShortenedUrlItem from './ShortenedUrlItem.vue';

export default {
  components: {
    StatisticsDetails,
    ShortenedUrlItem
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #eff1f7;

  .statistics-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    padding: 120px;

    .statistics-info {
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
}
</style>
