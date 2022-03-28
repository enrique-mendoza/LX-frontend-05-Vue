import { createRouter, createWebHashHistory } from 'vue-router';
import OrderView from '../views/OrderView.vue';

const routes = [
  {
    path: '/',
    name: 'order',
    component: OrderView,
  },
  {
    path: '/request',
    name: 'request',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RequestsView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
