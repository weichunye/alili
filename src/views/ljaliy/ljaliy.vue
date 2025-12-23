<template>
  <div class="aliyun-page">
    <Header :active-index="activeIndex" @menu-select="handleMenuSelect" />
    <div class="banner-container">
      <div class="banner-frames ">

        <div class="banner-frame active " target="_blank">
          <video src="../../static/ljaly/videobanner.mp4" class="banner-video"
                 width="100%" autoplay="true" loop=""></video>
          <div class="left-mask"
               style="background-image:linear-gradient(90deg, rgba(245,245,246,1) 0%, rgba(245,245,246,0) 100%);"></div>
          <div class="right-mask"
               style="background-image:linear-gradient(-90deg, rgba(245,245,246,1) 0%, rgba(245,245,246,0) 100%)"></div>
          <div class="banner-content grid-style-1"><span class="banner-title">计算，<br>为了无法计算的价值</span>
            <div class="col-3 m-col-12"><img
                src="../../static/ljaly/play.png"
                class="banner-btn" alt="播放按钮" ></div>
          </div>
        </div>

      </div>
      <div class="banner-switch-container grid-style-1 " ><a class="switch-item active" ><span></span></a>
      </div>
    </div>
    <!-- 顶部时间线导航 -->
    <div class="section bgf5f5f6">
      <div class="timeline-nav ">
        <el-row :gutter="24" type="flex" justify="center" align="middle">
          <el-col :span="8" class="timeline-item">
            <p class="timeline-date">2008年9月10日 阿里云第一次员工大会正式提出:</p>
            <h3>Internet as Infrastructure</h3>
            <p class="timeline-desc">互联网成了基础设施</p>
          </el-col>
          <el-col :span="8" class="timeline-item">
            <h3>Data Center as the Computer</h3>
            <p class="timeline-desc">数据中心成了一台计算机</p>
          </el-col>
          <el-col :span="8" class="timeline-item">
            <h3>Computing as Utility</h3>
            <p class="timeline-desc">计算成了公共服务</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- AI时代板块 -->
    <div class="ai-era-section section">
      <div class="section-title">
        <h2>AI时代，领先企业的共同选择</h2>
        <p>阿里云以全球云基础设施、超大规模普惠算力、先进AI技术体系助力企业开启AI时代的领先之路，一起乘云而上！</p>
      </div>
      <el-row :gutter="24" type="flex" justify="space-around" class="customer-cards">
        <el-col :span="8">
          <div class="customer-card">
            <img src="../../static/ljaly/ljaly1.jpg" alt="阿里云客户案例" class="card-img">
            <div class="card-content">
              <p class="name">陈东升（泰康集团）</p>
              <p class="desc">
                阿里云正是泰康最需要的算力，帮助泰康集团不断降低IT成本，助力泰康的数字化，交上了时代的满分答卷。</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="customer-card">
            <img src="../../static/ljaly/ljaly1.jpg" alt="阿里云客户案例" class="card-img">
            <div class="card-content">
              <p class="name">王小川（百川智能）</p>
              <p class="desc">阿里云的先进算力，支撑模型的快速迭代和部署，帮助百川智能在AI时代抢占先机。</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="customer-card">
            <img src="../../static/ljaly/ljaly1.jpg" alt="阿里云客户案例" class="card-img">
            <div class="card-content">
              <p class="name">江南春（分众传媒）</p>
              <p class="desc">阿里云以全球云基础设施，支撑分众传媒全场景业务高速扩展，赋能品牌持续分众化的上台阶能力。</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 阿里云基础设施板块 -->
    <div class="infrastructure-section section">
      <div class="section-title">
        <h2>阿里云，数字经济的技术基础设施</h2>
        <p>
          云计算是新一代信息技术，云计算成为公共服务，将数据用得更好用得更有价值，在数字经济大潮下，云计算是数据的根基，价值在于让客户有了数据处理的可能，而不只IDC搬迁的成本节约。</p>
      </div>
      <el-row type="flex" justify="space-around" class="feature-cards">
        <el-col :span="8" class="feature-card">
          <div class="card-number">01</div>
          <h3>为千行百业创新提速</h3>
          <p>为500万企业和组织发展提速，助力数字经济产业蓬勃融合</p>
          <img src="../../static/ljaly/ljaly2.avif" alt="阿里云客户案例" class="card-img">
        </el-col>
        <el-col :span="8" class="feature-card">
          <div class="card-number">02</div>
          <h3>开发者首选创新加速器</h3>
          <p>阿里云以普惠算力和丰富的技术产品，服务1000万开发者</p>
          <img src="../../static/ljaly/ljaly3.avif" alt="阿里云客户案例" class="card-img">
        </el-col>
        <el-col :span="8" class="feature-card">
          <div class="card-number">03</div>
          <h3>为社会创造美好生活</h3>
          <p>阿里云持续践行绿色、公益、普惠，用科技服务社会大众</p>
          <img src="../../static/ljaly/ljaly4.avif" alt="阿里云客户案例" class="card-img">
        </el-col>
      </el-row>
    </div>

    <!-- 数字化转型板块 -->
    <div class="section bgf5f5f6">
      <div class="transformation-section">
        <div class="section-title">
          <h2>与阿里云一起，实现数字化转型</h2>
          <p>
            让算力成为公共服务，用大规模的通用计算，赋能客户从做不到的智能，从做不到的规模，让数据成为生产资料，用数据的实时在线，赋能客户以数据为中心改变生产方式创造创新价值。</p>
        </div>
        <el-row type="flex" :gutter="24" justify="space-around">
          <el-col :span="12" class="main-img">
            <div class="text-wrap"><p class="video-text">《云栖战略参考》第15期发布！</p>
              <p class="video-desc">重新理解云计算，聚焦云计算的第三次浪潮</p></div>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="24" class="sub-cards">
              <el-col :span="12">
                <div class="sub-card">
                  <p class="card-tag">APSTAR LIVE!</p>
                  <h4>阿里云最新活动直播，精彩不容！</h4>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="sub-card">
                  <p class="card-tag">云栖品牌馆</p>
                  <h4>关于云计算产业的技术趋势、研判和洞见</h4>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="sub-card">
                  <p class="card-tag">云上的中国</p>
                  <h4>记录数字经济时代的奔跑者</h4>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="sub-card">
                  <p class="card-tag">奇妙的国</p>
                  <h4>走进数智实践地，对话数智创新者</h4>
                </div>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 洞察分析板块 -->
    <div class="insight-section ">
      <div class="section-title section">
        <h2>洞察分析，获取云计算市场最新资讯</h2>
        <p>面向技术专业人员和企业决策者的分析报告、白皮书、播客和书籍，加深对云计算和阿里云的了解。</p>
      </div>
      <a class="card-head-pc "
         href=""
         target="_blank">
        <div class="card-head-content grid-style-1 section">
          <div><span class="h-tip">Gartner 分析和商业智能平台魔力象限</span>
            <div class="h-name">连续4年且国内唯一入选，阿里云冲进Gartner®ABI挑战者象限</div>
            <div class="h-desc">
              2023年4月5日，Gartner发布了《分析和商业智能平台魔力象限》报告¹。阿里云连续第四次获得此报告的认可，也是该领域唯一入选魔力象限的中国厂商。并在今年完成位置跃升，成功闯入挑战者象限。
            </div>
          </div>
        </div>
      </a>
      <el-row type="flex" justify="space-around" class="insight-cards section">
        <el-col :span="8" class="insight-card">
          <h4>分析报告</h4>
          <p>最权威、最全面、最新鲜的行业报告解读。</p>

          <el-button type="text" class="detail-btn">查看所有分析报告</el-button>
        </el-col>
        <el-col :span="8" class="insight-card">
          <h4>白皮书</h4>
          <p>汇集各领域前沿白皮书，全方位带你了解各行。</p>
          <el-button type="text" class="detail-btn">查看所有白皮书</el-button>
        </el-col>
        <el-col :span="8" class="insight-card">
          <h4>电子书</h4>
          <p>关于云计算和阿里云的深度读物。</p>
          <el-button type="text" class="detail-btn">查看所有电子书</el-button>
        </el-col>
      </el-row>

    </div>

    <!-- 市场活动板块 -->
    <div class="event-section section">
      <div class="section-title">
        <h2>阿里云市场活动，带您感受最新前沿技术</h2>
        <p>探索云上实践，在这里，碰撞最前沿的技术与思想；在这里，走向下一个计算时代。</p>
      </div>
      <el-row :gutter="24" type="flex" justify="space-around" class="event-cards">
        <el-col :span="8">
          <div class="event-card">
            <img src="../../static/ljaly/ljaly7.avif" alt="云栖大会" class="event-img">
            <div class="event-cardCont">
              <h4>云栖大会</h4>
              <p>
                云栖大会是计算产业发展的见证者、参与者和赋能者。自2009年发展至今，云栖大会了科技创新从无到有、从弱到强的云计算和人工智能。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="event-card">
            <img src="../../static/ljaly/ljaly8.avif" alt="云栖大会" class="event-img">
            <div class="event-cardCont">
              <h4>飞天技术沙龙</h4>
              <p>
                面向广大用户的产品技术系列公开课，每聚焦一个技术领域，深度挖掘阿里云技术，更好的让企业更好的使用阿里云产品上云业务发展。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="event-card">
            <img src="../../static/ljaly/ljaly9.avif" alt="云栖大会" class="event-img">
            <div class="event-cardCont">
              <h4>合作伙伴大会</h4>
              <p>阿里云合作伙伴大会秉持"伙伴优先
                共创新篇"的理念，将持续的合作伙伴政策，为伙伴，为客户与合作伙伴共赢！为产业，为数字经济。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 企业社会责任板块 -->
    <div class="csr-section section">
      <div class="section-title">
        <h2>企业社会责任，绿色、可持续</h2>
        <p>阿里云的创新者，用技术做有意义的事，为世界带来有温度的改变，更期望能够人类更美好的技能、教育、环境等问题。</p>
      </div>
      <el-row :gutter="24" type="flex" justify="space-around" class="csr-cards">
        <el-col :span="8">
          <div class="csr-card">
            <img src="../../static/ljaly/ljaly10.avif" alt="云栖大会" class="csr-img">
            <div class="csr-cardCont">
              <h4>益工计划</h4>
              <p>
                "益工计划"是由国内知名学者（天天开工群），汇聚了教育打零工的阿里工程师，希望通过技术的力量解决社会的关键问题，将技术支持持续到公益组织、创业团队。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
            </div>
          </div>

        </el-col>
        <el-col :span="8">
          <div class="csr-card">
            <img src="../../static/ljaly/ljaly11.avif" alt="云栖大会" class="csr-img">
            <div class="csr-cardCont">
              <h4>少年云助学计划</h4>
              <p>
                "少年云助学计划"以技术助力教育数字化转型，将阿里云先进技术向中小学捐赠云服务器、学生实习账号、学生认证一号通、一屏联播直播点播等数字内容，让老师和学生可以免费使用技术和产品。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="csr-card">
            <img src="../../static/ljaly/ljaly12.avif" alt="云栖大会" class="csr-img">
            <div class="csr-cardCont">
              <h4>零碳计划</h4>
              <p>
                "零碳计划"计算气候变化的，通过构建绿色中心，发挥自身在数据领域技术、计算力和可持续技术优势，输出行业减碳解决方案。</p>
              <el-button type="text" class="detail-btn">查看详情</el-button>
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
  name: 'AliyunPage',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '10'
    }
  },
  methods: {
    handleMenuSelect(menuInfo) {
      // 根据Header组件传递的menuInfo进行处理
      // 由于Header组件内部已经处理了路由跳转，这里可以添加其他需要的逻辑
      console.log('菜单选择信息:', menuInfo)
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

.ai-era-section {
  background: #fff;
}

/* 时间线导航样式 */
.timeline-nav {
  padding: 40px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;

}

.bgf5f5f6 {
  background-color: #f5f5f6;
}

.timeline-item {
  text-align: center;
}

.timeline-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.timeline-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.timeline-desc {
  font-size: 14px;
  color: #999;
}

/* 通用板块样式 */
.section-title {
  padding-top: 40px;
  padding-bottom: 40px;
}

.section-title h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-title p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* AI时代板块样式 */
.customer-cards {
  margin-bottom: 50px;
}

.customer-card {
  border: 1px solid #eee;

  border-radius: 4px;
}

.card-img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
}

.card-content {
  padding: 0 15px 15px;
}

.card-content .name {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-content .desc {
  font-size: 12px;
  color: #666;
  line-height: 1.5;
}

/* 基础设施板块样式 */
.feature-cards {
  margin-bottom: 50px;
}

.feature-card {
  position: relative;
  padding: 15px;
}

.card-number {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
  color: #eee;
  font-weight: bold;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 40px;
}

.feature-card p {
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
  padding-left: 40px;
}

.feature-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

/* 数字化转型板块样式 */
.transformation-section {
  padding: 40px 0;
}

.main-img {
  width: 100%;
  height: 305px;
  background-size: cover;
  background-position: 50%;
  position: relative;
  background-repeat: no-repeat;
  background-image: url("../../static/ljaly/ljaly5.png");
}

.text-wrap {
  position: absolute;
  bottom: 16px;
  left: 24px;
  font-size: 14px;
  color: #fff;
  text-align: justify;

  .video-text {
    font-weight: 500;
    letter-spacing: .12px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .video-desc {
    font-weight: 400;
    letter-spacing: .4px;
    line-height: 22px;
  }
}

.sub-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  gap: 20px 0px;

}

.sub-card {
  border: 1px solid #eee;
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sub-card .card-tag {
  font-size: 12px;
  color: #ff6700;
  font-weight: bold;
  margin-bottom: 5px;
}

.sub-card h4 {
  font-size: 14px;
  font-weight: bold;
}

/* 洞察分析板块样式 */
.insight-section {
  margin-bottom: 50px;
}

.insight-cards {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.insight-card {
  border-right: 1px solid #eee;
  padding: 15px;
  border-radius: 4px;

  &:last-child {
    border-right: none;
  }
}

.insight-card h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.insight-card p {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.5;
}

.detail-btn {
  color: #1890ff;
  font-size: 12px;
}

/* 市场活动板块样式 */
.event-section {
  margin-bottom: 50px;
}

.event-cards {
  margin-bottom: 30px;
}

.event-card {
  border: 1px solid #eee;
  border-radius: 4px;

  .event-cardCont {
    padding: 0 15px;
  }
}

.event-img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
}

.event-card h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.event-card p {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.5;
}

/* 企业社会责任板块样式 */
.csr-section {
  margin-bottom: 50px;
}

.csr-cards {
  margin-bottom: 30px;
}

.csr-card {
  border: 1px solid #eee;
  border-radius: 4px;

  .csr-cardCont {
    padding: 0 15px;
  }
}

.csr-img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
}

.csr-card h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.csr-card p {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.5;
}


.card-head-pc {
  display: block;
  text-decoration: none;
  cursor: pointer;
  padding: 24px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  background-size: contain;
  background-position: 100%;
  background-repeat: no-repeat;
  background-image: url("../../static/ljaly/bg.png");
}

.card-head-pc .grid-style-1 {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.card-head-pc .h-tip {
  padding: 0 6px;
  font-weight: 400;
  font-size: 12px;
  color: #8c8c8c;
  line-height: 24px;
  border: 1px solid #e9e9e9;
}

.card-head-pc .h-name {
  margin-top: 18px;
  font-weight: 500;
  font-size: 14px;
  color: #181818;
  letter-spacing: .12px;
  line-height: 24px;
}

.card-head-pc .h-desc {
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  color: #666;
  letter-spacing: .4px;
  text-align: justify;
  line-height: 22px;
}
.banner-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.banner-container .banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
}

.banner-container .banner-content .banner-btn {
  position: relative;
  height: 45px;
  width: 45px;
  color: #fff;
  margin-top: 24px;
  font-size: 45px;
  margin-left: 24px;
  cursor: pointer;
}

.banner-container .banner-content .banner-title {
  position: relative;
  width: 485px;
  height: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 34px;
  line-height: 68px;
  font-weight: 600;
  color: #fff;
  margin-left: 24px;
}

.banner-container .banner-frame {
  width: 100%;
}

.banner-container .right-mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 300px;
  right: 0;
}

.banner-container .left-mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 300px;
  left: 0;
  right: auto;
}
</style>


