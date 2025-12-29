<template>
  <div class="aliyun-page">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <div>
      <div class="max-w-full mx-auto bg-white">
        <!-- 顶部横幅区域 -->
        <div class="flex flex-col md:flex-row items-center justify-between px-6 py-12" style="width: 100%; padding: 0 10%">
          <!-- 文字内容区 -->
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-[clamp(2rem,4vw,3rem)] text-title text-gray-900 mb-3">
              云服务器爆款直降90%
            </h1>
            <p class="text-base text-sub text-gray-600">
              新客首单￥68起 | 人人可享99元套餐，续费同价 | u2a指定配置低至2.5折1年
            </p>
          </div>
          <!-- 装饰图片区（占位图） -->
          <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="https://picsum.photos/400/200" alt="云服务器促销装饰图" class="max-w-full h-auto">
          </div>
        </div>

        <!-- 卖点卡片区域 -->
        <div class="border-t border-gray-200 flex flex-wrap" style="width: 100%; padding: 0 10%">
          <!-- 卡片1 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
            <p class="text-sm text-gray-800 font-medium">年度热卖云服务器</p>
            <p class="text-xs text-gray-500 mt-1">低至68元/年</p>
          </div>
          <!-- 卡片2 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
            <p class="text-sm text-gray-800 font-medium">爆款服务器99元人人可享</p>
            <p class="text-xs text-gray-500 mt-1">续费与新购同价</p>
          </div>
          <!-- 卡片3 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
            <p class="text-sm text-gray-800 font-medium">初创企业性价比之选</p>
            <p class="text-xs text-gray-500 mt-1">u2a年转低至2.5折</p>
          </div>
          <!-- 卡片4 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
            <p class="text-sm text-gray-800 font-medium">AMD旗舰新品首次促销</p>
            <p class="text-xs text-gray-500 mt-1">包年低至7折</p>
          </div>
          <!-- 卡片5 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 sm:border-r border-gray-200">
            <p class="text-sm text-gray-800 font-medium">场景方案一键购买</p>
            <p class="text-xs text-gray-500 mt-1">覆盖90%+通用业务需求</p>
          </div>
          <!-- 卡片6 -->
          <div class="w-full sm:w-1/6 p-4 border-b sm:border-b-0 border-gray-200">
            <p class="text-sm text-gray-800 font-medium">暂不购买？来免费试用</p>
            <p class="text-xs text-gray-500 mt-1">最高享660元免费额度</p>
          </div>
        </div>
      </div>
    </div>
  <div style="width: 100%; padding: 0 10%; background: #eaf2ff" >

    <main class="   py-6">
      <!-- 拼手速专区 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <div class=" mx-auto px-4 py-8">
            <!-- 标题区域 -->
            <div class="text-center mb-6">
              <h1 class="text-[24px] font-bold text-dark">
                拼手速！<span class="text-primary">38元抢轻量应用服务器</span>
              </h1>
              <p class="text-[14px] text-gray mt-2">
                每天两场（上午10:00，下午15:00），限量秒杀
                <a href="#" class="text-primary underline hover:text-primary/80">活动规则</a>
              </p>
            </div>

            <!-- 核心内容区域 -->
            <div class="flex flex-col md:flex-row rounded-md overflow-hidden border border-gray/20">
              <!-- 左侧产品信息 -->
              <div class="bg-primary text-white w-full md:w-1/3 p-6">
                <div class="flex items-center mb-4">
                  <h2 class="text-[18px] font-bold">轻量应用服务器 2核2G</h2>
                  <span class="tag">上云首选</span>
                </div>
                <p class="text-[14px] text-white/90">
                  200M峰值带宽，适用于网站搭建、Web应用、容器环境、电商独立站等
                </p>
                <!-- 产品图片占位 -->
                <div class="mt-4 h-24 bg-primary/30 rounded flex items-center justify-center">
                  <i class="fa-solid fa-server text-4xl text-white/70"></i>
                </div>
              </div>

              <!-- 中间购买信息 -->
              <div class="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray/20">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-[14px] text-gray mb-2">购买时长</p>
                    <p class="text-[16px] font-medium text-dark">1年</p>
                  </div>
                  <div>
                    <p class="text-[14px] text-gray mb-2">购买数量</p>
                    <p class="text-[16px] font-medium text-dark">1</p>
                  </div>
                </div>
              </div>

              <!-- 右侧价格和库存 -->
              <div class="w-full md:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <div class="flex items-end mb-2">
                    <span class="text-orange text-[28px] font-bold">¥38</span>
                    <span class="text-gray text-[14px] ml-1">.00/1年起</span>
                  </div>
                  <p class="text-[12px] text-gray mb-4">官网折扣价:¥459.00/1年</p>

                  <!-- 进度条区域 -->
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-full mr-2">
                      <div class="progress-bar w-full"></div>
                    </div>
                    <span class="text-[14px] text-gray whitespace-nowrap">已抢100%</span>
                  </div>
                </div>

                <!-- 按钮区域 -->
                <button class="w-full py-2 bg-gray/20 text-gray rounded cursor-not-allowed" disabled>
                  今日已售罄
                </button>
              </div>
            </div>
          </div>


          <!-- 热门推荐产品卡片 -->
          <h3 class="text-lg font-semibold text-gray-dark mb-3">热卖！百万用户的共同选择</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 产品卡片1 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">轻量应用服务器2核2G</span>
                <span class="text-orange font-bold">¥38/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 2核CPU · 2G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 40G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 5M带宽 · 每月1000G流量</li>
              </ul>
              <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片2 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">轻量应用服务器4核8G</span>
                <span class="text-orange font-bold">¥68/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 4核CPU · 8G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 80G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 10M带宽 · 每月2000G流量</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片3 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">轻量应用服务器8核16G</span>
                <span class="text-orange font-bold">¥128/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 8核CPU · 16G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 160G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 20M带宽 · 每月5000G流量</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 续费不加价专区 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">续费不加价！开发者轻上云省心之选</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="product-card">
              <h4 class="text-base font-semibold text-gray-dark mb-2">年度爆款服务器火热抢购中</h4>
              <ul class="text-sm text-gray mb-3 space-y-2">
                <li><i class="fa-solid fa-check text-orange w-5"></i> 续费同价，长期使用更划算</li>
                <li><i class="fa-solid fa-check text-orange w-5"></i> 一键部署，无需复杂配置</li>
                <li><i class="fa-solid fa-check text-orange w-5"></i> 7×24小时技术支持，放心使用</li>
              </ul>
              <button class="btn-blue">了解更多</button>
            </div>
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">ECS共享型服务器</span>
                <span class="text-orange font-bold">¥99/年起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 1核CPU · 2G内存</li>
                <li><i class="fa-solid fa-shield-halved w-5 text-blue"></i> 基础安全防护</li>
                <li><i class="fa-solid fa-infinity w-5 text-blue"></i> 按年付费，续费同价</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
          </div>
        </div>
      </section>

      <!-- u2a年度2.5折专区 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">u2a年度2.5折！初创企业的性价比之选</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 产品卡片1 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">云服务器u2a 4核8G</span>
                <span class="text-orange font-bold">¥59/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 4核CPU · 8G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 50G系统盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 公网带宽3M</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片2 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">云服务器u2a 8核16G</span>
                <span class="text-orange font-bold">¥109/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 8核CPU · 16G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 80G系统盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 公网带宽5M</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片3 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">云服务器u2a 16核32G</span>
                <span class="text-orange font-bold">¥219/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> 16核CPU · 32G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 100G系统盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 公网带宽8M</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
          </div>
        </div>
      </section>

      <!-- AMD旗舰9代专区 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">AMD旗舰9代首次促销！助力业务稳定增长</h2>
          <!-- 替代图片：用图标+背景表示产品图 -->
          <div class="bg-gray-light rounded-lg p-4 mb-4 flex items-center justify-center">
            <i class="fa-solid fa-microchip text-5xl text-blue mr-4"></i>
            <div>
              <h4 class="font-medium">AMD EPYC™ 9004 系列处理器</h4>
              <p class="text-sm text-gray">高性能 · 低功耗 · 高性价比</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 产品卡片1 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">AMD旗舰9C 4核8G</span>
                <span class="text-orange font-bold">¥89/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> AMD 4核 · 8G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 100G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 5M公网带宽</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片2 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">AMD旗舰9C 8核16G</span>
                <span class="text-orange font-bold">¥159/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> AMD 8核 · 16G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 200G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 8M公网带宽</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 产品卡片3 -->
            <div class="product-card">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">AMD旗舰9C 16核32G</span>
                <span class="text-orange font-bold">¥299/月起</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-server w-5 text-blue"></i> AMD 16核 · 32G内存</li>
                <li><i class="fa-solid fa-hard-drive w-5 text-blue"></i> 400G高效云盘</li>
                <li><i class="fa-solid fa-wifi w-5 text-blue"></i> 10M公网带宽</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
          </div>

          <!-- 提示条 -->
          <div class=" border border-orange/30 rounded p-3 mt-4 flex items-center justify-between" style="background: rgb(255 247 230)">
            <div class="flex items-center">
              <i class="fa-solid fa-lightbulb text-orange mr-2"></i>
              <span class="text-orange">不想配环境？来试试 Docker/CLI 云策方案，一键开通ECS，SSH登录，启动CLI，5分钟开始编码！</span>
            </div>
            <button class="btn-orange">立即部署</button>
          </div>
        </div>
      </section>

      <!-- 精选云产品组合 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">精选云产品 [组合GO]，限时超值价</h2>
          <div class="product-card">
            <div class="flex flex-wrap justify-between mb-3">
              <span class="text-gray-dark font-medium">特惠套餐（域名+轻量服务器+万小盾CDN）</span>
              <span class="text-orange font-bold">¥780/年</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
              <div class="text-sm text-gray">
                <i class="fa-solid fa-globe text-blue w-5"></i> 域名1年（.com/.cn任选）
              </div>
              <div class="text-sm text-gray">
                <i class="fa-solid fa-server text-blue w-5"></i> 轻量服务器2核2G（1年）
              </div>
              <div class="text-sm text-gray">
                <i class="fa-solid fa-shield-halved text-blue w-5"></i> 万小盾CDN（1年）
              </div>
            </div>
            <button class="btn-orange w-full">立即抢购</button>
          </div>
        </div>
      </section>

      <!-- ECS专属安全防护包 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">ECS专属安全防护包 买ECS立享主机与数据安全防护</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 防护包1 -->
            <div class="product-card border-l-4 border-orange">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">主机防护+安全扫描</span>
                <span class="text-orange font-bold">¥0.01/月</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-shield-halved w-5 text-blue"></i> 基础漏洞扫描</li>
                <li><i class="fa-solid fa-lock w-5 text-blue"></i> 登录异常提醒</li>
              </ul>
               <button class="btn-orange w-full"  @click="currentProductName = $event.target.closest('.product-card').querySelector('.text-gray-dark.font-medium').textContent; drawer = true">立即购买</button>
            </div>
            <!-- 防护包2 -->
            <div class="product-card border-l-4 border-blue">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">文件备份+安全</span>
                <span class="text-orange font-bold">¥0/月</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-backup w-5 text-blue"></i> 每日自动备份</li>
                <li><i class="fa-solid fa-shield-virus w-5 text-blue"></i> 病毒查杀</li>
              </ul>
              <button class="btn-blue w-full">免费领取</button>
            </div>
            <!-- 防护包3 -->
            <div class="product-card border-l-4 border-gray">
              <div class="flex justify-between mb-2">
                <span class="text-gray-dark font-medium">数据加密+合规</span>
                <span class="text-orange font-bold">¥0/月</span>
              </div>
              <ul class="text-sm text-gray mb-3 space-y-1">
                <li><i class="fa-solid fa-key w-5 text-blue"></i> 数据传输加密</li>
                <li><i class="fa-solid fa-file-contract w-5 text-blue"></i> 合规检测</li>
              </ul>
              <button class="btn-gray w-full">免费开通</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 免费试用专区 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">暂无购买计划？邀请您免费试用！</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- 试用1 -->
            <div class="product-card">
              <div class="text-center mb-2">
                <i class="fa-solid fa-server text-3xl text-blue mb-2"></i>
                <h4 class="font-medium">轻量应用服务器（个人版）</h4>
              </div>
              <p class="text-sm text-gray text-center mb-2">免费额度300元</p>
              <button class="btn-blue w-full">立即试用</button>
            </div>
            <!-- 试用2 -->
            <div class="product-card">
              <div class="text-center mb-2">
                <i class="fa-solid fa-server text-3xl text-blue mb-2"></i>
                <h4 class="font-medium">轻量应用服务器（企业版）</h4>
              </div>
              <p class="text-sm text-gray text-center mb-2">免费额度600元</p>
              <button class="btn-blue w-full">立即试用</button>
            </div>
            <!-- 试用3 -->
            <div class="product-card">
              <div class="text-center mb-2">
                <i class="fa-solid fa-building text-3xl text-blue mb-2"></i>
                <h4 class="font-medium">适用于搭建电商独立站</h4>
              </div>
              <p class="text-sm text-gray text-center mb-2">2C+4G · 30天试用</p>
              <button class="btn-blue w-full">立即试用</button>
            </div>
            <!-- 试用4 -->
            <div class="product-card">
              <div class="text-center mb-2">
                <i class="fa-solid fa-mobile-screen-button text-3xl text-blue mb-2"></i>
                <h4 class="font-medium">适用于搭建Web应用小程序</h4>
              </div>
              <p class="text-sm text-gray text-center mb-2">2C+2G · 30天试用</p>
              <button class="btn-blue w-full">立即试用</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 云大使推广返利 -->
      <section class="mb-8">
        <div class="bg-white rounded-lg p-4 mb-4">
          <h2 class="text-xl font-bold text-gray-dark mb-2">加入云大使推广返利</h2>
          <!-- 替代banner：渐变背景 -->
          <div class="bg-blue-gradient rounded-lg p-6 mb-4 text-white flex flex-wrap justify-between items-center">
            <div>
              <h3 class="text-xl font-bold mb-2">邀请好友购买云服务器</h3>
              <p class="mb-3">最高返佣25%，多邀多得</p>
              <button class="bg-white text-blue px-4 py-2 rounded hover:bg-gray-100 transition">立即加入</button>
            </div>
            <div class="flex gap-6 mt-4 md:mt-0">
              <div class="text-center">
                <p class="text-2xl font-bold">25%</p>
                <p class="text-sm">返佣比例</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold">9万+</p>
                <p class="text-sm">月均收益</p>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold">90%</p>
                <p class="text-sm">大使好评</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
    <Footer />
    <el-drawer
        :title="currentProductName"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
      <div class="max-w-4xl mx-auto bg-white p-6 shadow-sm" style="position: relative">
        <!-- 标题栏 -->
        <div class="flex items-center justify-between mb-8 border-b pb-4">
          <div class="flex items-center">
            <h1 class="text-xl font-medium mr-4">{{ currentProductName }}</h1>
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
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'AliyunPage',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '',
      drawer: false,
      direction: 'rtl',
      currentProductName: '' // 当前选中的产品名称
    }
  },
  methods: {
    handleMenuSelect(menuInfo) {
      // 根据Header组件传递的menuInfo进行处理
      // 由于Header组件内部已经处理了路由跳转，这里可以添加其他需要的逻辑
      console.log('菜单选择信息:', menuInfo)
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
.product-card{
  border-radius: 0.5rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
  padding: 1rem;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.btn-orange{
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(250 140 22 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(255 247 230 / var(--tw-bg-opacity, 1));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(250 140 22 / var(--tw-text-opacity, 1));
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.btn-blue{
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(24 144 255 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(240 247 255 / var(--tw-bg-opacity, 1));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(24 144 255 / var(--tw-text-opacity, 1));
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

}
.btn-gray{
  border-radius: 0.25rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(140 140 140 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity, 1));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(140 140 140 / var(--tw-text-opacity, 1));
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>



