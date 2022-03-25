import { createRouter, createWebHistory } from 'vue-router'

export const PUBLIC_PAGES = [
  '/login',
  '/feedback',
  '/damn-we-are-sad',
  '/register',
  '/lack-little',
  '/token',
  '/welcome',
]

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/screens/SignIn.vue'),
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('@/screens/NotUser.vue'),
  },
  {
    path: '/damn-we-are-sad',
    name: 'Damn We Are Sad',
    component: () => import('@/screens/DamnWeAreSad.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/screens/Register.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/screens/Profile.vue'),
  },
  {
    path: '/lack-little',
    name: 'Lack Little',
    component: () => import('@/screens/LackLittle.vue'),
  },
  {
    path: '/token',
    name: 'Token',
    component: () => import('@/screens/Token.vue'),
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/screens/Welcome.vue'),
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
    path: '/devolution',
    name: 'DEVOLUTION',
    component: () => import('@/screens/Devolution.vue'),
  },
  {
    path: '/contract',
    name: 'CONTRACT',
    component: () => import('@/screens/Contract.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRequired = !PUBLIC_PAGES.includes(to.path)
  const user = JSON.parse(sessionStorage.getItem('user'))
  const loggedIn = user?.token && !!user.token

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
