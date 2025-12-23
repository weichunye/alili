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
  </div>
</template>

<script>
import echarts from 'echarts'
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
      chartInstance: null
    }
  },
  mounted() {
    // 初始化图表
    this.initChart()
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
    }
  },
  beforeDestroy() {
    // 销毁图表实例，防止内存泄漏
    if (this.chartInstance) {
      this.chartInstance.dispose()
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

/* 响应式适配 */
@media (max-width: 1200px) {
  .detail-grid {
    grid-template-columns: repeat(2, 1fr);
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
