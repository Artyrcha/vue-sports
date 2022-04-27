import axios from "axios";

export default {
  state: () => ({
    leagues: [],
    league: {},
  }),
  getters: {
    getLeagues(state) {
      return state.leagues;
    },
    getLeague(state) {
      return state.league;
    },
  },
  mutations: {
    SET_LEAGUES(state, playload) {
      state.leagues = playload;
    },
    SET_LEAGUE(state, playload) {
      state.league = playload;
    },
  },
  actions: {
    fetchLeagues({ commit }) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}football-league/leagues`)
        .then((response) => commit("SET_LEAGUES", response.data))
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchLeague({ commit }, id) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}football-league/view?id=${id}`)
        .then((response) => commit("SET_LEAGUE", response.data))
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  namespaced: true,
};
