import { dashboard } from './dashboard'

export default [
  {
    name: 'welcome',
    path: '/',
    component: () => import('@/pages/index.vue'),
  },
  ...dashboard,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/layouts/404.vue'),
  },
]
