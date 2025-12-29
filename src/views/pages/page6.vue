<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex"  />
    <div class="top_box">
      <div class="top-content">
        <div class="top-text">
          <h1 class="product-main-title">阿里云产品月刊</h1>
          <p class="product-description">聚焦产品技术最前线，获取更多阿里云产品和功能更新</p>
          <div class="product-nav-buttons">
            <el-button type="primary" class="banner-btn" style="padding: 14px 40px">立即订阅</el-button>
          </div>
        </div>

      </div>
    </div>
    <div>
      <!-- 页面标题 -->
      <div class="page-title-section">
        <h2 class="page-main-title">往期月刊回顾</h2>
      </div>

      <!-- 年份筛选 -->
      <div class="year-filter">
        <div class="year-tabs">
          <div v-for="year in years" :key="year"
               :class="['year-tab', { active: year === activeYear }]"
               @click="handleYearChange(year)">
            {{ year }}
          </div>
        </div>
      </div>

      <!-- 月刊卡片网格 -->
      <div class="issues-grid">
        <!-- 月刊卡片 -->
        <div v-for="issue in filteredIssues" :key="issue.id" class="issue-card">
          <div class="card-header">
            <div class="card-image">
              <img :src="issue.cover" :alt="issue.title" />
            </div>
            <h3 class="card-title">{{ issue.title }}</h3>
            <p class="card-subtitle">{{ issue.subtitle }}</p>
          </div>
          <div class="card-content">
            <p class="card-description">{{ issue.description }}</p>
          </div>
          <div class="card-footer">
            <div class="issue-date">{{ issue.year }} | <span class="view-more" @click="viewIssue(issue)">立即查看</span></div>
            <div class="card-actions">
              <button class="action-btn primary" @click="viewTopic(issue)">查看专题</button>
              <button class="action-btn secondary" @click="viewArticles(issue)">查看文章</button>
            </div>
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
      // 年份筛选数据
      years: ['2025年', '2024年', '2023年', '2022年', '2021年'],
      activeYear: '2025年',
      // 月刊数据
      issues: [
        // 2025年数据
        {
          id: 1,
          title: '阿里云产品十一月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '阿里云多云多模与语音识别模型全面升级，千问APP公测上线免费向用户开放，云服务器ECS支持一键安全防护配置，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover1.png',
          date: '2025年11月'
        },
        {
          id: 2,
          title: '阿里云产品十月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '阿里云自研9款Qwen-VL 3系列新型号发布，人工智能平台PAI推理类型功能发布，PolarDB X v2.4.2升动态通知升级，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover2.png',
          date: '2025年10月'
        },
        {
          id: 3,
          title: '阿里云产品九月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '2025云栖大会重磅合集，阿里云各产品线重大升级发布，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover3.png',
          date: '2025年9月'
        },
        {
          id: 4,
          title: '阿里云产品八月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '通义万相开源视觉模型Wan2.2-S2V，表格存储全面升级支持AI场景能力，通用算力型实例u2l开启公测，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover4.png',
          date: '2025年8月'
        },
        {
          id: 5,
          title: '阿里云产品七月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '通义万相2.2开许可一键生成电影级视频，通义千问Qwen-Code升可，阿里云西林智能体编排升级并入工作流应用，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover5.png',
          date: '2025年7月'
        },
        {
          id: 6,
          title: '阿里云产品六月刊',
          subtitle: '云智普惠，点亮数字未来',
          description: '阿里云持续应用开发能力全新升级，通义灵码新增行间建议预测，PAI重磅发布推理权重服务，更多精彩请点击。',
          year: '2025年',
          cover: '/src/static/img/issue-cover6.png',
          date: '2025年6月'
        },
        // 2024年数据
        {
          id: 7,
          title: '阿里云产品十二月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '阿里云容器服务ACK支持Serverless集群，通义千问大模型参数规模再升级，云数据库RDS MySQL 8.0性能提升30%，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover7.png',
          date: '2024年12月'
        },
        {
          id: 8,
          title: '阿里云产品十一月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '阿里云发布新一代AI计算实例，对象存储OSS推出归档存储深度归档型，云安全中心支持威胁情报订阅，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover8.png',
          date: '2024年11月'
        },
        {
          id: 9,
          title: '阿里云产品十月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '阿里云云效DevOps平台全面升级，通义听悟支持多语言实时翻译，云服务器ECS共享型实例降价20%，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover9.png',
          date: '2024年10月'
        },
        {
          id: 10,
          title: '阿里云产品九月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '2024云栖大会特别报道，阿里云发布通义千问2.0，云原生数据库PolarDB Serverless重磅升级，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover10.png',
          date: '2024年9月'
        },
        {
          id: 11,
          title: '阿里云产品八月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '阿里云物联网平台支持5G边缘计算，通义万相视觉大模型开放API，云存储OSS推出智能分层存储，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover11.png',
          date: '2024年8月'
        },
        {
          id: 12,
          title: '阿里云产品七月刊',
          subtitle: '智能云原生，赋能企业创新',
          description: '阿里云发布新一代安全产品体系，云服务器ECS第四代实例上线，通义灵码AI编程助手新增代码解释功能，更多精彩请点击。',
          year: '2024年',
          cover: '/src/static/img/issue-cover12.png',
          date: '2024年7月'
        },
        // 2023年数据
        {
          id: 13,
          title: '阿里云产品十二月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '阿里云发布通义千问大模型，云原生应用平台ACK One支持全球分布式集群，对象存储OSS推出智能数据处理，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover13.png',
          date: '2023年12月'
        },
        {
          id: 14,
          title: '阿里云产品十一月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '阿里云云数据库PolarDB性能提升50%，云安全中心支持AI威胁检测，云服务器ECS推出突发性能实例，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover14.png',
          date: '2023年11月'
        },
        {
          id: 15,
          title: '阿里云产品十月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '阿里云物联网平台支持边缘计算网关，通义听悟语音转写准确率提升至99%，云存储OSS推出低频访问存储，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover15.png',
          date: '2023年10月'
        },
        {
          id: 16,
          title: '阿里云产品九月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '2023云栖大会特别报道，阿里云发布新一代计算架构，云原生数据库OceanBase 4.0正式上线，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover16.png',
          date: '2023年9月'
        },
        {
          id: 17,
          title: '阿里云产品八月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '阿里云容器服务ACK支持Kubernetes 1.26，云安全产品体系全面升级，云服务器ECS第三代实例降价15%，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover17.png',
          date: '2023年8月'
        },
        {
          id: 18,
          title: '阿里云产品七月刊',
          subtitle: '云计算新时代，助力数字经济',
          description: '阿里云发布通义万相视觉大模型，云数据库RDS PostgreSQL支持向量检索，云存储OSS推出归档存储，更多精彩请点击。',
          year: '2023年',
          cover: '/src/static/img/issue-cover18.png',
          date: '2023年7月'
        },
        // 2022年数据
        {
          id: 19,
          title: '阿里云产品十二月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '阿里云容器服务ACK支持Serverless应用，云数据库PolarDB支持分布式事务，对象存储OSS推出智能生命周期管理，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover19.png',
          date: '2022年12月'
        },
        {
          id: 20,
          title: '阿里云产品十一月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '阿里云云原生应用平台升级，云安全中心支持漏洞扫描，云服务器ECS推出共享型实例，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover20.png',
          date: '2022年11月'
        },
        {
          id: 21,
          title: '阿里云产品十月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '阿里云物联网平台支持NB-IoT设备，云数据库RDS MySQL 8.0上线，云存储OSS推出低频访问存储，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover21.png',
          date: '2022年10月'
        },
        {
          id: 22,
          title: '阿里云产品九月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '2022云栖大会特别报道，阿里云发布新一代云原生架构，云数据库OceanBase 3.0正式发布，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover22.png',
          date: '2022年9月'
        },
        {
          id: 23,
          title: '阿里云产品八月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '阿里云容器服务ACK支持Kubernetes 1.24，云安全产品体系升级，云服务器ECS第二代实例性能提升25%，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover23.png',
          date: '2022年8月'
        },
        {
          id: 24,
          title: '阿里云产品七月刊',
          subtitle: '云原生技术，加速企业数字化转型',
          description: '阿里云发布通义听悟语音大模型，云数据库RDS PostgreSQL支持JSONB，云存储OSS推出归档存储，更多精彩请点击。',
          year: '2022年',
          cover: '/src/static/img/issue-cover24.png',
          date: '2022年7月'
        },
        // 2021年数据
        {
          id: 25,
          title: '阿里云产品十二月刊',
          subtitle: '数字化转型，从云开始',
          description: '阿里云发布新一代计算实例，云数据库PolarDB支持读写分离，对象存储OSS推出智能分层存储，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover25.png',
          date: '2021年12月'
        },
        {
          id: 26,
          title: '阿里云产品十一月刊',
          subtitle: '数字化转型，从云开始',
          description: '阿里云云原生应用平台上线，云安全中心支持日志审计，云服务器ECS推出突发性能实例，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover26.png',
          date: '2021年11月'
        },
        {
          id: 27,
          title: '阿里云产品十月刊',
          subtitle: '数字化转型，从云开始',
          description: '阿里云物联网平台支持MQTT协议，云数据库RDS MySQL支持主备切换，云存储OSS推出低频访问存储，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover27.png',
          date: '2021年10月'
        },
        {
          id: 28,
          title: '阿里云产品九月刊',
          subtitle: '数字化转型，从云开始',
          description: '2021云栖大会特别报道，阿里云发布新一代云操作系统，云数据库OceanBase 2.0正式上线，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover28.png',
          date: '2021年9月'
        },
        {
          id: 29,
          title: '阿里云产品八月刊',
          subtitle: '数字化转型，从云开始',
          description: '阿里云容器服务ACK支持Kubernetes 1.22，云安全产品体系升级，云服务器ECS第二代实例降价20%，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover29.png',
          date: '2021年8月'
        },
        {
          id: 30,
          title: '阿里云产品七月刊',
          subtitle: '数字化转型，从云开始',
          description: '阿里云发布新一代AI平台，云数据库RDS PostgreSQL支持时序数据，云存储OSS推出归档存储，更多精彩请点击。',
          year: '2021年',
          cover: '/src/static/img/issue-cover30.png',
          date: '2021年7月'
        }
      ]
    }
  },
  computed: {
    // 筛选后的月刊数据
    filteredIssues() {
      return this.issues.filter(issue => issue.year === this.activeYear);
    }
  },
  methods: {
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
    },
    // 切换年份筛选
    handleYearChange(year) {
      this.activeYear = year;
    },
    // 查看月刊详情
    viewIssue(issue) {
      // 这里可以添加跳转到详情页的逻辑
      console.log('查看月刊:', issue);
    },
    // 查看专题
    viewTopic(issue) {
      console.log('查看专题:', issue);
    },
    // 查看文章
    viewArticles(issue) {
      console.log('查看文章:', issue);
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

/* 往期月刊回顾样式 */
.page-title-section {
  text-align: center;
  margin: 60px 0 40px;
}

.page-main-title {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

/* 年份筛选 */
.year-filter {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.year-tabs {
  display: flex;
  background-color: #f5f7fa;
  border-radius: 25px;
  padding: 6px;
}

.year-tab {
  padding: 10px 20px;
  margin: 0 4px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #5a6c7d;
  transition: all 0.3s ease;
}

.year-tab:hover {
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}

.year-tab.active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

/* 月刊卡片网格 */
.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
  padding: 0 10%;
  margin-bottom: 80px;
}

/* 月刊卡片 */
.issue-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 123, 255, 0.1);
}

.issue-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 123, 255, 0.3);
}

.card-header {
  padding: 20px;
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.issue-card:hover .card-image img {
  transform: scale(1.05);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-subtitle {
  font-size: 14px;
  color: #007bff;
  margin-bottom: 12px;
  font-weight: 500;
}

.card-content {
  padding: 0 20px 20px;
}

.card-description {
  font-size: 14px;
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-footer {
  padding: 16px 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.issue-date {
  font-size: 12px;
  color: #86909c;
}

.view-more {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.action-btn.primary {
  background-color: #007bff;
  color: white;
}

.action-btn.primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.action-btn.secondary {
  background-color: white;
  color: #007bff;
  border-color: #007bff;
}

.action-btn.secondary:hover {
  background-color: rgba(0, 123, 255, 0.1);
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .issues-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    padding: 0 5%;
  }
}

@media (max-width: 768px) {
  .page-main-title {
    font-size: 24px;
  }

  .year-tabs {
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 8px;
  }

  .year-tab {
    padding: 8px 16px;
    margin: 4px;
  }

  .issues-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 20px;
  }

  .card-image {
    height: 180px;
  }

  .card-actions {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }
}
</style>

