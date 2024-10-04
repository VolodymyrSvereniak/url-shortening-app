<template>
  <footer class="container">
    <h1 class="title">Shortly</h1>
    <div class="links-wrapper" v-for="footerLink in linksList">
      <ul class="links-list">
        <li class="links-title">{{ footerLink.title }}</li>
        <li class="links-items" v-for="link in footerLink.linksItems">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="icons-wrapper">
      <ul class="icons-list" v-for="icon in icons">
        <li>
          <a :href="icon.link" target="_blank">
            <img class="icon-item" :src="icon.icon" :alt="icon.icon" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('footerLinks', ['linksList', 'icons'])
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100vw;
  height: 40vh;
  padding-top: 50px;
  color: white;
  background-color: hsl(260, 8%, 14%);
  gap: 5%;

  .title {
    padding: 0 15% 0 10%;
  }

  .links-wrapper {
    display: flex;
    justify-content: space-between;

    .links-list {
      display: flex;
      flex-direction: column;
      font-weight: 700;

      .links-title {
        list-style: none;
        padding-bottom: 20px;
      }

      .links-items {
        list-style: none;
        margin: 7px 0;
        color: hsl(257, 7%, 63%);
        font-size: 14px;
        cursor: pointer;
        position: relative;

        &:hover {
          color: hsl(180, 66%, 49%);

          &::before {
            content: "Sorry! That Page Doesn't Seem to Exist";
            position: absolute;
            padding: 10px;
            bottom: 30px;
            width: 150px;
            background-color: hsl(255, 11%, 22%);
            border-radius: 10px;
            z-index: 111;
            color: hsl(257, 7%, 63%);
          }
        }
      }
    }
  }

  .icons-wrapper {
    display: flex;
    align-items: flex-start;
    height: auto;
    width: 200px;
    gap: 20px;

    .icons-list {
      list-style: none;

      .icon-item {
        filter: invert(1);
        width: 100%;
        height: auto;
        cursor: pointer;

        &:hover {
          filter: invert(50%);
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
