<template>
  <div class="aliyun-documentation">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <!-- 文档与社区标题区域 -->
    <section class="doc-header-section">
      <div >
        <!-- 顶部横幅 -->
        <div class="banner">
            <div class="banner-content">
                <h1 class="banner-title">文档与社区</h1>
                <p class="banner-desc">提供官方的技术文档、丰富的开发工具和资源；支持开发者技术交流和能力成长，与千万开发者共同探索云上创新</p>
            </div>
        </div>

        <!-- 功能卡片列表 -->
        <div class="card-list">
            <!-- 新手指南卡片 -->
            <div class="card">
                <div class="card-text">
                    <div class="card-title">新手指南</div>
                    <div class="card-desc">快速上手，免费试用90+云产品</div>
                </div>
                <div class="card-icon"></div>
            </div>

            <!-- 云采用框架卡片 -->
            <div class="card">
                <div class="card-text">
                    <div class="card-title">云采用框架</div>
                    <div class="card-desc">上云技术指导和最佳实践</div>
                </div>
                <div class="card-icon"></div>
            </div>

            <!-- 卓越架构卡片 -->
            <div class="card">
                <div class="card-text">
                    <div class="card-title">卓越架构<span class="new-tag">NEW</span></div>
                    <div class="card-desc">用云、管云的技术指导和最佳实践</div>
                </div>
                <div class="card-icon"></div>
            </div>

            <!-- 开发者工具卡片 -->
            <div class="card">
                <div class="card-text">
                    <div class="card-title">开发者工具</div>
                    <div class="card-desc">API 与 SDK 门户，构建云上应用</div>
                </div>
                <div class="card-icon"></div>
            </div>
        </div>
    </div>
    </section>
    <section>
      
    </section>

    <!-- 产品文档区域 -->
    <section class="product-docs-section">
      <div class="container">
        <h2>产品文档</h2>
        <div class="docs-content">
          <!-- 左侧分类菜单 -->
          <div class="docs-sidebar">
            <ul class="category-menu">
              <li 
                v-for="(category, index) in categories" 
                :key="index"
                :class="{ active: selectedCategory === category.id }"
                @click="selectCategory(category.id)"
              >
                {{ category.name }}
              </li>
            </ul>
            <div class="explore-more">
              <a href="#" class="explore-link">探索更多产品文档 <i class="el-icon-right"></i></a>
            </div>
          </div>
          
          <!-- 右侧产品列表 -->
          <div class="docs-main">
            <div class="product-grid">
              <div 
                v-for="(product, index) in filteredProducts" 
                :key="index" 
                class="product-item"
              >
                <h3 class="product-title">{{ product.name }}</h3>
                <p class="product-desc">{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tools-resources-section">
      <div class="container">
        <h2>工具与资源</h2>
        <div class="resources-grid">
          <!-- API -->
          <div class="resource-category">
            <h3 class="resource-title">API</h3>
            <p class="resource-desc">面向开发者提供阿里巴巴云的API参考文档。采用OpenAPI规范，提供RESTful风格的API，覆盖90%以上的云产品。</p>
          </div>
          
          <!-- SDK -->
          <div class="resource-category">
            <h3 class="resource-title">SDK</h3>
            <p class="resource-desc">为每个产品提供不同语言的开发包，内容丰富完善。支持多种主流开发语言，提供代码示例、最佳实践和常见问题解答。</p>
          </div>
          
          <!-- 适配器 -->
          <div class="resource-category">
            <h3 class="resource-title">适配器</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- WAF开发指南 -->
          <div class="resource-category">
            <h3 class="resource-title">WAF开发指南</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- Windrunner -->
          <div class="resource-category">
            <h3 class="resource-title">Windrunner</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 智能时序管理工具 -->
          <div class="resource-category">
            <h3 class="resource-title">智能时序管理工具</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 资源编排 ROS -->
          <div class="resource-category">
            <h3 class="resource-title">资源编排 ROS</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- LBC 负载均衡器 -->
          <div class="resource-category">
            <h3 class="resource-title">LBC 负载均衡器</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 云审计 -->
          <div class="resource-category">
            <h3 class="resource-title">云审计</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 数据传输 DTS -->
          <div class="resource-category">
            <h3 class="resource-title">数据传输 DTS</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- WebIDE -->
          <div class="resource-category">
            <h3 class="resource-title">WebIDE</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 集群内监控 -->
          <div class="resource-category">
            <h3 class="resource-title">集群内监控</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- CLI 工具 -->
          <div class="resource-category">
            <h3 class="resource-title">CLI 工具</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 虚拟机HA管理工具 -->
          <div class="resource-category">
            <h3 class="resource-title">虚拟机HA管理工具</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 运维编排 -->
          <div class="resource-category">
            <h3 class="resource-title">运维编排</h3>
            <p class="resource-desc"></p>
          </div>
          
          <!-- 自动化运维编排 -->
          <div class="resource-category">
            <h3 class="resource-title">自动化运维编排</h3>
            <p class="resource-desc"></p>
          </div>
        </div>
        
        <!-- 底部扩展功能区 -->
        <div class="tools-extension">
          <div class="extension-item">
            <span class="extension-icon">API</span>
          </div>
          <div class="extension-arrow">→</div>
          <div class="extension-item">
            <span class="extension-icon">SDK</span>
          </div>
          <div class="extension-arrow">→</div>
          <div class="extension-item">
            <span class="extension-icon">资源编排</span>
          </div>
          <div class="extension-arrow">→</div>
          <div class="extension-item">
            <span class="extension-icon">
              <i class="el-icon-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section style="padding: 60px 0; width: 100%; padding: 0 10%;">
       <h1 class="page-title">活动与大赛</h1>
        
        <!-- 活动列表 -->
        <div class="activity-list">
            <!-- 左侧活动卡片 -->
            <div class="activity-card card-left">
                <h2>天池大赛 | SegmentFault AI Hackathon 2023 · 杭州站</h2>
                <p class="activity-desc">ChatGPT 在全球范围内掀起了一场关于 AI 技术革命的狂潮，被疫情按下暂停键的SegmentFault Hackathon也带着全新的 AI 主题重磅回归！</p>
                <div class="activity-meta">
                    <p>奖金 18,432</p>
                    <p>团队 0</p>
                </div>
                <button class="btn-join">立即参与</button>
            </div>

            <!-- 右侧活动卡片 -->
            <div class="activity-card card-right">
                <h2>活动 飞天 Club · 阿里云AI创新技术沙龙</h2>
                <p class="activity-desc">AI 浪潮已来，开启云上 AI 开发之旅</p>
                <p class="activity-desc">从魔搭社区大模型到 PAI 工程化一站部署</p>
                <p class="activity-desc">阿里云 AI 最佳实践案例独家分享</p>
                <p class="activity-desc">通义家族为千行百业创新提速</p>
                <button class="btn-join">立即参与</button>
            </div>
        </div>
    </section>
    <section style="padding: 60px 0; width: 100%; padding: 0 10%;">
        <!-- 页面标题 -->
        <h1 class="page-title">培训与认证</h1>

        <!-- 内容网格 -->
        <div class="content-grid">
            <!-- 课程卡片 -->
            <div class="content-card">
                <h2 class="card-title">课程</h2>
                <p class="card-desc">丰富上云技术领域的精品在线课程</p>
                <ul class="link-list">
                    <li><a href="#">精品在线课程</a></li>
                    <li><a href="#">7天玩转云服务器 ECS</a></li>
                </ul>
            </div>

            <!-- 实验卡片 -->
            <div class="content-card">
                <h2 class="card-title">实验</h2>
                <p class="card-desc">真实云环境的免费场景实验</p>
                <ul class="link-list">
                    <li><a href="#">免费场景实验</a></li>
                    <li><a href="#">云服务器 ECS 新手上路</a></li>
                </ul>
            </div>

            <!-- 训练营卡片 -->
            <div class="content-card">
                <h2 class="card-title">训练营</h2>
                <p class="card-desc">行业专家手把手带你学云用云上云</p>
                <ul class="link-list">
                    <li><a href="#">云产品训练营</a></li>
                    <li><a href="#">高校学生训练营</a></li>
                </ul>
            </div>

            <!-- 认证卡片 -->
            <div class="content-card">
                <h2 class="card-title">认证</h2>
                <p class="card-desc">开发者必考证书</p>
                <ul class="link-list">
                    <li><a href="#">阿里云 APE 认证</a></li>
                    <li><a href="#">ECS 入门clouder认证</a></li>
                </ul>
            </div>
        </div>

        <!-- 查看更多链接 -->
        <div class="view-more">
            <a href="#">查看更多学习内容</a>
        </div>
    </section>
     <div class="aliyun-banner">
        <div class="banner-content_a">
            <h1 class="banner-title">立即体验，在阿里云创造未来</h1>
            <a href="#" class="banner-btn">
                <span>免费试用</span>
                <span>→</span>
            </a>
        </div>
        <div class="banner-image"></div>
    </div>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Documentation',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '4', // 假设文档与社区在导航栏中的索引是4
      selectedCategory: 'all', // 默认选中"精选产品"
      categories: [
        { id: 'all', name: '精选产品' },
        { id: 'compute', name: '计算' },
        { id: 'container', name: '容器' },
        { id: 'storage', name: '存储' },
        { id: 'network', name: '网络与CDN' },
        { id: 'security', name: '安全' },
        { id: 'database', name: '数据库' },
        { id: 'bigdata', name: '大数据计算' },
        { id: 'ai', name: '人工智能与机器学习' }
      ],
      products: [
        // 精选产品
        { id: 1, categoryId: 'all', name: '云服务器 ECS', description: '安全可靠、弹性可伸缩的云计算服务' },
        { id: 2, categoryId: 'all', name: '无影云电脑', description: '随时随地安全接入的云上超级电脑' },
        { id: 3, categoryId: 'all', name: '文件存储 NAS', description: '大规模共享访问，弹性扩展的文件存储服务' },
        { id: 4, categoryId: 'all', name: '域名与网站', description: '提供简易易用的域名与建站服务' },
        { id: 5, categoryId: 'all', name: '轻量应用服务器', description: '快速构建应用程序和网站，即刻迈出上云第一步' },
        { id: 6, categoryId: 'all', name: '对象存储 OSS', description: '稳定、安全、高性价比、高性能的云存储服务' },
        { id: 7, categoryId: 'all', name: '云数据库 RDS', description: '全托管，含MySQL、PostgreSQL、SQL Server、MariaDB多引擎' },
        { id: 8, categoryId: 'all', name: '大模型服务平台百炼', description: '大模型服务与应用平台' },
        { id: 9, categoryId: 'all', name: '短信服务', description: '国内短信简单易用，安全可靠，秒级触达，全球覆盖200+国家和地区。' },
        { id: 10, categoryId: 'all', name: '数字证书管理服务（原SSL证书）', description: '实现全站HTTPS，呈现可信的 Web 访问' },
        { id: 11, categoryId: 'all', name: '人工智能平台 PAI', description: '一站AI开发、训练和推理服务' },
        { id: 12, categoryId: 'all', name: '容器服务 Kubernetes 版 ACK', description: '提供一站式管理容器应用的K8s服务' },
        { id: 13, categoryId: 'all', name: '云原生数据库 PolarDB', description: '100%兼容MySQL、PostgreSQL，兼容Oracle，支持集中和分布式' },
        { id: 14, categoryId: 'all', name: '大数据开发治理平台 DataWorks', description: '全链路数据开发治理平台' },
        { id: 15, categoryId: 'all', name: '云原生大数据计算服务 MaxCompute', description: '面向分析的企业级SaaS模式数据仓库' },
        { id: 16, categoryId: 'all', name: '云防火墙', description: '云原生的云上边界网络安全防护产品' },
        { id: 17, categoryId: 'all', name: '负载均衡 SLB', description: '对云上流量进行按需分发的服务' },
        { id: 18, categoryId: 'all', name: 'Web应用防火墙 WAF', description: '专业稳定一站式解决Web应用核心安全痛点' },
        
        // 计算分类产品
        { id: 19, categoryId: 'compute', name: '云服务器 ECS', description: '安全可靠、弹性可伸缩的云计算服务' },
        { id: 20, categoryId: 'compute', name: '无影云电脑', description: '随时随地安全接入的云上超级电脑' },
        { id: 21, categoryId: 'compute', name: '轻量应用服务器', description: '快速构建应用程序和网站，即刻迈出上云第一步' },
        
        // 容器分类产品
        { id: 22, categoryId: 'container', name: '容器服务 Kubernetes 版 ACK', description: '提供一站式管理容器应用的K8s服务' },
        
        // 存储分类产品
        { id: 23, categoryId: 'storage', name: '文件存储 NAS', description: '大规模共享访问，弹性扩展的文件存储服务' },
        { id: 24, categoryId: 'storage', name: '对象存储 OSS', description: '稳定、安全、高性价比、高性能的云存储服务' },
        
        // 网络与CDN分类产品
        { id: 25, categoryId: 'network', name: '域名与网站', description: '提供简易易用的域名与建站服务' },
        { id: 26, categoryId: 'network', name: '负载均衡 SLB', description: '对云上流量进行按需分发的服务' },
        
        // 安全分类产品
        { id: 27, categoryId: 'security', name: '云防火墙', description: '云原生的云上边界网络安全防护产品' },
        { id: 28, categoryId: 'security', name: 'Web应用防火墙 WAF', description: '专业稳定一站式解决Web应用核心安全痛点' },
        { id: 29, categoryId: 'security', name: '数字证书管理服务（原SSL证书）', description: '实现全站HTTPS，呈现可信的 Web 访问' },
        
        // 数据库分类产品
        { id: 30, categoryId: 'database', name: '云数据库 RDS', description: '全托管，含MySQL、PostgreSQL、SQL Server、MariaDB多引擎' },
        { id: 31, categoryId: 'database', name: '云原生数据库 PolarDB', description: '100%兼容MySQL、PostgreSQL，兼容Oracle，支持集中和分布式' },
        
        // 大数据计算分类产品
        { id: 32, categoryId: 'bigdata', name: '大数据开发治理平台 DataWorks', description: '全链路数据开发治理平台' },
        { id: 33, categoryId: 'bigdata', name: '云原生大数据计算服务 MaxCompute', description: '面向分析的企业级SaaS模式数据仓库' },
        
        // 人工智能与机器学习分类产品
        { id: 34, categoryId: 'ai', name: '人工智能平台 PAI', description: '一站AI开发、训练和推理服务' },
        { id: 35, categoryId: 'ai', name: '大模型服务平台百炼', description: '大模型服务与应用平台' }
      ]
    };
  },
  methods: {
    handleMenuSelect({ key, keyPath }) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === 'all') {
        // 对于精选产品，只显示前18个
        return this.products.filter(p => p.categoryId === 'all').slice(0, 18);
      }
      return this.products.filter(product => product.categoryId === this.selectedCategory);
    }
  }
};
</script>

<style scoped>
.aliyun-documentation {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.doc-header-section {
  width: 100%;
  background-color: #fff;
  padding: 0;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
}

.doc-header-section h1 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.quick-entry-section {
  padding: 60px 0;
  background-color: #fff;
}

.container {
  margin: 0 auto;
}

.quick-entry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-content: center;
}

.quick-entry-item {
  text-align: center;
  padding: 30px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.quick-entry-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.entry-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1890ff;
  border-radius: 50%;
}

.icon-placeholder {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.quick-entry-item h3 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.quick-entry-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
        /* 页面容器 */
        .container {
            width: 100%;
        }

        /* 顶部横幅区域 */
        .banner {
            width: 100%;
            height: 200px;
            background: #f3f3f5;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
        }

        .banner-content {
          width: 100%;
          padding: 50px 10%;
          height: 200px;
          text-align: left;
            flex: 1;
          text-indent: 50px;
          background: url('/src/static/img/pic_17.png') no-repeat right center; ;
          background-size: contain;
        }

        .banner-title {
            font-size: 36px;
            font-weight: bold;
            color: #000;
            margin-bottom: 16px;
        }

        .banner-desc {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
        }

        /* 功能卡片区域 */
        .card-list {
          width: 100%;
          padding: 0 10%;
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }

        .card {
            flex: 1;
            padding: 24px;
            border: 1px solid #eee;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card-text {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .card-title {
            font-size: 16px;
            font-weight: 600;
            color: #000;
        }

        .card-desc {
            font-size: 12px;
            color: #666;
        }

        .card-icon {
            width: 24px;
            height: 24px;
            background: url('https://placeholder.com/24x24/ffffff/666666?text=图标') no-repeat center;
            background-size: contain;
        }

        /* 新品标签样式 */
        .new-tag {
            display: inline-block;
            background-color: #ff7a45;
            color: #fff;
            font-size: 10px;
            padding: 2px 4px;
            border-radius: 2px;
            margin-left: 4px;
        }

  /* 产品文档区域样式 */
  .product-docs-section {
    padding: 60px 0;
    background-color: #fff;
  }
  
  .product-docs-section h2 {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 40px;
    text-align: center;
  }
  
  .docs-content {
    display: flex;
    gap: 40px;
  }
  
  /* 左侧分类菜单样式 */
  .docs-sidebar {
    width: 200px;
    flex-shrink: 0;
  }
  
  .category-menu {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }
  
  .category-menu li {
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 1px solid #e8e8e8;
  }
  
  .category-menu li:last-child {
    border-bottom: none;
  }
  
  .category-menu li:hover {
    background-color: #f5f5f5;
  }
  
  .category-menu li.active {
    background-color: #1890ff;
    color: #fff;
  }
  
  .explore-more {
    text-align: center;
  }
  
  .explore-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #1890ff;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .explore-link:hover {
    text-decoration: underline;
  }
  
  /* 右侧产品列表样式 */
  .docs-main {
    flex: 1;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .product-item {
    padding: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .product-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #1890ff;
  }
  
  .product-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .product-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }
  
  /* 响应式设计 */
  @media (max-width: 1200px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .doc-header-section h1 {
      font-size: 28px;
    }
    
    .quick-entry-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .docs-content {
      flex-direction: column;
    }
    
    .docs-sidebar {
      width: 100%;
    }
    
    .category-menu {
      display: flex;
      flex-wrap: wrap;
      border: none;
    }
    
    .category-menu li {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      margin-right: 10px;
      margin-bottom: 10px;
      white-space: nowrap;
    }
    
    .category-menu li.active {
      border-color: #1890ff;
    }
    
    .product-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .quick-entry-grid {
      grid-template-columns: 1fr;
    }
  }

  /* 工具与资源区域样式 */
  .tools-resources-section {
    padding: 60px 0;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
  }
  
  .tools-resources-section h2 {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 40px;
    text-align: center;
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .resource-category {
    padding: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .resource-category:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #1890ff;
  }
  
  .resource-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }
  
  .resource-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }
  
  /* 底部扩展功能区样式 */
  .tools-extension {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    background-color: #f5f7fa;
    border-radius: 4px;
  }
  
  .extension-item {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  .extension-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: #1890ff;
  }
  
  .extension-icon {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
  
  .extension-arrow {
    font-size: 16px;
    color: #666;
    margin: 0 10px;
  }
          /* 标题样式 */
        .page-title {
          padding-top: 50px;
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }

        /* 活动列表容器 - 弹性布局实现左右分栏 */
        .activity-list {
            display: flex;
            width: 100%;
        }

        /* 单个活动卡片样式 */
        .activity-card {
            flex: 1;
            height: 300px; /* 与设计图高度匹配 */
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        /* 左侧卡片 - 蓝色背景+占位背景图 */
        .card-left {
            background:  url('/src/static/img/pic_18.png') no-repeat center center; /* 背景占位符 */
            background-size: cover;
            background-position: center;
        }

        /* 右侧卡片 - 白色背景 */
        .card-right {
            background-color: #fff;
            color: #333;
            border: 1px solid #eee;
        }

        /* 活动标题样式 */
        .activity-card h2 {
            font-size: 22px;
            margin-bottom: 20px;
            font-weight: bold;
        }

        /* 左侧卡片标题特殊样式（与设计图匹配） */
        .card-left h2 {
            color: #fff;
        }

        /* 右侧卡片标题特殊样式 */
        .card-right h2 {
            color: #333;
            font-size: 20px;
        }

        /* 活动描述文本 */
        .activity-desc {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        /* 活动附加信息（奖金/团队数） */
        .activity-meta {
            font-size: 14px;
            margin-bottom: 30px;
            line-height: 1.8;
        }

        /* 立即参与按钮 */
        .btn-join {
            width: 100px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        /* 左侧按钮样式 */
        .card-left .btn-join {
            background-color: #fff;
            color: #0066ff;
        }

        /* 右侧按钮样式 */
        .card-right .btn-join {
            background-color: #0066ff;
            color: #fff;
        }

        /* 按钮hover效果 */
        .btn-join:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
                /* 标题样式 */
        .page-title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 40px;
            color: #222;
        }

        /* 内容卡片容器 */
        .content-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
            background-color: #e5e5e5;
            border-radius: 4px;
            overflow: hidden;
        }

        /* 单个卡片样式 */
        .content-card {
            background-color: #fff;
            padding: 20px;
        }

        /* 卡片标题样式 */
        .card-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #333;
        }

        /* 卡片描述文本 */
        .card-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        /* 链接列表样式 */
        .link-list {
            list-style: none;
        }

        .link-list li {
            margin-bottom: 8px;
        }

        .link-list a {
            font-size: 14px;
            color: #0066cc;
            text-decoration: none;
            transition: color 0.2s;
        }

        .link-list a:hover {
            color: #004799;
            text-decoration: underline;
        }

        /* 查看更多链接 */
        .view-more {
            margin-top: 30px;
        }

        .view-more a {
            font-size: 14px;
            color: #0066cc;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .view-more a:hover {
            text-decoration: underline;
        }

        .view-more a::after {
            content: "";
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 5px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3Cpath fill='%230066cc' d='M868 512l-264 264c-7.9 7.9-20.7 7.9-28.6 0L156 512c-7.9-7.9-7.9-20.7 0-28.6s20.7-7.9 28.6 0l535.4 535.4 535.4-535.4c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6L868 512z'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
        }
        /* 横幅容器样式 */
        .aliyun-banner {
          margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #ffffff;
            border-bottom: 1px solid #f5f5f5;
        }

        /* 左侧内容区域 */
        .banner-content_a {
          width: 100%;
          padding: 30px 10%;
            display: flex;
            flex-direction: column;
            gap: 24px;
          background: url('/src/static/img/pic_19.png') no-repeat right center;

        }

        /* 标题样式 */
        .banner-title {
            font-size: 32px;
            font-weight: 700;
            color: #333333;
            line-height: 1.4;
        }

        /* 按钮样式 */
        .banner-btn {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
            height: 48px;
            padding: 0 24px;
            background-color: #ff6700;
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            border-radius: 2px;
            transition: background-color 0.3s ease;
        }

        /* 按钮hover效果 */
        .banner-btn:hover {
            background-color: #ff7823;
        }

        /* 右侧图案占位 */
        .banner-image {
            width: 300px;
            height: 200px;
            background-image: url("https://p3-flow-imagex-download-sign.byteimg.com/tos-cn-i-a9rns2rl98/2afb3aa2daee41a7a824b509ebcf851d.png~tplv-a9rns2rl98-24:720:720.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center right;
        }
  /* 工具与资源区域响应式设计 */
  @media (max-width: 1200px) {
    .resources-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 992px) {
    .resources-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .tools-resources-section h2 {
      font-size: 24px;
    }
    
    .resources-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .tools-extension {
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .extension-arrow {
      margin: 0 5px;
    }
  }
  
  @media (max-width: 480px) {
    .resources-grid {
      grid-template-columns: 1fr;
    }
  }
</style>