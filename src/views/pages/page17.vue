<template>
  <div class="aliyun-page">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">权益总览</h1>
        <div class="header-actions">
          <span class="header-info">有效期至：2025-12-31</span>
          <button class="extend-btn">续期</button>
        </div>
      </div>
    </div>

    <!-- 页面主体 -->
    <div class="page-content">
      <!-- 左侧菜单 -->
      <div class="left-menu">
        <ul class="menu-list">
          <li class="menu-item active">
            <span class="menu-icon">🏠</span>
            <span class="menu-text">首页</span>
          </li>
          <li class="menu-item">
            <span class="menu-icon">📊</span>
            <span class="menu-text">资源使用</span>
          </li>
          <li class="menu-item">
            <span class="menu-icon">💰</span>
            <span class="menu-text">费用中心</span>
          </li>
          <li class="menu-item">
            <span class="menu-icon">🎁</span>
            <span class="menu-text">我的权益</span>
          </li>
          <li class="menu-item">
            <span class="menu-icon">⚙️</span>
            <span class="menu-text">账户设置</span>
          </li>
          <li class="menu-item">
            <span class="menu-icon">📞</span>
            <span class="menu-text">客户支持</span>
          </li>
        </ul>
      </div>

      <!-- 右侧内容 -->
      <div class="right-content">
        <!-- 企业用户权益 -->
        <div class="权益-card">
          <div class="card-header">
            <h2 class="card-title">企业用户权益</h2>
            <span class="card-tag">已开通</span>
          </div>
          <div class="card-content">
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">企业用户专享</h3>
                <p class="权益-desc">享受企业级服务支持和专属优惠</p>
              </div>
              <div class="权益-right">
                <span class="权益-status">已开通</span>
              </div>
            </div>
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">199元无门槛优惠券</h3>
                <p class="权益-desc">有效期：2025-01-01至2025-12-31</p>
              </div>
              <div class="权益-right">
                <span class="权益-status">已领取</span>
              </div>
            </div>
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">企业云盘</h3>
                <p class="权益-desc">免费提供1000万次上传下载</p>
              </div>
              <div class="权益-right">
                <span class="权益-status">已开通</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 费用用户专享权益 -->
        <div class="权益-card">
          <div class="card-header">
            <h2 class="card-title">费用用户专享权益</h2>
            <span class="card-tag">即将到期</span>
          </div>
          <div class="card-content">
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">认证用户特权</h3>
                <p class="权益-desc">认证后享受更多专属服务</p>
              </div>
              <div class="权益-right">
                <button class="权益-btn">立即认证</button>
              </div>
            </div>
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">新用户首单礼</h3>
                <p class="权益-desc">首次购买可享300元优惠券</p>
              </div>
              <div class="权益-right">
                <button class="权益-btn">立即领取</button>
              </div>
            </div>
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">企业云盘扩容</h3>
                <p class="权益-desc">可将企业云盘容量提升至5TB</p>
              </div>
              <div class="权益-right">
                <button class="权益-btn">立即升级</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 我的优惠 -->
        <div class="权益-card">
          <div class="card-header">
            <h2 class="card-title">我的优惠</h2>
            <span class="card-more">查看更多</span>
          </div>
          <div class="card-content">
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">云服务器优惠券</h3>
                <p class="权益-desc">满1000元减200元，有效期至2025-06-30</p>
              </div>
              <div class="权益-right">
                <button class="权益-btn">立即使用</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 我的服务 -->
        <div class="权益-card">
          <div class="card-header">
            <h2 class="card-title">我的服务</h2>
            <span class="card-more">查看更多</span>
          </div>
          <div class="card-content">
            <div class="权益-item">
              <div class="权益-left">
                <h3 class="权益-name">企业级技术支持</h3>
                <p class="权益-desc">7×24小时专业技术支持服务</p>
              </div>
              <div class="权益-right">
                <button class="权益-btn">立即咨询</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '权益总览',
  data() {
    return {
      activeMenu: '首页',
    }
  },
  methods: {
    handleMenuClick(menuName) {
      this.activeMenu = menuName;
    }
  }
}
</script>

<style scoped>
.aliyun-page {
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: "Microsoft Yahei", sans-serif;
}

/* 页面头部 */
.page-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e4e7ed;
  padding: 16px 24px;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-info {
  font-size: 14px;
  color: #666666;
}

.extend-btn {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.extend-btn:hover {
  background-color: #40a9ff;
}

/* 页面主体 */
.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  gap: 24px;
}

/* 左侧菜单 */
.left-menu {
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  cursor: pointer;
  color: #666666;
  font-size: 14px;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: #f0f5ff;
  color: #1890ff;
}

.menu-item.active {
  background-color: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}

.menu-icon {
  font-size: 16px;
}

/* 右侧内容 */
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 权益卡片 */
.权益-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin: 0;
}

.card-tag {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #f6ffed;
  color: #52c41a;
  border: 1px solid #b7eb8f;
}

.card-more {
  font-size: 14px;
  color: #1890ff;
  cursor: pointer;
}

.card-content {
  padding: 16px 24px;
}

/* 权益项 */
.权益-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.权益-item:last-child {
  border-bottom: none;
}

.权益-left {
  flex: 1;
}

.权益-name {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin: 0 0 4px 0;
}

.权益-desc {
  font-size: 12px;
  color: #999999;
  margin: 0;
}

.权益-right {
  display: flex;
  align-items: center;
}

.权益-status {
  font-size: 12px;
  color: #52c41a;
}

.权益-btn {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.权益-btn:hover {
  background-color: #40a9ff;
}
</style>