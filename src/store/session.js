const sessionStore = new Vuex.Store({
  namespaced: true,
  state: {
    token: ""
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  getters: {
    isAuthenticated: state => {
      return token !== "";
    } 
  }
});

export default sessionStore;