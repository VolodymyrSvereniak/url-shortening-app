<template>
  <div>
    <form class="form-container" @submit.prevent="createNewUrl">
      <div class="wrapper">
        <input
          :value="inputValue"
          @input="updateInput"
          class="url-input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button class="submit-button" type="submit">Shorten It!</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations('shortenUrl', ['setInputValue', 'createNewUrl']),
    updateInput(event) {
      this.setInputValue(event.target.value)
    }
  },
  computed: {
    ...mapState('shortenUrl', ['inputValue']),
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  width: 80vw;
  height: 9.375rem;
  z-index: 111;
  position: relative;
  left: 10%;
  bottom: -4.6875rem;
  background-color: hsl(257, 27%, 26%);
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
