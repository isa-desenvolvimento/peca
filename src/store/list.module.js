import useList from '@/composables/useList'

const initialState = {}

const { getLojas, getList } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getLojas({ commit }, type) {
      const user = JSON.parse(sessionStorage.getItem('user'))
      return getLojas(type, user.token).then(
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
      const user = JSON.parse(sessionStorage.getItem('user'))
      return getList(type, user.token).then(
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
