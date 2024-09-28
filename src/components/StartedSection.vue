<template>
  <section class="container">
    <div class="wrapper">
      <h1 class="title">More than just shorter links</h1>
      <p class="description">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <button class="submit-button">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/illustration-working.svg');
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
}
</style>
