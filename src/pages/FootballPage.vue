<template>
  <div>
    <ui-title-page>Football</ui-title-page>
    <h2>Leagues</h2>
    <div class="row">
      <div
        v-for="league in leagues"
        :key="league.id"
        class="col-md-6 col-xxl-4"
      >
        <card-league :league="league"></card-league>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardLeague from "@/components/CardLeague";

export default {
  name: "FootballPage",
  components: { CardLeague },
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
