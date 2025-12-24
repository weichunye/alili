<template>
  <div class="finance-overview-page">
    <!-- 总览区域 -->
    <div class="summary-section">
      <div class="summary-card">
        <div class="summary-title">账户可用额度</div>
        <div class="amount">¥ 2</div>
        <div class="summary-buttons">
          <el-button type="primary" size="mini">充值汇款</el-button>
          <el-button size="mini">提现</el-button>
          <el-button size="mini">汇款认领</el-button>
          <el-button size="mini">收支明细</el-button>
          <el-button size="mini">详情</el-button>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-title">可开票金额</div>
        <div class="amount">¥ 1,000</div>
        <div class="summary-buttons">
          <el-button type="primary" size="mini">去开票</el-button>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-title">
          总待还款金额
          <el-tooltip class="item" effect="dark" content="总待还款金额说明" placement="top">
            <i class="el-icon-question-circle"></i>
          </el-tooltip>
        </div>
        <div class="amount">¥ 0</div>
        <div class="summary-buttons">
          <el-button type="primary" size="mini">去还款</el-button>
        </div>
      </div>
    </div>

    <!-- 费用总览区域 -->
    <div class="fee-summary-section">
      <div class="section-title">费用总览</div>
      <div class="date-range">
        <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM"
            value-format="yyyy-MM"
            @change="handleDateRangeChange"
        >
        </el-date-picker>
        <el-button size="mini">自</el-button>
      </div>

      <!-- ECharts 图表容器 -->
      <div class="chart-container" ref="feeChart"></div>

      <!-- 月份标签 -->
      <div class="month-tags">
        <div
            v-for="month in months"
            :key="month"
            class="month-tag"
            :class="{ active: activeMonth === month }"
            @click="handleMonthClick(month)"
        >
          {{ month }}
        </div>
      </div>
    </div>

    <!-- 费用详情区域 -->
    <div class="fee-detail-section">
      <div class="section-title">{{ activeMonth }} 费用详情</div>

      <!-- 步骤条 -->
      <el-steps :active="3" finish-status="success" align-center>
        <el-step title="预充值"></el-step>
        <el-step title="订购订单"></el-step>
        <el-step title="账单" description="已出账"></el-step>
        <el-step title="对账"></el-step>
        <el-step title="发票" description="部分已开"></el-step>
      </el-steps>

      <!-- 详情表格 -->
      <div class="detail-grid">
        <!-- 预充值模块 -->
        <div class="detail-item">
          <div class="detail-label">可用额度</div>
          <div class="detail-value">¥ 2</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">充值汇款</div>
          <div class="detail-value">-</div>
        </div>

        <!-- 订购订单模块 -->
        <div class="detail-item">
          <div class="detail-label">本月新增订单数</div>
          <div class="detail-value">1</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">待续费资源</div>
          <div class="detail-value">0</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">待支付订单</div>
          <div class="detail-value">0</div>
        </div>

        <!-- 账单模块 -->
        <div class="detail-item">
          <div class="detail-label">消费金额</div>
          <div class="detail-value">¥ 0</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">退款金额</div>
          <div class="detail-value">¥ 0</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">调账金额</div>
          <div class="detail-value">¥ 0</div>
        </div>

        <!-- 对账模块 -->
        <div class="detail-item">
          <div class="detail-label">月账单概览</div>
          <div class="detail-value">
            <el-button type="text" size="mini">查看</el-button>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">账单详情</div>
          <div class="detail-value">
            <el-button type="text" size="mini">查看</el-button>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">导出记录</div>
          <div class="detail-value">
            <el-button type="text" size="mini">查看</el-button>
          </div>
        </div>

        <!-- 发票模块 -->
        <div class="detail-item">
          <div class="detail-label">可开票金额</div>
          <div class="detail-value">¥ 0</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">已开票金额</div>
          <div class="detail-value">¥ 0</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">操作</div>
          <div class="detail-value">
            <el-button type="text" size="mini">去开票</el-button>
            <el-button type="text" size="mini">发票下载与退票</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 成本总览区域 -->
    <div class="cost-overview-section">
      <!-- 左侧：成本总览提示 -->
      <div class="cost-overview-left">
        <div class="cost-title">
          <span>成本总览</span>
          <el-tooltip class="item" effect="dark" content="成本总览说明" placement="top">
            <i class="el-icon-question-circle"></i>
          </el-tooltip>
        </div>
        <div class="cost-placeholder">
          <div class="placeholder-icon">
            <i class="el-icon-warning"></i>
          </div>
          <div class="placeholder-text">
            <el-button type="text">暂无分析内容，将开放成本分析</el-button>
          </div>
        </div>
      </div>
      
      <!-- 右侧：成本优化仪表盘 -->
      <div class="cost-optimization-right">
        <div class="optimization-header">
          <div class="optimization-title">成本优化</div>
          <div class="optimization-date">监测周期: 2025-12</div>
        </div>
        <div class="dashboard-container">
          <div class="gauge-chart" ref="costGaugeChart"></div>
        </div>
        <div class="optimization-tabs">
          <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="标杆评分结果" name="benchmark">
              <div class="benchmark-result">
                <div class="result-item">
                  <div class="result-label">异常成本</div>
                  <div class="result-value">0 个</div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="优化建议" name="suggestion">
              <div class="suggestion-result">
                <div class="result-item">
                  <div class="result-label">优化建议</div>
                  <div class="result-value">0 个</div>
                </div>
                <div class="result-item">
                  <div class="result-label">预估节省金额</div>
                  <div class="result-value price">¥0.00</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div>
      <div class="mx-auto px-4 py-8">
        <!-- 账户详情标题 -->
        <h2 class="text-xl font-semibold text-gray-700 mb-6">2025-11 账户详情</h2>

        <!-- 账户详情计算模块 -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          <!-- 账户月末余额 -->
          <div class="md:col-span-3 bg-white rounded-lg shadow-sm p-5">
            <div class="border-left-primary pl-3 mb-4">
              <p class="text-sm text-gray-500">账户月末余额</p>
              <p class="text-2xl font-bold text-gray-700">¥ 2</p>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>现金余额</span>
                <span class="text-gray-600">¥ 2</span>
              </div>
              <div class="flex justify-between">
                <span>信控退款余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>债权凭证/汇票余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>账单未结清余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
            </div>
          </div>

          <!-- 等号 -->
          <div class="md:col-span-1 flex items-center justify-center">
            <span class="text-2xl text-gray-400">=</span>
          </div>

          <!-- 账户月初余额 -->
          <div class="md:col-span-3 bg-white rounded-lg shadow-sm p-5">
            <div class="pl-3 mb-4">
              <p class="text-sm text-gray-500">账户月初余额</p>
              <p class="text-2xl font-bold text-gray-700">¥ 2</p>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>现金余额</span>
                <span class="text-gray-600">¥ 2</span>
              </div>
              <div class="flex justify-between">
                <span>信控退款余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>债权凭证/汇票余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>账单未结清余额</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
            </div>
          </div>

          <!-- 加号 -->
          <div class="md:col-span-1 flex items-center justify-center">
            <span class="text-2xl text-gray-400">+</span>
          </div>

          <!-- 本月收入金额 -->
          <div class="md:col-span-3 bg-white rounded-lg shadow-sm p-5">
            <div class="pl-3 mb-4">
              <p class="text-sm text-gray-500">本月收入金额</p>
              <p class="text-2xl font-bold text-gray-700">¥ 0</p>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>现金充值及转入</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>债权凭证/汇票充值及转入</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>订单在线支付</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
            </div>
          </div>

          <!-- 减号 -->
          <div class="md:col-span-1 flex items-center justify-center">
            <span class="text-2xl text-gray-400">-</span>
          </div>

          <!-- 本月支出金额 -->
          <div class="md:col-span-3 bg-white rounded-lg shadow-sm p-5">
            <div class="pl-3 mb-4">
              <p class="text-sm text-gray-500">本月支出金额</p>
              <p class="text-2xl font-bold text-gray-700">¥ 0</p>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>现金提现及转出</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>信控提现及转出</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>债权凭证/汇票提现及转出</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
              <div class="flex justify-between">
                <span>新增账单</span>
                <span class="text-gray-600">¥ 0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 公告模块 -->
        <div class="bg-white rounded-lg shadow-sm p-5">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-700">公告</h3>
            <a href="#" class="text-primary text-sm hover:underline">查看全部</a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div class="space-y-2">
              <a href="#" class="block text-gray-600 hover:text-primary">云产品属性名称治理说明</a>
              <a href="#" class="block text-gray-600 hover:text-primary">费用与成本旧版控制台下线公告</a>
            </div>
            <div class="space-y-2">
              <a href="#" class="block text-gray-600 hover:text-primary">【公告】云通信短信产品分账明细字段调整</a>
              <a href="#" class="block text-gray-600 hover:text-primary">成本明细订阅信息优化公告</a>
            </div>
            <div class="space-y-2">
              <a href="#" class="block text-gray-600 hover:text-primary">阿里云账单升级邀测公告</a>
              <a href="#" class="block text-gray-600 hover:text-primary">摊销成本系统维护通知</a>
            </div>
            <div class="space-y-2">
              <a href="#" class="block text-gray-600 hover:text-primary">关于退款规则升级期间账单详情显示的说明</a>
              <a href="#" class="block text-gray-600 hover:text-primary">资源包退订规则更新公告</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {
  ElButton, ElTooltip, ElIcon, ElDatePicker,
  ElSteps, ElStep, ElMessage
} from 'element-ui'

export default {
  name: 'FinanceOverview',
  components: {
    ElButton,
    ElTooltip,
    ElIcon,
    ElDatePicker,
    ElSteps,
    ElStep,
  },
  data() {
    return {
      // 日期范围
      dateRange: ['2025-01', '2025-12'],
      // 月份列表
      months: [
        '2025-01', '2025-02', '2025-03', '2025-04',
        '2025-05', '2025-06', '2025-07', '2025-08',
        '2025-09', '2025-10', '2025-11', '2025-12'
      ],
      // 当前激活的月份
      activeMonth: '2025-11',
      // 图表实例
      chartInstance: null,
      // 成本优化标签页激活状态
      activeTab: 'benchmark',
      // 成本仪表盘实例
      costGaugeChart: null
    }
  },
  mounted() {
    // 初始化图表
    this.initChart()
    // 初始化成本仪表盘
    this.initCostGaugeChart()
  },
  methods: {
    // 初始化费用总览图表
    initChart() {
      this.chartInstance = echarts.init(this.$refs.feeChart)

      // 图表配置
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params) {
            let res = params[0].axisValue
            params.forEach(item => {
              res += `<br/>${item.seriesName}: ${item.value}`
            })
            return res
          }
        },
        legend: {
          data: ['不可开票金额', '已开票金额', '可开票金额', '待还款金额', '已还款金额'],
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '10%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.months,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 4,
          interval: 1,
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '不可开票金额',
            type: 'line',
            data: Array(12).fill(0),
            lineStyle: {
              color: '#C9C9C9'
            },
            itemStyle: {
              color: '#C9C9C9'
            }
          },
          {
            name: '已开票金额',
            type: 'line',
            data: Array(12).fill(0),
            lineStyle: {
              color: '#B484E4'
            },
            itemStyle: {
              color: '#B484E4'
            }
          },
          {
            name: '可开票金额',
            type: 'line',
            data: Array(12).fill(0),
            lineStyle: {
              color: '#9370DB'
            },
            itemStyle: {
              color: '#9370DB'
            }
          },
          {
            name: '待还款金额',
            type: 'line',
            data: Array(12).fill(0),
            lineStyle: {
              color: '#B0C4DE'
            },
            itemStyle: {
              color: '#B0C4DE'
            }
          },
          {
            name: '已还款金额',
            type: 'line',
            data: Array(12).fill(0),
            lineStyle: {
              color: '#90EE90'
            },
            itemStyle: {
              color: '#90EE90'
            }
          }
        ]
      }

      this.chartInstance.setOption(option)

      // 监听窗口大小变化，自适应图表
      window.addEventListener('resize', () => {
        this.chartInstance.resize()
      })
    },
    // 日期范围改变事件
    handleDateRangeChange(val) {
      if (val) {
        ElMessage.info(`已选择日期范围：${val[0]} 至 ${val[1]}`)
      }
    },
    // 月份点击事件
    handleMonthClick(month) {
      this.activeMonth = month
    },
    // 初始化成本仪表盘图表
    initCostGaugeChart() {
      this.costGaugeChart = echarts.init(this.$refs.costGaugeChart)

      // 仪表盘配置
      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '成本优化率',
            type: 'gauge',
            detail: {
              formatter: '{value}%',
              fontSize: 24,
              color: '#333'
            },
            data: [
              {
                value: 65,
                name: '优化率'
              }
            ],
            title: {
              fontSize: 14,
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0.3, '#67E0E3'],
                  [0.7, '#37A2DA'],
                  [1, '#FD666D']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: '#333'
              }
            },
            axisTick: {
              distance: -20,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -20,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 5
              }
            },
            axisLabel: {
              color: '#666',
              fontSize: 12,
              distance: -40
            }
          }
        ]
      }

      this.costGaugeChart.setOption(option)

      // 监听窗口大小变化，自适应图表
      window.addEventListener('resize', () => {
        this.costGaugeChart.resize()
      })
    }
  },
  beforeDestroy() {
    // 销毁图表实例，防止内存泄漏
    if (this.chartInstance) {
      this.chartInstance.dispose()
    }
    // 销毁成本仪表盘实例
    if (this.costGaugeChart) {
      this.costGaugeChart.dispose()
    }
  }
}
</script>

<style scoped>
.finance-overview-page {
  padding: 20px;
  font-size: 14px;
  color: #333;
}

/* 总览区域样式 */
.summary-section {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.summary-card {
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.summary-title {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.amount {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.summary-buttons {
  display: flex;
  gap: 8px;
}

/* 费用总览区域样式 */
.fee-summary-section {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.date-range {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  gap: 10px;
}

.chart-container {
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
}

.month-tags {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.month-tag {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.month-tag.active {
  background: #e6f7ff;
  color: #1890ff;
  font-weight: bold;
}

/* 费用详情区域样式 */
.fee-detail-section {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.el-steps {
  margin-bottom: 30px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.detail-label {
  color: #666;
}

.detail-value {
  font-weight: 500;
}

/* 成本总览区域样式 */
.cost-overview-section {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.cost-overview-left {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.cost-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cost-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
}

.placeholder-icon {
  font-size: 48px;
  color: #f0c24c;
  margin-bottom: 15px;
}

.placeholder-text {
  color: #999;
}

.cost-optimization-right {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.optimization-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.optimization-title {
  font-size: 16px;
  font-weight: bold;
}

.optimization-date {
  font-size: 12px;
  color: #999;
}

.dashboard-container {
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gauge-chart {
  width: 100%;
  height: 100%;
}

.optimization-tabs {
  margin-top: 20px;
}

.benchmark-result, .suggestion-result {
  padding: 15px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.result-label {
  color: #666;
}

.result-value {
  font-weight: 500;
}

.result-value.price {
  color: #f56c6c;
  font-weight: bold;
}

/* 响应式适配 */
@media (max-width: 1200px) {
  .detail-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cost-overview-section {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .summary-section {
    flex-direction: column;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .month-tags {
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>