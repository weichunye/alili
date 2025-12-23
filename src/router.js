import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import BigModel from './views/BigModel.vue'
import Price from './views/price/price.vue'
import Ljaly from './views/ljaliy/ljaliy.vue'
import Product from './views/Product.vue'
import Service from './views/service/service.vue'
import Documentation from './views/Documentation.vue'
import Solutions from './views/Solutions.vue'

Vue.use(VueRouter)

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
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

