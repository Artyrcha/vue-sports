import { createStore } from "vuex";
import leagues from "./leagues";
import formula from "./formula";
import standings from "./standings";

export default createStore({
  modules: {
    leagues,
    formula,
    standings,
  },
});
