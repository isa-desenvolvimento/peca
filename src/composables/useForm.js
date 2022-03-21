import { fetchtCreate } from '@/api/request'

export default function useForm() {
  const create = async (type, value) => {
    return await fetchtCreate(type, value)
  }

  return {
    create,
  }
}
