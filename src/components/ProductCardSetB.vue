<template>
  <div>
    <div class=" mx-auto px-4 py-8">
      <!-- 页面标题 -->
      <div class="mb-8">
        <h1 class="text-[28px] font-bold mb-2">超160款云产品免费试用</h1>
        <p class="text-gray-500 text-sm">
          免费开启云上实践之旅，助力开发者和企业快速上云
          <a href="#" class="text-primary hover:underline ml-1">试用规则</a>
        </p>
      </div>

      <!-- 产品卡片容器 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 卡片1：ECS个人版 -->
        <div class="border border-gray-200 rounded-lg p-6 card-shadow">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <span class="text-gray-700">云服务器</span>
              <span class="ml-2 px-2 py-0.5 bg-blue-50 text-primary text-xs rounded-full">个人认证</span>
            </div>
            <span class="text-xs text-gray-500">额度3个月内有效</span>
          </div>

          <h2 class="text-lg font-semibold mb-3">云服务器ECS免费试用（个人版）</h2>
          <p class="text-sm text-gray-500 mb-4">
            专为开发者打造，适用于网站和应用的托管、开发及测试环境、多人在线游戏部署等。现支持香港地区试用。
          </p>

          <div class="text-primary text-xl font-bold mb-5">免费额度300元</div>

          <ul class="text-xs text-gray-500 space-y-2 mb-6">
            <li>规格信息：8个规格可选，最高可试用4核vCPU8GiB；7个地域可选；每月免费流量：20GB（中国内地地域）+200GB（非中国内地地域）；试用ECS不支持备案</li>
            <li>可试用人群：个人认证，且为产品新用户</li>
          </ul>

          <div class="flex justify-end items-center gap-3">
            <a href="#" class="text-xs text-gray-500 hover:text-primary">试用教程</a>
            <button class="px-4 py-1 border border-primary text-primary text-sm rounded hover:bg-primary/5">立即试用</button>
          </div>
        </div>

        <!-- 卡片2：ECS企业版 -->
        <div class="border border-gray-200 rounded-lg p-6 card-shadow">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <span class="text-gray-700">云服务器</span>
              <span class="ml-2 px-2 py-0.5 bg-orange-50 text-orange-primary text-xs rounded-full">企业认证</span>
            </div>
            <span class="text-xs text-gray-500">额度3个月内有效</span>
          </div>

          <h2 class="text-lg font-semibold mb-3">云服务器ECS免费试用（企业版）</h2>
          <p class="text-sm text-gray-500 mb-4">
            支持多台ECS、跨地域试用，期间可灵活更换配置，帮助企业轻松部署高可用性和负载均衡架构、分布式系统以及微服务和容器化等应用。
          </p>

          <div class="text-primary text-xl font-bold mb-5">免费额度660元</div>

          <ul class="text-xs text-gray-500 space-y-2 mb-6">
            <li>规格信息：12个规格可选，最高可试用8核vCPU16GiB；7个地域可选；每月免费流量：20GB（中国内地地域）+200GB（非中国内地地域）；试用ECS不支持备案</li>
            <li>可试用人群：企业认证，且为产品新用户</li>
            <li>商品特点：个人、企业试用不同享</li>
          </ul>

          <div class="flex justify-end items-center gap-3">
            <a href="#" class="text-xs text-gray-500 hover:text-primary">试用教程</a>
            <button class="px-4 py-1 border border-primary text-primary text-sm rounded hover:bg-primary/5">立即试用</button>
          </div>
        </div>

        <!-- 卡片3：轻量应用服务器 2vCPU 1GiB -->
        <div class="border border-gray-200 rounded-lg p-6 card-shadow">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-700">云服务器</span>
            <span class="text-xs text-gray-500">额度1个月内有效</span>
          </div>

          <h2 class="text-lg font-semibold mb-3">轻量应用服务器 2vCPU 1GiB</h2>
          <p class="text-sm text-gray-500 mb-4">
            预装WooCommerce镜像，您可快速搭建并管理在线商店，轻松添加商品、处理订单和管理库存，享受高效便捷的管理界面，轻松扩展业务。
          </p>

          <div class="text-primary text-xl font-bold mb-5">适用于搭建电商独立站</div>

          <ul class="text-xs text-gray-500 space-y-2 mb-6">
            <li>可试用人群：认证用户，且为产品新用户</li>
            <li>商品特点：支持东京、伦敦等14个海外地域（不含中国香港）试用</li>
            <li>商品功能：贴近应用，简单易用</li>
            <li>商品优势：200Mbps峰值带宽</li>
          </ul>

          <div class="flex justify-end items-center gap-3">
            <a href="#" class="text-xs text-gray-500 hover:text-primary">试用教程</a>
            <button class="px-4 py-1 border border-primary text-primary text-sm rounded hover:bg-primary/5">立即试用</button>
          </div>
        </div>

        <!-- 卡片4：轻量应用服务器 2vCPU 4GiB -->
        <div class="border border-gray-200 rounded-lg p-6 card-shadow">
          <div class="flex justify-between items-center mb-4">
            <span class="text-gray-700">云服务器</span>
            <span class="text-xs text-gray-500">额度1个月内有效</span>
          </div>

          <h2 class="text-lg font-semibold mb-3">轻量应用服务器 2vCPU 4GiB</h2>
          <p class="text-sm text-gray-500 mb-4">
            专为Web应用及小程序开发者打造，预装宝塔Linux面板阿里云专家版，显著提升部署效率，让您专注核心功能开发。
          </p>

          <div class="text-primary text-xl font-bold mb-5">适用于搭建Web应用/小程序</div>

          <ul class="text-xs text-gray-500 space-y-2 mb-6">
            <li>可试用人群：认证用户，且为产品新用户</li>
            <li>商品特点：支持北京、上海等14个中国内地地域试用</li>
            <li>商品功能：贴近应用，简单易用</li>
            <li>商品优势：200Mbps峰值带宽</li>
          </ul>

          <div class="flex justify-end items-center gap-3">
            <a href="#" class="text-xs text-gray-500 hover:text-primary">试用教程</a>
            <button class="px-4 py-1 border border-primary text-primary text-sm rounded hover:bg-primary/5">立即试用</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSetB',

}
</script>

<style scoped>

</style>

