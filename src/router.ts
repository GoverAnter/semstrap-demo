import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/component')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "products" */ './views/Products/component')
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './views/Product/component'),
      props: true
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import(/* webpackChunkName: "sales" */ './views/Sales/component')
    },
    {
      path: '/sales/:saleId',
      name: 'sale',
      component: () => import(/* webpackChunkName: "sale" */ './views/Sale/component'),
      props: true
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About/component')
    // },
    // {
    //   path: '/about-me',
    //   name: 'about-me',
    //   component: () => import(/* webpackChunkName: "about-me" */ './views/AboutMe/component')
    // }
  ]
});
