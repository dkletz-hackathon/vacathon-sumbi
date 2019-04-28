import axios from "axios";
import { url } from "../mocks/config";

const authStore = {
  namespaced: true,
  state: {
    status: "idle"
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit("setStatus", "loading");
      const response = await axios.post(`${url}/auth/login`, {
        username, password
      });
      if (response.data.message === "OK") {
        commit("session/setToken", response.data.access_token, {root: true})
      }
      commit("setStatus", "idle");
    }
  },
  getters: {
    isPasswordConfirmed: (state) => {
      return state.password = state.confirmPassword;
    }
  }
};

export default authStore;