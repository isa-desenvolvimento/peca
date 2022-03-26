import useForm from '@/composables/useForm'
import { messagesFetch } from '@/util/toast.js'

const initialState = {
  data: [],
  errors: [],
}

const { create, update } = useForm()

export const form = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, { value, type }) {
      return create(type, value).then(
        (payload) => {
          commit('sucess', payload)
          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure', error.response.data.errors)
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, { value, type }) {
      return update(type, value).then(
        (payload) => {
          commit('sucess', payload)
          messagesFetch('sucess', window.$t.SUCCESS_UPDATE)
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
      sessionStorage['type'] = JSON.stringify(payload)

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
