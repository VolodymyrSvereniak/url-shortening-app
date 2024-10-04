<template>
  <div class="container">
    <h1>Boost your links today</h1>
    <button class="submit-button" @click="scrollToTarget()">Get started</button>
  </div>
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

  .submit-button {
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
}
</style>
