import axios from "axios"
import { url } from "../mocks/config"

const travelPlanStore = {
  namespaced: true,
  state: {
    plans: [],
    histories: []
  },
  mutations: {
    setPlans(state, plans) {
      state.plans = plans;
    },
    setHistories(state, histories) {
      state.histories = histories
    }
  },
  actions: {
    async getPlans({ commit }) {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/plan`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setPlans", response.data);
    },
    async getHistories({ commit }) {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/plan/history`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setHistories", response.data);
    }
  }
};

export default travelPlanStore;