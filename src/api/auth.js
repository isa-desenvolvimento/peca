import { http_api } from './http'

export const fetchtAuth = async () => {
  //const response = await http_api.post('/api/auth/login', item)
  const response = {
    status: 200,
    data: {
      token: '000000',
    },
  }

  return response.status == 200 && response.data
}

export const fetchtValidDoc = async (doc) => {
  const response = await http_api.post('/mobile', doc)
  // return response.message == this.$t('OK') && response.data
  return response.message == this.$t('OK') && response.data
}
