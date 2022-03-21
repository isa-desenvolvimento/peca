import { fetchtDrop, fetchtCep, fetchtCityDropdown } from '@/api/request'

export default function useDropdown() {
  const getDropdown = async (type) => {
    return await fetchtDrop(type)
  }

  const getCep = async (cep) => {
    return await fetchtCep(cep)
  }

  const getCityDropdown = async (value) => {
    return await fetchtCityDropdown(value)
  }

  return {
    getDropdown,
    getCep,
    getCityDropdown,
  }
}
