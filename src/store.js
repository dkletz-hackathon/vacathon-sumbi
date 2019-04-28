import PlanResultStore from "./store/plan-result";
import SessionStore from "./store/session";
import AuthStore from "./store/auth";
import PreferenceStore from "./store/preference";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    planResult: PlanResultStore,
    session: SessionStore,
    auth: AuthStore,
    preference: PreferenceStore
  }
});

export default store;