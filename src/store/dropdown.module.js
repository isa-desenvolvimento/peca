import useDropdown from '@/composables/useDropdown'

const initialState = {}

const { useGetDropdown, useGetCep, useGetCityDropdown } = useDropdown()

export const dropdown = {
  namespaced: true,
  state: initialState,
  actions: {
    getDropdown({ commit }, type) {
      useGetDropdown(type).then(
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
      useGetCep(cep).then(
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
      useGetCityDropdown(uf).then(
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
