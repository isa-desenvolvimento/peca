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
