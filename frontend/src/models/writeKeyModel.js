export const writeKeyModel = {
    state: {
      token: "",
      isLoading: true,
      user: "",
      isAuthenticated: false
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setWriteKey(state, payload) {
        state.token = payload.token;
        state.isLoading = payload.isLoading;
        state.user = payload.user;
        state.isAuthenticated = payload.isAuthenticated;
        return state;
      }
    }
};