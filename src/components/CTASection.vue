<template>
  <section class="container">
    <h1 class="cta">Boost your links today</h1>
    <button class="cta-button" @click="scrollToTarget()">Get started</button>
  </section>
</template>

<script>
export default {
  props: {
    scrollToTarget: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 30vh;
  background-image: url('../assets/images/bg-boost-desktop.svg');
  background-size: cover;
  background-color: hsl(257, 27%, 26%);

  .cta {
    font-size: 2em;
  }

  .cta-button {
    border: none;
    margin-top: 20px;
    font-weight: 700;
    cursor: pointer;
    background-color: hsl(180, 66%, 49%);
    padding: 12px 30px;
    border-radius: 20px;
    color: white;
    outline: none;

    &:hover {
      background-color: hsl(180, 55%, 67%);
    }
  }

  @media (max-width: 768px) {
    background-image: url('../assets/images/bg-boost-mobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    font-size: 15px;
  }
}
</style>
