import axios from "axios"
import { url } from "../mocks/config"

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
      Array of integer
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
    async submitPlan({ commit }, choosenPlaces) {
      commit("setStatus", "loading");
      const token = localStorage.getItem("token");
      await axios.post(`${url}/plan`, choosenPlaces, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setStatus", "done");
    }
  }
};

export default planResultStore;