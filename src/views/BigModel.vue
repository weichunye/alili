<script src="../router.js"></script>
<template>
  <div class="aliyun-ai-platform">
    <!-- 顶部导航栏 -->
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <!-- 英雄区域 -->
    <section class="hero-section" style="width: 100%; padding: 0 10%;background: url('/src/static/img/bg_2.png') no-repeat center center; background-size: cover;">
      <div class="hero-gradient"></div>
      <div class="hero-content" style="width: 100%; padding: 0">
        <h1>通义大模型，Wan系列重磅升级</h1>
        <p class="hero-subtitle">通义川2.0的预训练和大模型升级，面向电商领域的特定优化，实现多轮对话、复杂推理和实时分析等能力，支持快速构建内容生成、智能客服、文案创作等广泛应用场景。</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" class="primary-btn">立即体验</el-button>
          <el-button type="default" size="large" class="secondary-btn">了解详情</el-button>
        </div>
        <div class="hero-cards">
          <el-card class="hero-card">
            <div class="card-title">免费限量1000万tokens</div>
            <p class="card-desc">新用户专享，满额即止，支持多次调用，助力快速集成</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">通义万相·小企业画像全新升级</div>
            <p class="card-desc">强大的AI生成能力和独特风格，帮助您轻松构建品牌识别度</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">通义万彩·文生图全新升级</div>
            <p class="card-desc">强大的文生图功能，支持参数配置，实现高质量、艺术风格的图像生成</p>
          </el-card>
          <el-card class="hero-card">
            <div class="card-title">12月8日上线：创建专属训练集</div>
            <p class="card-desc">支持上传私有数据进行模型训练，满足特定业务场景需求</p>
          </el-card>
        </div>
      </div>
    </section>

    <!-- 体验中心 -->
    <section class="featured-ai-section">
     <div class="experience-center">
        <!-- 标题 -->
        <h1 class="center-title">体验中心</h1>

        <!-- 内容主体 -->
        <div class="center-content">
            <!-- 左侧模型列表 -->
            <div class="model-list">
                <!-- 文本生成大模型 -->
                <div class="model-card">
                    <h3 class="title">
                        <span class="icon">📝</span>
                        通义千问3-文本生成大模型
                    </h3>
                    <p class="desc">Qwen3 支持思考/非思考双模式应对不同需求，支持119种语言，并显著强化了Agent、MCP执行及代码能力。</p>
                </div>

                <!-- 图片生成大模型 -->
                <div class="model-card">
                    <h3 class="title">
                        <span class="icon">🖼️</span>
                        通义千问-图片生成大模型
                    </h3>
                    <p class="desc">通义千问系列首个图像生成模型，参数规模200亿。具备卓越的复杂文本渲染能力，各类生成与编辑任务重表现出色。</p>
                </div>

                <!-- 视觉理解大模型 -->
                <div class="model-card">
                    <h3 class="title">
                        <span class="icon">👁️</span>
                        通义千问-视觉理解大模型
                    </h3>
                    <p class="desc">更好的视觉推理和指令遵循能力，提供更高的视觉感知和认知水平。在数字编程、视觉分析等任务表现极佳。</p>
                </div>

                <!-- 视频生成大模型 -->
                <div class="model-card">
                    <h3 class="title">
                        <span class="icon">🎬</span>
                        通义万相2.6-视频生成大模型
                    </h3>
                    <p class="desc">支持一句话生成视频，或根据提供首帧或首尾帧图片，生成一段丝滑流畅的动态视频。生成影视级画面质感。</p>
                </div>
            </div>

            <!-- 右侧体验卡片 -->
            <div class="experience-card">
                <div>
                    <h3 class="card-title">体验通义大语言模型</h3>
                    <div class="feature-tags">
                        <span class="feature-tag">智能问答</span>
                        <span class="feature-tag">角色扮演</span>
                        <span class="feature-tag">数据分析</span>
                        <span class="feature-tag">内容创作</span>
                        <span class="feature-tag">研报生成</span>
                    </div>
                </div>
                <a href="#" class="experience-btn">模型体验中心 →</a>
            </div>
        </div>
    </div>
    </section>

    <!-- 通义大模型区域 -->
    <section class="tongyi-model-section">
      <header class="container mx-auto px-4 py-8 text-center">
        <h1 class="text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-4 text-darkText">通义大模型家族</h1>
        <p class="text-lightText text-lg mb-6">通义万相2.6 全系列升级，15秒长视频，一键生成专业级影视大片，您身边的艺术家。</p>
        <a href="#" class="text-primary font-medium hover:text-primary/80 transition-colors flex items-center justify-center gap-1">
            立即体验 Wan2.6 <span class="inline-block w-2 h-2 rounded-full bg-primary"></span>
        </a>
    </header>

    <!-- 通义万相2.6 视频生成Banner区 -->
    <section class="container mx-auto px-4 py-6 mb-8" style="width: 100%; height: 400px; padding: 0 ;background: url('/src/static/img/bg_3.png') no-repeat center center; background-size:  100%;">
        <div class=" rounded-xl overflow-hidden">
            <div class="grid md:grid-cols-3 gap-4">
                <!-- 左侧文字区 -->
                <div class="p-8 flex flex-col justify-center" style="padding-left: 15%;padding-top: 100px">
                    <h2 class="text-2xl font-bold mb-4 text-darkText">通义万相2.6 - 视频生成</h2>
                    <ul class="space-y-2 text-lightText" style="font-size: 16px; padding-top: 30px">
                        <li>专业级 影视创作更新</li>
                        <li>专业级 叙事智能分镜</li>
                        <li>专业级 自然声画同步</li>
                        <li>专业级 真实人像质感</li>
                    </ul>
                </div>
                <!-- 右侧视觉区（模拟设计图效果） -->
                <div class="md:col-span-2 flex items-center justify-center p-6  rounded-r-xl">
<!--                    <div class="w-full max-w-4xl flex items-center justify-between">-->
<!--                        &lt;!&ndash; 左侧功能卡片 &ndash;&gt;-->
<!--                        <div class="text-center">-->
<!--                            <div class="w-24 h-24 mx-auto rounded-lg bg-lightBlue flex flex-col items-center justify-center mb-2">-->
<!--                                <span class="text-xs text-lightText">15s</span>-->
<!--                                <span class="text-xs text-lightText">秒超长视频叙事</span>-->
<!--                            </div>-->
<!--                            <p class="text-sm text-lightText">一键成片</p>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; 中间品牌标识 &ndash;&gt;-->
<!--                        <div class="text-center">-->
<!--                            <div class="w-32 h-32 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center">-->
<!--                                <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">-->
<!--                                    <span class="text-primary font-bold">Wan</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <p class="mt-2 text-sm font-medium">Wan能艺术家</p>-->
<!--                            <p class="text-xs text-lightText">Wan2.6全系列升级发布</p>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; 右侧功能卡片 &ndash;&gt;-->
<!--                        <div class="text-center">-->
<!--                            <div class="w-24 h-24 mx-auto rounded-lg bg-lightBlue flex flex-col items-center justify-center mb-2">-->
<!--                                <span class="text-xs text-lightText">多IP</span>-->
<!--                                <span class="text-xs text-lightText">万播文化IP主题库</span>-->
<!--                            </div>-->
<!--                            <p class="text-sm text-lightText">一键成画</p>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </section>

    <!-- 三大模型卡片区域 -->
    <section class="container mx-auto px-4 pb-12">
        <div class="grid md:grid-cols-3 gap-6">
            <!-- 通义千问3 - VL-Flash -->
            <div class="bg-gradient-blue rounded-xl p-6 card-hover bg_2">
                <div class="flex items-center gap-2 mb-4">
                    <span class="tag-m" style="background: #665ca4">Qwen3</span>
                    <span class="tag-m bg-secondary/80" style=" background: #a39fad">视觉模型</span>
                    <span class="ml-auto text-xs font-medium text-primary">最新上架</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-darkText">通义千问3 - VL-Flash</h3>
                <p class="text-lightText text-sm mb-6">
                    Qwen3系列小尺寸视觉理解模型，实现思考模式和非思考模式的有效融合，效果优于开源版Qwen3-VL-30B-A3B，响应速度快。
                </p>
                <a href="#" style="color: #0066ff" class="text-primary font-medium text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
                    立即体验<i class="el-icon-right"></i>
                </a>
            </div>

            <!-- 通义万相-图生视频2.6-I2V -->
            <div class="bg-gradient-blue rounded-xl p-6 card-hover bg_1">
                <div class="flex items-center gap-2 mb-4">
                    <span class="tag-m" style="background: #578ad7">Qwen3</span>
                    <span class="tag-m bg-secondary/80" style=" background: #9fa5ae">视频生成</span>
                    <span class="ml-auto text-xs font-medium text-primary">全新升级</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-darkText">通义万相-图生视频2.6-I2V</h3>
                <p class="text-lightText text-sm mb-6">
                    通义万相2.6-图生视频，智能分镜调度支持多镜头叙事，更高品质的声音生成，多人稳定对话，更自然真实音色，最高支持15秒时长生成。
                </p>
                <a href="#" style="color: #0066ff" class="text-primary font-medium text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
                    立即体验<i class="el-icon-right"></i>
                </a>
            </div>

            <!-- 通义百聆 - CosyVoice-V3-Flash -->
            <div class="bg-gradient-blue rounded-xl p-6 card-hover bg_3">
                <div class="flex items-center gap-2 mb-4">
                    <span class="tag-m" style=" background: #63c977">Qwen3</span>
                    <span class="tag-m bg-secondary/80" style=" background: #7f9383">语音合成</span>
                    <span class="ml-auto text-xs font-medium text-primary" >全新升级</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-darkText">通义百聆 - CosyVoice-V3-Flash</h3>
                <p class="text-lightText text-sm mb-6">
                    CosyVoice 是通义实验室依托大规模预训练语言模型，深度融合文本理解和语音生成的新一代生成式语音合成大模型，支持文本至语音的实时流式合成。
                </p>
                <a href="#" style="color: #0066ff" class="text-primary font-medium text-sm hover:text-primary/80 transition-colors flex items-center gap-1">
                    立即体验 <i class="el-icon-right"></i>
                </a>
            </div>
        </div>
    </section>
    </section>

    <!-- AI与云计算协同区域 -->
    <section class="ai-cloud-section">
      <!-- 标题区域 -->
      <div class="title-section">
        <h1 class="main-title">通义大模型体系</h1>
        <p class="sub-title">提供全尺寸、全模态、多场景的通义系列大模型，适配千行百业落地AI大模型</p>
      </div>

      <!-- 标签切换 -->
      <div class="tab-group">
        <button class="tab-btn" :class="{ active: activeTab === 'closed' }" @click="switchTab('closed')">闭源模型</button>
        <button class="tab-btn" :class="{ active: activeTab === 'open' }" @click="switchTab('open')">开源模型</button>
      </div>

      <!-- 卡片网格 -->
      <div class="card-grid">
        <!-- 动态渲染卡片 -->
        <div class="model-card" v-for="model in currentModels" :key="model.id">
          <div class="card-tags">
            <span class="new-tag" v-if="model.tags.includes('全新升级')">全新升级</span>
            <span class="func-tag" v-for="tag in model.tags" :key="tag" v-if="tag !== '全新升级' && tag !== '开源模型'">{{ tag }}</span>
          </div>
          <h3 class="card-title">{{ model.title }}</h3>
          <p class="card-desc">{{ model.desc }}</p>
        </div>
      </div>

      <!-- 底部链接 -->
      <div class="more-link">
        <a href="#">探索更多大模型</a>
      </div>
    </section>

    <!-- AI解决方案区域 -->
    <section class="solutions-section">
      <div class="advantage-container">
        <!-- 标题区域 -->
        <div class="advantage-header">
          <h1 class="advantage-title">模型优势</h1>
          <p class="advantage-subtitle">极致的产品效果，打造多元的业务落地场景</p>
        </div>

        <!-- 优势卡片区域 -->
        <div class="advantage-cards">
          <!-- 性能效果更优 -->
          <div class="advantage-card">
            <h2 class="card-title">性能效果<span>更优</span></h2>
            <p class="card-desc">卓越的模型性能，满足企业多样化需求</p>
            <ul class="card-list">
              <li>首批通过国内"大模型预训练模型测试"，符合国家标准要求</li>
              <li>开源社区持续霸榜，极强中文大模型</li>
              <li>快速响应，降低交互延迟</li>
              <li>高吞吐量，支持多任务并行处理</li>
            </ul>
          </div>

          <!-- 业务适配性更高 -->
          <div class="advantage-card">
            <h2 class="card-title">业务适配性<span>更高</span></h2>
            <p class="card-desc">丰富多元的模型选择，适应多行业需求</p>
            <ul class="card-list">
              <li>提供语言、语音、视觉等多模态模型，满足不同业务场景</li>
              <li>支持按需切换不同版本的主流模型API，灵活应对个性化需求</li>
              <li>主流模型均可低门槛精调，提供弹性灵活在线部署选择</li>
            </ul>
          </div>

          <!-- 数据安全更可靠 -->
          <div class="advantage-card">
            <h2 class="card-title">数据安全<span>更可靠</span></h2>
            <p class="card-desc">严格的数据安全和隐私保护，符合合规要求</p>
            <ul class="card-list">
              <li>国内首批通过网信办大模型备案</li>
              <li>国际认证联盟（IQNet）颁发的全球首张人工智能管理体系证书</li>
              <li>采用先进的加密技术和安全协议，保障数据传输的安全</li>
              <li>多维度的安全架构保障数据安全，符合行业标准和法规要求</li>
            </ul>
          </div>

          <!-- 成本价格更可控 -->
          <div class="advantage-card">
            <h2 class="card-title">成本价格<span>更可控</span></h2>
            <p class="card-desc">合理的价格策略，极大降低企业使用成本</p>
            <ul class="card-list">
              <li>提供灵活的计费模式，按需付费，节省成本</li>
              <li>高性能的模型减少计算资源的消耗，降低运营成本</li>
              <li>丰富的模型选择和优化的算法，提高业务效率，创造更多价值</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 丰富的落地场景区域 -->
    <section class="scenarios-section" style="padding: 80px 0; background-color: #f9f9f9; width: 100%;padding: 40px 10%">
      <div class="container" style="width: 100%; margin: 0 auto; ">
        <!-- 标题区域 -->
        <div class="scenarios-header" style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: bold; color: #333; margin-bottom: 10px;">丰富的落地场景</h2>
          <p style="font-size: 14px; color: #666;">成功的大模型应用落地经验，持续提升业务落地效果</p>
        </div>

        <!-- 标签页导航 -->
        <div class="scenarios-tabs" style="display: flex; justify-content: center; margin-bottom: 40px; gap: 2px;">
          <button
            v-for="(item, index) in scenarioData"
            :key="index"
            class="tab-btn"
            :class="{ active: currentScenarioTab === index }"
            @click="switchScenarioTab(index)"
            :style="{
              padding: '10px 24px',
              backgroundColor: currentScenarioTab === index ? '#1890ff' : '#f0f0f0',
              color: currentScenarioTab === index ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px'
            }"
          >{{ item.title }}</button>
        </div>

        <!-- 内容区域 -->
        <div class="scenario-content" style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); width: 100%; overflow: hidden">
          <div class="scenario-item" v-for="(item, index) in scenarioData" :key="index" v-show="currentScenarioTab === index">
            <div style="width: 400px; float:left;">
          x
            <h3 style="font-size: 22px; color: #333; margin-bottom: 16px;">{{ item.title }}</h3>
            <p style="font-size: 14px; color: #666; line-height: 1.8; margin-bottom: 24px;">{{ item.description }}</p>

            <!-- 核心亮点 -->
            <div style="margin-bottom: 24px;">
              <h4 style="font-size: 16px; color: #333; margin-bottom: 12px;">核心亮点</h4>
              <div style="display: flex; gap: 16px;">
                <span v-for="(highlight, highlightIndex) in item.highlights" :key="highlightIndex" style="display: inline-flex; align-items: center; font-size: 14px; color: #1890ff;">
                  <span style="margin-right: 4px;">✓</span> {{ highlight }}
                </span>
              </div>
            </div>

            <!-- 推荐模型 -->
            <div style="margin-bottom: 24px;">
              <h4 style="font-size: 16px; color: #333; margin-bottom: 8px;">推荐模型</h4>
              <div style="display: inline-flex; align-items: center; font-size: 14px; color: #666;">
                <span :style="{display: 'inline-block', width: '16px', height: '16px', backgroundColor: item.modelColor, borderRadius: '50%', marginRight: '6px'}"></span>
                {{ item.recommendedModel }}
              </div>
            </div>

            <!-- 按钮组 -->
            <div style="display: flex; gap: 16px;">
              <button style="padding: 8px 16px; background-color: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">立即体验 →</button>
              <button style="padding: 8px 16px; background-color: #f0f0f0; color: #666; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">合作咨询</button>
            </div>
          </div>
            <div style="width: calc(100% - 420px); float: right">
              <video class="card-video" :src=" item.videoUrl" autoplay loop muted playsinline></video>

            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- AI选型与定价区域 -->
    <section class="scenarios-section" style="width: 100%; padding: 40px 10%; background-color: #f9f9f9;">
      <div class="container" style="width: 100%; margin: 0 auto;">
        <!-- 标题区域 -->
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 32px; color: #333; margin-bottom: 16px;">AI选型与定价</h2>
          <p style="font-size: 16px; color: #666; max-width: 800px; margin: 0 auto;">通过阿里云百炼调用通义大模型的推理服务价格，更多模型使用计费方式和竞价策略，查看详情</p>
        </div>

        <!-- 选型定价表格 -->
        <div style="background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
          <!-- 规格对比标签 -->
          <div style="display: flex; border-bottom: 1px solid #e8e8e8; margin-bottom: 24px;">
            <div style="padding: 12px 24px; font-size: 16px; color: #333; font-weight: 500;">规格对比</div>
            <div style="padding: 12px 24px; font-size: 14px; color: #666; cursor: pointer; position: relative;">
              通义千问3-Max
              <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; border-radius: 50%; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center; font-size: 10px;">i</span>
            </div>
            <div style="padding: 12px 24px; font-size: 14px; color: #666; cursor: pointer; position: relative;">
              通义千问-Plus
              <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; border-radius: 50%; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center; font-size: 10px;">i</span>
            </div>
            <div style="padding: 12px 24px; font-size: 14px; color: #666; cursor: pointer; position: relative;">
              通义千问-Turbo
              <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; border-radius: 50%; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center; font-size: 10px;">i</span>
            </div>
            <div style="padding: 12px 24px; font-size: 14px; color: #666; cursor: pointer; position: relative;">
              通义千问-Image
              <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; border-radius: 50%; border: 1px solid #d9d9d9; display: flex; align-items: center; justify-content: center; font-size: 10px;">i</span>
            </div>
          </div>

          <!-- 价格对比标签 -->
          <div style="margin-bottom: 24px;">
            <div style="display: flex; border-bottom: 1px solid #e8e8e8; margin-bottom: 16px;">
              <div style="padding: 12px 24px; font-size: 16px; color: #333; font-weight: 500;">价格对比</div>
            </div>

            <!-- 价格对比表格 -->
            <div style="display: flex;">
              <!-- 通义千问3-Max -->
              <div style="flex: 1; padding: 0 24px;">
                <select style="width: 100%; padding: 8px; border: 1px solid #d9d9d9; border-radius: 4px; margin-bottom: 16px; font-size: 14px;">
                  <option>32k输入→128k</option>
                </select>
                <div style="height: 300px; overflow-y: auto;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入:</span>
                    <span>0.0064元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出:</span>
                    <span>0.0256元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（缓存命中）:</span>
                    <span>0.00128元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（批量推理）:</span>
                    <span>0.00327元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出（批量推理）:</span>
                    <span>0.0128元/每千tokens</span>
                  </div>
                </div>
                <button style="width: 100%; padding: 8px 16px; background-color: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-top: 16px;">立即体验</button>
              </div>

              <!-- 通义千问-Plus -->
              <div style="flex: 1; padding: 0 24px; border-left: 1px solid #e8e8e8;">
                <select style="width: 100%; padding: 8px; border: 1px solid #d9d9d9; border-radius: 4px; margin-bottom: 16px; font-size: 14px;">
                  <option>128k输入→256k</option>
                </select>
                <div style="height: 300px; overflow-y: auto;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入:</span>
                    <span>0.0024元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出:</span>
                    <span>0.01元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（思考）:</span>
                    <span>0.0024元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出（思考）:</span>
                    <span>0.0247元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（缓存命中）:</span>
                    <span>0.00048元/每千tokens</span>
                  </div>
                </div>
                <button style="width: 100%; padding: 8px 16px; background-color: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-top: 16px;">立即体验</button>
              </div>

              <!-- 通义千问-Turbo -->
              <div style="flex: 1; padding: 0 24px; border-left: 1px solid #e8e8e8;">
                <div style="height: 350px; overflow-y: auto;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入:</span>
                    <span>0.0003元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出:</span>
                    <span>0.0006元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（思考）:</span>
                    <span>0.0003元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输出（思考）:</span>
                    <span>0.003元/每千tokens</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>输入（缓存命中）:</span>
                    <span>0.00006元/每千tokens</span>
                  </div>
                </div>
                <button style="width: 100%; padding: 8px 16px; background-color: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-top: 16px;">立即体验</button>
              </div>

              <!-- 通义千问-Image -->
              <div style="flex: 1; padding: 0 24px; border-left: 1px solid #e8e8e8;">
                <div style="height: 350px; overflow-y: auto;">
                  <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; color: #666;">
                    <span>图片生成:</span>
                    <span>0.25元/每张</span>
                  </div>
                </div>
                <button style="width: 100%; padding: 8px 16px; background-color: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-top: 16px;">立即体验</button>
              </div>
            </div>
          </div>

          <!-- 规格参数 -->
          <div>
            <div style="display: flex; border-bottom: 1px solid #e8e8e8; margin-bottom: 16px;">
              <div style="padding: 12px 24px; font-size: 16px; color: #333; font-weight: 500;">规格参数</div>
            </div>

            <div style="padding: 0 24px;">
              <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 14px; color: #666; border-bottom: 1px solid #f0f0f0;">
                <div style="width: 200px;">上下文长度</div>
                <div style="flex: 1; display: flex; justify-content: space-between;">
                  <span>256K</span>
                  <span>1M</span>
                  <span>128K</span>
                  <span></span>
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 14px; color: #666; border-bottom: 1px solid #f0f0f0;">
                <div style="width: 200px;">RPM</div>
                <div style="flex: 1; display: flex; justify-content: space-between;">
                  <span>600</span>
                  <span>15000</span>
                  <span>1200</span>
                  <span>120</span>
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 14px; color: #666;">
                <div style="width: 200px;">TPM</div>
                <div style="flex: 1; display: flex; justify-content: space-between;">
                  <span>1000000</span>
                  <span>5000000</span>
                  <span>5000000</span>
                  <span>1000000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 资源包购买区域 -->
    <section style="width: 100%; padding: 60px 10%; background-color: #f9f9f9;">
      <div style="width:100%; margin: 0 auto;">
        <!-- 顶部标签 -->
        <div style="display: flex; justify-content: center; margin-bottom: 40px;">
          <button
            @click="switchResourceTab('resource')"
            :style="{
              padding: '8px 24px',
              backgroundColor: activeResourceTab === 'resource' ? '#1890ff' : '#f0f0f0',
              color: activeResourceTab === 'resource' ? 'white' : '#666',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              fontSize: '16px',
              cursor: 'pointer'
            }"
          >
            资源包
          </button>
          <button
            @click="switchResourceTab('plan')"
            :style="{
              padding: '8px 24px',
              backgroundColor: activeResourceTab === 'plan' ? '#1890ff' : '#f0f0f0',
              color: activeResourceTab === 'plan' ? 'white' : '#666',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '2px'
            }"
          >
            节省计划
          </button>
        </div>

        <!-- 资源包卡片 -->
        <div style="display: flex; gap: 24px; justify-content: center;">
          <!-- 图像生成模型资源包 -->
          <div style="flex: 1; background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 380px;">
            <h3 style="font-size: 16px; color: #333; margin-bottom: 12px;">通义千问-Qwen-Image图像生成模型资源包</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">可抵扣qwen-image、qwen-image-edit模型图像推理消耗</p>

            <div style="margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 14px; color: #666;">资源包容量</span>
                <select style="padding: 4px 8px; border: 1px solid #d9d9d9; border-radius: 4px; font-size: 14px;">
                  <option>80张</option>
                </select>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 14px; color: #666;">有效期</span>
                <span style="font-size: 14px; color: #333;">3个月</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <div style="font-size: 24px; color: #1890ff; font-weight: 500;">¥20.00<span style="font-size: 14px; color: #666; margin-left: 4px;">/3月</span></div>
              <div style="font-size: 12px; color: #999;">官网折扣价: ¥20.00/3月</div>
            </div>

            <button style="width: 100%; padding: 10px; background-color: #1890ff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">立即购买</button>

            <div style="text-align: center; margin-top: 16px;">
              <span style="font-size: 12px; color: #999; cursor: pointer;">▼</span>
            </div>
          </div>

          <!-- Plus模型推理资源包 -->
          <div style="flex: 1; background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 380px;">
            <h3 style="font-size: 16px; color: #333; margin-bottom: 12px;">通义千问-Qwen-Plus模型推理资源包</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">可抵扣1200万qwen-plus稳定版以及latest版本的tokens消耗</p>

            <div style="margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 14px; color: #666;">资源包容量</span>
                <span style="font-size: 14px; color: #333;">12000千tokens</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 14px; color: #666;">有效期</span>
                <span style="font-size: 14px; color: #333;">3个月</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <div style="font-size: 24px; color: #1890ff; font-weight: 500;">¥11.66<span style="font-size: 14px; color: #666; margin-left: 4px;">/3月</span></div>
              <div style="font-size: 12px; color: #999;">官网折扣价: ¥11.66/3月</div>
            </div>

            <button style="width: 100%; padding: 10px; background-color: #1890ff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">立即购买</button>

            <div style="text-align: center; margin-top: 16px;">
              <span style="font-size: 12px; color: #999; cursor: pointer;">▼</span>
            </div>
          </div>

          <!-- Max模型推理资源包 -->
          <div style="flex: 1; background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 380px; position: relative;">
            <h3 style="font-size: 16px; color: #333; margin-bottom: 12px;">通义千问-Qwen-Max模型推理资源包</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">可抵扣1800万qwen-max稳定版以及latest版推理tokens</p>

            <div style="margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 14px; color: #666;">资源包容量</span>
                <span style="font-size: 14px; color: #333;">18000千tokens</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 14px; color: #666;">有效期</span>
                <span style="font-size: 14px; color: #333;">1年</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <div style="font-size: 24px; color: #1890ff; font-weight: 500;">¥57.60<span style="font-size: 14px; color: #666; margin-left: 4px;">/1年</span></div>
              <div style="font-size: 12px; color: #999;">官网折扣价: ¥57.60/1年</div>
            </div>

            <button style="width: 100%; padding: 10px; background-color: #1890ff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">立即购买</button>

            <div style="text-align: center; margin-top: 16px;">
              <span style="font-size: 12px; color: #999; cursor: pointer;">▼</span>
            </div>
          </div>
          <!-- Plus模型推理资源包 -->
          <div style="flex: 1; background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 380px;">
            <h3 style="font-size: 16px; color: #333; margin-bottom: 12px;">通义千问-Qwen-Plus模型推理资源包</h3>
            <p style="font-size: 14px; color: #666; margin-bottom: 24px;">可抵扣1200万qwen-plus稳定版以及latest版本的tokens消耗</p>

            <div style="margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 14px; color: #666;">资源包容量</span>
                <span style="font-size: 14px; color: #333;">12000千tokens</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 14px; color: #666;">有效期</span>
                <span style="font-size: 14px; color: #333;">3个月</span>
              </div>
            </div>

            <div style="margin-bottom: 24px;">
              <div style="font-size: 24px; color: #1890ff; font-weight: 500;">¥11.66<span style="font-size: 14px; color: #666; margin-left: 4px;">/3月</span></div>
              <div style="font-size: 12px; color: #999;">官网折扣价: ¥11.66/3月</div>
            </div>

            <button style="width: 100%; padding: 10px; background-color: #1890ff; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">立即购买</button>

            <div style="text-align: center; margin-top: 16px;">
              <span style="font-size: 12px; color: #999; cursor: pointer;">▼</span>
            </div>
          </div>

        </div>

        <!-- 底部说明 -->
        <div style="text-align: center; margin-top: 40px; font-size: 14px; color: #666;">
          面向企业级客户及个人开发者，提供专享大模型资源包与灵活的节省方案，助力高效、低成本地实现大模型应用落地，
          <span style="color: #1890ff; cursor: pointer;">更多资源包套餐</span>
        </div>
      </div>
    </section>
    <section style="width:80%;  margin: 40px 10%; min-height: 600px; background: url('/src/static/img/bg_4.png')  no-repeat center center; background-size: cover">
      <div  style="overflow: hidden; text-align: center; padding-top: 70px">
        <div style="float: left ;width: 50%; line-height: 40px">
          <p style="font-size: 22px; font-weight: bold">阿里云百炼 · 模型服务</p>
          <p>提供全链路模型开发工具及调用服务</p>
          <p style="font-size: 20px; color: #2E6CD3">立即调用<i class="el-icon-right"></i></p>
        </div>
        <div style="float: right;width: 50%;line-height: 40px">
          <p style="font-size: 22px;font-weight: bold">提供全链路模型开发工具及调用服务</p>
          <p>适配开源框架的Agent开发工具平台</p>
          <p  style="font-size: 20px; color: #2E6CD3">立即调用<i class="el-icon-right"></i></p>
        </div>

      </div>
<!--      <div style="width: 100%; max-width: 1440px; ">-->
<!--        <img src="/src/static/img/bg_4.png" alt="" style="width: 100%; max-width: 1440px;    vertical-align: middle">-->
<!--      </div>-->


    </section>
    <!-- 安全合规区域 -->
    <section style="width: 100%; padding: 60px 10%; background-color: #fff;">
      <div style="width:100%; margin: 0 auto;">
        <!-- 标题 -->
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 32px; font-weight: bold; color: #333; margin-bottom: 20px;">安全合规</h2>
          <p style="font-size: 16px; color: #666; line-height: 1.6;">
            我们不仅是大模型技术的推动者，更是行业内的守护者，致力于创造更安全、可靠、可信、可用的智能未来。
            <span style="color: #1890ff; cursor: pointer;">了解更多，查看全新发布安全白皮书2.0 ></span>
          </p>
        </div>

        <!-- 安全合规卡片网格 -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">
          <!-- 卡片1：大模型预训练模型测试 -->
          <div style="background-color: #fff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;">
            <div style="height: 150px; margin-bottom: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <div style="font-size: 32px; color: #667eea;">✓</div>
              </div>
            </div>
            <h3 style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 12px;">首批通过国内"大模型预训练模型测试"</h3>
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              阿里云通义千问大模型首批通过国内"大模型标准符合性评测"，在通用性、智能性、安全性等维度均达到国家相关标准要求。
            </p>
          </div>

          <!-- 卡片2：网信办大模型备案 -->
          <div style="background-color: #fff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;">
            <div style="height: 150px; margin-bottom: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <div style="font-size: 32px; color: #f5576c;">📋</div>
              </div>
            </div>
            <h3 style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 12px;">国内首批通过网信办大模型备案</h3>
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              阿里云通义大模型业以服务技术支持的角色完成了相关部门备案审核，同时完成了生成式人工智能服务备案。
            </p>
          </div>

          <!-- 卡片3：ISO/IEC 42001认证 -->
          <div style="background-color: #fff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;">
            <div style="height: 150px; margin-bottom: 20px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <div style="font-size: 32px; color: #00f2fe;">🏆</div>
              </div>
            </div>
            <h3 style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 12px;">IQNet国际发人工智能管理体系标准ISO/IEC 42001认证</h3>
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              阿里云通义通过ISO42001人工智能管理体系认证，树立AI管理国际标杆，确保技术安全可控，引领云计算与AI服务高标准发展。
            </p>
          </div>

          <!-- 卡片4：安全防护体系 -->
          <div style="background-color: #fff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;">
            <div style="height: 150px; margin-bottom: 20px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <div style="font-size: 32px; color: #43e97b;">🛡️</div>
              </div>
            </div>
            <h3 style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 12px;">全方位、多层次的安全防护体系</h3>
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              通义大模型基于阿里云百炼模型平台提供服务，通过平台完善的数据安全、基础保障机制，确保用户安全、稳定使用大模型。
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- 客户案例区域 -->
    <section style="width: 100%; padding: 80px 10%; background-color: #fff;">
      <div style="width:100%; margin: 0 auto;">
        <!-- 标题 -->
        <div style="text-align: center; margin-bottom: 50px;">
          <h2 style="font-size: 32px; font-weight: bold; color: #333; margin-bottom: 16px;">客户案例</h2>
          <p style="font-size: 16px; color: #666; line-height: 1.6;">
            通义大模型在企业提效工具、文案创作、智能问答、智能推荐等场景都有成熟落地的最佳实践案例，合作咨询
          </p>
        </div>

        <!-- 切换按钮组 -->
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 50px;">
          <button
            v-for="caseItem in customerCases"
            :key="caseItem.id"
            @click="switchCaseTab(caseItem.id)"
            :style="{
              padding: '10px 24px',
              borderRadius: '20px',
              border: '1px solid #d9d9d9',
              backgroundColor: activeCaseTab === caseItem.id ? '#1890ff' : '#fff',
              color: activeCaseTab === caseItem.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeCaseTab === caseItem.id ? '500' : '400',
              transition: 'all 0.3s ease'
            }"
            @mouseover="{ backgroundColor: activeCaseTab === caseItem.id ? '#40a9ff' : '#f5f5f5' }"
            @mouseout="{ backgroundColor: activeCaseTab === caseItem.id ? '#1890ff' : '#fff' }"
          >
            {{ caseItem.name }}
          </button>
        </div>

        <!-- 案例内容 -->
        <div v-for="caseItem in customerCases" :key="caseItem.id" v-if="activeCaseTab === caseItem.id"
             style="display: flex; gap: 40px; align-items: center; background-color: #fafafa; padding: 40px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);">
          <!-- 左侧文字内容 -->
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
              <div style="font-size: 24px; color: #1890ff; font-weight: bold;">{{ caseItem.logo }}</div>
            </div>
            <p style="font-size: 16px; color: #666; line-height: 1.8; margin-bottom: 24px;">
              {{ caseItem.description }}
            </p>
            <button style="
              padding: 10px 20px;
              border: 1px solid #1890ff;
              borderRadius: 4px;
              backgroundColor: #fff;
              color: #1890ff;
              cursor: pointer;
              fontSize: 14px;
              transition: all 0.3s ease;
            " @mouseover="{ backgroundColor: '#e6f7ff' }" @mouseout="{ backgroundColor: '#fff' }">
              查看详情
            </button>
          </div>

          <!-- 右侧图片 -->
          <div style="flex: 1; min-height: 300px; background-color: #e8e8e8; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <div style="
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 20px;
              font-weight: bold;
            ">
              <img :src="caseItem.image" alt=""/>
            </div>
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
import Header from '../components/Header.vue';

export default {
  name: 'AIPlatform',
  components: {
    Header
  },
  data() {
    return {
      activeIndex: '1',
      activeTab: 'closed', // 'closed'表示闭源模型，'open'表示开源模型
      currentScenarioTab: 0, // 当前激活的场景标签页索引
      activeResourceTab: 'resource', // 'resource'表示资源包，'plan'表示节省计划
      activeCaseTab: 'haluo', // 当前激活的客户案例标签
      customerCases: [
        {
          id: 'haluo',
          name: '哈啰出行',
          logo: '哈啰',
          description: '哈啰基于通义千问的 qwen-plus, qwen-turbo, qwen2-7B-instruct 等模型组合，构建了用户意图识别、多轮对话、流量管控、智能问答等能力，实现了交易机器人的全链路闭环升级，同时引入 RAG, COT, TOOL 等技术构建 Agent，以 Agent 直接赋能业务，提升 GMV，实现全流程覆盖。',
          image: '/src/static/img/pic_7.png'
        },
        {
          id: 'lingpao',
          name: '零跑汽车',
          logo: '零跑汽车',
          description: '零跑汽车通过集成通义千问系列模型，构建了智能座舱交互系统，实现了语音控制、自然语言对话、个性化推荐等功能，提升了用户驾驶体验和座舱智能化水平。',
          image: '/src/static/img/pic_8.jpg'
        },
        {
          id: 'haizhi',
          name: '海智招聘',
          logo: '海智招聘',
          description: '海智招聘利用通义千问大模型，开发了智能招聘助手，能够自动筛选简历、生成面试问题、分析候选人匹配度，大幅提高了招聘效率和准确性。',
          image: '/src/static/img/pic_9.jpg'
        },
        {
          id: 'fenzhong',
          name: '分众传媒',
          logo: '分众传媒',
          description: '分众传媒基于通义千问大模型，构建了智能广告投放系统，能够根据用户画像和行为数据，精准推送广告内容，提升广告投放效果和转化率。',
          image: '/src/static/img/pic_10.jpg'
        }
      ],
      scenarioData: [
        {
          title: '系统问答助手',
          description: '10分钟即可0代码构建AI助手，部署到网站，钉钉或微信公众号，通过RAG应用增强知识问答，全天侯提升用户体验。',
          highlights: ['0代码', '私域知识库'],
          recommendedModel: 'Qwen-Plus',
          modelColor: '#1890ff',
          videoUrl:'/src/static/img/video2.mp4'
        },
        {
          title: '多模态数据信息提取',
          description: '一键解析文本、图片、视频数据，精准抽取关键信息，批量处理成本大幅降低，开箱即用安全高效。',
          highlights: ['自动化处理', '智能分析'],
          recommendedModel: 'Qwen-Data-Plus',
          modelColor: '#52c41a',
          videoUrl:'/src/static/img/video3.mp4'
        },
        {
          title: '智能旅行规划',
          description: '5 分钟构建增强型智能体，并一键部署集成高德地图的 MCP Server，实现智能旅行规划。',
          highlights: ['个性化推荐', '实时更新'],
          recommendedModel: 'Qwen-Travel',
          modelColor: '#faad14',
          videoUrl:'/src/static/img/video4.mp4'
        },
        {
          title: '个性化英语陪练',
          description: '10分钟快速搭建AI 陪练，作为智能化的专属训练伙伴，能够提供实时反馈与精准指导，助力用户高效提升技能。',
          highlights: ['高精度检测', '实时监控'],
          recommendedModel: 'Qwen-Quality',
          modelColor: '#f5222d',
          videoUrl:'/src/static/img/video5.mp4'
        }
      ],
      // 闭源模型数据
      closedModels: [
        {
          id: 1,
          tags: ['全新升级', '视频生成'],
          title: '通义万相-图生视频2.6-I2V',
          desc: '生成视频长度提升1倍，最高10s，提升画面时空内容容量，支持更完整的叙事图片生成视频内容，稳定保持图像主体、风格和文字等细节信息。'
        },
        {
          id: 2,
          tags: ['全新升级', '视频生成'],
          title: '通义万相-文生视频2.6-T2V',
          desc: '大幅度动态度表现力与结构稳定性，电影美学控制，最高1080P 24fps输出，运镜理解，支持结构化提示词，文生生成视频内容，丝滑动念能力，电影美学控制，精准指令遵循。'
        },
        {
          id: 3,
          tags: ['全新升级', '图片生成'],
          title: '通义万相-文生图2.6-T2I',
          desc: '文字生成图片，写实质感细腻画面，文字内容生成，艺术风格表现，支持复杂结构化图文表达，直接生成科学图表、流程图、数据图、架构图、文字内容表格等。'
        },
        {
          id: 4,
          tags: ['语音合成'],
          title: '通义千问3-TTS-Flash',
          desc: '是通义最新推出的高维语音合成大模型，不仅有17种高表现力的拟人音色，且超低延迟高稳定合成音频；同时支持多种语言，方言，支持同一音色多语言输出。'
        },
        {
          id: 5,
          tags: ['文本生成'],
          title: '通义千问-MT-Flash',
          desc: '基于Qwen3全面升级的轻量级文本翻译大模型，支持92个语种互译，模型性能和翻译效果全面升级，并提供更稳定的术语定制、格式还原度、领域提示能力。'
        },
        {
          id: 6,
          tags: ['图片生成'],
          title: '通义千问-Image-Edit-Plus',
          desc: '通义千问系列首个图像生成模型，参数规模200亿，具备卓越的文本驱动能力，在复杂文本渲染、各类生成与编辑任务重表现出色，在多个公开基准测试中获得SOTA。'
        },
        {
          id: 7,
          tags: ['视觉模型'],
          title: '通义千问3-VL-Plus',
          desc: '实现思考模式和非思考模式的有效融合，在视觉coding、空间感知、多模态思考等方向全面升级，视觉感知与识别能力大幅提升，支持超长视频理解。'
        },
        {
          id: 8,
          tags: ['多模态模型'],
          title: '通义百聆-Fun-ASR-MTL',
          desc: 'Fun-ASR-MTL集成了创新的RAG技术，支持敏感语气词自动过滤、TN规范化、标点预测等多功能，显著提升了整体识别准确率和语境贴合度。'
        },
        {
          id: 9,
          tags: ['全模态模型'],
          title: '通义千问3-Omni-Flash',
          desc: '多模态大模型，支持文本、图像、音频、视频的高效理解与语音生成能力，可进行119种语言文本交互和20种语言语音交互，生成人类语音实现跨语言沟通。'
        }
      ],
      // 开源模型数据
      openModels: [
        {
          id: 10,
          tags: ['开源模型'],
          title: '通义千问1.8B',
          desc: '轻量级开源大语言模型，适合部署在边缘设备和低资源环境，支持多种语言和基础NLP任务。'
        },
        {
          id: 11,
          tags: ['开源模型', '代码生成'],
          title: '通义千问-Code',
          desc: '专注于代码生成和理解的开源大模型，支持多种编程语言，提供代码补全、错误修复等功能。'
        },
        {
          id: 12,
          tags: ['开源模型', '视觉模型'],
          title: '通义千问-VL',
          desc: '开源视觉语言大模型，支持图像理解和多模态交互，可用于图像描述、视觉问答等任务。'
        },
        {
          id: 13,
          tags: ['开源模型'],
          title: '通义千问7B',
          desc: '中等规模开源大语言模型，在保持轻量级的同时，提供更强大的语言理解和生成能力。'
        },
        {
          id: 14,
          tags: ['开源模型', '多模态'],
          title: '通义千问-Omni',
          desc: '开源多模态大模型，支持文本、图像、音频等多种数据类型的理解和生成。'
        },
        {
          id: 15,
          tags: ['开源模型', '语音识别'],
          title: '通义百聆-Fun-ASR',
          desc: '开源语音识别模型，支持多种语言和场景，提供高精度的语音转文字服务。'
        }
      ]
    };
  },
  methods: {
    handleMenuSelect({ key, keyPath }) {
      // 根据选择的菜单项进行路由跳转
      if (key === '1') {
        this.$router.push('/bigmodel')
      } else if (key === '2-1') {
        this.$router.push('/product')
      } else if (key === '2') {
        // 产品菜单已改为下拉菜单
      } else if (key === '3') {
        // 解决方案页面路由
      } else if (key === '4') {
        // 文档中心页面路由
      } else if (key === '5') {
        // 开发者社区页面路由
      } else if (key === '6') {
        // 关于我们页面路由
      }
    },
    // 切换场景标签页
    switchScenarioTab(index) {
      this.currentScenarioTab = index;
    },
    // 切换标签页
    switchTab(tabType) {
      this.activeTab = tabType;
    },
    // 切换资源包标签页
    switchResourceTab(tabType) {
      this.activeResourceTab = tabType;
    },
    // 切换客户案例标签
    switchCaseTab(tabType) {
      this.activeCaseTab = tabType;
    }
  },
  computed: {
    // 根据当前激活的标签返回对应的模型数据
    currentModels() {
      return this.activeTab === 'closed' ? this.closedModels : this.openModels;
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
/* 英雄区域 */
.hero-section {
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
  width: 100%;
  margin: 0 auto;
  padding: 0 10%;
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
  width: 100%;

  margin: 0 auto;
   padding: 80px 10%;
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

.model-icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.experience-features {
  margin: 24px 0;
}

.feature-row {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
}

.feature-icon {
  font-size: 18px;
}

.model-logo {
  transform: scale(3);
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
  width: 100%;
  margin: 0 auto;
  padding: 80px 10%;
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
  width: 100%;
  margin: 0 auto;
  padding: 80px 10%;
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
  width: 100%;
  margin: 0 auto;
  padding: 80px 10%;
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

/* 体验中心样式 */
.experience-center {
            margin: 0 auto;
        }

        /* 标题样式 */
        .center-title {
            text-align: center;
            font-size: 32px;
            font-weight: 600;
            color: #333;
            margin-bottom: 40px;
        }

        /* 内容主体布局 */
        .center-content {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        /* 左侧模型列表 */
        .model-list {
            flex: 2;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
        }

        /* 单个模型卡片 */
        .model-card {
            background-color: #fff;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .model-card .icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            vertical-align: middle;
        }

        .model-card .title {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
        }

        .model-card .desc {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
        }

        /* 右侧体验卡片 */
        .experience-card {
            flex: 1;
            background: linear-gradient(to right, #e8f4ff, #f0f7ff);
            padding: 32px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 300px;
            position: relative;
            overflow: hidden;
        }

        /* 背景装饰图形（简化版） */
        .experience-card::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23fff' fill-opacity='0.3' d='M50 50L30 80L80 60L20 40L70 20L50 50z'/%3E%3C/svg%3E") no-repeat;
            background-size: contain;
            opacity: 0.8;
        }

        .experience-card .card-title {
            font-size: 24px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
        }

        /* 功能标签组 */
        .feature-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 32px;
            position: relative;
            z-index: 1;
        }

        .feature-tag {
            background-color: rgba(255,255,255,0.8);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            color: #333;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .feature-tag::before {
            content: "♦";
            font-size: 8px;
            color: #666;
        }

        /* 体验按钮 */
        .experience-btn {
            display: block;
            width: 100%;
            padding: 12px 0;
            background-color: #0066ff;
            color: #fff;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 500;
            position: relative;
            z-index: 1;
            transition: background-color 0.2s;
        }

        .experience-btn:hover {
            background-color: #0052cc;
        }

        /* 响应式适配 */
        @media (max-width: 768px) {
            .center-content {
                flex-direction: column;
            }
            .model-list {
                grid-template-columns: 1fr;
            }
        }
          @layer utilities {
            .bg-gradient-purple {
                background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
            }
            .bg-gradient-blue {
                background: linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%);
            }
            .text-shadow-sm {
                text-shadow: 0 1px 2px rgba(0,0,0,0.05);
            }
            .tag-m {
                @apply px-2 py-1 rounded-full text-xs font-medium text-white bg-primary/90;
            }
            .card-hover {
                @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
            }
        }
.bg_1 {
  /* 主背景渐变：左上到右下的浅蓝→淡蓝紫渐变 */
  background: linear-gradient(135deg,
  #e6f4ff 0%,    /* 最浅的淡蓝色 */
  #d9e8ff 50%,   /* 中间过渡蓝 */
  #cce0ff 100%); /* 带淡紫调的蓝色 */
}
.bg_2 {
  /* 主背景渐变：左上到右下的浅紫→淡紫渐变 */
  background: linear-gradient(135deg,
  #f5f0ff 0%,    /* 最浅的淡紫色 */
  #ede4ff 50%,   /* 中间过渡紫 */
  #e2d5ff 100%); /* 较深的淡紫色 */
}
.bg_3 {
  /* 主背景渐变：左上到右下的浅绿→淡绿渐变 */
  background: linear-gradient(135deg,
  #f0fff4 0%,    /* 最浅的淡绿色 */
  #e0f2e9 50%,   /* 中间过渡绿 */
  #d1e7dd 100%); /* 较深的淡绿色 */
}
.tag-m{
  padding:0 10px;
  line-height: 26px;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  background-color: rgb(99 102 241 / 0.9);

}
/* 标题区域 */
.title-section {
  text-align: center;
  margin-bottom: 30px;
}

.main-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.sub-title {
  font-size: 14px;
  color: #666;
}

/* 标签切换按钮 */
.tab-group {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 0;
}

.tab-btn {
  padding: 8px 20px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
}

.tab-btn.active {
  background: #0066ff;
  color: #fff;
  border-color: #0066ff;
}

.tab-btn:first-child {
  border-radius: 4px 0 0 4px;
}

.tab-btn:last-child {
  border-radius: 0 4px 4px 0;
}

/* 卡片网格布局 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

/* 卡片样式 - 核心 hover 效果 */
.model-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 过渡动画，hover更丝滑 */
  position: relative;
}

/* 鼠标滑过卡片时背景变蓝色 */
.model-card:hover {
  background-color: #0066ff;
  color: #fff; /* 文字变白，提升可读性 */
}

/* 卡片内标签样式 */
.card-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 12px;
}

.new-tag {
  background: #9933ff;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
}

.func-tag {
  background: #e5e7eb;
  color: #666;
  padding: 2px 8px;
  border-radius: 4px;
}

/* hover时标签背景适配 */
.model-card:hover .func-tag {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* 卡片标题 */
.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
}

/* 卡片描述 */
.card-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
}

.model-card:hover .card-desc {
  color: #fff;
}

/* 底部链接 */
.more-link {
  text-align: center;
}

.more-link a {
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
}
/* 容器样式 */
.advantage-container {
  max-width: 100%;
  margin: 50px auto;
  padding: 0 0;
}

/* 标题区域 */
.advantage-header {
  text-align: center;
  margin-bottom: 40px;
}

.advantage-title {
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.advantage-subtitle {
  font-size: 14px;
  color: #666;
}

/* 优势卡片区域 */
.advantage-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.advantage-card {
  flex: 1;
  min-width: 250px;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* 突出“更优/更高/更可靠/更可控”的蓝色文字 */
.card-title span {
  color: #1e88e5;
}

.card-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.card-list {
  list-style: none;
}

.card-list li {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

/* 自定义对勾图标 */
.card-list li::before {
  content: "✓";
  color: #1e88e5;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
}
    .tab-content {
      display: none;
    }
    .tab-content.active {
      display: block;
    }
    .tab-btn.active {
      border-bottom: 2px solid #1677ff;
      color: #1677ff;
      font-weight: 500;
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 4px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 2px;
    }

</style>
