import useForm from '@/composables/useForm'
import { messagesFetch } from '@/util/toast.js'

const initialState = {
  data: [],
  errors: [],
}

const { create } = useForm()

export const form = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, { value, type }) {
      return create(type, value).then(
        (payload) => {
          commit('sucess', payload)
          sessionStorage['type'] = value
          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure', error.response.data.errors)
          return Promise.reject(error)
        }
      )
    },
    setToast({ commit }, payload) {
      payload.message = window.$t(
        `MESSAGE.${payload.status.toUpperCase()}_${payload.type.toUpperCase()}`
      )
      commit('toast', payload)
    },
  },
  mutations: {
    sucess(state, payload) {
      state.data = payload
    },
    failure(state, payload) {
      state.error = payload
    },
    toast(state, payload) {
      messagesFetch(payload.status, payload.message)
    },
  },
}
