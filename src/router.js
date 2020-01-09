import Vue from 'vue'
import Router from 'vue-router'

const baseRoutes = [
  {
    path: '/',
    component: () => import('@/modulos/ventas-inventario/views/inicio.vue'),
    name: 'inicio'
  },
];

import routerVentasInventario from '@/modulos/ventas-inventario/router';
const routes = baseRoutes.concat(routerVentasInventario);

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
   
  
})
