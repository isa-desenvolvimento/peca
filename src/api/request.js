import { http_api, http_cep } from './http'
import { messagesFetch } from '@/util/toast.js'

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

export const fetchtUpdate = async (type, value) => {
  const URL = type ? `/mobile/${type}/update` : `/mobile/update`

  const response = await http_api.post(URL, value)

  debugger
  if (response.status !== 200) messagesFetch('danger', response.status)

  return response.status == 200 && response.message
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
