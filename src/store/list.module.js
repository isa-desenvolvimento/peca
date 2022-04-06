import useList from '@/composables/useList'

const initialState = {}

const { getLojas, getList, getFilter, getListEstoque } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getLojas({ commit }, type) {
      this.dispatch('form/loading')
      return getLojas(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: 'lojas' })
          this.dispatch('form/loading')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getList({ commit }, type) {
      this.dispatch('form/loading')

      return getList(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type })
          this.dispatch('form/loading')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getFilter({ commit }, value) {
      this.dispatch('form/loading')

      return getFilter(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          this.dispatch('form/loading')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getListEstoque({ commit }, value) {
      this.dispatch('form/loading')

      return getListEstoque(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          this.dispatch('form/loading')

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
