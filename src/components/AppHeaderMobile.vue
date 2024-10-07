<template>
  <div class="header-mobile">
    <div class="header-container">
      <h1>Shortly</h1>
      <button
        :style="{ color: isMenuOpen ? 'hsl(180, 66%, 49%)' : '' }"
        class="burger-button"
        @click="isMenuOpen = !isMenuOpen"
      >
        &#9776;
      </button>
    </div>
    <div :style="{ display: isMenuOpen ? 'flex' : 'none' }" class="header-wrapper">
      <nav class="navbar-mobile">
        <ul class="nav-group">
          <li class="nav-item">Features</li>
          <li class="nav-item">Pricing</li>
          <li class="nav-item">Resources</li>
        </ul>
      </nav>
      <hr class="middle-line" />
      <div class="auth-mobile">
        <button
          @click="$emit('setActive', 'Login')"
          :class="{ active: isActive === 'Login' }"
          class="auth-button"
        >
          Login
        </button>
        <button
          @click="$emit('setActive', 'SignUp')"
          :class="{ active: isActive === 'SignUp' }"
          class="auth-button"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['setActive'],
  props: {
    isActive: {
      type: String
    },
    setActive: {
      type: Function
    }
  },
  data() {
    return {
      isMenuOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
.header-mobile {
  .header-container {
    display: none;
    width: 90vw;
    padding-bottom: 20px;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .burger-button {
    border: none;
    background: none;
    font-weight: 700;
    font-size: 35px;
    color: hsl(257, 7%, 63%);
    outline: none;
  }

  .header-wrapper {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: hsl(257, 27%, 26%);
    width: 90vw;
    height: 46vh;
    z-index: 222;
    border-radius: 10px;
    padding: 10px 0;

    .navbar-mobile {
      .nav-group {
        display: flex;
        justify-content: space-around;
        border: none;
        height: 23vh;
        align-items: center;
        flex-direction: column;

        .nav-item {
          list-style: none;
          color: hsl(257, 7%, 63%);
          font-weight: 700;

          &:hover {
            color: black;
          }
        }
      }
    }

    .middle-line {
      width: 90%;
      background-color: hsl(257, 7%, 63%);
      opacity: 0.2;
      margin: 10px 0;
    }

    .auth-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 15vh;

      .auth-button {
        border: none;
        background: none;
        font-weight: 700;
        color: hsl(257, 7%, 63%);
        outline: none;

        &.active {
          background-color: hsl(180, 66%, 49%);
          transition: background-color 0.3s ease-out;
          padding: 10px 30vw;
          border-radius: 20px;
          color: white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 30vw;
    margin: 19px 1.2rem;
  }
}
</style>
