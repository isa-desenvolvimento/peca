import useList from '@/composables/useList'

const initialState = {
  extrato: {},
  contrato: {},
  devolucao: {},
  estoque: {},
  auth: {
    profile_img: null,
  },
}

Object.keys(initialState).map((key) => {
  initialState[key] = sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : {}
})

const { useGetLojas, useGetList, useGetFilter, useGetListEstoque } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getLojas({ commit }, type) {
      return useGetLojas(type).then(
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
      return useGetList(type).then(
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
    getAuth({ commit }) {
      return useGetList('auth').then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: 'auth' })
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          return Promise.reject(error)
        }
      )
    },
    getFilter({ commit }, value) {
      this.state.list[value.type] = {}
      return useGetFilter(value).then(
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
      return useGetListEstoque(value).then(
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
      sessionStorage.setItem(type, JSON.stringify(payload))
      state[type] = payload
    },
    failure(state) {
      state.list = []
    },
  },
}
