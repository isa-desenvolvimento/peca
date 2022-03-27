import useList from '@/composables/useList'

const initialState = {}

const { getLojas, getList, getFilter, getListEstoque } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getLojas({ commit }, type) {
      return getLojas(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: 'lojas' })
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getList({ commit }, type) {
      return getList(type).then(
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
    getFilter({ commit }, value) {
      return getFilter(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getListEstoque({ commit }, value) {
      return getListEstoque(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          return Promise.resolve(payload.data)
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
      sessionStorage.setItem(type, payload)
      state[type] = payload
    },
    failure(state) {
      state.list = []
    },
  },
}
