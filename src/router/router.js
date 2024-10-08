import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageDoesNotExist',
      component: () => import('@/views/PageDoesNotExistView.vue')
    }
  ]
});

export default router;
