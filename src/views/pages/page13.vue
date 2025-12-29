<template>
  <div class="aliyun-ai-platform "  >
    <!-- 立即购买 -->
    <Header :active-index="activeIndex"  />
    <!-- 顶部banner区域 -->
    <div class="flex  w-full overflow-hidden" style="height: calc(100Vh - 500px)">
      <!-- 左侧侧边栏 -->
      <aside class="w-64 bg-sidebar border-r border-gray-200 flex flex-col">
        <!-- 侧边栏标题 -->
        <div class="px-6 py-4 border-b border-gray-200 font-medium text-lg">支持与服务</div>

        <!-- 侧边栏菜单 -->
        <div class="flex-1 overflow-y-auto scrollbar-hide px-2 py-2">
          <!-- 自助服务 -->
          <div class="mb-4">
            <div class="px-2 py-1 text-sm text-textSecondary font-medium mb-1">自助服务</div>
            <ul class="space-y-1">
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">自助服务</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">售后服务</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">在线服务</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">提交工单</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">我的工单</a></li>
            </ul>
          </div>

          <!-- 售中服务 -->
          <div class="mb-4">
            <div class="px-2 py-1 text-sm text-textSecondary font-medium mb-1">售中服务</div>
            <ul class="space-y-1">
              <li><a href="#" class="block px-3 py-2 rounded text-sm bg-highlight text-primary border-l-2 border-primary">在线服务</a></li>
            </ul>
          </div>

          <!-- 服务配置 -->
          <div class="mb-4">
            <div class="px-2 py-1 text-sm text-textSecondary font-medium mb-1">服务配置</div>
            <ul class="space-y-1">
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">服务配置</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">服务授权</a></li>
            </ul>
          </div>

          <!-- 建议和投诉 -->
          <div>
            <div class="px-2 py-1 text-sm text-textSecondary font-medium mb-1">建议和投诉</div>
            <ul class="space-y-1">
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">我要建议</a></li>
              <li><a href="#" class="block px-3 py-2 rounded text-sm hover:bg-gray-100">我要投诉</a></li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- 中间主内容区 -->
      <main class="flex-1 flex flex-col bg-gradient-cloud relative overflow-hidden">
        <!-- 主内容区域 -->
        <div class="flex-1 flex flex-col items-center justify-center px-8">
          <!-- 用户头像 -->
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-4">
            <img src="https://via.placeholder.com/64" alt="用户头像" class="w-full h-full object-cover">
          </div>

          <!-- 欢迎语 -->
          <div class="text-center mb-8">
            <h1 class="text-[clamp(1.25rem,2vw,1.75rem)] font-medium text-textPrimary">您好，欢迎使用</h1>
            <h2 class="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-primary">阿里云在线服务</h2>
          </div>

          <!-- 快捷入口 -->
          <div class="w-full max-w-md space-y-3 mb-8">
            <div class="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer">
              <span class="text-sm text-textPrimary">超值云产品先购，9分计划超划算</span>
              <i class="fa-solid fa-chevron-right text-xs text-textTertiary"></i>
            </div>
            <div class="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer">
              <span class="text-sm text-textPrimary">超1000万大模型免费token免费体验</span>
              <i class="fa-solid fa-chevron-right text-xs text-textTertiary"></i>
            </div>
            <div class="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer">
              <span class="text-sm text-textPrimary">16+云产品免费试用，最高可享460元额度</span>
              <i class="fa-solid fa-chevron-right text-xs text-textTertiary"></i>
            </div>
          </div>

          <!-- 功能按钮 -->
          <div class="flex space-x-6 mb-12">
            <button class="flex flex-col items-center text-sm text-textPrimary hover:text-primary transition-colors">
              <i class="fa-solid fa-headset text-xl mb-1"></i>
              <span>我来咨询</span>
            </button>
            <button class="flex flex-col items-center text-sm text-textPrimary hover:text-primary transition-colors">
              <i class="fa-solid fa-thumbs-up text-xl mb-1"></i>
              <span>我的优惠</span>
            </button>
            <button class="flex flex-col items-center text-sm text-textPrimary hover:text-primary transition-colors">
              <i class="fa-solid fa-headphones-simple text-xl mb-1"></i>
              <span>售后服务</span>
            </button>
          </div>
        </div>

        <!-- 输入框区域 -->
        <div class="px-8 pb-8">
          <div class="relative w-full max-w-4xl mx-auto">
                    <textarea
                        placeholder="请输入"
                        class="w-full h-12 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    ></textarea>
            <button class="absolute right-3 bottom-3 w-8 h-8 bg-primary text-white rounded flex items-center justify-center hover:bg-primary/90 transition-colors">
              <i class="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 背景装饰 -->
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl"></div>
      </main>

      <!-- 右侧侧边栏 -->
      <aside class="w-60 border-l border-gray-200 bg-white overflow-y-auto scrollbar-hide">
        <!-- 权益中心 -->
        <div class="p-4 border-b border-gray-200">
          <div class="font-medium mb-2 flex items-center">
            <span>权益中心</span>
            <span class="ml-1 text-xs bg-red-500 text-white px-1 rounded">HOT</span>
          </div>
          <ul class="space-y-1 text-sm text-textSecondary">
            <li class="hover:text-primary cursor-pointer">云服务器8元/年起</li>
            <li class="hover:text-primary cursor-pointer">大数据产品包5折</li>
            <li class="hover:text-primary cursor-pointer">大模型直降50%</li>
            <li class="hover:text-primary cursor-pointer">新时代 AI 模型输出价值直降90%，开团 AI</li>
            <li class="hover:text-primary cursor-pointer">16+云产品免费试用</li>
            <li class="hover:text-primary cursor-pointer">最高可享460元额度</li>
          </ul>
        </div>

        <!-- 热门推荐 -->
        <div class="p-4 border-b border-gray-200">
          <div class="font-medium mb-2 flex items-center">
            <span>热门推荐</span>
            <span class="ml-1 text-xs bg-red-500 text-white px-1 rounded">HOT</span>
          </div>
          <ul class="space-y-1 text-sm text-textSecondary">
            <li class="hover:text-primary cursor-pointer">领300元云工开物券，助力创科科研与算力</li>
            <li class="hover:text-primary cursor-pointer">加建</li>
            <li class="hover:text-primary cursor-pointer">官方推荐返现计划</li>
            <li class="hover:text-primary cursor-pointer">推荐新用户得奖励，单订单最高返9万</li>
            <li class="hover:text-primary cursor-pointer">解决方案免费试用</li>
            <li class="hover:text-primary cursor-pointer">解锁办公提效200元试用点，立即开启云上创</li>
          </ul>
        </div>

        <!-- 常见问题 -->
        <div class="p-4">
          <div class="font-medium mb-2">常见问题</div>
          <ul class="space-y-1 text-sm text-textSecondary">
            <li class="hover:text-primary cursor-pointer">如何完成账号企业实名认证</li>
          </ul>
        </div>
      </aside>
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
      window.open(link, "_blank")

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
