import useAuth from '@/composables/useAuth'

const userLocalStorage = sessionStorage.user && JSON.parse(sessionStorage.user)

const initialState = userLocalStorage
  ? { status: { loggedIn: true } }
  : { status: { loggedIn: false } }

const { login, logoutUse } = useAuth()

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, value) {
      return login(value).then(
        (user) => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        (error) => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logout({ commit }) {
      logoutUse()
      commit('logoutSuccess')
    },
  },
  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true
    },
    loginFailure(state) {
      state.status.loggedIn = false
    },
    logoutSuccess() {
      this.state.auth = {
        status: {
          loggedIn: false,
        },
      }
    },
  },
}
