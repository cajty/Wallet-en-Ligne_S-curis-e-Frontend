import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    

    },
    {

      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')

    },
    {
      path: '/signup',
      name: 'signup',

      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../components/TransactionComponent.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/AdminComponent.vue')
    }

  ]
})

export default router
