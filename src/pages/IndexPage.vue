<template>
  <div>
    <div>{{ leagues }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "IndexPage",
  methods: {
    ...mapActions({
      fetchLeagues: "leagues/fetchLeagues",
    }),
  },
  computed: {
    ...mapGetters({
      leagues: "leagues/getLeagues",
    }),
  },
  mounted() {
    this.fetchLeagues();
  },
};
</script>

<style></style>
