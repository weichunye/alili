<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <el-header class="header">
      <div class="header-container">
        <div class="logo">
          <i class="el-icon-cloud"></i>
          <span>阿里云</span>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品</el-menu-item>
          <el-menu-item index="3">解决方案</el-menu-item>
          <el-menu-item index="4">文档中心</el-menu-item>
          <el-menu-item index="5">开发者社区</el-menu-item>
          <el-menu-item index="6">关于我们</el-menu-item>
        </el-menu>
        <div class="header-actions">
          <el-input placeholder="搜索产品和服务" prefix-icon="el-icon-search" class="search-input"></el-input>
          <el-button type="text" class="login-btn">登录</el-button>
          <el-button type="primary" class="register-btn">注册</el-button>
        </div>
      </div>
    </el-header>

    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1>极速部署 DeepSeek-OCR</h1>
        <p class="hero-subtitle">阿里云内置 DeepSeek-OCR 模型服务，高性能图像识别助力快速管理文档</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" class="primary-btn">立即部署</el-button>
          <el-button type="default" size="large" class="secondary-btn">了解更多</el-button>
        </div>
        <div class="hero-cards">
          <el-card class="hero-card">
            <div class="card-title">智能文档处理</div>
            <p class="card-desc">高效处理各类文档，自动提取关键信息</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">通用文本2.0全场景识别</div>
            <p class="card-desc">支持多场景、多语言文本识别，准确率高</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">OCR云市场 · 一切皆可识别</div>
            <p class="card-desc">500+款OCR服务，满足不同场景需求</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">超过160项API免费试用</div>
            <p class="card-desc">免费体验12个月，快速集成测试</p>
          </el-card>
        </div>
      </div>
    </section>

    <!-- 精选AI应用区域 -->
    <section class="featured-ai-section">
      <div class="section-header">
        <h2>精选云上 AI 应用，助力业务创新</h2>
      </div>
      <div class="ai-showcase">
        <el-card class="ai-card main-ai-card">
          <div class="ai-card-header">
            <h3>阿里云 AI 体验馆</h3>
            <p>一站式体验阿里云AI能力，快速验证应用场景和效果</p>
            <el-button type="primary" class="ai-card-btn">立即体验</el-button>
          </div>
          <div class="ai-card-image">
            <div class="image-placeholder gradient-1"></div>
          </div>
        </el-card>
        <div class="ai-cards-grid">
          <el-card class="ai-card small-ai-card">
            <div class="ai-card-header small-header">
              <h4>智能总结</h4>
              <p>快速提取文本关键信息，生成简洁摘要</p>
            </div>
            <div class="ai-card-image small-image">
              <div class="image-placeholder gradient-2"></div>
            </div>
          </el-card>
          <el-card class="ai-card small-ai-card">
            <div class="ai-card-header small-header">
              <h4>实时对话</h4>
              <p>自然语言交互，智能问答，高效沟通</p>
            </div>
            <div class="ai-card-image small-image">
              <div class="image-placeholder gradient-3"></div>
            </div>
          </el-card>
          <el-card class="ai-card small-ai-card">
            <div class="ai-card-header small-header">
              <h4>分析解读</h4>
              <p>深度分析数据，提供专业解读和建议</p>
            </div>
            <div class="ai-card-image small-image">
              <div class="image-placeholder gradient-4"></div>
            </div>
          </el-card>
          <el-card class="ai-card small-ai-card">
            <div class="ai-card-header small-header">
              <h4>大规模模型</h4>
              <p>调用大模型能力，处理复杂任务</p>
            </div>
            <div class="ai-card-image small-image">
              <div class="image-placeholder gradient-5"></div>
            </div>
          </el-card>
          <el-card class="ai-card small-ai-card">
            <div class="ai-card-header small-header">
              <h4>视频翻译</h4>
              <p>视频内容识别，实时翻译多语言字幕</p>
            </div>
            <div class="ai-card-image small-image">
              <div class="image-placeholder gradient-6"></div>
            </div>
          </el-card>
        </div>
      </div>
    </section>

    <!-- 通义大模型区域 -->
    <section class="tongyi-model-section">
      <div class="section-header">
        <h2>通义大模型，企业拥抱 AI 时代首选</h2>
      </div>
      <div class="models-grid">
        <el-card class="model-card featured-model">
          <div class="model-header">
            <h3>通义大模型</h3>
            <ul class="model-features">
              <li><i class="el-icon-check"></i> 全面的大模型服务，满足各类场景需求</li>
              <li><i class="el-icon-check"></i> 持续迭代优化，保持技术领先</li>
              <li><i class="el-icon-check"></i> 完善的大模型配套服务和生态建设</li>
            </ul>
            <el-button type="primary" class="model-btn">立即使用</el-button>
          </div>
          <div class="model-image">
            <div class="image-placeholder gradient-7"></div>
          </div>
        </el-card>
        
        <div class="small-models-grid">
          <el-card class="model-card small-model-card">
            <h4>通义千问 · 文本生成大模型</h4>
            <p class="model-desc">强大的文本生成能力，支持多种格式内容创作</p>
          </el-card>
          <el-card class="model-card small-model-card">
            <h4>通义千问 · 视觉理解大模型</h4>
            <p class="model-desc">深度理解图像内容，实现跨模态交互和分析</p>
            <span class="new-badge">NEW</span>
          </el-card>
          <el-card class="model-card small-model-card">
            <h4>通义千问 · 图片生成大模型</h4>
            <p class="model-desc">根据文本描述生成高质量图像，创意无限</p>
          </el-card>
          <el-card class="model-card small-model-card">
            <h4>通义万相 · 图像生成大模型</h4>
            <p class="model-desc">专业级图像生成，满足设计和创意需求</p>
          </el-card>
          <el-card class="model-card small-model-card">
            <h4>通义千问 · 金融大模型</h4>
            <p class="model-desc">专注金融领域，提供专业分析和决策支持</p>
          </el-card>
          <el-card class="model-card small-model-card">
            <h4>通义音脉 · 语音识别模型</h4>
            <p class="model-desc">高精度语音识别，支持多场景语音交互</p>
            <span class="new-badge">NEW</span>
          </el-card>
        </div>
      </div>
    </section>

    <!-- AI与云计算协同区域 -->
    <section class="ai-cloud-section">
      <div class="section-header">
        <h2>依托大模型与云计算协同发展，让 AI 触手可及</h2>
      </div>
      <div class="ai-cloud-content">
        <div class="ai-cloud-text">
          <h3>分析 Agent</h3>
          <h4>实现一键 AI 数据洞察</h4>
          <p class="section-desc">通过自然语言交互，快速分析数据，生成可视化报告和洞察结论，无需专业技能</p>
          <el-button type="primary" class="section-btn">了解详情</el-button>
          <el-button type="text" class="more-btn">查看更多</el-button>
          
          <ul class="feature-list">
            <li>
              <i class="el-icon-chat-round"></i>
              <span>与 AI 智能体进行实时数据对话</span>
            </li>
            <li>
              <i class="el-icon-clock"></i>
              <span>10 分钟在云天系统中创建一个 AI 助手</span>
            </li>
            <li>
              <i class="el-icon-office-building"></i>
              <span>AI 打造专属企业情报院</span>
            </li>
          </ul>
        </div>
        <div class="ai-cloud-image">
          <div class="image-placeholder gradient-8"></div>
        </div>
      </div>
    </section>

    <!-- AI解决方案区域 -->
    <section class="solutions-section">
      <div class="section-header">
        <h2>AI 解决方案</h2>
        <p>为不同行业提供定制化 AI 解决方案</p>
      </div>
      <div class="solutions-grid">
        <el-card class="solution-card">
          <div class="solution-image">
            <div class="image-placeholder gradient-9"></div>
          </div>
          <h3>智能制造</h3>
          <p>通过 AI 技术提升生产效率，降低成本，实现智能化生产</p>
          <el-button type="text" class="solution-btn">查看详情 <i class="el-icon-right"></i></el-button>
        </el-card>
        <el-card class="solution-card">
          <div class="solution-image">
            <div class="image-placeholder gradient-10"></div>
          </div>
          <h3>智能金融</h3>
          <p>AI 驱动的金融解决方案，提升风控能力，优化客户体验</p>
          <el-button type="text" class="solution-btn">查看详情 <i class="el-icon-right"></i></el-button>
        </el-card>
        <el-card class="solution-card">
          <div class="solution-image">
            <div class="image-placeholder gradient-11"></div>
          </div>
          <h3>智能医疗</h3>
          <p>AI 辅助诊断、药物研发，提升医疗服务质量和效率</p>
          <el-button type="text" class="solution-btn">查看详情 <i class="el-icon-right"></i></el-button>
        </el-card>
        <el-card class="solution-card">
          <div class="solution-image">
            <div class="image-placeholder gradient-12"></div>
          </div>
          <h3>智能零售</h3>
          <p>个性化推荐、智能库存管理，提升零售企业竞争力</p>
          <el-button type="text" class="solution-btn">查看详情 <i class="el-icon-right"></i></el-button>
        </el-card>
      </div>
    </section>

    <!-- 智能数据平台区域 -->
    <section class="data-platform-section">
      <div class="section-header">
        <h2>智能数据平台</h2>
        <p>一站式数据管理与分析平台，释放数据价值</p>
      </div>
      <div class="platform-content">
        <div class="platform-image">
          <div class="image-placeholder gradient-13"></div>
        </div>
        <div class="platform-features">
          <div class="platform-feature">
            <div class="feature-icon gradient-1"></div>
            <h3>数据集成</h3>
            <p>支持多种数据源的快速集成和同步</p>
          </div>
          <div class="platform-feature">
            <div class="feature-icon gradient-2"></div>
            <h3>数据治理</h3>
            <p>全面的数据质量管理和元数据管理</p>
          </div>
          <div class="platform-feature">
            <div class="feature-icon gradient-3"></div>
            <h3>数据分析</h3>
            <p>强大的数据分析和可视化能力</p>
          </div>
          <div class="platform-feature">
            <div class="feature-icon gradient-4"></div>
            <h3>数据服务</h3>
            <p>便捷的数据服务化和 API 发布</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例区域 -->
    <section class="customer-cases-section">
      <div class="section-header">
        <h2>客户案例</h2>
        <p>与行业领先企业共同成长</p>
      </div>
      <div class="cases-grid">
        <el-card class="case-card">
          <div class="case-image">
            <div class="image-placeholder gradient-14"></div>
          </div>
          <div class="case-content">
            <h3>制造企业</h3>
            <p>通过 AI 优化生产流程，提升生产效率 30%</p>
          </div>
        </el-card>
        <el-card class="case-card">
          <div class="case-image">
            <div class="image-placeholder gradient-15"></div>
          </div>
          <div class="case-content">
            <h3>金融机构</h3>
            <p>AI 风控系统，降低风险损失 40%</p>
          </div>
        </el-card>
        <el-card class="case-card">
          <div class="case-image">
            <div class="image-placeholder gradient-16"></div>
          </div>
          <div class="case-content">
            <h3>医疗机构</h3>
            <p>AI 辅助诊断系统，提高诊断准确率 25%</p>
          </div>
        </el-card>
        <el-card class="case-card">
          <div class="case-image">
            <div class="image-placeholder gradient-17"></div>
          </div>
          <div class="case-content">
            <h3>零售企业</h3>
            <p>个性化推荐系统，提升销售额 20%</p>
          </div>
        </el-card>
      </div>
    </section>

    <!-- 全球基础设施区域 -->
    <section class="infrastructure-section">
      <div class="section-header">
        <h2>全球基础设施</h2>
        <p>覆盖全球的云基础设施，保障服务稳定可靠</p>
      </div>
      <div class="infrastructure-stats">
        <div class="stat-item">
          <div class="stat-number">28</div>
          <div class="stat-label">全球地域</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">85</div>
          <div class="stat-label">可用区</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100+</div>
          <div class="stat-label">国家和地区</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">300+</div>
          <div class="stat-label">CDN 节点</div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴区域 -->
    <section class="partners-section">
      <div class="section-header">
        <h2>合作伙伴</h2>
        <p>与全球领先企业携手共进</p>
      </div>
      <div class="partners-grid">
        <div class="partner-logo">
          <div class="image-placeholder gradient-18"></div>
        </div>
        <div class="partner-logo">
          <div class="image-placeholder gradient-19"></div>
        </div>
        <div class="partner-logo">
          <div class="image-placeholder gradient-20"></div>
        </div>
        <div class="partner-logo">
          <div class="image-placeholder gradient-21"></div>
        </div>
        <div class="partner-logo">
          <div class="image-placeholder gradient-22"></div>
        </div>
        <div class="partner-logo">
          <div class="image-placeholder gradient-23"></div>
        </div>
      </div>
    </section>

    <!-- 页脚区域 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <div class="link-group">
            <h4>产品与服务</h4>
            <ul>
              <li>云服务器</li>
              <li>数据库</li>
              <li>人工智能</li>
              <li>大数据</li>
              <li>云存储</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>解决方案</h4>
            <ul>
              <li>智能制造</li>
              <li>智能金融</li>
              <li>智能医疗</li>
              <li>智能零售</li>
              <li>智慧城市</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>开发者中心</h4>
            <ul>
              <li>文档中心</li>
              <li>API 文档</li>
              <li>SDK 下载</li>
              <li>开发者社区</li>
              <li>技术博客</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>关于我们</h4>
            <ul>
              <li>公司介绍</li>
              <li>新闻动态</li>
              <li>招贤纳士</li>
              <li>联系我们</li>
              <li>合作伙伴</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>服务与支持</h4>
            <ul>
              <li>帮助中心</li>
              <li>技术支持</li>
              <li>在线客服</li>
              <li>工单系统</li>
              <li>服务状态</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="copyright">© 2023 阿里云 版权所有</div>
          <div class="legal-links">
            <span>隐私政策</span>
            <span>服务条款</span>
            <span>法律声明</span>
            <span>网站地图</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AIPlatform',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
/* 全局样式 */
.aliyun-ai-platform {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background-color: #f9fafb;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
  padding-top: 60px;
}

.section-header h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.section-header p {
  font-size: 16px;
  color: #666;
}

/* 头部导航 */
.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
}

.header-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo i {
  font-size: 24px;
  color: #1890ff;
  margin-right: 8px;
}

.logo span {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
}

.el-menu-demo {
  border-bottom: none;
}

.header-actions {
  display: flex;
  align-items: center;
}

.search-input {
  width: 240px;
  margin-right: 16px;
}

/* 英雄区域 */
.hero-section {
  background-color: #e6f7ff;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.05;
}

.hero-content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  max-width: 800px;
}

.hero-actions {
  margin-bottom: 60px;
}

.hero-actions .primary-btn {
  margin-right: 16px;
  padding: 0 40px;
  height: 48px;
  font-size: 18px;
}

.hero-actions .secondary-btn {
  padding: 0 40px;
  height: 48px;
  font-size: 18px;
}

.hero-cards {
  display: flex;
  gap: 24px;
}

.hero-card {
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.card-desc {
  font-size: 14px;
  color: #666;
}

/* 精选AI应用区域 */
.featured-ai-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.ai-showcase {
  display: flex;
  gap: 24px;
}

.main-ai-card {
  flex: 2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.ai-card-header {
  padding: 32px;
  background-color: #fff;
}

.ai-card-header h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.ai-card-header p {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.ai-card-btn {
  padding: 8px 24px;
}

.ai-card-image {
  height: 200px;
}

.ai-cards-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
}

.small-ai-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.small-header {
  padding: 20px;
}

.small-header h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.small-header p {
  font-size: 12px;
  color: #666;
  margin-bottom: 0;
  line-height: 1.4;
}

.small-image {
  height: 100px;
}

/* 通义大模型区域 */
.tongyi-model-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.models-grid {
  display: flex;
  gap: 24px;
}

.featured-model {
  flex: 2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.model-header {
  padding: 32px;
  background-color: #fff;
}

.model-header h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.model-features {
  list-style: none;
  margin-bottom: 24px;
  padding: 0;
}

.model-features li {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.model-features i {
  color: #52c41a;
  margin-right: 8px;
}

.model-btn {
  padding: 8px 24px;
}

.model-image {
  height: 200px;
}

.small-models-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
}

.small-model-card {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
}

.small-model-card h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.model-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.new-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ff4d4f;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
}

/* AI与云计算协同区域 */
.ai-cloud-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.ai-cloud-content {
  display: flex;
  gap: 48px;
  align-items: center;
}

.ai-cloud-text {
  flex: 1;
}

.ai-cloud-text h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.ai-cloud-text h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.section-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.section-btn {
  margin-right: 16px;
  padding: 8px 24px;
}

.more-btn {
  color: #1890ff;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-top: 40px;
}

.feature-list li {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.feature-list i {
  color: #1890ff;
  margin-right: 8px;
  font-size: 18px;
}

.ai-cloud-image {
  flex: 1;
  height: 300px;
}

/* AI解决方案区域 */
.solutions-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.solution-card {
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.solution-image {
  height: 120px;
  margin-bottom: 16px;
}

.solution-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.solution-card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.6;
}

.solution-btn {
  font-size: 14px;
  color: #1890ff;
}

/* 智能数据平台区域 */
.data-platform-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.platform-content {
  display: flex;
  gap: 48px;
  align-items: center;
}

.platform-image {
  flex: 1;
  height: 400px;
}

.platform-features {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.platform-feature {
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  border-radius: 50%;
}

.platform-feature h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.platform-feature p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 客户案例区域 */
.customer-cases-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.case-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.case-image {
  height: 160px;
}

.case-content {
  padding: 20px;
  background-color: #fff;
}

.case-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.case-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 全球基础设施区域 */
.infrastructure-section {
  background-color: #f0f2f5;
  padding: 80px 0;
}

.infrastructure-stats {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #1890ff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  color: #666;
}

/* 合作伙伴区域 */
.partners-section {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 48px;
}

.partner-logo {
  height: 80px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 页脚区域 */
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 60px 0 20px;
}

.footer-content {
  width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
}

.link-group h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
}

.link-group ul {
  list-style: none;
  padding: 0;
}

.link-group li {
  font-size: 14px;
  color: #999;
  margin-bottom: 12px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.copyright {
  font-size: 14px;
  color: #999;
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-links span {
  font-size: 14px;
  color: #999;
}

/* 图片占位符 */
.image-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

/* 渐变背景 */
.gradient-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.gradient-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.gradient-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.gradient-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.gradient-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.gradient-6 { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
.gradient-7 { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
.gradient-8 { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
.gradient-9 { background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%); }
.gradient-10 { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
.gradient-11 { background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); }
.gradient-12 { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
.gradient-13 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.gradient-14 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.gradient-15 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.gradient-16 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.gradient-17 { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
.gradient-18 { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
.gradient-19 { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
.gradient-20 { background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%); }
.gradient-21 { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
.gradient-22 { background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); }
.gradient-23 { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }

/* 响应式设计 */
@media (max-width: 768px) {
  .header-container,
  .hero-content,
  .featured-ai-section,
  .tongyi-model-section,
  .ai-cloud-section,
  .solutions-section,
  .data-platform-section,
  .customer-cases-section,
  .infrastructure-stats,
  .partners-section,
  .footer-content {
    width: 100%;
    padding: 0 20px;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .hero-cards {
    flex-direction: column;
  }
  
  .ai-showcase,
  .models-grid,
  .ai-cloud-content,
  .platform-content {
    flex-direction: column;
  }
  
  .ai-cards-grid,
  .small-models-grid,
  .solutions-grid,
  .platform-features,
  .cases-grid,
  .partners-grid,
  .footer-links {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .legal-links {
    margin-top: 16px;
  }
}
</style>