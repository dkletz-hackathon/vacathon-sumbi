import axios from "axios"
import { url } from "../mocks/config"

const profileStore = {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async getProfile({ commit }) {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/user/profile`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setUser", response.data);
    }
  }
};

export default profileStore;