import Vue from 'vue';
import VueRouter from 'vue-router'; // Importe VueRouter, não Router

import HomePage from './components/HomePage.vue';
import HeaderBar from './components/HeaderBar.vue';
import ContactForm from './components/ContactForm.vue';
import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

Vue.use(VueRouter); // Use VueRouter em vez de Router

const routes = [
  {
    path: '/',
    components: {
      default: HomePage,
      header: HeaderBar,
    },
  },
  {
    path: '/contact',
    components: {
      default: ContactForm,
      header: HeaderBar,
    },
  },
  {
    path: '/products',
    components: {
      default: ProductList,
      header: HeaderBar,
    },
  },
  {
    path: '/product/:id',
    components: {
      default: ProductDetail,
      header: HeaderBar,
    },
    props: true,
  },
  {
    path: '/cart',
    components: {
      default: ShoppingCart,
      header: HeaderBar,
    },
  },
];

const router = new VueRouter({ // Use VueRouter em vez de Router
  routes,
});

export default router;
