import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import BigModel from './views/BigModel.vue'
import Price from './views/price/price.vue'
import Ljaly from './views/ljaliy/ljaliy.vue'
import Product from './views/Product.vue'
import Service from './views/service/service.vue'

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
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/ljaly',
    name: 'Ljaly',
    component: Ljaly
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