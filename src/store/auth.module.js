import useAuth from '@/composables/useAuth'

const userLocalStorage = sessionStorage.user && JSON.parse(sessionStorage.user)

const initialState = userLocalStorage
  ? { status: { loggedIn: true, publicPages: false } }
  : { status: { loggedIn: false, publicPages: false } }

const { login, logoutUse } = useAuth()

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, value) {
      return login(value).then(
        (user) => {
          commit('success', user)
          return Promise.resolve(user)
        },
        (error) => {
          commit('failure')
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
    success(state) {
      state.status.loggedIn = true
    },
    failure(state) {
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
