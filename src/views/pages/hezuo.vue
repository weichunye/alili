<template>
  <div class="aliyun-page ">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <div class="flex h-screen overflow-hidden" style="width: 100%; padding: 60px 10% ;">
      <div class="max-w-2xl mx-auto">
        <!-- 表单容器 -->
        <form class="space-y-6">
          <!-- 姓名输入项 -->
          <div class="space-y-2">
            <label class="form-label-required block text-gray-800">姓名:</label>
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 transition-colors" placeholder="">
          </div>

          <!-- 联系方式输入项 -->
          <div class="space-y-2">
            <label class="form-label-required block text-gray-800">联系方式:</label>
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 transition-colors" placeholder="">
          </div>

          <!-- 企业名称输入项 -->
          <div class="space-y-2">
            <label class="block text-gray-800">企业名称:</label>
            <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-blue-500 transition-colors" placeholder="">
          </div>

          <!-- 业务需求复选框组 -->
          <div class="space-y-3">
            <label class="form-label-required block text-gray-800">业务需求:</label>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="demand1" class="w-4 h-4 cursor-pointer">
                <label for="demand1" class="checkbox-label">大模型推理调用</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="demand2" class="w-4 h-4 cursor-pointer">
                <label for="demand2" class="checkbox-label">大模型AI应用开发</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="demand3" class="w-4 h-4 cursor-pointer">
                <label for="demand3" class="checkbox-label">大模型训练工具</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="demand4" class="w-4 h-4 cursor-pointer">
                <label for="demand4" class="checkbox-label">大模型在线部署</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="demand5" class="w-4 h-4 cursor-pointer">
                <label for="demand5" class="checkbox-label">其他</label>
              </div>
            </div>
          </div>

          <!-- 应用场景复选框组 -->
          <div class="space-y-3">
            <label class="block text-gray-800">应用场景:</label>
            <div class="space-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="scene1" class="w-4 h-4 cursor-pointer">
                <label for="scene1" class="checkbox-label">智能客服</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene2" class="w-4 h-4 cursor-pointer">
                <label for="scene2" class="checkbox-label">文本创作、改写和续写等</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene3" class="w-4 h-4 cursor-pointer">
                <label for="scene3" class="checkbox-label">代码编写</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene4" class="w-4 h-4 cursor-pointer">
                <label for="scene4" class="checkbox-label">智能数据分析</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene5" class="w-4 h-4 cursor-pointer">
                <label for="scene5" class="checkbox-label">图片创作</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene6" class="w-4 h-4 cursor-pointer">
                <label for="scene6" class="checkbox-label">视频创作</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene7" class="w-4 h-4 cursor-pointer">
                <label for="scene7" class="checkbox-label">智能设备</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene8" class="w-4 h-4 cursor-pointer">
                <label for="scene8" class="checkbox-label">企业服务</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="scene9" class="w-4 h-4 cursor-pointer">
                <label for="scene9" class="checkbox-label">其他</label>
              </div>
            </div>
          </div>

          <!-- 隐私政策同意项 -->
          <div class="flex items-center">
            <input type="checkbox" id="privacy" class="w-4 h-4 cursor-pointer">
            <label for="privacy" class="checkbox-label">我已阅读《阿里云用户隐私政策》，并同意阿里云通过电子邮件、邮件或电话与我联系</label>
          </div>

          <!-- 提交按钮 -->
          <button type="button" class="w-full bg-blue-600 text-white py-3 rounded cursor-pointer hover:bg-blue-700 transition-colors">提交</button>
        </form>
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
.form-label-required::before {
  content: '*';
  color: #ff0000;
  margin-right: 2px;
}
</style>
