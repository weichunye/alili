<template>
  <div class="aliyun-page your-bg-class">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <div class="flex h-screen overflow-hidden">
      <!-- 侧边栏 -->
      <aside class="w-64 bg-gray-100 border-r border-gray-200 flex flex-col">
        <!-- 侧边栏头部 -->
        <div class="p-4 border-b border-gray-200">
          <span class="text-gray-600 font-medium">[SOI]</span>
          <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded ml-2">大模型体验</span>
        </div>

        <!-- 侧边栏导航 -->
        <nav class="flex-1 overflow-y-auto py-4">
          <ul class="space-y-1 px-2">
            <li>
              <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg sidebar-item-active">
                <i class="fa-solid fa-brain w-5 text-center mr-2"></i>
                文本模型
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-200 text-gray-600 transition-colors">
                <i class="fa-solid fa-volume-high w-5 text-center mr-2"></i>
                语音合成
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-200 text-gray-600 transition-colors">
                <i class="fa-solid fa-video w-5 text-center mr-2"></i>
                视频生成
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-200 text-gray-600 transition-colors">
                <i class="fa-solid fa-desktop w-5 text-center mr-2"></i>
                Computer Use
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-200 text-gray-600 transition-colors">
                <i class="fa-solid fa-mobile-screen-button w-5 text-center mr-2"></i>
                Mobile Use
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 主内容区 -->
      <main class="flex-1 overflow-y-auto p-8">
        <!-- 欢迎标题区 -->
        <div class="text-center mb-8 mt-16">
          <h1 class="text-[clamp(1.5rem,3vw,2rem)] font-medium text-gray-700 mb-2">欢迎使用通义大模型</h1>
          <div class="flex items-center justify-center text-sm text-gray-500">
            <span class="mr-2">开始体验</span>
            <i class="fa-solid fa-star text-yellow-400 w-4 h-4"></i>
            <span class="mx-1 text-primary">通义千问-Plus</span>
            <i class="fa-solid fa-chevron-down w-4 h-4 text-gray-400"></i>
          </div>
        </div>

        <!-- 输入框区域 -->
        <div class="max-w-3xl mx-auto mb-16">
          <div class="relative rounded-lg border border-gray-200 input-shadow">
            <!-- 输入框 -->
            <textarea
                class="w-full h-20 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                placeholder="在这里输入内容，探索Open模型的无限可能" style="height: 200px"
            ></textarea>

            <!-- 输入框底部工具栏 -->
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 border-t border-gray-200 bg-gray-50 rounded-b-lg flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <i class="fa-solid fa-magic w-4 h-4 text-gray-500"></i>
                <select class="text-sm border-0 bg-transparent focus:outline-none text-gray-600">
                  <option>深度思考</option>
                  <option>快速回答</option>
                  <option>创意生成</option>
                </select>
                <span class="w-px h-4 bg-gray-200"></span>
                <button class="text-sm flex items-center text-gray-600 hover:text-primary transition-colors">
                  <i class="fa-solid fa-search w-4 h-4 mr-1"></i>
                  搜索
                </button>
              </div>
              <div class="flex items-center">
                <span class="text-xs text-gray-400 mr-2">登录后免费赠送每个模型100万token推理额度</span>
                <button class="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- 快捷功能标签 -->
          <div class="flex flex-wrap gap-2 mt-4 justify-center">
            <button class="px-3 py-1 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              网页开发
            </button>
            <button class="px-3 py-1 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              深度研究
            </button>
            <button class="px-3 py-1 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              代码生成
            </button>
            <button class="px-3 py-1 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              头脑风暴
            </button>
            <button class="px-3 py-1 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
              帮我写
            </button>
          </div>
        </div>

        <!-- 示例卡片区域 -->
        <div class="max-w-4xl mx-auto mt-12">
          <div class="text-center text-sm text-gray-500 mb-6">
            <span>选择模板，一键体验</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 卡片1 -->
            <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/seed/webdev/400/200" alt="网页开发示例" class="w-full h-32 object-cover">
              <div class="p-4">
                <h3 class="font-medium text-gray-700 mb-1">网页开发</h3>
                <p class="text-sm text-gray-500 line-clamp-2">写一个html5 Bird小游戏，可以直接玩</p>
              </div>
            </div>

            <!-- 卡片2 -->
            <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/seed/research/400/200" alt="深度研究示例" class="w-full h-32 object-cover">
              <div class="p-4">
                <h3 class="font-medium text-gray-700 mb-1">深度研究</h3>
                <p class="text-sm text-gray-500 line-clamp-2">调研中国芯片行业2025年技术发展趋势</p>
              </div>
            </div>

            <!-- 卡片3 -->
            <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/seed/code/400/200" alt="代码生成示例" class="w-full h-32 object-cover">
              <div class="p-4">
                <h3 class="font-medium text-gray-700 mb-1">代码生成</h3>
                <p class="text-sm text-gray-500 line-clamp-2">教我用 HTML/CSS 设计一个响应式的作品集网站</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import ProductCardSet from '../../components/ProductCardSet.vue'

export default {
  name: 'AliyunPage',
  components: {
    Header,
    Footer,
    ProductCardSet
  },
  data() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleMenuSelect(menuInfo) {
      // 根据Header组件传递的menuInfo进行处理
      // 由于Header组件内部已经处理了路由跳转，这里可以添加其他需要的逻辑
      console.log('菜单选择信息:', menuInfo)
    }
  }
}
</script>

<style scoped>
.aliyun-page {
  margin: 0 auto;
  font-family: "Microsoft Yahei", sans-serif;
  color: #333;
}
.your-bg-class {
  /* 淡蓝半透明到全透明（搭配白色底色） */
  background: linear-gradient(to right, rgba(224, 247, 255, 0.8), rgba(255, 255, 255, 0));
  background-color: #ffffff; /* 底色兜底 */
}
</style>


