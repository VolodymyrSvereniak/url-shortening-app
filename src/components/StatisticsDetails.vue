<template>
  <div class="statistics-container">
    <div
      class="wrapper"
      v-for="(statistic, index) in statistics"
      :key="statistic.title"
      :class="index === 1 ? 'middle-block' : ''"
      :style="{ marginTop: 60 * index + 'px' }"
    >
      <div class="image-wrapper">
        <img class="image" :src="statistic.img" :alt="statistic.img" />
      </div>
      <h3 class="title">{{ statistic.title }}</h3>
      <p class="description">{{ statistic.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('statistics', ['statistics'])
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.statistics-container {
  display: flex;
  align-items: center;
  width: 80vw;
  gap: 10%;
  overflow: hidden;

  .middle-block {
    &::before {
      content: '';
      position: absolute;
      right: 100%;
      bottom: 60%;
      width: 35%;
      border: 4px solid #2ccfd0;
    }

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      bottom: 60%;
      width: 35%;
      border: 4px solid #2ccfd0;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 240px;
    padding: 50px 30px 30px;
    background-color: white;
    border-radius: 5px;
    position: relative;

    .image-wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      .image {
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 80px;
        height: 80px;
        border: 1px solid;
        border-radius: 50%;
        background-color: hsl(257, 27%, 26%);
        padding: 15px;
      }
    }

    .title {
      padding: 20px 0;
      align-self: start;
    }
  }

  .description {
    font-size: 14px;
    color: hsl(257, 7%, 63%);
  }
}
</style>
