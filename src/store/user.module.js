import useAuth from '@/composables/useAuth'

const userLocalStorage = sessionStorage.user && JSON.parse(sessionStorage.user)
const INITIAL_USER = {
  apelido: '',
  email: '',
  error: [],
}

const initialState = userLocalStorage ? userLocalStorage : INITIAL_USER

const { validDoc } = useAuth()

export const user = {
  namespaced: true,
  state: initialState,
  actions: {
    postValidDoc({ commit }, value) {
      return validDoc(value).then(
        (payload) => {
          commit('success', payload.data)
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure', error.response.data.errors)
          return Promise.reject(error.response.data)
        }
      )
    },
    logout({ commit }) {
      commit('logoutSuccess')
    },
  },
  mutations: {
    success(state, payload) {
      const { apelido } = payload
      sessionStorage.user = JSON.stringify(payload)
      state.apelido = apelido
    },
    failure(state, payload) {
      state.error = payload
    },
    logoutSuccess(state) {
      state.user = {}
    },
  },
}
