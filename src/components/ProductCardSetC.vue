<template>
  <div>
    <div class="mx-auto px-4 py-6">
      <!-- ECS专属安全防护包区域 -->
      <section class="mb-8">
        <div class="flex items-center mb-4">
          <span class="text-lg font-bold text-gray-800">[ECS专属安全防护包]</span>
          <span class="ml-2 text-base text-gray-600">买ECS，立享主机与数据安全防护</span>
          <a href="#" class="ml-2 text-blue-primary text-sm">一键领取四大核心防护</a>
          <a href="#" class="ml-2 text-blue-primary text-sm">权益规则说明</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 主机病毒防护权益 -->
          <div class="border border-gray-border rounded-lg p-4">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-base font-semibold text-orange-primary">主机病毒防护权益 <span class="text-xs bg-orange-primary/10 text-orange-primary px-2 py-0.5 rounded">免费3个月</span></h3>
                <p class="text-sm text-gray-text mt-1">发现安全隐患，降低主机入侵风险</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-bold text-orange-primary">¥0.00<span class="text-xs">起</span></p>
                <p class="text-xs text-gray-text">官网折扣价:¥199.45</p>
              </div>
            </div>

            <div class="text-xs text-gray-text space-y-1 mb-4">
              <p>免费额度: 限领1套</p>
              <p>适用人群: 未购买过云安全中心（包年包月/按量付费）产品的阿里云用户</p>
              <p>权益说明: 免费2次漏洞修复+免费1000次安全配置检查+免费2次主机病毒防护</p>
            </div>

            <a href="#" class="block w-full text-center bg-orange-primary text-white py-2 rounded hover:bg-orange-light transition-colors">立即购买</a>
          </div>

          <!-- 文件备份权益 -->
          <div class="border border-gray-border rounded-lg p-4">
            <div class="flex justify-between items-start mb-3">
              <div>
                <h3 class="text-base font-semibold text-orange-primary">文件备份权益 <span class="text-xs bg-orange-primary/10 text-orange-primary px-2 py-0.5 rounded">免费100G</span></h3>
                <p class="text-sm text-gray-text mt-1">自动备份，快速恢复关键文件</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-bold text-orange-primary">¥0.00<span class="text-xs">起</span></p>
                <p class="text-xs text-gray-text">官网折扣价:¥0.00</p>
              </div>
            </div>

            <div class="text-xs text-gray-text space-y-1 mb-4">
              <p>免费额度: 每个账号100GB容量的文件备份额度</p>
              <p>适用人群: 每个阿里云用户</p>
              <p>权益说明: 使用ECS文件备份自动抵扣，激活后免配置</p>
              <a href="#" class="text-blue-primary">了解优惠</a>
            </div>

            <a href="#" class="block w-full text-center bg-orange-primary text-white py-2 rounded hover:bg-orange-light transition-colors">立即购买</a>
          </div>
        </div>

        <div class="mt-3">
          <a href="#" class="text-blue-primary text-sm flex items-center">
            <span>查看更多免费试用产品</span>
            <i class="fas fa-circle text-[4px] ml-1"></i>
          </a>
        </div>
      </section>

      <hr class="border-gray-border mb-8">

      <!-- 阿里云新客户专享满减券 -->
      <section class="mb-8">
        <h2 class="text-xl font-bold mb-4">阿里云新客户专享满减券</h2>
        <p class="text-sm text-gray-text mb-4">
          新客户专享满减券，助力开发者和企业普惠上云，领券购买更划算
          <a href="#" class="text-blue-primary ml-1">活动规则</a>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 个人客户专享 -->
          <div class="border border-gray-border rounded-lg p-4 bg-gray-bg/50">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-base font-semibold">个人客户专享</h3>
              <a href="#" class="bg-blue-primary text-white px-4 py-1 rounded text-sm hover:bg-blue-light transition-colors">立即领取</a>
            </div>
            <p class="text-xs text-gray-text">仅限个人客户领取</p>
            <div class="mt-2 border border-gray-border rounded p-2 inline-block">
              <div class="text-center">
                <p class="text-xs text-gray-text">新客户专享</p>
                <p class="text-lg font-bold text-orange-primary">¥10</p>
                <p class="text-xs text-gray-text">满100减10</p>
              </div>
            </div>
          </div>

          <!-- 企业客户专享 -->
          <div class="border border-gray-border rounded-lg p-4 bg-gray-bg/50">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-base font-semibold">企业客户专享</h3>
              <a href="#" class="bg-blue-primary text-white px-4 py-1 rounded text-sm hover:bg-blue-light transition-colors">立即领取</a>
            </div>
            <p class="text-xs text-gray-text">仅限企业客户领取</p>
            <div class="mt-2 border border-gray-border rounded p-2 inline-block">
              <div class="text-center">
                <p class="text-xs text-gray-text">新客户专享</p>
                <p class="text-lg font-bold text-orange-primary">¥10</p>
                <p class="text-xs text-gray-text">满100减10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="border-gray-border mb-8">

      <!-- 高校学生通用权益 -->
      <section>
        <div class="border border-gray-border rounded-lg p-4 bg-gray-bg/30 flex flex-col md:flex-row items-center justify-between">
          <div class="mb-4 md:mb-0 md:mr-6">
            <h2 class="text-lg font-bold mb-2">高校学生通用权益</h2>
            <p class="text-sm text-gray-text">完成高校学生实名认证即可领取，其中港澳台地区近期开启</p>
            <a href="#" class="mt-3 inline-block bg-orange-primary text-white px-6 py-2 rounded text-sm hover:bg-orange-light transition-colors">登录后领取</a>
          </div>

          <div class="flex items-center">
            <div class="text-center mr-8">
              <p class="text-3xl font-bold text-blue-primary">300</p>
              <p class="text-xs text-gray-text">无门槛抵扣金</p>
            </div>
            <div class="text-xs text-gray-text space-y-1">
              <p>适用产品范围: 阿里云部分公共云产品（具体请查看活动规则及云工开物页面用券专区）</p>
              <p>使用说明: 自领取之日起, 1年内有效, 如订单退款, 优惠券不返还。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSetC',

}
</script>

<style scoped>

</style>
