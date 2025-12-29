<template>
  <div class="aliyun-page ">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <!-- 顶部横幅 -->
    <header class="w-full bg-gray-900 relative">
      <div class="w-full h-[200px] md:h-[280px] overflow-hidden">
        <img src="https://picsum.photos/1920/400" alt="背景图" class="w-full h-full object-cover opacity-70">
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">Salesforce On Alibaba Cloud 咨询生态合作计划</h1>
      </div>
    </header>

    <!-- 导航标签 -->
    <nav class="w-full bg-partner-grayLight py-3 sticky top-0 z-10">
      <div class="container mx-auto flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">合作权益</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">商业模式</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">合作模式与资质要求</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">认证要求</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">专属权益</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">推荐原则</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">伙伴考核</a>
        <a href="#" class="px-3 py-1 hover:bg-partner-primary hover:text-white rounded transition">入驻流程</a>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <!-- 合作伙伴收益模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划合作伙伴收益</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <!-- 收益卡片1 -->
          <div class="bg-partner-grayLight rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <h3 class="font-semibold text-lg mb-2">提升盈利能力</h3>
            <p class="text-partner-grayMid text-sm">基于 Salesforce On Alibaba Cloud 生态拓展业务，获取更高收益分成</p>
          </div>
          <!-- 收益卡片2 -->
          <div class="bg-partner-grayLight rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-city"></i></div>
            <h3 class="font-semibold text-lg mb-2">业务市场拓展</h3>
            <p class="text-partner-grayMid text-sm">依托阿里云与 Salesforce 生态资源，拓展企业级客户市场</p>
          </div>
          <!-- 收益卡片3 -->
          <div class="bg-partner-grayLight rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-network-wired"></i></div>
            <h3 class="font-semibold text-lg mb-2">全链路赋能</h3>
            <p class="text-partner-grayMid text-sm">获取技术培训、营销支持、客户资源全链路赋能支持</p>
          </div>
        </div>
      </section>

      <!-- 商业模式模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划商业模式</h2>
        <div class="bg-partner-grayLight rounded-lg p-6 md:p-8">
          <div class="flex flex-col md:flex-row items-center justify-between mb-6">
            <div class="bg-partner-primary/10 px-4 py-2 rounded-md mb-4 md:mb-0">
              <span class="font-semibold text-primary">Salesforce On Alibaba Cloud</span>
            </div>
            <div class="text-partner-grayMid">+</div>
            <div class="bg-partner-secondary/10 px-4 py-2 rounded-md">
              <span class="font-semibold text-secondary">Alibaba Cloud Infrastructure</span>
            </div>
          </div>

          <!-- 商业模式流程图 -->
          <div class="relative py-8">
            <!-- 左侧流程 -->
            <div class="flex flex-col items-center mb-8">
              <div class="bg-partner-primary text-white px-3 py-1 rounded-md text-sm mb-2">Salesforce</div>
              <i class="fa-solid fa-arrow-down text-primary mb-2"></i>
              <div class="bg-gray-200 px-3 py-1 rounded-md text-sm mb-2">服务分润</div>
              <div class="bg-partner-orangeDark text-white px-3 py-1 rounded-md text-sm mb-2">阿里云资源分润</div>
            </div>

            <!-- 右侧流程 -->
            <div class="flex flex-col items-center">
              <div class="bg-partner-secondary text-white px-3 py-1 rounded-md text-sm mb-2">Salesforce On Alibaba Cloud 咨询生态合作计划</div>
              <i class="fa-solid fa-arrow-down text-secondary mb-2"></i>
            </div>

            <!-- 最终指向 -->
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md">
              <span class="font-semibold">最终客户P</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 合作模式与资质要求 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划合作模式与资质要求</h2>
        <div class="grid grid-cols-1 md:grid-cols-6 gap-3">
          <!-- 资质卡片 -->
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              服务商合作伙伴资质
            </div>
            <p class="text-sm text-partner-grayDark">具备独立法人资格，有固定办公场所，具备完善的企业管理制度</p>
          </div>
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              服务交付能力要求
            </div>
            <p class="text-sm text-partner-grayDark">拥有专业的 Salesforce 技术团队，具备项目交付和售后服务能力</p>
          </div>
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              Salesforce 认证要求
            </div>
            <div class="flex justify-center my-2">
              <i class="fa-solid fa-certificate text-3xl text-primary"></i>
            </div>
            <p class="text-sm text-partner-grayDark text-center">核心人员需具备指定 Salesforce 认证资质</p>
          </div>
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              合作Scope
            </div>
            <p class="text-sm text-partner-grayDark">聚焦企业级 CRM 解决方案，覆盖销售、服务、营销等场景</p>
          </div>
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              企业规模
            </div>
            <p class="text-sm text-partner-grayDark">具备一定的企业规模和行业影响力，有成熟的客户服务体系</p>
          </div>
          <div class="bg-partner-orangeLight rounded-lg p-4 col-span-1 md:col-span-1">
            <div class="bg-partner-primary text-white px-2 py-1 rounded text-sm mb-2 font-semibold">
              合作意愿
            </div>
            <p class="text-sm text-partner-grayDark">认同生态合作理念，愿意投入资源拓展 Salesforce On Alibaba Cloud 业务</p>
          </div>
        </div>
      </section>

      <!-- 认证要求模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划伙伴认证要求</h2>
        <div class="overflow-x-auto">
          <table class="w-full table-border rounded-lg">
            <thead>
            <tr class="bg-partner-grayLight">
              <th class="table-border-cell font-semibold text-left">认证维度</th>
              <th class="table-border-cell font-semibold text-left">认证类型</th>
              <th class="table-border-cell font-semibold text-left">级别</th>
              <th class="table-border-cell font-semibold text-left">数量要求</th>
            </tr>
            </thead>
            <tbody>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell" rowspan="8">专业认证</td>
              <td class="table-border-cell">Administrator</td>
              <td class="table-border-cell">初级</td>
              <td class="table-border-cell">2</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">Platform Developer I</td>
              <td class="table-border-cell">初级</td>
              <td class="table-border-cell">1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">Sales Cloud Consultant</td>
              <td class="table-border-cell">中级</td>
              <td class="table-border-cell">1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">Service Cloud Consultant</td>
              <td class="table-border-cell">中级</td>
              <td class="table-border-cell">1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">System Architect</td>
              <td class="table-border-cell">高级</td>
              <td class="table-border-cell">1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">公共云解决方案认证</td>
              <td class="table-border-cell">初级</td>
              <td class="table-border-cell">2</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">云原生工程师认证</td>
              <td class="table-border-cell">中级</td>
              <td class="table-border-cell">1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">阿里云ACP认证</td>
              <td class="table-border-cell">中级</td>
              <td class="table-border-cell">≥3</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">成单条件</td>
              <td class="table-border-cell">签订中/大额订单</td>
              <td class="table-border-cell">-</td>
              <td class="table-border-cell">>1</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">客户满意度</td>
              <td class="table-border-cell">完成项目满意度调研</td>
              <td class="table-border-cell">-</td>
              <td class="table-border-cell">≥90分</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 伙伴权益模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划伙伴权益</h2>
        <div class="overflow-x-auto">
          <table class="w-full table-border rounded-lg">
            <thead>
            <tr class="bg-partner-grayLight">
              <th class="table-border-cell font-semibold text-left">权益类型</th>
              <th class="table-border-cell font-semibold text-left">权益内容</th>
              <th class="table-border-cell font-semibold text-left">权益说明</th>
            </tr>
            </thead>
            <tbody>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell" rowspan="5">Salesforce On Alibaba Cloud 专属权益</td>
              <td class="table-border-cell">资源支持</td>
              <td class="table-border-cell">获取阿里云与 Salesforce 联合营销资源、客户线索推荐</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">技术支持</td>
              <td class="table-border-cell">专属技术对接群、产品培训、解决方案支持</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">赋能支持</td>
              <td class="table-border-cell">产品认证培训、项目交付指导、最佳实践分享</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">市场支持</td>
              <td class="table-border-cell">联合品牌推广、行业展会参展、案例包装传播</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="table-border-cell">收益支持</td>
              <td class="table-border-cell">阶梯式收益分成、项目奖励、年度返点</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 推荐原则模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划伙伴推荐原则</h2>

        <!-- 原则1 -->
        <div class="bg-partner-grayLight rounded-lg p-6 mb-6">
          <div class="flex items-center mb-4">
            <div class="bg-partner-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span class="font-bold">1</span>
            </div>
            <h3 class="font-semibold text-lg">客户适配优先</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">客户选择维度</h4>
              <p class="text-sm text-partner-grayMid">聚焦中大型企业客户，优先选择有数字化转型需求、CRM 建设规划的企业</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">实际匹配的方式</h4>
              <p class="text-sm text-partner-grayMid">基于客户行业、规模、业务场景匹配最优合作伙伴，确保交付质量</p>
            </div>
          </div>
        </div>

        <!-- 原则2 -->
        <div class="bg-partner-grayLight rounded-lg p-6 mb-6">
          <div class="flex items-center mb-4">
            <div class="bg-partner-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span class="font-bold">2</span>
            </div>
            <h3 class="font-semibold text-lg">能力优先原则</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">能力评估维度</h4>
              <p class="text-sm text-partner-grayMid">评估合作伙伴的技术能力、项目交付能力、行业经验、服务口碑</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">能力评级的方式</h4>
              <p class="text-sm text-partner-grayMid">基于认证数量、项目案例、客户评价进行能力分级，优先推荐高等级伙伴</p>
            </div>
          </div>
        </div>

        <!-- 原则3 -->
        <div class="bg-partner-grayLight rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-partner-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span class="font-bold">3</span>
            </div>
            <h3 class="font-semibold text-lg">属地化优先</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">客户属地维度</h4>
              <p class="text-sm text-partner-grayMid">优先推荐客户所在地的合作伙伴，便于本地化服务和快速响应</p>
            </div>
            <div class="bg-white p-4 rounded shadow-sm">
              <h4 class="font-medium mb-2 text-primary">实际匹配的方式</h4>
              <p class="text-sm text-partner-grayMid">结合伙伴的服务区域覆盖范围，匹配属地客户需求，提升服务效率</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 伙伴考核模块 -->
      <section class="mb-12">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-6 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划伙伴考核</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-partner-primary/10 rounded-lg p-5 text-center">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-chart-line"></i></div>
            <h3 class="font-semibold mb-2">业务指标</h3>
            <p class="text-sm text-partner-grayMid">年度成单金额、客户数量、项目交付量</p>
          </div>
          <div class="bg-partner-primary/10 rounded-lg p-5 text-center">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-user-check"></i></div>
            <h3 class="font-semibold mb-2">能力认证</h3>
            <p class="text-sm text-partner-grayMid">认证人员数量、技能提升、新认证获取</p>
          </div>
          <div class="bg-partner-primary/10 rounded-lg p-5 text-center">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-star"></i></div>
            <h3 class="font-semibold mb-2">服务质量</h3>
            <p class="text-sm text-partner-grayMid">客户满意度、项目交付周期、售后响应速度</p>
          </div>
          <div class="bg-partner-primary/10 rounded-lg p-5 text-center">
            <div class="text-primary text-3xl mb-3"><i class="fa-solid fa-handshake"></i></div>
            <h3 class="font-semibold mb-2">生态合作</h3>
            <p class="text-sm text-partner-grayMid">联合营销、案例共建、生态贡献度</p>
          </div>
        </div>
      </section>

      <!-- 入驻流程模块 -->
      <section class="mb-8">
        <h2 class="text-[clamp(1.25rem,2vw,1.75rem)] font-bold mb-8 text-center">Salesforce On Alibaba Cloud 咨询生态合作计划入驻流程</h2>

        <!-- 流程1 -->
        <div class="relative py-8">
          <div class="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div class="flex justify-between relative z-10">
            <div class="flex flex-col items-center w-1/5">
              <div class="w-10 h-10 bg-partner-primary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-file-invoice"></i>
              </div>
              <p class="text-sm font-medium text-center">提交资质审核</p>
            </div>
            <div class="flex flex-col items-center w-1/5">
              <div class="w-10 h-10 bg-partner-primary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-user-gear"></i>
              </div>
              <p class="text-sm font-medium text-center">企业实力认证</p>
            </div>
            <div class="flex flex-col items-center w-1/5">
              <div class="w-10 h-10 bg-partner-primary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-id-card"></i>
              </div>
              <p class="text-sm font-medium text-center">提交授权人证明</p>
            </div>
            <div class="flex flex-col items-center w-1/5">
              <div class="w-10 h-10 bg-partner-primary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <p class="text-sm font-medium text-center">签署合作协议</p>
            </div>
            <div class="flex flex-col items-center w-1/5">
              <div class="w-10 h-10 bg-partner-primary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <p class="text-sm font-medium text-center">成为认证服务商</p>
            </div>
          </div>
        </div>

        <!-- 流程2 -->
        <div class="relative py-8 mt-4">
          <div class="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div class="flex justify-between relative z-10">
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-handshake-angle"></i>
              </div>
              <p class="text-xs font-medium text-center">咨询团队介入合作</p>
            </div>
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-list-check"></i>
              </div>
              <p class="text-xs font-medium text-center">梳理合作准入规范</p>
            </div>
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-file-signature"></i>
              </div>
              <p class="text-xs font-medium text-center">提交合作申请</p>
            </div>
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-clipboard-check"></i>
              </div>
              <p class="text-xs font-medium text-center">签署合作协议</p>
            </div>
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <p class="text-xs font-medium text-center">成为合作伙伴</p>
            </div>
            <div class="flex flex-col items-center w-1/6">
              <div class="w-10 h-10 bg-partner-secondary rounded-full flex items-center justify-center text-white mb-2">
                <i class="fa-solid fa-rocket"></i>
              </div>
              <p class="text-xs font-medium text-center">业务正式启动</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import ProductCardSet from '../../components/ProductCardSet.vue'

export default {
  name: 'AliyunPage',
  components: {
    Header,
    Footer,
    ProductCardSet
  },
  data() {
    return {
      activeMenu: '4-1-3',
      activeIndex: '1',
    }
  },
  methods: {

    handleMenuSelect(index) {
      this.activeMenu = index
      console.log('选中的菜单：', index)
    }
  }
}
</script>

<style scoped>
.aliyun-page {
  margin: 0 auto;
  font-family: "Microsoft Yahei", sans-serif;
  color: #333;
}
.your-bg-class {
  /* 淡蓝半透明到全透明（搭配白色底色） */
  background: linear-gradient(to right, rgba(224, 247, 255, 0.8), rgba(255, 255, 255, 0));
  background-color: #ffffff; /* 底色兜底 */
}
.left{
  float: left;
  width: 400px;
  background-color: #f5f7fa;
  border-radius: 4px;
  padding: 16px 0;
}
.right{
  padding: 20px 50px;
  margin-left: 20px;
  float: left;
  width: calc(100% - 420px);
  background: #fff;
  border-radius: 4px;
}  .text-primary-title {
     font-size: clamp(1.5rem, 3vw, 2.25rem);
     font-weight: 700;
     color: #1f2937;
   }
.text-secondary-info {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #4b5563;
  line-height: 1.6;
}
.bg-card-light {
  background-color: #f9fafb;
}
.btn-deploy {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}
.btn-deploy:hover {
  background-color: #1d4ed8;
}
</style>


