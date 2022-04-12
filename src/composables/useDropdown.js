import { fetchtDrop, fetchtCep, fetchtCityDropdown } from '@/api/request'

export default function useDropdown() {
  const useGetDropdown = async (type) => {
    return await fetchtDrop(type)
  }

  const useGetCep = async (cep) => {
    return await fetchtCep(cep)
  }

  const useGetCityDropdown = async (value) => {
    return await fetchtCityDropdown(value)
  }

  return {
    useGetDropdown,
    useGetCep,
    useGetCityDropdown,
  }
}
