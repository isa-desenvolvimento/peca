import axios from 'axios'

export const http_api = axios.create({
  baseURL: process.env.VITE_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const http_cep = axios.create({
  baseURL: 'https://ws.apicep.com/cep.json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const setupAxiosToken = (token) => {
  http_api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
