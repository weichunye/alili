<template>
  <div class="aliyun-ai-platform "  >
    <!-- 立即购买 -->
    <Header :active-index="activeIndex"  />
    <!-- 顶部banner区域 -->
    <div class="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-2">预约咨询</h1>
        <p class="text-gray-600 max-w-3xl">
          阿里云希望让更多企业和开发者用上先进的公共云计算服务，加速云计算在中国各行各业的普及和发展。
        </p>
      </div>
    </div>

    <!-- 表单区域 -->
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- 必填提示 -->
      <div class="bg-gray-200 py-1 px-3 text-sm text-gray-600 mb-6 inline-block">
        星号*表示必填信息
      </div>

      <form class="space-y-6">
        <!-- 需求场景 -->
        <div class="mb-6">
          <label for="scenario" class="block text-sm font-medium text-gray-700 mb-1">
            需求场景<span class="required-mark">*</span>
          </label>
          <input
              type="text"
              id="scenario"
              placeholder="请输入或选择您的咨询场景"
              class="w-full px-3 py-2 border border-gray-300 rounded form-input-focus"
              required
          >
        </div>

        <!-- 姓名和手机号行 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- 姓名 -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              姓名<span class="required-mark">*</span>
            </label>
            <input
                type="text"
                id="name"
                placeholder="请输入您的姓名"
                class="w-full px-3 py-2 border border-gray-300 rounded form-input-focus"
                required
            >
          </div>

          <!-- 手机号 -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
              手机号<span class="required-mark">*</span>
            </label>
            <div class="flex">
                        <span class="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500">
                            +86
                        </span>
              <input
                  type="tel"
                  id="phone"
                  placeholder="请输入您的联系方式"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-r-md form-input-focus"
                  required
              >
            </div>
          </div>
        </div>

        <!-- 公司名称和公司类型行 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- 公司名称 -->
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-1">
              公司名称
            </label>
            <input
                type="text"
                id="company"
                placeholder="请输入您的公司名称"
                class="w-full px-3 py-2 border border-gray-300 rounded form-input-focus"
            >
          </div>

          <!-- 公司类型 -->
          <div>
            <label for="company-type" class="block text-sm font-medium text-gray-700 mb-1">
              公司类型
            </label>
            <select
                id="company-type"
                class="w-full px-3 py-2 border border-gray-300 rounded form-input-focus bg-white"
            >
              <option value="">请选择</option>
              <option value="enterprise">企业</option>
              <option value="startup">初创公司</option>
              <option value="government">政府/事业单位</option>
              <option value="individual">个人</option>
            </select>
          </div>
        </div>

        <!-- 隐私政策同意 -->
        <div class="mb-6">
          <label class="inline-flex items-center">
            <input type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
            <span class="ml-2 text-sm text-gray-600">
                        我已阅读《<a href="#" class="text-primary hover:underline">隐私政策说明</a>》，并同意阿里云通过电子邮件、邮件或电话与我联系
                    </span>
          </label>
        </div>

        <!-- 提交按钮 -->
        <button
            type="submit"
            class="px-6 py-2 bg-primary text-white font-medium rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        >
          提交
        </button>
      </form>
    </div>

    <!-- 更多服务区域 -->
    <div class="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold mb-8">更多服务</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 定价频道 -->
          <div class="bg-white p-6 rounded shadow-sm">
            <h3 class="text-lg font-semibold mb-2">定价频道</h3>
            <p class="text-sm text-gray-600">
              了解阿里云定价策略，自助估算价格，持续管控和优化成本
            </p>
          </div>

          <!-- 价格计算器 -->
          <div class="bg-white p-6 rounded shadow-sm">
            <h3 class="text-lg font-semibold mb-2">价格计算器</h3>
            <p class="text-sm text-gray-600">
              自助选配和估算价格
            </p>
          </div>

          <!-- 免费试用 -->
          <div class="bg-white p-6 rounded shadow-sm">
            <h3 class="text-lg font-semibold mb-2">免费试用</h3>
            <p class="text-sm text-gray-600">
              立刻领用云产品，开启云上实践之旅
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'Product',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '2',
      checkedCategories: {
        compute: false,
        gpu: false,
        bareMetal: false,
        ecI: false,
        ebs: false,
        eas: false,
        container: false
      },
      // 控制分类展开/折叠状态
      expandedCategories: {
        compute: true,  // 默认展开计算分类
        storage: false,
        network: false,
        security: false,
        database: false,
        ai: false,
        cloudNative: false,
        enterprise: false,
        iot: false,
        devTools: false,
        migration: false,
        privateCloud: false
      },
      num:1
    }
  },
  methods: {
    toLInk(link){
      this.$router.push(link)

    },

  },
  mounted() {
    // 卡片选中效果
    document.querySelectorAll('.rounded-lg.p-4').forEach(card => {
      card.addEventListener('click', function() {
        // 清除同级别卡片的选中状态
        this.parentElement.querySelectorAll('.rounded-lg.p-4').forEach(sibling => {
          sibling.classList.remove('border-2', 'border-secondary', 'bg-secondary/5');
          sibling.classList.add('border', 'border-gray-200');
        });

        // 设置当前卡片为选中状态
        this.classList.remove('border', 'border-gray-200');
        this.classList.add('border-2', 'border-secondary', 'bg-secondary/5');
      });
    });
  }
}
</script>

<style scoped>
/* 所有产品页面样式 */
.content-auto {
  content-visibility: auto;
}
.bg-gradient-blue {
  background: linear-gradient(to bottom, rgba(240, 248, 255, 0.8), rgba(255, 255, 255, 0));
}
</style>
