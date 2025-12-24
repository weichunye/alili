<template>
  <div>
    <!-- 标题区域 -->
    <div class="mb-6">
      <h1 class="text-[28px] font-bold text-gray-900" v-html="title"></h1>
      <p class="mt-2 text-sm text-gray-desc">{{ description }}</p>
    </div>

    <!-- 产品卡片容器 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 动态生成的卡片 -->
      <div v-for="(card, index) in productCards" :key="index" class="card-border rounded h-full">
        <div style="padding: 30px 30px 0 30px" class="bg_m">
          <div class="font-semibold text-gray-800 mb-2">{{ card.title }}</div>
          <p class="text-xs text-gray-desc mb-4">{{ card.description }}</p>

          <div class="grid grid-cols-3 gap-2 text-sm mb-8">
            <div>
              <p class="text-gray-desc">应用镜像</p>
              <p class="mt-1">{{ card.image }}</p>
            </div>
            <div>
              <p class="text-gray-desc">购买时长</p>
              <p class="mt-1">{{ card.duration }}</p>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-orange-price text-xl font-bold">¥{{ card.price }}<span class="text-sm font-normal">.00/{{ card.durationUnit }}</span>
              <a v-if="card.hasDiscount" href="#" class="text-blue-primary text-xs font-normal ml-1">了解优惠</a>
            </p>
            <p class="text-xs text-gray-light mt-1">官网折扣价:¥{{ card.price }}.00/{{ card.durationUnit }}</p>
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
    },
    count: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      productCards: []
    }
  },
  mounted() {
    this.generateProductCards()
  },
  methods: {
    generateProductCards() {
      // 假数据模板数组
      const cpuOptions = ['2vCPU', '4vCPU', '8vCPU']
      const memoryOptions = ['1GiB', '4GiB', '8GiB', '16GiB']
      const imageOptions = ['宝塔Linux面板', '翼龙面板', 'WooCommerce', 'WordPress', 'LAMP', 'Node.js']
      const durationOptions = ['1个月', '3个月', '6个月', '1年']
      const durationUnitOptions = ['1月', '1年']
      const descriptionOptions = [
        '适用于搭建Web应用/小程序',
        '适用于搭建游戏自建服',
        '适用于搭建电商独立站',
        '适用于网站搭建',
        '适用于开发测试环境',
        '适用于企业级应用部署'
      ]

      // 生成假数据
      this.productCards = Array.from({ length: this.count }, (_, index) => {
        const cpu = cpuOptions[Math.floor(Math.random() * cpuOptions.length)]
        const memory = memoryOptions[Math.floor(Math.random() * memoryOptions.length)]
        const image = imageOptions[Math.floor(Math.random() * imageOptions.length)]
        const duration = durationOptions[Math.floor(Math.random() * durationOptions.length)]
        const durationUnit = duration.includes('年') ? '1年' : '1月'
        const description = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)]
        const price = Math.floor(Math.random() * 1000) + 50 // 50-1050之间的随机价格
        const hasDiscount = Math.random() > 0.7 // 30%概率有优惠

        return {
          title: `轻量应用服务器${cpu} ${memory}`,
          description,
          image,
          duration,
          durationUnit,
          price,
          hasDiscount
        }
      })
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
  background: linear-gradient(180deg, #ECF2FF 0%, rgba(255, 255, 255, 0.10) 100%);
}
</style>

