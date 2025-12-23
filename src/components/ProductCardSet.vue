<template>
  <div>
    <!-- 标题区域 -->
    <div class="mb-6">
      <h1 class="text-[28px] font-bold text-gray-900">
        {{ title }}
      </h1>
      <p class="mt-2 text-sm text-gray-desc">{{ description }}</p>
    </div>

    <!-- 产品卡片容器 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 卡片1：2vCPU 4GiB 宝塔Linux面板 -->
      <div class="card-border rounded  h-full ">
        <div style="padding: 30px 30px 0 30px"  class="bg_m">
          <div class="font-semibold text-gray-800 mb-2">轻量应用服务器2vCPU 4GiB</div>
          <p class="text-xs text-gray-desc mb-4">适用于搭建Web应用/小程序</p>

          <div class="grid grid-cols-3 gap-2 text-sm mb-8">
            <div>
              <p class="text-gray-desc">应用镜像</p>
              <p class="mt-1">宝塔Linux面板</p>
            </div>
            <div>
              <p class="text-gray-desc">购买时长</p>
              <p class="mt-1">1个月</p>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-orange-price text-xl font-bold">¥70<span class="text-sm font-normal">.00/1月</span></p>
            <p class="text-xs text-gray-light mt-1">官网折扣价:¥70.00/1月</p>
          </div>
        </div>

        <div style="padding: 20px 0; width: 100%; background: #F4F8FE">
        <button class="w-[100px] h-[32px] border border-gray-300 rounded flex items-center justify-center mx-auto hover:bg-gray-50 transition-colors">
          立即购买
        </button>
        </div>
      </div>

      <!-- 卡片2：4vCPU 16GiB 翼龙面板 -->
      <div class="card-border rounded h-full ">
        <div style="padding: 30px 30px 0 30px"  class="bg_m">
        <div class="font-semibold text-gray-800 mb-2">轻量应用服务器4vCPU 16GiB</div>
        <p class="text-xs text-gray-desc mb-4">适用于搭建游戏自建服</p>

        <div class="grid grid-cols-3 gap-2 text-sm mb-8">
          <div>
            <p class="text-gray-desc">应用镜像</p>
            <p class="mt-1">翼龙面板</p>
          </div>
          <div>
            <p class="text-gray-desc">购买时长</p>
            <p class="mt-1">1个月</p>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-orange-price text-xl font-bold">¥300<span class="text-sm font-normal">.00/1月</span></p>
          <p class="text-xs text-gray-light mt-1">官网折扣价:¥300.00/1月</p>
        </div>
        </div>
        <div style="padding: 20px 0; width: 100%; background: #F4F8FE">
          <button class="w-[100px] h-[32px] border border-gray-300 rounded flex items-center justify-center mx-auto hover:bg-gray-50 transition-colors">
            立即购买
          </button>
        </div>


      </div>

      <!-- 卡片3：2vCPU 1GiB WooCommerce -->
      <div class="card-border rounded  h-full ">
        <div style="padding: 30px 30px 0 30px"  class="bg_m">
        <div class="font-semibold text-gray-800 mb-2">轻量应用服务器2vCPU 1GiB</div>
        <p class="text-xs text-gray-desc mb-4">适用于搭建电商独立站</p>

        <div class="grid grid-cols-3 gap-2 text-sm mb-8">
          <div>
            <p class="text-gray-desc">应用镜像</p>
            <p class="mt-1">WooCommerce</p>
          </div>
          <div>
            <p class="text-gray-desc">购买时长</p>
            <p class="mt-1">1年</p>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-orange-price text-xl font-bold">¥408<span class="text-sm font-normal">.00/1年</span></p>
          <p class="text-xs text-gray-light mt-1">官网折扣价:¥408.00/1年</p>
        </div>
        </div>
        <div style="padding: 20px 0; width: 100%; background: #F4F8FE">
        <button class="w-[100px] h-[32px] border border-gray-300 rounded flex items-center justify-center mx-auto hover:bg-gray-50 transition-colors">
          立即购买
        </button>
        </div>
      </div>

      <!-- 卡片4：2vCPU 4GiB WordPress -->
      <div class="card-border rounded h-full ">
        <div style="padding: 30px 30px 0 30px " class="bg_m">
        <div class="font-semibold text-gray-800 mb-2">轻量应用服务器2vCPU 4GiB</div>
        <p class="text-xs text-gray-desc mb-4">适用于网站搭建</p>

        <div class="grid grid-cols-3 gap-2 text-sm mb-8">
          <div>
            <p class="text-gray-desc">应用镜像</p>
            <p class="mt-1">WordPress</p>
          </div>
          <div>
            <p class="text-gray-desc">购买时长</p>
            <p class="mt-1">1年</p>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-orange-price text-xl font-bold">¥714<span class="text-sm font-normal">.00/1年</span>
            <a href="#" class="text-blue-primary text-xs font-normal ml-1">了解优惠</a>
          </p>
          <p class="text-xs text-gray-light mt-1">官网折扣价:¥714.00/1年</p>
        </div>
        </div>
        <div style="padding: 20px 0; width: 100%; background: #F4F8FE">
        <button class="w-[100px] h-[32px] border border-gray-300 rounded flex items-center justify-center mx-auto hover:bg-gray-50 transition-colors">
          立即购买
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSet',
  props: {
    title: {
      type: String,
      default: '云上<span class="text-blue-primary">“应盒子”</span>：跨境电商/小游戏<span class="text-blue-primary">低成本部署优选</span>'
    },
    description: {
      type: String,
      default: 'BGP 全球覆盖+200Mbps带宽，独立站/小游戏丝滑运行'
    }
  }
}
</script>

<style scoped>
/* 补充少量自定义样式，匹配设计图细节 */
.card-border {
  border: 1px solid #e5e7eb;
}
.text-orange-price {
  color: #ff6600; /* 更新为新的主橙色 */
}
.text-gray-desc {
  color: #6b7280;
}
.text-gray-light {
  color: #9ca3af;
}
.bg_m{
  background: linear-gradient(180deg, #ECF2FF 0%, rgba(255, 255, 255, 0.10) 100%);;
}
</style>


