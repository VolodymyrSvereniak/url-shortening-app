<template>
  <header class="header-container">
    <h1 class="header-title" @click="setActive('')">Shortly</h1>
    <nav class="navbar-dekstop">
      <ul class="nav-group">
        <li class="nav-item">Features</li>
        <li class="nav-item">Pricing</li>
        <li class="nav-item">Resources</li>
      </ul>
    </nav>
    <div class="auth-group">
      <button
        @click="setActive('Login')"
        :class="{ active: isActive === 'Login' }"
        class="auth-button"
      >
        Login
      </button>
      <button
        @click="setActive('SignUp')"
        :class="{ active: isActive === 'SignUp' }"
        class="auth-button"
      >
        Sign Up
      </button>
    </div>
  </header>
  <app-header-mobile :isActive="isActive" @setActive="setActive" />
</template>

<script>
import AppHeaderMobile from './AppHeaderMobile.vue';

export default {
  components: {
    AppHeaderMobile
  },
  data() {
    return {
      isActive: '',
      isMobileSize: true
    };
  },
  methods: {
    setActive(currentButton) {
      this.isActive = currentButton;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin: 2.1875rem 4rem 0;

  .header-title {
    &:hover {
      cursor: pointer;
      color: hsl(180, 66%, 49%);
    }
  }

  .navbar-dekstop {
    flex: 1;

    .nav-group {
      display: flex;
      justify-content: flex-start;
      gap: 3%;
      padding-left: 3.125rem;

      .nav-item {
        list-style: none;
        color: hsl(257, 7%, 63%);
        font-weight: 700;
        cursor: pointer;

        &:hover {
          color: black;

          &::before {
            content: "Sorry! That Page Doesn't Seem to Exist";
            position: absolute;
            font-size: 14px;
            padding: 10px;
            top: 100px;
            width: 150px;
            background-color: #eff1f7;
            border-radius: 10px;
            z-index: 111;
            color: hsl(257, 7%, 63%);
          }
        }
      }
    }
  }

  .auth-group {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .auth-button {
      border: none;
      background: none;
      font-weight: 700;
      color: hsl(257, 7%, 63%);
      cursor: pointer;
      outline: none;

      &:hover {
        color: hsl(180, 66%, 49%);
      }

      &.active {
        background-color: hsl(180, 66%, 49%);
        transition: background-color 0.5s ease-out;
        padding: 10px 25px;
        border-radius: 20px;
        color: white;

        &:hover {
          background-color: hsl(180, 55%, 67%);
          transition: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
