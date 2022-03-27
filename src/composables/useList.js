import {
  fetchtDrop,
  fetchLojas,
  fetchList,
  fetchFilter,
  fetchListEstoque,
} from '@/api/request'

export default function useList() {
  const getDropdown = async (type, value) => {
    return await fetchtDrop(type, value)
  }

  const getLojas = async (type) => {
    return await fetchLojas(type)
  }

  const getList = async (type) => {
    return await fetchList(type)
  }

  const getFilter = async (value) => {
    return await fetchFilter(value)
  }

  const getListEstoque = async (value) => {
    return await fetchListEstoque(value)
  }

  return {
    getDropdown,
    getLojas,
    getList,
    getFilter,
    getListEstoque,
  }
}
