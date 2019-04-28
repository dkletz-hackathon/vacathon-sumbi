const sessionStore = {
  namespaced: true,
  mutations: {
    setToken(state, token) {
      localStorage.setItem("token", token)
    }
  }
};

export default sessionStore;