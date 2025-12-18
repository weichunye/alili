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
    <section class="bigmodel-hero">
      <div class="hero-content">
        <h1>阿里云大模型平台</h1>
        <p>一站式大模型服务，助力企业智能化升级</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" class="primary-btn">立即体验</el-button>
          <el-button type="default" size="large" class="secondary-btn">了解更多</el-button>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder"></div>
      </div>
    </section>

    <!-- 核心能力区域 -->
    <section class="core-capabilities">
      <div class="section-header">
        <h2>核心能力</h2>
        <p>领先的大模型技术，为企业提供全方位AI服务</p>
      </div>
      <div class="capabilities-grid">
        <el-card class="capability-card">
          <div class="card-icon gradient-1"></div>
          <h3>多模态理解</h3>
          <p>支持文本、图像、语音等多种模态数据的理解和处理</p>
        </el-card>
        <el-card class="capability-card">
          <div class="card-icon gradient-2"></div>
          <h3>精准生成</h3>
          <p>高质量文本、代码、图像生成，满足多样化业务需求</p>
        </el-card>
        <el-card class="capability-card">
          <div class="card-icon gradient-3"></div>
          <h3>智能对话</h3>
          <p>自然流畅的人机交互，支持多轮对话和复杂任务处理</p>
        </el-card>
        <el-card class="capability-card">
          <div class="card-icon gradient-4"></div>
          <h3>知识推理</h3>
          <p>基于海量知识的深度推理，提供专业级解决方案</p>
        </el-card>
      </div>
    </section>

    <!-- 产品体系 -->
    <section class="product-system">
      <div class="section-header">
        <h2>产品体系</h2>
        <p>覆盖全场景的大模型产品矩阵</p>
      </div>
      <div class="product-tabs">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="基础大模型" name="base">
            <div class="product-grid">
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-5"></div>
                </div>
                <div class="product-info">
                  <h3>通义千问</h3>
                  <p>新一代基础大模型，具备强大的通用能力</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-6"></div>
                </div>
                <div class="product-info">
                  <h3>CodeLlama</h3>
                  <p>专业代码大模型，提升开发效率</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="行业大模型" name="industry">
            <div class="product-grid">
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-7"></div>
                </div>
                <div class="product-info">
                  <h3>医疗大模型</h3>
                  <p>助力医疗行业智能化升级</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-8"></div>
                </div>
                <div class="product-info">
                  <h3>金融大模型</h3>
                  <p>金融领域专业大模型解决方案</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="应用大模型" name="application">
            <div class="product-grid">
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-9"></div>
                </div>
                <div class="product-info">
                  <h3>智能客服</h3>
                  <p>提升客户服务质量和效率</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
              <el-card class="product-card">
                <div class="product-image">
                  <div class="image-placeholder gradient-10"></div>
                </div>
                <div class="product-info">
                  <h3>内容创作</h3>
                  <p>AI辅助内容创作平台</p>
                  <el-button type="primary" class="product-btn">了解详情</el-button>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>

    <!-- 技术架构 -->
    <section class="tech-architecture">
      <div class="section-header">
        <h2>技术架构</h2>
        <p>先进的技术架构，保障大模型服务稳定高效</p>
      </div>
      <div class="architecture-diagram">
        <div class="diagram-placeholder"></div>
      </div>
    </section>

    <!-- 客户案例 -->
    <section class="customer-cases">
      <div class="section-header">
        <h2>客户案例</h2>
        <p>助力企业实现智能化转型</p>
      </div>
      <div class="cases-grid">
        <el-card class="case-card">
          <div class="case-content">
            <h3>制造行业</h3>
            <p>通过大模型优化生产流程，提升生产效率30%</p>
          </div>
        </el-card>
        <el-card class="case-card">
          <div class="case-content">
            <h3>金融行业</h3>
            <p>智能风控系统，降低风险识别成本50%</p>
          </div>
        </el-card>
        <el-card class="case-card">
          <div class="case-content">
            <h3>教育行业</h3>
            <p>个性化学习方案，提升学生学习效果</p>
          </div>
        </el-card>
      </div>
    </section>

    <!-- 服务支持 -->
    <section class="service-support">
      <div class="section-header">
        <h2>服务支持</h2>
        <p>全方位服务保障，让您使用无忧</p>
      </div>
      <div class="support-grid">
        <div class="support-item">
          <div class="support-icon gradient-1"></div>
          <h3>专业咨询</h3>
          <p>一对一专家咨询，定制解决方案</p>
        </div>
        <div class="support-item">
          <div class="support-icon gradient-2"></div>
          <h3>技术支持</h3>
          <p>7×24小时技术支持，保障业务稳定</p>
        </div>
        <div class="support-item">
          <div class="support-icon gradient-3"></div>
          <h3>培训服务</h3>
          <p>专业培训课程，提升团队能力</p>
        </div>
        <div class="support-item">
          <div class="support-icon gradient-4"></div>
          <h3>生态合作</h3>
          <p>丰富的生态资源，助力业务发展</p>
        </div>
      </div>
    </section>

    <!-- 底部区域 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <div class="link-group">
            <h4>产品与服务</h4>
            <ul>
              <li>通义千问</li>
              <li>CodeLlama</li>
              <li>医疗大模型</li>
              <li>金融大模型</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>解决方案</h4>
            <ul>
              <li>智能制造</li>
              <li>智能金融</li>
              <li>智能教育</li>
              <li>智能客服</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>开发者中心</h4>
            <ul>
              <li>API文档</li>
              <li>SDK下载</li>
              <li>开发指南</li>
              <li>社区论坛</li>
            </ul>
          </div>
          <div class="link-group">
            <h4>关于我们</h4>
            <ul>
              <li>公司介绍</li>
              <li>新闻动态</li>
              <li>招贤纳士</li>
              <li>联系我们</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="copyright">© 2023 阿里云 版权所有</div>
          <div class="legal-links">
            <span>隐私政策</span>
            <span>服务条款</span>
            <span>法律声明</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BigModel',
  data() {
    return {
      activeIndex: '1',
      activeTab: 'base'
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
/* 大模型页面特有样式 */
.bigmodel-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  background-color: #f0f2f5;
}

.bigmodel-hero .hero-content {
  flex: 1;
  max-width: 500px;
}

.bigmodel-hero .hero-content h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.bigmodel-hero .hero-content p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.bigmodel-hero .hero-image {
  flex: 1;
  max-width: 600px;
}

.bigmodel-hero .image-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
}

/* 核心能力 */
.core-capabilities {
  padding: 80px 0;
}

.core-capabilities .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.core-capabilities .section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.core-capabilities .section-header p {
  font-size: 16px;
  color: #666;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.capability-card {
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.capability-card .card-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
}

.capability-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.capability-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 产品体系 */
.product-system {
  padding: 80px 0;
  background-color: #fafafa;
}

.product-system .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.product-system .section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.product-system .section-header p {
  font-size: 16px;
  color: #666;
}

.product-tabs {
  max-width: 1200px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 30px;
}

.product-card {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.product-card .product-image {
  flex: 1;
  max-width: 200px;
}

.product-card .image-placeholder {
  width: 100%;
  height: 100%;
}

.product-card .product-info {
  flex: 2;
  padding: 30px;
}

.product-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.product-card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.product-card .product-btn {
  font-size: 14px;
}

/* 技术架构 */
.tech-architecture {
  padding: 80px 0;
}

.tech-architecture .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.tech-architecture .section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.tech-architecture .section-header p {
  font-size: 16px;
  color: #666;
}

.architecture-diagram {
  max-width: 1200px;
  margin: 0 auto;
}

.diagram-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
}

/* 客户案例 */
.customer-cases {
  padding: 80px 0;
  background-color: #fafafa;
}

.customer-cases .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.customer-cases .section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.customer-cases .section-header p {
  font-size: 16px;
  color: #666;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.case-card {
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.case-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.case-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 服务支持 */
.service-support {
  padding: 80px 0;
}

.service-support .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.service-support .section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.service-support .section-header p {
  font-size: 16px;
  color: #666;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.support-item {
  text-align: center;
}

.support-item .support-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
}

.support-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.support-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .bigmodel-hero {
    flex-direction: column;
    text-align: center;
  }
  
  .bigmodel-hero .hero-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
  
  .bigmodel-hero .hero-content h1 {
    font-size: 32px;
  }
  
  .capabilities-grid,
  .product-grid,
  .cases-grid,
  .support-grid {
    grid-template-columns: 1fr;
  }
  
  .product-card {
    flex-direction: column;
  }
  
  .product-card .product-image {
    max-width: 100%;
    height: 200px;
  }
}
</style>