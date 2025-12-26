<template>
  <div class="aliyun-ai-platform "  >
    <!-- 立即购买 -->
    <Header :active-index="activeIndex"  />
    <!-- 顶部试用点模块 -->
    <section class="bg-gradient-blue py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 mb-2">解决方案免费试用</h2>
        <p class="text-gray-600 text-sm sm:text-base">面向客户业务场景，提供一系列技术解决方案免费试用，便于客户完成POC验证</p>
      </div>

      <!-- 试用点卡片容器 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <!-- 什么是试用点 -->
        <div class="p-6 border-r border-gray-200 bg-white">
          <div class="flex items-center mb-3">
            <i class="fa-solid fa-lightbulb text-orange-500 mr-2"></i>
            <h3 class="font-semibold text-lg">什么是试用点</h3>
          </div>
          <p class="text-gray-600 text-sm mb-4">试用点是专用于阿里云解决方案免费试用的额度，用于解决方案学习及验证时创建的试用资源抵扣。</p>
          <a href="#" class="text-blue-600 text-sm hover:underline flex items-center">
            试用点领取及使用规则 <i class="fa-solid fa-circle-info text-xs ml-1"></i>
          </a>
        </div>

        <!-- 免费领取100试用点 -->
        <div class="p-6 border-r border-gray-200 bg-white">
          <h3 class="font-semibold text-lg mb-3">免费领取 100 试用点</h3>
          <p class="text-gray-600 text-sm mb-6">通过阿里云实名认证的用户，均可免费领取试用点，同一用户仅限领取1次，试用点领取后有效期为1年。</p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            立即领取
          </button>
        </div>

        <!-- 赢取100试用点激励 -->
        <div class="p-6 bg-white">
          <h3 class="font-semibold text-lg mb-3">赢取 100 试用点激励</h3>
          <p class="text-gray-600 text-sm mb-6">每完成1个解决方案免费试用，可获得10试用点激励，每个解决方案仅可获取一次激励机会，同一用户最多激励10次。</p>
          <button class="border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
            开始试用
          </button>
        </div>
      </div>
    </section>

    <!-- 从这里开始模块 -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">从这里开始</h2>

      <!-- 解决方案卡片容器 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 卡片1: Qwen-Image -->
        <div class="rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="bg-blue-50 p-4">
            <img src="https://picsum.photos/id/180/600/400" alt="Qwen-Image 生图告别文字乱码" class="w-full h-48 object-cover rounded">
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">Qwen-Image，生图告别文字乱码</h3>
            <p class="text-gray-600 text-sm mb-4">搭载业界领先的Qwen-Image系列模型，提供精准的图文生成和图像编辑能力，助您轻松创作清晰美观的中英文海报、Logo与创意图，此外，本方案还支持一键图生视频，为内容创作全面赋能。</p>
            <a href="#" class="text-blue-600 text-sm hover:underline flex items-center">
              立即试用 <i class="fa-solid fa-circle-info text-xs ml-1"></i>
            </a>
          </div>
        </div>

        <!-- 卡片2: 构建复杂关系网络的智能洞察分析 -->
        <div class="rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="bg-blue-50 p-4">
            <img src="https://picsum.photos/id/160/600/400" alt="构建复杂关系网络的智能洞察分析" class="w-full h-48 object-cover rounded">
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">构建复杂关系网络的智能洞察分析</h3>
            <p class="text-gray-600 text-sm mb-4">面对社交网络、推荐、反欺诈等复杂关联场景，企业亟需高性能图数据库，高效挖掘关系网络，提升洞察与决策效率，本方案将介绍如何基于云原生数据库 PolarDB 快速构建图数据分析应用。</p>
            <a href="#" class="text-blue-600 text-sm hover:underline">
              立即试用
            </a>
          </div>
        </div>

        <!-- 卡片3: ES Serverless 构建多模态图像检索 -->
        <div class="rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div class="bg-blue-50 p-4">
            <img src="https://picsum.photos/id/177/600/400" alt="ES Serverless 构建多模态图像检索" class="w-full h-48 object-cover rounded">
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">ES Serverless 构建多模态图像检索</h3>
            <p class="text-gray-600 text-sm mb-4">针对商品搜索中多模态特征融合困难，向量检索性能不足等问题，本方案基于阿里云Elasticsearch Serverless，依托标量化技术，大幅降低检索内存占用，实现百亿级向量毫秒级匹配。</p>
            <a href="#" class="text-blue-600 text-sm hover:underline">
              立即试用
            </a>
          </div>
        </div>
      </div>
    </section>
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
