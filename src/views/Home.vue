<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex" />

    <!-- 英雄区域 -->
    <section class="hero-section" style="width: 100%; padding: 0 10%; background: url('/src/static/img/bg_1.png') no-repeat center center; background-size: cover;">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1>限时免费 超 7000万 AI 大模型 tokens</h1>
        <p class="hero-subtitle">支持 Qwen3 全系列模型一键部署，超值低价强大算力，即刻开启 AI 应用构建</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" @click="goToCloudServer('page2')" class="primary-btn">立即查看</el-button>
          <el-button type="default" size="large" class="secondary-btn">了解更多</el-button>
        </div>
        <div class="hero-cards">
          <el-card class="hero-card">
            <div style="width: 100%; height: 100%" @click="goToCloudServer('page1')">
            <div class="card-title"  >
              <i class="el-icon-tickets"></i>
              超轻 99 元云服务器，新老同享
            </div>
            <p class="card-desc"  @click="goToCloudServer('page1')">持续创新的云服务，用云更简单，活动期间新老同价，开放必抢</p>
            </div>
          </el-card>
          <el-card class="hero-card">
            <div style="width: 100%; height: 100%" @click="goToCloudServer('moxing1')">
            <div class="card-title">
              <i class="el-icon-document"></i>
              Z-Image-Turbo 现已上架阿里云百炼
            </div>
            <p class="card-desc" >仅需 8 步推理，即可轻松生成高质量图像，免费畅享 100 张</p>
            </div>
          </el-card>
          <el-card class="hero-card">
            <div style="width: 100%; height: 100%" @click="goToCloudServer('moxing1')">
            <div class="card-title">
              <i class="el-icon-lightbulb"></i>
              Qwen3 + MCP：一切皆有可能
            </div>
            <p class="card-desc">5 分钟构建增强型应用，购买 MCP Server 实现随想随创</p>
            </div>
          </el-card>
          <el-card class="hero-card">
            <div style="width: 100%; height: 100%" @click="goToCloudServer('page4')">
            <div class="card-title">
              <i class="el-icon-download"></i>
              超 160 款产品免费试用
            </div>
            <p class="card-desc">一键开服后即可按需免费。最长 12 个月使用，创始团队无忧</p>
            </div>
          </el-card>
        </div>
      </div>
    </section>
    <div style="width: 100%; padding: 0 10%;">
      <!-- 精选AI应用区域 -->
      <section class="featured-ai-section">
        <div class="section-header">
          <h2>精选云上 AI 应用，助力业务创新</h2>
        </div>
        <div class="ai-showcase ">
          <el-card class="ai-card main-ai-card gradient-1" style="color: #fff;">
            <div class="ai-card-header " style="height: 100%;color: #fff;">
              <h3 style="color: #fff;">阿里云 AI 体验馆</h3>
              <p style="font-size: 20px; padding: 20px 0;color: #fff;">一站式体验阿里云AI能力，快速验证应用场景和效果</p>
              <div class="btn" @click="goToCloudServer('moxing1')">
                立即体验
              </div>
            </div>
          </el-card>
          <div class="ai-cards-grid">
            <el-card v-for="(card, index) in aiCards" :key="index" :class="['ai-card', 'small-ai-card', card.size === 'small' ? 'small-ai-card' : '',]">
              <div class="ai-card-header" :class="card.size === 'small' ? 'small-header' : ''" @click="goToCloudServer('moxing1')">
                <h4>{{ card.title }}</h4>
                <p>{{ card.desc }}</p>
              </div>
              <div class="ai-card-image" :class="card.size === 'small' ? 'small-image' : ''" @click="goToCloudServer('moxing1')">
                <div class="image-placeholder" :class="card.gradientClass">

                </div>
              </div>
            </el-card>
          </div>
        </div>
      </section>

      <!-- 通义大模型区域 -->
      <section class="tongyi-model-section">
        <div class="section-header">
          <h2>通义大模型</h2>
          <p class="section-subtitle">企业级高效能的先进模型服务</p>
        </div>
        <div class="mx-auto" style="background: #fff; padding: 30px 20px;">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 左侧区域 -->
            <div class="bg-grad rounded-xl  flex flex-col justify-between">
              <div style="margin: 20px 0 0 50px">
                <h2 class="text-2xl font-bold mb-6 text-gray-900">{{ tongyiModels.main.title }}</h2>
                <ul class="space-y-3 mb-8">
                  <li v-for="(feature, index) in tongyiModels.main.features" :key="index" class="check-item">{{ feature }}</li>
                </ul>
              </div>
              <div>
                <button  style="margin-bottom: 80px; margin-left: 30px " class="bg-[#165DFF] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#0E4BDB] transition-colors"  @click="goToCloudServer('moxing2')">
                  模型广场 <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <!-- 中间区域 -->
            <div class="space-y-10">
              <div v-for="(model, index) in tongyiModels.models.slice(0, 3)" :key="index" class="box_1" @click="goToCloudServer('moxing1')" style="cursor: pointer">
                <div class="flex items-center gap-3 mb-3">
                  <i :class="['fa-solid', 'fa-' + model.icon, 'text-[#165DFF]', 'text-xl']"></i>
                  <h3 class="text-xl font-semibold">{{ model.title }}</h3>
                  <span v-if="model.isNew" class="bg-blue-50 text-[#165DFF] text-xs px-2 py-1 rounded">NEW</span>
                </div>
                <p class="text-gray-600 text-sm">{{ model.desc }}</p>
              </div>
            </div>

            <!-- 右侧区域 -->
            <div class="space-y-10">
              <div v-for="(model, index) in tongyiModels.models.slice(3, 6)" :key="index" class="box_1">
                <div class="flex items-center gap-3 mb-3">
                  <i :class="['fa-solid', 'fa-' + model.icon, 'text-[#165DFF]', 'text-xl']"></i>
                  <h3 class="text-xl font-semibold">{{ model.title }}</h3>
                  <span v-if="model.isNew" class="bg-blue-50 text-[#165DFF] text-xs px-2 py-1 rounded">NEW</span>
                </div>
                <p class="text-gray-600 text-sm">{{ model.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AI与云计算协同区域 -->
      <section class="ai-cloud-section">
        <div class="section-header">
          <h2>依托大模型与云计算协同发展，让 AI 触手可及</h2>
        </div>
        <div class="ai-cloud-content">
          <el-card class="ai-card main-ai-card">
            <div class="feature-list">
              <div v-for="(feature, index) in aiCloudFeatures" :key="index" class="feature-item">
                <div class="feature-header">
                  <span class="feature-title">{{ feature.title }}</span>
                  <div class="toggle-btn" :data-index="index + 1"></div>
                </div>
                <div class="feature-content" v-html="feature.content"></div>
              </div>
            </div>
          </el-card>
          <div class="ai-cloud-image">
            <div class="image-placeholder gradient-8">
              <video class="card-video" src="/src/static/img/video1.mp4" autoplay loop muted playsinline></video>
            </div>
          </div>
        </div>
      </section>

      <!-- 产品体系区域 -->
      <section class="products-section">
        <div class="section-header">
          <h2>完整的产品体系，为企业打造技术创新的云</h2>
        </div>
        <div class="products-grid">
          <el-card class="products-card categories-card">
            <h3>核心产品</h3>
            <ul class="product-categories">
              <li
                  v-for="(category, index) in products.categories"
                  :key="index"
                  :class="{ active: selectedCategory === category.id }"
                  @click="selectCategory(category.id)"
              >
                <i :class="category.icon"></i> {{ category.name }}
              </li>
            </ul>
          </el-card>

          <div class="product-groups" style="background: #fff; padding: 30px 20px;">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                  v-for="(product, index) in selectedProducts"
                  :key="index"
                  :class="[
                  'border-b',
                  'border-borderColor',
                  index < 3 ? 'pb-4' : '',
                  index >= 3 && index < 12 ? 'py-4' : '',
                  index >= 12 ? 'py-4' : ''
                ]"
              >
                <h3 class="text-textMain font-medium text-lg mb-2">
                  {{ product.title }}
                  <span v-if="product.tag" class="product-tag">{{ product.tag }}</span>
                </h3>
                <p class="text-textSub text-sm" :class="index < 3 ? 'mb-3' : ''">{{ product.desc }}</p>
                <div v-if="product.actions.length > 0" class="flex gap-2">
                  <button style="padding: 10px 20px"
                          v-for="(action, actionIndex) in product.actions"
                          :key="actionIndex"
                          :class="[
                      'product-btn',
                      action.type === 'primary' ? 'bg-primary' : '',
                      action.type === 'default' ? 'bg-secondary text-primary' : '',
                      product.actions.length === 1 ? 'w-full' : ''
                    ]"
                          @click="toLInk(action)"
                  >
                    {{ action.text }}
                  </button>
                </div>
              </div>
            </div>
            <!--            <el-card-->
            <!--              v-for="(product, index) in selectedProducts"-->
            <!--              :key="index"-->
            <!--              class="products-card group-card"-->
            <!--            >-->
            <!--              <div class="product-header">-->
            <!--                <h3>{{ product.title }}</h3>-->
            <!--                <p class="product-desc">{{ product.desc }}</p>-->
            <!--              </div>-->
            <!--              <div class="product-actions">-->
            <!--                <el-button-->
            <!--                  v-for="(action, actionIndex) in product.actions"-->
            <!--                  :key="actionIndex"-->
            <!--                  :type="action.type"-->
            <!--                  size="small"-->
            <!--                  :disabled="action.disabled"-->
            <!--                >-->
            <!--                  {{ action.text }}-->
            <!--                </el-button>-->
            <!--              </div>-->
            <!--            </el-card>-->
          </div>
        </div>
      </section>
    </div>

    <!-- 技术解决方案区域 -->
    <section class="solutions-section">
      <div class="section-header">
        <h2>卓越的技术解决方案，加速云上应用构建</h2>
      </div>
      <div class="solutions-grid" style="width: 100%; padding: 0 10%">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 卡片1：小程序搭建 -->
          <div class="border border-borderGray rounded-lg p-6 card-hover">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-mobile-screen-button text-primary text-xl"></i>
                <h3 class="text-card-title font-medium">10分钟搭建微信、支付宝小程序</h3>
              </div>
              <span class="card-tag">小程序</span>
            </div>
            <p class="text-card-desc text-grayText mb-4">
              在阿里云上快速部署博客网站，并将网站服务快速应用到微信、支付宝小程序。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="card-label">云服务器 ECS</span>
              <span class="card-label">云数据库 RDS</span>
              <span class="card-label">云解析 DNS</span>
              <span class="card-label">域名与网站</span>
            </div>
            <div class="flex justify-end">
              <a href="#" class="text-primary text-sm">
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>

          <!-- 卡片2：企业门户网站 -->
          <div class="border border-borderGray rounded-lg p-6 card-hover">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-code text-primary text-xl"></i>
                <h3 class="text-card-title font-medium">低代码高效构建企业门户网站</h3>
              </div>
              <span class="card-tag">网站搭建</span>
            </div>
            <p class="text-card-desc text-grayText mb-4">
              通过可视化的方式添加多种风格的门户组件，帮助企业快速高效地构建多端门户网站。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="card-label">多端低代码开发平台魔笔</span>
              <span class="card-label">云数据库 RDS</span>
              <span class="card-label">云解析 DNS</span>
              <span class="card-label">域名与网站</span>
            </div>
            <div class="flex justify-end">
              <a href="#" class="text-primary text-sm">
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>

          <!-- 卡片3：静态资源加速 -->
          <div class="border border-borderGray rounded-lg p-6 card-hover">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-globe text-primary text-xl"></i>
                <h3 class="text-card-title font-medium">网站静态资源访问加速</h3>
              </div>
              <span class="card-tag">网站加速</span>
            </div>
            <p class="text-card-desc text-grayText mb-4">
              用户跨地域访问慢？用阿里云CDN分发OSS上的网站静态文件，提速降本。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="card-label">对象存储 OSS</span>
              <span class="card-label">CDN</span>
            </div>
            <div class="flex justify-end">
              <a href="#" class="text-primary text-sm">
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>

          <!-- 卡片4：SSL证书部署 -->
          <div class="border border-borderGray rounded-lg p-6 card-hover">
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-shield-halved text-primary text-xl"></i>
                <h3 class="text-card-title font-medium">部署SSL证书实现Web服务加密访问</h3>
              </div>
              <span class="card-tag">网站加速</span>
            </div>
            <p class="text-card-desc text-grayText mb-4">
              HTTPS 加密防数据泄露和中间人攻击，阿里云免费 SSL 证书支持多种服务器。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="card-label">域名与网站</span>
              <span class="card-label">数字证书管理服务 (原SSL证书)</span>
            </div>
            <div class="flex justify-end">
              <a href="#" class="text-primary text-sm">
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
        <!--          <el-card v-for="(solution, index) in solutions" :key="index" class="solution-card">-->
        <!--            &lt;!&ndash; <div class="solution-icon">-->
        <!--              <i :class="solution.icon"></i>-->
        <!--            </div> &ndash;&gt;-->
        <!--            <h3>{{ solution.title }}</h3>-->
        <!--            <p class="solution-desc">{{ solution.desc }}</p>-->
        <!--            <el-button type="text" class="solution-more">查看详情 →</el-button>-->
        <!--          </el-card>-->
      </div>
    </section>
    <div style="width: 100%; padding: 40px 10%">
      <!-- 超值权益区域 -->
      <section class="benefits-section">
        <div class="section-header">
          <h2>全方位云计算和 AI 超值权益，助力云上创新</h2>
        </div>
        <div class="benefits-grid">
          <el-card v-for="(benefit, index) in benefits" :key="index" class="benefit-card main-benefit-card">
            <div class="benefit-header">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.desc }}</p>
              <el-button  @click="toLInk(benefit)"  type="primary" class="benefit-btn  solution-more">{{ benefit.btnText }}</el-button>
            </div>
            <ul class="benefit-list">
              <li v-for="(item, itemIndex) in benefit.items" :key="itemIndex">
                <i :class="item.icon"></i>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </el-card>
        </div>
      </section>

      <!-- 客户案例区域 -->
      <section class="customers-section">
        <div class="section-header">
          <h2>千行百业的公司，与阿里云一起开拓创新</h2>
        </div>
        <div class="customer-cases">
          <el-card >
            <div v-for="(customer, index) in customers" :key="index" class="customer-card">
              <div class="customer-logo">
                <img v-if="index==0" src="/src/static/img/pic_3.png" :alt="customer.name">
                <img v-if="index==1" src="/src/static/img/pic_4.png" :alt="customer.name">
                <img v-if="index==2" src="/src/static/img/pic_5.png" :alt="customer.name">

              </div>
              <span style="font-size: 20px;line-height: 40px;">{{ customer.name }}</span>
              <p class="customer-desc">{{ customer.desc }}</p>
            </div>
          </el-card>
        </div>

        <div class="customer-logos">
          <div v-for="(row, rowIndex) in customerLogos" :key="rowIndex" class="logo-row">
            <div v-for="(logo, logoIndex) in row" :key="logoIndex" class="logo-item">{{ logo }}</div>
          </div>
        </div>
      </section>

      <!-- 全球基础设施区域 -->
      <!-- <section class="infrastructure-section">
        <div class="section-header">
          <h2>安全合规、遍布全球的云计算基础设施</h2>
        </div>
        <div class="infrastructure-content">
          <div class="infrastructure-stats">
            <div v-for="(stat, index) in infrastructure.stats" :key="index" class="stat-item">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <div class="world-map">
            <div class="map-placeholder"></div>
          </div>
        </div>
        <div class="compliance-logos">
          <div v-for="(logo, index) in infrastructure.compliance" :key="index" class="compliance-logo">{{ logo }}</div>
        </div>
      </section> -->
    </div>

    <!-- 数字经济时代区域 -->
    <section class="digital-economy-section">
      <div class="section-header">
        <h2>数字经济时代，云计算为创新提速</h2>
      </div>
      <div class="economy-features"  >

        <el-card class="economy-card">
          <div style="width: 100%; padding: 40px 10%">
            <div  style="padding: 20px 1%; width: 23%;float: left; line-height: 50px;" v-for="(feature, index) in economyFeatures" :key="index" >

              <h3 style="font-size: 24px;line-height: 60px; color: #1890ff; border-bottom: 1px solid #dedede;">{{ feature.title }}</h3>
              <p class="economy-desc">{{ feature.desc }}</p>
            </div>
          </div>
        </el-card>

      </div>
    </section>
    <div style="width: 100%; padding: 40px 10%">
      <!-- 专属服务区域 -->
      <section class="services-section">
        <div class="section-header">
          <h2>专属服务，陪伴上云流程</h2>
        </div>
        <div class="services-grid">
          <div class="service-container">
            <!-- 全天候高效服务 -->
            <div class="service-card">
              <h3 class="service-title">全天候高效服务</h3>
              <p class="service-desc">7×24 小时为您提供专业服务</p>
            </div>

            <!-- 多渠道无忧服务（高亮） -->
            <div class="service-card highlight">
              <h3 class="service-title">多渠道无忧服务</h3>
              <p class="service-desc">多种查询、诊断等服务工具，快速解决常见问题</p>
            </div>

            <!-- 专属贴身服务 -->
            <div class="service-card">
              <h3 class="service-title">专属贴身服务</h3>
              <p class="service-desc">1v1 极速响应、专属保障的贴身服务</p>
            </div>

            <!-- 专业上云服务 -->
            <div class="service-card">
              <h3 class="service-title">专业上云服务</h3>
              <p class="service-desc">上云全周期的技术咨询与实施服务</p>
            </div>
          </div>

          <!-- 底部链接 -->
          <div class="service-link">
            <a href="#">了解更多支持与服务</a>
          </div>
        </div>
      </section>

      <!-- 行动召唤区域 -->
      <!-- <section class="cta-section">
        <div class="cta-gradient"></div>
        <div class="cta-content">
          <h2>立即体验，在阿里云上创造未来</h2>
          <el-button type="primary" size="large" class="cta-btn">立即注册</el-button>
        </div>
      </section> -->
      <!-- 页脚区域 -->
      <div class="banner" style="width: 100%; padding: 0 10%">
        <div class="banner-content">
          <h2 class="banner-title">立即体验，在阿里云上创造未来</h2>
          <span class="btn-trial" @click="goToCloudServer('page4')">
                免费试用
                <span>→</span>
            </span>
        </div>
        <div class="banner-bg"></div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'AliyunAiPlatform',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '1',
      selectedCategory: '1',

      // 精选AI应用卡片数据
      aiCards: [
        {
          title: '智能总结',
          desc: '快速提取文本关键信息，生成简洁摘要',
          gradientClass: 'gradient-2',
          size: 'small'
        },
        {
          title: '实时对话',
          desc: '自然语言交互，智能问答，高效沟通',
          gradientClass: 'gradient-3',
          size: 'small'
        },
        {
          title: '分析解读',
          desc: '深度分析数据，提供专业解读和建议',
          gradientClass: 'gradient-4',
          size: 'small'
        },
        {
          title: '大规模模型',
          desc: '调用大模型能力，处理复杂任务',
          gradientClass: 'gradient-5',
          size: 'small'
        },
        {
          title: '视频翻译',
          desc: '视频内容识别，实时翻译多语言字幕',
          gradientClass: 'gradient-6',
          size: 'small'
        }
      ],
      // 通义大模型数据
      tongyiModels: {
        main: {
          title: '通义大模型',
          features: [
            '全模态高效精准的模型服务调用',
            '丰富的多模态大模型，契合更多业务场景',
            '万亿级超大规模数据训练和leading的算法框架'
          ]
        },
        models: [
          {
            icon: 'file-lines',
            title: '通义千问 3 · 文本生成大模型',
            desc: '全新发布强大且灵活的 Qwen3-Coder 代码生成模型，升级 Qwen3 最强 236B 旗舰版，综合能力遥遥领先。',
            isNew: false
          },
          {
            icon: 'image',
            title: '通义千问 · 图片生成大模型',
            desc: '通义千问系列图像生成模型，具备卓越的文本渲染能力，在复杂文本渲染、各类生成与编辑任务中表现出色。',
            isNew: false
          },
          {
            icon: 'cubes-stacked',
            title: '通义千问 3 · 全模态大模型',
            desc: '全模态大模型能满足实时音频交互场景。支持音频伴随图文视频混合输入理解，含4种自然对话音色。',
            isNew: false
          },
          {
            icon: 'camera',
            title: '通义千问 3 · 视觉理解大模型',
            desc: 'Qwen3 系列视觉理解模型，实现思考和非思考模式的有效融合，视觉感知与识别能力大幅提升，支持超长视频理解。',
            isNew: false
          },
          {
            icon: 'video',
            title: '通义万相 2.6 · 视频生成大模型',
            desc: '通义万相 2.6 视频生成大模型，面向专业影视创作的全局升级。支持15秒超长视频，电影级超写实人像生成效果。',
            isNew: true
          },
          {
            icon: 'microphone-lines',
            title: '通义百聆 · 语音识别模型',
            desc: '新一代端到端语音识别大模型的实时版，基于领先的自研语音技术，具备卓越的上下文感知和高精度语音转写能力。',
            isNew: false
          }
        ]
      },
      // AI与云计算协同功能数据
      aiCloudFeatures: [
        {
          title: '分析 Agent 实现一键 AI 数据洞察',
          content: `
            <div class="header">
              <h1 class="main-title">分析 Agent<br>实现一键 AI 数据洞察</h1>
              <span class="sub-title">智能商业分析 Quick BI</span>
              <p class="desc">提供五大核心能力：AI看板搭建、数据查询、数据解读、报告生成和数据推送，帮助用户从"被动看数"转向"主动用数"。</p>
              <div class="btn-group">
                <div href="#" class="primary-btn" @click="goToCloudServer('page3')" >了解详情</div>
                <div href="#" class="primary-btn" @click="goToCloudServer('moxing1')" >联系 AI 专家</div>
              </div>
            </div>
          `
        },
        {
          title: '与 AI 智能体进行实时音视频通话',
          content: `
          <div class="header">
              <h1 class="main-title">与 AI 智能体<br>进行实时音视频通话</h1>
              <span class="sub-title">智能媒体服务</span>
               <span class="sub-title">视频直播</span>
              <p class="desc">零代码接入AI视频助手，实时拟人对话+情绪识别，支持多模态场景理解，全球节点保障高清低延时通话。</p>
              <div class="btn-group">
                <div href="#" class="primary-btn" @click="goToCloudServer('page3')" >了解详情</div>
               <div href="#" class="primary-btn" @click="goToCloudServer('moxing1')" >联系 AI 专家</div>
              </div>
            </div>
          `
        },
        {
          title: '10 分钟在聊天系统中增加一个 AI 助手',
          content: `
           <div class="header">
              <h1 class="main-title">10 分钟在聊天系统中<br>增加一个 AI 助手</h1>
              <span class="sub-title">大模型服务平台百炼</span>
              <span class="sub-title">函数计算 FC</span>
              <p class="desc">10分钟即可0代码构建AI助手，部署到网站、钉钉或微信公众号，通过RAG应用增强知识问答，全天候提升用户体验。</p>
              <div class="btn-group">
                <div href="#" class="primary-btn" @click="goToCloudServer('page3')" >了解详情</div>
               <div href="#" class="primary-btn" @click="goToCloudServer('moxing1')" >联系 AI 专家</div>
              </div>
            </div>
          `
        },
        {
          title: 'AI 打造专属企业风格海报',
          content: `
           <div class="header">
              <h1 class="main-title">AI 打造专属企业风格海报</h1>
              <span class="sub-title">模型在线服务 PAI-EAS</span>
               <span class="sub-title">对象存储 OSS</span>
              <p class="desc">无需编程，一键生成企业专属Logo、海报等，节省时间成本，保证质量。支持定制化模型，按量付费经济高效。</p>
              <div class="btn-group">
                 <div href="#" class="primary-btn" @click="goToCloudServer('page3')" >了解详情</div>
               <div href="#" class="primary-btn" @click="goToCloudServer('moxing1')" >联系 AI 专家</div>
              </div>
            </div>
          `
        },
        {
          title: '多模态数据信息提取',
          content: `
          <div class="header">
              <h1 class="main-title">多模态数据信息提取</h1>
              <span class="sub-title">大模型服务平台百炼</span>
                <span class="sub-title">函数计算 FC</span>
              <p class="desc">一键解析文本、图片、视频数据，精准抽取关键信息，批量处理成本大幅降低，开箱即用安全高效。</p>
              <div class="btn-group">
                <div href="#" class="primary-btn" @click="goToCloudServer('page3')" >了解详情</div>
                 <div href="#" class="primary-btn" @click="goToCloudServer('moxing1')" >联系 AI 专家</div>
              </div>
            </div>
          `
        }
      ],
      // 产品体系数据
      products: {
        categories: [
          { id: '1', icon: 'el-icon-server', name: '计算' },
          { id: '2', icon: 'el-icon-box', name: '容器' },
          { id: '3', icon: 'el-icon-folder', name: '存储' },
          { id: '4', icon: 'el-icon-link', name: '网络与CDN' },
          { id: '5', icon: 'el-icon-shield', name: '安全' },
          { id: '6', icon: 'el-icon-database', name: '数据库' },
          { id: '7', icon: 'el-icon-line-chart', name: '大数据计算' },
          { id: '8', icon: 'el-icon-brain', name: '人工智能与机器学习' }
        ],
        groups: [
          {
            categoryId: '1',
            title: '云服务器 ECS',
            desc: '弹性计算服务，提供安全可靠的云计算能力',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['弹性计算', '混合云解决方案', '云服务器托管']
          },
          {
            categoryId: '8',
            title: '通义大模型',
            desc: '企业级大模型服务，助力业务创新',
            actions: [
              { type: 'primary', text: '立即体验' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['通用大模型服务', '行业大模型解决方案', '模型训练与部署']
          },
          {
            categoryId: '8',
            title: '大模型服务平台',
            desc: '一站式大模型管理与部署平台',
            actions: [
              { type: 'default', text: '即将上线', disabled: true }
            ],
            items: ['模型管理与调度', '推理服务优化', '多模型协同']
          },
          {
            categoryId: '1',
            title: '混合云',
            desc: '融合公有云与私有云的混合架构',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['云边协同架构', '数据安全流通', '混合云管理平台']
          },
          {
            categoryId: '1',
            title: '专有云服务',
            desc: '为企业定制的私有云解决方案',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['企业级私有云部署', '定制化解决方案', '专属运维支持']
          },
          {
            categoryId: '3',
            title: '对象存储 OSS',
            desc: '海量、安全、低成本的云存储服务',
            actions: [],
            items: ['海量数据存储', '数据备份与恢复', '内容分发加速']
          },
          {
            categoryId: '8',
            title: '大模型服务平台',
            desc: '一站式大模型管理与部署平台',
            actions: [
              { type: 'default', text: '即将上线', disabled: true }
            ],
            items: ['模型管理与调度', '推理服务优化', '多模型协同']
          },
          {
            categoryId: '1',
            title: '混合云',
            desc: '融合公有云与私有云的混合架构',
            actions: [],
            items: ['云边协同架构', '数据安全流通', '混合云管理平台']
          },
          {
            categoryId: '2',
            title: '专有云服务',
            desc: '为企业定制的私有云解决方案',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['企业级私有云部署', '定制化解决方案', '专属运维支持']
          },
          {
            categoryId: '2',
            title: '对象存储 OSS',
            desc: '海量、安全、低成本的云存储服务',
            actions: [],
            items: ['海量数据存储', '数据备份与恢复', '内容分发加速']
          },
          {
            categoryId: '4',
            title: '大模型服务平台',
            desc: '一站式大模型管理与部署平台',
            actions: [
              { type: 'default', text: '即将上线', disabled: true }
            ],
            items: ['模型管理与调度', '推理服务优化', '多模型协同']
          },
          {
            categoryId: '4',
            title: '混合云',
            desc: '融合公有云与私有云的混合架构',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['云边协同架构', '数据安全流通', '混合云管理平台']
          },
          {
            categoryId: '5',
            title: '专有云服务',
            desc: '为企业定制的私有云解决方案',
            actions: [],
            items: ['企业级私有云部署', '定制化解决方案', '专属运维支持']
          },
          {
            categoryId: '6',
            title: '对象存储 OSS',
            desc: '海量、安全、低成本的云存储服务',
            actions: [],
            items: ['海量数据存储', '数据备份与恢复', '内容分发加速']
          },
          {
            categoryId: '1',
            title: '混合云',
            desc: '融合公有云与私有云的混合架构',
            actions: [],
            items: ['云边协同架构', '数据安全流通', '混合云管理平台']
          },
          {
            categoryId: '2',
            title: '专有云服务',
            desc: '为企业定制的私有云解决方案',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['企业级私有云部署', '定制化解决方案', '专属运维支持']
          },
          {
            categoryId: '2',
            title: '对象存储 OSS',
            desc: '海量、安全、低成本的云存储服务',
            actions: [],
            items: ['海量数据存储', '数据备份与恢复', '内容分发加速']
          },
          {
            categoryId: '4',
            title: '大模型服务平台',
            desc: '一站式大模型管理与部署平台',
            actions: [
              { type: 'default', text: '即将上线', disabled: true }
            ],
            items: ['模型管理与调度', '推理服务优化', '多模型协同']
          },
          {
            categoryId: '4',
            title: '混合云',
            desc: '融合公有云与私有云的混合架构',
            actions: [
              { type: 'primary', text: '立即购买' },
              { type: 'default', text: '了解详情' }
            ],
            items: ['云边协同架构', '数据安全流通', '混合云管理平台']
          },
          {
            categoryId: '5',
            title: '专有云服务',
            desc: '为企业定制的私有云解决方案',
            actions: [],
            items: ['企业级私有云部署', '定制化解决方案', '专属运维支持']
          },
          {
            categoryId: '6',
            title: '对象存储 OSS',
            desc: '海量、安全、低成本的云存储服务',
            actions: [],
            items: ['海量数据存储', '数据备份与恢复', '内容分发加速']
          }
        ]
      },
      // 精选产品数据
      selectedProducts: [
        {
          title: '云服务器 ECS',
          desc: '安全可靠、弹性可伸缩的云计算服务',
          tag: '',
          actions: [
            { type: 'primary', text: '免费试用',link:'/pages/page4' },
            { type: 'default', text: '查看详情' }
          ]
        },
        {
          title: '通义大模型',
          desc: '多元化、高性能、安全可靠的大模型服务',
          tag: '大模型',
          actions: [
            { type: 'primary', text: '模型体验',link:'/pages/moxing1'  },
            { type: 'default', text: '查看详情' }
          ]
        },
        {
          title: '大模型服务平台百炼',
          desc: '大模型服务与应用平台',
          tag: '大模型',
          actions: [
            { type: 'default', text: '查看详情' ,link:'product' }
          ]
        },
        {
          title: '域名与网站',
          desc: '提供智能易用的域名与建站服务',
          tag: '',
          actions: []
        },
        {
          title: '轻量应用服务器',
          desc: '快速构建应用程序和网站，即刻迈出上云第一步',
          tag: '',
          actions: []
        },
        {
          title: '对象存储 OSS',
          desc: '稳定、安全、高性价比、高性能的云存储服务',
          tag: '',
          actions: []
        },
        {
          title: '云数据库 RDS',
          desc: '全托管，含MySQL、PostgreSQL、SQL Server、MariaDB多引擎',
          tag: '',
          actions: []
        },
        {
          title: '短信服务',
          desc: '国内短信简单易用，安全可靠，秒级触达，全球覆盖200+国家和地区',
          tag: '',
          actions: []
        },
        {
          title: '数字证书管理服务 (原SSL证书)',
          desc: '实现全站 HTTPS，呈现可信的 Web 访问',
          tag: '',
          actions: []
        },
        {
          title: '无影云电脑',
          desc: '随时随地安全接入的云上超级电脑',
          tag: '',
          actions: []
        },
        {
          title: '人工智能平台 PAI',
          desc: '一站式AI开发、训练和推理服务',
          tag: '大模型',
          actions: []
        },
        {
          title: '云解析 DNS',
          desc: '覆盖公网/内网、递归/权威、移动APP等全场景解析服务',
          tag: '',
          actions: []
        },
        {
          title: '云原生数据库 PolarDB',
          desc: '100%兼容MySQL、PostgreSQL，兼容Oracle，支持集中和分布式',
          tag: '',
          actions: []
        },
        {
          title: '大数据开发治理平台 DataWorks',
          desc: '一站式智能数据开发治理平台',
          tag: '',
          actions: []
        },
        {
          title: '云防火墙',
          desc: '云原生的云上边界网络安全防护产品',
          tag: '',
          actions: []
        }
      ],
      // 技术解决方案数据
      solutions: [
        {
          icon: 'el-icon-data-analysis',
          title: '10分钟构建数据，实时智能决策',
          desc: '快速搭建数据分析平台，实时处理业务数据，支持智能决策'
        },
        {
          icon: 'el-icon-office-building',
          title: '低成本高效构建企业门户网站',
          desc: '基于云原生技术，快速搭建企业官网，降低运维成本'
        },
        {
          icon: 'el-icon-rocket',
          title: '构建全球访问的加速',
          desc: '利用全球节点网络，实现应用全球加速访问，提升用户体验'
        },
        {
          icon: 'el-icon-document',
          title: '敏感证件识别Web服务加速',
          desc: '高效识别各类证件信息，提供安全可靠的身份验证服务'
        }
      ],
      // 超值权益数据
      benefits: [
        {
          title: '超值优选',
          desc: '超优云上套餐，低至0元，200+款产品免费体验',
          btnText: '立即抢购',
          link: 'benefits',
          items: [
            { icon: 'el-icon-gift', title: '140+云产品免费试用', desc: '新用户专享，最长可享12个月免费使用期' },
            { icon: 'el-icon-calculator', title: '弹性计费，长期低价', desc: '按需付费，长期使用更优惠，节省成本' },
            { icon: 'el-icon-solution', title: '超值解决方案', desc: '场景化解决方案，一站式满足业务需求' },
            { icon: 'el-icon-shopping-cart', title: '特惠券，领券省', desc: '定期发放各类优惠券，购买更划算' }
          ]
        },
        {
          title: '智启 AI',
          desc: '智启 AI 全面能力，加速 AI 应用落地',
          btnText: '开始体验',
          link: '/pages/moxing1',
          items: [
            { icon: 'el-icon-brain', title: '通义千问 3.5 能力全开', desc: '强大的大模型能力，支持多场景应用' },
            { icon: 'el-icon-robot', title: '云起实验室 DeepSeek 体验', desc: '免费体验前沿 AI 模型，快速上手' },
            { icon: 'el-icon-service', title: 'AI 大模型 + 专家服务', desc: '专业团队支持，加速模型落地应用' },
            { icon: 'el-icon-bar-chart', title: '免费额度，特性测试 (PAI)', desc: 'PAI-DSW 免费额度，支持模型开发测试' }
          ]
        }
      ],
      // 客户案例数据
      customers: [
        {
          logo: 'el-icon-office-building',
          name: '人民日报',
          desc: '利用阿里云AI技术，提升新闻生产效率，实现内容智能化分发'
        },
        {
          logo: 'el-icon-shopping-bag',
          name: '盒马鲜生',
          desc: '借助阿里云大数据和AI能力，优化供应链管理，提升用户体验'
        },
        {
          logo: 'el-icon-car',
          name: '红旗汽车',
          desc: '基于阿里云技术，加速智能化转型，打造智能网联汽车生态'
        }
      ],
      customerLogos: [
        ['Semir', '精锐教育', '趣头条', 'B站', '虎牙直播', '丁香园'],
        ['申通快递', '哈啰出行', '永辉超市', 'Horizon AI', '墨迹天气', '科大讯飞'],
        ['中国电信', '携程', '饿了么', '曹操出行', '小鹏汽车', 'UU跑腿']
      ],
      // 全球基础设施数据
      infrastructure: {
        stats: [
          { number: '29', label: '全球地域' },
          { number: '92', label: '可用区' },
          { number: '3200+', label: 'CDN节点' },
          { number: '180+', label: '安全合规认证' }
        ],
        compliance: ['ISO 27001', 'PCI DSS', 'SOC 2', 'GDPR', '等保三级']
      },
      // 数字经济时代数据
      economyFeatures: [
        {
          icon: 'el-icon-trophy',
          title: '引领市场',
          desc: '自 2009 年创立之初，阿里云就提出“云计算，让计算成为公共服务”，并坚持通过云的弹性和自服务能力支持企业敏捷创新。当前阿里云服务全球 500 万客户，包括 38%（190家）世界五百强企业， 80% 中国科技企业， 65% 专精特新“小巨人”企业；阿里云服务的开发者达 1000万。'
        },
        {
          icon: 'el-icon-lightbulb',
          title: '技术先进',
          desc: '飞天是阿里云自主研发、国内自研的云计算操作系统，编排调度百万级服务器，单集群调度规模超十万台，具备 EB 级数据存储能力，并通过 CIPU 率先实现虚拟化“0”损耗，提供业界先进的计算性能，既满足客户严苛的业务要求，又提供高性价比服务。'
        },
        {
          icon: 'el-icon-shield-check',
          title: '稳定可靠',
          desc: '阿里云为全球 29 个地域、92 个可用区的客户提供稳定可信赖的产品技术。弹性计算单实例可用性 SLA 高达99.975%，数据存储设计可靠性高达12个9，提供稳如磐石的客户体验。'
        },
        {
          icon: 'el-icon-lock',
          title: '安全合规',
          desc: '亚太合规资质俱全的云服务商之一，从基础设施安全、内核平台安全、系统服务安全、云安全产品四个层面，保障千行百业客户的业务安全在线。拥有权威认可的原生安全能力，根据 2021 年 Gartner 报告，安全能力全球居前列。'
        }
      ],
      // 专属服务数据
      services: [
        {
          icon: 'el-icon-headset',
          title: '全天候服务',
          desc: '7x24小时专业技术支持，快速响应客户需求，解决各类问题'
        },
        {
          icon: 'el-icon-guide',
          title: '多维度无忧服务',
          desc: '从咨询、迁移到运维的全流程服务，让上云更简单'
        },
        {
          icon: 'el-icon-user',
          title: '专属服务',
          desc: '为大客户提供专属架构师服务，定制化解决方案'
        },
        {
          icon: 'el-icon-graduation-cap',
          title: '专业上云服务',
          desc: '上云全流程的专业服务支持，加速业务落地'
        }
      ]
    };
  },
  mounted() {
    // 初始化时设置默认选中项
    this.activeIndex = '1';
    // 获取所有切换按钮和内容区域
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const featureContents = document.querySelectorAll('.feature-content');

    // 默认展开第一个内容
    if (toggleBtns.length > 0 && featureContents.length > 0) {
      toggleBtns[0].classList.add('active');
      featureContents[0].classList.add('show');
    }

    // 为每个按钮添加点击事件
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // 获取当前点击按钮的索引
        const currentIndex = this.getAttribute('data-index');

        // 重置所有按钮和内容
        toggleBtns.forEach(b => b.classList.remove('active'));
        featureContents.forEach(c => c.classList.remove('show'));

        // 激活当前按钮和内容
        this.classList.add('active');
        featureContents[this.getAttribute('data-index') - 1].classList.add('show');
      });
    });
  },
  methods: {
    goToCloudServer(name) {
      window.open('/pages/'+name, "_blank")
    },
    toLInk(data){
      console.log("111")
      const targetUrl = this.$router.resolve({ path: data.link }).href;

// 在新标签页打开
//       window.open(targetUrl, '_blank');
      window.open(data.link, "_blank")


    },

    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    }
  },

};
</script>

<style scoped>
/* 全局样式 */
.aliyun-ai-platform {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background-color: #f9fafb;
  width: 100%;
  box-sizing: border-box;
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

/* 英雄区域 */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 80px 0 100px;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 100%);
  z-index: -1;
}

.hero-content {
  width: 100%;
  margin: 0 auto;
  height: 520px;
  text-align: center;
}

.hero-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 40px;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  margin-bottom: 60px;
}

.primary-btn {
  background-color: #1890ff;
  border-color: #1890ff;
  color: white;
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.primary-btn:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
}

.secondary-btn {
  background-color: white;
  border-color: #d9d9d9;
  color: #333;
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 16px;
}

.secondary-btn:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.hero-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 120px;
}

.hero-card {
  flex: 1;
  min-width: 280px;
  border: 1px solid #e6f7ff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
  transition: all 0.3s;
  cursor: pointer;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1a1a1a;
  display: flex;
  align-items: center;
}

.card-title i {
  margin-right: 8px;
  color: #1890ff;
  font-size: 16px;
}

.card-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

/* 精选AI应用区域 */
.featured-ai-section {
  padding: 60px 0;
}

.ai-showcase {
  display: flex;
  gap: 20px;
}

.ai-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
}

.ai-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.main-ai-card {
  flex: 2;
  min-height: 300px;
}

.ai-cards-grid {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
/* .ai-cards-grid > *:nth-child(1) {
  background: linear-gradient(135deg, #f6ffed 0%, #b7eb8f 100%);
}
.ai-cards-grid > *:nth-child(2) {
  background: linear-gradient(135deg, #fff7e6 0%, #ffd591 100%);
}
.ai-cards-grid > *:nth-child(3) {
  background: linear-gradient(135deg, #f9f0ff 0%, #d3adf7 100%);
}
.ai-cards-grid > *:nth-child(4) {
  background: linear-gradient(135deg, #fff2f0 0%, #ffccc7 100%);
}
.ai-cards-grid > *:nth-child(5) {
  background: linear-gradient(135deg, #f0f5ff 0%, #adc6ff 100%);
} */

.small-ai-card {
  min-height: 140px;
  background: linear-gradient(135deg, #f9fafd 0%, #d8e2fb 100%);
}

.ai-card-header {
  padding: 20px;
}

.small-header {
  padding: 16px;
}

.ai-card-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.ai-card-header h4 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.ai-card-header p {
  font-size: 16px;
  color: #666;
  margin: 30px 0 0 ;
}

.ai-card-image {
  height: 120px;
  overflow: hidden;
}

.small-image {
  height: 115px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 0 0 8px 8px;
  position: relative;
  overflow: hidden;
}

.card-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
}

.gradient-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}


.gradient-2 {
  background: url("/src/static/img/pic_8.png") no-repeat center bottom;
  background-size: auto 110px;
}

.gradient-3 {
  background: url("/src/static/img/pic_9.png") no-repeat center bottom;
  background-size: auto 110px;
}

.gradient-4 {
  background: url("/src/static/img/pic_10.png") no-repeat center bottom;
  background-size: auto 110px;
}

.gradient-5 {
  background: url("/src/static/img/pic_11.png") no-repeat center bottom;
  background-size: auto 110px;
}

.gradient-6 {
  background: url("/src/static/img/pic_12.png") no-repeat center bottom;
  background-size: auto 110px;
}

/* 通义大模型区域 */
.tongyi-model-section {
  padding: 60px 0;
}

.section-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
}

.bg-grad {
  background: url("/src/static/img/gif_1.gif") no-repeat left center;
  background-size: auto 500px;
}

.check-item {
  position: relative;
  padding-left: 24px;
  color: #333;
  line-height: 1.6;
}

.check-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1890ff;
  font-weight: bold;
}

.box_1 {
  padding: 16px;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #e8e8e8;
}

/* AI与云计算协同区域 */
.ai-cloud-section {
  padding: 60px 0;
}

.ai-cloud-content {
  display: flex;
  gap: 20px;
}

.main-ai-card {
  flex: 1;
}

.ai-cloud-image {
  flex: 2;
}

.feature-list {
  padding: 20px;
}

.feature-item {
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f9fafb;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
}

.feature-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.toggle-btn {
  width: 24px;
  height: 24px;
  background-color: #1890ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.toggle-btn.active {
  background-color: #52c41a;
}

.feature-content {
  padding: 20px;
  background-color: white;
  display: none;
}

.feature-content.show {
  display: block;
}

.content-inner {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.gradient-8 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 产品体系区域 */
.products-section {
  padding: 60px 0;
}

.products-grid {
  display: flex;
  gap: 20px;
}

.categories-card {
  flex: 1;
  min-width: 200px;
}

.product-categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-categories li {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  color: #666;
  transition: all 0.3s;
  cursor: pointer;
}

.product-categories li:hover {
  color: #1890ff;
}

.product-categories li.active {
  color: #1890ff;
  font-weight: 600;
  background-color: #e6f7ff;
  border-left: 3px solid #1890ff;
}

.product-header {
  margin-bottom: 16px;
}

.product-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 8px 0 16px;
}

.product-categories li i {
  margin-right: 8px;
  font-size: 16px;
}

.product-groups {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.group-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.product-actions {
  margin-bottom: 16px;
}

.product-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-items li {
  padding: 8px 0;
  color: #666;
  font-size: 14px;
  border-bottom: 1px dashed #f0f0f0;
}

/* 技术解决方案区域 */
.solutions-section {
  padding: 60px 0;
  background: #fff;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.solution-card {
  padding: 32px 24px;
  text-align: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  transition: all 0.3s;
}

.solution-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: #1890ff;
}

.solution-icon {
  width: 64px;
  height: 64px;
  background-color: #f0f9ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 24px;
  color: #1890ff;
}

.solution-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.solution-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.solution-more {
  color: #fff;
  padding: 12px 30px;
  font-size: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.solution-more:hover {
  color: #40a9ff;
}

/* 超值权益区域 */
.benefits-section {
  padding: 60px 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.main-benefit-card {
  padding: 32px 24px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  transition: all 0.3s;
}

.main-benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.benefit-header {
  margin-bottom: 24px;
}

.benefit-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.benefit-header p {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.benefit-btn {
  border: none;
  width: 100%;
  margin-top: 8px;
  line-height: 16px;
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefit-list li {
  padding: 16px 0;
  border-bottom: 1px dashed #f0f0f0;
  display: flex;
  align-items: flex-start;
  color: #666;
}

.benefit-list li i {
  margin-right: 12px;
  font-size: 16px;
  color: #1890ff;
  margin-top: 4px;
}

.benefit-list li div h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.benefit-list li div p {
  font-size: 12px;
  color: #999;
  line-height: 1.4;
  margin: 0;
}

/* 客户案例区域 */
.customers-section {
  padding: 60px 0;
}

.customer-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.customer-card {
  width: 32%;
  float:left;
  padding: 60px 24px;
  border-radius: 8px;
  transition: all 0.3s;
}

.customer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.customer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

}
.customer-logo  img{
  height: 40px;
  width: auto;
}

.customer-logo i {
  width: 40px;
  height: 40px;
  background-color: #f0f9ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #1890ff;
  margin-right: 12px;
}

.customer-logo .span {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.customer-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.customer-logos {
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding: 32px 0;
}

.logo-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.logo-row:last-child {
  margin-bottom: 0;
}

.logo-item {
  width: 200px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  padding: 12px 16px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  transition: all 0.3s;
  background: #fff;
}

.logo-item:hover {
  border-color: #1890ff;
  color: #1890ff;
}

/* 全球基础设施区域 */
.infrastructure-section {
  padding: 60px 0;
}

.infrastructure-content {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.infrastructure-stats {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.stat-item {
  text-align: center;
  padding: 24px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: white;
  transition: all 0.3s;
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: #1890ff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.world-map {
  flex: 2;
  height: 300px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.compliance-logos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 32px;
}

.compliance-logo {
  font-size: 14px;
  color: #666;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  transition: all 0.3s;
}

.compliance-logo:hover {
  border-color: #1890ff;
  color: #1890ff;
}

/* 数字经济时代区域 */
.digital-economy-section {
  padding: 60px 0;
}

.economy-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;

}

.economy-card {
  padding: 32px 24px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s;
  background: linear-gradient(
      135deg, /* 渐变角度，匹配图片的斜向渐变 */
      rgba(230, 245, 255, 1), /* 起始色：浅蓝（更贴近图片的淡蓝色调） */
      rgba(255, 240, 250, 1)  /* 结束色：浅粉（更贴近图片的淡粉色调） */
  );
  /* 兼容旧版浏览器（可选） */
  background: -webkit-linear-gradient(
      135deg,
      rgba(230, 245, 255, 1),
      rgba(255, 240, 250, 1)
  );
}

.economy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: #1890ff;
}

.economy-icon {
  width: 64px;
  height: 64px;
  background-color: #f0f9ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 24px;
  color: #1890ff;
}

.economy-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.economy-desc {
  text-align: left;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 专属服务区域 */
.services-section {
  padding: 60px 0;
}

.services-grid {
}

.service-card {
  padding: 32px 24px;
  text-align: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  transition: all 0.3s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: #1890ff;
}

.service-icon {
  width: 64px;
  height: 64px;
  background-color: #f0f9ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 24px;
  color: #1890ff;
}

.service-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.service-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 行动召唤区域 */
.cta-section {
  position: relative;
  overflow: hidden;
  padding: 80px 0;
  text-align: center;
  background-color: #1890ff;
  color: white;
}

.cta-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  z-index: -1;
}

.cta-content h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
  color: white;
}

.cta-btn {
  padding: 12px 48px;
  font-size: 18px;
  border-radius: 4px;
  background-color: white;
  color: #1890ff;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-btn:hover {
  background-color: #f0f0f0;
  color: #40a9ff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 32px;
  }

  .hero-cards {
    flex-direction: column;
  }

  .ai-showcase {
    flex-direction: column;
  }

  .ai-cloud-content {
    flex-direction: column;
  }

  .products-grid {
    flex-direction: column;
  }

  .infrastructure-content {
    flex-direction: column;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .customer-cases {
    grid-template-columns: 1fr;
  }

  .logo-row {
    flex-wrap: wrap;
    gap: 12px;
  }

}

/* 深度选择器，让样式穿透到 v-html 内容 */
:deep(.main-title) {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

:deep(.sub-title) {
  display: inline-block;
  padding: 5px 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

:deep(.desc) {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

:deep(.btn-group) {
  margin-bottom: 40px;
}

:deep(.primary-btn) {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1677ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 15px;
}

:deep(.secondary-btn) {
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #1677ff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}

/* 服务卡片容器 */
.service-container {
  width: 100%;
  margin: 20px auto;
  display: flex;
  border: 1px solid #e5e7eb; /* 浅灰色边框，贴近设计风格 */
  border-radius: 4px;
  overflow: hidden; /* 防止内容溢出 */
}

/* 单个服务卡片样式 */
.service-card {
  flex: 1;
  padding: 50px 20px;
  text-align: left;
  border-right: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;
}

/* 最后一个卡片去掉右侧边框 */
.service-card:last-child {
  border-right: none;
}

/* 高亮卡片样式（多渠道无忧服务） */
.service-card.highlight {
  background-color: #f9fafc; /* 浅蓝紫色背景，贴近设计高亮效果 */
}

/* 服务标题样式 */
.service-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937; /* 深灰色主标题 */
}

/* 高亮卡片的标题颜色 */
.highlight .service-title {
  color: #2563eb; /* 蓝色，匹配设计中的高亮文字 */
}

/* 服务描述样式 */
.service-desc {
  font-size: 14px;
  color: #6b7280; /* 浅灰色描述文字 */
  line-height: 1.5;
}

/* 底部链接样式 */
.service-link {
  width: 100%;
  margin-top: 30px;
  padding-left: 20px;
}

.service-link a {
  font-size: 14px;
  color: #2563eb;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

/* 链接右侧小图标（模拟设计中的蓝色圆点） */
.service-link a::after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #2563eb;
  margin-left: 4px;
}
/* 横幅容器 */
.banner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #f6f6f6;
  padding: 60px 80px;
  position: relative;
  overflow: hidden;
  min-height: 200px;
}

/* 内容区域 */
.banner-content {
  position: relative;
  z-index: 2;

}

/* 标题样式 */
.banner-title {
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 24px;
  line-height: 1.4;
}

/* 按钮样式 */
.btn-trial {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 48px;
  background: linear-gradient(90deg, #165DFF 0%, #4080FF 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 0 24px;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

/* 按钮hover效果 */
.btn-trial:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 93, 255, 0.3);
}

/* 右侧背景装饰（模拟设计图效果） */
.banner-bg {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60%;
  background: url("/src/static/img/pic_6.png") no-repeat right center;
  background-size: contain;
  opacity: 0.9;
}
.btn{
  width:90%;
  background: linear-gradient( #f9fafd 0%, #d8e2fb 100%);
  color: #764ba2 ;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.bg-primary{
  color: #fff;
}
</style>
