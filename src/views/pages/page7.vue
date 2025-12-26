<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex"  />
    <!-- 页面容器 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左侧主内容区 -->
        <div class="lg:w-2/3 space-y-6">
          <!-- 面包屑导航 -->
          <div class="text-sm text-textLight flex items-center gap-2 mb-4">
            <a href="#" class="hover:text-primary">开发者社区</a>
            <i class="fa-solid fa-angle-right text-xs"></i>
            <a href="#" class="hover:text-primary">藏经阁</a>
            <i class="fa-solid fa-angle-right text-xs"></i>
            <span class="text-textColor">详情</span>
          </div>

          <!-- 书籍头部信息 -->
          <div class="bg-white rounded-lg p-6 custom-shadow flex flex-col sm:flex-row gap-6">
            <!-- 书籍封面 -->
            <div class="sm:w-1/4 flex justify-center sm:justify-start">
              <img src="/src/static/img/pic_27.png"
                   alt="阿里云产品手册2025版"
                   class="w-48 h-auto rounded-md border border-borderColor">
            </div>

            <!-- 书籍信息 -->
            <div class="sm:w-3/4 space-y-4">
              <h1 class="text-[clamp(1.5rem,3vw,2rem)] font-bold">阿里云产品手册2025版</h1>

              <!-- 基础信息行 -->
              <div class="flex flex-wrap gap-4 text-sm text-textLight">
                <div class="flex items-center gap-1">
                  <i class="fa-solid fa-eye"></i>
                  <span>8454</span>
                </div>
                <div class="flex items-center gap-1">
                  <i class="fa-solid fa-thumbs-up"></i>
                  <span>7067</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>作者：</span>
                  <span class="text-textColor">阿里云产品管理部</span>
                </div>
              </div>

              <!-- 状态信息行 -->
              <div class="flex flex-wrap gap-4 text-sm text-textLight">
                <div class="flex items-center gap-1">
                  <span>状态：</span>
                  <span class="text-textColor">完结</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>发布时间：</span>
                  <span class="text-textColor">2025-02-21</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>章节数：</span>
                  <span class="text-textColor">109</span>
                </div>
              </div>

              <!-- 评分区域 -->
              <div class="flex items-center gap-4">
                <div class="text-3xl font-bold text-primary">9.8</div>
                <div class="flex">
                  <i class="fa-solid fa-star star-active"></i>
                  <i class="fa-solid fa-star star-active"></i>
                  <i class="fa-solid fa-star star-active"></i>
                  <i class="fa-solid fa-star star-active"></i>
                  <i class="fa-solid fa-star star-active"></i>
                </div>
                <div class="text-sm text-textLight">(197人评分)评价本书</div>
              </div>

              <!-- 操作按钮 -->
              <div class="flex flex-wrap gap-3 pt-2">
                <button class="px-4 py-2 bg-orangeLight text-primary rounded-md border border-primary flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                  <i class="fa-solid fa-star"></i>
                  <span>加入收藏</span>
                </button>
                <button class="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2 hover:bg-orange-700 transition-colors">
                  <i class="fa-solid fa-download"></i>
                  <span>点击下载</span>
                </button>
                <button class="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2 hover:bg-orange-700 transition-colors">
                  <i class="fa-solid fa-book-open"></i>
                  <span>在线阅读</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 广告横幅 -->
          <div class="bg-white rounded-lg p-4 custom-shadow">
            <div class="flex items-center gap-3">
              <img src="https://picsum.photos/40/40" alt="飞天免费试用计划" class="w-10 h-10 rounded-full">
              <div class="flex-1">
                <span class="font-medium">飞天免费试用计划</span>
                <span class="text-sm text-textLight ml-2">“0”门槛体验云服务，开放全线云产品</span>
              </div>
              <button class="px-3 py-1 bg-primary text-white text-sm rounded-md hover:bg-orange-700 transition-colors">立即领取</button>
            </div>
          </div>

          <!-- 技术作品介绍 -->
          <div class="bg-white rounded-lg p-6 custom-shadow space-y-4">
            <h2 class="text-lg font-bold border-b border-borderColor pb-3">技术作品介绍</h2>
            <p class="text-textColor leading-relaxed">
              阿里云作为数字经济的重要建设者，不断加深硬核科技实力，通过自身能力助力客户实现高质量发展，并共创数字新世界。阿里云产品手册 2025 版含产品大图、关于阿里云、引言、AI 产品体系、安全合规等内容，覆盖人工智能与机器学习、云基础产品与基础设施、数据管理与服务、安全、企业服务五大板块，多款核心及重点产品，全方位了解阿里云产品体系。
            </p>
          </div>

          <!-- 作者信息 -->
          <div class="bg-white rounded-lg p-6 custom-shadow space-y-4">
            <h2 class="text-lg font-bold border-b border-borderColor pb-3">作者信息</h2>
            <p class="text-textColor">阿里云产品管理部</p>
          </div>

          <!-- 热门书评 -->
          <div class="bg-white rounded-lg p-6 custom-shadow space-y-4">
            <h2 class="text-lg font-bold border-b border-borderColor pb-3">热门书评</h2>

            <div class="space-y-4">
              <!-- 单条评论 -->
              <div class="flex gap-4">
                <img src="https://picsum.photos/50/50" alt="用户头像" class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex justify-between items-center mb-1">
                    <span class="font-medium">游客kwe6k52lwpmu</span>
                    <div class="flex">
                      <i class="fa-solid fa-star star-active"></i>
                      <i class="fa-solid fa-star star-active"></i>
                      <i class="fa-solid fa-star star-active"></i>
                      <i class="fa-solid fa-star star-active"></i>
                      <i class="fa-solid fa-star star-active"></i>
                    </div>
                  </div>
                  <div class="text-sm text-textLight mb-2">
                    <span>2025-12-26 11:39:59</span>
                    <span class="ml-2">发布于 河南</span>
                  </div>
                  <p class="text-textColor">值得一读</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧排行榜区域 -->
        <div class="lg:w-1/3 space-y-6">
          <!-- 排行榜卡片 -->
          <div class="bg-white rounded-lg p-6 custom-shadow">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-lg font-bold text-textColor">排行榜</h2>
              <div class="flex text-sm">
                <span class="text-primary border-b-2 border-primary pb-1 px-2">总阅读</span>
                <span class="text-textLight cursor-pointer hover:text-primary px-2">总下载</span>
              </div>
            </div>

            <!-- 排行榜列表 -->
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-sm">1</span>
                <span class="flex-1 text-sm">4天实战 轻松玩转docker</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">2</span>
                <span class="flex-1 text-sm">思维的边界：认知智能</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">3</span>
                <span class="flex-1 text-sm">科技与人：元宇宙论坛跨界对...</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">4</span>
                <span class="flex-1 text-sm">Java开发手册（嵩山版）</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">5</span>
                <span class="flex-1 text-sm">CloudOps 云上自动化运维日安书 2.0</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">6</span>
                <span class="flex-1 text-sm">Java开发手册（泰山版）</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">7</span>
                <span class="flex-1 text-sm">Java工程师成神之路</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">8</span>
                <span class="flex-1 text-sm">必数（BizDevOps）白皮书2022</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">9</span>
                <span class="flex-1 text-sm">Elasticsearch全观测技术解析与应...</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-6 h-6 flex items-center justify-center bg-gray-200 text-textColor rounded-full text-sm">10</span>
                <div class="flex-1 flex items-center gap-2">
                  <img src="https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/ec8afd149f89423e824fd1280771e4e0.png~tplv-a9rns2rl98-24:720:720.png"
                       alt="书籍封面"
                       class="w-8 h-auto rounded">
                  <div>
                    <p class="text-sm truncate">基于ECS倚天实例的应...</p>
                    <div class="flex items-center text-xs text-textLight">
                      <div class="flex mr-1">
                        <i class="fa-solid fa-star star-active"></i>
                        <i class="fa-solid fa-star star-active"></i>
                        <i class="fa-solid fa-star star-active"></i>
                        <i class="fa-solid fa-star star-active"></i>
                        <i class="fa-solid fa-star star-active"></i>
                      </div>
                      <span>9.6</span>
                    </div>
                    <div class="text-xs text-textLight">
                      <span>310976</span>
                      <span class="mx-1">679</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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



/* 顶部产品介绍区域 */
.top_box {
  padding: 60px 0;
  margin-bottom: 40px;
  background: url('/src/static/img/pic_14.png') no-repeat center center; background-size:  100%;
}

.top-content {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-text {
  flex: 1;
}

.product-main-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.product-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.product-nav-buttons {
  display: flex;
  gap: 15px;
}

.product-nav-buttons .el-button {
  padding: 8px 20px;
}

.top-actions {
  position: absolute;
  right: 40px;
  bottom: -30px;
  display: flex;
}

.action-card {
  background-color: white;
  padding: 5px 30px ;
  text-align: center;
  width: 400px;
  text-indent: 20px;
  text-align: left;
}

.action-btn {
  width: 100%;
  margin-bottom: 10px;
}

.action-desc {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 页面标题 */
.page-title {
  font-size: 28px;
  font-weight: bold;
  margin: 30px 0;
  color: #333;
}

/* 主内容区域 */
.main-content {
  display: flex;
  gap: 30px;
}

/* 左侧分类筛选 */
.category-sidebar {
  width: 280px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-shrink: 0;
}

.category-header {
  margin-bottom: 20px;
}

.category-header h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.category-search {
  width: 100%;
}

/* 分类列表 */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-item {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
}

.category-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
  color: #333;
}

.category-title i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.category-children {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
}

.category-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 右侧产品列表 */
.product-list-container {
  flex: 1;
}

.product-list-header {
  margin-bottom: 30px;
}

.product-category-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.product-category-desc {
  color: #666;
  line-height: 1.6;
}

/* 产品卡片网格 */
.product-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.product-card-header {
  margin-bottom: 10px;
}

.product-card-header h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.new-badge {
  background-color: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
}

.product-card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 最新产品动态样式 */
.product-news {
  padding: 80px 10%;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
}

/* 添加背景装饰元素 */
.product-news::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.product-news::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 86, 179, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.news-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
  letter-spacing: -0.5px;
}

/* 标题装饰线 */
.news-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  margin: 16px auto 48px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.news-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  box-sizing: border-box;
}

/* 新闻卡片基础样式 */
.news-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

/* 卡片悬停效果增强 */
.news-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 左侧大型卡片样式 */
.large-card {
  flex: 1;
  min-width: 350px;
  overflow: visible;
}

.card-bg {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 50px;
  height: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 123, 255, 0.3);
}

/* 大型卡片装饰元素 */
.card-bg::before {
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>') no-repeat center;
  opacity: 0.1;
  transform: rotate(15deg);
}

.card-bg::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>') no-repeat center;
  opacity: 0.1;
  transform: rotate(-15deg);
}

.card-header h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
  position: relative;
  z-index: 1;
}

.card-header p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 28px;
  font-weight: 300;
  position: relative;
  z-index: 1;
}

.card-content p {
  font-size: 15px;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.more-link {
  display: inline-flex;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

.more-link:hover {
  opacity: 1;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.more-link i {
  margin-left: 8px;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.more-link:hover i {
  transform: translateX(4px);
}

/* 右侧卡片网格 */
.news-card-grid {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 小型卡片样式 */
.small-card {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 123, 255, 0.1);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  position: relative;
  overflow: hidden;
}

/* 小型卡片顶部装饰条 */
.small-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #007bff, #0056b3);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.small-card:hover::before {
  transform: scaleX(1);
}

.small-card h4 {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.small-card:hover h4 {
  color: #007bff;
}

.small-card p {
  font-size: 14px;
  color: #5a6c7d;
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
  transition: color 0.3s ease;
}

.small-card:hover p {
  color: #4a5c6d;
}

.small-card .more-link {
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
}

.small-card .more-link:hover {
  background: rgba(0, 123, 255, 0.1);
  border-color: rgba(0, 123, 255, 0.3);
  transform: translateX(6px);
}

.small-card .more-link:hover i {
  transform: translateX(6px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-card-grid {
    grid-template-columns: 1fr;
  }

  .card-bg {
    padding: 30px 24px;
  }

  .card-header h3 {
    font-size: 20px;
  }

  .small-card {
    padding: 20px;
  }
}



/* 产品可用区样式 */
.product-availability {
  background-color: #ffffff;
  padding: 80px 0;
  margin-top: 80px;
  border-top: 1px solid #f0f2f5;
}

.availability-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.availability-header {
  text-align: center;
  margin-bottom: 50px;
}

.availability-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.availability-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.availability-stats {
  flex: 0 0 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 800;
  color: #007bff;
  margin-bottom: 8px;
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  color: #5a6c7d;
  font-weight: 500;
  line-height: 1.4;
}

.availability-map {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.world-map {
  max-width: 100%;
  height: auto;
  opacity: 0.9;
}

.map-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.data-center-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #007bff;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 123, 255, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.map-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.infrastructure-link {
  text-align: center;
  margin-top: 40px;
}

.infrastructure-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #007bff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.infrastructure-link a:hover {
  background-color: rgba(0, 123, 255, 0.1);
  border-color: rgba(0, 123, 255, 0.3);
  transform: translateX(4px);
}

.infrastructure-link a i {
  transition: transform 0.3s ease;
}

.infrastructure-link a:hover i {
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .product-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .availability-content {
    flex-direction: column;
    gap: 40px;
  }

  .availability-stats {
    flex: none;
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .category-sidebar {
    width: 100%;
  }

  .product-card-grid {
    grid-template-columns: 1fr;
  }

  .availability-header h2 {
    font-size: 28px;
  }

  .availability-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stat-number {
    font-size: 36px;
  }
}
.banner-btn {
  font-size: 16px;
  padding: 10px 24px;
  background-color: #1890ff;
  border-color: #1890ff;
}
</style>
