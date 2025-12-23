<template>
  <div>
      <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 1. .xyz域名卡片 -->
        <div class="bg-light rounded-lg border border-border p-6 card-shadow flex flex-col justify-between">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium text-black">.xyz</h3>
                    <i class="fa-solid fa-angle-right text-gray-400"></i>
                </div>
                <p class="text-sm text-secondary mb-4 text-line-clamp-2">极具想象空间和无限创意，与年轻人拉近距离</p>
                
                <!-- 域名查询 -->
                <div class="mb-4">
                    <p class="text-sm mb-2">查询域名能否注册</p>
                    <div class="flex items-center">
                        <input type="text" placeholder="请输入域名前缀" class="flex-1 h-10 px-3 border border-border rounded-l focus:outline-none focus:ring-1 focus:ring-primary">
                        <span class="h-10 px-2 flex items-center justify-center border-t border-b border-border bg-gray-100">.xyz</span>
                        <button class="h-10 px-4 bg-primary text-white rounded-r hover:bg-opacity-90 transition-colors">查询</button>
                    </div>
                </div>
                
                <!-- 商品属性 -->
                <div class="space-y-3 mb-6">
                    <div>
                        <p class="text-sm mb-1">商品优势</p>
                        <p class="text-base font-medium text-black">可自由定义</p>
                    </div>
                    <div>
                        <p class="text-sm mb-1">购买时长</p>
                        <p class="text-base font-medium text-black">1年</p>
                    </div>
                </div>
                
                <!-- 优惠标签 -->
                <div class="flex gap-2 mb-4">
                    <span class="text-xs px-2 py-1 bg-discount/10 text-discount rounded">新用户专享</span>
                    <span class="text-xs px-2 py-1 bg-discount/10 text-discount rounded">首单0.7折</span>
                </div>
                
                <!-- 价格 -->
                <div class="flex items-baseline mb-2">
                    <span class="text-primary text-xl font-bold">¥1.00</span>
                    <span class="text-sm text-secondary ml-1">/首年</span>
                    <a href="#" class="text-sm text-primary ml-2 hover:underline">了解优惠</a>
                </div>
                <p class="text-xs text-gray-500">官网折扣价: ¥109.00/首年</p>
            </div>
            
            <!-- 操作按钮 -->
            <button class="w-full h-10 border border-black bg-white text-black hover:bg-gray-50 transition-colors rounded">立即购买</button>
        </div>

        <!-- 2. 应用型负载均衡ALB卡片 -->
        <div class="bg-light rounded-lg border border-border p-6 card-shadow flex flex-col justify-between">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium text-black">应用型负载均衡ALB 按量付费</h3>
                    <i class="fa-solid fa-angle-right text-gray-400"></i>
                </div>
                <p class="text-sm text-secondary mb-4 text-line-clamp-2">新一代7层超强性能负载均衡，基于内容路由</p>
                
                <!-- 商品属性 -->
                <div class="space-y-4 mb-6">
                    <div class="relative">
                        <p class="text-sm mb-1">实例网络类型</p>
                        <div class="flex items-center justify-between h-10 px-3 border border-border rounded bg-white cursor-pointer hover:border-primary transition-colors">
                            <p class="text-base font-medium text-black">公网</p>
                            <i class="fa-solid fa-angle-down text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative">
                        <p class="text-sm mb-1">协议版本</p>
                        <div class="flex items-center justify-between h-10 px-3 border border-border rounded bg-white cursor-pointer hover:border-primary transition-colors">
                            <p class="text-base font-medium text-black">IPV4</p>
                            <i class="fa-solid fa-angle-down text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative">
                        <p class="text-sm mb-1">功能版本 (实例费)</p>
                        <div class="flex items-center justify-between h-10 px-3 border border-border rounded bg-white cursor-pointer hover:border-primary transition-colors">
                            <p class="text-base font-medium text-black">基础版</p>
                            <i class="fa-solid fa-angle-down text-gray-400"></i>
                        </div>
                    </div>
                </div>
                
                <!-- 价格 -->
                <div class="flex items-baseline mb-2">
                    <p class="text-sm mb-1">功能版本 (实例费)</p>
                    <span class="text-primary text-xl font-bold">¥0.042</span>
                    <span class="text-sm text-secondary ml-1">/小时起</span>
                    <a href="#" class="text-sm text-primary ml-2 hover:underline">了解优惠</a>
                </div>
                <p class="text-xs text-gray-500">官网折扣价: ¥0.042/小时</p>
                
                <!-- 下拉占位 -->
                <div class="relative mt-4">
                    <div class="flex items-center justify-between h-10 px-3 border border-border rounded bg-white cursor-pointer hover:border-primary transition-colors">
                        <p class="text-sm text-secondary">&nbsp;</p>
                        <i class="fa-solid fa-angle-down text-gray-400"></i>
                    </div>
                </div>
            </div>
            
            <!-- 操作按钮 -->
            <button class="w-full h-10 border border-black bg-white text-black hover:bg-gray-50 transition-colors rounded">立即购买</button>
        </div>

        <!-- 3. OSS对象存储卡片 -->
        <div class="bg-light rounded-lg border border-border p-6 card-shadow flex flex-col justify-between">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium text-black">OSS-对象存储 标准-本地冗余</h3>
                    <i class="fa-solid fa-angle-right text-gray-400"></i>
                </div>
                <p class="text-sm text-secondary mb-4 text-line-clamp-2">海量、安全、低成本、高可靠的云存储服务</p>
                
                <!-- 商品属性 -->
                <div class="space-y-3 mb-6">
                    <div>
                        <p class="text-sm mb-1">地域</p>
                        <p class="text-base font-medium text-black">中国内地通用</p>
                    </div>
                    <div>
                        <p class="text-sm mb-1">标准-本地冗余存储规格</p>
                        <p class="text-base font-medium text-black">40GB</p>
                    </div>
                    <div>
                        <p class="text-sm mb-1">购买时长</p>
                        <p class="text-base font-medium text-black">1年</p>
                    </div>
                </div>
                
                <!-- 价格 -->
                <div class="flex items-baseline mb-2">
                    <span class="text-primary text-xl font-bold">¥9.00</span>
                    <span class="text-sm text-secondary ml-1">/1年</span>
                    <a href="#" class="text-sm text-primary ml-2 hover:underline">了解优惠</a>
                </div>
                <p class="text-xs text-gray-500">官网折扣价: ¥9.00/1年</p>
            </div>
            
            <!-- 操作按钮 -->
            <div class="flex gap-3">
                <button class="flex-1 h-10 border border-gray-300 bg-white text-secondary hover:bg-gray-50 transition-colors rounded">加入购物车</button>
                <button class="flex-1 h-10 bg-primary text-white hover:bg-opacity-90 transition-colors rounded">立即购买</button>
            </div>
        </div>

        <!-- 4. RDS MySQL卡片 -->
        <div class="bg-light rounded-lg border border-border p-6 card-shadow flex flex-col justify-between">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-medium text-black">RDS MySQL 基础系列倚天版</h3>
                    <i class="fa-solid fa-angle-right text-gray-400"></i>
                </div>
                <p class="text-sm text-secondary mb-4 text-line-clamp-2">新客专属折扣，高性价比上云</p>
                
                <!-- 商品属性 -->
                <div class="space-y-3 mb-6">
                    <div>
                        <p class="text-sm mb-1">实例规格</p>
                        <p class="text-base font-medium text-black">1核2GB (通用型)</p>
                    </div>
                    <div>
                        <p class="text-sm mb-1">存储大小</p>
                        <p class="text-base font-medium text-black">50GB</p>
                    </div>
                    <div>
                        <p class="text-sm mb-1">购买时长</p>
                        <p class="text-base font-medium text-black">1年</p>
                    </div>
                </div>
                
                <!-- 优惠标签 -->
                <div class="flex gap-2 mb-4">
                    <span class="text-xs px-2 py-1 bg-discount/10 text-discount rounded">限1件</span>
                    <span class="text-xs px-2 py-1 bg-discount/10 text-discount rounded">新人专享</span>
                </div>
                
                <!-- 价格 -->
                <div class="flex items-baseline mb-2">
                    <span class="text-primary text-xl font-bold">¥88.00</span>
                    <span class="text-sm text-secondary ml-1">/1年起</span>
                    <a href="#" class="text-sm text-primary ml-2 hover:underline">了解优惠</a>
                </div>
                <p class="text-xs text-gray-500">官网折扣价: ¥324.00/1年</p>
            </div>
            
            <!-- 操作按钮 -->
            <div class="flex gap-3">
                <button class="flex-1 h-10 border border-gray-300 bg-white text-secondary hover:bg-gray-50 transition-colors rounded">加入购物车</button>
                <button class="flex-1 h-10 bg-primary text-white hover:bg-opacity-90 transition-colors rounded">立即购买</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSetA',

}
</script>

<style scoped>

</style>
