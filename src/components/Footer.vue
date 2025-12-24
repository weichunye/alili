<template>
  <el-footer class="footer" style="background: #ececec; width: 100%; height: 430px; padding-top: 40px">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 mb-8">
      <!-- 为什么选择阿里云 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">为什么选择阿里云</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">什么是云计算</a></li>
          <li><a href="#" class="text-link-hover">全球基础设施</a></li>
          <li><a href="#" class="text-link-hover">技术领先</a></li>
          <li><a href="#" class="text-link-hover">稳定可靠</a></li>
          <li><a href="#" class="text-link-hover">安全合规</a></li>
          <li><a href="#" class="text-link-hover">分析师报告</a></li>
        </ul>
      </div>

      <!-- 产品和定价 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">产品和定价</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">全部产品</a></li>
          <li><a href="#" class="text-link-hover">免费试用</a></li>
          <li><a href="#" class="text-link-hover">产品动态</a></li>
          <li><a href="#" class="text-link-hover">产品定价</a></li>
          <li><a href="#" class="text-link-hover">配置报价器</a></li>
          <li><a href="#" class="text-link-hover">云上成本管理</a></li>
        </ul>
      </div>

      <!-- 解决方案 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">解决方案</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">技术解决方案</a></li>
        </ul>
      </div>

      <!-- 文档与社区 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">文档与社区</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">文档</a></li>
          <li><a href="#" class="text-link-hover">开发者社区</a></li>
          <li><a href="#" class="text-link-hover">天池大赛</a></li>
          <li><a href="#" class="text-link-hover">培训与认证</a></li>
        </ul>
      </div>

      <!-- 权益中心 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">权益中心</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">免费试用</a></li>
          <li><a href="#" class="text-link-hover">解决方案免费试用</a></li>
          <li><a href="#" class="text-link-hover">高校计划</a></li>
          <li><a href="#" class="text-link-hover">5亿算力补贴</a></li>
          <li><a href="#" class="text-link-hover">推荐返现计划</a></li>
        </ul>
      </div>

      <!-- 支持与服务 -->
      <div>
        <h3 class="text-gray-800 font-medium mb-3">支持与服务</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="text-link-hover">基础服务</a></li>
          <li><a href="#" class="text-link-hover">企业增值服务</a></li>
          <li><a href="#" class="text-link-hover">迁云服务</a></li>
          <li><a href="#" class="text-link-hover">官网公告</a></li>
          <li><a href="#" class="text-link-hover">健康看板</a></li>
          <li><a href="#" class="text-link-hover">信任中心</a></li>
        </ul>
      </div>

      <!-- 关注阿里云 -->
      <div class="col-span-2 lg:col-span-2">
        <h3 class="text-gray-800 font-medium mb-3">关注阿里云</h3>
        <p class="text-sm text-gray-600 mb-3">关注阿里云公众号或下载阿里云APP，关注云资讯，随时随地运维管控云服务</p>
        <!-- 二维码占位（实际项目中替换为真实图片） -->
        <div class="flex gap-2 mb-3">
          <div class="w-16 h-16 bg-gray-300 rounded"></div>
          <div class="w-16 h-16 bg-gray-300 rounded"></div>
        </div>
        <p class="text-sm text-gray-600">联系我们：4008013260</p>
      </div>
    </div>

    <!-- 分割线 -->
    <hr class="border-gray-300 mb-6 max-w-7xl mx-auto">

    <!-- 第二部分：法律相关链接 -->
    <div class="max-w-7xl mx-auto mb-4">
      <ul class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
        <li><a href="#" class="text-link-hover">法律声明</a></li>
        <li><a href="#" class="text-link-hover">Cookies政策</a></li>
        <li><a href="#" class="text-link-hover">廉正举报</a></li>
        <li><a href="#" class="text-link-hover">安全举报</a></li>
        <li><a href="#" class="text-link-hover">联系我们</a></li>
        <li><a href="#" class="text-link-hover">加入我们</a></li>
      </ul>
    </div>

    <!-- 第三部分：关联品牌和版权信息 -->
    <div class="max-w-7xl mx-auto text-sm text-gray-600 space-y-2">
      <p>阿里巴巴集团 淘宝网 天猫 全球速卖通 阿里巴巴国际交易市场 1688 阿里妈妈 飞猪 阿里云计算 AIIOS 万网 高德 UC 友盟 优酷 钉钉 支付宝 达摩院 淘宝海外 阿里云盘 饿了么</p>
      <p>© 2009-现在 Aliyun.com 版权所有 增值电信业务经营许可证：浙B2-20080101 域名注册服务机构许可：浙D3-20210002</p>
      <p>浙公网安备 33010602009975号 浙B2-20080101-4</p>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
