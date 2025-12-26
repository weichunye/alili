<template>
  <el-header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <i class="el-icon-cloud"></i>
        <span>阿里云AI</span>
      </router-link>
      <div class="menu-wrapper">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <!-- 菜单项 -->
          <div class="menu-item-wrapper">
            <el-menu-item index="1">大模型</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class="flex flex-col md:flex-row">
                  <!-- 左侧侧边栏 -->
                  <div class="w-full md:w-64 pr-0 md:pr-6 mb-6 md:mb-0">
                    <div class="text-xl font-bold mb-4 flex items-center">
                      大模型 <i class="fas fa-chevron-right ml-2 text-xs"></i>
                    </div>
                    <p class="text-sm text-gray-600">
                      一站式为企业和开发者提供大模型能力体系，大模型原生应用以及最佳解决方案，助力云上开发者轻松完成AI落地。
                    </p>
                  </div>

                  <!-- 右侧主内容区 -->
                  <div class="flex-1">
                    <!-- 顶部快捷入口 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div class="border border-gray-200 rounded p-4 hover:shadow-sm transition-shadow">
                        <div class="text-link font-medium mb-1 flex items-center">
                          AI体验馆 <i class="fas fa-chevron-right ml-1 text-xs"></i>
                        </div>
                        <p class="text-sm text-gray-600">免费体验前沿 AI 应用和最新通义系列大模型，开启智能创新</p>
                      </div>
                      <div class="border border-gray-200 rounded p-4 hover:shadow-sm transition-shadow">
                        <div class="text-link font-medium mb-1 flex items-center">
                          大模型服务平台百炼 <i class="fas fa-chevron-right ml-1 text-xs"></i>
                        </div>
                        <p class="text-sm text-gray-600">为企业打造的大模型服务与应用开发平台</p>
                      </div>
                    </div>

                    <!-- 通义大模型板块 -->
                    <div class="mb-8">
                      <div class="text-lg font-semibold mb-4 flex items-center">
                        通义大模型
                        <span class="ml-2 text-xs text-gray-500">更强效果、更高性能、更优价格</span>
                        <i class="fas fa-chevron-right ml-2 text-xs"></i>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <!-- 第一列 -->
                        <div class="space-y-3">
                          <div>
                            <div class="text-link text-sm font-medium">通义万相2.6-图生视频 <span class="badge-new">NEW</span></div>
                            <p class="text-xs text-gray-600 mt-1">支持15秒长视频，支持智能分镜叙事</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义百聆-Fun-ASR <span class="badge-new">NEW</span></div>
                            <p class="text-xs text-gray-600 mt-1">支持中英文自由切换，具备更强的噪声鲁棒性</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问3-VL-Plus</div>
                            <p class="text-xs text-gray-600 mt-1">视觉Coding、空间感知、多模态思考等全面升级</p>
                          </div>
                        </div>

                        <!-- 第二列 -->
                        <div class="space-y-3">
                          <div>
                            <div class="text-link text-sm font-medium">通义万相2.6-文生视频 <span class="badge-new">NEW</span></div>
                            <p class="text-xs text-gray-600 mt-1">保持主体、场景和氛围一致性，更高品质的声音生成</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问3-Omni-Flash</div>
                            <p class="text-xs text-gray-600 mt-1">支持119种语言文本交互和20种语言语音交互</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问3</div>
                            <p class="text-xs text-gray-600 mt-1">Qwen3 最强235B旗舰版重磅升级，通用能力显著提升</p>
                          </div>
                        </div>

                        <!-- 第三列 -->
                        <div class="space-y-3">
                          <div>
                            <div class="text-link text-sm font-medium">通义万相2.6-文生图 <span class="badge-new">NEW</span></div>
                            <p class="text-xs text-gray-600 mt-1">更自然的真实感人像，支持万能文化IP主题库</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问-Image</div>
                            <p class="text-xs text-gray-600 mt-1">通义千问系列图像生成模型，具备卓越的文本渲染能力</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问3-Coder</div>
                            <p class="text-xs text-gray-600 mt-1">基于Qwen3的代码生成模型，具有强大的Coding Agent能力</p>
                          </div>
                        </div>

                        <!-- 第四列 -->
                        <div class="space-y-3">
                          <div>
                            <div class="text-link text-sm font-medium">通义千问3-Max <span class="badge-hot">HOT</span></div>
                            <p class="text-xs text-gray-600 mt-1">达到领域SOTA水平，适配更复杂场景的智能体需求</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问-Plus</div>
                            <p class="text-xs text-gray-600 mt-1">Qwen-Plus-Latest升级 Qwen3系列</p>
                          </div>
                          <div>
                            <div class="text-link text-sm font-medium">通义千问-Flash</div>
                            <p class="text-xs text-gray-600 mt-1">Qwen3系列Flash模型，实现思考和非思考模式有效融合</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 底部服务板块 -->
                    <div class="divider"></div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      <!-- 大模型服务 -->
                      <div>
                        <div class="text-base font-semibold mb-3">大模型服务 <i class="fas fa-chevron-right ml-1 text-xs"></i></div>
                        <ul class="space-y-2 text-sm">
                          <li class="text-link">大模型服务平台百炼 - 模型体验</li>
                          <li class="text-xs text-gray-600">在线体验全尺寸、多种模态的模型效果</li>

                          <li class="text-link mt-3">大模型服务平台百炼 - 微调与部署</li>
                          <li class="text-xs text-gray-600">一站式大模型服务平台，支持界面化微调与部署</li>

                          <li class="text-link mt-3">人工智能平台 PAI</li>
                          <li class="text-xs text-gray-600">AI Native的算法工程平台，一站式完成建模、训练、推理服务部署</li>
                        </ul>
                      </div>

                      <!-- AI应用构建 -->
                      <div>
                        <div class="text-base font-semibold mb-3">AI应用构建 <i class="fas fa-chevron-right ml-1 text-xs"></i></div>
                        <ul class="space-y-2 text-sm">
                          <li class="text-link">大模型服务平台百炼-应用模版 <span class="badge-new">NEW</span></li>
                          <li class="text-xs text-gray-600">丰富多元化的应用模板和解决方案</li>

                          <li class="text-link mt-3">大模型服务平台百炼-MCP服务 <span class="badge-new">NEW</span></li>
                          <li class="text-xs text-gray-600">全生命周期MCP托管和应用服务</li>

                          <li class="text-link mt-3">大模型服务平台百炼-智能体</li>
                          <li class="text-xs text-gray-600">灵活可视化地构建企业级Agent</li>
                        </ul>
                      </div>

                      <!-- 大模型原生应用 -->
                      <div>
                        <div class="text-base font-semibold mb-3">大模型原生应用</div>
                        <ul class="space-y-2 text-sm">
                          <li class="text-link">通义灵码</li>
                          <li class="text-xs text-gray-600">智能编码助手，支持企业专属部署</li>

                          <li class="text-link mt-3">通义星尘</li>
                          <li class="text-xs text-gray-600">类人智能体数字分身创作平台</li>

                          <li class="text-link mt-3">大模型服务平台百炼 - 金妙</li>
                          <li class="text-xs text-gray-600">多模态内容创作工具，已接入DeepSeek</li>
                        </ul>
                      </div>

                      <!-- 更多应用 -->
                      <div>
                        <ul class="space-y-2 text-sm">
                          <li class="text-link">通义听悟</li>
                          <li class="text-xs text-gray-600">智能会议助手，实时转写会议记录，支持搜索定位</li>

                          <li class="text-link mt-3">通义晓蜜</li>
                          <li class="text-xs text-gray-600">智能客服平台，对话机器人、对话分析、智能外呼</li>

                          <li class="text-link mt-3">大模型服务平台百炼 - 通义法睿</li>
                          <li class="text-xs text-gray-600">法律智能助手，支持合同审查、法律咨询与检索、智能阅卷等</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
              <el-menu-item index="2">产品</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <!-- 整体布局：三列网格 -->
                <div class="grid grid-cols-12 gap-6">
                  <!-- 左侧导航栏 -->
                  <div class="col-span-12 lg:col-span-2">
                    <div class="sticky top-6">
                      <!-- 全部产品标题 -->
                      <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold">全部产品</h2>
                        <i class="fa-solid fa-angle-right text-textSecondary"></i>
                      </div>

                      <!-- 搜索框 -->
                      <div class="relative mb-6">
                        <input
                            type="text"
                            placeholder="搜索云产品"
                            class="w-full px-3 py-2 pl-8 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        >
                        <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-textTertiary"></i>
                      </div>

                      <!-- 导航菜单 -->
                      <ul class="">
                        <li class="px-3 py-2 rounded bg-primary/10 text-primary font-medium">
                          精选产品
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>计算</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>容器</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>存储</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>网络与CDN</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>安全</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>中间件</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>数据库</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>大数据计算</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>人工智能与机器学习</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light">媒体服务</li>
                        <li class="px-3 py-2 rounded hover-bg-light flex items-center justify-between">
                          <span>企业服务与云通信</span>
                          <i class="fa-solid fa-angle-right text-xs text-textSecondary"></i>
                        </li>
                        <li class="px-3 py-2 rounded hover-bg-light">域名与网站</li>
                        <li class="px-3 py-2 rounded hover-bg-light">终端用户计算</li>
                      </ul>
                    </div>
                  </div>

                  <!-- 中间产品列表区 -->
                  <div class="col-span-12 lg:col-span-8">
                    <h3 class="text-lg font-semibold mb-4">精选产品</h3>

                    <!-- 产品网格：四列布局 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                      <!-- 第一行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">云服务器 ECS</h4>
                        <p class="text-sm text-textSecondary">安全可靠、弹性可伸缩的云计算服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">域名与网站</h4>
                        <p class="text-sm text-textSecondary">提供智能易用的域名与建站服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">轻量应用服务器</h4>
                        <p class="text-sm text-textSecondary">快速构建应用程序和网站，即刻迈出上云第一步</p>
                      </div>

                      <!-- 第二行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">大模型服务平台百炼 <span class="text-primary text-xs bg-primary/10 px-1 rounded">大模型</span></h4>
                        <p class="text-sm text-textSecondary">大模型服务与应用平台</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">对象存储 OSS</h4>
                        <p class="text-sm text-textSecondary">稳定、安全、高性价比、高性能的云存储服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">通义大模型 <span class="text-primary text-xs bg-primary/10 px-1 rounded">大模型</span></h4>
                        <p class="text-sm text-textSecondary">多元化、高性能、安全可靠的大模型服务</p>
                      </div>

                      <!-- 第三行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">云数据库 RDS</h4>
                        <p class="text-sm text-textSecondary">全托管，含MySQL、PostgreSQL、SQL Server、MariaDB多引擎</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">短信服务</h4>
                        <p class="text-sm text-textSecondary">国内短信简单易用，安全可靠，秒级触达，全球覆盖200+国家和地区。</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">数字证书管理服务（原SSL证书）</h4>
                        <p class="text-sm text-textSecondary">实现全站 HTTPS，呈现可信的 Web 访问</p>
                      </div>

                      <!-- 第四行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">无影云电脑</h4>
                        <p class="text-sm text-textSecondary">随时随地安全接入的云上超级电脑</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">人工智能平台 PAI <span class="text-primary text-xs bg-primary/10 px-1 rounded">大模型</span></h4>
                        <p class="text-sm text-textSecondary">一站式AI开发、训练和推理服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">云解析 DNS</h4>
                        <p class="text-sm text-textSecondary">覆盖公网/内网、递归/权威、移动APP等全场景解析服务</p>
                      </div>

                      <!-- 第五行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">云原生数据库 PolarDB</h4>
                        <p class="text-sm text-textSecondary">100%兼容MySQL、PostgreSQL，兼容Oracle，支持集中和分布式</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">大数据开发治理平台 DataWorks</h4>
                        <p class="text-sm text-textSecondary">一站式智能数据开发治理平台</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">云防火墙</h4>
                        <p class="text-sm text-textSecondary">云原生的云上边界网络安全防护产品</p>
                      </div>

                      <!-- 第六行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">函数计算 FC</h4>
                        <p class="text-sm text-textSecondary">事件驱动Serverless计算服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">容器服务 Kubernetes 版 ACK</h4>
                        <p class="text-sm text-textSecondary">提供一站式管理容器应用的K8s服务</p>
                      </div>
                      <div class="space-y-1">
                        <h4 class="font-medium">云原生大数据计算服务 MaxCompute</h4>
                        <p class="text-sm text-textSecondary">面向分析的企业级SaaS模式云数据仓库</p>
                      </div>

                      <!-- 第七行产品 -->
                      <div class="space-y-1">
                        <h4 class="font-medium">云数据传输</h4>
                        <p class="text-sm text-textSecondary">网络带宽统一计费平台</p>
                      </div>
                    </div>
                  </div>

                  <!-- 右侧产品动态区 -->
                  <div class="col-span-12 lg:col-span-2">
                    <div class="sticky top-6">
                      <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">产品动态</h3>
                        <i class="fa-solid fa-angle-right text-textSecondary"></i>
                      </div>

                      <ul class="space-y-4">
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">云安全中心漏洞管理支持自动化修复系统漏洞</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">RDS PostgreSQL 支持PostgreSQL 18大版本</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">检索分析服务 Elasticsearch版云原生高性能引擎上线</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">访问控制限制主账号AccessKey数量至2个以内</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">IDaaS 日志事件新增用户同意条款的记录</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">MaxCompute 新增 Ubuntu操作系统自定义镜像支持</p>
                            </div>
                          </div>
                        </li>
                        <li class="text-sm">
                          <div class="flex items-start gap-2">
                            <i class="fa-solid fa-file-lines text-textTertiary mt-0.5"></i>
                            <div>
                              <p class="text-ellipsis-1">DataWorks 数据分析 SQL查询结果支持导出至OSS</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="3">解决方案</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content  flex h-screen overflow-hidden">
                <!-- 侧边栏 -->
                <div class="w-64 bg-secondary border-r border-gray-200 flex flex-col">
                  <!-- 侧边栏头部 -->
                  <div class="p-4 border-b border-gray-200">
                    <h2 class="text-lg font-bold text-textNormal flex items-center">
                      全部解决方案
                      <i class="fa-solid fa-angle-right ml-2 text-sm"></i>
                    </h2>
                    <!-- 搜索框 -->
                    <div class="mt-3 relative">
                      <input
                          type="text"
                          placeholder="搜索解决方案"
                          class="w-full px-3 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:border-primaryText"
                      >
                      <i class="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-textLight"></i>
                    </div>
                  </div>

                  <!-- 侧边栏导航 -->
                  <nav class="flex-1 overflow-y-auto py-2">
                    <ul class="space-y-1">
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm bg-primary text-primaryText rounded mx-2">
                          精选解决方案
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2 flex items-center justify-between">
                          AI
                          <i class="fa-solid fa-angle-right text-xs text-textLight"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          互联网应用开发
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          大数据
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          现代化应用
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          安全
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          网络
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          可观测
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          上云与迁云
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2 flex items-center justify-between">
                          企业出海
                          <i class="fa-solid fa-angle-right text-xs text-textLight"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-textNormal hover:bg-primary/50 rounded mx-2">
                          政企业务
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <!-- 主内容区 -->
                <div class="flex-1 overflow-y-auto p-6">
                  <!-- 解决方案网格 -->
                  <div class="grid grid-cols-5 gap-6">
                    <!-- 第一列解决方案 -->
                    <div class="space-y-6">
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal flex items-center">
                          通义千问 3 + MCP：一切皆有可能
                          <span class="ml-2 text-xs text-white bg-hotTag px-1 rounded">HOT</span>
                        </h3>
                        <p class="text-xs-desc text-textLight mt-1">支持丰富的 MCP 服务供选择,全链路工具兼容</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal flex items-center">
                          快速上手 DeepSeek-V3.2
                          <span class="ml-2 text-xs text-white bg-newTag px-1 rounded">NEW</span>
                        </h3>
                        <p class="text-xs-desc text-textLight mt-1">方案随心选,极速拥有专属 DeepSeek V3.2</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">通过 RDS 读写分离提升数据库性能</h3>
                        <p class="text-xs-desc text-textLight mt-1">将数据读写分派给不同实例执行，提升系统性能</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">RDS 与 ClickHouse 构建一站式 HTAP</h3>
                        <p class="text-xs-desc text-textLight mt-1">可视化数据同步，一站式混合事务分析处理</p>
                      </div>
                    </div>

                    <!-- 第二列解决方案 -->
                    <div class="space-y-6">
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal flex items-center">
                          快速部署 Dify，高效搭建 AI 应用
                          <span class="ml-2 text-xs text-white bg-hotTag px-1 rounded">HOT</span>
                        </h3>
                        <p class="text-xs-desc text-textLight mt-1">依托云原生高可用架构,实现Dify私有化部署</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">低代码高效构建企业门户网站</h3>
                        <p class="text-xs-desc text-textLight mt-1">以可视化方式快速构建移动和 PC 门户网站</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">RDS MySQL 迁移至 PolarDB MySQL 版</h3>
                        <p class="text-xs-desc text-textLight mt-1">更高的存储容量，更低的访问延时</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">实现 MySQL 到 ADB 秒级分析性能</h3>
                        <p class="text-xs-desc text-textLight mt-1">高度兼容 MySQL 的云原生企业级数仓服务</p>
                      </div>
                    </div>

                    <!-- 第三列解决方案 -->
                    <div class="space-y-6">
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">10 分钟在聊天系统中增加一个 AI 助手</h3>
                        <p class="text-xs-desc text-textLight mt-1">在企业官网、通讯软件中为客户提供 AI 客服</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">AI建站：用 Bolt.diy 一句话生成网站</h3>
                        <p class="text-xs-desc text-textLight mt-1">通过自然语言交互简化开发流程,全栈开发支持</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">颠覆传统 BI，用自然语言与数据对话</h3>
                        <p class="text-xs-desc text-textLight mt-1">一站式完成智能搭建、问数、解读、报告生成</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">AI 时代的分布式多模态数据处理实践</h3>
                        <p class="text-xs-desc text-textLight mt-1">对多模态数据进行分布式处理、模型离线推理</p>
                      </div>
                    </div>

                    <!-- 第四列解决方案 -->
                    <div class="space-y-6">
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">高效搭建 AI 智能体与工作流应用</h3>
                        <p class="text-xs-desc text-textLight mt-1">通过阿里云高效搭建AI应用,助力高效开发</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">10 分钟搭建微信、支付宝小程序</h3>
                        <p class="text-xs-desc text-textLight mt-1">高效部署网站，快速应用到小程序</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">利用 Redis 缓存实现极速响应</h3>
                        <p class="text-xs-desc text-textLight mt-1">利用缓存缩短系统响应时间，提升系统性能</p>
                      </div>
                      <div>
                        <h3 class="text-sm-title font-medium text-textNormal">MCP 赋能可视化 OLAP 智能体应用</h3>
                        <p class="text-xs-desc text-textLight mt-1">基于 PolarDB 快速搭建在线数据库分析 Agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="4">文档与社区</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
                  <!-- 第一列：文档与社区（主标题） -->
                  <div class="md:col-span-1 bg-aliyun-gray-100 p-6 rounded-lg">
                    <h2 class="text-lg font-bold text-aliyun-gray-900 mb-4 flex items-center">
                      文档与社区
                      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </h2>
                    <p class="text-sm text-aliyun-gray-800 leading-relaxed">
                      提供官方的技术文档、丰富的开发工具和资源；支持开发者技术交流和能力成长，与千万开发者共同探索云上创新。
                    </p>
                  </div>

                  <!-- 第二列：文档 -->
                  <div class="md:col-span-1">
                    <h3 class="text-base font-semibold mb-3">文档 ></h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800">
                      <li>云服务器 ECS</li>
                      <li>大模型服务平台百炼</li>
                      <li>容器服务 Kubernetes 版 ACK</li>
                      <li>函数计算 FC</li>
                      <li>对象存储 OSS</li>
                      <li>负载均衡 SLB</li>
                      <li>云原生数据库 PolarDB</li>
                      <li>云数据库 RDS MySQL 版</li>
                      <li>云原生大数据计算服务 MaxCompute</li>
                      <li>大数据开发治理平台 DataWorks</li>
                      <li>人工智能平台 PAI</li>
                      <li>日志服务 SLS</li>
                      <li>Web应用防火墙 WAF</li>
                      <li>云安全中心</li>
                      <li>云消息队列 MQ</li>
                      <li>域名与网站</li>
                    </ul>
                  </div>

                  <!-- 第三列：阿里云入门 + 工具和资源 -->
                  <div class="md:col-span-1">
                    <h3 class="text-base font-semibold mb-3">阿里云入门</h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800 mb-6">
                      <li>云计算主题库</li>
                      <li>企业上云第一步 Landing Zone</li>
                      <li>知识库</li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">工具和资源</h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800">
                      <li>API</li>
                      <li>SDK</li>
                      <li>镜像站</li>
                      <li>资源编排 ROS</li>
                      <li>WebIDE</li>
                      <li>运维编排</li>
                      <li>Terraform</li>
                      <li>云命令行</li>
                      <li>CLI工具</li>
                      <li>代码示例</li>
                    </ul>
                  </div>

                  <!-- 第四列：开发者社区 + 培训与认证 + 天池大赛 -->
                  <div class="md:col-span-1">
                    <h3 class="text-base font-semibold mb-3">开发者社区 ></h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800 mb-6">
                      <li>博文</li>
                      <li>问答</li>
                      <li>技术作品</li>
                      <li>视频节目</li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">培训与认证 ></h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800 mb-6">
                      <li>课程</li>
                      <li>训练营</li>
                      <li>云起实验室</li>
                      <li>阿里云认证</li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">天池大赛 ></h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800">
                      <li>AI 算法大赛</li>
                      <li>云开发大赛</li>
                      <li>入门学习赛</li>
                    </ul>
                  </div>

                  <!-- 第五列：魔搭 ModelScope + 开发者推广 -->
                  <div class="md:col-span-1">
                    <h3 class="text-base font-semibold mb-3">魔搭 ModelScope</h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800 mb-6">
                      <li>魔搭 ModelScope</li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">开发者推广</h3>
                    <ul class="text-sm space-y-2 text-aliyun-gray-800">
                      <li>云大使推荐返现计划</li>
                      <li>云大使管理平台</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="5">权益中心</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <!-- 左侧权益中心说明 -->
                  <div class="lg:col-span-1 bg-gray-50 p-5 rounded-lg">
                    <h2 class="text-lg font-bold flex items-center mb-4">
                      权益中心
                      <span class="ml-2 text-gray-600">></span>
                    </h2>
                    <p class="text-sm text-gray-600 leading-relaxed">
                      上云优选，普惠好价，为开发者和企业提供多款超值优选上云必备产品；超140款免费试用产品；初创企业最高可得100万抵用金。
                    </p>
                  </div>

                  <!-- 普惠上云 + 免费试用 -->
                  <div class="lg:col-span-1">
                    <h3 class="text-base font-semibold mb-3">普惠上云</h3>
                    <ul class="space-y-4 mb-6">
                      <li>
                        <div class="font-medium flex items-center">
                          普惠上云官方力荐
                          <span class="tag-hot ml-2">HOT</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">云服务器38元/年起，超值低价产品抢先购</p>
                      </li>
                      <li>
                        <div class="font-medium">官方推荐返现计划</div>
                        <p class="text-sm text-gray-600 mt-1">推荐新用户得奖励，单订单最高返9万</p>
                      </li>
                      <li>
                        <div class="font-medium">高校计划“云工开物”</div>
                        <p class="text-sm text-gray-600 mt-1">领300元门碰优惠券，助力高校科研与算力加速</p>
                      </li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">免费试用</h3>
                    <ul class="space-y-4">
                      <li>
                        <div class="font-medium">140+云产品 免费试用</div>
                        <p class="text-sm text-gray-600 mt-1">产品新客免费试用，最长12个月</p>
                      </li>
                      <li>
                        <div class="font-medium">AI产品 免费试用</div>
                        <p class="text-sm text-gray-600 mt-1">7000+万大模型tokens和30+款产品免费体验</p>
                      </li>
                      <li>
                        <div class="font-medium">解决方案免费试用 新老同享</div>
                        <p class="text-sm text-gray-600 mt-1">最高领取价值200元试用点，立即开启云上创新</p>
                      </li>
                    </ul>
                  </div>

                  <!-- AI特惠 -->
                  <div class="lg:col-span-1">
                    <h3 class="text-base font-semibold mb-3">AI特惠</h3>
                    <ul class="space-y-4">
                      <li>
                        <div class="font-medium">智能AI普惠权益</div>
                        <p class="text-sm text-gray-600 mt-1">至高享7000万免费tokens，加速AI应用落地</p>
                      </li>
                      <li>
                        <div class="font-medium">通义大模型，卓越性能、高性价比</div>
                        <p class="text-sm text-gray-600 mt-1">Qwen3价格直降50%起，加速AI应用落地</p>
                      </li>
                      <li>
                        <div class="font-medium">高性价比的AI算力，快速部署大模型</div>
                        <p class="text-sm text-gray-600 mt-1">丰富多样的GPU算力和PAI，构建AI应用</p>
                      </li>
                      <li>
                        <div class="font-medium">阿里云AI Stack，软硬协同、训推一体</div>
                        <p class="text-sm text-gray-600 mt-1">单机16卡 1.5TB+超大显存，开机即用</p>
                      </li>
                      <li>
                        <div class="font-medium">AI应用先锋计划</div>
                        <p class="text-sm text-gray-600 mt-1">最高享4万现金立减+1300元云和AI权益</p>
                      </li>
                      <li>
                        <div class="font-medium">AI实训营</div>
                        <p class="text-sm text-gray-600 mt-1">从基础到进阶，Agent创作者手把手教你</p>
                      </li>
                    </ul>
                  </div>

                  <!-- 企业成长 + 创新加速 -->
                  <div class="lg:col-span-1">
                    <h3 class="text-base font-semibold mb-3">企业成长</h3>
                    <ul class="space-y-4 mb-6">
                      <li>
                        <div class="font-medium">企业上云第一站</div>
                        <p class="text-sm text-gray-600 mt-1">数字化转型从这里起步</p>
                      </li>
                      <li>
                        <div class="font-medium">5亿算力补贴</div>
                        <p class="text-sm text-gray-600 mt-1">新迁入云享5亿算力补贴，助力企业数字化转型</p>
                      </li>
                      <li>
                        <div class="font-medium">中国企业出海</div>
                        <p class="text-sm text-gray-600 mt-1">最高10万元出海补贴</p>
                      </li>
                    </ul>

                    <h3 class="text-base font-semibold mb-3">创新加速</h3>
                    <ul class="space-y-4">
                      <li>
                        <div class="font-medium flex items-center">
                          上云场景组合购
                          <span class="tag-hot ml-2">HOT</span>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">覆盖90%+业务场景，专享组合折扣价</p>
                      </li>
                      <li>
                        <div class="font-medium">老友焕新 权益中心</div>
                        <p class="text-sm text-gray-600 mt-1">100+款云产品超值低价</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="6">定价</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class="grid grid-cols-1 lg:grid-cols-6 gap-8">
                  <!-- 左侧定价说明 -->
                  <div class="lg:col-span-1 bg-gray-50 p-5 rounded-lg">
                    <h2 class="text-lg font-bold flex items-center mb-4">
                      定价
                      <span class="ml-2 text-gray-600">></span>
                    </h2>
                    <p class="text-sm text-gray-600 leading-relaxed">
                      提供灵活的计费方式和清晰的计费规则，满足不同的业务场景需求；支持自助估算价格、高效采购；专业的成本管理工具，持续优化云上成本。
                    </p>
                  </div>

                  <!-- 中间功能模块 -->
                  <div class="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <!-- 产品定价 -->
                    <div>
                      <h3 class="text-base font-semibold flex items-center mb-2">
                        产品定价
                        <span class="ml-1 text-gray-600 text-sm">></span>
                      </h3>
                      <p class="text-sm text-gray-600">了解云产品的定价详情</p>
                    </div>

                    <!-- 价格计算器 -->
                    <div>
                      <h3 class="text-base font-semibold flex items-center mb-2">
                        价格计算器
                        <span class="ml-1 text-gray-600 text-sm">></span>
                      </h3>
                      <p class="text-sm text-gray-600">自助选配和估算价格</p>
                    </div>

                    <!-- 配置报价器 -->
                    <div>
                      <h3 class="text-base font-semibold flex items-center mb-2">
                        配置报价器
                        <span class="ml-1 text-gray-600 text-sm">></span>
                      </h3>
                      <p class="text-sm text-gray-600">一站式生成采购清单，支持单品或批量购买</p>
                    </div>

                    <!-- 云上成本管理 -->
                    <div>
                      <h3 class="text-base font-semibold flex items-center mb-2">
                        云上成本管理
                        <span class="ml-1 text-gray-600 text-sm">></span>
                      </h3>
                      <p class="text-sm text-gray-600">管理和优化成本</p>
                    </div>

                    <!-- 价格优势 -->
                    <div>
                      <h3 class="text-base font-semibold flex items-center mb-2">
                        价格优势
                        <span class="ml-1 text-gray-600 text-sm">></span>
                      </h3>
                      <p class="text-sm text-gray-600">推动算力普惠，释放技术红利</p>
                    </div>
                  </div>

                  <!-- 右侧优惠券模块 -->
                  <div class="lg:col-span-1 bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="text-sm font-medium mb-1">165元专属券包</div>
                    <p class="text-xs text-gray-600 mb-2">领到即享，满50减15、满180减50、满350减100</p>
                    <!-- 模拟优惠券图标（可替换为实际图片） -->
                    <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <span class="text-blue-600 text-2xl">券</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="7">云市场</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
            <div class="grid grid-cols-6 gap-8">
        <!-- 云市场板块 -->
        <div class="col-span-1">
            <h3 class="font-bold text-lg mb-4 flex items-center">
                云市场 <span class="ml-1 text-gray-400">›</span>
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
                提供与阿里云能力融合和互补的优质伙伴产品和服务，满足企业上云和各类业务应用开发需求。
            </p>
        </div>

        <!-- 精选商城板块 -->
        <div class="col-span-1">
            <h3 class="font-bold text-lg mb-4 flex items-center">
                精选商城 <span class="ml-1 text-gray-400">›</span>
            </h3>
            <ul class="text-sm space-y-2">
                <li class="text-link-hover">网站建设</li>
                <li class="text-link-hover">多端小程序</li>
                <li class="text-link-hover">Salesforce 国际版订阅</li>
                <li class="text-link-hover">Tableau 订阅</li>
                <li class="text-link-hover">Tuya 物联网平台阿里云版</li>
                <li class="text-link-hover">观测云</li>
                <li class="text-link-hover">蓝凌 OA</li>
                <li class="text-link-hover">畅捷通</li>
                <li class="text-link-hover">电子合同</li>
                <li class="text-link-hover">友盟天域</li>
                <li class="text-link-hover">AI空中课堂在线直播课堂（旗舰版）</li>

                <h4 class="font-bold mt-4 mb-2 flex items-center">
                    生态解决方案 <span class="ml-1 text-gray-400">›</span>
                </h4>
                <li class="text-link-hover">行业生态解决方案</li>
                <li class="text-link-hover">开发者生态解决方案</li>
                <li class="text-link-hover">AI开发和 AI 应用解决方案</li>
            </ul>
        </div>

        <!-- 数据与API板块 -->
        <div class="col-span-1">
            <h3 class="font-bold text-lg mb-4 flex items-center">
                数据与 API <span class="ml-1 text-gray-400">›</span>
            </h3>
            <ul class="text-sm space-y-2">
                <li class="text-link-hover">数据集</li>
                <li class="text-link-hover">手机三要素</li>
                <li class="text-link-hover">身份实名认证</li>
                <li class="text-link-hover">短信</li>
                <li class="text-link-hover">OCR 文字识别</li>
                <li class="text-link-hover">发票查验</li>
                <li class="text-link-hover">天气预报查询</li>
                <li class="text-link-hover">快递物流查询</li>

                <h4 class="font-bold mt-4 mb-2 flex items-center">
                    企业应用 <span class="ml-1 text-gray-400">›</span>
                </h4>
                <li class="text-link-hover">ERP</li>
                <li class="text-link-hover">CRM</li>
                <li class="text-link-hover">OA 办公系统</li>
                <li class="text-link-hover">财税管理</li>
                <li class="text-link-hover">400电话</li>
                <li class="text-link-hover">广告营销</li>
            </ul>
        </div>

        <!-- 基础软件板块 -->
        <div class="col-span-1">
            <h3 class="font-bold text-lg mb-4 flex items-center">
                基础软件 <span class="ml-1 text-gray-400">›</span>
            </h3>
            <ul class="text-sm space-y-2">
                <li class="text-link-hover">Windows</li>
                <li class="text-link-hover">宝塔 Linux</li>
                <li class="text-link-hover">CentOS</li>
                <li class="text-link-hover">Docker</li>
                <li class="text-link-hover">JAVA</li>
                <li class="text-link-hover">全能环境</li>
                <li class="text-link-hover">操作系统</li>
                <li class="text-link-hover">WordPress</li>
                <li class="text-link-hover">Ubuntu</li>
                <li class="text-link-hover">Red Hat</li>
                <li class="text-link-hover">SUSE</li>

                <h4 class="font-bold mt-4 mb-2 flex items-center">
                    建站小程序 <span class="ml-1 text-gray-400">›</span>
                </h4>
                <li class="text-link-hover">模板建站</li>
                <li class="text-link-hover">定制建站</li>
                <li class="text-link-hover">模板小程序</li>
                <li class="text-link-hover">定制小程序</li>
            </ul>
        </div>

        <!-- 专业服务板块 -->
        <div class="col-span-2">
            <h3 class="font-bold text-lg mb-4 flex items-center">
                专业服务 <span class="ml-1 text-gray-400">›</span>
            </h3>
            <ul class="text-sm space-y-2 grid grid-cols-2 gap-x-8">
                <li class="text-link-hover">域名</li>
                <li class="text-link-hover">商标</li>
                <li class="text-link-hover">备案</li>
                <li class="text-link-hover">公司注册</li>
                <li class="text-link-hover">上云迁移</li>
                <li class="text-link-hover">代维服务</li>

                <h4 class="font-bold mt-4 mb-2 col-span-2 flex items-center">
                    安全 <span class="ml-1 text-gray-400">›</span>
                </h4>
                <li class="text-link-hover">VPN</li>
                <li class="text-link-hover">SSL 证书</li>
                <li class="text-link-hover">堡垒机</li>
                <li class="text-link-hover">防火墙</li>
                <li class="text-link-hover">主机安全</li>

                <h4 class="font-bold mt-4 mb-2 col-span-2 flex items-center">
                    AI 应用及服务市场 <span class="ml-1 text-gray-400">›</span>
                </h4>
                <li class="text-link-hover">AI 应用</li>
                <li class="text-link-hover">大模型</li>
            </ul>
        </div>
    </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="8">合作伙伴</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
        <!-- 合作伙伴主容器 -->
            <!-- 左侧介绍栏 -->
                  <div class="md:col-span-1 bg-aliyun-gray-100 p-6 rounded-lg">
                <h2 class="text-lg font-bold mb-4 flex items-center">
                    合作伙伴
                    <span class="ml-2 text-blue-600 text-sm">›</span>
                </h2>
                <p class="text-sm text-gray-600">
                    坚持伙伴优先，为伙伴提供产品、销售和服务的商业合作模式；与伙伴紧密合作，共同为客户提供更完备的产品、更完善的服务。
                </p>
            </div>

            <!-- 成为销售伙伴 -->
                  <div class="md:col-span-1">
                <h3 class="text-base font-semibold mb-3">成为销售伙伴</h3>
                <ul class="text-sm space-y-2 mb-4">
                    <li><a href="#" class="text-link-hover">分销伙伴</a></li>
                    <li><a href="#" class="text-link-hover">集成&ISV伙伴</a></li>
                    <li><a href="#" class="text-link-hover">通用与行业 ISV 伙伴</a></li>
                    <li><a href="#" class="text-link-hover">咨询伙伴</a></li>
                </ul>
                <h3 class="text-base font-semibold mb-3">销售伙伴合作计划</h3>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="text-link-hover">无影生态合作计划</a></li>
                    <li><a href="#" class="text-link-hover">Salesforce On Alibaba Cloud Consulting Partner 合作计划</a></li>
                    <li><a href="#" class="text-link-hover">AI 大模型销售与服务生态合作计划</a></li>
                </ul>
            </div>

            <!-- 成为产品伙伴 -->
                  <div class="md:col-span-1">
                <h3 class="text-base font-semibold mb-3">成为产品伙伴</h3>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="text-link-hover">产品生态伙伴</a></li>
                    <li><a href="#" class="text-link-hover">产品生态集成认证中心</a></li>
                    <li><a href="#" class="text-link-hover">产品生态伙伴工作台</a></li>
                    <li><a href="#" class="text-link-hover">加入云市场</a></li>
                </ul>
            </div>

            <!-- 产品伙伴合作计划 & 成为服务伙伴 -->
                  <div class="md:col-span-1">
                <h3 class="text-base font-semibold mb-3">产品伙伴合作计划</h3>
                <ul class="text-sm space-y-2 mb-4">
                    <li><a href="#" class="text-link-hover">阿里云 AI 伙伴计划（繁花）</a></li>
                    <li><a href="#" class="text-link-hover">弹性计算合作计划</a></li>
                    <li><a href="#" class="text-link-hover">云存储合作计划</a></li>
                    <li><a href="#" class="text-link-hover">数据库合作计划</a></li>
                    <li><a href="#" class="text-link-hover">云网络合作计划</a></li>
                    <li><a href="#" class="text-link-hover">Salesforce On Alibaba Cloud ISV 合作计划</a></li>
                </ul>
                <h3 class="text-base font-semibold mb-3 flex items-center">
                    成为服务伙伴
                    <span class="ml-2 text-blue-600 text-sm">›</span>
                </h3>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="text-link-hover">服务生态伙伴</a></li>
                </ul>
            </div>

            <!-- 服务伙伴合作计划 -->
                  <div class="md:col-span-1">
                <h3 class="text-base font-semibold mb-3">服务伙伴合作计划</h3>
                <ul class="text-sm space-y-2 mb-4">
                    <li><a href="#" class="text-link-hover">伙伴信用分合作计划</a></li>
                </ul>
                <h3 class="text-base font-semibold mb-3">更多支持</h3>
                <ul class="text-sm space-y-2">
                    <li><a href="#" class="text-link-hover">合作伙伴培训与认证</a></li>
                    <li><a href="#" class="text-link-hover">查询合作伙伴</a></li>
                    <li><a href="#" class="text-link-hover">登录合作伙伴管理后台</a></li>
                </ul>
            </div>
    </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="9">支持与服务</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                <div class=" mx-auto px-4 py-8">
                  <!-- 支持与服务主容器 -->
                  <div class="flex flex-col md:flex-row">
                    <!-- 左侧主标题栏 -->
                    <div class="md:w-1/6 bg-gray-50 p-6 rounded-l-lg">
                      <h2 class="text-lg font-bold mb-4 flex items-center">支持与服务 <span class="text-sm">›</span></h2>
                      <p class="text-sm text-gray-600">
                        提供多样化的支持计划和专家服务，满足上云咨询、迁移上云、云上运维等场景的全链路服务需求。
                      </p>
                    </div>

                    <!-- 右侧内容列容器 -->
                    <div class="md:w-5/6 grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white rounded-r-lg">
                      <!-- 第一列：售前咨询 + 售后服务 -->
                      <div class="space-y-6">
                        <!-- 售前咨询 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>售前咨询</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">在线服务</li>
                          </ul>
                        </div>
                        <!-- 售后服务 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>售后服务</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">自助服务</li>
                            <li class="text-link-hover">在线服务</li>
                            <li class="text-link-hover">工单服务</li>
                            <li class="text-link-hover">短信专区</li>
                          </ul>
                        </div>
                      </div>

                      <!-- 第二列：企业增值服务 + 企业成长 -->
                      <div class="space-y-6">
                        <!-- 企业增值服务 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>企业增值服务</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">企业支持计划</li>
                            <li class="text-link-hover">专家技术服务</li>
                            <li class="text-link-hover">企业增值服务台</li>
                          </ul>
                        </div>
                        <!-- 企业成长 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>企业成长</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">服务实践</li>
                            <li class="text-link-hover">创新中心</li>
                          </ul>
                        </div>
                      </div>

                      <!-- 第三列：信息公告 + 我要反馈 -->
                      <div class="space-y-6">
                        <!-- 信息公告 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>信息公告</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">官网公告</li>
                            <li class="text-link-hover">健康状态</li>
                          </ul>
                        </div>
                        <!-- 我要反馈 -->
                        <div>
                           <h3 class="text-base font-semibold mb-3">>我要反馈</h3>
                           <ul class="text-sm space-y-2 mb-4">
                            <li class="text-link-hover">我要建议</li>
                            <li class="text-link-hover">我要投诉</li>
                          </ul>
                        </div>
                      </div>

                      <!-- 第四列：占位（设计图中无内容） -->
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>

          <div class="menu-item-wrapper">
            <el-menu-item index="10">了解阿里云</el-menu-item>
            <div class="menu-float">
              <div class="menu-float-content">
                  <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <!-- 第一列：了解阿里云 -->
                    <div class="md:col-span-1 bg-aliyun-gray-100 p-6 rounded-lg">
                      <h2 class="text-lg font-bold mb-4 flex items-center">
                        了解阿里云

                      </h2>
                      <p class="text-sm text-gray-600 leading-relaxed">
                        作为全球领先的全栈人工智能服务商，阿里云坚持让计算成为公共服务，助力全球客户加速价值创新。
                      </p>
                    </div>

                    <!-- 第二列：为什么选择阿里云 -->
                    <div class="lg:col-span-1">
                      <h3 class="text-lg font-semibold mb-4 flex items-center">
                        为什么选择阿里云
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                        <li><a href="#" class="link-hover">什么是云计算</a></li>
                        <li><a href="#" class="link-hover">技术领先</a></li>
                        <li><a href="#" class="link-hover">稳定可靠</a></li>
                        <li><a href="#" class="link-hover">安全合规</a></li>
                        <li><a href="#" class="link-hover">分析师报告</a></li>
                        <li><a href="#" class="link-hover">研究报告与白皮书</a></li>
                      </ul>
                    </div>

                    <!-- 第三列：市场活动 -->
                    <div class="lg:col-span-1">
                      <h3 class="text-lg font-semibold mb-4">市场活动</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                        <li><a href="#" class="link-hover">阿里云通义智能硬件展</a></li>
                        <li><a href="#" class="link-hover">阿里云中企出海大会</a></li>
                        <li><a href="#" class="link-hover">AI 智能大会</a></li>
                        <li><a href="#" class="link-hover">云栖大会</a></li>
                        <li><a href="#" class="link-hover">AI 安全全球挑战赛</a></li>
                        <li><a href="#" class="link-hover">飞天发布时刻</a></li>
                        <li><a href="#" class="link-hover">活动全景</a></li>
                      </ul>
                    </div>

                    <!-- 第四列：最佳实践 -->
                    <div class="lg:col-span-1">
                      <h3 class="text-lg font-semibold mb-4">最佳实践</h3>
                      <ul class="space-y-2 text-sm text-gray-600">
                        <li><a href="#" class="link-hover">云上春晚</a></li>
                        <li><a href="#" class="link-hover">云上奥运之旅</a></li>
                        <li><a href="#" class="link-hover">云栖战略参考</a></li>
                        <li><a href="#" class="link-hover">云上的中国</a></li>
                        <li><a href="#" class="link-hover">看见新力量</a></li>
                        <li><a href="#" class="link-hover">客户案例</a></li>
                      </ul>
                    </div>

                    <!-- 第五列：高校合作 + 加入我们 -->
                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <!-- 高校合作 -->
                      <div>
                        <h3 class="text-lg font-semibold mb-4">高校合作</h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                          <li><a href="#" class="link-hover">科研合作</a></li>
                          <li><a href="#" class="link-hover">云工开物</a></li>
                        </ul>
                      </div>

                      <!-- 加入我们 -->
                      <div>
                        <h3 class="text-lg font-semibold mb-4 flex items-center">
                          加入我们
                          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </h3>
                        <ul class="space-y-2 text-sm text-gray-600">
                          <li><a href="#" class="link-hover">校园招聘</a></li>
                          <li><a href="#" class="link-hover">社会招聘</a></li>
                          <li><a href="#" class="link-hover">Careers</a></li>
                        </ul>
                      </div>
                    </div>

                </div>
              </div>
              <button class="close-btn" @click.stop="$event.currentTarget.closest('.menu-float').style.display = 'none'">×</button>
            </div>
          </div>
        </el-menu>
      </div>
      <div class="header-actions">
        <el-input placeholder="搜索AI产品和服务" prefix-icon="el-icon-search" class="search-input"></el-input>
        <!-- 控制台和用户信息区域 -->
        <div class="user-area flex items-center gap-4">
          <router-link to="/console" class="console-link text-gray-800 hover:text-blue-600">控制台</router-link>
          <div class="user-info flex items-center gap-2 cursor-pointer">
            <el-avatar class="user-avatar" :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="username text-gray-800">371246...</span>
          </div>
          <el-button type="primary" class="register-btn">免费试用</el-button>
        </div>
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
        case '/product':
          this.activeIndex = '2';
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
        // 添加合作伙伴页面的activeIndex映射
        case '/partner':
          this.activeIndex = '8';
          break;
        // 添加支持与服务页面的activeIndex映射
        case '/service':
          this.activeIndex = '9';
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
        case '2':
          this.$router.push('/product');
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
        // 添加合作伙伴页面的路由跳转
        case '8':
          this.$router.push('/partner');
          break;
        // 添加支持与服务页面的路由跳转
        case '9':
          this.$router.push('/service');
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

<style  >

.header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
  position: relative;
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

/* 悬浮元素样式 */
.menu-wrapper {
  position: relative;
  z-index: 1001;
}

/* 菜单项包装器 */
.menu-item-wrapper {
  position: relative;
  display: inline-block;
}

/* 悬浮元素 */
.menu-float {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: 500px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  display: none;
  border: 1px solid #e8e8e8;
  animation: slideDown 0.3s ease-out;
}

/* 鼠标悬停时显示悬浮元素 */
.menu-item-wrapper:hover .menu-float {
  display: block;
}

/* 隐藏悬浮元素的类 */
.menu-float.hidden {
  display: none;
}
.hover-bg-light{
  cursor: pointer;
}
.hover-bg-light:hover{
  color: #1e88e5;

}
.space-y-1{
  cursor: pointer;
}
.space-y-1:hover{
  color: #1D5EFF;
}
/* 添加动画 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-float-content {
  flex: 1;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: #f5f5f5;
  color: #333;
}

</style>







