import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './tailwind.css'
import router from './router'

Vue.use(ElementUI)

// 将Vue实例保存到变量中
const vueInstance = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 添加全局事件监听器处理primary-btn的点击事件
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('primary-btn')) {
    e.preventDefault()
    if (vueInstance) {
      if (e.target.textContent.includes('了解详情')) {
        vueInstance.$router.push('/pages/page3')
      } else if (e.target.textContent.includes('联系 AI 专家')) {
        vueInstance.$router.push('/pages/moxing1')
      }
    }
  }
})