import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductListView from '../views/ProductListView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/feminino',
    name: 'Feminino',
    component: ProductListView,
  },
  {
    path: '/masculino',
    name: 'Masculino',
    component: ProductListView,
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: ProductListView,
  },
  {
    path: '/promocoes',
    name: 'Promocoes',
    component: ProductListView,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetailView,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;