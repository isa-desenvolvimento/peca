import axios from 'axios'
export const URL = 'https://prbko.dev.lpbc.com.br' // dev
// export const URL = 'https://prbko.pecararabrecho.com.br' // prod

export const http_api = axios.create({
  baseURL: URL,
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
