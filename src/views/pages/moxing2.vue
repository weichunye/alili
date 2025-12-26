<template>
  <div class="aliyun-page ">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <div class="flex h-screen overflow-hidden" style="width: 100%; padding: 0 10%">
      <div class="flex h-screen overflow-hidden">
        <!-- 侧边栏 -->
        <aside class="w-64 bg-white border-r border-border flex flex-col">
          <!-- 侧边栏头部 -->
          <div class="px-6 py-4 border-b border-border">
            <h1 class="text-lg font-bold text-gray-800">模型广场</h1>
          </div>

          <!-- 侧边栏导航 -->
          <nav class="flex-1 overflow-y-auto px-2 py-4">
            <div class="mb-6">
              <p class="px-3 mb-2 text-xs ">模型分组</p>
              <div class="nav-item nav-item-active">
                <i class="fa-solid fa-layer-group w-4 text-center"></i>
                <span>模型广场</span>
              </div>
            </div>

            <div class="mb-6">
              <p class="px-3 mb-2 text-xs ">模型类型</p>
              <div class="nav-item">
                <i class="fa-solid fa-file-alt w-4 text-center"></i>
                <span>文本模型</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-microphone-lines w-4 text-center"></i>
                <span>语音模型</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-image w-4 text-center"></i>
                <span>视觉模型</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-cubes-stacked w-4 text-center"></i>
                <span>全模态模型</span>
              </div>
            </div>

            <div class="mb-6">
              <p class="px-3 mb-2 text-xs ">模型优化</p>
              <div class="nav-item">
                <i class="fa-solid fa-wand-magic-sparkles w-4 text-center"></i>
                <span>我的模型</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-chart-simple w-4 text-center"></i>
                <span>模型评测</span>
              </div>
            </div>

            <div class="mb-6">
              <p class="px-3 mb-2 text-xs ">工作台</p>
              <div class="nav-item">
                <i class="fa-solid fa-ruler-combined w-4 text-center"></i>
                <span>山 模型用量</span>
              </div>
            </div>

            <div class="mb-6">
              <p class="px-3 mb-2 text-xs ">模型管理</p>
              <div class="nav-item">
                <i class="fa-solid fa-gears w-4 text-center"></i>
                <span>批量推理</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-database w-4 text-center"></i>
                <span>模型部署</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-eye w-4 text-center"></i>
                <span>模型监控</span>
              </div>
              <div class="nav-item">
                <i class="fa-solid fa-comments w-4 text-center"></i>
                <span>模型问答</span>
              </div>
            </div>
          </nav>
        </aside>

        <!-- 主内容区 -->
        <main class="flex-1 overflow-y-auto bg-gray-50">
          <!-- 顶部筛选栏 -->
          <div class="bg-white border-b border-border p-4">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <!-- 左侧筛选 -->
              <div class="flex flex-wrap items-center gap-3">
                <!-- 供应商筛选 -->
                <div class="relative">
                  <select class="appearance-none bg-light border border-border rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                    <option>全部供应商</option>
                    <option>通义</option>
                    <option>通义千问</option>
                    <option>通义万相</option>
                  </select>
                  <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2  text-xs"></i>
                </div>

                <!-- 模型类型筛选 -->
                <div class="relative">
                  <select class="appearance-none bg-light border border-border rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                    <option>全部模型类型</option>
                    <option>多模态</option>
                    <option>全模态</option>
                    <option>文本</option>
                  </select>
                  <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2  text-xs"></i>
                </div>

                <!-- 模型能力筛选 -->
                <div class="relative">
                  <select class="appearance-none bg-light border border-border rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                    <option>全部模型能力</option>
                    <option>深度思考</option>
                    <option>文本生成</option>
                    <option>视觉理解</option>
                  </select>
                  <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2  text-xs"></i>
                </div>

                <!-- 模型数量 -->
                <div class="text-sm ">
                  模型 133
                </div>

                <!-- 搜索框 -->
                <div class="relative">
                  <input type="text" placeholder="请输入模型名称" class="bg-light border border-border rounded-md px-3 py-2 pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-48">
                  <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2  text-xs"></i>
                </div>
              </div>

              <!-- 右侧筛选 -->
              <div class="flex items-center gap-3">
                <button class="px-3 py-2 bg-primary text-white rounded-md text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
                  <i class="fa-solid fa-ranking-star"></i>
                  <span>模型对比</span>
                </button>

                <div class="flex items-center gap-2 text-sm">
                  <span class="">全部模型能力</span>
                  <i class="fa-solid fa-chevron-down  text-xs"></i>
                </div>

                <div class="flex items-center gap-2 text-sm">
                  <span class="">全部上下文长度</span>
                  <i class="fa-solid fa-chevron-down  text-xs"></i>
                </div>
              </div>
            </div>

            <!-- 快捷标签 -->
            <div class="flex flex-wrap gap-2 mt-3">
              <span class="tag bg-blue-50 text-primary border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">通义千问</span>
              <span class="tag bg-blue-50 text-primary border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">通义万相</span>
              <span class="tag bg-blue-50 text-primary border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">通义百聆</span>
              <span class="tag bg-blue-50 text-primary border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">通义坊模型</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">三方</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">DeepSeek</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">月之翰面</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">智晋AI</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">Black Forest Labs</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">MiniMax</span>
              <span class="tag bg-gray-50  border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">Stability AI</span>
            </div>
          </div>

          <!-- 公告栏 -->
          <div class="bg-blue-50 border-t border-blue-100 p-3 text-sm text-primary">
            <i class="fa-solid fa-bell mr-2"></i>
            <span class="line-clamp-1">诚邀您参加面模型服务产品用户调研，仅需1-3分钟，有机会获得100元西饼专代金券!</span>
            <a href="#" class="text-primary hover:underline ml-1">点击链接去填问卷</a>
          </div>

          <!-- 模型卡片列表 -->
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <!-- 模型卡片1 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">通义千问3-VL-Plus</h3>
                    <span class="tag bg-blue-50 text-primary border border-blue-100">Qwen3</span>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">视觉智能体业界领先，视觉理解</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">视觉理解</span>
                  </div>
                </div>
              </div>

              <!-- 模型卡片2 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">通义千问3-Max</h3>
                    <span class="tag bg-blue-50 text-primary border border-blue-100">Qwen3</span>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">通义千问系列M4模型，qwen3-max版本在整体编程与工具调用方面进行了专项升级，本次发布的正式版模型达到剑域SOTA水平，适配场景更加的智能体</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">文本生成</span>
                  </div>
                  <div class="text-xs ">2025-09-23</div>
                </div>
              </div>

              <!-- 模型卡片3 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">通义千问-Image-Plus</h3>
                    <div class="flex gap-1">
                      <span class="tag bg-blue-50 text-primary border border-blue-100">最新版本</span>
                      <span class="tag bg-blue-50 text-primary border border-blue-100">qwen-image-plus</span>
                    </div>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">通义千问系列图像生成模型，参数量规模200亿，具备卓越的文本图能力，在复杂文本、各类生成与编辑任务重表现出色，在多个公开基准测试中获得SOTA.</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">图片生成</span>
                  </div>
                  <div class="text-xs ">2025-09-23</div>
                </div>
              </div>

              <!-- 模型卡片4 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">通义千问-Image-Edit-Plus</h3>
                    <div class="flex gap-1">
                      <span class="tag bg-blue-50 text-primary border border-blue-100">最新版本</span>
                      <span class="tag bg-orange-50 text-new border border-orange-100">New</span>
                      <span class="tag bg-blue-50 text-primary border border-blue-100">qwen-image-edit-plus</span>
                    </div>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">通义千问系列图像生成模型在原图的基础上进一步优化了推理性能与系统稳定性，大幅缩短图像生成与编辑的响应时间；支持单火请求返回多张图...</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">图片生成</span>
                  </div>
                  <div class="text-xs ">2025-12-15</div>
                </div>
              </div>

              <!-- 模型卡片5 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">Z-Image-Turbo</h3>
                    <div class="flex gap-1">
                      <span class="tag bg-orange-50 text-new border border-orange-100">New</span>
                      <span class="tag bg-blue-50 text-primary border border-blue-100">image-turbo</span>
                    </div>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">Z-Image-Turbo是在rfinalAPI开放中变生文图开源模型世界第一的高效图像生成模型,仅用60亿参数和8步推理就能生成高大概模型量级的图片级真实感</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">图片生成</span>
                  </div>
                  <div class="text-xs ">2025-12-18</div>
                </div>
              </div>

              <!-- 模型卡片6 -->
              <div class="bg-white rounded-lg border border-border card-hover overflow-hidden">
                <div class="h-24 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <i class="fa-solid fa-brain text-4xl text-primary/50"></i>
                </div>
                <div class="p-3">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">通义千问3-VL-Plus</h3>
                    <div class="flex gap-1">
                      <span class="tag bg-blue-50 text-primary border border-blue-100">最新版本</span>
                      <span class="tag bg-blue-50 text-primary border border-blue-100">qwen-vl-plus</span>
                      <span class="tag bg-orange-50 text-new border border-orange-100">New</span>
                    </div>
                  </div>
                  <p class="text-sm  line-clamp-2 mb-3">Qwen3系列视觉理解模型，实现考模式和式思维模式的有效融合，视觉智能体能力在O1World等公开测试集上达到世界顶尖水平，此版本在vioding、空间推...</p>
                  <div class="flex flex-wrap gap-1 mb-3">
                    <span class="tag bg-gray-50  border border-gray-100">视觉理解</span>
                  </div>
                  <div class="text-xs ">2025-12-19</div>
                </div>
              </div>

              <!-- 更多卡片可以按照相同结构扩展 -->
            </div>
          </div>
        </main>
      </div>
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

<style>
/* 淡蓝半透明到全透明（搭配白色底色） */
.your-bg-class {
    background-image: linear-gradient(to right, rgba(24, 144, 255, 0.1), rgba(24, 144, 255, 0));
}
</style>
