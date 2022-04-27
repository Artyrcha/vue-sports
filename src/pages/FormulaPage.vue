<template>
  <div>
    <h1>Formula 1</h1>
    <div>{{ leagues }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FormulaPage",
  // methods: {
  //   ...mapActions({
  //     fetchLeagues: "leagues/fetchLeagues",
  //   }),
  // },
  // computed: {
  //   ...mapGetters({
  //     leagues: "leagues/getLeagues",
  //   }),
  // },
  // mounted() {
  //   this.fetchLeagues();
  // },
};
</script>

<style></style>
