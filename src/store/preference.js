import axios from "axios";
import { url } from "../mocks/config";

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
    async submitPreference({ commit, state }) {
      commit("setStatus", "loading");
      await axios.post(`${url}/preferences`, state.choosen);
      commit("setStatus", "done");
    }
  }
};

export default PreferenceStore;