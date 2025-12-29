<template>
  <div class="aliyun-ai-platform">
    <!-- 立即购买 -->
    <Header :active-index="activeIndex" />
    <!-- 页面内容 -->
    <div class="guide-page-container">
      <!-- 左侧导航栏 -->
      <div class="guide-sidebar">
        <div class="sidebar-title">{{paramsData.h}}</div>
        <ul class="sidebar-menu">
          <li class="menu-item active">了解产品</li>
          <li class="menu-item">注册账号</li>
          <li class="menu-item">免费试用</li>
          <li class="menu-item">快速入门</li>
          <li class="menu-item">开始使用</li>
        </ul>
      </div>

      <!-- 右侧内容区域 -->
      <div class="guide-content">
        <!-- 页面标题 -->
        <div class="guide-header">
          <h1 class="page-title">{{paramsData.h}}</h1>
          <p class="page-description">
           {{paramsData.title}}
          </p>
          <div class="header-buttons">
            <button class="btn-primary">返回首页</button>
            <button class="btn-secondary">问题反馈</button>
            <button class="btn-secondary">意见提交</button>
            <button class="btn-secondary">我要升级</button>
          </div>
        </div>

        <!-- 学习路径 -->
        <div class="learning-path">
          <h2 class="section-title">学习路径</h2>
          <div class="path-description">
            了解产品 → 注册账号 → 免费试用 → 快速入门 → 开始使用
          </div>

          <!-- 了解产品 -->
          <div class="path-step">
            <div class="step-header">
              <div class="step-icon">了解</div>
              <h3 class="step-title">了解产品</h3>
            </div>
            <div class="step-content">
              <div class="step-item">
                <div class="item-icon">📚</div>
                <div class="item-title">了解阿里云</div>
              </div>
              <div class="step-item">
                <div class="item-icon">📖</div>
                <div class="item-title">了解阿里云AI平台</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔍</div>
                <div class="item-title">了解阿里云AI平台功能</div>
              </div>
              <div class="step-item">
                <div class="item-icon">💡</div>
                <div class="item-title">了解阿里云AI平台优势</div>
              </div>
            </div>
          </div>

          <!-- 注册账号 -->
          <div class="path-step">
            <div class="step-header">
              <div class="step-icon">注册</div>
              <h3 class="step-title">注册账号</h3>
            </div>
            <div class="step-content">
              <div class="step-item">
                <div class="item-icon">📝</div>
                <div class="item-title">注册阿里云账号</div>
              </div>
              <div class="step-item">
                <div class="item-icon">📱</div>
                <div class="item-title">注册账号</div>
              </div>
              <div class="step-item">
                <div class="item-icon">👤</div>
                <div class="item-title">个人实名认证</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔐</div>
                <div class="item-title">完成安全设置</div>
              </div>
            </div>
          </div>

          <!-- 免费试用 -->
          <div class="path-step">
            <div class="step-header">
              <div class="step-icon">免费试用</div>
              <h3 class="step-title">免费试用</h3>
            </div>
            <div class="step-content">
              <div class="step-item">
                <div class="item-icon">🎁</div>
                <div class="item-title">注册新用户免费体验</div>
              </div>
              <div class="step-item">
                <div class="item-icon">💳</div>
                <div class="item-title">免费试用阿里云AI平台</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔍</div>
                <div class="item-title">管理AI平台资源（Console入口）</div>
              </div>
              <div class="step-item">
                <div class="item-icon">📊</div>
                <div class="item-title">阿里云AI平台的免费额度是多少？</div>
              </div>
            </div>
          </div>

          <!-- 快速入门 -->
          <div class="path-step">
            <div class="step-header">
              <div class="step-icon">快速入门</div>
              <h3 class="step-title">快速入门</h3>
            </div>
            <div class="step-content">
              <div class="step-item">
                <div class="item-icon">🚀</div>
                <div class="item-title">快速创建DL实例</div>
              </div>
              <div class="step-item">
                <div class="item-icon">💻</div>
                <div class="item-title">快速使用ECS + MySQL + Serverless实例</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔧</div>
                <div class="item-title">快速搭建ECS + MySQL服务器并生成开发环境</div>
              </div>
              <div class="step-item">
                <div class="item-icon">⚡</div>
                <div class="item-title">快速搭建ECS + SQL Server实例</div>
              </div>
            </div>
          </div>

          <!-- 开始使用 -->
          <div class="path-step">
            <div class="step-header">
              <div class="step-icon">开始使用</div>
              <h3 class="step-title">开始使用</h3>
            </div>
            <div class="step-content">
              <div class="step-item">
                <div class="item-icon">📊</div>
                <div class="item-title">查看计费与资源管理</div>
              </div>
              <div class="step-item">
                <div class="item-icon">💻</div>
                <div class="item-title">使用控制台控制台</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔧</div>
                <div class="item-title">使用控制台管理ECS实例</div>
              </div>
              <div class="step-item">
                <div class="item-icon">⚡</div>
                <div class="item-title">使用控制台运行</div>
              </div>
              <div class="step-item">
                <div class="item-icon">📈</div>
                <div class="item-title">管理资源与创建实例</div>
              </div>
              <div class="step-item">
                <div class="item-icon">🔄</div>
                <div class="item-title">为AI平台添加数据</div>
              </div>
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
      paramsData: {}
    }
  },
  methods: {
    toLInk(link){
      window.open(link, "_blank")
    }
  },
  mounted() {
    // 获取URL参数
    this.paramsData.h = this.$route.params.h || '默认标题';
    this.paramsData.title = this.$route.query.title || '默认描述';
    console.log('URL参数:', this.paramsData);
    this.$forceUpdate()
  }
}
</script>

<style scoped>
/* 所有产品页面样式 */
.content-auto {
  content-visibility: auto;
}

.bg-gradient-blue {
  background: linear-gradient(to bottom, rgba(240, 248, 255, 0.8), rgba(255, 255, 255, 0));
}

/* 页面容器 */
.guide-page-container {
  display: flex;
  min-height: calc(100vh - 120px);
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}

/* 左侧导航栏 */
.guide-sidebar {
  width: 220px;
  margin-right: 30px;
  background: #f5f7fa;
  border-radius: 8px;
  padding: 20px 0;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  padding: 0 20px 15px;
  border-bottom: 1px solid #e6e8eb;
  margin-bottom: 15px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
  position: relative;
}

.menu-item:hover {
  background: #eef2f7;
  color: #1890ff;
}

.menu-item.active {
  background: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}

.menu-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #1890ff;
}

/* 右侧内容区域 */
.guide-content {
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 页面标题 */
.guide-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8eb;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px;
}

.page-description {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 20px;
}

/* 头部按钮 */
.header-buttons {
  display: flex;
  gap: 12px;
}

.btn-primary {
  background: #1890ff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #40a9ff;
}

.btn-secondary {
  background: #fff;
  color: #666;
  border: 1px solid #d9d9d9;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #f5f5f5;
  border-color: #40a9ff;
  color: #40a9ff;
}

/* 学习路径 */
.learning-path {
  margin-top: 30px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px;
}

.path-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #e6e8eb;
}

/* 路径步骤 */
.path-step {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e6e8eb;
  border-radius: 8px;
  background: #fafafa;
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.step-icon {
  width: 40px;
  height: 40px;
  background: #1890ff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-right: 12px;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

/* 步骤内容 */
.step-content {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.step-item {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #e6e8eb;
  min-width: 280px;
  flex: 1;
  transition: all 0.3s ease;
}

.step-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.item-icon {
  font-size: 20px;
  margin-right: 10px;
}

.item-title {
  font-size: 14px;
  color: #333;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .guide-page-container {
    flex-direction: column;
  }

  .guide-sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
    position: static;
  }

  .step-content {
    flex-direction: column;
  }

  .step-item {
    min-width: auto;
  }

  .header-buttons {
    flex-wrap: wrap;
  }
}
</style>



