<template>
  <div class="ai-market-page">
        <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <el-carousel

        :autoplay="true"
        :interval="3000"

        arrow="hover"
        class="business-carousel"
    >
      <!-- 轮播项1：企业工商信息查询（原图内容） -->
      <el-carousel-item v-for="(item, index) in carouselData" :key="index">
        <div  class="carousel-item-content">

          <!-- 左侧文字区域 -->
          <div class="text-section">
            <h1 class="title">{{ item.title }}</h1>
            <p class="desc">{{ item.desc }}</p>
<!--            <el-button class="more-btn" type="primary"  @click="toLInk('/pages/page18')" >-->
<!--            了解更多-->

<!--            </el-button>-->
          </div>
          <!-- 右侧图片区域 -->



        </div>
        <img src="../../static/cloud/cloudBanner.png" alt="轮播图" class="carousel-img">
      </el-carousel-item>
    </el-carousel>
    <!-- 顶部搜索栏 -->
    <div class="pageCloud section">
      <div class="search-bar">
        <el-row :gutter="24" align="middle">
          <el-col :span="21">
            <el-input
                v-model="searchText"
                placeholder="请输入关键词"
                class="main-search"
                prefix-icon="el-icon-search"
            >
              <template slot="append">
                <el-button type="primary" class="search-btn">搜索</el-button>
              </template>
            </el-input>

          </el-col>
          <el-col :span="3" class="consult-btn-wrap">
            <el-button type="default" class="consult-btn">咨询入圈</el-button>
          </el-col>
          <el-col :span="24">
            <div class="search-tips">
              <span>搜索关键词：</span>
              <span class="tip-item">智能客服</span>
              <span class="tip-item">AI创作</span>
              <span class="tip-item">数字人</span>
              <span class="tip-item">智能分析决策</span>
              <span class="tip-item">模型</span>
              <span class="tip-item">自然语言处理</span>
              <span class="tip-item">计算机视觉</span>
              <span class="tip-item">数据标注</span>
            </div>
          </el-col>
        </el-row>
      </div>


    <!-- AI应用及服务市场标题 -->
    <div class="page-title">
      <h1>
        <em>AI应用</em>及服务市场
      </h1>
    </div>

    <!-- 第一部分：AI精品推荐 + 行业场景化解决方案 + 右侧产品区 -->
      <el-row  class="box">
      <!-- 左侧侧边栏 -->
      <el-col :span="6" class="left-sidebar card01bg">
        <!-- AI精品推荐卡片 -->
        <div class="sidebar-card">
          <h3 class="card-title">AI精品推荐</h3>
          <p class="card-desc">
            覆盖智能硬件、创意设计、数字人、知识管理等全场景，为企业提供安全可靠、便捷高效、成本优化的优质AI应用。
          </p>
          <el-button type="text" class="card-more-btn" @click="toLInk('/pages/page18')">查看更多</el-button>
        </div>
      </el-col>
        <el-col :span="18" class="right-content">
          <!-- 顶部标签：工具/基础设置/模型/数据/交付 -->
          <el-tabs v-model="activeTab1" class="content-tabs">
            <el-tab-pane label="应用" name="yingyong"></el-tab-pane>
            <el-tab-pane label="工具" name="tool"></el-tab-pane>
            <el-tab-pane label="基础设置" name="infra"></el-tab-pane>
            <el-tab-pane label="模型" name="model"></el-tab-pane>
            <el-tab-pane label="数据" name="data"></el-tab-pane>
            <el-tab-pane label="交付" name="delivery"></el-tab-pane>
          </el-tabs>
          <!-- 产品卡片列表 -->
          <el-row   class="product-card-list">
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud10.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">智能同传解决方案/适用于多种硬件/场景融合-会议...</h4>
              <p class="product-desc">
                支持同传场景，100+翻译语言选择，说话即翻译...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud11.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">ISide企业会员</h4>
              <p class="product-desc">
                ISide企业会员，含52个设计辅助+40+大类插件库+超千...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud12.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">简码</h4>
              <p class="product-desc">
                简码是码蹄旗下的低代码AIP应用创作平台，专注于低...
              </p>
            </el-col>
          </el-row>
        </el-col>
    </el-row>
      <el-row class="box" style="margin-top: 20px">
      <el-col :span="6" class="left-sidebar card02bg">
        <!-- 行业场景化解决方案卡片 -->
        <div class="sidebar-card" style="margin-top: 20px;">
          <h3 class="card-title">行业场景化解决方案</h3>
          <p class="card-desc">
            行业场景汇聚经过严格筛选的优质AI产品与服务，覆盖行业解决方案的全方位需求，为企业提供开箱即用的AI解决方案。
          </p>
          <el-button type="text" class="card-more-btn"  @click="toLInk('/pages/page18')">查看更多</el-button>
        </div>
      </el-col>

      <!-- 右侧产品区 -->
      <el-col :span="18" class="right-content">


        <!-- 子标签：消费电子/A教育/企业应用 -->
        <el-tabs v-model="activeTab2"  class="content-tabs">
          <el-tab-pane label="消费电子" name="consumer-electronics"></el-tab-pane>
          <el-tab-pane label="A教育" name="education"></el-tab-pane>
          <el-tab-pane label="企业应用" name="enterprise-app"></el-tab-pane>
        </el-tabs>



        <!-- 第二行产品卡片 -->
        <el-row  class="product-card-list" >
          <el-col :span="8" class="product-card">
            <img
                src="../../static/cloud/cloud13.png"
                alt="产品图标"
                class="product-icon"
            >
            <h4 class="product-title">Inde|将推AI场景软硬件解决方案（定制版）</h4>
            <p class="product-desc">
              Inde|插件专注于 AI 应用的便捷性，融合更通义...
            </p>
          </el-col>
          <el-col :span="8" class="product-card">
            <img
                src="../../static/cloud/cloud14.png"
                alt="产品图标"
                class="product-icon"
            >
            <h4 class="product-title">10yun物联网平台阿里云尊享版</h4>
            <p class="product-desc">
              本产品集成了设备接入、设备管理、数据安全通...
            </p>
          </el-col>
          <el-col :span="8" class="product-card">
            <img
                src="../../static/cloud/cloud15.png"
                alt="产品图标"
                class="product-icon"
            >
            <h4 class="product-title">IoT-ICT 设备接入服务</h4>
            <p class="product-desc">
              针对封闭TCP/UDP/IP/IC设备设施，该服务是...
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

      <!-- 第二部分标题：丰富的产品类目助力您的业务创新 -->

      <div class="page-title">
        <h1 class="title-text"><em>丰富的产品类目</em>助力您的业务创新</h1>
      </div>

      <!-- 第二部分：左侧数据多AI侧边栏 + 右侧应用开发产品区 -->
      <el-row class="box1">
        <!-- 左侧数据多AI侧边栏 -->
        <el-col :span="6" class="left-sidebar card03bg">
          <div class="sidebar-card tabLeft">
            <el-tabs v-model="activeTab4" tab-position="left" >
              <el-tab-pane label="数据与API" name="tab1"></el-tab-pane>
              <el-tab-pane label="基础软件" name="tab2"></el-tab-pane>
              <el-tab-pane label="企业应用" name="tab3"></el-tab-pane>
              <el-tab-pane label="建站小程序" name="tab4"></el-tab-pane>
            </el-tabs>

          </div>
        </el-col>

        <!-- 右侧应用开发产品区 -->
        <el-col :span="18" class="right-content">
          <!-- 顶部标签：应用开发/身份核验与金融行/车辆交通与物流等 -->
          <el-tabs v-model="activeTab3" class="content-tabs">
            <el-tab-pane label="应用开发" name="app-dev"></el-tab-pane>
            <el-tab-pane label="身份核验与金融行" name="identity"></el-tab-pane>
            <el-tab-pane label="车辆交通与物流" name="traffic"></el-tab-pane>
            <el-tab-pane label="全屋服务" name="home-service"></el-tab-pane>
            <el-tab-pane label="短信与运营商" name="sms"></el-tab-pane>
            <el-tab-pane label="AI应用与OCR" name="ai-ocr"></el-tab-pane>
            <el-tab-pane label="生活服务" name="life-service"></el-tab-pane>
            <el-tab-pane label="数据集" name="dataset"></el-tab-pane>
          </el-tabs>

          <!-- 产品卡片列表 -->
          <el-row  class="product-card-list">
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud15.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">通义智文转写识别</h4>
              <p class="product-desc">
                中文音视频转文字服务基于自研的智能语音识别...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud10.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">网站统计 U-Web Pro/Plus</h4>
              <p class="product-desc">
                安全、可靠、公正的第三方网站流量统计分析工具...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud11.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">优质全球短信API</h4>
              <p class="product-desc">
                全球阶梯码号池+验证码短信+PH短信的通道...
              </p>
            </el-col>
          </el-row>

          <!-- 第二行产品卡片 -->
          <el-row  class="product-card-list">
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud12.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">包体解析-Convert地址解析-Convert地址解析-标...</h4>
              <p class="product-desc">
                【包体解析-Convert地址解析-Convert地址解析-标...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud13.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">全球IP地址归属地-IP地址库-IP地址库-IP...</h4>
              <p class="product-desc">
                【全球IP地址归属地-IP地址库-IP地址库-IP...
              </p>
            </el-col>
            <el-col :span="8" class="product-card">
              <img
                  src="../../static/cloud/cloud14.png"
                  alt="产品图标"
                  class="product-icon"
              >
              <h4 class="product-title">90天网站生-网站生-网站生-90天...</h4>
              <p class="product-desc">
                【免登出版】90天网站生-90天不计费-网站生...
              </p>

            </el-col>
            <el-col :span="24" class="product-card" style="text-align: right">
              <el-button type="text" class="card-more-btn" style="margin-top: 5px;"  @click="toLInk('/pages/page18')">查看更多</el-button>
            </el-col>
          </el-row>
        </el-col>

      </el-row>

      <!-- AI应用及服务市场标题 -->
      <div class="page-title">
        <h1>
          新品推荐
        </h1>
      </div>
      <!-- 产品卡片区域 -->
      <el-row :gutter="24" class="product-row">
        <!-- 第一行第一个产品 -->
        <el-col :span="6">
          <div class="product-card">
          <img
              src="../../static/cloud/cloud2.png"
              alt="小义AI硬件语音模组系统板"
              class="product-icon"
          >
          <div class="product-info">
            <h4 class="product-name">小义AI硬件语音模组系统板791-A10-B2</h4>
            <p class="product-desc">本产品是基于阿里通义千问大语音模型…</p>
          </div>
          </div>
        </el-col>

        <!-- 第一行第二个产品 -->
        <el-col :span="6">
          <div class="product-card">
          <img
              src="../../static/cloud/cloud3.png"
              alt="Smartcare云管理服务"
              class="product-icon"
          >
          <div class="product-info">
            <h4 class="product-name">Smartcare云管理服务（人天）</h4>
            <p class="product-desc">SmartCare云运维管理服务基于安畅十…</p>
          </div>
          </div>
        </el-col>

        <!-- 第一行第三个产品 -->
        <el-col :span="6">
          <div class="product-card">
          <img
              src="../../static/cloud/cloud4.png"
              alt="平凯数据库企业级运维管理平台"
              class="product-icon"
          >
          <div class="product-info">
            <h4 class="product-name">平凯数据库企业级运维管理平台【简称:…</h4>
            <p class="product-desc">平凯数据库企业级运维管理平台 TEM …</p>
          </div>
          </div>
        </el-col>

        <!-- 第一行第四个产品 -->
        <el-col :span="6">
          <div class="product-card">
          <img
              src="../../static/cloud/cloud5.png"
              alt="Kymo"
              class="product-icon"
          >
          <div class="product-info">
            <h4 class="product-name">Kymo</h4>
            <p class="product-desc">Kymo 是基于 LLM 大模型的AI应用管理…</p>
          </div>
          </div>
        </el-col>
      </el-row>

      <!-- 第二行产品 -->
      <el-row class="product-row" :gutter="24" style="margin-top: 24px;">
        <!-- 第二行第一个产品 -->
        <el-col :span="6">
          <div  class="product-card">
            <img
                src="../../static/cloud/cloud6.png"
                alt="图片OCR识别"
                class="product-icon"
            >
            <div class="product-info">
              <h4 class="product-name">
                图片OCR识别
                <span class="product-tag">AI应用与OCR</span>
              </h4>
              <p class="product-desc">图片OCR（光学字符识别）是一款基于…</p>
            </div>
          </div>
        </el-col>

        <!-- 第二行第二个产品 -->
        <el-col :span="6" >
         <div class="product-card">
           <img
               src="../../static/cloud/cloud7.png"
               alt="高德经营通-选址"
               class="product-icon"
           >
           <div class="product-info">
             <h4 class="product-name">高德经营通-选址</h4>
             <p class="product-desc">经营通是线下开店经营数字化服务平台…</p>
           </div>
         </div>
        </el-col>

        <!-- 第二行第三个产品 -->
        <el-col :span="6" >
         <div class="product-card">
           <img
               src="../../static/cloud/cloud8.png"
               alt="Red Hat Enterprise Linux 9.6 64位"
               class="product-icon"
           >
           <div class="product-info">
             <h4 class="product-name">Red Hat Enterprise Linux 9.6 64位</h4>
             <p class="product-desc">Red Hat Enterprise Linux(RHEL)9.6 64位</p>
           </div>
         </div>
        </el-col>

        <!-- 第二行第四个产品 -->
        <el-col :span="6">
          <div class="product-card">
          <img
              src="../../static/cloud/cloud9.png"
              alt="堆友-团队版年度会员席位"
              class="product-icon"
          >
          <div class="product-info">
            <h4 class="product-name">堆友-团队版年度会员席位</h4>
            <p class="product-desc">堆友由阿里国际数字商业集团出品，是…</p>
          </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'AIMarketPage',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      carouselData: [
        {
          title: '企业工商信息查询',
          desc: '360度企业信息查询，适用于公共网站、内部系统、移动APP对工商信息展示、比对等，支持精准、模糊查询，实时更新。',
          btnText: '了解更多',
          imgUrl: '../../static/cloud/cloudBanner.png'
        },
        {
          title: '企业信用风险评估',
          desc: '基于多维度数据构建企业信用模型，实时评估企业经营风险、履约能力，为合作决策提供数据支撑。',
          btnText: '立即评估',
          imgUrl: '../../static/cloud/cloudBanner.png'
        },
        {
          title: '企业财税数据核验',
          desc: '对接官方财税数据源，快速核验企业纳税状态、开票信息、财务报表真实性，降低合作风险。',
          btnText: '核验入口',
          imgUrl: '../../static/cloud/cloudBanner.png'
        }
      ],
      searchText: '',
      activeTab1: 'tool', // 工具/基础设置/模型/数据/交付 激活标签
      activeTab2: 'consumer-electronics', // 消费电子/A教育/企业应用 激活标签
      activeTab3: 'app-dev', // 应用开发等激活标签
      activeTab4: 'tab1', // 应用开发等激活标签
        activeIndex: '1',
    }
  },
  methods: {
     handleMenuSelect({ key, keyPath }) {
      // 根据选择的菜单项进行路由跳转
      if (key === '1') {
        window.open('/', "_blank")
      } else if (key === '2') {
        // 产品菜单已改为下拉菜单
      } else if (key === '2-1') {
        window.open('/product', "_blank")
      } else if (key === '2-2') {
        // AI大模型页面路由
      } else if (key === '2-3') {
        // 视觉智能页面路由
      } else if (key === '2-4') {
        // 语音智能页面路由
      } else if (key === '2-5') {
        // 自然语言处理页面路由
      } else if (key === '3') {
        // 解决方案页面路由
      } else if (key === '4') {
        // 文档中心页面路由
      } else if (key === '5') {
        // 开发者社区页面路由
      } else if (key === '6') {
        // 关于我们页面路由
      }
    },
    toLInk(link){
      window.open(link, "_blank")

    },
  }
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__nav-scroll){
  padding-left: 24px;
}
.pageCloud{
  background: linear-gradient(to bottom right, #f0f7ff, #f8f0fc);
}
/* 全局样式 */
.ai-market-page {
  margin: 0 auto;
  font-family: "Microsoft Yahei", sans-serif;
  color: #333;
  padding: 20px 0;
}

/* 顶部搜索栏 */
.search-bar {
  border: 1px solid #fff;
  padding: 40px 24px;
  background-image: url(../../static/cloud/cloud.jpg);
  background-size: cover;
  box-shadow: 0 12px 20px #1366ec24;

}

.main-search {
  width: 100%;
  margin-bottom: 8px;
}

.search-btn {
  height: 100%;
  width: 160px;
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-image: linear-gradient(245deg, #7366FF -4%, #1366EC 100%);
  position: relative;
  cursor: pointer;
  border-radius: 0px;
}

.consult-btn-wrap {
  text-align: right;
}

.consult-btn {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid;
  border-image: linear-gradient(73deg, #1366EC 0%, #8E13EC 85%, #EC138A 99%) 1;
  background: linear-gradient(63deg, #1366EC 0%, #8E13EC 85%, #EC138A 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  z-index: 2;

}

.search-tips {
  font-size: 14px;
  color: #575757;
}

.tip-item {
  margin: 0 5px;
  cursor: pointer;
}

.tip-item:hover {
  color: #409eff;
}

/* 页面标题 */
.page-title {
  text-align: center;
  padding: 40px 0 20px;
  em{
    all: unset;
    color: #1366EC;

  }
}

.page-title h1 {
  font-size: 24px;
  font-weight: bold;
  color: #181818;

}

/* 左侧侧边栏 */
.left-sidebar {
 height: 100%;
  &.card01bg{
    background: url(../../static/cloud/cloud.png) center center / cover no-repeat;
  }
  &.card02bg{
    background: url(../../static/cloud/cloud1.png) center center / cover no-repeat;
  } &.card03bg{
        background: linear-gradient(0deg, #F2F7FF, #F2F7FF), #FFFFFF;
        padding: 12px 0;
  }
}

.sidebar-card {
  padding: 20px;
}
.tabLeft{

  :deep(.el-tabs--left .el-tabs__nav-wrap.is-left::after){
    width: 0;
  }
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: #181818;
  margin: 0 0 8px;

}

.card-desc {
  font-size: 14px;
  line-height: 24px;
  color: #717171;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 32px;
}

.card-more-btn {
  font-size: 14px;
  color:#1366ec;
  padding: 0;
  font-weight: 500;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  padding:13px 0;
  cursor: pointer;
  color: #181818;
  font-weight: 600;
  font-size: 14px;
/*  border-bottom: 1px solid #eee;*/
}

.category-item:last-child {
  border-bottom: none;
}

.category-item:hover {
  color: #409eff;
}

/* 右侧内容区 */
.right-content {
  background: #fff;
}
.box{
  background: #fff;
  height: 265px;
}
.box1{
  background: #fff;
  height:490px;
}
.content-tabs {
  margin-bottom:0px;
}

.el-tabs__header {
  margin: 0 0 10px 0;
}

.el-tabs__item {
  font-size: 14px;
  color: #666;
}

.el-tabs__item.is-active {
  color: #409eff;
  font-weight: bold;
}

.sub-tabs {
  margin-bottom: 20px;
}

/* 产品卡片列表 */
.product-card-list {
  justify-content: space-between;
}

.product-card {
  padding:9px 24px 24px;
  display: flex;
  flex-direction: column;
}

.product-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.product-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}

/* 第二部分标题 */
.section-title {
  text-align: center;
  margin: 40px 0 20px 0;
}

.section-title h2 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
.product-row{
  padding-bottom: 50px;
  .product-card{
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
  .product-icon{
    flex-shrink: 0;
    height: 64px;
    margin-right: 12px;
    margin-bottom: 0;
    width: 64px;
  }
    .product-name{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      margin-bottom: 12px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }   .product-desc{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}

/* 轮播容器 */
.business-carousel {
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9fbff;

}

/* 轮播项内容布局 */
.carousel-item-content {
  padding-left: 10%;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 480px;
  .carousel-img{
    width: 100%;
  }

}
:deep(.el-carousel__indicators--horizontal){
  left: 10%;
}
/* 左侧文字区域 */
.text-section {
  padding-right: 20px;

}

/* 标题样式：还原原图字体大小和权重 */
.title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

/* 描述文字样式 */
.desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 30px 0;
}

/* 了解更多按钮样式：还原蓝紫渐变 */
.more-btn {
  background: linear-gradient(to right, #409eff, #667eea);
  border: none;
  padding: 10px 30px;
  border-radius: 2px;
  font-size: 14px;
}

.more-btn:hover {
  background: linear-gradient(to right, #3393f8, #5a70e0);
}
</style>
