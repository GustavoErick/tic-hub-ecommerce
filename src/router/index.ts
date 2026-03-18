import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import ProductsList from '@/views/ProductList.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'products',
          component: ProductsList,
        },
        {
          path: 'products/:id',
          component: ProductDetail,
        },
        {
          path: 'cart',
          component: CartView,
          meta: {
            auth: true,
            role: ['customer'],
          },
        },
      ],
    },
    {
      path: '/admin/',
      name: 'admin',
      component: AdminLayout,
      meta: {
        auth: true,
        role: ['admin'],
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView,
        },
      ],
    },
  ],
})

router.beforeEach((to, from) => {
  const token = {
    isAuth: true,
    // role: ['admin'],
    // role: ['customer'],
    role: ['customer', 'admin'],
  }

  if (!to.meta.auth) return true

  if (!token.isAuth) return '/'

  const allowedRoles = to.meta.role as string[]

  const hasAccess = token.role.some((role) => allowedRoles.includes(role))

  if (hasAccess) {
    return true
  } else {
    return '/'
  }
})

export default router
