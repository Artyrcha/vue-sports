import axios from "axios";

export default {
  state: () => ({
    dsa: 2,
    drivers: [],
  }),
  getters: {
    getLeagues(state) {
      return state.leagues;
    },
  },
  mutations: {
    SET_LEAGUES(state, playload) {
      state.leagues = playload;
    },
  },
  actions: {
    fetchLeagues({ commit }) {
      var requestOptions = {
        method: "GET",
        headers: {
          "x-rapidapi-host": process.env.VUE_APP_API_HOST_FORMULA,
          "x-rapidapi-key": process.env.VUE_APP_API_KEY,
        },
        redirect: "follow",
      };

      axios
        .get(
          `https://${process.env.VUE_APP_API_HOST_FORMULA}/seasons`,
          requestOptions
        )
        .then((response) => console.log(response.data.response))
        // .then((response) => commit("SET_LEAGUES", response.data.response))
        .catch((error) => {
          console.log("error", error);
        });

      // var myHeaders = new Headers();
      // myHeaders.append("x-rapidapi-key", process.env.VUE_APP_API_KEY);
      // myHeaders.append("x-rapidapi-host", process.env.VUE_APP_API_HOST);

      // var requestOptions = {
      //   method: "GET",
      //   headers: myHeaders,
      //   redirect: "follow",
      // };

      // fetch(`${process.env.VUE_APP_API_URL}/leagues`, requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log("error", error));
    },
  },
  namespaced: true,
};
