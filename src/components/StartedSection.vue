<template>
  <section class="container" ref="started">
    <div class="wrapper">
      <h1 class="title">More than just shorter links</h1>
      <p class="description">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <button @click="scrollToTarget()" class="submit-button">Get Started</button>
    </div>
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
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/illustration-working.svg');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 100% 30%;

  .wrapper {
    padding-top: 100px;
    height: 100vh;
    width: 50%;

    .title {
      font-size: 80px;
      line-height: 1.2;
    }

    .description {
      width: 500px;
      color: hsl(257, 7%, 63%);
      font-weight: 500;
    }

    .submit-button {
      border: none;
      margin-top: 3.125rem;
      font-weight: 700;
      cursor: pointer;
      background-color: hsl(180, 66%, 49%);
      padding: 15px 30px;
      border-radius: 20px;
      color: white;
      outline: none;

      &:hover {
        background-color: hsl(180, 55%, 67%);
      }
    }
  }

  @media (max-width: 768px) {
    background-size: 540px;
    background-position: 0 0;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 250px;
      gap: 30px;
      text-align: center;
      flex-direction: column;
      width: 90vw;
      height: auto;

      .title {
        font-size: 45px;
      }

      .description {
        width: 80vw;
      }
  
      .submit-button {
        margin: 0;
        padding: 15px 45px;
      }
    }
  }
}
</style>
