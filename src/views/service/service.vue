<template>
  <div class="support-service-page">
    <!-- 顶部标题区 -->
    <div class="top-header">
      <el-row class="section" type="flex" justify="space-between" align="middle">
        <el-col :span="24">
          <h1 class="main-title">支持与服务</h1>
          <p class="desc-text">
            阿里云为您提供7×24小时的专业服务，以及多样化的支持计划和专家服务，满足您从上云部署、日常运维到优化升级等全周期需求，让您的数字化转型之路更加高效敏捷。
          </p>
          <p class="sub-desc">
            <img src="../../static/service/service1.png" class="serviceIcon"/> 自助服务全新升级，提供多种自助工具、常见问题解决方案，方便您快速解决问题
            >
          </p>
          <div class="service-tabs">
            <el-button type="primary" class="tab-btn active" @click="toLInk('/pages/page13')">售前咨询</el-button>
            <el-button type="default" class="tab-btn" @click="toLInk('/pages/page13')">售后咨询</el-button>
            <el-button type="default" class="tab-btn">帮助与支持</el-button>
          </div>
        </el-col>

      </el-row>
    </div>

    <!-- 核心服务标签（7×24保障/专业技术服务/全周期解决方案） -->
    <div class="core-service-tags">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8" class="tag-item">
          <img src="../../static/service/service2.avif" class="tag-icon">
          <div class="tag-right">
            <span class="tag-text">7×24小时保障</span>
            <span class="tag-subtext">上云后顾无忧</span>
          </div>
        </el-col>
        <el-col :span="8" class="tag-item">
          <img src="../../static/service/service3.avif" class="tag-icon">
          <div class="tag-right">
            <span class="tag-text">专业技术服务</span>
            <span class="tag-subtext">降成本与风险</span>
          </div>
        </el-col>
        <el-col :span="8" class="tag-item">
          <img src="../../static/service/service4.avif" class="tag-icon">
          <div class="tag-right">
            <span class="tag-text">全周期解决方案</span>
            <span class="tag-subtext">助力业务快成长</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 基础服务板块 -->
    <div class="service-section section">
      <h2 class="section-title">基础服务</h2>
      <p class="section-desc">7×24小时的多种服务渠道，配套丰富的文档与工具，助您轻松上云 了解售后服务权益></p>

      <el-row :gutter="24" type="flex" justify="space-between">
        <!-- 左侧：7×24小时服务 -->
        <el-col :span="12" class="">
          <div class="orange-card">
            <div class="card-header headBg">
              <h3 class="card-title">7×24小时服务</h3>
              <p class="card-subtitle">多种服务渠道的不间断服务支持</p>
            </div>
            <el-row>
              <el-col :span="12">
                <div class="service-item service-bg0">
                  <div>
                    <h4 class="item-title">智能客服</h4>
                    <p class="item-desc">智能诊断、秒级解答，为您解答最佳解决方案或配合您接入人工服务</p>
                  </div>

                  <div>
                    <el-button type="text" class="text-btn">售前咨询</el-button>
                    <el-button type="text" class="text-btn">售后咨询</el-button>
                    <el-button type="text" class="text-btn">备案咨询</el-button>
                  </div>
                </div>

              </el-col>

              <el-col :span="12">
                <div class="service-item service-bg1">
                  <h4 class="item-title">咨询电话</h4>
                  <div class="item-phonedesc">售前咨询：
                    <div class="us"><p>4000120000-1</p>
                      <p class="usitem">工作日 9:00-20:00</p>
                      <p class="usitem">休息日 9:00-18:00</p></div>

                  </div>
                  <div class="item-phonedesc">售后咨询：<p>4008013260-2</p></div>
                  <div class="item-phonedesc">备案咨询：<p> 4008013260-3</p></div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="service-item service-bg2">
                  <div>
                    <h4 class="item-title">技术工单</h4>
                    <p class="item-desc">技术工单为您提供产品配置指导、故障排查等技术支持</p>
                  </div>
                  <el-button type="primary" size="mini" class="action-btn">提交工单</el-button>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="service-item service-bg3">
                  <div>
                    <h4 class="item-title">建议与投诉</h4>
                    <p class="item-desc">任何对阿里云产品与服务的建议和投诉</p>
                  </div>
                  <div>
                    <el-button type="primary" class="action-btn">我要建议</el-button>
                    <el-button type="primary" class="action-btn">我要投诉</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <!-- 右侧：文档与工具 -->
        <el-col :span="12" class="">
          <div class="orange-card">
            <div class="card-header headBg1">
              <h3 class="card-title">文档与工具</h3>
              <p class="card-subtitle">丰富的产品文档、教程与工具</p>

            </div>
          </div>
          <el-row>
            <el-col :span="12">
              <div class="service-item service-bg4">
                <div>
                  <h4 class="item-title">文档中心</h4>
                  <p class="item-desc">产品介绍、使用指导、最佳实践等全品类的产品文档</p>
                </div>
                <el-button type="primary" class="action-btn">查看更多</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="service-item service-bg5">
                <div>
                  <h4 class="item-title">新手入门</h4>
                  <p class="item-desc">通过快速入门/教程、实战、学习路径等帮您快速玩转云产品</p>
                </div>
                <el-button type="primary" class="action-btn">查看更多</el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="service-item service-bg6">
                <h4 class="item-title">自助服务</h4>
                <p class="item-desc">漏洞风险检测、异常排查、应急响应等常见问题的自助排查与解决工具</p>

                <div>
                  <el-button type="text" class="text-btn">API在线调试工具</el-button>
                  <el-button type="text" class="text-btn">域名检测工具</el-button>
                  <el-button type="text" class="text-btn">域名代续费</el-button>
                </div>
                <el-button type="primary" class="action-btn">查看全部</el-button>
              </div>
            </el-col>
            <el-col :span="12">

              <div class="service-item service-bg7">
                <div>
                  <h4 class="item-title">开发者资源</h4>
                  <p class="item-desc">覆盖丰富场景的SDK&CLI、DevOps工具</p>

                  <el-button type="text" class="text-btn">SDK与API</el-button>
                  <el-button type="text" class="text-btn">DevOps工具</el-button>
                </div>
                <el-button type="primary" class="action-btn">查看全部资源</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- 专家技术服务板块 -->
    <div class="service-section section">
      <h2 class="section-title">专家技术服务</h2>
      <p class="section-desc">阿里云联合伙伴的上万名技术专家，为企业量身打造适配业务发展的全周期专属服务</p>

      <el-row type="flex" :gutter="24" justify="space-between">
        <el-col :span="8" class="expert-card">
          <div class="card-header headBg2">
            <h3 class="card-title">咨询与设计</h3>
          </div>
          <div class="card-body">
            <div class="service-item">
              <h4 class="item-title">Landing Zone咨询服务</h4>
              <p class="item-desc">
                从资源规划、财务管理、身份权限、审计合规、网络规划、安全防护、运维管理、自动化八个领域为您搭建可扩展、扩管理的云环境。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">迁云服务</h4>
              <p class="item-desc">
                基于阿里云产品体系的端到端系统上云服务，帮助客户进行上云技术选型、云上架构设计，迁移及割接方案设计、帮助企业低成本、高效率的完成平滑上云。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">应用容器化服务</h4>
              <p class="item-desc">
                为您提供更灵活、更现代、更标准的应用基础，从而更好的适应未来的云端环境，享受云平台所带来的的技术红利。</p>
            </div>
            <div class="expert-btn">
              <el-button type="text" class="text-btn">查看全部</el-button>
            </div>
          </div>
        </el-col>

        <el-col :span="8" class="expert-card">
          <div class="card-header headBg3">
            <h3 class="card-title">迁移与部署</h3>
          </div>
          <div class="card-body">
            <div class="service-item">
              <h4 class="item-title">大数据上云及迁移服务</h4>
              <p class="item-desc">
                基于阿里云大数据产品，为客户提供端到端的大数据平台（EMR/MaxCompute）迁移方案设计及实施服务和上云后大数据平台上的巡检能力建设。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">数据库上云服务</h4>
              <p class="item-desc">
                阿里云提供数据库上云服务，帮助您进行云上数据库选型，数据库架构设计，应用改造支持及迁移方案设计。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">迁云服务</h4>
              <p class="item-desc">
                基于阿里云产品体系的端到端系统上云服务，帮助客户进行上云技术选型、云上架构设计，迁移及割接方案设计、帮助企业低成本、高效率的完成平滑上云。</p>
            </div>

            <div class="expert-btn">
              <el-button type="text" class="text-btn">查看全部</el-button>
            </div>
          </div>
        </el-col>

        <el-col :span="8" class="expert-card">
          <div class="card-header headBg4">
            <h3 class="card-title">运维与优化</h3>
          </div>
          <div class="card-body">
            <div class="service-item">
              <h4 class="item-title">运维服务</h4>
              <p class="item-desc">基于阿里巴巴集团最佳实践的云上资源运维服务，降低成本与风险，提升安全性和稳定性。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">FinOps成本管理服务</h4>
              <p class="item-desc">
                结合阿里云成本管理框架、成本运营平台以及顾问式咨询指导，全方位赋能企业客户云成本分析，优化和运营能力，提升云支出的透明度、合理性和可预测性，最大化云的效能和价值。</p>
            </div>
            <div class="service-item">
              <h4 class="item-title">云原生可观测服务</h4>
              <p class="item-desc">
                基于阿里巴巴多年大型系统SRE最佳实践，以及阿里云云原生可观测产品能力，阿里云专家服务团队建设云原生可观测性服务。</p>
            </div>

            <div class="expert-btn">
              <el-button type="text" class="text-btn">查看全部</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 培训与认证板块 -->
    <div class="training-section section">
      <h2 class="section-title">培训与认证</h2>
      <p class="section-desc">阿里云技术产品赋能，云生态数智化人才认证</p>

      <div class="training-box">

          <div class="training-card">
            <img src="../../static/service/service13.avif" class="training-img">
            <div class="training-cont">
              <div class="train-title"><span>企业培训服务</span></div>
              <div class="train-desc"><span>企业员工技能提升</span></div>
              <div class="train-link">查看详情</div>
            </div>
          </div>

          <div class="training-card">
            <img src="../../static/service/service14.avif" class="training-img">
            <div class="training-cont">
              <div class="train-title"><span>企业管理咨询</span></div>
              <div class="train-desc"><span>企业数字化转型赋能</span></div>
              <div class="train-link">查看详情</div>
            </div>
          </div>

          <div class="training-card">
            <img src="../../static/service/service15.avif" class="training-img">
            <div class="training-cont">
              <div class="train-title"><span>阿里云认证</span></div>
              <div class="train-desc"><span>云生态人才能力鉴定</span></div>
              <div class="train-link">查看详情</div>
            </div>
          </div>

          <div class="training-card">
            <img src="../../static/service/service16.avif" class="training-img">
            <div class="training-cont">
              <div class="train-title"><span>高校合作与人才培养</span></div>
              <div class="train-desc"><span>深化产教融合，协同育人</span></div>
              <div class="train-link">查看详情</div>
            </div>
          </div>

          <div class="training-card">
            <img src="../../static/service/service17.png" class="training-img">
            <div class="training-cont">
              <div class="train-title"><span>高校合作与人才培养</span></div>
              <div class="train-desc"><span>深化产教融合，协同育人</span></div>
              <div class="train-link">查看详情</div>
            </div>
          </div>

      </div>
    </div>

    <!-- 精选客户案例板块 -->
    <div class="cases-section section">
      <h2 class="section-title">精选客户案例</h2>
      <p class="section-desc">从初创公司到行业巨头，阿里云已服务数百万用户 <a href="#"
                                                                             class="more-link">查看更多案例></a></p>

      <el-row type="flex" justify="center" :gutter="24">
        <el-col :span="8" >
          <div class="case-card">
          <img src="../../static/service/service10.avif" class="case-img">
         <div class="case-righr">
           <h4 class="case-title">极氪汽车</h4>
           <p class="case-desc">
             阿里云服务极氪汽车APP全面升级云原生技术架构，有效提升用户出行体验，助力001猎装轿跑问鼎高端纯电销量冠军。</p>
           <a href="#" class="case-link">了解更多></a>
         </div>
          </div>
        </el-col>
        <el-col :span="8" >
          <div class="case-card">
          <img src="../../static/service/service11.avif" class="case-img">
            <div class="case-righr">
          <h4 class="case-title">哔哩哔哩</h4>
          <p class="case-desc">
            阿里云解决了B站众多资源需要通过公网被高并发访问的业务需求，并提供7x24小时技术支持，保障Bilibili业务安全稳定运行。</p>
          <a href="#" class="case-link">了解更多></a>
            </div>
    </div>
        </el-col>
        <el-col :span="8" >
          <div class="case-card">
          <img src="../../static/service/service12.avif" class="case-img">
            <div class="case-righr">
          <h4 class="case-title">联华华商</h4>
          <p class="case-desc">
            通过阿里云解决超市门店系统压力过高问题，实现了系统整体可用性的提升，大幅降低人力维护成本，提升业务创新效率。</p>
          <a href="#" class="case-link">了解更多></a>
            </div>
  </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportServicePage',
  components: {},
  data() {
    return {}
  },
  methods: {
    toLInk(link){
      this.$router.push(link)

    },
  }
}
</script>

<style scoped lang="scss">
/* 全局样式 */
.support-service-page {

  margin: 0 auto;
  font-family: "Microsoft Yahei", sans-serif;
  color: #333;
  padding: 20px 0;
}

/* 顶部标题区 */
.top-header {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 322px;

  background: url(../../static/service/servicebannerbg.jpg) 100% center / cover no-repeat;
}

.main-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;

}

.desc-text {
  margin-bottom: 8px;
  max-width: 592px;
  margin-top: 16px;
  font-size: 14px;
  color: #373d41;
  text-align: justify;
  line-height: 24px;
}

.sub-desc {
  font-size: 13px;
  color: #ff6a00;
  margin-bottom: 15px;
  display: inline-flex;
  flex-direction: row;
  max-width: 592px;
  padding: 8px 16px;
  margin-top: 12px;
  background: #f9f9f9;

  .serviceIcon {
    width: 22px;
    height: 24px;
    margin-right: 12px;
  }
}

.service-tabs {
  margin-top: 15px;
}

.tab-btn {
  padding: 6px 20px;
  margin-right: 10px;
  color: #ff6a00;
  border-color: #ff6a00;
}

.tab-btn.active {
  background-color: #ff7d00;
  border-color: #ff7d00;
  color: #fff;
}

.header-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

/* 核心服务标签 */
.core-service-tags {
  margin-bottom: 40px;
  text-align: center;
  padding: 15px 0;
}

.tag-item {
  display: flex;
  align-items: center;
  justify-content: center;

  .tag-right {
    display: flex;
    flex-direction: column;
  }
}

.tag-icon {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.tag-text {
  font-size: 20px;
  color: #373d41;
  letter-spacing: 0;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tag-subtext {
  font-size: 14px;
  color: #73777a;
  letter-spacing: 0;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 通用板块标题 */
.section-title {
  font-size: 28px;
  color: #181818;
  letter-spacing: 0;
  text-align: center;
  line-height: 36px;
  padding-top: 50px;
}

.section-desc {
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 10px;
}

/* 基础服务板块 */


/*.service-card {
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}*/

.orange-card {
  background-color: #fff8f2;
  border: 1px solid #ffd8b8;
}

.white-card {
  background-color: #fff;
  border: 1px solid #eee;
}

.card-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 88px;
  padding: 0 24px;

  &.headBg {
    background: url(../../static/service/service5.avif) center center / cover no-repeat rgb(255, 106, 0);
  }

  &.headBg1 {
    background: url(../../static/service/service6.avif) center center / cover no-repeat rgb(255, 106, 0);
  }

  &.headBg2 {
    height: 72px;
    background: url(../../static/service/service7.avif) center center / cover no-repeat rgb(255, 106, 0);
  }

  &.headBg3 {
    height: 72px;
    background: url(../../static/service/service8.avif) center center / cover no-repeat rgb(255, 106, 0);
  }

  &.headBg4 {
    height: 72px;
    background: url(../../static/service/service9.avif) center center / cover no-repeat rgb(255, 106, 0);
  }
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-subtitle {
  font-size: 14px;
  color: #fff;
  text-align: justify;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-item {
  position: relative;
  height: 202px;
  margin-bottom: 1px;
  padding: 20px 24px;
  box-sizing: border-box;
  background-color: #fff;
  border-right: 1px solid hsla(0, 0%, 85%, .3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  &.service-bg0{
    background: url(../../static/service/service17bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg1{
    background: url(../../static/service/service18bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg2{
    background: url(../../static/service/service19bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg3{
    background: url(../../static/service/service20bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg4{
    background: url(../../static/service/service21bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg5{
    background: url(../../static/service/service22bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg6{
    background: url(../../static/service/service23bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  } &.service-bg7{
    background: url(../../static/service/service24bg.avif) right bottom / cover no-repeat rgb(255, 255, 255);
  }
}

.item-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-desc {
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  color: #999;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;

}

.item-phonedesc {
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  color: #999;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: flex;

  .us {
    flex: 1;

    .usitem {
      font-size: 12px;
    }
  }

  p {
    color: rgb(55, 61, 65);
  }

}

.action-btn {
  background-color: transparent;
  border-color: #ff6a00;
  color: #ff6a00;
  font-size: 14px;
  font-weight: bold;
}

.text-btn {
  font-size: 14px;
  color: #ff7d00;
  padding: 0;
}

/* 专家技术服务板块 */
.service-section {
  padding-bottom: 50px;
  background: hsla(0, 0%, 85%, .3);
}

.expert-card {
  /*border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;*/
  .expert-btn {
    background: #fff;
    text-align: center;
    padding: 15px 0;
  }
}

.orange-header {
  background-color: #ff7d00;
  padding: 10px 15px;
  margin-bottom: 0;
  border-bottom: none;
}

.orange-header .card-title {
  color: #fff;
  font-size: 16px;
}

.card-body {
  /*  padding: 15px;*/
  .service-item {
    display: block;
    height: 130px;
    position: relative;
    padding: 20px 47px 20px 20px;
    background: #fff;
    margin-bottom: 1px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
}

/* 培训与认证板块 */
.training-section {
  margin-bottom: 50px;
}

.training-card {
  position: relative;
  width: 20%;
  height: 196px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s ease; /* 所有属性变化添加过渡，动画更平滑 */
}

.training-img {
  width: 100%;
  height: 117px;
  margin-bottom: 10px;
  border-radius: 4px;
}
.training-box{
  display: flex;
  justify-content: space-around;
  gap: 24px;
}

.training-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 79px;
  padding: 14px 29px;
  background: #fff;
  transition: all 0.3s ease; /* 所有属性变化添加过渡，动画更平滑 */
  position: absolute;
  /* 卡片hover状态：上浮+阴影加深 */
 &:hover {
   height: 100px;
   .train-link{
     display: block;
     opacity: 1;
     transform: translateX(5px); /* 轻微右移，增强动感 */
   }
 }

}
.training-card .train-title {
  font-size: 16px;
  color: #181818;
  line-height: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.training-card .train-desc {
  margin-top: 4px;
  font-size: 14px;
  color: #999;
  text-align: center;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 查看详情链接样式 */
.train-link {
  font-size: 14px;
  color: #f37021; /* 初始橙色 */
  text-decoration: none;
  position: relative;
  opacity: 0.9;
  transform: translateX(0);
  transition: all 0.3s ease;
  display: none;
  opacity: 0.9;
}
/* 精选客户案例板块 */
.cases-section {
  background: rgb(245, 245, 246);
  padding-top: 40px;
  padding-bottom: 40px;
}

.more-link {
  color: #ff7d00;
  font-size: 12px;
  text-decoration: none;
}

.case-card {
  transition: .3s;
  padding: 24px 20px;
  display: flex;
  border: 1px solid #ededed;
  background-color: #fff;

  display: flex;
  align-items: center;
  .case-righr{
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    flex: 1;
    padding-left: 17px;
    border-left: 1px solid #ebecec;
  }
}

.case-img {
  width: 100px;
  position: relative;
 height: 100px;
}

.case-title {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #181818;
  line-height: 24px;
  margin-bottom: 8px;
}

.case-desc {
  font-size: 14px;
  color: #666;
  line-height: 24px;
  height: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  margin-bottom: 12px;
}

.case-link {
  font-size: 14px;
  color: #ff6a00;
  text-decoration: none;
}
</style>
