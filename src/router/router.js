import { createRouter, createWebHistory } from 'vue-router';
import PageDoesNotExistView from '@/views/PageDoesNotExistView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
  }]

});

export default router;
