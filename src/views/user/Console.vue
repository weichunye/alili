<template>
  <div class="min-h-screen" style="background: #F7F9FA">
    <!-- 引入个人中心Header组件 -->
    <PersonalCenterHeader />

    <!-- 控制台页面内容区域 -->
    <main class="py-16 px-4">
      <div class="flex h-[calc(100vh-48px)]">


        <!-- 主内容区域 -->
        <main class="flex-1 overflow-auto scrollbar-thin" style="width: 100%; padding: 0 10%">
          <!-- 二级导航 -->
          <div class="border-b border-ali-gray px-6">
            <div class="flex items-center h-10">
              <div class="flex space-x-6 text-sm">
                <span
                  @click="activeTab = 'overview'"
                  :class="{ 'text-ali-blue border-b-2 border-ali-blue pb-1 font-medium': activeTab === 'overview', 'text-ali-gray-dark hover:text-ali-text cursor-pointer': activeTab !== 'overview' }"
                >概览</span>
                <span
                  @click="activeTab = 'monitoring'"
                  :class="{ 'text-ali-blue border-b-2 border-ali-blue pb-1 font-medium': activeTab === 'monitoring', 'text-ali-gray-dark hover:text-ali-text cursor-pointer': activeTab !== 'monitoring' }"
                >运维监控</span>
                <span
                  @click="activeTab = 'security'"
                  :class="{ 'text-ali-blue border-b-2 border-ali-blue pb-1 font-medium': activeTab === 'security', 'text-ali-gray-dark hover:text-ali-text cursor-pointer': activeTab !== 'security' }"
                >安全与合规</span>
                <span
                  @click="activeTab = 'cost'"
                  :class="{ 'text-ali-blue border-b-2 border-ali-blue pb-1 font-medium': activeTab === 'cost', 'text-ali-gray-dark hover:text-ali-text cursor-pointer': activeTab !== 'cost' }"
                >费用与成本</span>
                <span
                  @click="activeTab = 'benefits'"
                  :class="{ 'text-ali-blue border-b-2 border-ali-blue pb-1 font-medium': activeTab === 'benefits', 'text-ali-gray-dark hover:text-ali-text cursor-pointer': activeTab !== 'benefits' }"
                >我的权益</span>
              </div>
              <div class="ml-auto text-sm text-ali-gray-dark">
                <i class="fa fa-reply mr-1"></i>
                <span>使用旧版</span>
              </div>
            </div>
          </div>

          <!-- 内容容器 -->
          <div v-if="activeTab === 'overview'" class="name1">
     <div class="flex p-6 gap-6">
            <!-- 左侧内容区 -->
            <div class="flex-1">
              <!-- 最近访问模块 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray flex justify-between items-center">
                  <span class="font-medium">最近访问</span>
                  <span class="text-xs text-ali-gray-dark">暂无最近访问</span>
                </div>
              </div>

              <!-- 产品目录视图模块 -->
              <div class="border border-ali-gray rounded">
                <!-- 模块头部 -->
                <div class="px-4 py-3 border-b border-ali-gray flex items-center">
                  <span class="font-medium mr-4">产品目录视图</span>
                  <span class="text-sm text-ali-gray-dark">资源列表视图</span>
                </div>

                <!-- 筛选栏 -->
                <div class="px-4 py-3 border-b border-ali-gray flex flex-wrap items-center gap-4 text-sm">
                  <div class="flex items-center">
                    <span class="inline-flex items-center justify-center w-6 h-6 rounded bg-ali-blue text-white mr-2">1</span>
                    <span>全球</span>
                  </div>
                  <select class="border border-ali-gray rounded h-8 px-2 text-sm focus:outline-none focus:border-ali-blue">
                    <option>请选择资源标签</option>
                  </select>
                  <select class="border border-ali-gray rounded h-8 px-2 text-sm focus:outline-none focus:border-ali-blue">
                    <option>请选择资源组</option>
                  </select>
                  <select class="border border-ali-gray rounded h-8 px-2 text-sm focus:outline-none focus:border-ali-blue">
                    <option>请选择产品类目</option>
                  </select>
                  <button class="border border-ali-gray rounded h-8 px-3 text-sm bg-white hover:bg-ali-gray-light transition">
                    推荐排序
                  </button>
                  <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="mr-2">
                    <span>查看所有阿里云产品</span>
                  </label>
                </div>

                <!-- 产品内容区 -->
                <div class="px-4 py-3">
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 rounded bg-ali-blue text-white flex items-center justify-center mr-2">
                      <i class="fa fa-building-o text-xs"></i>
                    </div>
                    <span>企业服务与云通信</span>
                  </div>

                  <div class="ml-8 mb-3">
                    <div class="flex items-center">
                      <span class="text-ali-gray-dark">阿里邮箱</span>
                      <span class="ml-2">></span>
                      <div class="ml-2 text-ali-gray-dark">- 0</div>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="w-6 h-6 rounded bg-blue-50 text-blue-500 flex items-center justify-center mr-2">
                      <i class="fa fa-refresh text-xs"></i>
                    </div>
                    <span>迁移与运维管理</span>
                  </div>

                  <div class="ml-8">
                    <div class="flex items-center">
                      <span class="text-ali-gray-dark">访问控制 RAM</span>
                      <span class="ml-2">></span>
                      <div class="ml-2 text-ali-gray-dark">1 角色</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧信息卡片区 -->
            <div class="w-80">
              <!-- 我的账号卡片 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray font-medium">我的账号</div>
                <div class="px-4 py-3">
                  <div class="flex items-center mb-2">
                    <img src="https://picsum.photos/32/32" alt="头像" class="w-8 h-8 rounded-full mr-2">
                    <div>
                      <div class="text-sm">3712****@qq.com</div>
                      <div class="text-xs text-ali-gray-dark">账号ID: 18038985411992</div>
                    </div>
                    <i class="fa fa-angle-right ml-auto text-ali-gray-dark"></i>
                  </div>
                  <div class="flex items-center text-xs text-ali-gray-dark">
                    <span class="bg-blue-50 text-blue-600 px-2 py-0.5 rounded mr-2">主账号</span>
                    <span class="bg-green-50 text-green-600 px-2 py-0.5 rounded">企业认证</span>
                  </div>
                </div>
              </div>

              <!-- 运维监控卡片 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray font-medium flex justify-between">
                  <span>运维监控</span>
                  <i class="fa fa-angle-right text-ali-gray-dark"></i>
                </div>
                <div class="px-4 py-3">
                  <div class="flex items-center justify-between text-sm mb-2">
                    <span>云运维健康状态</span>
                    <span class="text-ali-gray-dark text-xs">查看详情</span>
                  </div>
                  <div class="flex items-center mb-4">
                    <span class="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    <span class="text-sm">暂未开通</span>
                    <div class="ml-auto">
                      <button class="bg-ali-blue text-white text-xs px-3 py-1 rounded">立即开通使用</button>
                    </div>
                  </div>
                  <div class="text-xs text-ali-gray-dark">
                    实时展示各个云产品的可用性、性能等问题
                  </div>
                </div>
              </div>

              <!-- 监控告警卡片 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray font-medium">监控告警</div>
                <div class="px-4 py-3">
                  <div class="flex justify-between text-sm mb-2">
                    <span>正在报警</span>
                    <span class="text-red-500">0</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span>产品监控事件</span>
                    <span class="text-ali-gray-dark">0</span>
                  </div>
                </div>
              </div>

              <!-- 诊断工具推荐卡片 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray font-medium">诊断工具推荐</div>
                <div class="px-4 py-3 flex justify-between text-sm">
                  <span>NAT网关全方位</span>
                  <button class="text-ali-blue text-xs border border-ali-blue px-2 py-0.5 rounded">一键诊断</button>
                </div>
                <div class="px-4 py-3 flex justify-between text-sm border-t border-ali-gray">
                  <span>Polardb 资源异常</span>
                  <button class="text-ali-blue text-xs border border-ali-blue px-2 py-0.5 rounded">场景诊断</button>
                </div>
              </div>

              <!-- 费用成本卡片 -->
              <div class="border border-ali-gray rounded mb-6">
                <div class="px-4 py-3 border-b border-ali-gray font-medium flex justify-between">
                  <span>费用成本</span>
                  <i class="fa fa-angle-right text-ali-gray-dark"></i>
                </div>
                <div class="px-4 py-2 border-b border-ali-gray flex justify-between text-sm">
                  <span>资产账户</span>
                  <div class="flex space-x-3">
                    <button class="text-ali-blue text-xs">充值汇款</button>
                    <button class="text-ali-blue text-xs">开票</button>
                  </div>
                </div>
                <div class="px-4 py-2 border-b border-ali-gray flex justify-between text-sm">
                  <span>可用额度</span>
                  <div class="flex items-center">
                    <span class="text-ali-gray-dark">★★★★</span>
                    <i class="fa fa-angle-right ml-2 text-ali-gray-dark text-xs"></i>
                  </div>
                </div>
                <div class="px-4 py-2 border-b border-ali-gray flex justify-between text-sm">
                  <span>节省计划</span>
                  <div class="flex items-center">
                    <span class="text-ali-gray-dark">0</span>
                    <span class="text-ali-blue text-xs ml-2">资源包</span>
                    <span class="text-ali-gray-dark">0</span>
                  </div>
                </div>
                <div class="px-4 py-2 border-b border-ali-gray flex justify-between text-sm">
                  <span>我的待办</span>
                  <div class="flex items-center">
                    <span class="text-ali-gray-dark">0</span>
                    <span class="text-ali-gray-dark ml-2">待支付订单</span>
                    <span class="text-ali-gray-dark ml-1">0</span>
                  </div>
                </div>
                <div class="px-4 py-2 text-xs text-ali-gray-dark">
                  费用与成本 &nbsp; 更新时间: 2025-12-23 15:33
                </div>
                <div class="px-4 py-2 flex justify-between text-sm">
                  <span>本月待缴金额</span>
                  <span class="text-ali-gray-dark">¥0.00</span>
                </div>
                <div class="px-4 py-2 flex justify-between text-sm">
                  <span>本月成本</span>
                  <span class="text-ali-gray-dark">¥0.00</span>
                </div>
                <div class="px-4 py-2 flex justify-between text-sm">
                  <span>月末成本预测</span>
                  <span class="text-ali-gray-dark">¥0.00</span>
                </div>
              </div>

              <!-- 我的权益卡片 -->
              <div class="border border-ali-gray rounded">
                <div class="px-4 py-3 border-b border-ali-gray font-medium">我的权益</div>
                <div class="px-4 py-3 flex justify-between text-sm">
                  <span>可用优惠券</span>
                  <span class="text-ali-gray-dark">0</span>
                </div>
                <div class="px-4 py-3 flex justify-between text-sm">
                  <span>试用中产品</span>
                  <span class="text-ali-gray-dark">0</span>
                </div>
              </div>
            </div>
          </div>
           </div>
           <div v-if="activeTab === 'monitoring'" class="name2 p-6">

             <div class=" mx-auto ">
               <!-- 主容器 -->
               <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                 <!-- 左侧列：云平台稳定性 + 云资源健康状态 + 云服务诊断 -->
                 <div class="md:col-span-2 space-y-4 md:space-y-6">
                   <!-- 顶部卡片区域 -->
                   <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     <!-- 云平台稳定性卡片 -->
                     <div class="md:col-span-2 border border-light-gray rounded-lg p-5">
                       <h3 class="text-lg font-medium mb-4">云平台稳定性</h3>
                       <div class="flex items-center mb-4 text-sm text-gray-600">
                         <i class="fas fa-info-circle text-link-blue mr-2"></i>
                         <span>云资源健康状态实时展示每个实例的可用性</span>
                         <a href="#" class="text-link-blue ml-2">免费开通使用</a>
                       </div>
                       <div class="grid grid-cols-2 gap-4">
                         <div class="flex items-center">
                           <span class="text-gray-600 mr-2">云资源健康状态</span>
                           <i class="fas fa-question-circle text-gray-400 text-xs cursor-help"></i>
                           <span class="ml-2">-</span>
                         </div>
                         <div class="flex items-center">
                           <span class="text-gray-600 mr-2">当前服务事件</span>
                           <i class="fas fa-question-circle text-gray-400 text-xs cursor-help"></i>
                           <span class="ml-2">0</span>
                         </div>
                       </div>
                     </div>

                     <!-- 系统稳定性卡片 -->
                     <div class="border border-light-gray rounded-lg p-5">
                       <h3 class="text-lg font-medium mb-4 flex items-center">
                         系统稳定性
                         <i class="fas fa-question-circle text-gray-400 text-xs ml-2 cursor-help"></i>
                       </h3>
                       <p class="text-sm text-gray-600 mb-3">资源事件</p>
                       <div class="flex justify-between items-center">
                         <div class="flex items-center">
                           <span class="text-red-severe text-xl font-medium">0</span>
                           <span class="text-gray-600 ml-2">严重</span>
                         </div>
                         <div class="flex items-center">
                           <span class="text-orange-warning text-xl font-medium">0</span>
                           <span class="text-gray-600 ml-2">警告</span>
                         </div>
                         <div class="flex items-center">
                           <span class="text-gray-info text-xl font-medium">0</span>
                           <span class="text-gray-600 ml-2">信息</span>
                         </div>
                       </div>
                     </div>
                   </div>

                   <!-- 云资源健康状态区域 -->
                   <div class="border border-light-gray rounded-lg p-5">
                     <div class="flex items-center mb-6">
                       <h3 class="text-lg font-medium mr-3">云资源健康状态</h3>
                       <div class="flex items-center text-link-blue cursor-pointer">
                         <span>切换</span>
                         <i class="fas fa-chevron-down text-xs ml-1"></i>
                       </div>
                     </div>

                     <!-- 云服务诊断模块 -->
                     <div class="bg-light-blue rounded-lg p-5 border border-light-gray">
                       <div class="flex items-center mb-3">
                         <i class="fas fa-info-circle text-link-blue mr-2"></i>
                         <span class="text-gray-800 font-medium">暂未开通</span>
                       </div>
                       <p class="text-sm text-gray-600 mb-4">
                         开通云服务诊断不会收取费用。阿里云会创建名为 AliyunServiceRoleForHealth 的角色，访问您的云上资源信息，快速诊断排查问题。
                       </p>
                       <button class="bg-link-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                         免费开通
                       </button>
                     </div>
                   </div>
                 </div>

                 <!-- 右侧列：系统稳定性 + 云服务诊断 + 稳定性风险 + 支持与服务 + 公告列表 -->
                 <div class="space-y-4 md:space-y-6">
                   <!-- 云服务诊断（右侧） -->
                   <div class="bg-white rounded-lg p-4 md:p-6 card-shadow">
                     <div class="flex items-center justify-between mb-4">
                       <h2 class="text-lg font-medium">云服务诊断</h2>
                       <button class="btn-outline text-sm px-2 py-0.5">
                         <i class="fa fa-plus mr-1"></i> 创建诊断
                       </button>
                     </div>
                     <div class="text-xs text-gray-500 mb-3">
                       <i class="fa fa-info-circle mr-1 text-primary"></i>
                       快速排查网络、配置、性能、安全等问题，帮您修复建议及
                       <span class="text-primary text-link ml-1">恢复业务</span>
                       <span class="text-primary text-link ml-1">免费开通使用</span>
                     </div>

                     <div class="mb-4">
                       <p class="text-sm font-medium mb-2">大家常用</p>
                       <div class="grid grid-cols-2 gap-2 text-sm">
                         <div class="text-link">ECS远程无法访问</div>
                         <div class="text-link">网络丢包通性</div>
                         <div class="text-link">ECS实例安全风险</div>
                         <div class="text-link">轻量应用服务器远程无法</div>
                         <div class="text-link">容器服务 ACK ingress 异常</div>
                         <div class="text-link">传统型负载均衡全方位</div>
                       </div>
                     </div>
                   </div>

                   <!-- 稳定性风险 -->
                   <div class="bg-white rounded-lg p-4 md:p-6 card-shadow">
                     <div class="flex items-center justify-between mb-4">
                       <h2 class="text-lg font-medium">稳定性风险</h2>
                     </div>
                     <div class="text-xs text-gray-500 mb-3">
                       基于云直采架构（Well-Architected）方法和阿里云技术专属服务经
                       理（AM）的最佳实践，对您丰富的应用进行风险发现和提前解
                       决。
                       <span class="text-primary text-link ml-1 block mt-1">暂未开通</span>
                     </div>
                     <button class="btn-primary w-full">
                       立即开通
                     </button>
                   </div>

                   <!-- 支持与服务 -->
                   <div class="bg-white rounded-lg p-4 md:p-6 card-shadow">
                     <h2 class="text-lg font-medium mb-4">支持与服务</h2>
                     <div class="grid grid-cols-2 gap-4 mb-4">
                       <div class="text-link">
                         <i class="fa fa-book mr-1"></i> 帮助文档
                         <p class="text-xs text-gray-500 mt-1">提供产品介绍、使用指导、最
                           佳实践等全量详尽的产品文档</p>
                       </div>
                       <div class="text-link">
                         <i class="fa fa-robot mr-1"></i> 智能答疑
                         <p class="text-xs text-gray-500 mt-1">智能诊断、智能解答，为您推
                           荐更匹配的人工服务</p>
                       </div>
                       <div class="text-link">
                         <i class="fa fa-wrench mr-1"></i> 技术工单
                         <p class="text-xs text-gray-500 mt-1">排障、故障排查等技术支持</p>
                       </div>
                       <div class="text-link">
                         <i class="fa fa-phone mr-1"></i> 咨询电话
                         <p class="text-xs text-gray-500 mt-1">售后咨询: 4008013260-2
                           <br>售前咨询: 4008013260-3</p>
                       </div>
                     </div>
                   </div>

                   <!-- 公告列表 -->
                   <div class="bg-white rounded-lg p-4 md:p-6 card-shadow">
                     <h2 class="text-lg font-medium mb-3">公告列表</h2>
                     <div class="flex border-b border-gray-200 pb-2 mb-3">
                       <span class="text-primary font-medium mr-3 cursor-pointer">全部</span>
                       <span class="text-gray-500 mr-3 cursor-pointer hover:text-primary">管家公告</span>
                       <span class="text-gray-500 mr-3 cursor-pointer hover:text-primary">升级公告</span>
                       <span class="text-gray-500 mr-3 cursor-pointer hover:text-primary">安全公告</span>
                       <span class="text-gray-500 cursor-pointer hover:text-primary">其他</span>
                     </div>
                     <div class="space-y-2 text-sm">
                       <div class="text-link">
                         Salesforce on Alibaba Cloud关于"Use Any API Client"权限行为变更...
                         <span class="block text-xs text-gray-500 mt-0.5">2025-12-23</span>
                       </div>
                       <div class="text-link">
                         公共云资源包未使用金额退款已期限长
                         <span class="block text-xs text-gray-500 mt-0.5">2025-12-23</span>
                       </div>
                       <div class="text-link">
                         文件存储CPFS服务等级协议变更通知
                         <span class="block text-xs text-gray-500 mt-0.5">2025-12-23</span>
                       </div>
                     </div>
                     <div class="text-primary text-sm text-link mt-2">查看更多</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
            <div v-if="activeTab === 'security'" class="name3 p-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <!-- 安全评分区域 -->
              <div  class="md:col-span-2 space-y-4 md:space-y-6">
                <div class="bg-white rounded-lg p-6 card-shadow mb-4">
                  <div class="flex flex-col md:flex-row md:items-center justify-between">
                    <!-- 左侧评分 -->
                    <div class="flex items-center mb-4 md:mb-0">
                      <h2 class="text-xl font-medium mr-2">安全评分</h2>
                      <span class="text-[60px] font-bold text-primary">100</span>
                      <div class="ml-4 text-secondary text-sm">
                        <p>较昨日: 无变化，高于90%的用户，请继续保持。</p>
                      </div>
                    </div>

                    <!-- 右侧链接 -->
                    <div class="text-right">
                      <a href="#" class="text-blueLink text-sm mr-2">自定义安全评分</a>
                      <a href="#" class="text-blueLink text-sm">安全评分说明</a>
                    </div>
                  </div>

                  <!-- 评分指标 -->
                  <div class="flex items-center mt-6 border-t border-borderColor pt-4">
                    <div class="flex items-center mr-8">
                    <span class="icon-circle bg-green-100 text-green-500 mr-2">
                        <i class="fa fa-check text-xs"></i>
                    </span>
                      <span class="text-secondary text-sm mr-2">已修复漏洞</span>
                      <span class="text-xl font-medium">0</span>
                    </div>
                    <div class="flex items-center mr-8">
                    <span class="icon-circle bg-gray-100 text-gray-500 mr-2">
                        <i class="fa fa-shield text-xs"></i>
                    </span>
                      <span class="text-secondary text-sm mr-2">已修复基线风险</span>
                      <span class="text-xl font-medium">0</span>
                    </div>
                    <div class="flex items-center">
                    <span class="icon-circle bg-gray-100 text-gray-500 mr-2">
                        <i class="fa fa-comment text-xs"></i>
                    </span>
                      <span class="text-secondary text-sm mr-2">已处理告警</span>
                      <span class="text-xl font-medium">0</span>
                    </div>
                  </div>
                </div>
                <!-- 安全运营区域 -->
                <div class="bg-white rounded-lg p-6 card-shadow">
                  <h2 class="text-xl font-medium mb-6">安全运营</h2>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- 风险治理卡片 -->
                    <div class="border border-borderColor rounded-lg p-5 flex flex-col h-full">
                      <div class="flex justify-between items-center mb-8">
                        <div class="flex items-center">
                          <i class="fa fa-exclamation-triangle text-yellow-500 mr-2"></i>
                          <span class="font-medium">风险治理</span>
                        </div>
                        <div class="flex items-center text-sm text-secondary">
                          <span>一键免费检测</span>
                          <span class="w-2 h-2 bg-redDot rounded-full ml-1"></span>
                        </div>
                      </div>
                      <p class="text-secondary text-sm mb-2">请主动治理风险，收敛暴露面</p>
                      <div class="flex-grow flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-bgColor rounded-full flex items-center justify-center mb-4">
                          <i class="fa fa-search text-3xl text-secondary/50"></i>
                        </div>
                        <p class="text-secondary text-sm text-center">
                          当前暂无风险治理事件<br>
                          请明日继续关注
                        </p>
                      </div>
                    </div>

                    <!-- 安全防护卡片 -->
                    <div class="border border-borderColor rounded-lg p-5 flex flex-col h-full">
                      <div class="flex justify-between items-center mb-8">
                        <div class="flex items-center">
                          <i class="fa fa-shield text-blue-500 mr-2"></i>
                          <span class="font-medium">安全防护</span>
                        </div>
                      </div>
                      <p class="text-secondary text-sm mb-2">已为您实时防护，拦截攻击行为</p>
                      <div class="flex-grow flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-bgColor rounded-full flex items-center justify-center mb-4">
                          <i class="fa fa-lock text-3xl text-secondary/50"></i>
                        </div>
                        <p class="text-secondary text-sm text-center">
                          最近24小时暂无攻击
                        </p>
                      </div>
                    </div>

                    <!-- 安全响应卡片 -->
                    <div class="border border-borderColor rounded-lg p-5 flex flex-col h-full">
                      <div class="flex justify-between items-center mb-8">
                        <div class="flex items-center">
                          <i class="fa fa-bell text-purple-500 mr-2"></i>
                          <span class="font-medium">安全响应</span>
                        </div>
                      </div>
                      <p class="text-secondary text-sm mb-2">请快速处置安全事件，以降低损失</p>
                      <div class="flex-grow flex flex-col items-center justify-center">
                        <div class="w-24 h-24 bg-bgColor rounded-full flex items-center justify-center mb-4">
                          <i class="fa fa-bell-slash text-3xl text-secondary/50"></i>
                        </div>
                        <p class="text-secondary text-sm text-center">
                          当前暂无安全响应事件<br>
                          请明日继续关注
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" mx-auto p-4 md:p-8">
                  <!-- 标题 -->
                  <h2 class="text-xl font-semibold mb-4">防御体系与最佳实践</h2>

                  <!-- 标签切换栏 -->
                  <div class="flex border-b border-gray-200 mb-6">
                    <button class="py-2 px-4 text-gray-600 hover:text-blue-500 transition-colors">
                      防御体系
                    </button>
                    <button class="py-2 px-4 tab-active">
                      云平台安全最佳实践
                    </button>
                  </div>

                  <!-- 安全实践列表 -->
                  <div class="space-y-1">
                    <!-- AK和秘钥防泄露最佳实践 -->
                    <div class="border border-gray-200 rounded-sm p-4 card-hover">
                      <div class="flex items-start">
                        <!-- 图标占位 -->
                        <div class="text-orange-500 mr-3 mt-0.5">
                          <i class="fa-solid fa-key fa-lg"></i>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">AK和秘钥防泄露最佳实践</h3>
                            <a href="#" class="text-blue-500 text-sm">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <p class="text-sm text-gray-600">
                            AK防泄露对于确保云端资源安全、防止数据丢失与业务中断、满足合规要求及避免重大经济损失具有重要的意义。
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 弱口令安全最佳实践 -->
                    <div class="border border-gray-200 rounded-sm p-4 card-hover">
                      <div class="flex items-start">
                        <!-- 图标占位 -->
                        <div class="text-orange-500 mr-3 mt-0.5">
                          <i class="fa-solid fa-lock fa-lg"></i>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">弱口令安全最佳实践</h3>
                            <a href="#" class="text-blue-500 text-sm">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <p class="text-sm text-gray-600">
                            如果您的服务器使用弱口令登录，黑客可能会非法登录您的服务器，窃取服务器数据或破坏服务器。
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 漏洞修复最佳实践 -->
                    <div class="border border-gray-200 rounded-sm p-4 card-hover">
                      <div class="flex items-start">
                        <!-- 图标占位 -->
                        <div class="text-orange-500 mr-3 mt-0.5">
                          <i class="fa-solid fa-shield-halved fa-lg"></i>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">漏洞修复最佳实践</h3>
                            <a href="#" class="text-blue-500 text-sm">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <p class="text-sm text-gray-600">
                            修复漏洞是保障系统安全、防止数据泄露与业务受损的关键措施。
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 勒索事件综合防护方案 -->
                    <div class="border border-gray-200 rounded-sm p-4 card-hover">
                      <div class="flex items-start">
                        <!-- 图标占位 -->
                        <div class="text-orange-500 mr-3 mt-0.5">
                          <i class="fa-solid fa-triangle-exclamation fa-lg"></i>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">勒索事件综合防护方案</h3>
                            <a href="#" class="text-blue-500 text-sm">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <p class="text-sm text-gray-600">
                            勒索病毒入侵可能导致数据加密锁定、业务中断，造成不可估量的经济损失及声誉损害。
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- 挖矿程序处理最佳实践 -->
                    <div class="border border-gray-200 rounded-sm p-4 card-hover">
                      <div class="flex items-start">
                        <!-- 图标占位 -->
                        <div class="text-orange-500 mr-3 mt-0.5">
                          <i class="fa-solid fa-microchip fa-lg"></i>
                        </div>
                        <div class="flex-1">
                          <div class="flex justify-between items-center mb-2">
                            <h3 class="font-medium">挖矿程序处理最佳实践</h3>
                            <a href="#" class="text-blue-500 text-sm">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <p class="text-sm text-gray-600">
                            挖矿活动会过度消耗计算资源与能源，威胁网络安全，加剧环境负担，并可能成为非法金融活动的渠道。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 了解更多链接 -->
                  <div class="mt-4">
                    <a href="#" class="text-blue-500 text-sm hover:underline">
                      了解更多 <i class="fa-solid fa-angle-right text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>
                <div class="space-y-4 md:space-y-6">
                  <!-- 责任共担模型模块 -->
                  <div class="bg-white rounded-lg p-6 mb-6 card-shadow">
                    <h2 class="text-xl font-semibold mb-4">责任共担模型</h2>
                    <p class="text-gray-700 mb-4">
                      阿里云作为云服务提供方，主要负责数据中心的基础设施和云平台的安全合规，<br>
                      客户主要负责自身数据、应用和账户安全。
                    </p>
                    <a href="#" class="link-hover inline-flex items-center">
                      了解更多 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                  </div>

                  <!-- 阿里云平台合规资质模块 -->
                  <div class="bg-white rounded-lg p-6 mb-6 card-shadow">
                    <h2 class="text-xl font-semibold mb-6">阿里云平台合规资质</h2>

                    <!-- ISO 27001 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-gray-100 rounded mr-4">
                        <i class="fa fa-shield-halved text-gray-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 class="font-medium mb-1">ISO 27001</h3>
                        <p class="text-gray-700 text-sm">
                          国际公认的信息安全管理体系标准，阿里云是国内首家获得此认证的云服务商。
                        </p>
                      </div>
                    </div>

                    <!-- 中央网信办云计算服务安全评估 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-gray-100 rounded mr-4">
                        <i class="fa fa-server text-gray-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 class="font-medium mb-1">中央网信办云计算服务安全评估</h3>
                        <p class="text-gray-700 text-sm">
                          阿里云政务云首批以"增强"级安全能力通过了云计算安全评估。
                        </p>
                      </div>
                    </div>

                    <!-- 公安部网络安全等级保护2.0 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-gray-100 rounded mr-4">
                        <i class="fa fa-layer-group text-gray-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 class="font-medium mb-1">公安部网络安全等级保护2.0</h3>
                        <p class="text-gray-700 text-sm">
                          全国唯一一个云计算等级保护2.0示范单位，金融云是通过云计算等级保护四级测评的首个云平台，政务云是通过等保2.0国际测评的首个云平台。
                        </p>
                      </div>
                    </div>

                    <a href="#" class="link-hover inline-flex items-center">
                      了解更多 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                  </div>

                  <!-- 合规解决方案模块 -->
                  <div class="bg-white rounded-lg p-6 card-shadow">
                    <h2 class="text-xl font-semibold mb-6">合规解决方案</h2>

                    <!-- 等保咨询服务 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-orange-50 rounded mr-4">
                        <i class="fa fa-comments text-orange-500 text-xl"></i>
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between items-start mb-1">
                          <h3 class="font-medium">等保咨询服务</h3>
                          <a href="#" class="link-hover text-sm"><i class="fa fa-angle-right"></i></a>
                        </div>
                        <p class="text-gray-700 text-sm">
                          一站式等保咨询服务，全面覆盖等保定级、备案、建设整改以及测评阶段，帮助客户高效地通过等保测评。
                        </p>
                      </div>
                    </div>

                    <!-- 商用密码应用安全评估套餐 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-orange-50 rounded mr-4">
                        <i class="fa fa-key text-orange-500 text-xl"></i>
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between items-start mb-1">
                          <h3 class="font-medium">商用密码应用安全评估套餐</h3>
                          <a href="#" class="link-hover text-sm"><i class="fa fa-angle-right"></i></a>
                        </div>
                        <p class="text-gray-700 text-sm">
                          阿里云依托云平台密码经验和云密码产品优势，提供全流程密码咨询服务，覆盖差距分析、方案设计、建设整改、密码测评及密码备案等阶段，助您快速完成密码合规。
                        </p>
                      </div>
                    </div>

                    <!-- 等保合规解决方案 -->
                    <div class="flex items-start mb-6">
                      <div class="w-12 h-12 flex items-center justify-center bg-orange-50 rounded mr-4">
                        <i class="fa fa-check-circle text-orange-500 text-xl"></i>
                      </div>
                      <div class="flex-1">
                        <div class="flex justify-between items-start mb-1">
                          <h3 class="font-medium">等保合规解决方案</h3>
                          <a href="#" class="link-hover text-sm"><i class="fa fa-angle-right"></i></a>
                        </div>
                        <p class="text-gray-700 text-sm">
                          阿里云安全整合云平台等保测评经验和云安全产品优势，联合等保测评、等保测评机构等合作资源，提供一站式等保测评服务，覆盖等保定级、备案、建设整改及测评阶段，助您快速通过等保测评。
                        </p>
                      </div>
                    </div>

                    <a href="#" class="link-hover inline-flex items-center">
                      了解更多 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                  </div>
                </div>

              </div>
           </div>
            <div v-if="activeTab === 'cost'" class="name4 p-6">
              <FinanceOverview />
           </div>
            <div v-if="activeTab === 'benefits'" class="name5 p-6">
              <div class=" mx-auto px-4 py-6">
                <!-- 顶部标签栏 -->
                <div class="flex border-b border-gray-200 mb-6">
                  <div class="px-4 py-2 text-gray-400 hover:text-primary cursor-pointer">
                    个人用户权益 <span class="text-xs bg-gray-200 px-1 rounded">(140项+)</span>
                  </div>
                  <div class="px-4 py-2 text-primary border-b-2 border-primary font-medium">
                    企业用户权益 <span class="text-xs bg-primary/10 text-primary px-1 rounded">(160项+)</span>
                  </div>
                  <div class="px-4 py-2 text-gray-400 hover:text-primary cursor-pointer">
                    高校用户专属权益 <span class="text-xs bg-gray-200 px-1 rounded">(2项)</span>
                  </div>
                  <div class="ml-auto text-sm text-gray-400 flex items-center">
                    <i class="fa-solid fa-info-circle mr-1"></i>
                    150款+免费试用云产品, 最长可试用12个月
                  </div>
                </div>

                <!-- 产品新用户免费权益 -->
                <div class="mb-8">
                  <div class="flex items-center mb-4">
                    <h2 class="text-lg font-medium text-gray-500">产品新用户免费权益</h2>
                    <a href="#" class="ml-2 text-primary text-sm hover:underline">使用规则</a>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- 云服务器ECS -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">云服务器ECS免费试用（企业版）</div>
                      <div class="text-sm text-gray-400 mb-4">免费额度660元</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 交互式建模PAI-DSW -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">交互式建模 PAI-DSW</div>
                      <div class="text-sm text-gray-400 mb-4">每月250计算时 3个月</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 轻量应用服务器2vCPU 4GIB -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">轻量应用服务器2vCPU 4GIB</div>
                      <div class="text-sm text-gray-400 mb-4">适用于搭建Web应用/小程序</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 轻量应用服务器2vCPU 4GIB -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">轻量应用服务器2vCPU 4GIB</div>
                      <div class="text-sm text-gray-400 mb-4">适用于网站搭建</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 函数计算FC -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">函数计算FC</div>
                      <div class="text-sm text-gray-400 mb-4">每月15万CU 3个月</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 无影云电脑企业版 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">无影云电脑企业版</div>
                      <div class="text-sm text-gray-400 mb-4">8核16GB 120小时 1个月</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 对象存储OSS -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">对象存储OSS</div>
                      <div class="text-sm text-gray-400 mb-4">标准·同城冗余存储 20GB 3个月</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>

                    <!-- 传统型负载均衡CLB -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">传统型负载均衡CLB</div>
                      <div class="text-sm text-gray-400 mb-4">每月750个小时 15LCU</div>
                      <div class="flex gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                        <a href="#" class="text-primary text-sm hover:underline">试用必读</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 新老用户同享低价实例购买权益 -->
                <div>
                  <div class="flex items-center mb-4">
                    <h2 class="text-lg font-medium text-gray-500">新老用户同享低价实例购买权益</h2>
                    <a href="#" class="ml-2 text-primary text-sm hover:underline">使用规则</a>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- u实例 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">u实例 (5M固定带宽, 流量放心用)</div>
                      <div class="text-sm text-gray-400 mb-2">臻藏同款, 适用于Web前端等计算密集场景</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>实例：2核4G</div>
                        <div>购买时长：1年</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                        <span class="bg-primary/10 text-primary text-xs px-1 rounded">企业专享</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥199.00</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥3498.61/年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- e实例 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">e实例 (3M固定带宽, 流量放心用)</div>
                      <div class="text-sm text-gray-400 mb-2">臻藏同款, 适用于建站, 小程序等应用场景</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>实例：2核4G</div>
                        <div>购买时长：1年</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                        <span class="bg-primary/10 text-primary text-xs px-1 rounded">企业专享</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥99.00</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥1009.19/年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- OSS对象存储-本地冗余存储 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">OSS对象存储-本地冗余存储</div>
                      <div class="text-sm text-gray-400 mb-2">海量、安全、低成本、高可靠的云存储服务</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>地域：中国内地通用</div>
                        <div>标准-本地冗余存储规格：500GB</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥189.99</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥496.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- OSS对象存储 标准·同城冗余 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">OSS对象存储 标准·同城冗余</div>
                      <div class="text-sm text-gray-400 mb-2">同城冗余存储能够提供极致容灾能力</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>地域：中国内地通用</div>
                        <div>标准-同城冗余存储规格：500GB</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥179.99</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥612.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- 云数据库RDS MySQL版 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">云数据库 RDS MySQL 版</div>
                      <div class="text-sm text-gray-400 mb-2">基础系列, 通用云盘, 0流量费用, 活动期内按量不涨价</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>实例规格：2核2GB (通用型)</div>
                        <div>存储大小：50GB</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥99.00</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥740.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- 云数据库RDS MySQL版 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">云数据库 RDS MySQL 版</div>
                      <div class="text-sm text-gray-400 mb-2">RDS MySQL 两版"99+计划"特价二选一, 存储数据高可靠, 数据价同...</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>实例规格：2核4GB (通用型)</div>
                        <div>存储大小：100GB</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥227.99</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥1512.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- 无影云电脑企业版-4核8G -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">无影云电脑企业版-4核8G</div>
                      <div class="text-sm text-gray-400 mb-2">本优惠价不支持叠加满减券, 高安全便捷, 满足远程办公、分支门店...</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>计算套餐：120小时/月</div>
                        <div>购买时长：1年</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥199.00</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥848.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>

                    <!-- NAS文件存储-通用型资源包 -->
                    <div class="bg-white rounded-lg p-4 card-shadow">
                      <div class="font-medium text-gray-500 mb-2">NAS文件存储-通用型资源包</div>
                      <div class="text-sm text-gray-400 mb-2">支持同时抵扣通用型容量、通用型流量和通用型性能的多个文件系...</div>
                      <div class="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>地域：中国内地通用</div>
                        <div>通用型资源容量：100GiB</div>
                      </div>
                      <div class="flex flex-wrap gap-1 mb-3">
                        <span class="bg-discount/10 text-discount text-xs px-1 rounded">99+计划</span>
                        <span class="bg-gray-100 text-gray-400 text-xs px-1 rounded">限1件</span>
                      </div>
                      <div class="mb-3">
                        <span class="text-price text-xl font-bold">¥98.99</span>/年
                        <div class="text-xs text-gray-400 text-line-through">官网折扣价:¥700.00/1年</div>
                      </div>
                      <button class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90 transition">立即使用</button>
                    </div>
                  </div>
                </div>

                <!-- 分页 -->
                <div class="flex justify-center mt-8">
                  <div class="flex items-center gap-2">
                    <button class="px-3 py-1 rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition">
                      <i class="fa-solid fa-angle-left"></i> 上一页
                    </button>
                    <button class="px-3 py-1 rounded border border-gray-200 text-gray-400 hover:border-primary hover:text-primary transition">
                      下一页 <i class="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
           </div>
        </main>
      </div>

      <!-- 右侧滚动条 -->
<!--      <div class="w-2 bg-ali-gray-light flex flex-col items-center py-4">-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center mb-2 hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-arrow-up text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center mb-2 hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-comment-o text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center mb-2 hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-headphones text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center mb-2 hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-question-circle-o text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--        <div class="flex-1"></div>-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center mb-2 hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-angle-up text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--        <button class="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center hover:bg-ali-gray-light">-->
<!--          <i class="fa fa-angle-down text-xs text-ali-gray-dark"></i>-->
<!--        </button>-->
<!--      </div>-->
    </main>

    <!-- 引入公共Footer组件 -->
  </div>
</template>

<script>
// 导入公共组件
import PersonalCenterHeader from '@/components/PersonalCenterHeader.vue'
import FinanceOverview from '@/components/FinanceOverview.vue'

export default {
  name: 'Console',
  components: {
    PersonalCenterHeader,
    FinanceOverview
  },
  data() {
    return {
      // 控制台相关数据
      activeTab: 'overview' // 默认选中概览
    }
  },
  methods: {
    // 控制台相关方法
  }
}
</script>

<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.content-auto {
  content-visibility: auto;
}
.scrollbar-thin {
  scrollbar-width: thin;
}
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 3px;
}
.text-link-blue {
  color: #1890ff;
}
.bg-light-blue {
  background-color: #e6f7ff;
}
.border-light-gray {
  border-color: #e8e8e8;
}
.text-orange-warning {
  color: #faad14;
}
.text-red-severe {
  color: #f5222d;
}
.text-gray-info {
  color: #8c8c8c;
}
.content-auto {
  content-visibility: auto;
}
  .content-auto {
    content-visibility: auto;
  }
  .text-link {
    @apply text-primary hover:text-primary/80 cursor-pointer;
  }
  .card-shadow {
    @apply shadow-sm hover:shadow-md transition-shadow duration-200;
  }
  .btn-primary {
    @apply bg-primary text-white px-4 py-1.5 rounded cursor-pointer hover:bg-primary/90 transition-colors;
  }
  .btn-outline {
    @apply border border-primary text-primary px-4 py-1.5 rounded cursor-pointer hover:bg-primary/5 transition-colors;
  }
.content-auto {
  content-visibility: auto;
}
.card-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.icon-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

// 页面级自定义Tailwind配置
:root {
  --color-primary: #00B42A;
  --color-secondary: #86909C;
  --color-borderColor: #E5E6EB;
  --color-bgColor: #F7F8FA;
  --color-redDot: #F53F3F;
  --color-blueLink: #1D5EFF;
}

@layer utilities {
  .text-primary {
    color: var(--color-primary);
  }
  .text-secondary {
    color: var(--color-secondary);
  }
  .border-borderColor {
    border-color: var(--color-borderColor);
  }
  .bg-bgColor {
    background-color: var(--color-bgColor);
  }
  .text-redDot {
    color: var(--color-redDot);
  }
  .text-blueLink {
    color: var(--color-blueLink);
  }
  .content-auto {
    content-visibility: auto;
  }
  .tab-active {
    @apply border-b-2 border-blue-500 text-blue-500 font-medium;
  }
  .card-hover {
    @apply hover:shadow-md transition-shadow duration-200;
  }
  .content-auto {
    content-visibility: auto;
  }
  .card-shadow {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  }
  .text-line-through {
    text-decoration: line-through;
  }
}

</style>
