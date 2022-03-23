import { fetchtAuth, fetchtValidDoc } from '@/api/auth'

export default function useAuth() {
  const login = async (user) => {
    const auth = await fetchtAuth(user)
    if (auth && auth.api_token) {
      const user = JSON.parse(sessionStorage.user)
      user.token = auth.api_token

      sessionStorage.user = JSON.stringify(user)
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
