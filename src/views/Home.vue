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
            <li>
              <i class="el-icon-database"></i>
              <span>多维度数据信息提取</span>
            </li>
          </ul>
        </div>
        <div class="ai-cloud-image">
          <div class="image-placeholder gradient-8"></div>
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
            <li><i class="el-icon-server"></i> 计算</li>
            <li><i class="el-icon-box"></i> 容器</li>
            <li><i class="el-icon-folder"></i> 存储</li>
            <li><i class="el-icon-link"></i> 网络与CDN</li>
            <li><i class="el-icon-shield"></i> 安全</li>
            <li><i class="el-icon-database"></i> 数据库</li>
            <li><i class="el-icon-line-chart"></i> 大数据计算</li>
            <li><i class="el-icon-brain"></i> 人工智能与机器学习</li>
          </ul>
        </el-card>
        
        <div class="product-groups">
          <el-card class="products-card group-card">
            <h3>云服务器 ECS</h3>
            <div class="product-actions">
              <el-button type="primary" size="small">立即购买</el-button>
              <el-button type="default" size="small">了解详情</el-button>
            </div>
            <ul class="product-items">
              <li>弹性计算</li>
              <li>混合云解决方案</li>
              <li>云服务器托管</li>
            </ul>
          </el-card>
          
          <el-card class="products-card group-card">
            <h3>通义大模型</h3>
            <div class="product-actions">
              <el-button type="primary" size="small">立即体验</el-button>
              <el-button type="default" size="small">了解详情</el-button>
            </div>
            <ul class="product-items">
              <li>通用大模型服务</li>
              <li>行业大模型解决方案</li>
              <li>模型训练与部署</li>
            </ul>
          </el-card>
          
          <el-card class="products-card group-card">
            <h3>大模型服务平台</h3>
            <div class="product-actions">
              <el-button type="default" size="small" disabled>即将上线</el-button>
            </div>
            <ul class="product-items">
              <li>模型管理与调度</li>
              <li>推理服务优化</li>
              <li>多模型协同</li>
            </ul>
          </el-card>
          
          <el-card class="products-card group-card">
            <h3>混合云</h3>
            <ul class="product-items">
              <li>云边协同架构</li>
              <li>数据安全流通</li>
              <li>混合云管理平台</li>
            </ul>
          </el-card>
          
          <el-card class="products-card group-card">
            <h3>专有云服务</h3>
            <ul class="product-items">
              <li>企业级私有云部署</li>
              <li>定制化解决方案</li>
              <li>专属运维支持</li>
            </ul>
          </el-card>
          
          <el-card class="products-card group-card">
            <h3>对象存储 OSS</h3>
            <ul class="product-items">
              <li>海量数据存储</li>
              <li>数据备份与恢复</li>
              <li>内容分发加速</li>
            </ul>
          </el-card>
        </div>
      </div>
    </section>

    <!-- 技术解决方案区域 -->
    <section class="solutions-section">
      <div class="section-header">
        <h2>卓越的技术解决方案，加速云上应用构建</h2>
      </div>
      <div class="solutions-grid">
        <el-card class="solution-card">
          <div class="solution-icon">
            <i class="el-icon-data-analysis"></i>
          </div>
          <h3>10分钟构建数据，实时智能决策</h3>
          <p class="solution-desc">快速搭建数据分析平台，实时处理业务数据，支持智能决策</p>
          <el-button type="text" class="solution-more">查看详情 →</el-button>
        </el-card>
        
        <el-card class="solution-card">
          <div class="solution-icon">
            <i class="el-icon-office-building"></i>
          </div>
          <h3>低成本高效构建企业门户网站</h3>
          <p class="solution-desc">基于云原生技术，快速搭建企业官网，降低运维成本</p>
          <el-button type="text" class="solution-more">查看详情 →</el-button>
        </el-card>
        
        <el-card class="solution-card">
          <div class="solution-icon">
            <i class="el-icon-rocket"></i>
          </div>
          <h3>构建全球访问的加速</h3>
          <p class="solution-desc">利用全球节点网络，实现应用全球加速访问，提升用户体验</p>
          <el-button type="text" class="solution-more">查看详情 →</el-button>
        </el-card>
        
        <el-card class="solution-card">
          <div class="solution-icon">
            <i class="el-icon-document"></i>
          </div>
          <h3>敏感证件识别Web服务加速</h3>
          <p class="solution-desc">高效识别各类证件信息，提供安全可靠的身份验证服务</p>
          <el-button type="text" class="solution-more">查看详情 →</el-button>
        </el-card>
      </div>
    </section>

    <!-- 超值权益区域 -->
    <section class="benefits-section">
      <div class="section-header">
        <h2>全方位云计算和 AI 超值权益，助力云上创新</h2>
      </div>
      <div class="benefits-grid">
        <el-card class="benefit-card main-benefit-card">
          <div class="benefit-header">
            <h3>超值优选</h3>
                      <p>超优云上套餐，低至0元，200+款产品免费体验</p>
            <el-button type="primary" class="benefit-btn">立即抢购</el-button>
          </div>
          <ul class="benefit-list">
            <li>
              <i class="el-icon-gift"></i>
              <div>
                <h4>140+云产品免费试用</h4>
                <p>新用户专享，最长可享12个月免费使用期</p>
              </div>
            </li>
            <li>
              <i class="el-icon-calculator"></i>
              <div>
                <h4>弹性计费，长期低价</h4>
                <p>按需付费，长期使用更优惠，节省成本</p>
              </div>
            </li>
            <li>
              <i class="el-icon-solution"></i>
              <div>
                <h4>超值解决方案</h4>
                <p>场景化解决方案，一站式满足业务需求</p>
              </div>
            </li>
            <li>
              <i class="el-icon-shopping-cart"></i>
              <div>
                <h4>特惠券，领券省</h4>
                <p>定期发放各类优惠券，购买更划算</p>
              </div>
            </li>
          </ul>
        </el-card>
        
        <el-card class="benefit-card main-benefit-card">
          <div class="benefit-header">
            <h3>智启 AI</h3>
            <p>智启 AI 全面能力，加速 AI 应用落地</p>
            <el-button type="primary" class="benefit-btn">开始体验</el-button>
          </div>
          <ul class="benefit-list">
            <li>
              <i class="el-icon-brain"></i>
              <div>
                <h4>通义千问 3.5 能力全开</h4>
                <p>强大的大模型能力，支持多场景应用</p>
              </div>
            </li>
            <li>
              <i class="el-icon-robot"></i>
              <div>
                <h4>云起实验室 DeepSeek 体验</h4>
                <p>免费体验前沿 AI 模型，快速上手</p>
              </div>
            </li>
            <li>
              <i class="el-icon-service"></i>
              <div>
                <h4>AI 大模型 + 专家服务</h4>
                <p>专业团队支持，加速模型落地应用</p>
              </div>
            </li>
            <li>
              <i class="el-icon-bar-chart"></i>
              <div>
                <h4>免费额度，特性测试 (PAI)</h4>
                <p>PAI-DSW 免费额度，支持模型开发测试</p>
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
        <el-card class="customer-card">
          <div class="customer-logo">
            <i class="el-icon-office-building"></i>
            <span>人民日报</span>
          </div>
          <p class="customer-desc">利用阿里云AI技术，提升新闻生产效率，实现内容智能化分发</p>
        </el-card>
        
        <el-card class="customer-card">
          <div class="customer-logo">
            <i class="el-icon-shopping-bag"></i>
            <span>盒马鲜生</span>
          </div>
          <p class="customer-desc">借助阿里云大数据和AI能力，优化供应链管理，提升用户体验</p>
        </el-card>
        
        <el-card class="customer-card">
          <div class="customer-logo">
            <i class="el-icon-car"></i>
            <span>红旗汽车</span>
          </div>
          <p class="customer-desc">基于阿里云技术，加速智能化转型，打造智能网联汽车生态</p>
        </el-card>
      </div>
      
      <div class="customer-logos">
        <div class="logo-row">
          <div class="logo-item">Semir</div>
          <div class="logo-item">精锐教育</div>
          <div class="logo-item">趣头条</div>
          <div class="logo-item">B站</div>
          <div class="logo-item">虎牙直播</div>
          <div class="logo-item">丁香园</div>
        </div>
        <div class="logo-row">
          <div class="logo-item">申通快递</div>
          <div class="logo-item">哈啰出行</div>
          <div class="logo-item">永辉超市</div>
          <div class="logo-item">Horizon AI</div>
          <div class="logo-item">墨迹天气</div>
          <div class="logo-item">科大讯飞</div>
        </div>
        <div class="logo-row">
          <div class="logo-item">中国电信</div>
          <div class="logo-item">携程</div>
          <div class="logo-item">饿了么</div>
          <div class="logo-item">曹操出行</div>
          <div class="logo-item">小鹏汽车</div>
          <div class="logo-item">UU跑腿</div>
        </div>
      </div>
    </section>

    <!-- 全球基础设施区域 -->
    <section class="infrastructure-section">
      <div class="section-header">
        <h2>安全合规、遍布全球的云计算基础设施</h2>
      </div>
      <div class="infrastructure-content">
        <div class="infrastructure-stats">
          <div class="stat-item">
            <div class="stat-number">29</div>
            <div class="stat-label">全球地域</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">92</div>
            <div class="stat-label">可用区</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3200+</div>
            <div class="stat-label">CDN节点</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">180+</div>
            <div class="stat-label">安全合规认证</div>
          </div>
        </div>
        <div class="world-map">
          <div class="map-placeholder"></div>
        </div>
      </div>
      <div class="compliance-logos">
        <div class="compliance-logo">ISO 27001</div>
        <div class="compliance-logo">PCI DSS</div>
        <div class="compliance-logo">SOC 2</div>
        <div class="compliance-logo">GDPR</div>
        <div class="compliance-logo">等保三级</div>
      </div>
    </section>

    <!-- 数字经济时代区域 -->
    <section class="digital-economy-section">
      <div class="section-header">
        <h2>数字经济时代，云计算为创新提速</h2>
      </div>
      <div class="economy-features">
        <el-card class="economy-card">
          <div class="economy-icon">
            <i class="el-icon-trophy"></i>
          </div>
          <h3>引领市场</h3>
          <p class="economy-desc">阿里云持续引领云计算市场，服务超过400万企业客户，覆盖互联网、金融、制造等多个行业，助力企业数字化转型</p>
        </el-card>
        
        <el-card class="economy-card">
          <div class="economy-icon">
            <i class="el-icon-lightbulb"></i>
          </div>
          <h3>技术先进</h3>
          <p class="economy-desc">飞天操作系统支撑全球领先的云计算能力，自主研发的大模型技术不断突破，为客户提供稳定可靠的技术支持</p>
        </el-card>
        
        <el-card class="economy-card">
          <div class="economy-icon">
            <i class="el-icon-shield-check"></i>
          </div>
          <h3>稳定可靠</h3>
          <p class="economy-desc">99.99%的服务可用性承诺，全球分布式架构确保业务连续性，多重备份机制保障数据安全</p>
        </el-card>
        
        <el-card class="economy-card">
          <div class="economy-icon">
            <i class="el-icon-lock"></i>
          </div>
          <h3>安全合规</h3>
          <p class="economy-desc">全面的安全防护体系，符合全球各地合规要求，保障用户数据安全和隐私保护，让业务发展无后顾之忧</p>
        </el-card>
      </div>
    </section>

    <!-- 专属服务区域 -->
    <section class="services-section">
      <div class="section-header">
        <h2>专属服务，陪伴上云流程</h2>
      </div>
      <div class="services-grid">
        <el-card class="service-card">
          <div class="service-icon">
            <i class="el-icon-headset"></i>
          </div>
          <h3>全天候服务</h3>
          <p class="service-desc">7x24小时专业技术支持，快速响应客户需求，解决各类问题</p>
        </el-card>
        
        <el-card class="service-card">
          <div class="service-icon">
            <i class="el-icon-guide"></i>
          </div>
          <h3>多维度无忧服务</h3>
          <p class="service-desc">从咨询、迁移到运维的全流程服务，让上云更简单</p>
        </el-card>
        
        <el-card class="service-card">
          <div class="service-icon">
            <i class="el-icon-user"></i>
          </div>
          <h3>专属服务</h3>
          <p class="service-desc">为大客户提供专属架构师服务，定制化解决方案</p>
        </el-card>
        
        <el-card class="service-card">
          <div class="service-icon">
            <i class="el-icon-graduation-cap"></i>
          </div>
          <h3>专业上云服务</h3>
          <p class="service-desc">上云全流程的专业服务支持，加速业务落地</p>
        </el-card>
      </div>
    </section>

    <!-- 行动召唤区域 -->
    <section class="cta-section">
      <div class="cta-gradient"></div>
      <div class="cta-content">
        <h2>立即体验，在阿里云上创造未来</h2>
        <el-button type="primary" size="large" class="cta-btn">立即注册</el-button>
      </div>
    </section>

    <!-- 页脚区域 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <div class="link-group">
            <h4>为云计算者言</h4>
            <ul>
              <li><a href="#">云栖社区</a></li>
              <li><a href="#">开发者大会</a></li>
              <li><a href="#">云栖公开课</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>产品服务</h4>
            <ul>
              <li><a href="#">弹性计算</a></li>
              <li><a href="#">数据库</a></li>
              <li><a href="#">人工智能</a></li>
              <li><a href="#">云安全</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>解决方案</h4>
            <ul>
              <li><a href="#">互联网</a></li>
              <li><a href="#">金融</a></li>
              <li><a href="#">政务</a></li>
              <li><a href="#">制造业</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>文档社区</h4>
            <ul>
              <li><a href="#">帮助文档</a></li>
              <li><a href="#">API参考</a></li>
              <li><a href="#">最佳实践</a></li>
              <li><a href="#">开发者社区</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>支持中心</h4>
            <ul>
              <li><a href="#">自助服务</a></li>
              <li><a href="#">工单系统</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">售后服务</a></li>
            </ul>
          </div>
          <div class="link-group">
            <h4>关于阿里云</h4>
            <ul>
              <li><a href="#">公司介绍</a></li>
              <li><a href="#">新闻动态</a></li>
              <li><a href="#">加入我们</a></li>
              <li><a href="#">合作伙伴</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-contact">
          <div class="contact-info">
            <p>服务热线：95187-1</p>
            <p>工作时间：周一至周日 8:00-20:00</p>
          </div>
          <div class="qr-code">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="阿里云APP" />
            <p>阿里云APP</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2009-2023 阿里巴巴云计算有限公司 版权所有</p>
          <p>ICP备案号：浙ICP备11041366号-5 经营性ICP许可证：浙B2-20080101</p>
          <p>阿里巴巴集团 隐私政策 服务条款 网站地图</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AliyunAiPlatform',
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
  font-size: 20px;
  font-weight: 600;
  color: #1890ff;
}

.logo i {
  font-size: 24px;
  margin-right: 8px;
}

.el-menu-demo {
  flex: 1;
  margin: 0 20px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
  margin-right: 16px;
}

.login-btn {
  margin-right: 8px;
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
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.hero-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 36px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  margin-bottom: 60px;
}

.primary-btn {
  margin-right: 16px;
  background-color: #1890ff;
  border-color: #1890ff;
}

.secondary-btn {
  background-color: #fff;
  color: #1890ff;
  border-color: #1890ff;
}

.hero-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-card {
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.hero-card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 18px;
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
  padding-bottom: 80px;
}

.ai-showcase {
  display: flex;
  gap: 24px;
}

.main-ai-card {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.ai-card-header {
  padding: 24px;
}

.ai-card-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.ai-card-header p {
  color: #666;
  margin-bottom: 16px;
}

.ai-card-image {
  height: 240px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.gradient-1 {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
}

.gradient-2 {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
}

.gradient-3 {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.gradient-4 {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.gradient-5 {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

.gradient-6 {
  background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
}

.ai-cards-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.small-ai-card {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.small-header h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.small-header p {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}

.small-image {
  height: 120px;
}

/* 通义大模型区域 */
.tongyi-model-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.models-grid {
  display: flex;
  gap: 24px;
}

.featured-model {
  flex: 1;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.model-header {
  padding: 24px;
}

.model-features {
  margin: 16px 0;
  padding-left: 20px;
}

.model-features li {
  margin-bottom: 8px;
  color: #666;
}

.model-features i {
  color: #1890ff;
  margin-right: 8px;
}

.model-image {
  height: 200px;
}

.gradient-7 {
  background: linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%);
}

.small-models-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.small-model-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.small-model-card h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.model-desc {
  font-size: 13px;
  color: #666;
}

.new-badge {
  display: inline-block;
  background-color: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 8px;
}

/* AI与云计算协同区域 */
.ai-cloud-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.ai-cloud-content {
  display: flex;
  gap: 32px;
  align-items: center;
}

.ai-cloud-text {
  flex: 1;
}

.ai-cloud-text h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.ai-cloud-text h4 {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 20px;
}

.section-desc {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.section-btn {
  margin-right: 16px;
  margin-bottom: 32px;
}

.feature-list {
  padding-left: 0;
}

.feature-list li {
  list-style: none;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.feature-list i {
  font-size: 18px;
  color: #1890ff;
  margin-right: 12px;
  width: 24px;
  text-align: center;
}

.ai-cloud-image {
  flex: 1;
  height: 360px;
}

.gradient-8 {
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f4ff 100%);
}

/* 产品体系区域 */
.products-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.products-grid {
  display: flex;
  gap: 24px;
}

.categories-card {
  width: 260px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.product-categories {
  padding-left: 0;
  margin-top: 24px;
}

.product-categories li {
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  color: #4b5563;
  cursor: pointer;
  transition: color 0.2s;
}

.product-categories li:last-child {
  border-bottom: none;
}

.product-categories li:hover {
  color: #1890ff;
}

.product-categories i {
  margin-right: 12px;
  font-size: 16px;
}

.product-groups {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.group-card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.group-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

.product-actions {
  margin-bottom: 16px;
}

.product-actions .el-button {
  margin-right: 8px;
}

.product-items {
  padding-left: 20px;
}

.product-items li {
  margin-bottom: 8px;
  font-size: 13px;
  color: #666;
}

/* 技术解决方案区域 */
.solutions-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.solutions-grid {
  display: flex;
  gap: 24px;
}

.solution-card {
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
}

.solution-icon {
  width: 48px;
  height: 48px;
  background-color: #e6f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.solution-icon i {
  font-size: 24px;
  color: #1890ff;
}

.solution-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.solution-desc {
  color: #666;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.6;
}

.solution-more {
  color: #1890ff;
  padding: 0;
}

/* 超值权益区域 */
.benefits-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.benefits-grid {
  display: flex;
  gap: 24px;
}

.main-benefit-card {
  flex: 1;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.benefit-header {
  padding: 24px;
  background-color: #f0f7ff;
}

.benefit-header h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.benefit-header p {
  color: #4b5563;
  margin-bottom: 16px;
}

.benefit-list {
  padding: 0 24px 24px;
  margin-top: 0;
}

.benefit-list li {
  list-style: none;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
}

.benefit-list li:last-child {
  border-bottom: none;
}

.benefit-list i {
  color: #1890ff;
  font-size: 20px;
  margin-right: 12px;
  margin-top: 3px;
}

.benefit-list h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.benefit-list p {
  color: #666;
  font-size: 13px;
  margin: 0;
}

/* 客户案例区域 */
.customers-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.customer-cases {
  display: flex;
  gap: 24px;
  margin-bottom: 60px;
}

.customer-card {
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.customer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.customer-logo i {
  font-size: 24px;
  color: #1890ff;
  margin-right: 12px;
}

.customer-logo span {
  font-size: 18px;
  font-weight: 600;
}

.customer-desc {
  color: #666;
  line-height: 1.6;
}

.customer-logos {
  background-color: #f9fafb;
  padding: 32px;
  border-radius: 8px;
}

.logo-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.logo-row:last-child {
  margin-bottom: 0;
}

.logo-item {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  background-color: #fff;
  padding: 0 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* 全球基础设施区域 */
.infrastructure-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.infrastructure-content {
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
}

.infrastructure-stats {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.stat-item {
  background-color: #f0f7ff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #1890ff;
  margin-bottom: 8px;
}

.stat-label {
  color: #4b5563;
  font-size: 14px;
}

.world-map {
  flex: 2;
  height: 300px;
  background-color: #f9fafb;
  border-radius: 8px;
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 300"%3E%3Crect width="800" height="300" fill="%23f0f7ff"/%3E%3Ccircle cx="200" cy="100" r="5" fill="%231890ff" opacity="0.6"/%3E%3Ccircle cx="350" cy="80" r="6" fill="%231890ff" opacity="0.8"/%3E%3Ccircle cx="500" cy="120" r="8" fill="%231890ff"/%3E%3Ccircle cx="650" cy="90" r="5" fill="%231890ff" opacity="0.7"/%3E%3Ccircle cx="250" cy="200" r="7" fill="%231890ff" opacity="0.9"/%3E%3Ccircle cx="450" cy="180" r="6" fill="%231890ff" opacity="0.8"/%3E%3Ccircle cx="600" cy="210" r="5" fill="%231890ff" opacity="0.6"/%3E%3Cpath d="M200,100 C300,90 300,80 350,80" stroke="%231890ff" stroke-width="1" fill="none" opacity="0.3"/%3E%3Cpath d="M350,80 C425,100 425,110 500,120" stroke="%231890ff" stroke-width="1" fill="none" opacity="0.3"/%3E%3Cpath d="M500,120 C575,105 575,95 650,90" stroke="%231890ff" stroke-width="1" fill="none" opacity="0.3"/%3E%3Cpath d="M250,200 C350,190 350,185 450,180" stroke="%231890ff" stroke-width="1" fill="none" opacity="0.3"/%3E%3Cpath d="M450,180 C525,195 525,200 600,210" stroke="%231890ff" stroke-width="1" fill="none" opacity="0.3"/%3E%3C/svg%3E') center center no-repeat;
  background-size: cover;
}

.compliance-logos {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.compliance-logo {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  color: #666;
  font-size: 14px;
}

/* 数字经济时代区域 */
.digital-economy-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.economy-features {
  display: flex;
  gap: 24px;
}

.economy-card {
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.economy-card:hover {
  transform: translateY(-5px);
}

.economy-icon {
  width: 56px;
  height: 56px;
  background-color: #e6f7ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.economy-icon i {
  font-size: 28px;
  color: #1890ff;
}

.economy-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.economy-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* 专属服务区域 */
.services-section {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.services-grid {
  display: flex;
  gap: 24px;
}

.service-card {
  flex: 1;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.service-icon {
  width: 64px;
  height: 64px;
  background-color: #f0f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.service-icon i {
  font-size: 32px;
  color: #1890ff;
}

.service-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.service-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* 行动召唤区域 */
.cta-section {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  margin-bottom: 40px;
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

.cta-content {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 32px;
}

.cta-btn {
  background-color: #fff;
  color: #1890ff;
  border-color: #fff;
  padding: 12px 32px;
  font-size: 16px;
}

/* 页脚区域 */
.footer {
  background-color: #1a1a1a;
  color: #888;
  padding: 60px 0 30px;
}

.footer-content {
  width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.link-group {
  margin-bottom: 24px;
}

.link-group h4 {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.link-group ul {
  padding: 0;
  margin: 0;
}

.link-group li {
  list-style: none;
  margin-bottom: 12px;
}

.link-group a {
  color: #888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #1890ff;
}

.footer-contact {
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid #262626;
  margin-bottom: 40px;
}

.contact-info p {
  margin: 0 0 8px 0;
  font-size: 14px;
}

.qr-code {
  text-align: center;
}

.qr-code img {
  width: 80px;
  height: 80px;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.qr-code p {
  margin: 0;
  font-size: 14px;
  color: #fff;
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #262626;
  font-size: 12px;
  line-height: 1.8;
}

.footer-bottom p {
  margin: 0 0 8px 0;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .header-container,
  .hero-content,
  .featured-ai-section,
  .tongyi-model-section,
  .ai-cloud-section,
  .products-section,
  .solutions-section,
  .benefits-section,
  .customers-section,
  .infrastructure-section,
  .digital-economy-section,
  .services-section,
  .cta-content,
  .footer-content {
    width: 90%;
  }
  
  .ai-showcase,
  .models-grid,
  .ai-cloud-content,
  .products-grid,
  .solutions-grid,
  .benefits-grid,
  .customer-cases,
  .economy-features,
  .services-grid {
    flex-direction: column;
  }
  
  .ai-cards-grid,
  .small-models-grid,
  .product-groups {
    grid-template-columns: 1fr;
  }
  
  .categories-card {
    width: 100%;
  }
  
  .infrastructure-content {
    flex-direction: column;
  }
  
  .world-map {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 32px;
  }
  
  .hero-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-card {
    width: 100%;
    margin-bottom: 16px;
  }
  
  .footer-links {
    flex-direction: column;
  }
  
  .compliance-logos,
  .logo-row {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .logo-item,
  .compliance-logo {
    margin-bottom: 12px;
  }
}
</style>