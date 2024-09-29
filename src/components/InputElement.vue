<template>
  <form class="container">
    <div class="wrapper">
      <input class="url-input" type="text" placeholder="Shorten a link here..." />
      <button class="submit-button" type="submit">Shorten It!</button>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 80vw;
  height: 9.375rem;
  z-index: 111;
  position: relative;
  left: 10%;
  bottom: -4.6875rem;
  background-color: hsl(255, 11%, 22%);
  border-radius: 10px;
  background-image: url('../assets/images/bg-shorten-desktop.svg');
  background-size: cover;

  .wrapper {
    display: flex;
    padding: 0 5%;
    gap: 3%;
    align-items: center;
    width: 100%;

    .url-input {
      color: hsl(257, 7%, 63%);
      border-radius: 10px;
      outline: none;
      border: none;
      width: 80%;
      padding: 1.5%;
    }

    .submit-button {
      border: none;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      background-color: hsl(180, 66%, 49%);
      padding: 1.5% 3.5%;
      white-space: nowrap;
      color: white;
      outline: none;

      &:hover {
        background-color: hsl(180, 55%, 67%);
      }
    }
  }
}
</style>
