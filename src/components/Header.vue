<template>
  <el-header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <i class="el-icon-cloud"></i>
        <span>阿里云AI</span>
      </router-link>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">大模型</el-menu-item>
        <el-submenu index="2">
          <template slot="title">产品</template>
          <el-menu-item index="2-1">所有产品</el-menu-item>
          <el-menu-item index="2-2">AI大模型</el-menu-item>
          <el-menu-item index="2-3">视觉智能</el-menu-item>
          <el-menu-item index="2-4">语音智能</el-menu-item>
          <el-menu-item index="2-5">自然语言处理</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">解决方案</el-menu-item>
        <el-menu-item index="4">文档与社区</el-menu-item>
        <el-menu-item index="5">权益中心</el-menu-item>
        <el-menu-item index="6">定价</el-menu-item>
        <el-menu-item index="7">云市场</el-menu-item>
        <el-menu-item index="8">合作伙伴</el-menu-item>
        <el-menu-item index="9">支持与服务</el-menu-item>
        <el-menu-item index="10">了解阿里云</el-menu-item>
      </el-menu>
      <div class="header-actions">
        <el-input placeholder="搜索AI产品和服务" prefix-icon="el-icon-search" class="search-input"></el-input>
        <el-button type="text" class="login-btn">登录</el-button>
        <el-button type="primary" class="register-btn">免费试用</el-button>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    activeIndex: {
      type: String,
      default: '2'
    }
  },
  watch: {
    '$route': function(to) {
      // 根据当前路由更新activeIndex
      switch(to.path) {
        case '/bigmodel':
          this.activeIndex = '1';
          break;
        case '/solutions':
          this.activeIndex = '3';
          break;
        case '/documentation':
          this.activeIndex = '4';
          break;
        case '/benefits':
          this.activeIndex = '5';
          break;
        case '/price':
          this.activeIndex = '6';
          break;
        case '/cloudmarket':
          this.activeIndex = '7';
          break;
        case '/ljaly':
          this.activeIndex = '10';
          break;
        // 可以添加其他路由的activeIndex映射
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // 根据选中的key进行路由跳转
      switch(key) {
        case '1':
          this.$router.push('/bigmodel');
          break;
        case '3':
          this.$router.push('/solutions');
          break;
        case '4':
          this.$router.push('/documentation');
          break;
        case '5':
          this.$router.push('/benefits');
          break;
        case '6':
          this.$router.push('/price');
          break;
        case '7':
          this.$router.push('/cloudmarket');
          break;
        case '10':
          this.$router.push('/ljaly');
          break;
        // 可以添加其他菜单项的路由跳转逻辑
      }
      // 触发事件，让父组件处理其他逻辑
      this.$emit('menu-select', { key, keyPath });
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
}

.header-container {
  width: 100%;
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
</style>






