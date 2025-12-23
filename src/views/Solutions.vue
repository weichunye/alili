<template>
  <div class="aliyun-solutions">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <!-- 解决方案内容区域 -->
    <div class="solutions-content">
      <div class="left-sidebar">
        <!-- 搜索框 -->
        <div class="search-box">
          <el-input 
            placeholder="搜索解决方案" 
            prefix-icon="el-icon-search"
            v-model="searchQuery"
          />
        </div>
        
        <!-- 解决方案导航 -->
        <div class="solutions-nav">
          <!-- 解决方案首页 -->
          <a href="#" class="solution-home">解决方案首页</a>
          
          <!-- AI 分类 -->
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('ai')"
            >
              <span class="category-name">AI</span>
              <i :class="['el-icon', openCategories.includes('ai') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
            
            <div v-if="openCategories.includes('ai')" class="category-content">
              <!-- 模型推理与调用 -->
              <div class="sub-category">
                <div 
                  class="sub-category-header" 
                  @click="toggleSubCategory('model-inference')"
                >
                  <span class="sub-category-name">模型推理与调用</span>
                  <i :class="['el-icon', openSubCategories.includes('model-inference') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                </div>
                
                <div v-if="openSubCategories.includes('model-inference')" class="sub-category-content">
                  <a href="#" class="solution-item">创意加速署：AI 绘画创作</a>
                  <a href="#" class="solution-item">10 分钟在聊天系统中增加一个 AI 助手</a>
                  <a href="#" class="solution-item">主动式智能购 AI 助手构建</a>
                  <a href="#" class="solution-item">构建 AI 总结助手，实现智能文档摘要</a>
                  <a href="#" class="solution-item">AI 大模型助力客户对话分析</a>
                  <a href="#" class="solution-item">精准识别，轻松集成人脸比对服务</a>
                  <a href="#" class="solution-item">AI 提效，轻松制作商品图</a>
                  <a href="#" class="solution-item">多模态数据信息提取</a>
                  <a href="#" class="solution-item">智能视频 PPT，快速生成讲解视频</a>
                  <a href="#" class="solution-item">AI 剧本生成与动画创作</a>
                  <a href="#" class="solution-item">一键创作 AI 有声绘本</a>
                  <a href="#" class="solution-item">无需邀请码，OpenManus搞定复杂任务</a>
                  <a href="#" class="solution-item">高效搭建 AI 智能体与工作流应用</a>
                  <a href="#" class="solution-item">AI建站：用Bolt.diy一句话生成网站</a>
                  <a href="#" class="solution-item">Qwen-image，生图告别文字乱码</a>
                  <a href="#" class="solution-item">零代码搭建企业级图像与视频创作平台</a>
                  <a href="#" class="solution-item">10 分钟在网站上增加一个 AI 助手</a>
                </div>
              </div>
              
              <!-- 模型训练与部署 -->
              <div class="sub-category">
                <div 
                  class="sub-category-header" 
                  @click="toggleSubCategory('model-training')"
                >
                  <span class="sub-category-name">模型训练与部署</span>
                  <i :class="['el-icon', openSubCategories.includes('model-training') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                </div>
                
                <div v-if="openSubCategories.includes('model-training')" class="sub-category-content">
                  <!-- 子项可以在这里添加 -->
                </div>
              </div>
              
              <!-- 模型应用与工具 -->
              <div class="sub-category">
                <div 
                  class="sub-category-header" 
                  @click="toggleSubCategory('model-applications')"
                >
                  <span class="sub-category-name">模型应用与工具</span>
                  <i :class="['el-icon', openSubCategories.includes('model-applications') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                </div>
                
                <div v-if="openSubCategories.includes('model-applications')" class="sub-category-content">
                  <!-- 子项可以在这里添加 -->
                </div>
              </div>
            </div>
          </div>
          
          <!-- 其他分类 -->
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('internet')"
            >
              <span class="category-name">互联网应用开发</span>
              <i :class="['el-icon', openCategories.includes('internet') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('big-data')"
            >
              <span class="category-name">大数据</span>
              <i :class="['el-icon', openCategories.includes('big-data') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('security')"
            >
              <span class="category-name">安全</span>
              <i :class="['el-icon', openCategories.includes('security') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('network')"
            >
              <span class="category-name">网络</span>
              <i :class="['el-icon', openCategories.includes('network') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('observability')"
            >
              <span class="category-name">可观测</span>
              <i :class="['el-icon', openCategories.includes('observability') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('migration')"
            >
              <span class="category-name">上云与迁云</span>
              <i :class="['el-icon', openCategories.includes('migration') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('global')"
            >
              <span class="category-name">企业出海</span>
              <i :class="['el-icon', openCategories.includes('global') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
          
          <div class="solution-category">
            <div 
              class="category-header" 
              @click="toggleCategory('government')"
            >
              <span class="category-name">政企业务</span>
              <i :class="['el-icon', openCategories.includes('government') ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div class="right-content">
       <!-- 标题区域 -->
        <div class="header">
            <h1>卓越的解决方案，助力云上业务</h1>
            <p>针对通用技术类问题，提供最优的云产品组合和选型方案。无论是从零开始构建业务，还是对现有架构进行升级，我们都提供清晰、可落地的最佳实践与操作指导，在稳定、安全、性能、成本等方面逐步进阶。</p>
        </div>

        <!-- 快速访问区域 -->
        <div class="quick-access">
            <h2>快速访问</h2>
            <div class="quick-access-grid">
                <div class="quick-access-item">
                    <p>为你推荐</p>
                    <p>n8n+百炼：自动获取AI热点资讯</p>
                    <p>AI 现场翻译：打破语言壁垒，连接全球观众</p>
                </div>
                <div class="quick-access-item">
                    <p>通过 MSE Ingress实现容器应用的流量管理</p>
                    <p>JManus解锁AI Agent高效开发</p>
                </div>
                <div class="quick-access-item">
                    <p>Kimi K2，开源万亿参数大模型 <span class="free-trial-tag">免费试用</span></p>
                    <p>支付宝MCP，让你的AI应用自动收款</p>
                </div>
            </div>
        </div>

        <!-- 为什么选择阿里云解决方案 -->
        <div class="why-aliyun">
            <h2>为什么选择阿里云解决方案</h2>
            <p class="why-aliyun-desc">在阿里云解决方案中，你可以找到上云、用云过程中的各类技术问题的解决方案，并且通过实践动手学习和应用到生产环境。</p>
            <div class="why-aliyun-grid">
                <!-- 卡片1：丰富的场景 -->
                <div class="why-aliyun-card">
                    <div class="card-header">
                        <div class="card-icon">🔍</div>
                        <h3 class="card-title">丰富的场景</h3>
                    </div>
                    <p class="card-desc">经典的技术场景、典型的用云架构，帮助你快速找到解决用云技术问题的方案。</p>
                    <div class="card-img">【图片占位符：丰富的场景示意图】</div>
                </div>

                <!-- 卡片2：在动手中学习 -->
                <div class="why-aliyun-card">
                    <div class="card-header">
                        <div class="card-icon">📚</div>
                        <h3 class="card-title">在动手中学习</h3>
                    </div>
                    <p class="card-desc">控制台 step by step 部署教程、IaC 一键部署教程，帮助你快速上手。</p>
                    <div class="card-img">【图片占位符：动手学习操作界面】</div>
                </div>

                <!-- 卡片3：生产环境可用 -->
                <div class="why-aliyun-card">
                    <div class="card-header">
                        <div class="card-icon">🚀</div>
                        <h3 class="card-title">生产环境可用</h3>
                    </div>
                    <p class="card-desc">面向生产环境设计的方案迁移指引，帮助你将学会的方案应用到自己的业务中。</p>
                    <div class="card-img">【图片占位符：生产环境应用示意图】</div>
                </div>
            </div>
        </div>

        <!-- 立即开始区域 -->
        <div class="start-now">
            <h2>即刻开始</h2>
            <p class="start-now-desc">解决方案免费试用<br>阿里云面向客户实际的业务需求场景，提供了一系列的技术解决方案及免费试用权益，便于客户完成 POC (Proof of Concept) 验证及业务决策。<br>阿里云解决方案免费试用权益通过试用角形式发放，试用点专用于解决方案学习及验证时创建的试用资源抵扣。</p>
            <a href="#" class="start-btn">立即体验</a>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Solutions',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '3',
      searchQuery: '',
      openCategories: ['ai'], // 默认展开的分类
      openSubCategories: ['model-inference'] // 默认展开的子分类
    };
  },
  methods: {
    handleMenuSelect({ key, keyPath }) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
    
    // 切换分类展开/收起
    toggleCategory(category) {
      const index = this.openCategories.indexOf(category);
      if (index > -1) {
        this.openCategories.splice(index, 1);
      } else {
        this.openCategories.push(category);
      }
    },
    
    // 切换子分类展开/收起
    toggleSubCategory(subCategory) {
      const index = this.openSubCategories.indexOf(subCategory);
      if (index > -1) {
        this.openSubCategories.splice(index, 1);
      } else {
        this.openSubCategories.push(subCategory);
      }
    }
  }
};
</script>

<style scoped>
    /* 标题区域 */
        .header {
            margin-bottom: 40px;
        }

        .header h1 {
            font-size: 28px;
            color: #333;
            margin-bottom: 16px;
            font-weight: 600;
        }

        .header p {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
        }

        /* 快速访问区域 */
        .quick-access {
            margin-bottom: 50px;
        }

        .quick-access h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .quick-access-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }

        .quick-access-item {
            padding: 16px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }

        .quick-access-item p {
            font-size: 14px;
            color: #333;
        }

        .free-trial-tag {
            display: inline-block;
            background-color: #ff4d4f;
            color: white;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 2px;
            margin-left: 8px;
        }

        /* 选择阿里云区域 */
        .why-aliyun {
            margin-bottom: 50px;
        }

        .why-aliyun h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .why-aliyun-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.6;
        }

        .why-aliyun-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .why-aliyun-card {
            padding: 24px;
            background-color: #f0f7ff;
            border-radius: 8px;
        }

        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
        }

        .card-icon {
            width: 24px;
            height: 24px;
            background-color: #1890ff;
            border-radius: 4px;
            margin-right: 12px;
            /* 图标占位符 */
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .card-title {
            font-size: 16px;
            color: #333;
            font-weight: 600;
        }

        .card-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .card-img {
            width: 100%;
            height: 120px;
            background-color: #e6f7ff;
            border-radius: 4px;
            /* 图片占位符 */
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-size: 12px;
        }

        /* 立即开始区域 */
        .start-now {
            background-color: #f5f7fa;
            padding: 40px;
            border-radius: 8px;
        }

        .start-now h2 {
            font-size: 20px;
            color: #333;
            margin-bottom: 16px;
            font-weight: 600;
        }

        .start-now-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 24px;
            line-height: 1.6;
        }

        .start-btn {
            display: inline-block;
            padding: 10px 24px;
            background-color: #1890ff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
        }

        .start-btn:hover {
            background-color: #40a9ff;
        }
.aliyun-solutions {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.solutions-content {
  display: flex;
  padding: 20px 10%;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
}

.left-sidebar {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
}

.solutions-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.solution-home {
  display: block;
  padding: 10px 0;
  color: #1890ff;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 10px;
}

.solution-home:hover {
  text-decoration: underline;
}

.solution-category {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-header:hover {
  background-color: #f0f0f0;
}

.category-name {
  font-weight: 500;
  color: #333;
}

.category-content {
  padding: 0;
}

.sub-category {
  border-top: 1px solid #e8e8e8;
}

.sub-category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sub-category-header:hover {
  background-color: #f9f9f9;
}

.sub-category-name {
  color: #666;
  font-size: 14px;
}

.sub-category-content {
  padding: 10px 0;
}

.solution-item {
  display: block;
  padding: 8px 32px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.solution-item:hover {
  background-color: #f0f7ff;
  color: #1890ff;
  padding-left: 40px;
}

.right-content {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  min-height: 600px;
}

.content-placeholder {
  text-align: center;
  padding: 100px 0;
  color: #999;
}

.content-placeholder h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #666;
}

@media (max-width: 768px) {
  .solutions-content {
    flex-direction: column;
  }
  
  .left-sidebar {
    width: 100%;
  }
}
</style>