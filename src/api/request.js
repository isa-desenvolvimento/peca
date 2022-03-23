import { http_api, http_cep } from './http'

export const fetchLojas = async (type) => {
  const response = await http_api(`/mobile/lojas/${type}`)
  return response.status == 200 && response.data
}
export const fetchList = async (type) => {
  const response = await http_api(`/mobile/${type}`)
  return response.status == 200 && response.data
}

export const fetchtCreate = async (type, value) => {
  const response = await http_api.post(`/mobile/${type}/add`, value)
  return response.status == 200 && response.data
}

export const fetchtDrop = async (type) => {
  const response = await http_api(`/mobile/${type}`)
  return response.status == 200 && response.data
}

export const fetchtCityDropdown = async (uf) => {
  const response = await http_api('/mobile/cidades', { uf_id: uf })
  return response.status == 200 && response.data
}

export const fetchtCep = async (cep) => {
  const response = await http_cep(`?code=${cep}`)
  return response.status == 200 && response.data
}
