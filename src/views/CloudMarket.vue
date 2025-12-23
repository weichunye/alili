<template>
  <div>
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <div  style="width: 100%; padding: 0 10%">
        <!-- 顶部 banner 区域 -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <!-- 左侧文字区域 -->
            <div class="w-full md:w-1/3 mb-8 md:mb-0">
                <h1 class="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 mb-4">Dify 企业版</h1>
                <p class="text-gray-600 mb-6">Dify 是一款面向组织和团队的私有部署 AI 中间件解决方案，旨在推动企业内部向 AI+ 时代转型</p>
                <button class="btn-gradient text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                    了解更多 <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <!-- 右侧图形占位区域（替代设计图中的 3D 图形） -->
            <div class="w-full md:w-2/3 h-64 md:h-80 bg-blue-50 rounded-xl flex items-center justify-center">
                <!-- 图片占位符 -->
                <div class="text-gray-400 text-center">
                    <i class="fa-solid fa-shapes text-6xl mb-2"></i>
                    <p>3D 图形/背景图占位</p>
                </div>
            </div>
        </div>

        <!-- 进度指示器（设计图中的蓝色进度条） -->
        <div class="flex w-1/4 mb-8">
            <div class="h-1 bg-blue-500 w-1/5 rounded-full"></div>
            <div class="h-1 bg-gray-200 w-4/5 rounded-full"></div>
        </div>

        <!-- 搜索区域 -->
        <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <!-- 搜索框行 -->
            <div class="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    placeholder="请输入关键词"
                    class="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                <button class="btn-gradient text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                    <i class="fa-solid fa-magnifying-glass"></i> 搜索
                </button>
                <button class="border border-purple-500 text-purple-600 px-4 py-3 rounded-md hover:bg-purple-50 transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-robot"></i> 咨询AI助理
                </button>
            </div>

            <!-- 快捷关键词行 -->
            <div class="flex flex-wrap items-center gap-3">
                <span class="text-gray-500 text-sm">搜索关键词：</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">智能客服</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">AI创作</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">数字人</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">智能分析决策</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">模型</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">自然语言处理</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">计算机视觉</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline text-sm">数据标注</a>
            </div>
        </div>
      <div class="name1">
        <div class=" mx-auto px-4 py-8">
          <!-- 页面标题 -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-blue-600">AI应用及服务市场</h1>
          </div>

          <!-- AI精品推荐区域 -->
          <div class="grid grid-cols-12 gap-6 mb-10">
            <!-- 左侧侧边栏 -->
            <div class="col-span-3 bg-gradient-ai rounded-lg p-6">
              <h2 class="text-lg font-bold mb-3">AI精品推荐</h2>
              <p class="text-sm text-gray-600 mb-4">
                覆盖智能硬件、创意设计、数字人、知识管理等全场景，为企业提供安全可靠、便捷高效、成本优化的优质AI应用。
              </p>
              <a href="#" class="text-blue-600 text-sm flex items-center">
                查看更多
                <i class="fas fa-circle text-[6px] ml-1 text-blue-600"></i>
              </a>
            </div>

            <!-- 右侧应用内容区 -->
            <div class="col-span-9 border rounded-lg">
              <!-- 标签导航栏 -->
              <div class="flex border-b">
                <div class="tab-active px-4 py-3 cursor-pointer">应用</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">工具</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">基础设施</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">模型</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">数据</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">交付</div>
              </div>

              <!-- 应用列表 -->
              <div class="grid grid-cols-3 gap-4 p-6">
                <!-- 应用1 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-language text-orange-500 text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1">智能AI翻译解决方案</h3>
                  <p class="text-xs text-gray-500">
                    适配多种硬件/场景翻译/会议记录/耳机/眼镜..
                  </p>
                </div>

                <!-- 应用2 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-file-powerpoint text-red-500 text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1">iSlide企业会员</h3>
                  <p class="text-xs text-gray-500">
                    iSlide 企业版 含52个设计辅助功能+9大资源库超千万PPT模板/素..
                  </p>
                </div>

                <!-- 应用3 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-video text-orange-500 text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1 flex items-center">
                    蝉镜
                    <span class="tag-selected">精选</span>
                  </h3>
                  <p class="text-xs text-gray-500">
                    蝉镜是蝉妈妈旗下的爆款AI内容创作平台，专注于数字人短视频生..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 行业场景化解决方案区域 -->
          <div class="grid grid-cols-12 gap-6">
            <!-- 左侧侧边栏 -->
            <div class="col-span-3 bg-gradient-ai rounded-lg p-6">
              <h2 class="text-lg font-bold mb-3">行业场景化解决方案</h2>
              <p class="text-sm text-gray-600 mb-4">
                行业场景汇聚经过严格筛选的优质AI产品与服务，覆盖行业解决方案的全方位需求，为企业提供开箱即用的AI解决方案。
              </p>
              <a href="#" class="text-blue-600 text-sm flex items-center">
                查看更多
                <i class="fas fa-circle text-[6px] ml-1 text-blue-600"></i>
              </a>
            </div>

            <!-- 右侧解决方案内容区 -->
            <div class="col-span-9 border rounded-lg">
              <!-- 标签导航栏 -->
              <div class="flex border-b">
                <div class="tab-active px-4 py-3 cursor-pointer">消费电子</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">AI教育</div>
                <div class="px-4 py-3 cursor-pointer hover:text-blue-600">企业应用</div>
              </div>

              <!-- 解决方案列表 -->
              <div class="grid grid-cols-3 gap-4 p-6">
                <!-- 方案1 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-toys text-pink-500 text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1">InciPal智能AI玩具软硬件解决方案（定制版）</h3>
                  <p class="text-xs text-gray-500">
                    InciPal 励件专注于 AI 陪伴消费硬件，融合阿里通义大模型、情感..
                  </p>
                </div>

                <!-- 方案2 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-network-wired text-orange-500 text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1 flex items-center">
                    Tuya物联网平台阿里云尊享版
                    <span class="tag-selected">精选</span>
                  </h3>
                  <p class="text-xs text-gray-500">
                    本产品是集成了设备接入、设备管理、数据安全通信、消息订阅、...
                  </p>
                </div>

                <!-- 方案3 -->
                <div class="flex flex-col">
                  <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                    <i class="fas fa-wifi text-white text-xl"></i>
                  </div>
                  <h3 class="font-medium mb-1 flex items-center">
                    IoT-RTC 设备接入服务
                    <span class="tag-selected">精选</span>
                  </h3>
                  <p class="text-xs text-gray-500">
                    针对消费类(TOC)IPC及泛IPC品类设备，按网络类型(WiFi/4G)和音..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="name2">
        <div class=" mx-auto px-4 py-8">
          <!-- 页面标题 -->
          <h1 class="text-3xl font-bold text-center text-blue-700 mb-8">丰富的产品类目助力您的业务创新</h1>

          <!-- 主内容容器 -->
          <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
            <!-- 左侧导航栏 -->
            <div class="w-full md:w-64 border-r border-gray-200 bg-white">
              <ul class="py-4">
                <li class="px-6 py-3 active-nav">数据与API</li>
                <li class="px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors">基础软件</li>
                <li class="px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors">企业应用</li>
                <li class="px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors">建站小程序</li>
              </ul>
            </div>

            <!-- 右侧内容区 -->
            <div class="flex-1 p-6">
              <!-- 顶部标签栏 -->
              <div class="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-3">
                <span class="text-blue-600 font-medium cursor-pointer">应用开发</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">身份核验与金融银行</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">车辆交通与物流</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">企业服务</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">短信与运营商</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">AI应用与OCR</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">生活服务</span>
                <span class="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">数据集</span>
              </div>

              <!-- 产品列表 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- 产品1 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="语音转文字智能识别" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">语音转文字智能识别</h3>
                  <p class="text-sm text-gray-600 line-clamp-2">中文语音文件转文字服务是基于自研智能语音识别（ASR）技术的...</p>
                </div>

                <!-- 产品2 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="网站统计 U-Web Pro/Plus" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">网站统计 U-Web Pro/Plus <span class="tag-hot">hot</span></h3>
                  <p class="text-sm text-gray-600 line-clamp-2">安全、可靠、公正的第三方网站流量统计分析工具。原CNZZ站长...</p>
                </div>

                <!-- 产品3 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="纯真全球IP网络风险API" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">纯真全球IP网络风险API</h3>
                  <p class="text-sm text-gray-600 line-clamp-2">全球IP网络风险API提供甄别网络中IP地址的机器流量、蜜罐攻击、...</p>
                </div>

                <!-- 产品4 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="经纬度解析" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">经纬度解析-经纬度地址转换-经纬度地址解析-经纬度地址查... <span class="tag-hot">hot</span></h3>
                  <p class="text-sm text-gray-600 line-clamp-2">【经纬度解析-经纬度地址转换-经纬度地址解析-经纬度地址查询-...</p>
                </div>

                <!-- 产品5 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="全球IP归属地查询" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">全球IP归属地查询-IP地址查询-IP城市查询-IP地址查询-IP城... <span class="tag-hot">hot</span></h3>
                  <p class="text-sm text-gray-600 line-clamp-2">【全球IP归属地查询-IP地址查询-IP城市查询-IP地址查询-IP城市查...</p>
                </div>

                <!-- 产品6 -->
                <div class="flex flex-col items-start">
                  <img src="https://via.placeholder.com/48x48" alt="90天短链接生成" class="w-12 h-12 mb-3">
                  <h3 class="font-medium text-base mb-2">90天短链接生成-短链接-短网址生成-短链接-短链接URL-短... <span class="tag-hot">hot</span></h3>
                  <p class="text-sm text-gray-600 line-clamp-2">【聚美出品】【90天短网址生成 访问不计费 短网址生成 短链接 短...</p>
                </div>
              </div>

              <!-- 查看更多 -->
              <div class="text-right mt-6">
                <a href="#" class="text-blue-600 text-sm flex items-center justify-end gap-1 hover:underline">
                  查看更多 <i class="fa-solid fa-chevron-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="name3">
        <div class=" mx-auto">
          <!-- 标题部分 -->
          <div class="text-center mb-8">
            <h2 class="text-[clamp(1.875rem,3vw,2.5rem)] font-bold text-gray-800">新品推荐</h2>
          </div>

          <!-- 推荐卡片网格 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- 卡片1：小义AI硬件语音模组系统板 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">小义AI硬件语音模组系统板791-A10-B2</h3>
                <p class="text-sm text-gray-500 line-clamp-2">本产品是基于阿里通义千问大语言模型完整的AI软硬...</p>
              </div>
            </div>

            <!-- 卡片2：Smartcare云管理服务 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Smartcare云管理服务（人天）</h3>
                <p class="text-sm text-gray-500 line-clamp-2">SmartCare云运维管理服务基于安畅十多年运维服务...</p>
              </div>
            </div>

            <!-- 卡片3：平凯数据库企业级运维管理平台 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">平凯数据库企业级运维管理平台【简称:TEM】V3</h3>
                <p class="text-sm text-gray-500 line-clamp-2">平凯数据库企业级运维管理平台 TEM 是一款为分布...</p>
              </div>
            </div>

            <!-- 卡片4：Kymo -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Kymo</h3>
                <p class="text-sm text-gray-500 line-clamp-2">Kymo 是基于LLM大模型的AI应用管理平台，将企...</p>
              </div>
            </div>

            <!-- 卡片5：图片OCR识别 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">图片OCR识别 <span class="text-xs bg-blue-50 text-blue-600 px-1 rounded">AI电商OCR</span></h3>
                <p class="text-sm text-gray-500 line-clamp-2">图片OCR（光学字符识别）是一款基于人工智能技术...</p>
              </div>
            </div>

            <!-- 卡片6：高德经营通-选址 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">高德经营通-选址</h3>
                <p class="text-sm text-gray-500 line-clamp-2">经营通是线下开店经营数字化服务平台。基于高德全...</p>
              </div>
            </div>

            <!-- 卡片7：Red Hat Enterprise Linux 9.6 64位 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">Red Hat Enterprise Linux 9.6 64位</h3>
                <p class="text-sm text-gray-500 line-clamp-2">Red Hat Enterprise Linux(RHEL)9.6 64位</p>
              </div>
            </div>

            <!-- 卡片8：堆友-团队版年度会员位 -->
            <div class="bg-white rounded-lg border border-card-border p-4 card-shadow flex items-start gap-3">
              <img src="https://via.placeholder.com/48x48" alt="产品图标" class="w-10 h-10 flex-shrink-0 rounded">
              <div>
                <h3 class="font-medium text-gray-800 mb-1">堆友-团队版年度会员位</h3>
                <p class="text-sm text-gray-500 line-clamp-2">堆友由阿里国际数字商业集团出品，是AI时代的一站...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'CloudMarket',
  components: {
    Header,
    Footer,

  },
}
</script>

<style scoped>
    /* 自定义工具类，匹配设计图的渐变背景 */
            .bg-gradient-dify {
                background: linear-gradient(to right, #f0f7ff, #e6f0ff);
            }
            /* 自定义按钮渐变 */
            .btn-gradient {
                background: linear-gradient(to right, #2563eb, #4f46e5);
            }
    /* 自定义背景渐变样式，匹配设计图的淡蓝色渐变 */
    .bg-gradient-ai {
      background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
    }
    /* 自定义选中标签的样式 */
    .tab-active {
      color: #0066cc;
      border-bottom: 2px solid #0066cc;
      font-weight: 500;
    }
    /* 精选标签样式 */
    .tag-selected {
      background-color: #f0f7ff;
      color: #0066cc;
      font-size: 12px;
      padding: 1px 6px;
      border-radius: 2px;
      margin-left: 4px;
    }
    .active-nav {
      @apply text-blue-600 border-b-2 border-blue-600 font-medium;
    }
    .tag-hot {
      @apply text-xs bg-orange-500 text-white px-1 rounded ml-1;
    }
    .card-shadow {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
</style>
