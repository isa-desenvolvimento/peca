import { http_api } from './http'

export const fetchtAuth = async (item) => {
  //const response = await http_api.post('/api/auth/login', item)
  const response = {
    status: 200,
    data: {
      token: '000000'
    }
  }
  
  return response.status == 200 && response.data
}
