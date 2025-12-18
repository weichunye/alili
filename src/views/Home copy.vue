<template>
  <div class="aliyun-home">
    <!-- 顶部导航栏 -->
    <header class="main-header">
      <div class="header-container">
        <div class="logo-area">
          <div class="logo">
            <img src="https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png" alt="阿里云">
          </div>
          <nav class="main-nav">
            <a href="#" class="nav-item">产品</a>
            <a href="#" class="nav-item">解决方案</a>
            <a href="#" class="nav-item">定价</a>
            <a href="#" class="nav-item">文档与社区</a>
            <a href="#" class="nav-item">支持与服务</a>
            <a href="#" class="nav-item">合作伙伴</a>
            <a href="#" class="nav-item">云市场</a>
          </nav>
        </div>
        <div class="header-actions">
          <el-button type="text" class="login-btn">登录</el-button>
          <el-button type="primary" class="register-btn">免费注册</el-button>
          <el-dropdown>
            <span class="dropdown-trigger">
              中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </el-dropdown>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="main-content">
      <!-- Banner区域 -->
      <section class="hero-banner">
        <div class="banner-content">
          <div class="banner-text">
            <h1>阿里云 PAI 集成 DeepSeek-OCR 模型部署</h1>
            <p class="subtitle">高性能推理服务助力快速落地智能文字识别</p>
            <div class="banner-actions">
              <el-button type="primary" size="large" class="primary-btn">立即体验</el-button>
              <el-button size="large" plain class="outline-btn">查看文档</el-button>
            </div>
          </div>
          <div class="banner-image">
            <img src="https://img.alicdn.com/imgextra/i3/O1CN01qKXkXW1Q0JZ5Y5Y5Y_!!6000000001910-2-tps-600-400.png" alt="AI Banner">
          </div>
        </div>
        <div class="promo-card">
          <div class="promo-content">
            <span class="promo-tag">B</span>
            <span class="promo-text">起值 99 元云服务器，新老同享</span>
          </div>
        </div>
      </section>

      <!-- AI体验馆 -->
      <section class="section ai-experience">
        <div class="section-header">
          <h2 class="section-title">阿里云 AI 体验馆</h2>
          <p class="section-subtitle">为您提供零门槛云上 AI 体验，从沉浸式体验到快速概念验证，让技术和业务创新触手可及</p>
          <el-button type="text" class="more-link">探索更多 AI 应用<i class="el-icon-arrow-right"></i></el-button>
        </div>
        <div class="ai-cards">
          <el-row :gutter="20">
            <el-col :span="6" v-for="item in aiCards" :key="item.id">
              <el-card class="ai-card" shadow="hover">
                <div class="ai-card-icon">
                  <i :class="item.icon"></i>
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 通义大模型 -->
      <section class="section tongyi-section">
        <div class="section-header center">
          <h2 class="section-title">通义大模型，企业拥抱 AI 时代首选</h2>
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h4>全栈高效精准的模型服务调用</h4>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎯</div>
              <h4>丰富的多模态大模型，契合更多业务场景</h4>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📊</div>
              <h4>万亿级超大规模数据训练和领先的算法框架</h4>
            </div>
          </div>
        </div>
        
        <div class="tongyi-products">
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="product-card">
                <div class="product-header">
                  <h3>通义千问 3</h3>
                  <span class="product-tag">文本生成大模型</span>
                </div>
                <p>全新发布强大且灵活的 Qwen3-Coder 代码生成模型，升级 Qwen3 最强 2353 HAL, SAREE.</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="product-card">
                <div class="product-header">
                  <h3>通义万相</h3>
                  <span class="product-tag">图像生成模型</span>
                </div>
                <p>具备卓越的文本渲染能力，在复杂文本渲染、各类生成与编辑任务中表现出色。</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="product-card">
                <div class="product-header">
                  <h3>通义百聆</h3>
                  <span class="product-tag">全模态大模型</span>
                </div>
                <p>全模态大模型能满足实时音频交互场景。支持音频伴随图文理解，含4种自然对话音色。</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 分析Agent -->
      <section class="section agent-section">
        <div class="agent-container">
          <div class="agent-content">
            <h2>分析 Agent</h2>
            <h3>实现一键 AI 数据洞察</h3>
            <p>提供五大核心能力: AI看板搭建、数据查询、数据解读、报告生成和数据推送，帮助用户从"被动看数"转向"主动用数"。</p>
            <div class="agent-actions">
              <el-button type="primary" size="large">了解更多</el-button>
              <el-button size="large" plain>联系 AI 专家</el-button>
            </div>
          </div>
          <div class="agent-visual">
            <img src="https://img.alicdn.com/imgextra/i4/O1CN01qKXkXW1Q0JZ5Y5Y5Y_!!6000000001910-2-tps-500-350.png" alt="AI Agent">
          </div>
        </div>
      </section>

      <!-- 产品体系 -->
      <section class="section products-section">
        <div class="section-header">
          <h2 class="section-title">完整的产品体系，为企业打造技术创新的云</h2>
        </div>
        <div class="product-categories">
          <el-row :gutter="20">
            <el-col :span="6" v-for="category in productCategories" :key="category.id">
              <div class="category-card">
                <h3>{{ category.title }}</h3>
                <ul class="product-list">
                  <li v-for="product in category.products" :key="product">
                    <a href="#">{{ product }}</a>
                  </li>
                </ul>
                <a href="#" class="view-more">查看全部 <i class="el-icon-arrow-right"></i></a>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 解决方案 -->
      <section class="section solutions-section">
        <div class="section-header">
          <h2 class="section-title">卓越的技术解决方案，加速云上应用构建</h2>
        </div>
        <div class="solutions-grid">
          <el-row :gutter="20">
            <el-col :span="8" v-for="solution in solutions" :key="solution.id">
              <el-card class="solution-card" shadow="hover">
                <div class="solution-icon">{{ solution.icon }}</div>
                <h3>{{ solution.title }}</h3>
                <p>{{ solution.description }}</p>
                <el-button type="text" class="solution-link">了解更多</el-button>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 客户案例 -->
      <section class="section cases-section">
        <div class="section-header">
          <h2 class="section-title">客户案例</h2>
        </div>
        <div class="cases-grid">
          <el-row :gutter="20">
            <el-col :span="6" v-for="caseItem in cases" :key="caseItem.id">
              <div class="case-card">
                <div class="case-logo">
                  <span class="logo-text">{{ caseItem.logo }}</span>
                </div>
                <h4>{{ caseItem.name }}</h4>
                <p>{{ caseItem.description }}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>

      <!-- 底部信息 -->
      <section class="footer-section">
        <div class="footer-content">
          <el-row :gutter="30">
            <el-col :span="6">
              <h4>为什么选择阿里云</h4>
              <ul class="footer-links">
                <li><a href="#">什么是云计算</a></li>
                <li><a href="#">全球基础设施</a></li>
                <li><a href="#">技术领先</a></li>
                <li><a href="#">稳定可靠</a></li>
                <li><a href="#">安全合规</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>产品和定价</h4>
              <ul class="footer-links">
                <li><a href="#">全部产品</a></li>
                <li><a href="#">免费试用</a></li>
                <li><a href="#">产品动态</a></li>
                <li><a href="#">产品定价</a></li>
                <li><a href="#">搭配报价器</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>解决方案</h4>
              <ul class="footer-links">
                <li><a href="#">技术解决方案</a></li>
                <li><a href="#">文档</a></li>
                <li><a href="#">开发者社区</a></li>
                <li><a href="#">培训与认证</a></li>
                <li><a href="#">解决方案免费试用</a></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h4>支持与服务</h4>
              <ul class="footer-links">
                <li><a href="#">文档与社区</a></li>
                <li><a href="#">权益中心</a></li>
                <li><a href="#">免费试用</a></li>
                <li><a href="#">高校计划</a></li>
                <li><a href="#">5亿算力补贴</a></li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </section>
    </main>

    <!-- 底部页脚 -->
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-links-row">
          <a href="#">法律声明</a>
          <a href="#">Cookies政策</a>
          <a href="#">廉正举报</a>
          <a href="#">安全举报</a>
          <a href="#">联系我们</a>
          <a href="#">加入我们</a>
        </div>
        <div class="copyright">
          <p>阿里巴巴集团 淘宝网 天猫 全球速卖通 阿里巴巴国际交易市场 1688 阿里妈妈 飞猪 阿里云计算</p>
          <p>© 2009-2025 Aliyun.com 版权所有 增值电信业务经营许可证: 浙B2-20080101</p>
          <p>© 浙公网安备 33010602009975号 浙B2-20080101-4</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AliyunHome',
  data() {
    return {
      aiCards: [
        { id: 1, icon: 'el-icon-chat-dot-round', title: '10分钟在聊天系统中增加一个 AI 助手', description: '快速集成AI助手到现有系统' },
        { id: 2, icon: 'el-icon-picture-outline', title: 'AI打造专属企业风格海报', description: '智能生成企业宣传素材' },
        { id: 3, icon: 'el-icon-data-analysis', title: '数据分析与洞察', description: '智能分析业务数据' },
        { id: 4, icon: 'el-icon-video-play', title: '智能音视频处理', description: 'AI驱动的多媒体处理' }
      ],
      productCategories: [
        {
          id: 1,
          title: '计算',
          products: ['云服务器 ECS', '轻量应用服务器', '容器服务']
        },
        {
          id: 2,
          title: '存储与网络',
          products: ['对象存储 OSS', '云数据库 RDS', 'CDN加速']
        },
        {
          id: 3,
          title: '安全',
          products: ['Web应用防火墙', '安全中心', 'SSL证书']
        },
        {
          id: 4,
          title: '人工智能',
          products: ['通义大模型', '人工智能平台 PAI', '机器学习']
        }
      ],
      solutions: [
        { id: 1, icon: '🚀', title: '10分钟搭建微信、支付宝小程序', description: '快速部署小程序后端服务' },
        { id: 2, icon: '🏗️', title: '低代码高效构建企业门户网站', description: '可视化构建多端门户网站' },
        { id: 3, icon: '⚡', title: '网站静态资源访问加速', description: '通过CDN加速网站访问速度' }
      ],
      cases: [
        { id: 1, logo: '人民日报', name: '人民日报社', description: '联合打造"人民日报 AI 智能编辑部"' },
        { id: 2, logo: 'SD', name: '申通快递', description: '智能物流解决方案' },
        { id: 3, logo: 'Cle', name: '中华保险', description: '云计算助力数字化转型' },
        { id: 4, logo: 'UU', name: 'UU跑腿', description: '即时配送云服务' }
      ]
    }
  }
}
</script>

<style scoped>
/* 重置和基础样式 */
.aliyun-home {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  background: #f8f9fa;
}

/* 顶部导航 */
.main-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
}

.logo img {
  height: 32px;
  margin-right: 40px;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.nav-item {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item:hover {
  color: #ff6a00;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.login-btn {
  color: #666;
  font-size: 14px;
}

.register-btn {
  background: linear-gradient(135deg, #ff6a00 0%, #ff3d00 100%);
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
}

.dropdown-trigger {
  color: #666;
  font-size: 14px;
  cursor: pointer;
}

/* Banner区域 */
.hero-banner {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  color: white;
  padding: 80px 20px 40px;
  position: relative;
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-text {
  flex: 1;
  max-width: 600px;
}

.banner-text h1 {
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
}

.banner-actions {
  display: flex;
  gap: 16px;
}

.primary-btn {
  background: #ff6a00;
  border: none;
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 4px;
}

.outline-btn {
  color: white;
  border-color: white;
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 4px;
}

.banner-image {
  flex: 1;
  text-align: right;
}

.banner-image img {
  max-width: 100%;
  border-radius: 8px;
}

.promo-card {
  max-width: 1200px;
  margin: 40px auto 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px 24px;
}

.promo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.promo-tag {
  background: #ff6a00;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* 通用区域样式 */
.section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a237e;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 24px;
}

.more-link {
  color: #ff6a00;
  font-size: 16px;
}

/* AI体验馆 */
.ai-cards {
  margin-top: 40px;
}

.ai-card {
  height: 240px;
  text-align: center;
  border: none;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.ai-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.ai-card-icon {
  font-size: 48px;
  color: #ff6a00;
  margin-bottom: 20px;
}

.ai-card h3 {
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
}

.ai-card p {
  color: #666;
  font-size: 14px;
}

/* 通义大模型 */
.tongyi-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  padding: 60px 20px;
  border-radius: 20px;
}

.features-grid {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 40px 0;
}

.feature-item {
  text-align: center;
  max-width: 280px;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-item h4 {
  font-size: 18px;
  color: #333;
  font-weight: 500;
}

.tongyi-products {
  margin-top: 60px;
}

.product-card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.product-header h3 {
  font-size: 24px;
  color: #1a237e;
  margin: 0;
}

.product-tag {
  background: #e8eaf6;
  color: #3949ab;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.product-card p {
  color: #666;
  line-height: 1.6;
}

/* 分析Agent */
.agent-section {
  background: linear-gradient(135deg, #ff9800 0%, #ff5722 100%);
  color: white;
  border-radius: 20px;
  padding: 60px;
}

.agent-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}

.agent-content {
  flex: 1;
  max-width: 500px;
}

.agent-content h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
}

.agent-content h3 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
}

.agent-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.agent-actions {
  display: flex;
  gap: 16px;
}

.agent-visual {
  flex: 1;
  text-align: right;
}

.agent-visual img {
  max-width: 100%;
  border-radius: 12px;
}

/* 产品体系 */
.products-section {
  background: white;
  border-radius: 20px;
  padding: 60px;
  margin-top: 40px;
}

.category-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  height: 100%;
}

.category-card h3 {
  font-size: 20px;
  color: #1a237e;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e8eaf6;
}

.product-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.product-list li {
  margin-bottom: 12px;
}

.product-list a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.product-list a:hover {
  color: #ff6a00;
}

.view-more {
  color: #ff6a00;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* 解决方案 */
.solutions-section {
  margin-top: 80px;
}

.solution-card {
  height: 280px;
  border: none;
  border-radius: 12px;
  text-align: center;
  padding: 32px;
}

.solution-icon {
  font-size: 48px;
  margin-bottom: 24px;
}

.solution-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 16px;
}

.solution-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.solution-link {
  color: #ff6a00;
  font-weight: 500;
}

/* 客户案例 */
.cases-section {
  margin-top: 80px;
}

.case-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.case-card:hover {
  transform: translateY(-4px);
}

.case-logo {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.logo-text {
  color: #3949ab;
  font-size: 20px;
  font-weight: bold;
}

.case-card h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
}

.case-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

/* 底部信息 */
.footer-section {
  background: white;
  padding: 80px 20px 40px;
  margin-top: 80px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content h4 {
  font-size: 18px;
  color: #333;
  margin-bottom: 24px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ff6a00;
}

/* 页脚 */
.main-footer {
  background: #1a237e;
  color: white;
  padding: 40px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.footer-links-row a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-links-row a:hover {
  color: white;
}

.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.6;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
    padding: 16px 20px;
  }
  
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 16px 0;
  }
  
  .banner-content {
    flex-direction: column;
    text-align: center;
  }
  
  .banner-text h1 {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .features-grid {
    flex-direction: column;
    gap: 32px;
  }
  
  .agent-container {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-content .el-col {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>