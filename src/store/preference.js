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
    choosen: [],
    /*
      Status of the views
      @status: "idle" | "loading" | "done" 
    */
    status: "idle"
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
      console.log("Status", status)
    },
    setPlaces(state, places) {
      state.places = places;
    },
    setData(state, { title, startDate, endDate }) {
      state.name = title
      state.startDate = startDate
      state.endDate = endDate
    },
    setChoosen(state, choosen) {
      state.choosen = choosen
    }
  },
  actions: {
    async submitPreference({ commit, state }, { choosen }) {
      commit("setStatus", "loading")
      commit("setChoosen", choosen)
      const token = localStorage.getItem("token");
      console.log("Choosen", choosen);
      const response = await axios.post(`${url}/location/filter`, {
        preferences: choosen
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      commit("setPlaces", response.data)
      commit("setStatus", "done")
    },
    async submitPlan({ commit, state }, choosenPlaces) {
      commit("setStatus", "loading");
      const token = localStorage.getItem("token");
      console.log(state.startDate);
      console.log(state.endDate);
      return axios.post(`${url}/plan`, {
        title: state.name,
        start_date: state.startDate,
        end_date: state.endDate,
        preferences: state.choosen,
        location_plans: choosenPlaces
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
};

export default PreferenceStore;