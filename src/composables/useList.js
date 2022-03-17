import { fetchtList } from '@/api/request'

export default function useList() {
  const getListApi = async (type, value) => {
    return await fetchtList(type, value)
  }

  return {
    getListApi,
  }
}
