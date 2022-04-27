import axios from "axios";

export default {
  state: () => ({
    standings: [],
    standing: {},
  }),
  getters: {
    getStandings(state) {
      return state.standings;
    },
    getStanding(state) {
      return state.standing;
    },
  },
  mutations: {
    SET_STANDINGS(state, playload) {
      state.standings = playload;
    },
    SET_STANDING(state, playload) {
      state.standing = playload;
    },
  },
  actions: {
    fetchStandings({ commit }) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}football-standing`)
        .then((response) => commit("SET_STANDINGS", response.data))
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchStanding({ commit }, league_id) {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL}football-standing/league?league_id=${league_id}`
        )
        .then((response) => commit("SET_STANDING", response.data))
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  namespaced: true,
};
