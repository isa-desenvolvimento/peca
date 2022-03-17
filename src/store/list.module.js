import useList from '@/composables/useList'

const listSession = sessionStorage.list && JSON.parse(sessionStorage.list)
const initialState = listSession || []

const { getListApi } = useList()

export const list = {
  namespaced: true,
  state: initialState,
  actions: {
    getList({ commit }, { value, type }) {
      return getListApi(type, value).then(
        (payload) => {
          commit('sucess', payload)
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
    sucess(state, payload) {
      state.list = payload
    },
    failure(state) {
      state.list = []
    },
  },
}
