<template>
  <header class="header bg-dark">
    <div class="header__container">
      <router-link to="/" class="header__logo"> Sports </router-link>
      <div class="header__datetime">{{ localeDate }}</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    date: new Date(),
  }),
  computed: {
    localeDate() {
      return `${new Date(this.date).toLocaleTimeString()} ${new Date(
        this.date
      ).toLocaleDateString()}`;
    },
  },
  mounted() {
    this.intelval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intelval);
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.75rem;
  }
  &__logo {
    position: relative;
    width: 280px;
    height: 50px;
    line-height: 50px;
    left: -0.75rem;
    padding-left: 0.75rem;
    font-size: 24px;
    color: var(--clr-main);
    text-decoration: none;
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #fff;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      background-color: var(--clr-main);

      transition: width 0.2s linear;
      width: 0;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
  &__datetime {
    flex-shrink: 0;
    flex-grow: 0;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
