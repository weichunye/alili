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
import Benefits from './views/Benefits.vue'
import CloudMarket from './views/CloudMarket.vue'
// 导入合作伙伴页面组件
import Partner from './views/Partner.vue'
import CloudMarket from './views/cloudMarket/cloudMarket.vue'

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
  }, {
    path: '/cloudMarket',
    name: 'CloudMarket',
    component: CloudMarket
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
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: Benefits
  },
  {
    path: '/cloudmarket',
    name: 'CloudMarket',
    component: CloudMarket
  },
  // 添加合作伙伴页面路由
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router




