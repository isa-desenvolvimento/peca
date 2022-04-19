import useForm from '@/composables/useForm'
import { messagesFetch } from '@/util/toast.js'

const initialState = {
  data: [],
  errors: [],
  loading: false,
}

const { useCreate, useUpdate } = useForm()

export const form = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, { value, type }) {
      commit('loadingToggle')

      return useCreate(type, value).then(
        (payload) => {
          commit('sucess', payload)
          commit('loadingToggle')

          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure', error.response.data)
          commit('loadingToggle')
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, { value, type }) {
      commit('loadingToggle')

      return useUpdate(type, value).then(
        (payload) => {
          commit('sucess', payload)
          commit('loadingToggle')

          messagesFetch('success', window.$t('MESSAGE.SUCCESS_UPDATE'))
          return Promise.resolve(payload)
        },
        (error) => {
          commit('failure', error.response.data.errors)
          commit('loadingToggle')
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
    setLoading({ commit }) {
      commit('loadingToggle')
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
    loadingToggle(state) {
      state.loading = !state.loading
    },
  },
}
