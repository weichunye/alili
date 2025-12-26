<template>
  <div class="benefits-page">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <main class="benefits-content">
      <!-- 顶部横幅 -->
      <section class="banner-section">
        <div class="container">
          <div class="banner-content">
            <div class="banner-text">
              <h1 class="banner-title">上云优选 普惠权益</h1>
              <p class="banner-subtitle">上云无忧，创新加速。助力快速构建云上应用</p>
              <span class="banner-time">活动时间</span>
              <el-button type="primary" class="banner-btn" style="padding: 15px 50px; border-radius: 0">立即领取</el-button>
            </div>

          </div>
        </div>
      </section>

      <!-- 权益标签页 -->
      <div class="benefits-container">
        <!-- 云产品权益 -->
        <div
          :class="['benefits-tab', activeTab === 'cloud' ? 'cloud-benefits' : 'ai-benefits']"
          @click="activeTab = 'cloud'"
        >
          <h3 class="benefits-title">云产品权益</h3>
          <div class="benefits-list">
            <div class="benefit-item">
              新人限时抢购<br>
              云服务器低至38元/年
            </div>
            <div class="benefit-item">
              场景化解决方案一键购买<br>
              覆盖90%业务场景
            </div>
            <div class="benefit-item">
              “99”计划<br>
              人人可享，新购续费同价，99元起
            </div>
          </div>
        </div>

        <!-- AI产品权益 -->
        <div
          :class="['benefits-tab', activeTab === 'ai' ? 'cloud-benefits' : 'ai-benefits']"
          @click="activeTab = 'ai'"
        >
          <h3 class="benefits-title">AI 产品权益</h3>
          <div class="benefits-list">
            <div class="benefit-item">
              开发者/企业适用<br>
              多款优惠云资源产品，高性价比低至3折
            </div>
            <div class="benefit-item">
              免费试用及新客专享优惠券<br>
              最高可享660元额度，满减券新客、学生均可领取
            </div>
            <div class="benefit-item">
              新人专享满减券<br>
              新客、学生均可领取
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'cloud'" class="name1">
        <div class="column personal-column">
          <h2 class="column-title">个人开发者适用</h2>
          <div class="product-grid">
            <!-- 产品1：轻量应用服务器2核2G -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">轻量应用服务器2核2G</div>
              </div>
              <p class="product-desc">200M峰值带宽，适用于网站搭建、Web应用、容器环境、电商独立站等</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">应用镜像</span>
                  <span class="config-value">宝塔Linux面板</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1年</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-new">新人专享</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">68</span>
                  <span class="price-unit">.00/1年起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥459.00/1年</div>
              </div>
              <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品2：云服务器ECS e实例 -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">云服务器ECS e实例</div>
                <div class="product-tag">（个人开发者优选）</div>
              </div>
              <p class="product-desc">适用于建站、小程序等应用场景</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">实例</span>
                  <span class="config-value">2核2G</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1年</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-first">99计划</span>
                  <span class="tag tag-first">限1件</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">99</span>
                  <span class="price-unit">.00/1年起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥1009.19/1年</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品3：轻量应用服务器2核0.5G -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">轻量应用服务器2核0.5G</div>
                <div class="product-tag">（个人开发者优选）</div>
              </div>
              <p class="product-desc">适用于账号安全管理、游戏加速</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">应用镜像</span>
                  <span class="config-value">宝塔Linux面板</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1个月</span>
                </div>
              </div>
              <div class="price-group">
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">28</span>
                  <span class="price-unit">.00/1月</span>
                </div>
                <div class="price-original">官网折扣价：¥28.00/1月</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品4：轻量应用服务器2核1G -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">轻量应用服务器2核1G</div>
                <div class="product-tag">（个人开发者优选）</div>
              </div>
              <p class="product-desc">适用于服务端面板搭建</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">应用镜像</span>
                  <span class="config-value">宝塔Linux面板</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1个月</span>
                </div>
              </div>
              <div class="price-group">
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">34</span>
                  <span class="price-unit">.00/1月</span>
                </div>
                <div class="price-original">官网折扣价：¥34.00/1月</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>
          </div>
        </div>

        <!-- 企业客户栏 -->
        <div class="column enterprise-column">
          <h2 class="column-title">企业客户适用</h2>
          <div class="product-grid">
            <!-- 产品5：云服务器ECS u2a实例 -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">云服务器ECS u2a实例</div>
              </div>
              <p class="product-desc">适用于中小型数据库系统、缓存、搜索集群</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">地域</span>
                  <span class="config-value">华北2（北京）</span>
                </div>
                <div class="config-item">
                  <span class="config-label">实例</span>
                  <span class="config-value">2核2G</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-first">限1件</span>
                  <span class="tag tag-new">新人专享</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">406</span>
                  <span class="price-unit">.20/1年起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥1203.96/1年</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品6：云服务器ECS3 u2a实例 -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">云服务器ECS3 u2a实例</div>
              </div>
              <p class="product-desc">适用于中小型数据库系统、缓存、搜索集群</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">地域</span>
                  <span class="config-value">华北2（北京）</span>
                </div>
                <div class="config-item">
                  <span class="config-label">实例</span>
                  <span class="config-value">2核4G</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-first">限1件</span>
                  <span class="tag tag-new">新人专享</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">504</span>
                  <span class="price-unit">.60/1年起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥1479.48/1年</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品7：云服务器ECS c9a实例 -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">云服务器ECS c9a实例</div>
              </div>
              <p class="product-desc">适用于Web前端服务器、机器学习推理等应用</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">实例</span>
                  <span class="config-value">2核4G</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1个月</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-first">限1件</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">181</span>
                  <span class="price-unit">.69/1月起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥218.86/1月</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 产品8：云服务器ECS3 g9a实例 -->
            <div class="product-card">
              <div class="product-header">
                <div class="product-name">云服务器ECS3 g9a实例</div>
              </div>
              <p class="product-desc">适用于中小型数据库系统、缓存、搜索集群等应用</p>
              <div class="config-group">
                <div class="config-item">
                  <span class="config-label">实例</span>
                  <span class="config-value">8核8G</span>
                </div>
                <div class="config-item">
                  <span class="config-label">购买时长</span>
                  <span class="config-value">1个月</span>
                </div>
              </div>
              <div class="price-group">
                <div class="tag-group">
                  <span class="tag tag-first">限1件</span>
                </div>
                <div class="price-main">
                  <span class="price-yuan">¥</span>
                  <span class="price-number">228</span>
                  <span class="price-unit">.89/1月起</span>
                  <a href="#" class="price-link">了解优惠</a>
                </div>
                <div class="price-original">官网折扣价：¥277.99/1月</div>
              </div>
               <button class="btn-buy"  @click="drawer = true">立即购买</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'ai'" class="name2">
         <div style="width: 100%; ">
        <!-- 顶部标题 -->
        <div class="text-center mb-6">
            <h1 class="text-[#333] text-2xl font-bold">丰富全面、高性价比的<span class="text-blue-primary">AI大模型服务</span>，开启 AI 新时代</h1>
        </div>

        <!-- Banner和核心数据区 -->
        <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-sm mb-8">
            <!-- Banner区 -->
            <div class="w-full md:w-3/5 bg-blue-primary rounded-l-lg p-6 text-white">
                <h2 class="text-xl font-semibold mb-2">阿里云百炼，免费体验 AI 大模型</h2>
                <p class="text-sm opacity-90 mb-4">AI体验中心全新的RAG智能开发能力，助您完成大模型体验选型和Agent开发；全模态模型向新客提供7000万tokens、100张图、50秒生成视频免费体验。</p>
                <div class="flex gap-3">
                    <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium">立即开通</button>
                    <button class="bg-white text-blue-primary hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium">预约服务</button>
                </div>
            </div>

            <!-- 核心数据区 -->
            <div class="w-full md:w-2/5 flex justify-around items-center p-6 rounded-r-lg">
                <div class="text-center">
                    <i class="fa-solid fa-file-lines text-blue-primary text-2xl mb-2"></i>
                    <p class="text-3xl font-bold text-orange-price">7000万</p>
                    <p class="text-xs text-gray-500 mt-1">tokens 免费体验</p>
                </div>
                <div class="text-center">
                    <i class="fa-solid fa-image text-blue-primary text-2xl mb-2"></i>
                    <p class="text-3xl font-bold text-orange-price">100张</p>
                    <p class="text-xs text-gray-500 mt-1">图像生成免费体验</p>
                </div>
                <div class="text-center">
                    <i class="fa-solid fa-video text-blue-primary text-2xl mb-2"></i>
                    <p class="text-3xl font-bold text-orange-price">50秒</p>
                    <p class="text-xs text-gray-500 mt-1">视频生成免费体验</p>
                </div>
            </div>
        </div>

        <!-- 产品介绍说明 -->
        <div class="text-sm text-gray-600 mb-4">
            <p>让大模型落地，让智能体生长 更强效果、更强性能、更优价格的通义大模型 预约服务享神秘折扣</p>
        </div>

        <!-- 主推产品卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- 图像生成产品 -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-light">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">通义千问-Qwen-Image-Plus图像生成</h3>
                        <p class="text-sm text-gray-600 mt-1">参数规模200亿</p>
                        <p class="text-sm text-gray-600">卓越的文本渲染和编辑能力</p>
                    </div>
                    <div class="text-right">
                        <span class="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-1">热销推荐</span>
                        <p class="text-orange-price font-bold">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                        <p class="text-xs text-gray-500">官网折扣价:¥20.00/3月</p>
                    </div>
                </div>
                <div class="text-xs text-gray-500 mb-4">
                    <p>免费试用: 开通后享100张免费试用</p>
                    <p>适用场景: 覆盖广告营销、内容出版、多语富本本地化、品牌维护及创意餐等需求</p>
                </div>
               <button class="w-full bg-orange hover:bg-orange/90 text-white py-2 rounded text-sm font-medium"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 语言模型产品 -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-light">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">通义千问大语言模型 Qwen系列</h3>
                        <p class="text-sm text-gray-600 mt-1">显著提升Agent、MCP能力</p>
                        <p class="text-sm text-gray-600">适配更加复杂的智能体场景需求</p>
                    </div>
                    <div class="text-right">
                        <span class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-1">模型普惠</span>
                        <p class="text-orange-price font-bold">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                        <p class="text-xs text-gray-500">官网折扣价:¥20.00/3月</p>
                    </div>
                </div>
                <div class="text-xs text-gray-500 mb-4">
                    <p>免费试用: 每个模型开通即享百万tokens</p>
                    <p>适用场景: 覆盖复杂内容创作、复杂数据分析与解释、智能客服与虚拟助手等业务场景</p>
                </div>
              <button class="w-full bg-orange hover:bg-orange/90 text-white py-2 rounded text-sm font-medium"  @click="drawer = true">立即购买</button>
            </div>
        </div>

        <!-- 通用套餐列表 -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- 套餐1 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义万相-图片/视频生成模型通用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">根据承诺消费金额阶梯折扣，最优时，可抵10wan系列模型图片生成或数和视...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 套餐2 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义百聆-语音识别合成系列模型通用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵扣语音识别合成相关模型费用，包括fun-asr, qwen-asr, parformer...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>6个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/6月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/6月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 套餐3 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义千问-Qwen-Plus模型推理资源包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵1200万qwen-plus稳定版以及latest版本tokens消耗</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">资源包容量</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>1200千tokens</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥11.66<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥11.66/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium"  @click="drawer = true">立即购买</button>
            </div>

            <!-- 套餐4 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">多模态交互开发套件调用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵扣语音交互、意图识别、大模型对话等多模态交互的按量计费项目，适用...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium"  @click="drawer = true">立即购买</button>
            </div>
        </div>
    </div>
      </div>
      <div  style="width: 100%; padding: 50px 10%">
        <div class="server-card">
          <!-- 产品信息区 -->
          <div class="product-info">
            <div class="product-title">
              轻量应用服务器 2核2G
              <span class="new-user-tag">新人专享</span>
            </div>
            <div class="product-desc">200M峰值带宽，适用于网站搭建、Web应用、容器环境、电商独立站等</div>
          </div>

          <!-- 购买规格区 -->
          <div class="purchase-spec">
            <div class="spec-item">
              <div class="spec-label">购买时长</div>
              <div class="spec-value">1年</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">购买数量</div>
              <div class="spec-value">1</div>
            </div>
          </div>

          <!-- 价格区 -->
          <div class="price-area">
            <div class="price">¥38.00<span>/1年起</span></div>
            <div class="original-price">官网折扣价：¥459.00/1年</div>
          </div>

          <!-- 倒计时区 -->
          <div class="countdown-area">
            <div class="countdown-desc">本场已售罄，距离下场开始剩</div>
            <div class="countdown-box">
              <div class="countdown-num">03</div>
              <span class="countdown-sep">:</span>
              <div class="countdown-num">11</div>
              <span class="countdown-sep">:</span>
              <div class="countdown-num">24</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="border-b border-gray-200">
          <div class="max-w-screen-xl mx-auto">
            <div class="flex h-14">
              <!-- 导航项 -->
              <div class="flex flex-1">
                <button class="flex items-center px-6 bg-primary text-white font-medium">
                  AI应用开发
                </button>
                <button class="flex items-center px-6 text-gray-700 hover:bg-gray-100 transition-colors">
                  经典架构
                </button>
                <button class="flex items-center px-6 text-gray-700 hover:bg-gray-100 transition-colors">
                  上云普惠
                </button>
                <button class="flex items-center px-6 text-gray-700 hover:bg-gray-100 transition-colors">
                  建站优选
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 套餐内容区域 -->
        <div style="width: 100%; padding: 50px 10%">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 套餐卡片1：大模型服务平台百炼+云服务器组合套餐 -->
            <div class="bg-gray-100 rounded-lg p-6">
              <!-- 套餐标题 -->
              <div class="mb-4">
                <h2 class="text-lg font-semibold text-gray-900">大模型服务平台百炼+云服务器组合套餐</h2>
                <span class="badge-hot">爆款热卖</span>
              </div>

              <!-- 套餐描述 -->
              <p class="text-sm text-gray-400 mb-4">降低开发门槛，缩短模型训练与调优周期，加速AI应用快速落地</p>

              <!-- 套餐标签 -->
              <div class="flex flex-wrap gap-2 mb-6 text-sm">
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>低成本计算资源，部署推理服务</span>
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>按需付费，提升资源利用率</span>
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>限未参与过ECS'99计划'用户，一年可同价续费1次</span>
              </div>

              <!-- 套餐明细 -->
              <div class="space-y-4 mb-6">
                <div class="grid grid-cols-4 gap-2 text-sm">
                  <div>大语言模型推理节省计划</div>
                  <div>承诺消费金额</div>
                  <div>有效期</div>
                  <div class="text-orange">¥20.00</div>
                  <div></div>
                  <div>20元</div>
                  <div>1年</div>
                  <div></div>
                </div>

                <div class="grid grid-cols-4 gap-2 text-sm">
                  <div>云服务器ECS(包月)</div>
                  <div>实例</div>
                  <div>购买时长</div>
                  <div class="text-orange">¥99.00起</div>
                  <div></div>
                  <div>2核2G</div>
                  <div>1年</div>
                  <div></div>
                </div>
              </div>

              <!-- 价格合计 -->
              <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div class="flex items-center mb-1">
                    <span class="text-sm">合计：¥</span>
                    <span class="text-2xl font-bold text-orange">119</span>
                    <span class="text-sm">.00起</span>
                    <a href="#" class="text-primary text-sm ml-2">了解优惠</a>
                  </div>
                  <div class="text-xs text-gray-400">官网折扣价:¥1029.19</div>
                </div>
                <button class="bg-orange text-white px-8 py-2 rounded hover:bg-orange/90 transition-colors">
                  立即购买
                </button>
              </div>
            </div>

            <!-- 套餐卡片2：云服务器+通义万相超值套餐 -->
            <div class="bg-gray-100 rounded-lg p-6">
              <!-- 套餐标题 -->
              <div class="mb-4">
                <h2 class="text-lg font-semibold text-gray-900">云服务器+通义万相超值套餐</h2>
                <span class="badge-hot">爆款上新</span>
              </div>

              <!-- 套餐描述 -->
              <p class="text-sm text-gray-400 mb-4">超值套餐，让创意自由落地，低成本实现 AI 生图生视频全流程</p>

              <!-- 套餐标签 -->
              <div class="flex flex-wrap gap-2 mb-6 text-sm">
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>创意设计，打造视觉内容</span>
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>快速上手，简单易用</span>
                <span class="flex items-center"><i class="fa-solid fa-check text-primary mr-1"></i>限未参与过ECS'99计划'用户，一年可同价续费1次</span>
              </div>

              <!-- 套餐明细 -->
              <div class="space-y-4 mb-6">
                <div class="grid grid-cols-4 gap-2 text-sm">
                  <div>云服务器ECS(包月)</div>
                  <div>实例</div>
                  <div>购买时长</div>
                  <div class="text-orange">¥99.00起</div>
                  <div></div>
                  <div>2核2G</div>
                  <div>1年</div>
                  <div></div>
                </div>

                <div class="grid grid-cols-4 gap-2 text-sm">
                  <div>通义万相模型节省计划</div>
                  <div>承诺消费金额</div>
                  <div>有效期</div>
                  <div class="text-orange">¥20.00</div>
                  <div></div>
                  <div>20元</div>
                  <div>3个月</div>
                  <div></div>
                </div>
              </div>

              <!-- 价格合计 -->
              <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div class="flex items-center mb-1">
                    <span class="text-sm">合计：¥</span>
                    <span class="text-2xl font-bold text-orange">119</span>
                    <span class="text-sm">.00起</span>
                    <a href="#" class="text-primary text-sm ml-2">了解优惠</a>
                  </div>
                  <div class="text-xs text-gray-400">官网折扣价:¥1029.19</div>
                </div>
                <button class="bg-orange text-white px-8 py-2 rounded hover:bg-orange/90 transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="width: 100%; padding: 50px 10%;" class="name3">
                <!-- 主推产品卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- 图像生成产品 -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-light">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">通义千问-Qwen-Image-Plus图像生成</h3>
                        <p class="text-sm text-gray-600 mt-1">参数规模200亿</p>
                        <p class="text-sm text-gray-600">卓越的文本渲染和编辑能力</p>
                    </div>
                    <div class="text-right">
                        <span class="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-1">热销推荐</span>
                        <p class="text-orange-price font-bold">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                        <p class="text-xs text-gray-500">官网折扣价:¥20.00/3月</p>
                    </div>
                </div>
                <div class="text-xs text-gray-500 mb-4">
                    <p>免费试用: 开通后享100张免费试用</p>
                    <p>适用场景: 覆盖广告营销、内容出版、多语富本本地化、品牌维护及创意餐等需求</p>
                </div>
               <button class="w-full bg-orange hover:bg-orange/90 text-white py-2 rounded text-sm font-medium">立即购买</button>
            </div>

            <!-- 语言模型产品 -->
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-light">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">通义千问大语言模型 Qwen系列</h3>
                        <p class="text-sm text-gray-600 mt-1">显著提升Agent、MCP能力</p>
                        <p class="text-sm text-gray-600">适配更加复杂的智能体场景需求</p>
                    </div>
                    <div class="text-right">
                        <span class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-1">模型普惠</span>
                        <p class="text-orange-price font-bold">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                        <p class="text-xs text-gray-500">官网折扣价:¥20.00/3月</p>
                    </div>
                </div>
                <div class="text-xs text-gray-500 mb-4">
                    <p>免费试用: 每个模型开通即享百万tokens</p>
                    <p>适用场景: 覆盖复杂内容创作、复杂数据分析与解释、智能客服与虚拟助手等业务场景</p>
                </div>
              <button class="w-full bg-orange hover:bg-orange/90 text-white py-2 rounded text-sm font-medium">立即购买</button>
            </div>
        </div>

        <!-- 通用套餐列表 -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- 套餐1 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义万相-图片/视频生成模型通用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">根据承诺消费金额阶梯折扣，最优时，可抵10wan系列模型图片生成或数和视...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium">立即购买</button>
            </div>

            <!-- 套餐2 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义百聆-语音识别合成系列模型通用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵扣语音识别合成相关模型费用，包括fun-asr, qwen-asr, parformer...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>6个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/6月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/6月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium">立即购买</button>
            </div>

            <!-- 套餐3 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">通义千问-Qwen-Plus模型推理资源包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵1200万qwen-plus稳定版以及latest版本tokens消耗</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">资源包容量</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>1200千tokens</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥11.66<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥11.66/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium">立即购买</button>
            </div>

            <!-- 套餐4 -->
            <div class="bg-white rounded-lg shadow-sm p-4 border border-gray-light">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-sm font-medium text-gray-800">多模态交互开发套件调用抵扣包</h4>
                    <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                </div>
                <p class="text-xs text-gray-500 mb-3">可抵扣语音交互、意图识别、大模型对话等多模态交互的按量计费项目，适用...</p>
                <div class="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div>
                        <label class="text-gray-500 block mb-1">承诺消费金额</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>20元</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-500 block mb-1">有效期</label>
                        <select class="w-full border border-gray-200 rounded px-2 py-1 text-xs">
                            <option>3个月</option>
                        </select>
                    </div>
                </div>
                <p class="text-orange-price font-bold mb-1">¥20.00<span class="text-xs text-gray-500 font-normal">/3月</span></p>
                <p class="text-xs text-gray-500 mb-4">官网折扣价:¥20.00/3月</p>
                <button class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1 rounded text-xs font-medium">立即购买</button>
            </div>
        </div>
      </div>

      <div style="width: 100%; padding: 50px 10%" class="name4">
     <ProductCardSet  title="“应用盒子”：跨境电商/小游戏低成本部署优选"
  description="BGP 全球覆盖+200Mbps带宽，独立站/小游戏丝滑运行"/>
      </div>
      <div style="width: 100%; padding:0 10%" class="name5">
        <ProductCardSetA  />
      </div>
        <div style="width: 100%; padding:0 10%" class="name6">
        <ProductCardSetB  />
      </div>
      <div style="width: 100%; padding:0 10%" class="name7">
        <ProductCardSetC  />
      </div>
      <div style="width: 100%; padding:0 10%" class="name7">
        <div class=" mx-auto px-4 py-8">
          <!-- 推荐新用户上云模块 -->
          <section class="mb-12">
            <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-4">推荐新用户上云，获得返现激励</h2>
            <p class="text-sm text-light mb-6">
              点击“加入推广赚钱”默认加入云大使，邀请新老用户上云可得返现奖励，返现比例25%起。在关联周期内新升续订订单都可获得返佣。
              <a href="#" class="text-primary hover:underline">云大使推广协议&gt;</a>
            </p>

            <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
              <!-- 左侧banner -->
              <div class="w-full md:w-1/2 bg-primary text-white p-8 relative">
                <!-- 背景图片占位 -->
                <div class="absolute inset-0 opacity-20 bg-[url('https://placeholder.pics/svg/800x400/EEEEEE-AAAAAA/云大使背景')] bg-cover bg-center"></div>
                <div class="relative z-10">
                  <h3 class="text-xl font-bold mb-3">为什么要加入云大使？</h3>
                  <p class="text-sm mb-4 text-white/90">
                    云大使是阿里云官方的推广返利平台。<br>
                    推荐好友购买云产品，单笔最高9万元奖励，新老客户可得返现！
                  </p>
                  <p class="text-sm mb-6 text-white/90">① 加入大使···② 获取素材···③ 分享好友···④ 赚现金</p>
                  <button class="bg-orange-primary hover:bg-orange-primary/90 text-white font-medium px-6 py-2 rounded transition-colors">
                    加入并推广赚钱
                  </button>
                </div>
              </div>

              <!-- 右侧数据卡片 -->
              <div class="w-full md:w-1/2 flex justify-around items-center p-6">
                <!-- 返现比例 -->
                <div class="text-center">
                  <div class="text-4xl font-bold text-orange-primary mb-1">25%<span class="text-xl font-normal">起</span></div>
                  <div class="text-sm text-light">新客返利</div>
                  <!-- 图标占位 -->
                  <div class="text-4xl text-primary mb-2 mt-4"><i class="fa-solid fa-percent"></i></div>
                </div>

                <!-- 最高奖励 -->
                <div class="text-center">
                  <div class="text-4xl font-bold text-orange-primary mb-1">最高<span class="text-2xl">9</span>万元</div>
                  <div class="text-sm text-light">新客单笔返利</div>
                  <!-- 图标占位 -->
                  <div class="text-4xl text-primary mb-2 mt-4"><i class="fa-solid fa-yen-sign"></i></div>
                </div>

                <!-- 关联周期 -->
                <div class="text-center">
                  <div class="text-4xl font-bold text-orange-primary mb-1">最长<span class="text-2xl">90</span>天</div>
                  <div class="text-sm text-light">新客关联</div>
                  <!-- 图标占位 -->
                  <div class="text-4xl text-primary mb-2 mt-4"><i class="fa-solid fa-calendar-days"></i></div>
                </div>
              </div>
            </div>
          </section>

          <!-- 学习与认证模块 -->
          <section>
            <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-dark mb-6">学习与认证</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- 帮助文档 -->
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-semibold text-dark mb-3">帮助文档</h3>
                <p class="text-sm text-light">
                  提供官方的技术文档、丰富的开发工具和资源
                </p>
              </div>

              <!-- 开发者社区 -->
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-semibold text-dark mb-3">开发者社区</h3>
                <p class="text-sm text-light">
                  支持开发者技术交流和能力成长，与千万开发者共同探索云上创新
                </p>
              </div>

              <!-- 阿里云认证 -->
              <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-lg font-semibold text-dark mb-3">阿里云认证</h3>
                <p class="text-sm text-light">
                  阿里云各领域技术专家倾力打造，提升技术能力，获得企业认可，必备证书
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
      <div class="max-w-4xl mx-auto bg-white p-6 shadow-sm" style="position: relative">
        <!-- 标题栏 -->
        <div class="flex items-center justify-between mb-8 border-b pb-4">
          <div class="flex items-center">
            <h1 class="text-xl font-medium mr-4">轻量应用服务器 2核2G</h1>
            <a href="#" class="text-primary text-sm hover:underline">更多配置购买</a>
          </div>
        </div>

        <!-- 表单内容区域 -->
        <form class="space-y-8">
          <!-- 实例类型 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">实例类型</label>
            <div class="inline-flex border rounded-md">
              <button type="button" class="px-4 py-2 bg-blue-50 border-b-active font-medium">服务器实例</button>
            </div>
          </div>

          <!-- 地域选择 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">地域</label>
            <div class="space-y-2">
              <select class="w-full max-w-xs px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>华南2 (河源)</option>
                <option>华东1 (杭州)</option>
                <option>华北2 (北京)</option>
              </select>
              <div class="text-xs text-gray-500 max-w-2xl leading-relaxed">
                选择靠近您客户的地域可提高网络访问速度。非中国内地地域（如中国香港、新加坡等）提供国际带宽，如您在中国内地使用，可能有较大的网络延迟。
                <a href="#" class="text-primary hover:underline">教我选择?</a><br>
                轻量应用数据库必须和轻量应用服务器在同一地域才能搭配使用<br>
                轻量应用数据库服务和轻量应用服务器在同一地域才能支持内网访问<br>
                当前轻量应用容器服务只能通过公网访问轻量应用数据库服务
              </div>
            </div>
          </div>

          <!-- 镜像选择 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">镜像</label>
            <div class="space-y-2">
              <!-- 镜像标签 -->
              <div class="inline-flex border rounded-md mb-3">
                <button type="button" class="px-4 py-2 bg-blue-50 border-b-active font-medium">应用镜像</button>
                <button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-50">系统镜像</button>
                <button type="button" class="px-4 py-2 text-gray-600 hover:bg-gray-50">自定义镜像</button>
              </div>

              <!-- 镜像卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl">
                <!-- 宝塔Linux面板 -->
                <div class="border rounded-md p-3 card-hover bg-blue-50 border-blue-500">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-server text-green-500 mr-2"></i>
                    <span class="font-medium">宝塔Linux面板</span>
                  </div>
                  <div class="text-sm text-gray-500">阿里云专家版 9.2.0</div>
                </div>

                <!-- 1Panel -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-window-maximize text-blue-500 mr-2"></i>
                    <span class="font-medium">1Panel</span>
                  </div>
                  <div class="text-sm text-gray-500">1.10.26</div>
                </div>

                <!-- WordPress -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-wordpress text-purple-500 mr-2"></i>
                    <span class="font-medium">WordPress</span>
                  </div>
                  <div class="text-sm text-gray-500">6.7.1</div>
                </div>

                <!-- WooCommerce -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-shopping-cart text-blue-600 mr-2"></i>
                    <span class="font-medium">WooCommerce</span>
                  </div>
                  <div class="text-sm text-gray-500">9.4.7</div>
                </div>

                <!-- 翼龙面板 -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-dragon text-orange-500 mr-2"></i>
                    <span class="font-medium">翼龙面板</span>
                  </div>
                  <div class="text-sm text-gray-500">1.11.7.1</div>
                </div>

                <!-- Cloudreve -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-cloud text-sky-500 mr-2"></i>
                    <span class="font-medium">Cloudreve</span>
                  </div>
                  <div class="text-sm text-gray-500">3.8.3</div>
                </div>

                <!-- Docker -->
                <div class="border rounded-md p-3 card-hover">
                  <div class="flex items-center mb-2">
                    <i class="fa fa-cubes text-blue-700 mr-2"></i>
                    <span class="font-medium">Docker</span>
                  </div>
                  <div class="text-sm text-gray-500">26.1.3</div>
                </div>
              </div>

              <!-- 镜像说明 -->
              <div class="text-xs text-gray-500 max-w-2xl">
                宝塔Linux面板是广东思腾安全技术有限公司旗下提升运维效率的服务器管理软件，支持一键LAMP/LNMP/集群/监控/网站/FTP/数据库/JAVA等100多项服务器管理功能，来源于阿里云云市场。
              </div>
            </div>
          </div>

          <!-- 套餐配置 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">套餐配置</label>
            <div class="space-y-2">
              <div class="border rounded-md max-w-xs p-4 bg-blue-50 border-blue-500">
                <div class="font-medium mb-2">通用型 45元/月</div>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>vCPU 2核</li>
                  <li>内存 2 GB</li>
                  <li>ESSD 40 GB</li>
                  <li>限峰值带宽 200 Mbps</li>
                  <li>公网线路类型 BGP</li>
                  <li>固定公网地址 1IPv4</li>
                </ul>
              </div>

              <!-- 套餐说明 -->
              <div class="text-xs text-gray-500 max-w-2xl leading-relaxed">
                如果您购买的是服务器实例，请注意：<br>
                实例规格峰值公网带宽为出、入方向的峰值上限，不作为业务承诺指标，当阿里云在业务高峰期出现资源争抢时，公网带宽可能会受到限制和产生网络丢包，不适合应用于对公网质量有强保障诉求的场景。<br>
                对于包含每月流量的实例规格，只有超出每月额度的公网出流量才会产生额外费用，请查看<a href="#" class="text-primary hover:underline">流量计费方式</a>了解详情。<br>
                对于不包含每月流量的实例规格，公网出流量、入流量均不会产生费用。<br>
                中国香港/海外地域轻量应用实例价格包含额外的操作系统版权费用，请注意实例规格价格变化。<br>
                BGP_NC=BGP (非中国优化)，中国大陆用户使用BGP (非中国优化) 线路有较高的公网时延和丢包率，国际版规格仅适用于不需要对中国大陆用户提供服务的应用场景。<br>
                如果您购买的是数据库服务实例，请注意：<br>
                当前通过公网访问轻量数据库服务产生的公网流量计费不收费
              </div>
            </div>
          </div>

          <!-- 数据盘 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">数据盘</label>
            <div class="flex items-center space-x-2 max-w-xs">
              <button type="button" class="px-2 py-1 border rounded-md hover:bg-gray-50">-</button>
              <input type="number" value="0" class="w-12 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <button type="button" class="px-2 py-1 border rounded-md hover:bg-gray-50">+</button>
              <span class="text-sm">GB</span>
            </div>
            <div class="text-xs text-gray-500">请选择额外增加的数据盘大小</div>
          </div>

          <!-- 购买时长 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">购买时长</label>
            <div class="space-y-2 max-w-xs">
              <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>1年</option>
                <option>2年</option>
                <option>3年</option>
                <option>1个月</option>
                <option>3个月</option>
                <option>6个月</option>
              </select>

              <div class="flex items-center space-x-2 mt-1">
                <input type="checkbox" id="auto-renew" class="rounded text-blue-500 focus:ring-blue-500">
                <label for="auto-renew" class="text-sm text-gray-700">到期自动续费</label>
              </div>

              <div class="text-xs text-gray-500 bg-gray-50 p-2 rounded-md">
                建议勾选到期自动续费，可避免因资源到期停机或释放而影响业务。勾选后，自动续费周期为<span class="text-primary">每</span>月，在实例到期前会以实时价格自动扣费。自动续费可随时取消。<a href="#" class="text-primary hover:underline">了解更多></a>
              </div>
            </div>
          </div>

          <!-- 购买数量 -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">购买数量</label>
            <div class="flex items-center space-x-2 max-w-xs">
              <button type="button" class="px-2 py-1 border rounded-md hover:bg-gray-50">-</button>
              <input type="number" value="1" class="w-12 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <button type="button" class="px-2 py-1 border rounded-md hover:bg-gray-50">+</button>
            </div>
          </div>

          <!-- 结算栏 -->
          <div class="flex items-center justify-between pt-4 border-t mt-6" style="width: 30%; background: #fff; padding: 0 30px; position: fixed; right: 0; bottom: 0">
            <div class="text-right">
              <div class="text-sm text-gray-500">应付费用</div>
              <div class="text-2xl font-bold text-orange-500">¥68.00</div>
              <div class="text-xs text-gray-500 line-through">¥459.00 <a href="#" class="text-primary hover:underline">查看明细</a></div>
            </div>
            <button type="button" class="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium">立即购买</button>
          </div>
        </form>
      </div>

    </el-drawer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProductCardSet from '../components/ProductCardSet.vue'
import ProductCardSetA from '../components/ProductCardSetA.vue'
import ProductCardSetB from '../components/ProductCardSetB.vue'
import ProductCardSetC from '../components/ProductCardSetC.vue'

export default {
  name: 'BenefitsPage',
  components: {
    Header,
    Footer,
    ProductCardSet,
    ProductCardSetA,
    ProductCardSetB,
    ProductCardSetC
  },
  data() {
    return {
      activeIndex: '5', // 权益中心在Header中的index值
      activeTab: 'cloud', // 默认选中云产品权益标签页
      myBenefits: [
        {
          name: 'AI大模型代金券',
          type: '代金券',
          value: '500元',
          status: '可用',
          expireTime: '2023-12-31'
        },
        {
          name: '视觉智能体验券',
          type: '体验券',
          value: '免费',
          status: '可用',
          expireTime: '2023-09-30'
        },
        {
          name: '语音智能折扣券',
          type: '折扣券',
          value: '8折',
          status: '可用',
          expireTime: '2023-11-30'
        },
        {
          name: '自然语言处理代金券',
          type: '代金券',
          value: '300元',
          status: '已过期',
          expireTime: '2023-06-30'
        }
      ],
      drawer: false,
      direction: 'rtl',
    }
  },
  methods: {
    handleMenuSelect(menuInfo) {
      // 处理菜单选择事件
      console.log('菜单选择信息:', menuInfo)
    },
    useBenefit(benefit) {
      // 使用权益的逻辑
      if (benefit.status === '可用') {
        this.$message.success(`正在使用${benefit.name}...`)
        // 这里可以添加使用权益的具体逻辑
      } else {
        this.$message.info(`查看${benefit.name}详情`)
        // 这里可以添加查看详情的具体逻辑
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
  }
}
</script>

<style scoped lang="scss">
::v-deep{
  //.el-drawer{
  //  position: relative;
  //}
}
/*@layer utilities {*/
/*  .content-auto {*/
/*    content-visibility: auto;*/
/*  }*/
/*  .text-orange-price {*/
/*    color: #FF6700;*/
/*  }*/
/*  .bg-blue-primary {*/
/*    background-color: #1677FF;*/
/*  }*/
/*  .border-gray-light {*/
/*    border-color: #E5E7EB;*/
/*  }*/
/*}*/
.benefits-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.benefits-content {
  flex: 1;
}

/* 顶部横幅 */
.banner-section {
  padding: 60px 0;
  background: url('/src/static/img/pic_20.png') no-repeat right center;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-text {
  flex: 1;
}

.banner-title {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 10px;
  line-height: 70px;
  font-weight: 600;
}

.banner-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.banner-time {
  font-size: 14px;
  color: #999;
  margin-right: 20px;
}

.banner-btn {
  font-size: 16px;
  padding: 10px 24px;
  background-color: #1890ff;
  border-color: #1890ff;
}

.banner-image {
  width: 400px;
  height: 200px;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

/* 权益标签页 */
.benefits-tabs {
  padding: 60px 0;
}

.el-tabs--card > .el-tabs__header .el-tabs__item {
  border-radius: 4px 4px 0 0;
  padding: 12px 24px;
  font-size: 16px;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: #fff;
  background-color: #fff;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.benefit-card {
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.benefit-card h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 8px;
  font-weight: 600;
}

.benefit-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
}
/* 权益容器 */
.benefits-container {
  display: flex;
  width: 100%;
  margin: 20px auto;
  padding: 0 10%;
  border-radius: 4px;
  overflow: hidden;
}

/* 左侧云产品权益栏 */
.cloud-benefits {
  flex: 1;
  padding: 15px;
  border-top: 3px solid #0078d7;
  background-color: #f8f9fa;
}

/* 右侧AI产品权益栏 */
.ai-benefits {
  flex: 1;
  padding: 15px;
  background-color: #f1f1f1;
}

/* 标题样式 */
.benefits-title {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
.cloud-benefits .benefits-title {
  color: #0078d7;
}
.ai-benefits .benefits-title {
  color: #333;
}

/* 权益项网格布局 */
.benefits-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

/* 单个权益项样式 */
.benefit-item {
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
:root {
  --primary-blue: #165DFF;
  --orange-price: #FF6A00;
  --gray-text: #666666;
  --light-gray: #F5F7FA;
  --border-color: #E5E6EB;
  --white: #FFFFFF;
  --font-sm: 12px;
  --font-md: 14px;
  --font-lg: 16px;
  --font-xl: 20px;
}

.name1 {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 60px 10% 0;
}
.name2 {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 60px 10% 0;
}

/* 左右栏通用样式 */
.column {
  flex: 1;
  background-color: #F5F7FA;
  border-radius: 4px;
  padding: 16px;
}

.column-title {
  font-size:16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.personal-column .column-title {
  color: #333;
}

.enterprise-column .column-title {
  color: #165DFF;
}

/* 产品卡片网格 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* 产品卡片样式 */
.product-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E6EB;
  border-radius: 4px;
  padding: 16px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.product-name {
  font-size: 14px;
  font-weight: 500;
}

.product-tag {
  font-size:  12px;
  color:  #666666;
}

.product-desc {
  font-size: 12px;
  color:  #0066ff;
  margin-bottom: 12px;
  line-height: 1.4;
}

/* 配置项样式 */
.config-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 16px;
}

.config-item {
  display: flex;
  align-items: center;
  font-size:  12px;
}

.config-label {
  color:  #666666;
  margin-right: 8px;
}

.config-value {
  color: #333;
}

/* 价格样式 */
.price-group {
  margin-bottom: 16px;
}

.tag-group {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.tag {
  font-size:12px;
  padding: 2px 6px;
  border-radius: 2px;
}

.tag-new {
  background-color: #FFF7E6;
  color: #FF9A42;
}

.tag-first {
  background-color: #F0F7FF;
  color: #165DFF;
}

.price-main {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 4px;
}

.price-yuan {
  font-size: 12px;
  color:  #FF6A00;
}

.price-number {
  font-size:16px;
  font-weight: 600;
  color:  #FF6A00;
}

.price-unit {
  font-size: 12px;
  color:  #FF6A00;
}

.price-link {
  font-size: 12px;
  color: #165DFF;
  text-decoration: none;
  margin-left: 8px;
}

.price-original {
  font-size: 12px;
  color: #666666;
  text-decoration: line-through;
}

/* 按钮样式 */
.btn-buy {
  width: 100%;
  padding: 8px 0;
  background-color: #FFFFFF;
  border: 1px solid  #E5E6EB;
  border-radius: 4px;
  color: #333;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-buy:hover {
  border-color: #165DFF;
  color: #165DFF;
}

/* 卡片容器 */
.server-card {
  display: flex;
  width: 100%;
  height: 120px;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 产品信息区 */
.product-info {
  flex: 2;
  background: linear-gradient(90deg, #0066ff, #1e88e5);
  color: #fff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.new-user-tag {
  display: inline-block;
  background-color: #ff7800;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 3px;
  margin-left: 8px;
}

.product-desc {
  font-size: 14px;
  color: #0066ff;
}

/* 购买规格区 */
.purchase-spec {
  flex: 3;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
}

.spec-item {
  text-align: center;
}

.spec-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
}

.spec-value {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

/* 价格区 */
.price-area {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff8f0;
}

.price {
  font-size: 20px;
  color: #ff4d4f;
  font-weight: 600;
}

.price span {
  font-size: 14px;
  color: #999;
}

.original-price {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  text-decoration: line-through;
}

/* 倒计时区 */
.countdown-area {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.countdown-desc {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.countdown-box {
  display: flex;
  gap: 8px;
  align-items: center;
}

.countdown-num {
  width: 30px;
  height: 30px;
  background-color: #0066ff;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
}

.countdown-sep {
  color: #333;
  font-size: 16px;
}

</style>



