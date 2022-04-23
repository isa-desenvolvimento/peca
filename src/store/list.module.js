import useList from '@/composables/useList'

export const LOJA_OBJ = [
  {
    cnpj: '00000000000000',
    id: 0,
    nome: 'TODAS',
    valor_consolidado: 0,
  },
]

const initialState = {
  extrato: {},
  extratoLojas: LOJA_OBJ,
  devolucaoLojas: LOJA_OBJ,
  estoqueLojas: LOJA_OBJ,
  contrato: {},
  devolucao: {},
  estoque: {},
  auth: {},
}

Object.keys(initialState).map((key) => {
  initialState[key] = sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : {}
})

initialState.loading = false

const { useGetLojas, useGetList, useGetFilter, useGetListEstoque } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getLojas({ commit }, type) {
      this.state.list[`${type}Lojas`] = LOJA_OBJ
      commit('loadingToggle')
      return useGetLojas(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: `${type}Lojas` })
          commit('loadingToggle')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          commit('loadingToggle')
          return Promise.reject(error)
        }
      )
    },
    getList({ commit }, type) {
      commit('loadingToggle')
      return useGetList(type).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type })
          commit('loadingToggle')
          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          commit('loadingToggle')
          return Promise.reject(error)
        }
      )
    },
    getAuth({ commit }) {
      commit('loadingToggle')

      return useGetList('auth').then(
        (payload) => {
          const data = {
            ...payload.data,
            profile_img: `${process.env.VITE_STORE_PROFILE}/${payload.data.profile_img}`,
          }
          commit('sucess', { payload: data, type: 'auth' })
          commit('loadingToggle')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          commit('loadingToggle')

          return Promise.reject(error)
        }
      )
    },
    getFilter({ commit }, value) {
      commit('loadingToggle')

      this.state.list[value.type] = {}
      return useGetFilter(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          commit('loadingToggle')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          commit('loadingToggle')

          return Promise.reject(error)
        }
      )
    },
    getListEstoque({ commit }, value) {
      commit('loadingToggle')

      return useGetListEstoque(value).then(
        (payload) => {
          commit('sucess', { payload: payload.data, type: value.type })
          commit('loadingToggle')

          return Promise.resolve(payload.data)
        },
        (error) => {
          commit('failure')
          commit('loadingToggle')

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
    loadingToggle(state) {
      state.loading = !state.loading
    },
  },
}
