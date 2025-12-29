import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import BigModel from './views/BigModel.vue'
import Price from './views/price/price.vue'
import Ljaly from './views/ljaliy/ljaliy.vue'
import Product from './views/Product.vue'
import Service from './views/service/service.vue'
import Documentation from './views/Documentation.vue'//文档
import Solutions from './views/Solutions.vue'
import Benefits from './views/Benefits.vue'
// 导入合作伙伴页面组件
import Partner from './views/Partner.vue'
import CloudMarket from './views/cloudMarket/cloudMarket.vue'
// 导入控制台页面组件
import Console from './views/user/Console.vue'
// 导入pages目录下的组件
import Page1 from './views/pages/page1.vue'
import Page2 from './views/pages/page2.vue'
import Moxing1 from './views/pages/moxing1.vue'
import Moxing2 from './views/pages/moxing2.vue'
import page3 from './views/pages/page3.vue'//文旦详细
import page4 from './views/pages/page4.vue'//免费试用
import page5 from './views/pages/page5.vue'
import page6 from './views/pages/page6.vue'
import Hezuo from './views/pages/hezuo.vue'
import page7 from './views/pages/page7.vue'
import page8 from './views/pages/page8.vue'
import page9 from './views/pages/page9.vue'//立即购买
import page10 from './views/pages/page10.vue'//解决方案免费试用
import page11 from './views/pages/page11.vue'//新手指南
import page12 from './views/pages/page12.vue'//报价咨询
import page13 from './views/pages/page13.vue'//咨询
import page14 from './views/pages/page14.vue'//更多文档（官网文档）
import page15 from './views/pages/page15.vue'//我的试用（个人中心像）
import page16 from './views/pages/page16.vue'//免费试用指南
import Suggestion from './views/pages/Suggestion.vue'//建议提交

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
  },
  // 添加控制台页面路由
  {
    path: '/console',
    name: 'Console',
    component: Console
  },
  // 添加pages目录下的路由
  {
    path: '/pages/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/pages/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/pages/moxing1',
    name: 'moxing1',
    component: Moxing1
  }
  ,
  {
    path: '/pages/moxing2',
    name: 'moxing2',
    component: Moxing2
  } ,
  {
    path: '/pages/page3',
    name: 'page3',
    component: page3
  } ,
  {
    path: '/pages/page4',//免费试用
    name: 'page4',
    component: page4
  },
  {
    path: '/pages/hezuo',
    name: 'hezuo',
    component: Hezuo
  },
  {
    path: '/pages/page5',
    name: 'page5',
    component: page5
  },
  {
    path: '/pages/page6',
    name: 'page6',
    component: page6
  },
  {
    path: '/pages/page7',
    name: 'page7',
    component: page7
  },
  {
    path: '/pages/page8',
    name: 'page8',
    component: page8
  },
  {
    path: '/pages/page9',//立即购买
    name: 'page9',
    component: page9
  },
  {
    path: '/pages/page10',
    name: 'page10',
    component: page10
  },
  {
    path: '/pages/page11/:h',
    name: 'page11',
    component: page11  }
    ,

  {
    path: '/pages/page12',
    name: 'page12',
    component: page12
  },
  {
    path: '/pages/page13',
    name: 'page13',
    component: page13
  }, {
    path: '/pages/page14',
    name: 'page14',
    component: page14
  },
  {
    path: '/pages/suggestion',
    name: 'suggestion',
    component: Suggestion
  },
  {
    path: '/pages/page15',
    name: 'page15',
    component: page15
  },
  {
    path: '/pages/page16',
    name: 'page16',
    component: page16
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router













