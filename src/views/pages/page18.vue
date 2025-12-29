<template>
  <div class="aliyun-page your-bg-class">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />

    <!-- 页面容器 -->
    <div class="flex flex-col lg:flex-row max-w-[1600px] mx-auto px-4 py-6 gap-6">
      <!-- 左侧主内容区 -->
      <div class="w-full lg:w-2/3 bg-white rounded-lg shadow-sm p-6">
        <!-- 头部信息 -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-cubes text-primary text-lg"></i>
            <h1 class="text-xl font-semibold text-neutral-700">万相营造-API服务-商详长图</h1>
          </div>
          <div class="text-sm text-neutral-500">
            <span>近60天成交</span>
            <span class="font-medium text-neutral-600 mx-1">3</span>
            <span>笔</span>
            <span class="mx-3">|</span>
            <span>评论</span>
            <span class="font-medium text-neutral-600 mx-1">0</span>
            <span>条</span>
            <span class="mx-3">|</span>
            <span>评分</span>
            <span class="font-medium text-neutral-600 mx-1">0</span>
            <span>•</span>
          </div>
        </div>

        <!-- 服务简介 -->
        <p class="text-neutral-500 text-sm mb-6">
          根据输入的商品图片和文字描述，制作精美的详情长图，可用于各种电商平台的商品详情。
        </p>

        <!-- 评分与响应信息 -->
        <div class="flex flex-wrap gap-6 mb-8 pb-4 border-b border-neutral-200">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-star text-warning"></i>
            <span class="text-sm text-neutral-500">商品评分</span>
            <span class="font-medium text-neutral-600">4/10</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-clock text-neutral-400"></i>
            <span class="text-sm text-neutral-500">响应时间(近7天)</span>
            <span class="font-medium text-neutral-600">269ms</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-success"></i>
            <span class="text-sm text-neutral-500">SLA(近一月)</span>
            <span class="font-medium text-neutral-600">100%</span>
          </div>
        </div>

        <!-- 商品亮点 -->
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-neutral-700 mb-2">商品亮点</h2>
          <p class="text-neutral-500 text-sm">
            只上传商品原图，由AI制定整套设计方案，自动撰写文案、生成丰富的场景展示图片，快速制作漂亮又有内容的商品详情长图。
          </p>
          <div class="mt-3 text-xs text-neutral-400 bg-neutral-100 p-3 rounded">
            <p class="mb-1"><i class="fa-solid fa-info-circle text-primary mr-1"></i>云市场服务保障：担保交易，服务全程保障，不支持5天无理由退款</p>
            <p><i class="fa-solid fa-exclamation-triangle text-warning mr-1"></i>(请勿线下交易！90%的欺诈、纠纷、资金盗取均由线下交易导致。)</p>
          </div>
        </div>

        <!-- API调试与MCP区域 -->
        <div class="border border-neutral-200 rounded-lg overflow-hidden">
          <!-- 标签栏 -->
          <div class="flex bg-neutral-100 border-b border-neutral-200">
            <div class="bg-primary text-white px-4 py-2 font-medium">API调试</div>
            <div class="flex items-center px-4 py-2 text-neutral-600 font-medium">
              MCP <span class="ml-1 bg-orange-500 text-white text-xs px-1 rounded">新</span>
            </div>
          </div>

          <!-- 左侧API导航 -->
          <div class="flex">
            <div class="w-48 bg-neutral-100 p-3 border-r border-neutral-200">
              <ul class="text-sm">
                <li class="mb-2 p-1 hover:bg-neutral-200 rounded cursor-pointer">万相星链-智能商详-提交</li>
                <li class="p-1 hover:bg-neutral-200 rounded cursor-pointer">万相星链-智能商详-查询</li>
              </ul>
            </div>

            <!-- 右侧API内容区 -->
            <div class="flex-1 p-4">
              <!-- 请求方式与路径 -->
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-neutral-700 text-white px-2 py-1 rounded text-sm">POST</div>
                <div class="text-sm text-neutral-700">/maigc/api/starlink/submit</div>
                <button class="ml-auto bg-primary text-white px-3 py-1 rounded text-sm">发送请求</button>
              </div>

              <!-- 标签页 -->
              <div class="flex border-b border-neutral-200 mb-4">
                <div class="px-4 py-2 text-primary border-b-2 border-primary font-medium text-sm cursor-pointer">接口文档</div>
                <div class="px-4 py-2 text-neutral-500 text-sm cursor-pointer hover:text-neutral-700">请求示例</div>
                <div class="px-4 py-2 text-neutral-500 text-sm cursor-pointer hover:text-neutral-700">成功响应</div>
                <div class="px-4 py-2 text-neutral-500 text-sm cursor-pointer hover:text-neutral-700">失败响应</div>
                <div class="px-4 py-2 text-neutral-500 text-sm cursor-pointer hover:text-neutral-700">错误码</div>
              </div>

              <!-- 双列布局：请求参数 & 接口信息 -->
              <div class="flex gap-4">
                <!-- 请求参数区域 -->
                <div class="w-1/2">
                  <!-- Header/Query/Body 切换 -->
                  <div class="flex border border-neutral-200 rounded-t mb-0">
                    <div class="px-3 py-1 bg-neutral-200 text-neutral-700 text-sm font-medium border-r border-neutral-200">请求参数 (Header)</div>
                    <div class="px-3 py-1 bg-neutral-100 text-neutral-500 text-sm cursor-pointer hover:bg-neutral-200 hover:text-neutral-700 border-r border-neutral-200">请求参数 (Query)</div>
                    <div class="px-3 py-1 bg-neutral-100 text-neutral-500 text-sm cursor-pointer hover:bg-neutral-200 hover:text-neutral-700">请求参数 (Body)</div>
                  </div>
                  <!-- 请求参数内容 -->
                  <div class="border border-t-0 border-neutral-200 rounded-b bg-neutral-50 p-2 h-80 overflow-auto scrollbar-thin">
                                    <pre class="text-xs text-neutral-700 whitespace-pre-wrap">
[
  "images": [
    "https://tps.alicdn.com/iegwtr/4/01091/pa/9e792g-w7cl7d_11000000000300/9p-000-000.jpg",
    "https://tps.alicdn.com/iegwtr/4/01091/9q/81d0012ce_x10000000000860/9p-000-000.jpg",
    "https://tps.alicdn.com/iegwtr/4/01091/qaym18826zEx_x10000000000890/9p-000-000.jpg",
    "https://tps.alicdn.com/iegwtr/4/01091/08E881-d1i7f9qw_x10000000000370/9p-000-000.jpg",
    "https://tps.alicdn.com/iegwtr/4/01091/05513121&e75T9K_x10000000000370/9p-000-000.jpg",
  ],
  "introText": "精选全和大优产区—云南核桃、新疆巴旦木、
  美国碧根果、泰国龙眼桂圆、越南腰果均为当季新货，科学配比，每
  一颗都裹腹饱满！每罐约500g，满足每日坚果需求！5种植物蛋白多种维
  素，解馋无负担！每罐包含6种坚果+5种植物蛋白及多种维
  素，营养升级，助力大脑活力！网红办公室零食，独立小包装，开袋即食，办
  公室、居家、旅行必备！精心挑选原料，人工挑选，坏果率低，颗
  颗饱满！坚持365天，感恩由内而外的轻盈与专注，现在下单，享富贵尝鲜价，
  把世界好坚果装进口袋！"
]
                                    </pre>
                  </div>
                </div>

                <!-- 接口信息区域 -->
                <div class="w-1/2">
                  <h3 class="text-sm font-medium text-neutral-700 mb-2">接口信息</h3>
                  <div class="space-y-3 text-sm">
                    <div>
                      <span class="text-neutral-500">调用地址:</span>
                      <span class="text-neutral-700">https://hongpic.market.aliicloud.com/maigc/api/starlink/submit</span>
                    </div>
                    <div>
                      <span class="text-neutral-500">请求方式:</span>
                      <span class="text-neutral-700 font-medium">POST</span>
                    </div>
                    <div>
                      <span class="text-neutral-500">返回类型:</span>
                      <span class="text-neutral-700">JSON</span>
                    </div>
                    <div>
                      <span class="text-neutral-500">API 调用:</span>
                      <a href="#" class="text-primary hover:underline">API 密钥身份认证调用方法（APPCODE）</a>
                    </div>
                    <div>
                      <span class="text-neutral-500">API 签名认证调用方法:</span>
                      <a href="#" class="text-primary hover:underline">（AppKey & AppSecret）</a>
                    </div>
                    <div>
                      <span class="text-neutral-500">默认认证:</span>
                      <a href="#" class="text-primary hover:underline">AppKey & AppCode</a>
                    </div>
                  </div>

                  <!-- 接口参数 -->
                  <div class="mt-6">
                    <h3 class="text-sm font-medium text-neutral-700 mb-2">接口参数</h3>
                    <div class="space-y-1 text-sm">
                      <div class="flex items-center gap-1">
                        <i class="fa-solid fa-chevron-right text-xs text-neutral-400"></i>
                        <span class="text-neutral-500">请求参数 (Header)</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <i class="fa-solid fa-chevron-right text-xs text-neutral-400"></i>
                        <span class="text-neutral-500">请求参数 (Query)</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <i class="fa-solid fa-chevron-right text-xs text-neutral-400"></i>
                        <span class="text-neutral-500">请求参数 (Body)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧侧边栏 -->
      <div class="w-full lg:w-1/3 bg-white rounded-lg shadow-sm p-6">
        <!-- 店铺信息 -->
        <div class="mb-6 pb-4 border-b border-neutral-200">
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-semibold text-neutral-700">万相营造-云市场精选店</h2>
            <i class="fa-solid fa-ellipsis text-neutral-400 cursor-pointer"></i>
          </div>
          <div class="flex items-center text-sm text-neutral-500 mb-2">
            <i class="fa-solid fa-door-open mr-1"></i>
            <span>用户预订订单：</span>
            <span class="text-neutral-700 ml-1">77450015535</span>
          </div>
          <div class="text-sm text-primary cursor-pointer hover:underline">
            更多服务信息 <i class="fa-solid fa-angle-down text-xs"></i>
          </div>
        </div>

        <!-- 价格与试用区域 -->
        <div class="bg-neutral-50 rounded-lg p-4 border border-neutral-200 mb-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="bg-orange-500 text-white text-sm px-2 py-1 rounded-full font-medium">免费</span>
            <i class="fa-solid fa-ellipsis text-neutral-400 ml-auto cursor-pointer"></i>
          </div>

          <!-- 免费试用按钮 -->
          <div class="flex items-center mb-4">
            <button class="bg-primary text-white px-3 py-1 rounded text-sm mr-2">免费试用</button>
            <span class="text-xs text-neutral-500">380次调用</span>
            <span class="text-xs text-neutral-500 mx-1">|</span>
            <span class="text-xs text-neutral-500">1200次调用</span>
          </div>

          <!-- 套餐版本 -->
          <div class="mb-4">
            <label class="block text-sm text-neutral-500 mb-1">套餐版本:</label>
            <div class="relative">
              <select class="w-full bg-white border border-neutral-200 rounded px-2 py-1 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary">
                <option>1200次</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 购买时长 -->
          <div class="mb-6">
            <label class="block text-sm text-neutral-500 mb-1">购买时长:</label>
            <div class="relative">
              <select class="w-full bg-white border border-neutral-200 rounded px-2 py-1 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary">
                <option>试用30天</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 橙色试用按钮 -->
          <button class="w-full bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition-colors">
            免费试用
          </button>
        </div>
      </div>
    </div>

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


