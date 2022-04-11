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

export const fetchListEstoque = async ({ type, id_loja, estoque }) => {
  const url = estoque
    ? `/mobile/${type}?loja=${id_loja}&estoque=${estoque}`
    : `/mobile/${type}?loja=${id_loja}`
  const response = await http_api(url)
  return response.status == 200 && response.data
}

export const fetchFilter = async ({ type, id_loja, data_inicio, data_fim }) => {
  const response = await http_api(
    `/mobile/${type}/${id_loja}?data_inicio=${data_inicio}&data_fim=${data_fim}`
  )
  return response.status == 200 && response.data
}

export const fetchtCreate = async (type, value) => {
  const URL = value?.notAdd ? `/mobile/${type}` : `/mobile/${type}/add`
  if (value?.notAdd) delete value.notAdd

  const response = await http_api.post(URL, value)
  return response.status == 200 && response.data
}

export const fetchtUpdate = async (type, value) => {
  const URL = type ? `/mobile/${type}/update` : `/mobile/update`

  const response = await http_api.post(URL, value)

  if (response.status !== 200) messagesFetch('danger', response.status)

  return response.status == 200 && response.message
}

export const fetchtDrop = async (type) => {
  const response = await http_api(`/mobile/${type}`)
  return response.status == 200 && response.data
}

export const fetchtCityDropdown = async (uf) => {
  const response = await http_api(`/mobile/cidades/${uf}`)
  return response.status == 200 && response.data
}

export const fetchtCep = async (cep) => {
  const response = await http_cep(`?code=${cep}`)

  if (response.data.status !== 200)
    return messagesFetch('danger', response.data.message)
  return response.status == 200 && response.data
}
