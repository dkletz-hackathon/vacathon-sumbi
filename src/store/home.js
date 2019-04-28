import axios from "axios"
import { url } from "../mocks/config"

const homeStore = {
  namespaced: true,
  state: {
    /*
      Locations sorted by category
    */
    locationsCategory: [],
    status: "idle"
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    setLocations(state, locations) {
      console.log(locations)
      state.locationsCategory = locations
    }
  },
  actions: {
    async getLocationsByCategory({ commit }) {
      commit("setStatus", "loading")
      const token = localStorage.getItem("token");
      const locations = await axios.get(`${url}/location/type/all`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      commit("setLocations", locations.data)
      commit("setStatus", "idle")
    }
  },
  getters: {}
};

export default homeStore