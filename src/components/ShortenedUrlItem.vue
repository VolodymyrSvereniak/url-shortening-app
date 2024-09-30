<template>
  <div class="container">
    <div class="wrapper">
      <a href="#" class="default-url">https://google.com</a>
      <div class="shortened-url">
        <a href="#" class="link">https://google.com</a>
        <button class="copy-button">Copy</button>
      </div>
    </div>
    <div class="wrapper">
      <a href="#" class="default-url">https://google.com</a>
      <div class="shortened-url">
        <a href="#" class="link">https://google.com</a>
        <button class="copy-button">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 120px;
  font-weight: 500;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 80vw;
    height: 60px;
    border: none;
    background-color: white;

    .default-url {
      text-decoration: none;
      outline: none;
    }

    .shortened-url {
      display: flex;
      align-items: center;

      .link {
        padding-right: 1.875rem;
        color: hsl(180, 66%, 49%);
        text-decoration: none;
        outline: none;
      }

      .copy-button {
        border: none;
        border-radius: 5px;
        font-weight: 500;
        padding: 4px 25px;
        cursor: pointer;
        background-color: hsl(180, 66%, 49%);
        color: white;
        outline: none;

        &:hover {
          background-color: hsl(180, 55%, 67%);
        }
      }
    }
  }
}
</style>
