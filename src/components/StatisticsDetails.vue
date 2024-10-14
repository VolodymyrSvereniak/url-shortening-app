<template>
  <div class="statistics-group">
    <div
      class="wrapper"
      v-for="(statistic, index) in statistics"
      :key="statistic.title"
      :class="index === 1 ? 'middle-block' : ''"
      :style="{ marginTop: !isMobileSize ? 60 * index + 'px' : '' }"
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
    return {
      isMobileSize: null
    };
  },
  methods: {
    isMobileVersion(event) {
      this.isMobileSize = event.matches;
    }
  },
  computed: {
    ...mapState('statistics', ['statistics']),
    matchSize() {
      return window.matchMedia('(max-width: 900px)');
    }
  },
  mounted() {
    this.isMobileVersion(this.matchSize);

    this.matchSize.addEventListener('change', this.isMobileVersion);
  },
  unmounted() {
    this.matchSize.removeEventListener('change', this.isMobileVersion);
  }
};
</script>

<style lang="scss" scoped>
.statistics-group {
  display: flex;
  align-items: center;
  width: 80vw;
  gap: 5vw;

  .middle-block {
    &::before {
      content: '';
      position: absolute;
      right: 100%;
      bottom: 60%;
      width: 21.5%;
      color: red;
      border: 0.25rem solid #2ccfd0;
    }

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      bottom: 60%;
      width: 35%;
      border: 0.25rem solid #2ccfd0;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    height: auto;
    padding: 3.125rem 1.25rem 1.875rem;
    background-color: white;
    border-radius: 5px;
    position: relative;

    .image-wrapper {
      position: absolute;
      left: 2vw;
      width: 4.5rem;
      top: 0;
      transform: translate(20%, -50%);
      height: 80px;
      border-radius: 50%;
      background-color: hsl(257, 27%, 26%);
      padding: 0.9375rem;

      .image {
        width: 100%;
        height: 100%;
      }
    }

    .title {
      padding: 20px 0;
      align-self: start;
    }
  }

  .description {
    font-size: 17px;
    color: hsl(257, 7%, 63%);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10vh;
    margin: 0;

    .middle-block {
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        width: 0;
        height: 10vh;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 0;
        height: 10vh;
      }
    }

    .wrapper {
      width: 80vw;
      text-align: center;

      .title {
        margin: 0 auto;
      }

      .image-wrapper {
        z-index: 111;
        left: calc(50% - 2.9rem);
      }
    }
  }
}
</style>
