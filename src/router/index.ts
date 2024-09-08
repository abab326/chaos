import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/layout',
      component: () => import('@/layout/default.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
  ],
})

export default router
