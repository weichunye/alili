<template>
  <div class="aliyun-ai-platform">
    <!-- 免费试用 -->
    <Header :active-index="activeIndex"  />
    <div class="top_box">
      <div class="top-content">
        <div class="top-text">
          <h1 class="product-main-title">免费试用</h1>
          <p class="product-description">提供等竞争力的云产品，将计算、存储、网络、数据库、大数据、人工智能、安全等产品技术与场景需求融合，为开发者打造安全、稳定、体验卓越的云服务。</p>
          <div class="product-nav-buttons">
            <el-button type="primary" class="banner-btn" style="padding: 14px 40px" @click="toLInk('/pages/page15')">我的试用</el-button>

          </div>
        </div>
        <div class="top-actions">
          <div class="action-card" style="background: #0062ff; cursor: pointer" @click="toLInk('/benefits')" >
            <p style="font: 24px; color: #fff; font-weight: bold; line-height: 40px">云服务器 ECS 99计划</p>
            <p style="color: #fff; " class="action-desc">低至99元1年，低价省薪</p>
          </div>
          <div class="action-card">
            <p style="font: 24px;  font-weight: bold; line-height: 40px; cursor: pointer"   @click="toLInk('moxing1')" >智启通义千问3，模力全开</p>
            <p class="action-desc">混合推理模型 8 款模型全开源，至高可享 800 万免费 token</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 所有产品页面内容 -->
    <main class="all-products-main">
      <div class="container">
        <!-- 页面标题 -->
        <h1 class="page-title">所有产品</h1>

        <!-- 主内容区域 -->
        <div class="main-content">
          <!-- 左侧分类筛选 -->
          <div class="category-sidebar">
            <div class="category-header">
              <h3>分类筛选</h3>
              <el-input placeholder="搜索分类" prefix-icon="el-icon-search" class="category-search"></el-input>
            </div>

            <!-- 分类列表 -->
            <div class="category-list">
              <!-- 计算分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.compute = !expandedCategories.compute">
                  <i :class="expandedCategories.compute ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>计算 (29)</span>
                </div>
                <div class="category-children" v-show="expandedCategories.compute">
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.compute">云服务器ECS</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.gpu">GPU云服务器</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.bareMetal">裸金属服务器</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.ecI">弹性容器实例ECI</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.ebs">云盘</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.eas">弹性伸缩</el-checkbox>
                  </label>
                  <label class="category-checkbox">
                    <el-checkbox v-model="checkedCategories.container">容器服务Kubernetes版</el-checkbox>
                  </label>
                </div>
              </div>

              <!-- 存储分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.storage = !expandedCategories.storage">
                  <i :class="expandedCategories.storage ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>存储 (14)</span>
                </div>
              </div>

              <!-- 网络分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.network = !expandedCategories.network">
                  <i :class="expandedCategories.network ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>网络 (28)</span>
                </div>
              </div>

              <!-- 安全分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.security = !expandedCategories.security">
                  <i :class="expandedCategories.security ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>安全 (50)</span>
                </div>
              </div>

              <!-- 数据库分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.database = !expandedCategories.database">
                  <i :class="expandedCategories.database ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>数据库 (24)</span>
                </div>
              </div>

              <!-- 人工智能分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.ai = !expandedCategories.ai">
                  <i :class="expandedCategories.ai ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>人工智能 (58)</span>
                </div>
              </div>

              <!-- 云原生分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.cloudNative = !expandedCategories.cloudNative">
                  <i :class="expandedCategories.cloudNative ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>云原生 (23)</span>
                </div>
              </div>

              <!-- 企业应用分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.enterprise = !expandedCategories.enterprise">
                  <i :class="expandedCategories.enterprise ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>企业应用 (12)</span>
                </div>
              </div>

              <!-- 物联网分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.iot = !expandedCategories.iot">
                  <i :class="expandedCategories.iot ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>物联网 (21)</span>
                </div>
              </div>

              <!-- 开发工具分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.devTools = !expandedCategories.devTools">
                  <i :class="expandedCategories.devTools ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>开发工具 (18)</span>
                </div>
              </div>

              <!-- 迁移与运维分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.migration = !expandedCategories.migration">
                  <i :class="expandedCategories.migration ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>迁移与运维 (28)</span>
                </div>
              </div>

              <!-- 专有云分类 -->
              <div class="category-item">
                <div class="category-title" @click="expandedCategories.privateCloud = !expandedCategories.privateCloud">
                  <i :class="expandedCategories.privateCloud ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"></i>
                  <span>专有云 (2)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧产品列表 -->
          <div class="product-list-container">
            <!-- 产品列表头部 -->
            <div class="product-list-header">
              <h2 class="product-category-title">计算</h2>
              <p class="product-category-desc">阿里云提供丰富的云服务器、容器、函数计算等产品，满足不同场景的计算需求，助力您的业务快速发展。</p>
            </div>
            <!-- 搜索栏 -->
            <div class="mb-6">
              <div class="relative">
                <input type="text" placeholder="搜索试用产品" class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <i class="fa fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
              <p class="text-gray-500 text-sm mt-2">为您展示 5 款试用产品</p>
            </div>

            <!-- 产品卡片容器 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <!-- 卡片1：ECS免费试用（个人版） -->
              <div class="border border-gray-200 rounded-lg p-5 card-shadow">
                <div class="flex justify-between items-start mb-3">
                  <span class="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">云服务器</span>
                  <span class="text-sm bg-gray-50 text-gray-600 px-2 py-1 rounded">个人版</span>
                </div>
                <div class="flex justify-end text-xs text-gray-500 mb-2">额度3个月内有效</div>

                <h3 class="text-base font-medium mb-2">云服务器ECS免费试用（个人版）</h3>
                <p class="text-sm text-gray-600 mb-3 text-ellipsis-2">专为开发者打造，适用于网站和应用的托管、开发及测试环境、多人在线游戏部署等。现支持香港地区试用。</p>

                <div class="text-lg font-bold text-blue-600 mb-4">免费额度300元</div>

                <div class="text-xs text-gray-500 space-y-1 mb-6">
                  <p>规格信息：8个规格可选，最高可试用规格vCPU8GiB；7个地域可选；每月免费流量：20GB（中国内地地域）+200GB（非中国内地地域）；试用CS不支持售卖</p>
                  <p>可试用人群：个人认证，且为产品新用户</p>
                </div>

                <div class="flex justify-center gap-3 mt-4">
                  <button class="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition"  @click="toLInk('/pages/page16')">试用教程</button>
                  <button class="px-4 py-1 text-sm bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                          @click=" drawer = true"
                  >立即试用</button>
                </div>
              </div>

              <!-- 卡片2：轻量应用服务器 2vCPU 4GiB（Web应用） -->
              <div class="border border-gray-200 rounded-lg p-5 card-shadow">
                <div class="flex justify-between items-start mb-3">
                  <span class="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">云服务器</span>
                  <span class="text-xs text-gray-500">额度1个月内有效</span>
                </div>

                <h3 class="text-base font-medium mb-2">轻量应用服务器 2vCPU 4GiB</h3>
                <p class="text-sm text-gray-600 mb-3 text-ellipsis-2">专为Web应用及小程序开发打造，预装宝塔Linux面板阿里云专家版，显著提升部署效率，让您专注核心功能开发。</p>

                <div class="text-lg font-bold text-blue-600 mb-4">适用于搭建Web应用/...</div>

                <div class="text-xs text-gray-500 space-y-1 mb-6">
                  <p>可试用人群：认证用户，且为产品新用户</p>
                  <p>商品特点：支持北京、上海等14个中国内地地域试用</p>
                  <p>商品功能：贴近应用，简单易用</p>
                  <p>商品优势：200Mbps峰值带宽</p>
                </div>

                <div class="flex justify-center gap-3 mt-4">
                  <button class="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition"  @click="toLInk('/pages/page16')">试用教程</button>
                  <button class="px-4 py-1 text-sm bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"     @click=" drawer = true">立即试用</button>
                </div>
              </div>

              <!-- 卡片3：轻量应用服务器 2vCPU 4GiB（网站搭建） -->
              <div class="border border-gray-200 rounded-lg p-5 card-shadow">
                <div class="flex justify-between items-start mb-3">
                  <span class="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">云服务器</span>
                  <span class="text-xs text-gray-500">额度1个月内有效</span>
                </div>

                <h3 class="text-base font-medium mb-2">轻量应用服务器 2vCPU 4GiB</h3>
                <p class="text-sm text-gray-600 mb-3 text-ellipsis-2">专为网站搭建设计，预装WordPress镜像，支持通过可视化面板一键部署，从个人站点到企业级网站都能从容应对。</p>

                <div class="text-lg font-bold text-blue-600 mb-4">适用于网站搭建</div>

                <div class="text-xs text-gray-500 space-y-1 mb-6">
                  <p>可试用人群：认证用户，且为产品新用户</p>
                  <p>商品特点：支持北京、上海等14个中国内地地域试用</p>
                  <p>商品功能：贴近应用，简单易用</p>
                  <p>商品优势：200Mbps峰值带宽</p>
                </div>

                <div class="flex justify-center gap-3 mt-4">
                  <button class="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition"  @click="toLInk('/pages/page16')">试用教程</button>
                  <button class="px-4 py-1 text-sm bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"     @click=" drawer = true">立即试用</button>
                </div>
              </div>

              <!-- 卡片4：轻量应用服务器 2vCPU 4GiB（容器环境） -->
              <div class="border border-gray-200 rounded-lg p-5 card-shadow">
                <div class="flex justify-between items-start mb-3">
                  <span class="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">云服务器</span>
                  <span class="text-xs text-gray-500">额度1个月内有效</span>
                </div>

                <h3 class="text-base font-medium mb-2">轻量应用服务器 2vCPU 4GiB</h3>
                <p class="text-sm text-gray-600 mb-3 text-ellipsis-2">预装Docker CE镜像，提供一键式自动化容器环境部署，有效屏蔽底层配置复杂性，让您聚焦核心业务逻辑的构建与创新，实现基础设施即代码的敏捷开发...</p>

                <div class="text-lg font-bold text-blue-600 mb-4">适用于搭建容器环境</div>

                <div class="text-xs text-gray-500 space-y-1 mb-6">
                  <p>可试用人群：认证用户，且为产品新用户</p>
                  <p>商品特点：支持北京、上海等14个中国内地地域试用</p>
                  <p>商品功能：贴近应用，简单易用</p>
                  <p>商品优势：200Mbps峰值带宽</p>
                </div>

                <div class="flex justify-center gap-3 mt-4">
                  <button class="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition"  @click="toLInk('/pages/page16')">试用教程</button>
                  <button class="px-4 py-1 text-sm bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"     @click=" drawer = true">立即试用</button>
                </div>
              </div>

              <!-- 卡片5：轻量应用服务器 2vCPU 1GiB（电商独立站） -->
              <div class="border border-gray-200 rounded-lg p-5 card-shadow md:col-span-2 lg:col-span-1">
                <div class="flex justify-between items-start mb-3">
                  <span class="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded">云服务器</span>
                  <span class="text-xs text-gray-500">额度1个月内有效</span>
                </div>

                <h3 class="text-base font-medium mb-2">轻量应用服务器 2vCPU 1GiB</h3>
                <p class="text-sm text-gray-600 mb-3 text-ellipsis-2">预装WooCommerce镜像，您可快速搭建并管理在线商店，轻松添加商品、处理订单和管理库存，享受高效便捷的管理界面，轻松扩展业务。</p>

                <div class="text-lg font-bold text-blue-600 mb-4">适用于搭建电商独立站</div>

                <div class="text-xs text-gray-500 space-y-1 mb-6">
                  <p>可试用人群：认证用户，且为产品新用户</p>
                  <p>商品特点：支持东京、伦敦等11个海外地域（不含中国香港）试用</p>
                  <p>商品功能：贴近应用，简单易用</p>
                </div>

                <div class="flex justify-center gap-3 mt-4">
                  <button class="px-4 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition"  @click="toLInk('/pages/page16')">试用教程</button>
                  <button class="px-4 py-1 text-sm bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"     @click=" drawer = true">立即试用</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
    <!-- 最新产品动态 -->
    <div class="product-news">
      <h2 class="news-title">最新产品动态</h2>
      <div class="news-container">
        <!-- 左侧大型卡片 -->
        <div class="news-card large-card">
          <div class="card-bg">
            <div class="card-header">
              <h3>边缘实时AI人体检测</h3>
              <p>实时高效的人体检测算法，支持边缘设备部署</p>
            </div>
            <div class="card-content">
              <p>依托达摩院智能视觉算法，实现高精度人体检测，适用于智慧城市、安防监控等场景</p>
              <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <!-- 右侧卡片网格 -->
        <div class="news-card-grid">
          <!-- 第一行 -->
          <div class="news-card small-card">
            <h4>DAS SQL审计功能全面支持阿里云MySQL</h4>
            <p>SQL审计功能全面升级，支持MySQL全量审计，帮助用户实现合规审计</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>云数据库 RDS for SQL Server 2022 正式发布</h4>
            <p>SQL Server 2022 正式上线，支持多项新特性，提升数据库性能和安全性</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>MaxCompute MapReduce UDF 支持CUDA GPU计算加速</h4>
            <p>MaxCompute支持GPU加速MapReduce作业，提升大规模数据处理效率</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>

          <!-- 第二行 -->
          <div class="news-card small-card">
            <h4>人机验证产品 Image OCR 支持多语言识别</h4>
            <p>OCR识别功能全面升级，支持多语言文本识别，提升用户体验</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>DataWorks 新增分析型数据库MySQL版 ClickHouse 数据源</h4>
            <p>DataWorks新增支持ClickHouse数据源，提升数据分析能力</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="news-card small-card">
            <h4>EMR 弹性 Spark 集群全新发布</h4>
            <p>全托管Spark集群服务，提供弹性伸缩能力，降低运维成本</p>
            <a href="#" class="more-link">了解更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品可用区 -->
    <div class="product-availability">
      <div class="availability-container">
        <div class="availability-header">
          <h2>产品可用区</h2>
        </div>

        <div class="availability-content">
          <!-- 左侧统计数据 -->
          <div class="availability-stats">
            <div class="stat-item">
              <div class="stat-number">29</div>
              <div class="stat-label">全球公共云地域</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">92</div>
              <div class="stat-label">全球公共云可用区</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3200+</div>
              <div class="stat-label">边缘节点</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">180+ Tbps</div>
              <div class="stat-label">全球网络带宽</div>
            </div>
          </div>

          <!-- 右侧世界地图 -->
          <div class="availability-map">
            <div class="map-container">
              <img src="/src/static/img/pic_16.png">
            </div>
          </div>
        </div>

        <div class="availability-footer">
          <a href="#" class="learn-more">了解更多全球基础设施 <i class="el-icon-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <Footer />
    <el-drawer
        title="云服务器ECS免费试用"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
      <div class="max-w-[1200px] mx-auto px-4 py-6">
        <!-- 页面标题 -->
        <h1 class="text-[20px] font-bold mb-6">云服务器ECS免费试用（企业版）</h1>

        <!-- 试用须知 -->
        <div class="mb-6 text-sm">
          <div class="flex items-start mb-2">
            <span class="inline-block w-5 text-ali-blue font-bold">1.</span>
            <span>当前试用ECS为按量付费实例，不满足国内ICP备案要求，如需备案请前往购买页选购包年包月实例<u class="text-ali-blue cursor-pointer">立即前往</u></span>
          </div>
          <div class="flex items-start">
            <span class="inline-block w-5 text-ali-blue font-bold">2.</span>
            <span>您可在免费范围内（包括免费总额度、每小时免费额度、免费地域、免费规格），灵活调整试用ECS所在地域、ECS试用规格及台数。</span>
          </div>
        </div>

        <!-- 试用信息表格 -->
        <div class="mb-6 border border-ali-border rounded">
          <table class="w-full text-sm">
            <thead>
            <tr class="table-header-bg border-b border-ali-border">
              <th class="py-3 px-4 text-left font-medium">试用信息</th>
              <th class="py-3 px-4 text-left font-medium">试用有效期</th>
              <th class="py-3 px-4 text-left font-medium">免费范围</th>
              <th class="py-3 px-4 text-left font-medium">超额情况</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-ali-border">
              <td class="py-3 px-4"></td>
              <td class="py-3 px-4">3个月</td>
              <td class="py-3 px-4">免费总额度 <span class="text-ali-orange font-medium">660元</span><br>每小时免费额度上限 <span class="text-ali-orange font-medium">1.833元</span></td>
              <td class="py-3 px-4">超出免费额度部分需自付<br><a href="#" class="text-ali-blue">ECS按量收费&gt;</a></td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- 免费地域 -->
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium">免费地域</label>
          <div class="relative w-64">
            <select class="w-full py-2 px-3 border border-ali-border rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-ali-blue/30 focus:border-ali-blue">
              <option>华东1（杭州）</option>
              <option>北京</option>
              <option>广州</option>
              <option>成都</option>
              <option>香港</option>
              <option>河源</option>
              <option>乌兰察布</option>
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <i class="fa fa-chevron-down text-ali-gray text-xs"></i>
            </div>
          </div>
          <p class="mt-1 text-xs text-ali-gray">7个免费地域可选：北京、杭州、广州、成都、香港、河源、乌兰察布</p>
        </div>

        <!-- ECS实例及系统盘 -->
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium">ECS实例及系统盘</label>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-ali-border rounded">
              <thead>
              <tr class="table-header-bg">
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border"><input type="checkbox" class="mr-2"></th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">vCPU&内存</th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">ECS实例</th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">系统盘及容量</th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">数量</th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">参考价格</th>
                <th class="py-3 px-3 text-left font-medium border-b border-ali-border">免费可用时长 <i class="fa fa-question-circle text-ali-gray cursor-pointer"></i></th>
              </tr>
              </thead>
              <tbody>
              <!-- 行1 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>4GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.38/小时</td>
                <td class="py-3 px-3">约1736小时</td>
              </tr>
              <!-- 行2 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>4GB</td>
                <td class="py-3 px-3">计算型 c7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.45/小时</td>
                <td class="py-3 px-3">约1466小时</td>
              </tr>
              <!-- 行3 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>8GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.479/小时</td>
                <td class="py-3 px-3">约1377小时</td>
              </tr>
              <!-- 行4 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>8GB</td>
                <td class="py-3 px-3">通用型 g7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.565/小时</td>
                <td class="py-3 px-3">约1168小时</td>
              </tr>
              <!-- 行5 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.625/小时</td>
                <td class="py-3 px-3">约1056小时</td>
              </tr>
              <!-- 行6 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">4核(vCPU)<br>8GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.731/小时</td>
                <td class="py-3 px-3">约902小时</td>
              </tr>
              <!-- 行7 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">2核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">内存型 r7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.738/小时</td>
                <td class="py-3 px-3">约894小时</td>
              </tr>
              <!-- 行8 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">4核(vCPU)<br>8GB</td>
                <td class="py-3 px-3">计算型 c7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.857/小时</td>
                <td class="py-3 px-3">约770小时</td>
              </tr>
              <!-- 行9 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">4核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥0.929/小时</td>
                <td class="py-3 px-3">约710小时</td>
              </tr>
              <!-- 行10 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">4核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">通用型 g7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥1.089/小时</td>
                <td class="py-3 px-3">约606小时</td>
              </tr>
              <!-- 行11 -->
              <tr class="hover-highlight border-b border-ali-border">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">8核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">通用算力型 u1</td>
                <td class="py-3 px-3">ESSD Entry<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥1.433/小时</td>
                <td class="py-3 px-3">约460小时</td>
              </tr>
              <!-- 行12 -->
              <tr class="hover-highlight">
                <td class="py-3 px-3"><input type="checkbox" class="mr-2"></td>
                <td class="py-3 px-3">8核(vCPU)<br>16GB</td>
                <td class="py-3 px-3">计算型 c7</td>
                <td class="py-3 px-3">ESSD云盘<br>40GB</td>
                <td class="py-3 px-3">1台</td>
                <td class="py-3 px-3">¥1.673/小时</td>
                <td class="py-3 px-3">约394小时</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 操作系统 -->
        <div class="mb-8">
          <label class="block mb-2 text-sm font-medium">操作系统</label>
          <div class="flex gap-4">
            <!-- Windows Server 选项卡 -->
            <div class="w-64 border border-ali-blue rounded bg-ali-blue/5">
              <div class="py-2 px-3 border-b border-ali-blue bg-white">
                <span class="inline-block w-2 h-2 bg-ali-blue rounded-full mr-2"></span>
                <span>Windows Server</span>
              </div>
              <select class="w-full py-2 px-3 border-0 rounded-b focus:outline-none focus:ring-2 focus:ring-ali-blue/30">
                <option>2022 数据中心版 64位 中文版</option>
                <option>2019 数据中心版 64位 中文版</option>
                <option>2016 数据中心版 64位 中文版</option>
              </select>
            </div>

            <!-- Alibaba Cloud Linux 选项卡 -->
            <div class="w-64 border border-ali-border rounded">
              <div class="py-2 px-3 border-b border-ali-border bg-white">
                <span class="inline-block w-2 h-2 bg-white border border-ali-gray rounded-full mr-2"></span>
                <span>Alibaba Cloud Linux</span>
              </div>
              <select class="w-full py-2 px-3 border-0 rounded-b focus:outline-none focus:ring-2 focus:ring-ali-blue/30">
                <option>3.2104 LTS 64位</option>
                <option>2.1903 LTS 64位</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 结算栏 -->
        <div class="flex items-center justify-between pt-4 border-t mt-6" style="width: 30%; background: #fff; padding: 0 30px; position: fixed; right: 0; bottom: 0">
          <div class="text-right">
            <div class="text-sm text-gray-500"></div>
            <div class="text-2xl font-bold text-orange-500"></div>
            <div class="text-xs text-gray-500 line-through"></div>
          </div>
          <button type="button" class="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">立即试用</button>
        </div>
      </div>
    </el-drawer>
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
      drawer: false,
      direction: 'rtl',
      currentProductName: '' // 当前选中的产品名称
    }
  },
  methods: {
    handleMenuSelect({ key, keyPath }) {
      // 根据选择的菜单项进行路由跳转
      if (key === '1') {
        window.open('/', "_blank")
      } else if (key === '2') {
        // 产品菜单已改为下拉菜单
      } else if (key === '2-1') {
        window.open('/product', "_blank")
      } else if (key === '2-2') {
        // AI大模型页面路由
      } else if (key === '2-3') {
        // 视觉智能页面路由
      } else if (key === '2-4') {
        // 语音智能页面路由
      } else if (key === '2-5') {
        // 自然语言处理页面路由
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
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    toLInk(link){
      window.open(link, "_blank")

    },
  }
}
</script>

<style scoped>
/* 所有产品页面样式 */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10%;
}



/* 顶部产品介绍区域 */
.top_box {
  padding: 60px 0;
  margin-bottom: 40px;
  background: url('/src/static/img/pic_14.png') no-repeat center center; background-size:  100%;
}

.top-content {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-text {
  flex: 1;
}

.product-main-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.product-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.product-nav-buttons {
  display: flex;
  gap: 15px;
}

.product-nav-buttons .el-button {
  padding: 8px 20px;
}

.top-actions {
  position: absolute;
  right: 40px;
  bottom: -30px;
  display: flex;
}

.action-card {
  background-color: white;
  padding: 5px 30px ;
  text-align: center;
  width: 400px;
  text-indent: 20px;
  text-align: left;
}

.action-btn {
  width: 100%;
  margin-bottom: 10px;
}

.action-desc {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 页面标题 */
.page-title {
  font-size: 28px;
  font-weight: bold;
  margin: 30px 0;
  color: #333;
}

/* 主内容区域 */
.main-content {
  display: flex;
  gap: 30px;
}

/* 左侧分类筛选 */
.category-sidebar {
  width: 280px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-shrink: 0;
}

.category-header {
  margin-bottom: 20px;
}

.category-header h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.category-search {
  width: 100%;
}

/* 分类列表 */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-item {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
}

.category-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
  color: #333;
}

.category-title i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.category-children {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
}

.category-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* 右侧产品列表 */
.product-list-container {
  flex: 1;
}

.product-list-header {
  margin-bottom: 30px;
}

.product-category-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.product-category-desc {
  color: #666;
  line-height: 1.6;
}

/* 产品卡片网格 */
.product-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product-card {
  background-color: white;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.product-card-header {
  margin-bottom: 10px;
}

.product-card-header h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.new-badge {
  background-color: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
}

.product-card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 最新产品动态样式 */
.product-news {
  padding: 80px 10%;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
}

/* 添加背景装饰元素 */
.product-news::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.product-news::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 86, 179, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
}

.news-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
  letter-spacing: -0.5px;
}

/* 标题装饰线 */
.news-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  margin: 16px auto 48px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.news-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  box-sizing: border-box;
}

/* 新闻卡片基础样式 */
.news-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

/* 卡片悬停效果增强 */
.news-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* 左侧大型卡片样式 */
.large-card {
  flex: 1;
  min-width: 350px;
  overflow: visible;
}

.card-bg {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 50px;
  height: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 123, 255, 0.3);
}

/* 大型卡片装饰元素 */
.card-bg::before {
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>') no-repeat center;
  opacity: 0.1;
  transform: rotate(15deg);
}

.card-bg::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>') no-repeat center;
  opacity: 0.1;
  transform: rotate(-15deg);
}

.card-header h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
  position: relative;
  z-index: 1;
}

.card-header p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 28px;
  font-weight: 300;
  position: relative;
  z-index: 1;
}

.card-content p {
  font-size: 15px;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.more-link {
  display: inline-flex;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

.more-link:hover {
  opacity: 1;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.more-link i {
  margin-left: 8px;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.more-link:hover i {
  transform: translateX(4px);
}

/* 右侧卡片网格 */
.news-card-grid {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* 小型卡片样式 */
.small-card {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 123, 255, 0.1);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  position: relative;
  overflow: hidden;
}

/* 小型卡片顶部装饰条 */
.small-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #007bff, #0056b3);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.small-card:hover::before {
  transform: scaleX(1);
}

.small-card h4 {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.small-card:hover h4 {
  color: #007bff;
}

.small-card p {
  font-size: 14px;
  color: #5a6c7d;
  line-height: 1.7;
  margin-bottom: 20px;
  flex-grow: 1;
  transition: color 0.3s ease;
}

.small-card:hover p {
  color: #4a5c6d;
}

.small-card .more-link {
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
}

.small-card .more-link:hover {
  background: rgba(0, 123, 255, 0.1);
  border-color: rgba(0, 123, 255, 0.3);
  transform: translateX(6px);
}

.small-card .more-link:hover i {
  transform: translateX(6px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-card-grid {
    grid-template-columns: 1fr;
  }

  .card-bg {
    padding: 30px 24px;
  }

  .card-header h3 {
    font-size: 20px;
  }

  .small-card {
    padding: 20px;
  }
}



/* 产品可用区样式 */
.product-availability {
  background-color: #ffffff;
  padding: 80px 0;
  margin-top: 80px;
  border-top: 1px solid #f0f2f5;
}

.availability-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.availability-header {
  text-align: center;
  margin-bottom: 50px;
}

.availability-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.availability-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.availability-stats {
  flex: 0 0 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 800;
  color: #007bff;
  margin-bottom: 8px;
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  color: #5a6c7d;
  font-weight: 500;
  line-height: 1.4;
}

.availability-map {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.world-map {
  max-width: 100%;
  height: auto;
  opacity: 0.9;
}

.map-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.data-center-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #007bff;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 123, 255, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.map-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.infrastructure-link {
  text-align: center;
  margin-top: 40px;
}

.infrastructure-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #007bff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.infrastructure-link a:hover {
  background-color: rgba(0, 123, 255, 0.1);
  border-color: rgba(0, 123, 255, 0.3);
  transform: translateX(4px);
}

.infrastructure-link a i {
  transition: transform 0.3s ease;
}

.infrastructure-link a:hover i {
  transform: translateX(4px);
}
.card-shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.text-ellipsis-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .product-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .availability-content {
    flex-direction: column;
    gap: 40px;
  }

  .availability-stats {
    flex: none;
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .category-sidebar {
    width: 100%;
  }

  .product-card-grid {
    grid-template-columns: 1fr;
  }

  .availability-header h2 {
    font-size: 28px;
  }

  .availability-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stat-number {
    font-size: 36px;
  }
}
.banner-btn {
  font-size: 16px;
  padding: 10px 24px;
  background-color: #1890ff;
  border-color: #1890ff;
}
</style>
