import axios from "axios";

const planResultStore = {
  namespaced: true,
  state: {
    /*
      Array of plan result with structure
      @id: integer (Preferences Id)
      @places: Array of ordered places with structure
        @id: integer
        @name: string
        @img: string(url)
        @lat: latitude(int)
        @long: longitude(int)
    */
    plans: [],
    /*
      Array of choosen places with structure
        @id: integer
        @name: string
        @img: string(url)
        @lat: latitude(int)
        @long: longitude(int)
    */
    choosenPlaces: [],
    /*
      Status of the views
      @status: "idle" | "loading" | "done"
    */
    status: "idle",
  },
  mutations: {
    setPlans(state, plans) {
      state.plans = plans;
    }
  },
  actions: {
    async submitPlan({ commit, state }) {
      commit("setStatus", "loading");
      await axios.post(`${url}/plan`, state.choosenPlaces);
      commit("setStatus", "done");
    }
  }
};

export default planResultStore;