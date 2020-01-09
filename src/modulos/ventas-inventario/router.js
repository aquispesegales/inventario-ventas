export default [
    {
        path: '/clientes',
        name:'clientes',
        component: () => import('@/modulos/ventas-inventario/views/clientes.vue')
    },
    {
        path: '/categorias',
        name:'categorias',
        component: () => import('@/modulos/ventas-inventario/views/categorias.vue')
    },
    {
        path: '/productos',
        name:'productos',
        component: () => import('@/modulos/ventas-inventario/views/productos.vue')
    },
    {
        path: '/stock',
        name:'stock',
        component: () => import('@/modulos/ventas-inventario/views/stock.vue')
    },
  ]