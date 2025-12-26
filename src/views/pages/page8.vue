<template>
  <div class="aliyun-ai-platform "  >
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex"  />
    <!-- 页面容器 -->
    <!-- 主容器 -->
    <div class="container mx-auto px-4 py-12 max-w-7xl bg-gradient-to-r from-purple-50 to-pink-50 " style="padding: 50px 10%; width: 100%;">
      <!-- 头部标题区域 -->
      <div class="text-center mb-16">
        <h1 class="text-[clamp(1.875rem,4vw,3rem)] font-bold text-textDark mb-4">
          安全可靠的<span class="text-product-secondary">云服务器 ECS</span>
        </h1>
        <p class="text-[clamp(1rem,2vw,1.5rem)] text-textLight mb-8">
          让您随时获取更强劲、更灵活、更低成本的澎湃算力
        </p>
        <!-- 按钮组 -->
        <div class="flex justify-center gap-4">
          <button @click="toLInk('/pages/page9')" class="bg-product-primary  text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all shadow-md">
            立即购买
          </button>
          <button  @click="toLInk('/pages/page4')" class="bg-white text-textDark border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all shadow-sm">
            免费试用
          </button>
        </div>
      </div>

      <!-- 特性展示区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- 高稳定性 -->
        <div class="text-center">
          <h3 class="text-xl font-bold text-product-secondary mb-2">高稳定性</h3>
          <p class="text-sm text-textLight">
            单实例可用性达99.975%，跨可用区实例可用性99.995%，业内领先
          </p>
        </div>
        <!-- 极致性能 -->
        <div class="text-center">
          <h3 class="text-xl font-bold text-product-secondary mb-2">极致性能</h3>
          <p class="text-sm text-textLight">
            全栈定制计算平台，搭载自研CPU芯片，计算、网络、存储等多个性能维度业界领先
          </p>
        </div>
        <!-- 安全可靠 -->
        <div class="text-center">
          <h3 class="text-xl font-bold text-product-secondary mb-2">安全可靠</h3>
          <p class="text-sm text-textLight">
            可信计算、硬件加密、虚拟化加密计算，通过多方国际安全认证
          </p>
        </div>
        <!-- 高性价比 -->
        <div class="text-center">
          <h3 class="text-xl font-bold text-product-secondary mb-2">高性价比</h3>
          <p class="text-sm text-textLight">
            无需固定资产的投入，资源按需使用，成本大大降低，让客户享受技术红利
          </p>
        </div>
      </div>

      <!-- 产品卡片区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- e实例卡片 -->
        <div class="bg-white rounded-lg shadow-md p-6 card-hover">
          <div class="flex items-center mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">限1件</span>
            <h4 class="font-bold text-textDark">e实例（个人开发者必选）</h4>
          </div>
          <ul class="space-y-2 mb-6 text-sm text-textLight">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              实例：2核2G
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              购买时长：1年
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              数量：1
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <button class="border border-gray-300 text-textDark px-4 py-2 rounded text-sm hover:bg-gray-50 transition-all">
              立即购买
            </button>
            <div class="text-right">
              <p class="text-product-primary font-bold">¥99.00<span class="text-xs text-textLight ml-1">/年</span></p>
              <p class="text-xs text-textLight">官网折扣价:¥1009.19/年</p>
            </div>
          </div>
        </div>

        <!-- u2a实例卡片 -->
        <div class="bg-white rounded-lg shadow-md p-6 card-hover">
          <div class="flex items-center mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">新人专享</span>
            <h4 class="font-bold text-textDark">u2a实例（初创企业优选）</h4>
          </div>
          <ul class="space-y-2 mb-6 text-sm text-textLight">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              实例：2核4G
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              购买时长：1年
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              数量：1
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <button class="border border-gray-300 text-textDark px-4 py-2 rounded text-sm hover:bg-gray-50 transition-all">
              立即购买
            </button>
            <div class="text-right">
              <p class="text-product-primary  font-bold">¥492.60<span class="text-xs text-textLight ml-1">/年</span></p>
              <p class="text-xs text-textLight">官网折扣价:¥1438.68/年</p>
            </div>
          </div>
        </div>

        <!-- c9a实例卡片 -->
        <div class="bg-white rounded-lg shadow-md p-6 card-hover">
          <div class="flex items-center mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">限1件</span>
            <h4 class="font-bold text-textDark">c9a实例（中大型企业首选）</h4>
          </div>
          <ul class="space-y-2 mb-6 text-sm text-textLight">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              实例：4核8G
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              购买时长：1个月
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-green-500 mr-2"></i>
              数量：1
            </li>
          </ul>
          <div class="flex justify-between items-center">
            <button class="border border-gray-300 text-textDark px-4 py-2 rounded text-sm hover:bg-gray-50 transition-all">
              立即购买
            </button>
            <div class="text-right">
              <p class="text-product-primary  font-bold">¥330.38<span class="text-xs text-textLight ml-1">/月</span></p>
              <p class="text-xs text-textLight">官网折扣价:¥404.72/月</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页指示器 -->
      <div class="flex justify-center mt-8">
        <div class="text-sm text-textLight">
          <span class="mr-2"><i class="fa-solid fa-angle-left"></i></span>
          1/2
          <span class="ml-2"><i class="fa-solid fa-angle-right"></i></span>
        </div>
      </div>
    </div>
    <div class=" mx-auto px-4 sm:px-6  py-12" style="width: 100%; padding: 30px 10%">
      <!-- 产品动态区域 -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-center mb-8">产品动态</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 第一个卡片 -->
          <div class="border rounded-lg p-6 card-shadow relative overflow-hidden" style="background: #fff; border-radius: 0">
            <!-- 标签 -->
            <span class="text-label bg-primary/10 text-primary border-primary/20">全新发布</span>
            <h3 class="text-lg font-semibold mt-2 mb-4">9代Intel实例g9i正式商业化</h3>
            <!-- 背景图占位 -->
            <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-100 opacity-50 rounded-tl-full"></div>
          </div>

          <!-- 第二个卡片 -->
          <div class="border rounded-lg p-6 card-shadow" style="background: #fff; border-radius: 0">
            <!-- 第一行 -->
            <div class="mb-6 pb-6 border-b border-gray-100">
              <span class="text-label">全新发布</span>
              <h3 class="text-lg font-semibold mt-2">通用算力型实例u2a开放公测</h3>
            </div>
            <!-- 第二行 -->
            <div>
              <span class="text-label">全新发布</span>
              <h3 class="text-lg font-semibold mt-2">通用算力型实例u2i正式商业化</h3>
            </div>
          </div>

          <!-- 第三个卡片 -->
          <div class="border rounded-lg p-6 card-shadow" style="background: #fff; border-radius: 0">
            <!-- 第一行 -->
            <div class="mb-6 pb-6 border-b border-gray-100">
              <span class="text-label">开放领取</span>
              <h3 class="text-lg font-semibold mt-2">ECS专属安全防护包多重加固全面防护</h3>
            </div>
            <!-- 第二行 -->
            <div>
              <span class="text-label">全新发布</span>
              <h3 class="text-lg font-semibold mt-2">9代AMD实例g9a正式商业化</h3>
            </div>
          </div>
        </div>

      </section>

      <!-- 产品简介区域 -->
      <section style="width: 100%; padding: 30px 0">
        <h2 class="text-2xl font-bold text-center mb-8">产品简介</h2>
        <div class="mx-auto text-center text-gray-600 leading-relaxed">
          <p class="mb-4">阿里云弹性计算十五年深厚技术积淀，为企业与开发者提供稳如磐石、性能优异的计算服务，满足上百种场景的业务诉求。</p>
          <p>云服务器ECS (Elastic Compute Service) 是阿里云提供的性能卓越、稳定可靠、弹性扩展的IaaS (Infrastructure as a Service) 级别云计算服务。云服务器ECS免去了您采购IT硬件的前期准备，让您像使用水、电、天然气等公共资源一样便捷、高效地使用服务器，实现计算资源的即开即用和弹性伸缩。阿里云ECS持续提供创新型服务器，解决多种业务需求，助力您的业务发展。</p>
        </div>
        <img src="/src/static/img/pic_28.png" alt="" style="width: 100%; height: auto">
      </section>
    </div>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-12" style="width: 100%; padding: 50px 10%">
      <!-- 标题区域 -->
      <div class="text-center mb-12">
        <h1 class="text-[clamp(1.875rem,4vw,2.5rem)] font-bold text-gray-900 mb-4">产品优势</h1>
        <p class="text-gray-600 max-w-3xl mx-auto">
          阿里云服务器ECS是阿里云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure as a Service）级别云计算服务。选择云服务器ECS，您可以轻松构建具备以下优势的计算资源
        </p>
      </div>

      <!-- 第一部分：高稳定性承诺 -->
      <div class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- 左侧图表卡片 -->
          <div class="card-gradient rounded-xl p-8 shadow-lg">
            <img src="/src/static/img/pic_29.jpg" alt="计费方式展示" class="w-full h-full object-cover rounded-md">
          </div>

          <!-- 右侧文字内容 -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">高稳定性承诺，保障业务连续性</h2>
            <p class="text-gray-600 mb-6">
              单实例SLA达99.975%，多可用区多实例SLA达99.995%，云盘可靠性达99.9999999%。可实现宕机自动迁移，快照备份，支持跨可用区的高可用架构设计与自动恢复能力，保障业务连续性。
            </p>
            <a href="#" class="inline-flex items-center text-aliyun font-medium hover:text-aliyun-dark transition-colors">
              查看更多
              <i class="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 第二部分：灵活的售卖形式 -->
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- 左侧截图卡片 -->
          <div class="card-gradient rounded-xl p-8 shadow-lg">
            <div class="bg-white/80 rounded-lg p-4">
              <img src="/src/static/img/pic_30.png" alt="计费方式展示" class="w-full h-full object-cover rounded-md">
            </div>
          </div>

          <!-- 右侧文字内容 -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">灵活的售卖形式和弹性保障，大幅降低资源成本</h2>
            <p class="text-gray-600 mb-6">
              提供多种弹性付费方式，可有效降低企业IT成本。支持分钟级别创建万台实例，满足突发需求进行灵活的弹性扩容，计算资源、存储空间、网络带宽可分别按需升降。
            </p>
            <a href="#" class="inline-flex items-center text-aliyun font-medium hover:text-aliyun-dark transition-colors">
              查看更多
              <i class="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
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
      }
    }
  },
  methods: {
    toLInk(link){
      this.$router.push(link)

    },

  }
}
</script>

<style scoped>
/* 所有产品页面样式 */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10%;
}

.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
}
.content-auto {
  content-visibility: auto;
}
.text-label {
  @apply text-xs text-gray-400 inline-block px-1.5 py-0.5 border border-gray-200 rounded mr-2;
}
.card-shadow {
  @apply shadow-sm hover:shadow-md transition-shadow duration-200;
}
</style>
