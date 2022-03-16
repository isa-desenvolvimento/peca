import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/screens/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/screens/Home.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = sessionStorage.getItem('user')

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
