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
        <!-- 页面标题区域 -->
        <header class="mb-6">
          <h1 class="text-2xl font-bold text-gray-900 mb-2">ECS免费试用指南</h1>
          <div class="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span>更新时间：2025-09-29 09:44:23</span>
            <div class="flex items-center gap-3">
              <span>产品详情</span>
              <span>❤ 我的收藏</span>
            </div>
          </div>
          <p class="text-gray-700 mb-6">
            完成实名认证的云服务器 ECS 新用户，可免费试用 ECS 3 个月。为了让您在 3 个月内充分体验云服务器 ECS 的弹性及灵活性，我们特地给您准备 ECS 免费试用锦囊，帮助您在各个阶段更好地试用 ECS。
          </p>
        </header>

        <!-- 核心表格区域 -->
        <main class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-200 mb-8">
            <thead>
            <tr class="table-header-bg border-b border-gray-200">
              <th class="px-4 py-3 text-left font-medium text-gray-800 w-1/4">试用阶段</th>
              <th class="px-4 py-3 text-left font-medium text-gray-800 w-1/4">试用锦囊</th>
              <th class="px-4 py-3 text-left font-medium text-gray-800 w-1/2">一句话介绍</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">刚领取免费试用的用户&具备试用资格、但尚未领取免费试用的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">ECS 免费试用能做些什么</a>
              </td>
              <td class="px-4 py-3 text-gray-700">听听其他用户是怎么利用 ECS 免费试用的</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">刚刚领取 ECS 免费试用的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">手把手看懂免费试用</a>
              </td>
              <td class="px-4 py-3 text-gray-700">在一张图里面，用生活中的例子把免费试用的术语讲明白</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">处于免费试用初期的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">试用常见操作指南</a>
              </td>
              <td class="px-4 py-3 text-gray-700">6 大常见操作，一次性说清楚：如何查看试用进度、如何二次试用、如何释放试用 ECS、如何查看 ECS 实例信息、如何登录 ECS、如何重置密码</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">处于免费试用初期的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">ECS 免费试用可用于哪些场景</a>
              </td>
              <td class="px-4 py-3 text-gray-700">提供一些常见的操作和应用场景供参考，您还可以发挥创造力，深入挖掘 ECS 的用途和玩法</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">处于免费试用中后期的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">节省停机模式的妙用</a>
              </td>
              <td class="px-4 py-3 text-gray-700">一学就会！一个降低免费试用额度消耗过快的小技巧</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-3 text-gray-700">免费试用快到期的用户</td>
              <td class="px-4 py-3">
                <a href="#" class="text-primary link-hover">ECS 免费试用快到期了，怎么办</a>
              </td>
              <td class="px-4 py-3 text-gray-700">列出试用到期后的 4 类情形，30 秒快速定位您专属场景，并提供对应场景的操作路径</td>
            </tr>
            </tbody>
          </table>
        </main>

        <!-- 分页导航区域 -->
        <footer class="flex justify-between items-center text-sm text-gray-700 mb-8">
          <a href="#" class="link-hover text-primary">← 上一篇：控制台自定义购买并使用ECS实例</a>
          <a href="#" class="link-hover text-primary">下一篇：云服务器ECS试用攻略 →</a>
        </footer>

        <!-- 反馈区域 -->
        <div class="text-center text-gray-400 pt-4 border-t border-gray-200">
          <p class="mb-2">该文章对您有帮助吗？</p>
          <div class="flex justify-center items-center gap-4">
            <button class="hover:text-primary transition-colors">👍</button>
            <button class="hover:text-primary transition-colors">👎</button>
            <a href="#" class="text-primary link-hover">反馈</a>
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


