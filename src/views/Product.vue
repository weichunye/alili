<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex"  />
    <div class="top_box">
      <div class="top-content">
        <div class="top-text">
          <h1 class="product-main-title">阿里云产品</h1>
          <p class="product-description">提供等竞争力的云产品，将计算、存储、网络、数据库、大数据、人工智能、安全等产品技术与场景需求融合，为开发者打造安全、稳定、体验卓越的云服务。</p>
          <div class="product-nav-buttons">
            <el-button type="primary" class="banner-btn" style="padding: 14px 40px" @click="toLInk('/pages/page6')">产品月刊</el-button>
            <el-button style="padding: 14px 40px"  @click="toLInk('/pages/page7')">产品手册2023版</el-button>
<!--            <el-button style="padding: 14px 40px">产品能力</el-button>-->
          </div>
        </div>
        <div class="top-actions">
          <div class="action-card" style="background: #0062ff">
           <p style="font: 24px; color: #fff; font-weight: bold; line-height: 40px">了解免费试用</p>
            <p style="color: #fff; " class="action-desc">体验云计算产品能力</p>
          </div>
          <div class="action-card">
            <p style="font: 24px;  font-weight: bold; line-height: 40px">了解产品定价</p>
            <p class="action-desc">轻松估算成本，灵活管理成本</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 所有产品页面内容 -->
    <main class="all-products-main">
      <div class="container">
        <!-- 页面标题 -->
        <h1 class="page-title">所有产品</h1>

        <!-- 主内容区域 -->
        <div class="main-content">
          <!-- 左侧分类筛选 -->
          <div class="category-sidebar">
            <div class="category-header">
              <h3>分类筛选</h3>
              <el-input placeholder="搜索分类" prefix-icon="el-icon-search" class="category-search"></el-input>
            </div>

            <!-- 分类列表 -->
            <div class="category-list">
              <!-- 计算分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.compute = !expandedCategories.compute">
                  <i :class="expandedCategories.compute ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>计算 (29)</span>
                </div>
                <div class="category-children" v-show="expandedCategories.compute">
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.compute">云服务器ECS</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.gpu">GPU云服务器</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.bareMetal">裸金属服务器</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.ecI">弹性容器实例ECI</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.ebs">云盘</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.eas">弹性伸缩</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.container">容器服务Kubernetes版</el-checkbox>
                  </label>
                </div>
              </div>

              <!-- 存储分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.storage = !expandedCategories.storage">
                  <i :class="expandedCategories.storage ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>存储 (14)</span>
                </div>
              </div>

              <!-- 网络分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.network = !expandedCategories.network">
                  <i :class="expandedCategories.network ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>网络 (28)</span>
                </div>
              </div>

              <!-- 安全分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.security = !expandedCategories.security">
                  <i :class="expandedCategories.security ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>安全 (50)</span>
                </div>
              </div>

              <!-- 数据库分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.database = !expandedCategories.database">
                  <i :class="expandedCategories.database ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>数据库 (24)</span>
                </div>
              </div>

              <!-- 人工智能分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.ai = !expandedCategories.ai">
                  <i :class="expandedCategories.ai ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>人工智能 (58)</span>
                </div>
              </div>

              <!-- 云原生分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.cloudNative = !expandedCategories.cloudNative">
                  <i :class="expandedCategories.cloudNative ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>云原生 (23)</span>
                </div>
              </div>

              <!-- 企业应用分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.enterprise = !expandedCategories.enterprise">
                  <i :class="expandedCategories.enterprise ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>企业应用 (12)</span>
                </div>
              </div>

              <!-- 物联网分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.iot = !expandedCategories.iot">
                  <i :class="expandedCategories.iot ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>物联网 (21)</span>
                </div>
              </div>

              <!-- 开发工具分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.devTools = !expandedCategories.devTools">
                  <i :class="expandedCategories.devTools ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>开发工具 (18)</span>
                </div>
              </div>

              <!-- 迁移与运维分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.migration = !expandedCategories.migration">
                  <i :class="expandedCategories.migration ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>迁移与运维 (28)</span>
                </div>
              </div>

              <!-- 专有云分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.privateCloud = !expandedCategories.privateCloud">
                  <i :class="expandedCategories.privateCloud ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>专有云 (2)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧产品列表 -->
          <div class="product-list-container">
            <!-- 产品列表头部 -->
            <div class="product-list-header">
              <h2 class="product-category-title">计算</h2>
              <p class="product-category-desc">阿里云提供丰富的云服务器、容器、函数计算等产品，满足不同场景的计算需求，助力您的业务快速发展。</p>
            </div>

            <!-- 产品卡片网格 -->
            <div class="product-card-grid">
              <!-- 云服务器ECS -->
              <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>云服务器 ECS <span class="new-badge">新品</span></h3>
                </div>
                <p class="product-card-desc">云服务器（Elastic Compute Service，简称 ECS）是一种简单高效、处理能力可弹性伸缩的计算服务，帮助您快速构建更稳定、安全的应用，提升运维效率，降低IT成本。</p>
              </div>

              <!-- GPU云服务器 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>GPU云服务器</h3>
                </div>
                <p class="product-card-desc">GPU云服务器是提供GPU算力的弹性计算服务，适用于深度学习、科学计算、图形图像处理等应用场景，帮助您快速构建高性能计算环境。</p>
              </div>

              <!-- 智能计算灵骏 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>智能计算灵骏</h3>
                </div>
                <p class="product-card-desc">智能计算灵骏是阿里云推出的新一代智能计算服务，提供高性能、高性价比的计算资源，支持多种计算框架和应用场景。</p>
              </div>

              <!-- 弹性裸金属服务器 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>弹性裸金属服务器</h3>
                </div>
                <p class="product-card-desc">弹性裸金属服务器（Elastic Bare Metal Server）是一种兼具物理服务器性能和云服务器弹性的计算服务，为您提供极致的计算性能和灵活性。</p>
              </div>

              <!-- 弹性容器实例ECI -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>弹性容器实例ECI</h3>
                </div>
                <p class="product-card-desc">弹性容器实例（Elastic Container Instance）是敏捷安全的Serverless容器运行环境，让您高效运行容器化应用，无需管理服务器。</p>
              </div>

              <!-- 专有宿主机 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>专有宿主机</h3>
                </div>
                <p class="product-card-desc">专有宿主机（Dedicated Host）是指服务商提供的物理服务器，您可以独占整台服务器资源，部署ECS实例，享受物理服务器级别的资源隔离和安全保障。</p>
              </div>

              <!-- 云虚拟主机 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>云虚拟主机</h3>
                </div>
                <p class="product-card-desc">云虚拟主机是一种简单易用的网站托管服务，支持多种网站开发语言和数据库，帮助您快速搭建和管理网站，适用于个人网站、中小企业网站等场景。</p>
              </div>

              <!-- 计算巢服务 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>计算巢服务 <span class="new-badge">新品</span></h3>
                </div>
                <p class="product-card-desc">计算巢服务（Compute Nest）是一站式的服务发布、部署和管理平台，支持服务商和企业用户快速构建和交付服务，提升服务交付效率和质量。</p>
              </div>

              <!-- 轻量应用服务器 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>轻量应用服务器</h3>
                </div>
                <p class="product-card-desc">轻量应用服务器（Alibaba Cloud Lightweight Application Server）是面向中小企业和开发者的新一代云服务器产品，提供便捷的应用部署和管理能力，帮助您快速构建和管理应用。</p>
              </div>

              <!-- 云盒 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>云盒</h3>
                </div>
                <p class="product-card-desc">云盒是阿里云推出的一体机产品，将阿里云的计算、存储、网络等服务能力集成到物理设备中，提供本地部署的云服务体验，帮助企业快速构建混合云架构。</p>
              </div>

              <!-- 弹性伸缩 -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>弹性伸缩</h3>
                </div>
                <p class="product-card-desc">弹性伸缩（Auto Scaling）是根据用户的业务需求和策略，自动调整弹性计算资源的管理服务，帮助您实现资源的弹性伸缩，保障业务的稳定性和可用性。</p>
              </div>

              <!-- 弹性高性能计算E-HPC -->
               <div class="product-card" @click="toLInk('/pages/page8')">
                <div class="product-card-header">
                  <h3>弹性高性能计算E-HPC</h3>
                </div>
                <p class="product-card-desc">弹性高性能计算（Elastic High Performance Computing）是阿里云提供的高性能计算服务，支持多种高性能计算应用场景，帮助您快速构建和管理高性能计算集群。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- 最新产品动态 -->
    <div class="product-news">
      <h2 class="news-title">最新产品动态</h2>
      <div class="news-container">
        <!-- 左侧大型卡片 -->
        <div class="news-card large-card">
          <div class="card-bg">
            <div class="card-header">
              <h3>边缘实时AI人体检测</h3>
              <p>实时高效的人体检测算法，支持边缘设备部署</p>
            </div>
            <div class="card-content">
              <p>依托达摩院智能视觉算法，实现高精度人体检测，适用于智慧城市、安防监控等场景</p>
              <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <!-- 右侧卡片网格 -->
        <div class="news-card-grid">
          <!-- 第一行 -->
          <div class="news-card small-card">
            <h4>DAS SQL审计功能全面支持阿里云MySQL</h4>
            <p>SQL审计功能全面升级，支持MySQL全量审计，帮助用户实现合规审计</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>云数据库 RDS for SQL Server 2022 正式发布</h4>
            <p>SQL Server 2022 正式上线，支持多项新特性，提升数据库性能和安全性</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>MaxCompute MapReduce UDF 支持CUDA GPU计算加速</h4>
            <p>MaxCompute支持GPU加速MapReduce作业，提升大规模数据处理效率</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>

          <!-- 第二行 -->
          <div class="news-card small-card">
            <h4>人机验证产品 Image OCR 支持多语言识别</h4>
            <p>OCR识别功能全面升级，支持多语言文本识别，提升用户体验</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>DataWorks 新增分析型数据库MySQL版 ClickHouse 数据源</h4>
            <p>DataWorks新增支持ClickHouse数据源，提升数据分析能力</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>EMR 弹性 Spark 集群全新发布</h4>
            <p>全托管Spark集群服务，提供弹性伸缩能力，降低运维成本</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品可用区 -->
    <div class="product-availability">
      <div class="availability-container">
        <div class="availability-header">
          <h2>产品可用区</h2>
        </div>

        <div class="availability-content">
          <!-- 左侧统计数据 -->
          <div class="availability-stats">
            <div class="stat-item">
              <div class="stat-number">29</div>
              <div class="stat-label">全球公共云地域</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">92</div>
              <div class="stat-label">全球公共云可用区</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3200+</div>
              <div class="stat-label">边缘节点</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">180+ Tbps</div>
              <div class="stat-label">全球网络带宽</div>
            </div>
          </div>

          <!-- 右侧世界地图 -->
          <div class="availability-map">
            <div class="map-container">
              <img src="/src/static/img/pic_16.png">
            </div>
          </div>
        </div>

        <div class="availability-footer">
          <a href="#" class="learn-more">了解更多全球基础设施 <i class="el-icon-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

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
      window.open(link, "_blank")

    },
    handleMenuSelect({ key, keyPath }) {
      // 根据选择的菜单项进行路由跳转
      if (key === '1') {
        window.open('/', "_blank")
      } else if (key === '2') {
        // 产品菜单已改为下拉菜单
      } else if (key === '2-1') {
        window.open('/product', "_blank")
      } else if (key === '2-2') {
        // AI大模型页面路由
      } else if (key === '2-3') {
        // 视觉智能页面路由
      } else if (key === '2-4') {
        // 语音智能页面路由
      } else if (key === '2-5') {
        // 自然语言处理页面路由
      } else if (key === '3') {
        // 解决方案页面路由
      } else if (key === '4') {
        // 文档中心页面路由
      } else if (key === '5') {
        // 开发者社区页面路由
      } else if (key === '6') {
        // 关于我们页面路由
      }
    }
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
  cursor: pointer;
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
