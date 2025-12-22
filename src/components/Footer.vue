<template>
  <el-footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-column footer-info">
          <h3 class="footer-logo">阿里云AI</h3>
          <p class="footer-desc">让AI触手可及，助力企业数字化转型</p>
          <div class="footer-contact">
            <p class="contact-item">
              <i class="el-icon-phone"></i>
              <span>400-123-4567</span>
            </p>
            <p class="contact-item">
              <i class="el-icon-message"></i>
              <span>service@alicloud.com</span>
            </p>
          </div>
          <div class="footer-social">
            <a href="#" class="social-icon el-icon-wechat"></a>
            <a href="#" class="social-icon el-icon-weibo"></a>
            <a href="#" class="social-icon el-icon-twitter"></a>
            <a href="#" class="social-icon el-icon-linkedin"></a>
          </div>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">产品与服务</h4>
          <ul class="footer-links">
            <li><a href="#">AI大模型</a></li>
            <li><a href="#">视觉智能</a></li>
            <li><a href="#">语音智能</a></li>
            <li><a href="#">自然语言处理</a></li>
            <li><a href="#">机器学习平台</a></li>
            <li><a href="#">智能搜索</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">解决方案</h4>
          <ul class="footer-links">
            <li><a href="#">智能制造</a></li>
            <li><a href="#">智能金融</a></li>
            <li><a href="#">智能医疗</a></li>
            <li><a href="#">智能零售</a></li>
            <li><a href="#">智能交通</a></li>
            <li><a href="#">智能政务</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">开发者资源</h4>
          <ul class="footer-links">
            <li><a href="#">文档中心</a></li>
            <li><a href="#">开发者社区</a></li>
            <li><a href="#">API参考</a></li>
            <li><a href="#">SDK下载</a></li>
            <li><a href="#">示例代码</a></li>
            <li><a href="#">技术博客</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">支持与帮助</h4>
          <ul class="footer-links">
            <li><a href="#">技术支持</a></li>
            <li><a href="#">在线客服</a></li>
            <li><a href="#">工单系统</a></li>
            <li><a href="#">常见问题</a></li>
            <li><a href="#">服务等级协议</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>

        <div class="footer-column footer-subscribe">
          <h4 class="footer-title">订阅最新资讯</h4>
          <p class="subscribe-desc">获取AI技术动态和产品更新</p>
          <div class="subscribe-form">
            <input type="email" placeholder="输入您的邮箱" class="subscribe-input">
            <button type="submit" class="subscribe-btn">订阅</button>
          </div>
        </div>
      </div>

      <div class="footer-middle">
        <div class="footer-certifications">
          <a href="#" class="certification-item">
            <img src="/src/static/ljaly/ljaly5.png" alt="ISO认证" class="cert-img">
          </a>
          <a href="#" class="certification-item">
            <img src="/src/static/ljaly/ljaly6.png" alt="安全认证" class="cert-img">
          </a>
          <a href="#" class="certification-item">
            <img src="/src/static/img/pic_1.png" alt="隐私认证" class="cert-img">
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-legal">
          <a href="#" class="legal-link">隐私政策</a>
          <span class="legal-separator">|</span>
          <a href="#" class="legal-link">服务条款</a>
          <span class="legal-separator">|</span>
          <a href="#" class="legal-link">法律声明</a>
          <span class="legal-separator">|</span>
          <a href="#" class="legal-link">网站地图</a>
          <span class="legal-separator">|</span>
          <a href="#" class="legal-link">知识产权</a>
        </div>
        <div class="footer-copyright">
          <p>© 2024 阿里云 版权所有</p>
          <p>ICP备案号：浙B2-20080224-1</p>
        </div>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #001529 0%, #002244 100%);
  color: white;
  padding: 40px 0 40px;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  height: 400px;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #007bff, #1890ff, #40a9ff, #69c0ff);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1.5fr;
  gap: 50px;
  margin-bottom: 60px;
}

.footer-info {
  padding-right: 40px;
}

.footer-logo {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-desc {
  color: #a0aec0;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 30px;
}

.footer-contact {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #a0aec0;
  font-size: 14px;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.contact-item:hover {
  color: #40a9ff;
}

.contact-item i {
  color: #40a9ff;
  font-size: 18px;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #a0aec0;
  font-size: 20px;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #40a9ff;
  color: #fff;
  transform: translateY(-3px);
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #40a9ff;
  display: inline-block;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 16px;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 12px;
}

.footer-links a::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #40a9ff;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.footer-links a:hover {
  color: #40a9ff;
  transform: translateX(8px);
}

.footer-links a:hover::before {
  opacity: 1;
  transform: translateX(4px);
}

.footer-subscribe .subscribe-desc {
  color: #a0aec0;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.subscribe-form {
  display: flex;
  gap: 12px;
  flex-direction: column;
}

.subscribe-input {
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.subscribe-input::placeholder {
  color: #718096;
}

.subscribe-input:focus {
  outline: none;
  border-color: #40a9ff;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(64, 169, 255, 0.2);
}

.subscribe-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #007bff, #40a9ff);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background: linear-gradient(135deg, #0056b3, #339af0);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(64, 169, 255, 0.3);
}

.footer-middle {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
  margin-bottom: 30px;
}

.footer-certifications {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.certification-item {
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.certification-item:hover {
  opacity: 1;
  transform: translateY(-3px);
}

.cert-img {
  max-height: 40px;
  filter: grayscale(100%) brightness(200%);
  transition: filter 0.3s ease;
}

.certification-item:hover .cert-img {
  filter: grayscale(0%) brightness(100%);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.footer-legal {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.legal-link {
  color: #718096;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #40a9ff;
}

.legal-separator {
  color: #333;
}

.footer-copyright {
  color: #718096;
  font-size: 13px;
  text-align: center;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
  }

  .footer-subscribe {
    grid-column: span 2;
  }
}

@media (max-width: 992px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-info {
    grid-column: span 2;
  }

  .footer-subscribe {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-info {
    grid-column: span 1;
    padding-right: 0;
  }

  .footer-subscribe {
    grid-column: span 1;
  }

  .footer-legal {
    flex-direction: column;
    gap: 10px;
  }

  .legal-separator {
    display: none;
  }

  .footer-certifications {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
