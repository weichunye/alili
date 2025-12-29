<template>
  <div class="aliyun-page your-bg-class">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

  <div style="width: 100%; padding: 0 10%; overflow: hidden">
    <div class="left">
      <div class="menu-container">
        <!-- 搜索框 -->
        <div class="search-wrapper">
          <el-input
              placeholder="搜索解决方案"
              prefix-icon="el-icon-search"
              size="small"
              class="search-input"
          ></el-input>
        </div>

        <!-- 多级菜单 -->
        <el-menu
            default-active="4-1-3"
            :default-openeds="['2', '4-1']"
            class="el-menu-vertical-demo"
            accordion
            background-color="#ffffff"
            text-color="#333333"
            active-text-color="#1890ff"
        >
          <!-- 一级菜单：解决方案首页 -->
          <el-menu-item index="1">
            <span slot="title">解决方案首页</span>
          </el-menu-item>

          <!-- 一级菜单：AI -->

          <el-submenu index="2">
            <template slot="title">AI</template>

            <!-- 二级菜单：数据分析与智能应用 -->
            <el-submenu index="2-1">
              <template slot="title">数据分析与智能应用</template>

              <!-- 三级菜单列表 -->
              <el-menu-item index="2-1-1">快速搭建企业经营数据大屏</el-menu-item>
              <el-menu-item index="2-1-2">AI 时代的分布式多模态数据处理实践</el-menu-item>
              <el-menu-item index="2-1-3">快速构建企业级数据分析 Agent</el-menu-item>
              <el-menu-item index="2-1-4">一站式时空决策，释放空间数据价值</el-menu-item>
              <el-menu-item index="2-1-5">原生 SQL 轻松实现多模态智能检索</el-menu-item>
              <el-menu-item index="2-1-6">MCP 赋能可视化 OLAP 智能体应用</el-menu-item>
              <el-menu-item index="22-1-7">Elasticsearch 智能运维 AI 助手</el-menu-item>
              <el-menu-item index="4-1-8">阿里云 Milvus 轻松实现文搜图&图搜图</el-menu-item>
              <el-menu-item index="2-1-9">轻松打造一站式图像智能检索引擎</el-menu-item>
              <el-menu-item index="2-1-10" class="active-menu">
                分析 Agent 实现一键 AI 数据洞察
                <div class="sub-title">分析 Agent 实现一键 AI 数据洞察_部署教程</div>
              </el-menu-item>
              <el-menu-item index="2-1-11">MCP 助力打通数据库管理分析 AI 助手</el-menu-item>
              <el-menu-item index="2-1-12">轻松实现客服数据智能分析与高效存储</el-menu-item>
              <el-menu-item index="2-1-13">构建复杂关系网络的智能洞察分析</el-menu-item>
              <el-menu-item index="2-1-14">ES Serverless 构建多模态图像检索</el-menu-item>
              <el-menu-item index="2-1-15">DMS Data Agent 开启智能分析之旅</el-menu-item>
              <el-menu-item index="2-1-16">Agent 赋能，一键生成智能分析报告</el-menu-item>
              <el-menu-item index="2-1-17">多源数据下的企业 AI 助手实践</el-menu-item>
              <el-menu-item index="2-1-18">Agent 赋能企业数据治理</el-menu-item>
              <el-menu-item index="2-1-19">原生 SQL 打造企业专属智能问答应用</el-menu-item>
            </el-submenu>
          </el-submenu>

          <!-- 一级菜单：互联网应用开发 -->
          <el-menu-item index="3">
            <span slot="title">互联网应用开发</span>
          </el-menu-item>

          <!-- 一级菜单：大数据（包含子菜单） -->
          <el-submenu index="4">
            <template slot="title">大数据</template>

            <!-- 二级菜单：数据分析与智能应用 -->
            <el-submenu index="4-1">
              <template slot="title">数据分析与智能应用</template>

              <!-- 三级菜单列表 -->
              <el-menu-item index="4-1-1">快速搭建企业经营数据大屏</el-menu-item>
              <el-menu-item index="4-1-2">AI 时代的分布式多模态数据处理实践</el-menu-item>
              <el-menu-item index="4-1-3">快速构建企业级数据分析 Agent</el-menu-item>
              <el-menu-item index="4-1-4">一站式时空决策，释放空间数据价值</el-menu-item>
              <el-menu-item index="4-1-5">原生 SQL 轻松实现多模态智能检索</el-menu-item>
              <el-menu-item index="4-1-6">MCP 赋能可视化 OLAP 智能体应用</el-menu-item>
              <el-menu-item index="4-1-7">Elasticsearch 智能运维 AI 助手</el-menu-item>
              <el-menu-item index="4-1-8">阿里云 Milvus 轻松实现文搜图&图搜图</el-menu-item>
              <el-menu-item index="4-1-9">轻松打造一站式图像智能检索引擎</el-menu-item>
              <el-menu-item index="4-1-10" class="active-menu">
                分析 Agent 实现一键 AI 数据洞察
                <div class="sub-title">分析 Agent 实现一键 AI 数据洞察_部署教程</div>
              </el-menu-item>
              <el-menu-item index="4-1-11">MCP 助力打通数据库管理分析 AI 助手</el-menu-item>
              <el-menu-item index="4-1-12">轻松实现客服数据智能分析与高效存储</el-menu-item>
              <el-menu-item index="4-1-13">构建复杂关系网络的智能洞察分析</el-menu-item>
              <el-menu-item index="4-1-14">ES Serverless 构建多模态图像检索</el-menu-item>
              <el-menu-item index="4-1-15">DMS Data Agent 开启智能分析之旅</el-menu-item>
              <el-menu-item index="4-1-16">Agent 赋能，一键生成智能分析报告</el-menu-item>
              <el-menu-item index="4-1-17">多源数据下的企业 AI 助手实践</el-menu-item>
              <el-menu-item index="4-1-18">Agent 赋能企业数据治理</el-menu-item>
              <el-menu-item index="4-1-19">原生 SQL 打造企业专属智能问答应用</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- 头部标题区域 -->
        <header class="mb-10">
          <h1 class="text-[clamp(1.875rem,3vw,2.5rem)] font-bold text-gray-900 mb-4">欢迎来到官方文档</h1>
          <p class="text-gray-600 max-w-3xl">
            阿里云官方技术文档，涵盖产品介绍、计费、操作指南、场景化用例、安全合规、开发参考等信息，帮助您更好地上云、用云、管云。
          </p>
        </header>

        <!-- 入门引导区域 -->
        <section class="mb-16">
          <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-gray-800 mb-6">由浅入深，开始使用阿里云</h2>
          <p class="text-gray-600 mb-8">手把手教你快速上手阿里云产品，助你轻松开启云上之旅。</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- 了解云计算 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-cloud text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">了解云计算</h3>
              </div>
              <p class="text-gray-600 text-sm">
                了解云计算基础概念及核心优势，全面认识云计算如何帮助您完成数字化转型。
              </p>
            </div>

            <!-- 了解阿里云 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-building-columns text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">了解阿里云</h3>
              </div>
              <p class="text-gray-600 text-sm">
                了解阿里云，以及阿里云能为您带来哪些价值。
              </p>
            </div>

            <!-- 免费试用 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-rocket text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">免费试用</h3>
              </div>
              <p class="text-gray-600 text-sm">
                140 多款云产品支持免费试用，帮助您立即开启云上实践之旅。
              </p>
            </div>

            <!-- 技术解决方案 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-puzzle-piece text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">技术解决方案</h3>
              </div>
              <p class="text-gray-600 text-sm">
                了解热门问题背后的解决方案，并动手体验和学习。
              </p>
            </div>

            <!-- 云采用框架 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-sitemap text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">云采用框架</h3>
              </div>
              <p class="text-gray-600 text-sm">
                提供清晰的路径与方法论，帮助您规划、实施和优化上云的每一步。
              </p>
            </div>

            <!-- 云点越架构 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-diagram-project text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">云点越架构</h3>
              </div>
              <p class="text-gray-600 text-sm">
                用云、管云的技术指导和最佳实践。
              </p>
            </div>
          </div>
        </section>

        <!-- 资源与工具区域 -->
        <section>
          <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-gray-800 mb-6">丰富的资源与工具</h2>
          <p class="text-gray-600 mb-8">提供全面的学习资料、开发工具和实用组件，帮您高效构建、优化和管理云上应用。</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- API -->
            <div class="border border-gray-200 rounded-lg overflow-hidden card-hover">
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <i class="fa-solid fa-code text-primary text-xl mr-3"></i>
                  <h3 class="font-semibold text-lg">API</h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  面向开发者一站式提供全方位的 API 查阅、文档、调用调试及SDK示例，帮助您快速通过 API 使用阿里云、便捷地完成二次开发
                </p>
              </div>
              <!-- 占位图片 -->
              <div class="bg-gray-100 h-32 flex items-center justify-center">
                <img src="https://picsum.photos/600/200?random=1" alt="API文档示例" class="w-full h-full object-cover">
              </div>
            </div>

            <!-- SDK -->
            <div class="border border-gray-200 rounded-lg overflow-hidden card-hover">
              <div class="p-6">
                <div class="flex items-center mb-3">
                  <i class="fa-solid fa-file-code text-primary text-xl mr-3"></i>
                  <h3 class="font-semibold text-lg">SDK</h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  为每个产品的每种开发语言提供专业的在线调试、部署指南和丰富的场景化示例并简化 OpenAPI 的使用过程，高效赋能云计算开发者
                </p>
              </div>
              <!-- 占位图片 -->
              <div class="bg-gray-100 h-32 flex items-center justify-center">
                <img src="https://picsum.photos/600/200?random=2" alt="SDK示例" class="w-full h-full object-cover">
              </div>
            </div>

            <!-- 镜像站 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-images text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">镜像站</h3>
              </div>
              <p class="text-gray-600 text-sm">
                170+开源软件镜像
              </p>
            </div>

            <!-- 资源编排 ROS -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-cubes text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">资源编排 ROS</h3>
              </div>
              <p class="text-gray-600 text-sm">
                IaC 自动部署云资源
              </p>
            </div>

            <!-- WebIDE -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-laptop-code text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">WebIDE</h3>
              </div>
              <p class="text-gray-600 text-sm">
                基于浏览器的IDE
              </p>
            </div>

            <!-- 运维编排 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-gears text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">运维编排</h3>
              </div>
              <p class="text-gray-600 text-sm">
                云上自动化运维管理
              </p>
            </div>

            <!-- Terraform -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-terminal text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">Terraform</h3>
              </div>
              <p class="text-gray-600 text-sm">
                基础架构开源管理工具
              </p>
            </div>

            <!-- 云命令行 -->
            <div class="border border-gray-200 rounded-lg p-6 card-hover">
              <div class="flex items-center mb-3">
                <i class="fa-solid fa-command text-primary text-xl mr-3"></i>
                <h3 class="font-semibold text-lg">云命令行</h3>
              </div>
              <p class="text-gray-600 text-sm">
                浏览器中的 Shell 环境
              </p>
            </div>
          </div>
        </section>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-8">
        <!-- 标题区域 -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">探索更多阿里云</h2>
          <p class="text-gray-600">深入挖掘阿里云的多样化产品与服务，满足不同场景下的业务需求。</p>
        </div>

        <!-- 卡片列表 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 客户案例卡片 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <svg class="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M840.4 300H800c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.4c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8H183.6c-4.4 0-8-3.6-8-8V376c0-4.4 3.6-8 8-8H224c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.4c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h656.8c4.4 0 8 3.6 8 8v40c0 4.4-3.6 8-8 8zM352 480V184c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v296c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zm320 0V184c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v296c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zM192 832V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zm320 0V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8z" fill="currentColor"/>
              </svg>
              <h3 class="text-lg font-semibold">客户案例</h3>
            </div>
            <p class="text-gray-600 text-sm">了解阿里云服务千行百业，为客户创新提速的成功故事</p>
          </div>

          <!-- 阿里云培训中心卡片 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <svg class="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M840.4 300H800c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.4c4.4 0 8 3.6 8 8v384c0 4.4-3.6 8-8 8H183.6c-4.4 0-8-3.6-8-8V376c0-4.4 3.6-8 8-8H224c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.4c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h656.8c4.4 0 8 3.6 8 8v40c0 4.4-3.6 8-8 8zM448 260h64v224h-64V260zm-192 0h64v224h-64V260zm384 0h64v224h-64V260zM192 832V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zm160 0V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zm160 0V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8zm160 0V480c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v352c0 4.4-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8z" fill="currentColor"/>
              </svg>
              <h3 class="text-lg font-semibold">阿里云培训中心</h3>
            </div>
            <p class="text-gray-600 text-sm">丰富上云技术领域的精品在线课程</p>
          </div>

          <!-- 阿里云控制台卡片 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <svg class="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M899.1 349.5H840V199.4c0-12.7-10.4-23.1-23.1-23.1h-63.5c-12.7 0-23.1 10.4-23.1 23.1v150.1h-136.9V199.4c0-12.7-10.4-23.1-23.1-23.1h-63.5c-12.7 0-23.1 10.4-23.1 23.1v150.1H307.6V199.4c0-12.7-10.4-23.1-23.1-23.1h-63.5c-12.7 0-23.1 10.4-23.1 23.1v150.1h-59.1c-17.7 0-32 14.3-32 32v530c0 17.7 14.3 32 32 32h698.2c17.7 0 32-14.3 32-32V381.5c0-17.7-14.3-32-32-32zM663.6 866.2H360.4V731.1h303.2v135.1zm90.7-269.3H360.4V499.9h394v197zM835.6 866.2H753.9V731.1h81.7v135.1z" fill="currentColor"/>
              </svg>
              <h3 class="text-lg font-semibold">阿里云控制台</h3>
            </div>
            <p class="text-gray-600 text-sm">一站式管理云资源与服务，轻松实现配置、监控与操作</p>
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
      activeMenu: '4-1-3',
      activeIndex: '1',
    }
  },
  methods: {

    handleMenuSelect(index) {
      this.activeMenu = index
      console.log('选中的菜单：', index)
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
.left{
  float: left;
  width: 400px;
  background-color: #f5f7fa;
  border-radius: 4px;
  padding: 16px 0;
}
.right{
  padding: 20px 50px;
  margin-left: 20px;
  float: left;
  width: calc(100% - 420px);
  background: #fff;
  border-radius: 4px;
}  .text-primary-title {
     font-size: clamp(1.5rem, 3vw, 2.25rem);
     font-weight: 700;
     color: #1f2937;
   }
.text-secondary-info {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #4b5563;
  line-height: 1.6;
}
.bg-card-light {
  background-color: #f9fafb;
}
.btn-deploy {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}
.btn-deploy:hover {
  background-color: #1d4ed8;
}
</style>


