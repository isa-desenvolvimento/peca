import { http_api } from './http'

export const fetchtList = async (type, value) => {
  //const response = await http_api.post('/api/auth/login', item)
  const response = {
    status: 200,
    data: [
      {
        header: type.toUpperCase(),
        title: value.title,
        description: 'teste',
        btnTitle: 'Sobre',
        footer: 'teste',
      },
    ],
  }

  return response.status == 200 && response.data
}

export const fetchtCreate = async (type, value) => {
  const response = await http_api.post(`/mobile/${type}/add`, value)
  return response.message == this.$t('OK') && response.data
}
