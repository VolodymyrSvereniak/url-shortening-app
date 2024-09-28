<template>
  <header class="header">
    <h1>Shortly</h1>
    <nav class="navbar">
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
</template>

<script>
export default {
  data() {
    return {
      isActive: 'SignUp'
    }
  },
  methods: {
    setActive(currentButton) {
      this.isActive = currentButton
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar {
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
}
</style>
