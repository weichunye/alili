<template>
	<div class="aliyun-pricing-page">
		<!-- 顶部导航区 -->
    <Header :active-index="activeIndex"  />
		<header class="header-m">
			<div class="header-container-m">
				<div class="title-text">阿里云定价</div>
				<div class="desc-text" >了解阿里云定价策略，自助估算价格，持续管控和优化成本</div>

				<div class="priceBtn">
          <el-button type="primary" class="active-btn" @click="toLInk('/pages/page12')">报价咨询</el-button>
          <el-button type="text" class="header-btn">使用价格计算器</el-button>
        </div>
			</div>
		</header>

		<!-- 核心标语区 -->
		<section class="banner">
			<div class="banner-container">
				<h1 class="banner-title">像购买水电一样采购云计算，您只需专注于业务创新</h1>
			</div>
		</section>

		<!-- 核心优势概览 -->
		<section class="advantage-section">
			<div class="advantage-container section">
				<div class="advantage-item">
					<h3 class="advantage-title">IT成本更节省</h3>
					<p class="advantage-desc">
						购买云ECS、采购网络可以变节为按日/月/年，您不再需要花费大量的时间和人力
						来管理自己的基础设施，可以将更多的精力放在自己的核心业务上
					</p>
				</div>
				<div class="advantage-item">
					<h3 class="advantage-title">采购决策更便捷</h3>
					<p class="advantage-desc">
						我们为您提供灵活的计费方式，您可以根据业务量选择最合适的购买方案
						并通过价格计算器估算价格，下单流程简单，实现高效采购
					</p>
				</div>
				<div class="advantage-item">
					<h3 class="advantage-title">成本持续可优化</h3>
					<p class="advantage-desc">
						我们为您提供企业级云上成本管理工具，帮助您通过成本核算、预算管理、成
						本分析等可视化和智能化手段，持续管控和优化云上成本
					</p>
				</div>
			</div>
    <div class="vsimg">
      <img style="width: 100%" src="../../static/priceimg/price1.avif">
    </div>
		</section>

		<!-- 计费方式模块 -->
		<section class="module-section">
			<el-row class="module-container section" :gutter="24">
				<el-col class="module-left" :span="12">
					<h2 class="module-title">灵活丰富的计费方式</h2>
					<p class="module-desc">
						什么是按量计费？什么是节费计划？按量计费搭配节费计划能实现成本节省？选择合理的计费方式，实现最优的产品方
						案
					</p>
					<el-button type="text" class="module-btn">了解产品定价策略</el-button>
        </el-col>
				<el-col class="module-right" :span="12">
					<img src="../../static/priceimg/price2.avif" alt="计费方式示意图" class="module-img">
				</el-col>
			</el-row >
		</section>

		<!-- 自助选配模块 -->
		<section class="module-section reverse">

      <el-row class="module-container section" :gutter="24">
        <el-col class="module-left" :span="12">
          <h2 class="module-title">自助选配和估算价格</h2>
          <p class="module-desc">
            支持便捷地将多个产品在不同计费方式下的价格，生成选配清单，助您高效采购
          </p>
          <el-button type="text" class="module-btn">使用价格计算器</el-button>
        </el-col>
        <el-col class="module-right" :span="12">
          <img src="../../static/priceimg/price3.avif" alt="计费方式示意图" class="module-img">
        </el-col>
      </el-row >
		</section>

		<!-- 成本优化模块 -->
		<section class="module-section">

      <el-row class="module-container section" :gutter="24">
        <el-col class="module-left" :span="12">
          <el-button type="text" class="module-btn" style="margin-bottom: 20px">提高效率、降低成本、推动创新</el-button>
          <h2 class="module-title">持续优化云上成本</h2>
          <p class="module-desc">
            您可以使用阿里云提供的成本管理工具，通过成本核算、预算管理、成本分析等可视化和智能化手段，持续管控和优化云
            上成本
          </p>
         <div class="btnBox"> <el-button type="text" class="module-btn">浏览云上成本管理解决方案</el-button>
           <el-button type="primary" link >查看我的成本数据</el-button></div>
        </el-col>
        <el-col class="module-right" :span="12">
          <img src="../../static/priceimg/price4.avif" alt="计费方式示意图" class="module-img">
        </el-col>
      </el-row >
		</section>

		<!-- 成本对比迁移模块 -->
		<section class="module-section reverse">
      <el-row class="module-container section" :gutter="24">
        <el-col class="module-left" :span="12">
          <h2 class="module-title">从成本对比开始迁移工作</h2>
          <p class="module-desc">
            通过迁移中心一站式完成调研、测算、迁移，您可以通过其他TCO分析功能，直观分析上云收益，从而开启云迁移工程
          </p>
          <el-button type="text" class="module-btn">新建迁移中心</el-button>
        </el-col>
        <el-col class="module-right" :span="12">
          <img src="../../static/priceimg/price5.avif" alt="计费方式示意图" class="module-img">
        </el-col>
      </el-row >
		</section>

		<!-- 更多服务模块 -->
		<section class="more-service-section">
			<div class="more-service-container section">
				<h2 class="more-service-title">更多服务</h2>
				<div class="service-card-list">
					<div class="service-card">
						<h3 class="card-title">报价咨询</h3>
						<p class="card-desc">填写需求获取报价</p>
					</div>
					<div class="service-card">
						<h3 class="card-title">用户中心</h3>
						<p class="card-desc">查看账单、开具发票</p>
					</div>
					<div class="service-card">
						<h3 class="card-title">调研问卷</h3>
						<p class="card-desc">邀请您提出宝贵建议</p>
					</div>
				</div>
			</div>
		</section>

		<!-- 底部体验区 -->
		<section class="experience-section">
			<div class="experience-container section">
				<h2 class="experience-title">立即体验，在阿里云创造未来</h2>
				<el-button type="primary" class="experience-btn">免费试用</el-button>
			</div>
		</section>
    <Footer />

	</div>


</template>

<script >
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'Product',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeIndex: '2',
      checkedCategories: {
        compute: false,
        gpu: false,
        bareMetal: false,
        ecI: false,
        ebs: false,
        eas: false,
        container: false
      },
      // 控制分类展开/折叠状态
      expandedCategories: {
        compute: true,  // 默认展开计算分类
        storage: false,
        network: false,
        security: false,
        database: false,
        ai: false,
        cloudNative: false,
        enterprise: false,
        iot: false,
        devTools: false,
        migration: false,
        privateCloud: false
      },
      num:1,
      drawer: false,
      direction: 'rtl',
    }
  },
  methods: {
    toLInk(link){
      this.$router.push(link)

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
	/* 全局样式重置 */
	.aliyun-pricing-page {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    background-color: #f9fafb;
    width: 100%;
    box-sizing: border-box;
	}

	/* 顶部导航 */
	.header-m {
		height: 240px;
		background-color: #fff;
		padding: 16px 0;
		border-bottom: 1px solid #eee;
		background: url(../../static/priceimg/pricebanner.jpg) center center / cover no-repeat;
	}

	.header-m  .title-text {
		color: #181818;
		font-weight: 600;
		font-size: 44px;
		line-height: 30px;
		height: 40px;
		margin-bottom: 10px;
	}

	.header-m  .desc-text {
		color: #181818;
		font-weight: 400;
		line-height: 25px;
		height: 25px;
		display: inline-block;
		width: 658px;
	}

	.header-container-m {
		padding-left: 36px;
		margin: 0 auto;
		display: flex;
		gap: 10px;
		flex-direction: column;
		justify-content: center;
		height: 100%;
    padding: 10px 10%;
	}

	.header-container-m .priceBtn {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.active-btn {
		background-color: #ff6a00 !important;
		border-color: #ff6a00 !important;
		color: #fff !important;
		padding: 8px 16px;
		border-radius: 4px;
	}

	.header-btn {
		color: #666 !important;
    padding: 8px 16px;
    border-color: #9ca4af;
	}

	/* 核心标语 */
	.banner {
		background-color: #fff;
		padding: 48px 0;
		text-align: center;
	}

	.banner-container {
		width: 1200px;
		margin: 0 auto;
	}

	.banner-title {
		font-size: 24px;
		font-weight: 500;
		color: #333;
		margin: 0;
	}

	/* 核心优势 */
	.advantage-section {
		background-color: #fff;
		padding: 32px 0;
		border-top: 1px solid #eee;
	}

	.advantage-section .vsimg {
		margin: 29px 0 36px;
		padding: 0 24px;
	}

	.advantage-container {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.section {
		width: 100%;
		padding: 0 10%;
		box-sizing: border-box;
	}
	.advantage-item {
		width: 33.3%;
    padding:0 24px;
    box-sizing: border-box;
	}

	.advantage-title {
		font-size: 18px;
		font-weight: 500;
		color: #333;
		margin-bottom: 8px;
	}

	.advantage-desc {
		font-size: 14px;
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	/* 通用模块样式 */
	.module-section {
		background-color: #f7f7f7;
		padding: 64px 0;
	}

	.module-container {
		margin: 0 auto;
	}

	.reverse {
		background: #fff;
	}

	.reverse .module-container {
		flex-direction: row-reverse;
	}

	.module-left {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
	}

	.module-left .btnBox {
		display: flex;
		align-items: center;
	}

	.module-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.module-title {
		font-size: 20px;
		font-weight: 500;
		color: #333;
		margin-bottom: 16px;
	}

	.module-desc {
		font-size: 14px;
		color: #666;
		line-height: 1.6;
		margin-bottom: 16px;
	}

	.module-btn {
		color: #425065;
		font-size: 14px;
    border-color: #d8d8d8;
    padding: 15px 36px;
	}

	.module-img {
		max-width: 100%;
		height: auto;
		border-radius: 4px;
	}

	/* 更多服务 */
	.more-service-section {
	/*	background-color: #fff;*/
		padding: 48px 0;
	}

	.more-service-container {

		margin: 0 auto;
	}

	.more-service-title {
		font-size: 20px;
		font-weight: 500;
		color: #333;
		margin-bottom: 24px;
	}

	.service-card-list {
		display: flex;
		justify-content: space-between;
	}

	.service-card {
		width: 32%;
		padding: 24px 16px;
		border: 1px solid #eee;
		border-radius: 4px;
		background-color: #fff;
	}

	.card-title {
		font-size: 16px;
		font-weight: 500;
		color: #333;
		margin-bottom: 8px;
	}

	.card-desc {
		font-size: 14px;
		color: #666;
		margin: 0;
	}
  .footer {
    background: linear-gradient(135deg, #001529 0%, #002244 100%);
    color: white;
    padding: 40px 0 40px;
    margin-top: 80px;
    position: relative;
    overflow: hidden;
    height: 400px;
  }
	/* 底部体验区 */
	.experience-section {
    background-image: url(../../static/priceimg/pricefooter.jpg);
    background-color: rgb(240, 240, 242);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 1920px 194px;
		padding: 48px 0;
		border-top: 1px solid #eee;
	}

	.experience-container {
		margin: 0 auto;
		position: relative;
	}

	.experience-title {
		font-size: 20px;
		font-weight: 500;
		color: #333;
		margin-bottom: 16px;
	}

	.experience-btn {
		background-color: #ff6a00 !important;
		border-color: #ff6a00 !important;
		padding: 8px 24px;
		border-radius: 4px;
	}

	.experience-icon {
		position: absolute;
		right: 20px;
		bottom: 0;
		width: 80px;
		height: 80px;
	}

	/* 响应式适配 */
	@media (max-width: 1200px) {

		.header-container,
		.banner-container,
		.advantage-container,
		.module-container,
		.more-service-container,
		.experience-container {
			width: 90%;
		}
	}

	@media (max-width: 768px) {

		.advantage-container,
		.module-container,
		.service-card-list {
			flex-direction: column;
		}

		.advantage-item,
		.module-left,
		.module-right,
		.service-card {
			width: 100%;
			margin-bottom: 24px;
		}

		.experience-icon {
			display: none;
		}
	}
</style>

