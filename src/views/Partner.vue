<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- 引入公共头部组件 -->
    <Header />

    <!-- 页面内容区域 -->
    <main class="flex-grow pt-20 pb-10">
      <!-- 顶部banner区域 -->
      <section class="relative bg-gradient-to-r from-white to-aliBlue-gradient py-16 px-8 md:px-16 lg:px-24" style="background:url('/src/static/img/pic_21.png') no-repeat center center; ">
        <!-- 背景装饰图占位 -->
        <div class="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img src="/src/static/img/pic_21.png" alt="背景装饰" class="w-full h-full object-cover">
        </div>

        <div class="relative max-w-7xl mx-auto">
          <h1 class="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">阿里云合作伙伴</h1>
          <p class="text-gray-600 mb-8 max-w-2xl">阿里云将以敬畏之心真诚合作，与伙伴共创数字经济时代新价值</p>
          <button class="bg-aliBlue-primary text-white px-6 py-2 rounded-sm hover:bg-blue-700 transition-colors">加入伙伴</button>
        </div>
      </section>

      <!-- 核心优势区域 -->
      <section class="bg-aliBlue-light py-12 px-8 md:px-16 lg:px-24">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 合作模式 -->
          <div class="p-4">
            <h2 class="text-aliBlue-primary font-semibold text-lg mb-4"  style="color: #086afc">分工明确的合作模式</h2>
            <p class="text-sm text-gray-700 leading-relaxed">
              阿里云将继续聚焦核心技术和通用型平台能力，行业知识和上层应用能力更多由伙伴去补齐，以清晰的边界保障伙伴利益，整合资源帮助伙伴拓客和增收，让伙伴走在前面。
            </p>
          </div>

          <!-- 权益体系 -->
          <div class="p-4">
            <h2 class="text-aliBlue-primary font-semibold text-lg mb-4"  style="color: #086afc">货真价实的权益体系</h2>
            <p class="text-sm text-gray-700 leading-relaxed">
              专项资金支持分销伙伴下沉地市，推荐集成伙伴总集，加大专业细分领域伙伴的合作规模，提升服务伙伴的履约能力，与伙伴共享商机。阿里云与合作伙伴共同以客户为中心，创造1+1 > 2的协同效应。
            </p>
          </div>

          <!-- 发展政策 -->
          <div class="p-4">
            <h2 class="text-aliBlue-primary font-semibold text-lg mb-4"  style="color: #086afc">长期稳定的发展政策</h2>
            <p class="text-sm text-gray-700 leading-relaxed">
              政策是阿里云和合作伙伴的重要纽带。在保证政策的清晰、稳定和前瞻性的同时，阿里云将引入第三方满意度调查，对合作模式、权益、政策进行及时优化，并第一时间向伙伴传递，以便伙伴提前调整和布局。
            </p>
          </div>
        </div>
      </section>
      <div class="name1">
        <div class="max-w-7xl mx-auto px-4 py-12">
          <!-- 标题区域 -->
          <div class="mb-8">
            <h1 class="text-3xl font-bold mb-4">合作伙伴类型</h1>
            <p class="text-sm text-gray-600">
              随着云计算场景和业务不断深化，阿里云与伙伴的合作模式从最早的公共云分销模式，演进到产品解决方案共创、项目合作与联合市场销售共存阶段。
            </p>
          </div>

          <!-- 内容展示区 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <!-- 左侧文字内容 -->
              <div class="w-full md:w-1/2 p-8">
                <h2 class="text-xl font-semibold mb-4">分销伙伴</h2>
                <p class="text-sm text-gray-600 mb-6">
                  具备阿里云产品咨询、销售和服务能力，与阿里云共同拓展市场，推动更多用户使用阿里云产品与服务，
                  并为客户持续提供咨询、技术支持等服务。
                </p>
                <div class="flex space-x-4">
                  <a href="#" class="text-blue-600 text-sm hover:underline">查看更多</a>
                  <a href="#" class="text-blue-600 text-sm hover:underline">管理后台</a>
                </div>
              </div>
              <!-- 右侧图片占位区 -->
              <div class="w-full md:w-1/2 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                <!-- 图片占位符，可替换为实际图片链接 -->
                <img src="/src/static/img/pic_22.png" alt="分销伙伴示意图" class="w-full h-full object-cover">
              </div>
            </div>

            <!-- 标签切换栏 -->
            <div class="flex flex-wrap border-t">
              <button class="partner-tab active px-6 py-3 text-sm font-medium focus:outline-none">分销伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">咨询伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">集成伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">通用行业与ISV伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">产品伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">服务伙伴</button>
              <button class="partner-tab px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none">云市场</button>
            </div>
          </div>
      </div>

      </div>
      <div class="name2">
        <!-- 页面容器 -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <!-- 标题区域 -->
          <div class="mb-10">
            <h2 class="text-[clamp(1.875rem,3vw,2.5rem)] font-bold mb-4">合作伙伴计划</h2>
            <p class="text-gray-600 max-w-3xl">基于各类合作伙伴的专长与合作模式，阿里云量身定制了不同的合作计划和权益体系。</p>
          </div>

          <!-- 卡片列表 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- 卡片1：Salesforce 咨询生态合作计划 -->
            <div class="card-shadow rounded-lg overflow-hidden bg-white">
              <!-- 图片占位 -->
              <div class="h-60 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <img src="/src/static/img/pic_23.png" alt="Salesforce 合作计划" class="w-full h-full object-cover">
              </div>
              <!-- 卡片内容 -->
              <div class="p-6">
                <h3 class="font-semibold text-lg mb-3">Salesforce On Alibaba Cloud 咨询生态合作计划</h3>
                <p class="text-gray-600 text-sm mb-4">
                  该计划基于Salesforce产品与生态体系，与阿里云生态体系进行融合，共同为客户提供优质的产品、咨询、规划、迁移、上云、交付等服务，从而帮助客户成功的生态合作计划。
                </p>
                <a href="#" class="text-primary text-sm flex items-center" @click="toLInk('/pages/page19')">
                  查看计划
                  <span class="ml-1 text-xs">●</span>
                </a>
              </div>
            </div>

            <!-- 卡片2：通义千问合作计划 -->
            <div class="card-shadow rounded-lg overflow-hidden bg-white">
              <!-- 图片占位 -->
              <div class="h-60 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                <img src="/src/static/img/pic_24.png"  alt="通义千问合作计划" class="w-full h-full object-cover">
              </div>
              <!-- 卡片内容 -->
              <div class="p-6">
                <h3 class="font-semibold text-lg mb-3">通义千问合作计划</h3>
                <p class="text-gray-600 text-sm mb-4">
                  阿里云面向生态开放以通义千问为代表的模型能力和训练底座，与产品生态伙伴展开在行业模型方向的MaaS（模型即服务）产品的集成与被集成的合作计划。
                </p>
                <a href="#" class="text-primary text-sm flex items-center" @click="toLInk('/pages/page19')">
                  查看计划
                  <span class="ml-1 text-xs">●</span>
                </a>
              </div>
            </div>

            <!-- 卡片3：AI大模型销售与服务生态合作计划 -->
            <div class="card-shadow rounded-lg overflow-hidden bg-white">
              <!-- 图片占位 -->
              <div class="h-60 bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center">
                <img src="/src/static/img/pic_25.png"  alt="AI大模型合作计划" class="w-full h-full object-cover">
              </div>
              <!-- 卡片内容 -->
              <div class="p-6">
                <h3 class="font-semibold text-lg mb-3">AI 大模型销售与服务生态合作计划</h3>
                <p class="text-gray-600 text-sm mb-4">
                  为鼓励具备AI大模型销售与服务能力的合作伙伴与阿里云共同拓展巨大市场，提升通义大模型调用量与市场占有率，并结合自身能力向客户提供优质服务，特制定该生态合作计划。
                </p>
                <a href="#" class="text-primary text-sm flex items-center" @click="toLInk('/pages/page19')">
                  查看计划
                  <span class="ml-1 text-xs">●</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="name3">
        <!-- 认证与培训模块 -->
        <section class="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <!-- 标题区域 -->
          <div class="mb-12">
            <h2 class="text-[clamp(1.875rem,3vw,2.5rem)] font-bold text-gray-900 mb-4">认证与培训</h2>
            <p class="text-gray-600 text-base max-w-3xl">
              阿里云面向不同能力模型的伙伴提供精准赋能认证，提升伙伴能力，共同服务好云上客户。
            </p>
          </div>

          <!-- 卡片列表区域 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 卡片1：阿里云分销生态合作伙伴认证 -->
            <div class="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">阿里云分销生态合作伙伴认证</h3>
              <p class="text-gray-600 text-sm flex-grow">
                阿里云合作伙伴APEX专业认证体系是阿里云秉承伙伴优先，面向伙伴核心岗位全新推出的培训与认证计划，旨在帮助伙伴架构师和售前人员，具备合作伙伴业务运营能力、阿里云产品与技术、售前架构、实施运维能力。
              </p>
              <div class="mt-6 text-right">
                <a href="#" class="text-blue-600 text-sm flex items-center justify-end gap-1 hover:text-blue-800">
                  <span>查看详情</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>

            <!-- 卡片2：阿里云服务生态合作伙伴认证 -->
            <div class="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <h3 class="text-lg font-semibold text-blue-600 mb-4">阿里云服务生态合作伙伴认证</h3>
              <p class="text-gray-600 text-sm flex-grow">
                阿里云合作伙伴ASE-X专业认证体系是阿里云秉承伙伴优先，面向服务生态伙伴核心岗位全新推出的培训与认证计划，旨在帮助伙伴开发、测试、交付、运维、架构师，具备合作伙伴业务运营能力、阿里云产品与技术、交付和运维的实施能力。
              </p>
              <div class="mt-6 text-right">
                <a href="#" class="text-blue-600 text-sm flex items-center justify-end gap-1 hover:text-blue-800">
                  <span>查看详情</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>

            <!-- 卡片3：产品生态集成认证中心 -->
            <div class="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">产品生态集成认证中心</h3>
              <p class="text-gray-600 text-sm flex-grow">
                阿里云产品生态集成认证是面向阿里云合作伙伴自有产品、解决方案与阿里云相关产品的兼容性、可用性的技术能力认证，获得此认证可证明伙伴的技术能力、产品应用水平已满足阿里云相关产品的适配性要求，可基于阿里云为技术底座，为用户提供可靠、有效的产品与解决方案技术服务。
              </p>
              <div class="mt-6 text-right">
                <a href="#" class="text-blue-600 text-sm flex items-center justify-end gap-1 hover:text-blue-800">
                  <span>查看详情</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="name4">
        <!-- 合作伙伴故事模块 -->
        <section class="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <!-- 标题区域 -->
          <div class="mb-12">
            <h2 class="text-[clamp(1.875rem,3vw,2.5rem)] font-bold text-gray-900 mb-2">合作伙伴故事</h2>
            <p class="text-gray-600 text-base">把握行业趋势，聆听云上故事。</p>
          </div>

          <!-- 内容展示区域 -->
          <div class="flex flex-col md:flex-row gap-8">
            <!-- 左侧故事列表 -->
            <div class="w-full md:w-1/4">
              <div class="border rounded-lg overflow-hidden">
                <div
                  v-for="story in partnerStories"
                  :key="story.id"
                  @click="selectStory(story)"
                  :class="['partner-story-item', { 'active': selectedStory.id === story.id }]"
                  class="p-5 border-b last:border-b-0 cursor-pointer transition-all duration-300"
                >
                  <div class="text-xs text-gray-400 mb-2">{{ story.issue }}</div>
                  <div class="text-base font-medium">{{ story.company }}</div>
                  <div class="text-xs text-gray-500 mt-1">{{ story.description }}</div>
                </div>
              </div>
            </div>

            <!-- 右侧视频展示区 -->
            <div class="w-full md:w-3/4">
              <div class="border rounded-lg overflow-hidden bg-gray-900">
                <!-- 视频播放区域 -->
                <div class="relative aspect-video bg-black">
                  <!-- 视频标题栏 -->
                  <div class="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4">
                    <div class="flex justify-between items-center">
                      <div class="text-white font-semibold text-sm">阿里云合作伙伴</div>
                      <div class="text-white text-xs">企业合作伙伴</div>
                    </div>
                  </div>

                  <!-- 视频内容 -->
                  <video
                    :src="selectedStory.videoUrl"
                    controls
                    class="w-full h-full object-contain"
                    poster="https://picsum.photos/seed/partner-video/1280/720"
                  ></video>

                  <!-- 视频底部信息 -->
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div class="text-white font-medium text-sm text-right">{{ selectedStory.company }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="name5">
        <div class="max-w-7xl mx-auto px-4 py-8">
          <!-- 标题区域 -->
          <h1 class="text-3xl font-bold mb-8">合作伙伴资讯</h1>

          <!-- 年份导航 -->
          <div class="mb-8 border-b pb-2">
            <a href="#" class="text-blue-600 hover:underline mr-2">2025</a>
            <a href="#" class="text-gray-500 hover:text-blue-600 hover:underline mr-2">2024</a>
            <a href="#" class="text-gray-500 hover:text-blue-600 hover:underline mr-2">2023</a>
            <a href="#" class="text-gray-500 hover:text-blue-600 hover:underline">2022</a>
          </div>

          <!-- 资讯列表 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
            <!-- 资讯条目 1 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.3.11</p>
              <p class="text-sm">万码优才联合阿里云通义千问破解"人岗错配"困局</p>
            </div>

            <!-- 资讯条目 2 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.2.7</p>
              <p class="text-sm">阿里云与麒麟软件签署全面合作协议</p>
            </div>

            <!-- 资讯条目 3 (示例高亮状态) -->
            <div class="border-b border-r border-gray-200 p-4 bg-blue-600 text-white">
              <p class="text-sm text-gray-200 mb-4">2025.1.17</p>
              <p class="text-sm">阿里云西部大区：合作伙伴客户新拓和业绩收入双增长</p>
            </div>

            <!-- 资讯条目 4 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.1.16</p>
              <p class="text-sm">阿里云华南生态：联动区域合作伙伴实现客户新拓、业绩收入双增长</p>
            </div>

            <!-- 资讯条目 5 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.1.15</p>
              <p class="text-sm">阿里云华中区合作伙伴年会成功举办，共绘数字化新蓝图</p>
            </div>

            <!-- 资讯条目 6 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.1.14</p>
              <p class="text-sm">阿里云华东合作伙伴年会成功举办，小牛云获年度最佳合作伙伴奖</p>
            </div>

            <!-- 资讯条目 7 -->
            <div class="border-b border-r border-gray-200 p-4 hover:news-item-hover transition-colors">
              <p class="text-sm text-gray-500 mb-4">2025.1.10</p>
              <p class="text-sm">阿里云华北合作伙伴年会成功举办，神州数码等获年度最佳合作伙伴奖</p>
            </div>

            <!-- 占位条目 (保持网格布局完整) -->
            <div class="border-b border-r border-gray-200 p-4"></div>
          </div>
        </div>
      </div>
      <div class="name5">
        <div class="max-w-7xl mx-auto px-4 py-8">
          <!-- 标题区域 -->
          <h1 class="text-3xl font-bold mb-8">优秀合作伙伴</h1>
          <img src="/src/static/img/bg_5.png" alt="">
        </div>
      </div>
      <div class="6">
        <div class="max-w-[1200px] mx-auto px-4 py-10">
          <!-- 主容器：两列布局 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 左侧：查询伙伴模块 -->
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h2 class="text-[24px] font-bold text-textPrimary mb-2">查询伙伴</h2>
              <p class="text-textSecondary text-14 mb-6">输入合作伙伴的公司全称可进行查询。</p>
              <button class="bg-primary text-white px-6 py-2 rounded-sm hover:bg-[#0052AA] transition-colors">
                立即查询
              </button>
            </div>

            <!-- 右侧：建议与反馈模块 -->
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h2 class="text-[24px] font-bold text-textPrimary mb-2">建议与反馈</h2>
              <p class="text-textSecondary text-14 mb-8">欢迎各位合作伙伴通过以下渠道联系我们，我们会于2-5个工作日完成评估，并向您反馈评估结果与提升计划。</p>

              <!-- 反馈渠道列表 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- 邮箱渠道 -->
                <div>
                  <h3 class="text-textPrimary font-medium mb-3">邮箱</h3>
                  <p class="text-textSecondary text-12 leading-relaxed">
                    通过阿里云合作伙伴官方服务邮箱（ACPN_Support@alibabacloud.com），反馈您的建议和问题。
                  </p>
                </div>

                <!-- 钉钉渠道 -->
                <div>
                  <h3 class="text-textPrimary font-medium mb-3">钉钉</h3>
                  <p class="text-textSecondary text-12 leading-relaxed">
                    如您已加入“阿里云合作伙伴”钉钉组织，登录钉钉，通过钉钉组织工作台上的应用“伙伴之声”反馈问题。
                  </p>
                </div>

                <!-- 专属BD渠道 -->
                <div>
                  <h3 class="text-textPrimary font-medium mb-3">专属BD</h3>
                  <p class="text-textSecondary text-12 leading-relaxed">
                    若您已经是特定级别以上的伙伴，请直接联系您的专属商务BD反馈建议。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 引入公共底部组件 -->
    <Footer />
  </div>
</template>

<script>
// 引入Header和Footer组件
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Partner',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // 合作伙伴故事列表数据
      partnerStories: [
        {
          id: 1,
          issue: '第7期',
          company: '北京某云科技有限公司',
          description: '利用云平台技术实现业务快速扩展',
          videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
          id: 2,
          issue: '第8期',
          company: '某某软件(杭州)有限公司',
          description: '与阿里云一起成长，实现业务新增长',
          videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4'
        },
        {
          id: 3,
          issue: '第9期',
          company: '众云国际技术有限公司',
          description: 'AI技术助力，为企业客户创造更大价值',
          videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_3mb.mp4'
        },
        {
          id: 4,
          issue: '第10期',
          company: '阿里云合作伙伴案例',
          description: '探索数字化转型的最佳实践',
          videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4'
        }
      ],
      // 当前选中的故事
      selectedStory: {
        id: 1,
        issue: '第7期',
        company: '北京某云科技有限公司',
        description: '利用云平台技术实现业务快速扩展',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
      }
    }
  },
  methods: {
    // 选择故事的方法
    selectStory(story) {
      this.selectedStory = story;
    },
    toLInk(link){
      window.open(link, "_blank")

    },
  }
}
</script>

<style scoped>
/* 可选：自定义标签切换的基础交互 */
.partner-tab.active {
  background-color: #f5f7fa;
  border-bottom: 2px solid #1890ff;
  color: #000;
}
.card-shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* 合作伙伴故事列表项样式 */
.partner-story-item {
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.partner-story-item:hover {
  background-color: #f5f7fa;
  transform: translateX(4px);
}

.partner-story-item.active {
  background-color: #e6f7ff;
  border-left-color: #1890ff;
  color: #1890ff;
}

.partner-story-item.active .text-base {
  font-weight: 600;
}
.content-auto {
  content-visibility: auto;
}
.news-item-hover {
  @apply bg-blue-600 text-white transition-all duration-200;
}
.content-auto {
  content-visibility: auto;
}
.text-14 {
  font-size: 14px;
}
.text-12 {
  font-size: 12px;
}
</style>
