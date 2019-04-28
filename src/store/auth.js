import axios from "axios";

const authStore = new Vuex.Store({
  namespaced: true,
  state: {
    username: "",
    email: "",
    full_name: "",
    password: "",
    confirmPassword: "",
    status: "idle"
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setConfirmPassword(state, confirmPassword) {
      state.confirmPassword = confirmPassword;
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    register({ commit }) {
      commit("setStatus", "loading");
      const response = await axios.post(`${url}/user`, {
        username, email, full_name, password
      });
      commit("setStatus", "idle");
    },
    login({ commit, rootStore }) {
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
    isPasswordConfirmed = state => {
      return state.password = state.confirmPassword;
    }
  }
})