<template>
  <div class="aliyun-page ">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <div class="flex h-screen overflow-hidden" style="width: 100%; padding: 60px 10% ;">
      <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- 整体布局：侧边导航 + 主内容 + 右侧产品卡片 -->
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧导航栏 -->
          <div class="w-full lg:w-48 shrink-0">
            <nav class="bg-sidebar rounded-lg p-4 h-fit">
              <ul class="space-y-3 text-sm">
                <li><a href="#intro" class="block py-2 px-3 hover:bg-blue-50 rounded text-primary font-medium">客户介绍</a></li>
                <li><a href="#challenge" class="block py-2 px-3 hover:bg-blue-50 rounded text-textSecondary">业务挑战</a></li>
                <li><a href="#solution" class="block py-2 px-3 hover:bg-blue-50 rounded text-textSecondary">阿里云的解决方案</a></li>
                <li><a href="#upgrade" class="block py-2 px-3 hover:bg-blue-50 rounded text-textSecondary">基于大模型实现交易机器人的全链路升级</a></li>
                <li><a href="#value" class="block py-2 px-3 hover:bg-blue-50 rounded text-textSecondary">业务价值</a></li>
              </ul>
            </nav>
          </div>

          <!-- 中间主内容区 -->
          <div class="flex-1">
            <!-- 顶部概述 -->
            <div class="mb-8 text-textSecondary">
              <p>哈啰基于阿里云通义千问的qwen-plus、qwen-turbo、qwen2-7b-instruct等模型组合，构建了用户意图识别、多轮对话、判责处置、智能问答等能力，实现了交易机器人的全链路各环节升级。</p>
            </div>

            <!-- 核心数据指标 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div class="text-center">
                <p class="text-big-number">30<span class="text-2xl">%</span></p>
                <p class="mt-2 text-textSecondary">客服运营成本降低</p>
              </div>
              <div class="text-center">
                <p class="text-big-number">5<span class="text-2xl">%</span></p>
                <p class="mt-2 text-textSecondary">租车 GMV 提升</p>
              </div>
              <div class="text-center">
                <p class="text-big-number">87<span class="text-2xl">%</span></p>
                <p class="mt-2 text-textSecondary">判责准确率</p>
              </div>
            </div>

            <!-- 客户介绍 -->
            <section id="intro" class="mb-10">
              <h2 class="text-xl font-bold mb-4">客户介绍</h2>
              <p class="text-textSecondary leading-relaxed">
                哈啰集团是国内专业的本地出行及生活服务平台，累计拥有超7.5亿注册用户，业务涵盖单车、助力车、顺风车、打车、租车等，致力于应用数字技术的红利，为人们提供更便捷的出行以及更好的智慧生活服务。日前，阿里云百炼大模型平台携手哈啰集团在智能出行领域展开新的业务探索。
              </p>
            </section>

            <!-- 业务挑战 -->
            <section id="challenge" class="mb-10">
              <h2 class="text-xl font-bold mb-4">业务挑战</h2>
              <div class="space-y-4 text-textSecondary leading-relaxed">
                <p>
                  哈啰集团在出行领域客诉量每日高达50万+单，同时订单处理流程复杂，且判责准确率不高，导致客服人工运营成本较高，面临降本压力较大。在售前环节，因场景较多、用户问题复杂，导购环节对 GMV 提升有限。
                </p>
                <p>
                  客户希望开发一款基于大模型的交易机器人，贯穿在业务交易的售前售中售后各个环节，提升业务效率和客户满意度。交易机器人在业务上需要融入现有业务环节，对交易全链路进行改造；在技术上要确保全链路的响应时间（RT）、查询量（QPM）等指标满足要求，面临的挑战较大。
                </p>
              </div>
            </section>

            <!-- 阿里云的解决方案 -->
            <section id="solution" class="mb-10">
              <h2 class="text-xl font-bold mb-4">阿里云的解决方案</h2>
              <div id="upgrade" class="mb-4">
                <h3 class="text-lg font-medium mb-2">基于大模型实现交易机器人的全链路升级</h3>
                <p class="text-textSecondary leading-relaxed">
                  哈啰基于通义千问的qwen-plus、qwen-turbo、qwen2-7b-instruct等模型组合，构建了用户意图识别、多轮对话、判责处置、智能问答等能力，实现了交易机器人的全链路各环节升级，同时引入RAG、COT、TOOL等技术构建Agent，以Agent 直联赋能业务，提升 GMV，实现全流程覆盖。
                </p>
              </div>
              <div style="padding: 50px 0">
                <img src="/src/static/img/pic_26.png" alt="背景装饰" class="w-full h-full object-cover">
              </div>
            </section>

            <!-- 业务价值（预留区域） -->
            <section id="value" class="mb-10">
              <h2 class="text-xl font-bold mb-4">业务价值</h2>
              <p class="text-textSecondary leading-relaxed">
              降低运营成本：基于百炼的智能出行客服，哈啰出行客服运营成本降低 30%+。
            </p>
              <p class="text-textSecondary leading-relaxed">
                提升 GMV：交易机器人的售前导购环节，帮助客户实现租车 GMV 提升 5%。
              </p>
              <p class="text-textSecondary leading-relaxed">
                提升用户体验：通过交易机器人判责和客服环节的大模型能力建设，大幅提升了用户体验，判责准确率高达 87%+，车主和乘客的客诉率显著下降。
              </p>





            </section>
          </div>

          <!-- 右侧产品卡片 -->
          <div class="w-full lg:w-64 shrink-0">
            <div class="border rounded-lg p-4 h-fit">
              <h3 class="text-base font-medium mb-3">使用的阿里云产品</h3>
              <div class="flex items-center mb-6">
                <input type="checkbox" id="product1" class="mr-2">
                <label for="product1" class="text-sm text-textSecondary">大模型服务平台百炼</label>
              </div>
              <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                免费试用
              </button>
            </div>
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
.content-auto {
  content-visibility: auto;
}
.text-big-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
}
</style>
