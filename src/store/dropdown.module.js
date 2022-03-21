import useDropdown from '@/composables/useDropdown'

const initialState = {}

const { getDropdown, getCep, getCityDropdown } = useDropdown()

export const dropdown = {
  namespaced: true,
  state: initialState,
  actions: {
    getDropdown({ commit }, type) {
      return getDropdown(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type })
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getCep({ commit }, cep) {
      return getCep(cep).then(
        (payload) => {
          commit('sucess', { payload: payload, type: 'address' })
          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },

    getCityDropdown({ commit }, uf) {
      return getCityDropdown(uf).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: 'cidades' })
          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    sucess(state, { payload, type }) {
      state[type] = payload
    },
    failure(state) {
      state.dropdown = []
    },
  },
}
