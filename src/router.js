import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import BigModel from './views/BigModel.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router