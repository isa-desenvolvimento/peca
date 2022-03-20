import axios from 'axios'

export const http_api = axios.create({
  baseURL: 'https://prbko.pecararabrecho.com.br',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const setupAxiosToken = (token) => {
  http_api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers['x-access-token'] = token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
