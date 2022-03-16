import axios from 'axios'

export const http_api = axios.create({
  baseURL: 'http://localhost:8081/api/', 
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setupAxiosToken = (token) => {
  http_api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers["x-access-token"] = token;
      } 
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )
}
