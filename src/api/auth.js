import { http_api } from './http'

export const fetchtAuth = async (value) => {
  const response = await http_api.post('/mobile/login', value)
  return response.status == 200 && response.data
}

export const fetchtValidDoc = async (doc) => {
  const response = await http_api.post('/mobile', doc)
  // return response.message == this.$t('OK') && response.data
  return response.status === 200 && response.data
}
