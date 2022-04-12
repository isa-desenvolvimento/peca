import {
  fetchtDrop,
  fetchLojas,
  fetchList,
  fetchFilter,
  fetchListEstoque,
} from '@/api/request'

export default function useList() {
  const useGetDropdown = async (type, value) => {
    return await fetchtDrop(type, value)
  }

  const useGetLojas = async (type) => {
    return await fetchLojas(type)
  }

  const useGetList = async (type) => {
    return await fetchList(type)
  }

  const useGetFilter = async (value) => {
    return await fetchFilter(value)
  }

  const useGetListEstoque = async (value) => {
    return await fetchListEstoque(value)
  }

  return {
    useGetDropdown,
    useGetLojas,
    useGetList,
    useGetFilter,
    useGetListEstoque,
  }
}
