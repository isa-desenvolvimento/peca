import { fetchtAuth, fetchtValidDoc } from '@/api/auth'

export default function useAuth() {
  const login = async (user) => {
    const auth = await fetchtAuth(user)
    if (auth && auth.token) {
      sessionStorage.user = JSON.stringify(auth)
      return auth
    }

    throw 400
  }

  const validDoc = async (doc) => {
    return await fetchtValidDoc(doc)
  }

  const logoutUse = () => {
    sessionStorage.clear()
    return 200
  }

  return {
    login,
    logoutUse,
    validDoc,
  }
}
