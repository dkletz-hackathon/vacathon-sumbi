import axios from "axios"
import { url } from "../mocks/config"

const PreferenceStore = {
  namespaced: true,
  state: {
    /*
      Array of available preferences in this format
      @id: integer
      @name: string
      @img: string(url)
    */
    preferences: require("../mocks/preferences.json"),
    places: [],
    name: "",
    startDate: "",
    endDate: "",
    /*
      Status of the views
      @status: "idle" | "loading" | "done" 
    */
    status: "idle"
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    },
    setPlaces(state, places) {
      state.places = places;
    }
  },
  actions: {
    async submitPreference({ commit }, { choosen, name, startDate, endDate }) {
      commit("setStatus", "loading")
      const token = localStorage.getItem("token");
      const response = await axios.post(`${url}/location/filter`, {
        preferences: choosen
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      commit("setPlaces", response.data)
      commit("setStatus", "done")
    }
  }
};

export default PreferenceStore;