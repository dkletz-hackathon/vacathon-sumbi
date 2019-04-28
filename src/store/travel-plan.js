import axios from "axios"
import { url } from "../mocks/config"

const travelPlanStore = {
  namespaced: true,
  state: {
    plans: [],
    histories: [],
    shared: [],
    plan: {}
  },
  mutations: {
    setPlans(state, plans) {
      state.plans = plans;
    },
    setHistories(state, histories) {
      state.histories = histories
    },
    setShared(state, shared) {
      state.shared = shared
    },
    setDetailPlan(state, plan) {
      state.plan = plan
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
    },
    async getShared({ commit }) {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/plan/shared`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setShared", response.data);
    },
    async getDetailPlan({ commit }, id) {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/plan/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setDetailPlan", response.data);
    }
  }
};

export default travelPlanStore;