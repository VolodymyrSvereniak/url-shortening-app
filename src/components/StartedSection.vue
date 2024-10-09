<template>
  <div class="container">
    <section class="wrapper" ref="started">
      <div class="about">
        <h1 class="title">More than just shorter links</h1>
        <p class="description">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button @click="scrollToTarget()" class="cta-button">Get Started</button>
      </div>
    </section>
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
  width: 80vw;
  margin: 0 4rem;

  .wrapper {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/illustration-working.svg');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 100% 30%;

    .about {
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

      .cta-button {
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

      .about {
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

        .cta-button {
          margin: 0;
          padding: 15px 45px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 30vw;
    margin: 19px 1.2rem;

    .wrapper {
      .about {
        .cta-button {
          cursor: default;
        }
      }
    }
  }
}
</style>
