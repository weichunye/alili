import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import BigModel from './views/BigModel.vue'
import Price from './views/price/price.vue'
import Product from './views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bigmodel',
    name: 'BigModel',
    component: BigModel
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router