import useAuth from '@/composables/useAuth'

const userLocalStorage = sessionStorage.user && JSON.parse(sessionStorage.user)

const initialState = userLocalStorage
  ? { loggedIn: true, publicPages: false }
  : { loggedIn: false, publicPages: false }

const { useLogin, logoutUse } = useAuth()

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, value) {
      return useLogin(value).then(
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
      this.dispatch('user/logout')
      commit('logoutSuccess')
    },
  },
  mutations: {
    success(state) {
      state.loggedIn = true
    },
    failure(state) {
      state.loggedIn = false
    },
    logoutSuccess(state) {
      state.auth = {
        loggedIn: false,
      }
      this.state.user = {}
    },
  },
}
