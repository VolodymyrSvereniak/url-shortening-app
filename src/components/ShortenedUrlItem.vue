<template>
  <div class="container">
    <div class="wrapper" v-for="newUrlItem in newUrlItemsList" :key="newUrlItem.defaultUrl">
      <a href="#" class="default-url">{{ newUrlItem.defaultUrl }}</a>
      <div class="shortened-url">
        <a href="#" class="link">{{ newUrlItem.shortenedUrl }}</a>
        <button class="copy-button">Copy</button>
        <button class="delete-button" @click="deleteUrl(newUrlItem.defaultUrl)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations('shortenUrl', ['deleteUrl'])
  },
  computed: {
    ...mapState('shortenUrl', ['newUrlItemsList'])
  },
  watch: {
    newUrlItemsList: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true
    }
  }
};
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
      color: #551a8b;
      overflow: hidden;

      &:hover {
        color: #9f59e0;
      }
    }

    .shortened-url {
      display: flex;
      align-items: center;
      margin-left: 20px;

      .link {
        padding-right: 1.875rem;
        color: hsl(180, 66%, 49%);
        text-decoration: none;
        outline: none;

        &:hover {
          color: hsl(180, 55%, 67%);
        }
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

      .delete-button {
        border: none;
        border-radius: 5px;
        font-weight: 500;
        margin-left: 20px;
        padding: 4px 25px;
        cursor: pointer;
        background-color: #551a8b;
        color: white;
        outline: none;

        &:hover {
          background-color: #9f59e0;
        }
      }
    }
  }
}
</style>
