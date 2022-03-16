import { fetchtAuth } from '@/api/auth'

export default function useAuth() {
  const login = async (user) => {
    const auth = await fetchtAuth(user)
    if (auth && auth.token) {
      sessionStorage.user = JSON.stringify(auth)
      return auth
    }

    throw 400
  }

  const logoutUse = () => {
    localStorage.clear()
    return 200
  }

  return {
    login,
    logoutUse,
  }
}
