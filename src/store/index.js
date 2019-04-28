import PlanResultStore from "./plan-result";
import SessionStore from "./session";
import AuthStore from "./auth";
import PreferenceStore from "./preference";

const store = new Vuex.Store({
  modules: {
    planResult: PlanResultStore,
    session: SessionStore,
    auth: AuthStore,
    preference: PreferenceStore
  }
})

export default store;