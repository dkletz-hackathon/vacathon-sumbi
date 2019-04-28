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
    preferences: import("../mocks/preferences.json"),
    /* 
      Array of interger consisting
      ids of choosen preferences
    */
    choosen: [],
    /*
      Status of the views
      @status: "idle" | "loading" | "done" 
    */
    status: "idle"
  },
  mutations: {
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    async submitPreference({ commit }, { choosen, name, startDate, endDate }) {
      commit("setStatus", "loading")
      const token = localStorage.getItem("token");
      const data = await axios.post(`${url}/preferences`, {
        choosen, name, startDate, endDate
      }, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      commit("setStatus", "done")
    }
  }
};

export default PreferenceStore;