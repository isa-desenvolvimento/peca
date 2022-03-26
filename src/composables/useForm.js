import { fetchtCreate, fetchtUpdate } from '@/api/request'

export default function useForm() {
  const create = async (type, value) => {
    return await fetchtCreate(type, value)
  }

  const update = async (type, value) => {
    return await fetchtUpdate(type, value)
  }

  return {
    create,
    update,
  }
}
