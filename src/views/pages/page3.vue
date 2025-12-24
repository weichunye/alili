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
      <div class="mb-6">
        <h1 class="text-primary-title mb-4">分析 Agent 实现一键 AI 数据洞察</h1>
        <!-- 预计阅读时长 -->
        <div class="flex items-center text-gray-500 text-sm mb-6">
          <i class="fa-regular fa-clock mr-2"></i>
          <span>预计阅读时长：9 分钟</span>
        </div>
        <!-- 核心描述 -->
        <p class="text-secondary-info mb-8">
          针对企业在数据分析过程中面临的效率低下和缺乏深度等问题，Quick BI 以强大数据基座为引擎，推出分析 Agent"智能小Q"。它集五大 AI 智能体于一身，对话式完成看板搭建、取数问数、数据解读、报告生成、数据推送，让企业从"被动看数"迈向"主动用数"。
        </p>
      </div>

      <!-- 适用客户卡片 -->
      <div class="bg-card-light rounded-md p-6 mb-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">适用客户</h2>
        <ul class="space-y-3 text-secondary-info">
          <li class="flex items-start">
            <i class="fa-solid fa-check text-blue-600 mt-1 mr-3"></i>
            <span>面临分析深度缺乏和效率低的企业</span>
          </li>
          <li class="flex items-start">
            <i class="fa-solid fa-check text-blue-600 mt-1 mr-3"></i>
            <span>注重分析准确性与结果可靠的企业</span>
          </li>
          <li class="flex items-start">
            <i class="fa-solid fa-check text-blue-600 mt-1 mr-3"></i>
            <span>重视数据安全与权限精细管控的企业</span>
          </li>
        </ul>
      </div>

      <!-- 立即部署按钮 -->
      <div>
        <button class="btn-deploy">立即部署</button>
      </div>
      <div class="container mx-auto px-4 py-10 max-w-7xl">
        <!-- 标题部分 -->
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] text-title mb-8">AI 内核智能小Q，破解效率与洞察难题</h1>

        <!-- 内容卡片容器 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 卡片1：传统BI操作繁复，效率低下 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <h2 class="text-lg font-semibold text-gray-900 mb-3">传统 BI 操作繁复，效率低下</h2>
            <p class="text-content text-gray-700">
              传统 BI 需多工具手动完成数据分析，缺乏自动化支持，直接影响分析效率与决策时效。面对复杂分析需求时，业务用户需向技术部门提需求并等待排期，进一步延长分析周期。
            </p>
          </div>

          <!-- 卡片2：传统BI门槛高，洞察深度不足 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <h2 class="text-lg font-semibold text-gray-900 mb-3">传统 BI 门槛高，洞察深度不足</h2>
            <p class="text-content text-gray-700">
              传统 BI 专业门槛高，用户需掌握数据建模、统计分析及结果解读等能力。业务人员受限于技术背景，难以自主实施下钻、归因等深度分析，洞察停留于表面，无法有效挖掘业务价值与支撑战略决策。
            </p>
          </div>

          <!-- 卡片3：分析Agent智能洞察，高效决策 -->
          <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
            <h2 class="text-lg font-semibold text-gray-900 mb-3">分析 Agent 智能洞察，高效决策</h2>
            <p class="text-content text-gray-700">
              Quick BI 深度融合 BI 与 AI Agent 能力，拥有坚实的数据分析系统基座的同时，支持以对话形式完成从数据搭建、问数、解读、报告到主动推送的全链路流程，让人人都能拥有超级数据分析师。
            </p>
          </div>
        </div>
      </div>
      <!-- 页面容器 -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- 标题部分 -->
        <h1 class="text-3xl font-bold mb-8 text-gray-900">AI 驱动智能小Q，打造数据分析新体验</h1>

        <!-- 核心内容区 - 两栏布局 -->
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- 左侧图片展示区 -->
          <div class="lg:w-1/2 bg-gray-50 rounded-lg p-4 shadow-sm">
            <img src="https://p11-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/3e03dc9f4f864257b854178a5f2ced3b.png~tplv-a9rns2rl98-24:720:720.png?rcl=20251224164229DF191D6C4828E3DB2F56&rk3s=8e244e95&rrcfp=8a172a1a&x-expires=1767170550&x-signature=lOfmCfun70cJ69mcG7O4J2EFcAk%3D"
                 alt="智能小Q操作界面"
                 class="w-full h-auto rounded-md object-cover">
          </div>

          <!-- 右侧功能描述区 -->
          <div class="lg:w-1/2 space-y-6">
            <!-- 功能1：智能搭建 -->
            <div>
              <h2 class="text-xl font-semibold mb-2 text-gray-900">智能搭建，一键生成</h2>
              <p class="text-gray-700 leading-relaxed">
                用户可一键生成报表、对话式的图表创建和配置、自动美化布局及智能归因分析等功能，显著简化报表开发流程，支持快速响应业务分析需求。
              </p>
            </div>

            <!-- 功能2：智能问数 -->
            <div>
              <h2 class="text-xl font-semibold mb-2 text-gray-900">智能问数，秒级获取</h2>
              <p class="text-gray-700 leading-relaxed">
                通过自然语言交互直接获取数据结果，实现即问即答的数据消费模式，支持在PC与移动端快速选择数据集、输入问题、多轮对话及查看历史查询记录，大幅降低数据分析门槛。
              </p>
            </div>

            <!-- 功能3：智能解读 -->
            <div>
              <h2 class="text-xl font-semibold mb-2 text-gray-900">智能解读，深度分析</h2>
              <p class="text-gray-700 leading-relaxed">
                基于大模型能力自助解读仪表板数据，精准完成关键信息提炼与多维度剖析，支持单图表一键总结与多图表联合洞察，有效发现数据背后逻辑与业务含义。
              </p>
            </div>

            <!-- 功能4：智能报告 -->
            <div>
              <h2 class="text-xl font-semibold mb-2 text-gray-900">智能报告，全景洞察</h2>
              <p class="text-gray-700 leading-relaxed">
                基于 AI 智能体技术架构，一键生成深度分析报告，完成智能数据获取、自动化洞察发现和动态数据引入，并支持二次编辑与定制，实现从传统人工撰写向智能决策的高效转变。
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 技术方案应用场景区域 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">技术方案的广泛应用场景</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 卡片1：运营决策 -->
          <div class="border rounded p-4">
            <img src="https://placeholder.com/400x200" alt="运营决策" class="w-full h-40 object-cover mb-4">
            <h3 class="font-semibold text-lg mb-2">运营决策, 复盘生成</h3>
            <p class="text-sm text-gray-600">
              一键生成周期性深度分析报告, 整合渠道转化、活动ROI及用户留存等关键指标, 并分析不同策略对业务的影响效果, 为资源分配与战略决策提供可靠的数据支撑。
            </p>
          </div>

          <!-- 卡片2：销售分析 -->
          <div class="border rounded p-4">
            <img src="https://placeholder.com/400x200" alt="销售分析" class="w-full h-40 object-cover mb-4">
            <h3 class="font-semibold text-lg mb-2">销售分析, 秒级问答</h3>
            <p class="text-sm text-gray-600">
              直接自然语言提问, 实时获取客户行为、销售漏斗与区域业绩表现, 自动生成分析结果。"0"代码要求, 大幅降低数据获取门槛, 高效提升响应与决策效率。
            </p>
          </div>

          <!-- 卡片3：供应链调控 -->
          <div class="border rounded p-4">
            <img src="https://placeholder.com/400x200" alt="供应链调控" class="w-full h-40 object-cover mb-4">
            <h3 class="font-semibold text-lg mb-2">供应链调控, 异常归因</h3>
            <p class="text-sm text-gray-600">
              全面监控库存、需求与履约等多维度指标, 自动解读数据异常并快速定位瓶颈原因, 并提供优化策略与建议。将数据转化为决策依据, 精准提升供应链响应与风险控制能力。
            </p>
          </div>
        </div>
      </section>

      <!-- 阿里云免费试用区域 -->
      <section>
        <h2 class="text-2xl font-bold mb-6">阿里云为您提供云产品免费试用</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 试用卡片1：Quick BI -->
          <div class="border rounded p-4 flex flex-col justify-between">
            <div>
              <h3 class="font-semibold mb-1">智能商业分析 Quick BI</h3>
              <a href="#" class="text-blue-500 text-sm">专业版 50license 1个月</a>
            </div>
            <div class="flex justify-end items-center mt-4">
              <a href="#" class="text-xs text-gray-500 mr-4">试用必读</a>
              <button class="border border-gray-300 px-3 py-1 rounded text-sm">立即试用</button>
            </div>
          </div>

          <!-- 试用卡片2：Quick Audience -->
          <div class="border rounded p-4 flex flex-col justify-between">
            <div>
              <h3 class="font-semibold mb-1">智能用户增长 Quick Audience 标准版</h3>
              <span class="text-orange-500 text-xs ml-2">企业认证</span>
              <a href="#" class="block text-blue-500 text-sm mt-1">用户洞察及自动化营销 1个月</a>
            </div>
            <div class="flex justify-end items-center mt-4">
              <a href="#" class="text-xs text-gray-500 mr-4">试用必读</a>
              <button class="border border-gray-300 px-3 py-1 rounded text-sm">立即试用</button>
            </div>
          </div>
        </div>
      </section>
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


