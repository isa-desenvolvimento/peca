import { fetchtCreate, fetchtUpdate } from '@/api/request'

export default function useForm() {
  const useCreate = async (type, value) => {
    return await fetchtCreate(type, value)
  }

  const useUpdate = async (type, value) => {
    return await fetchtUpdate(type, value)
  }

  return {
    useCreate,
    useUpdate,
  }
}
