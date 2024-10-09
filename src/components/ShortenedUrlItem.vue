<template>
  <div class="container">
    <div class="wrapper" v-for="newUrlItem in newUrlItemsList" :key="newUrlItem.defaultUrl">
      <a class="default-url" :href="newUrlItem.defaultUrl" target="_blank">{{
        newUrlItem.defaultUrl
      }}</a>
      <div class="shortened-url">
        <a class="link" :href="newUrlItem.shortenedUrl" target="_blank">{{
          newUrlItem.shortenedUrl
        }}</a>
        <button
          class="copy-button"
          :class="{ copied: newUrlItem.isCopied }"
          @click="copyNewUrl(newUrlItem.shortenedUrl)"
          @touchstart.passive="copyNewUrl(newUrlItem.shortenedUrl)"
        >
          {{ isCopiedStatus(newUrlItem.isCopied) }}
        </button>
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
    ...mapMutations('shortenUrl', ['deleteUrl', 'setAsCopied', 'setUrlItemsFromLS']),
    copyNewUrl(shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);

      this.setAsCopied(shortenedUrl);
    },
    isCopiedStatus(copied) {
      if (copied) {
        return 'Copied!';
      } else {
        return 'Copy';
      }
    }
  },
  computed: {
    ...mapState('shortenUrl', ['newUrlItemsList'])
  },
  watch: {
    newUrlItemsList: {
      handler(newValue) {
        localStorage.setItem('URL-items', JSON.stringify(this.newUrlItemsList));
        console.log(newValue);
      },
      deep: true
    }
  },
  created() {
    const urlItems = localStorage.getItem('URL-items');
    if (urlItems) {
      this.setUrlItemsFromLS(JSON.parse(urlItems));
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
      white-space: nowrap;

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
        width: 120px;
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

      .copied {
        background-color: hsl(257, 27%, 26%);
        pointer-events: none;
      }

      .delete-button {
        border: none;
        border-radius: 5px;
        width: 120px;
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

  @media (max-width: 768px) {
    .wrapper {
      width: 90%;
      flex-direction: column;
      padding: 20px;
      flex: 1;

      .default-url {
        width: 100%;
        border-bottom: 1px solid grey;
      }

      .shortened-url {
        display: flex;
        width: 100%;
        height: 150px;
        margin: 0;
        flex-direction: column;
        justify-content: space-between;

        .link {
          padding: 0;
          width: 100%;
        }

        .copy-button {
          width: 100%;
          height: 5vh;
          cursor: default;
        }

        .delete-button {
          margin: 0;
          height: 5vh;
          width: 100%;
          cursor: default;
        }
      }
    }
  }
}
</style>
