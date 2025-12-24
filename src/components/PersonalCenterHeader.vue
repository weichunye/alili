<template>
  <header class="border-b border-ali-gray bg-white sticky top-0 z-10">
    <div class="flex items-center justify-between px-4 h-12">
      <!-- 左侧logo和标题 -->
      <div class="flex items-center space-x-2">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-ali-blue" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm175.7 618.2l-25.9-28.8c-3.5-3.9-9.8-3.9-13.3 0L485.6 767.5c-4.2 4.6-11 4.6-15.2 0L349.5 653.4c-3.5-3.9-9.8-3.9-13.3 0l-25.9 28.8c-3.6 4-2.9 10.3 1.4 14l152.4 166c4.4 4.8 11.9 4.8 16.3 0l152.4-166c4.3-3.7 5-10 1.4-14z" fill="currentColor"/>
          </svg>
          <router-link to="/" class="ml-1 text-lg font-medium">阿里云</router-link>
          <span class="text-ali-gray-dark text-sm ml-1">工作台</span>
        </div>
      </div>

      <!-- 中间搜索框 -->
      <div class="flex-1 max-w-xl mx-8">
        <div class="relative">
          <input type="text" placeholder="搜索" class="w-full h-8 px-3 pr-8 rounded border border-ali-gray focus:outline-none focus:border-ali-blue text-sm">
          <i class="fa fa-search absolute right-3 top-2 text-ali-gray-dark"></i>
        </div>
      </div>

      <!-- 右侧功能按钮和用户信息 -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-3 text-sm">
          <span>费用</span>
          <span>售管</span>
          <span>企业</span>
          <span>支持</span>
          <span>工单</span>
          <i class="fa fa-bell-o text-ali-gray-dark"></i>
          <i class="fa fa-question-circle-o text-ali-gray-dark"></i>
          <i class="fa fa-cog text-ali-gray-dark"></i>
          <div class="h-4 w-px bg-ali-gray"></div>
          <div class="flex items-center">
            <img src="https://picsum.photos/24/24" alt="用户头像" class="w-6 h-6 rounded-full mr-1">
            <i class="fa fa-angle-down text-ali-gray-dark text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PersonalCenterHeader'
}
</script>

<style scoped>
/* 个人中心头部样式 */
</style>