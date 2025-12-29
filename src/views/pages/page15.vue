<template>
  <div class="aliyun-ai-platform">
    <!-- 个人中心顶部导航 -->
    <PersonalCenterHeader />
    
    <!-- 页面主体内容 -->
    <div class="personal-center-container">
      <!-- 左侧菜单 -->
      <div class="left-sidebar">
        <div class="menu-section">
          <div class="menu-title">产品与服务</div>
          <div class="menu-item active">我的试用</div>
        </div>
        
        <div class="menu-section">
          <div class="menu-title">费用与成本</div>
          <div class="menu-item">费用中心</div>
          <div class="menu-item">成本分析</div>
        </div>
        
        <div class="menu-section">
          <div class="menu-title">账号与安全</div>
          <div class="menu-item">账号管理</div>
          <div class="menu-item">安全设置</div>
          <div class="menu-item">访问控制</div>
        </div>
        
        <div class="menu-section">
          <div class="menu-title">支持与服务</div>
          <div class="menu-item">工单管理</div>
          <div class="menu-item">云市场</div>
        </div>
      </div>
      
      <!-- 右侧内容区域 -->
      <div class="main-content">
        <!-- 页面标题 -->
        <div class="content-header">
          <h2>我的试用</h2>
        </div>
        
        <!-- 操作栏 -->
        <div class="action-bar">
          <div class="tabs">
            <div class="tab active">全部试用</div>
            <div class="tab">待领取</div>
            <div class="tab">使用中</div>
          </div>
        </div>
        
        <!-- 筛选条件区域 -->
        <div class="filter-section">
          <div class="filter-row">
            <div class="filter-item">
              <label>产品类别</label>
              <select>
                <option>全部产品</option>
                <option>计算</option>
                <option>存储</option>
                <option>网络</option>
                <option>安全</option>
              </select>
            </div>
            
            <div class="filter-item">
              <label>实例状态</label>
              <select>
                <option>全部状态</option>
                <option>使用中</option>
                <option>已过期</option>
                <option>已释放</option>
              </select>
            </div>
            
            <div class="filter-item">
              <label>到期时间</label>
              <select>
                <option>全部时间</option>
                <option>近7天</option>
                <option>近30天</option>
                <option>近90天</option>
              </select>
            </div>
            
            <div class="filter-item">
              <label>试用类型</label>
              <select>
                <option>全部类型</option>
                <option>免费试用</option>
                <option>付费试用</option>
              </select>
            </div>
            
            <div class="filter-item">
              <label>实例名称</label>
              <input type="text" placeholder="请输入实例名称">
            </div>
            
            <div class="filter-item">
              <label>资源ID</label>
              <input type="text" placeholder="请输入资源ID">
            </div>
            
            <div class="filter-actions">
              <button class="btn btn-primary">查询</button>
              <button class="btn btn-secondary">重置</button>
            </div>
          </div>
        </div>
        
        <!-- 表格区域 -->
        <div class="table-section">
          <table class="data-table">
            <thead>
              <tr>
                <th>实例名称/ID</th>
                <th>产品</th>
                <th>实例规格</th>
                <th>创建时间</th>
                <th>到期时间</th>
                <th>试用类型</th>
                <th>实例状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- 表格内容将通过数据渲染 -->
              <tr>
                <td colspan="8" class="empty-row">暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- 分页区域 -->
        <div class="pagination-section">
          <div class="page-info">当前第 1 页，共 1 页，总计 0 条</div>
          <div class="pagination-controls">
            <button class="page-btn" disabled>上一页</button>
            <button class="page-btn active">1</button>
            <button class="page-btn" disabled>下一页</button>
            <span class="page-size">
              每页显示
              <select>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
              条
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import PersonalCenterHeader from '../../components/PersonalCenterHeader.vue'

export default {
  name: 'Page15',
  components: {
    PersonalCenterHeader
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      // 筛选条件
      filters: {
        productCategory: '',
        instanceStatus: '',
        expireTime: '',
        trialType: '',
        instanceName: '',
        resourceId: ''
      },
      // 分页信息
      pagination: {
        currentPage: 1,
        pageSize: 20,
        total: 0
      }
    }
  },
  mounted() {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0)
    // 加载数据
    this.loadTrialData()
  },
  methods: {
    // 加载试用数据
    loadTrialData() {
      // 这里可以添加API调用逻辑
      // this.$http.get('/api/trials', { params: {...this.filters, ...this.pagination} })
      //   .then(response => {
      //     this.tableData = response.data.items
      //     this.pagination.total = response.data.total
      //   })
    },
    // 查询数据
    handleQuery() {
      this.pagination.currentPage = 1
      this.loadTrialData()
    },
    // 重置筛选条件
    handleReset() {
      this.filters = {
        productCategory: '',
        instanceStatus: '',
        expireTime: '',
        trialType: '',
        instanceName: '',
        resourceId: ''
      }
      this.pagination.currentPage = 1
      this.loadTrialData()
    },
    // 分页切换
    handlePageChange(page) {
      this.pagination.currentPage = page
      this.loadTrialData()
    },
    // 页码大小变化
    handlePageSizeChange(size) {
      this.pagination.pageSize = size
      this.pagination.currentPage = 1
      this.loadTrialData()
    }
  }
}
</script>

<style scoped>
/* 个人中心容器样式 */
.personal-center-container {
  display: flex;
  min-height: calc(100vh - 48px);
}

/* 左侧菜单样式 */
.left-sidebar {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  padding: 20px 0;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  padding: 0 20px;
  margin-bottom: 10px;
}

.menu-item {
  font-size: 14px;
  color: #666;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.menu-item.active {
  color: #1890ff;
  background-color: #e6f7ff;
  border-right: 3px solid #1890ff;
}

/* 右侧内容区域样式 */
.main-content {
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
}

.content-header {
  margin-bottom: 20px;
}

.content-header h2 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

/* 操作栏样式 */
.action-bar {
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
}

.tabs {
  display: flex;
}

.tab {
  padding: 8px 20px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.tab.active {
  color: #1890ff;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
}

/* 筛选区域样式 */
.filter-section {
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 20px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.filter-item label {
  font-size: 14px;
  color: #666;
  width: 80px;
  text-align: right;
}

.filter-item select,
.filter-item input {
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  width: 150px;
}

.filter-actions {
  display: flex;
  gap: 10px;
  margin-left: 10px;
}

.btn {
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: #1890ff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #40a9ff;
}

.btn-secondary {
  background-color: #fff;
  color: #666;
  border: 1px solid #d9d9d9;
}

.btn-secondary:hover {
  background-color: #f5f5f5;
}

/* 表格区域样式 */
.table-section {
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e8e8e8;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.data-table th {
  background-color: #fafafa;
  font-weight: bold;
  color: #333;
}

.data-table td {
  color: #666;
}

.empty-row {
  text-align: center;
  padding: 50px 0;
  color: #999;
}

/* 分页区域样式 */
.pagination-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 20px;
  border: 1px solid #e8e8e8;
}

.page-info {
  font-size: 14px;
  color: #666;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

.page-btn {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.page-btn:hover:not(:disabled) {
  color: #1890ff;
  border-color: #1890ff;
}

.page-btn.active {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}

.page-btn:disabled {
  color: #d9d9d9;
  cursor: not-allowed;
}

.page-size {
  font-size: 14px;
  color: #666;
}

.page-size select {
  padding: 4px 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}
</style>