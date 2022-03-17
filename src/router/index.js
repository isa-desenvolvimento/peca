import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/screens/SignIn.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/screens/Home.vue'),
  },
  {
    path: '/extract',
    name: 'Extract',
    component: () => import('@/screens/Extract.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/screens/Product.vue'),
  },
  {
    path: '/tela2',
    name: 'tela2',
    component: () => import('@/screens/tela2.vue'),
  },
  {
    path: '/tela3',
    name: 'tela3',
    component: () => import('@/screens/tela3.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/screens/signup.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
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
