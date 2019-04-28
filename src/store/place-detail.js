import axios from "axios"
import { url } from "../mocks/config"

const placeDetailStore = {
  namespaced: true,
  state: {
    place: {},
    status: "idle"
  },
  mutations: {
    setPlace(state, place) {
      state.place = place;
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    async getPlace({ commit }, id) {
      commit("setStatus", "loading")
      const token = localStorage.getItem("token");
      const place = await axios.get(`${url}/location/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      commit("setPlace", place.data)
      commit("setStatus", "idle")
    }
  }
};

export default placeDetailStore;