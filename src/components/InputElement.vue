<template>
  <div>
    <form class="form-container" @submit.prevent="getUpdatedUrl" ref="inputRef">
      <div class="wrapper" :class="{ invalidMsg: !urlValidator && inputValue !== '' }">
        <input
          :value="inputValue"
          @input="updateInput"
          class="url-input"
          :class="{ invalidValue: !urlValidator && inputValue !== '' }"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button class="submit-button" type="submit">Shorten It!</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

export default {
  props: {
    inputRef: {
      type: HTMLElement
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations('shortenUrl', ['setInputValue', 'handleValidation']),
    ...mapActions('shortenUrl', ['getUpdatedUrl']),
    updateInput(event) {
      this.setInputValue(event.target.value);
    }
  },
  computed: {
    ...mapState('shortenUrl', ['inputValue', 'isValid']),
    ...mapGetters('shortenUrl', ['validUrl']),
    urlValidator() {
      return this.validUrl.test(this.inputValue);
    }
  },
  updated() {
    console.log(this.urlValidator);
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  width: 80vw;
  height: 152px;
  z-index: 111;
  position: relative;
  left: 10%;
  bottom: -77px;
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
    position: relative;

    &.invalidMsg {
      &::before {
        content: 'Please add a link';
        font-size: 14px;
        color: hsl(0, 87%, 67%);
        position: absolute;
        bottom: 15%;
      }
    }

    .url-input {
      color: hsl(257, 7%, 63%);
      border-radius: 10px;
      outline: none;
      border: none;
      width: 80%;
      padding: 1.5%;
    }

    .invalidValue {
      border: 4px solid hsl(0, 87%, 67%);
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

  @media (max-width: 768px) {
    width: 90vw;
    left: 5%;
    background-image: url('../assets/images/bg-shorten-mobile.svg');
    padding: 0;
    height: 200px;

    .wrapper {
      flex-direction: column;
      justify-content: center;
      gap: 25%;
      padding: 30px;

      &.invalidMsg {
        &::before {
          content: 'Please add a link';
          font-size: 14px;
          color: hsl(0, 87%, 67%);
          position: absolute;
          left: 8%;
          bottom: 44%;
        }
      }

      .url-input {
        padding: 10px;
        width: 100%;

        &::placeholder {
          opacity: 0.5;
        }
      }

      .submit-button {
        padding: 10px;
        width: 100%;
        cursor: default;
      }
    }
  }
}
</style>
