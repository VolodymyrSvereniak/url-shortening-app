<template>
  <div class="container">
    <h1>Sorry! This page does not exist</h1>
    <button @click="returnToHomePage()">Go Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnToHomePage() {
      this.$store.commit('setAsActive', '');
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 0 4rem;
  align-items: start;
  height: 80vh;
  background-image: url('@/assets/images/404.svg');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 90% 30%;

  button {
    border: none;
    margin-top: 3.125rem;
    font-weight: 700;
    cursor: pointer;
    background-color: hsl(257, 27%, 26%);
    padding: 15px 30px;
    border-radius: 20px;
    color: white;
    outline: none;

    &:hover {
      background-color: hsl(258, 27%, 50%);
    }
  }

  @media (max-width: 786px) {
    margin: 0;
    background-size: 90%;
    background-position: 50% 0;
    justify-content: flex-end;
    text-align: center;

    button {
      align-self: center;
    }
  }
}
</style>
