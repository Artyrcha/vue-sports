<template>
  <router-link
    :to="`/football/league/${league.id}`"
    class="league-card card link"
  >
    <div class="league-card__image flex-img">
      <img :src="league.logo" alt="" />
    </div>
    <div class="league-card__body">
      <h5 class="league-card__title">{{ league.title }}</h5>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardLeague",
  props: {
    league: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.league-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 10%);
  text-decoration: none;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border-color: rgba(0, 0, 0, 0.15);
  }
  &__image {
    flex-shrink: 0;
    width: 7rem;
    height: 7rem;
    padding: 1rem;
  }
  &__body {
    flex-grow: 1;
    padding: 1rem 1rem 1rem 0;
  }
  &__title {
    color: var(--bs-dark);
  }
}
</style>
