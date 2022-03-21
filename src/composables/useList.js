import { fetchtDrop } from '@/api/request'

export default function useList() {
  const getDropdown = async (type, value) => {
    return await fetchtDrop(type, value)
  }

  return {
    getDropdown,
  }
}
