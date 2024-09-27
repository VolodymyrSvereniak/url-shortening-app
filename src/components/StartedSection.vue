<template>
  <section class="wrapper">
    <div class="description">
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </p>
      <button>Get Started</button>
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
.wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/illustration-working.svg');
  background-repeat: no-repeat;
  background-position: 100% 30%;

  .description {
    padding-top: 100px;
    width: 50%;

    h1 {
      font-size: 80px;
      line-height: 1.2;
    }

    p {
      width: 500px;
      color: hsl(257, 7%, 63%);
      font-weight: 500;
    }

    button {
      border: none;
      margin-top: 3.125rem;
      font-weight: 700;
      color: hsl(257, 7%, 63%);
      cursor: pointer;
      font-size: 18px;
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
