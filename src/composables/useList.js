import { fetchtDrop, fetchLojas, fetchList } from '@/api/request'

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

  return {
    getDropdown,
    getLojas,
    getList,
  }
}
