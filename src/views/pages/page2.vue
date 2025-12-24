<template>
  <div class="aliyun-page your-bg-class">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

  <div style="width: 100%; padding: 0 10%">
    <section class="mb-16 text-center">
      <h2 class="text-[clamp(1.8rem,3vw,2.5rem)] font-bold mb-4" style="padding-top: 40px;">
        <span class="text-blue-600">AI大模型特惠</span>
        <span class="text-gray-800">热销精选</span>
      </h2>
      <p class="text-gray-600 text-sm md:text-base mb-8">
        开通阿里云百炼，免费体验超7000万大模型tokens | 100张图片生成 | 50秒视频创作
      </p>
      <!-- 功能按钮组 -->
      <div class="flex flex-wrap justify-center gap-2 mx-auto">
        <button class="flex items-center justify-center px-6 py-2 border border-gray-200 rounded hover:bg-white transition-colors">
          <i class="fa-solid fa-rocket mr-2 text-blue-500"></i>
          <span>免费体验</span>
        </button>
        <button class="flex items-center justify-center px-6 py-2 border border-gray-200 rounded hover:bg-white transition-colors">
          <i class="fa-solid fa-phone mr-2 text-blue-500"></i>
          <span>电话咨询</span>
        </button>
        <button class="flex items-center justify-center px-6 py-2 border border-gray-200 rounded hover:bg-white transition-colors">
          <i class="fa-solid fa-headset mr-2 text-blue-500"></i>
          <span>联系我们</span>
        </button>
        <button class="flex items-center justify-center px-6 py-2 border border-gray-200 rounded hover:bg-white transition-colors">
          <i class="fa-solid fa-calendar-check mr-2 text-blue-500"></i>
          <span>预约优惠</span>
        </button>
      </div>
    </section>

    <!-- 个人专区模块 -->
    <section class="text-center">
      <h2 class="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-4">
        <span class="text-blue-600">个人专区</span>
        <span class="text-gray-800">| 新手入门首选</span>
      </h2>
      <p class="text-gray-600 text-sm md:text-base">
        精选模型资源包与灵活计划，助您低成本开启智能之旅
        <a href="#" class="text-blue-600 hover:underline ml-1">预约AI专家服务</a>
      </p>
      <div>
        <ProductCardSet :title="null" :count="8"/>
      </div>
    </section>
    <section class="text-center" style="padding-top: 50px">
      <h2 class="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-4">
        <span class="text-blue-600">企业专区 </span>
        <span class="text-gray-800">| 为业务增长赋能</span>
      </h2>
      <p class="text-gray-600 text-sm md:text-base">
        企业级资源包与智能节省计划，为您的业务提供高性价比的智能支持
        <a href="#" class="text-blue-600 hover:underline ml-1">预约 AI 专家服务</a>
      </p>
      <div>
        <ProductCardSet :title="null" :count="12"/>
      </div>
    </section>
    <section class="text-center" style="padding-top: 50px">
      <h2 class="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-4">
        <span class="text-blue-600">图片/视频专区 </span>
        <span class="text-gray-800">| 秒级生成释放创意</span>
      </h2>
      <p class="text-gray-600 text-sm md:text-base">
        通义万相资源包与 Qwen-Image 资源包，助您高效产出优质视觉内容
        <a href="#" class="text-blue-600 hover:underline ml-1">预约 AI 专家服务</a>
      </p>
      <div>
        <ProductCardSet :title="null" :count="12"/>
      </div>
    </section>
    <section class="text-center" style="padding: 50px 0">
      <h2 class="text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-4">
        <span class="text-blue-600">应用专区 </span>
        <span class="text-gray-800">| 快速集成部署</span>
      </h2>
      <p class="text-gray-600 text-sm md:text-base">
        多模态开发套件、全妙、晓蜜等应用资源包，快速打造业务专属智能方案
        <a href="#" class="text-blue-600 hover:underline ml-1">预约 AI 专家服务</a>
      </p>
      <div>
        <ProductCardSet :title="null" :count="8"/>
      </div>
    </section>
  </div>
   <div class=" mx-auto px-4 py-12" style="width: 100%; padding:50px 10%; background: #fff;">
        <!-- 主容器：左侧标题 + 右侧表单 -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
            <!-- 左侧标题区域 -->
            <div class="w-full lg:w-2/3">
                <h1 class="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-800 mb-4">
                    预约 AI 专家服务
                    <span class="text-primary">获取优惠报价</span>
                </h1>
                <p class="text-gray-600 text-base">
                    开通阿里云百炼，免费体验7000万大模型tokens | 100张图片生成 | 50秒视频创作
                </p>
            </div>

            <!-- 右侧表单区域 -->
            <div class="w-full lg:w-1/3 space-y-3">
                <!-- 姓名输入项 -->
                <div class="space-y-1">
                    <label class="block text-sm text-gray-700 form-label-required">姓名</label>
                    <input 
                        type="text" 
                        placeholder="请输入您的姓名"
                        class="w-full px-3 py-2 border border-border rounded input-focus"
                    >
                </div>

                <!-- 联系方式 + 验证码按钮 -->
                <div class="space-y-1">
                    <label class="block text-sm text-gray-700 form-label-required">联系方式</label>
                    <div class="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="请输入联系方式"
                            class="flex-1 px-3 py-2 border border-border rounded input-focus"
                        >
                        <button class="px-3 py-2 bg-secondary text-white text-sm rounded cursor-not-allowed">
                            发送验证码
                        </button>
                    </div>
                </div>

                <!-- 验证码输入项 -->
                <div class="space-y-1">
                    <label class="block text-sm text-gray-700 form-label-required">验证码</label>
                    <input 
                        type="text" 
                        placeholder="请输入验证码"
                        class="w-full px-3 py-2 border border-border rounded input-focus"
                    >
                </div>

                <!-- 隐私政策勾选框 -->
                <div class="pt-1">
                    <label class="flex items-center text-xs text-gray-600 cursor-pointer">
                        <input type="checkbox" class="mr-2 h-4 w-4 text-primary">
                        <span>我已阅读《隐私政策说明》，并同意阿里云通过电子邮件、邮件或电话与我联系</span>
                    </label>
                </div>

                <!-- 按钮区域 -->
                <div class="flex gap-3 pt-2">
                    <button class="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                        立即提交
                    </button>
                    <button class="px-6 py-2 border border-primary text-primary rounded hover:bg-primary/5 transition-colors">
                        联系 AI 专家
                    </button>
                </div>
            </div>
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


