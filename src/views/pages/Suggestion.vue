<template>
  <div class="suggestion-container">
    <!-- 头部 -->
    <div class="header">
      <div class="title">提建议</div>
      <button class="close-btn" @click="goBack">×</button>
    </div>

    <!-- 主内容区 -->
    <div class="content">
      <!-- 说明文字 -->
      <div class="intro">
        <p>阿里云致力于为客户提供更优质的产品与服务，您的真实反馈对我们至关重要。诚邀您提出宝贵建议，综合评估后针对被采纳的优质建议，阿里云将提供优惠券奖励。（<a href="#" class="link">点击查看优惠券适用范围</a>）</p>
        <p>如需售后服务支持、获取产品/方案咨询，请拨打24小时热线400-80-13260，或<a href="#" class="link">【提交工单】</a>联系阿里云工程师为您提供帮助。</p>
      </div>

      <!-- 表单 -->
      <form class="suggestion-form">
        <!-- 建议标题 -->
        <div class="form-item">
          <label for="suggestion-title" class="form-label required">建议标题</label>
          <div class="input-wrapper">
            <input 
              type="text" 
              id="suggestion-title" 
              class="form-input" 
              v-model="suggestion.title"
              placeholder="请输入"
              maxlength="50"
            />
            <span class="char-count">{{ suggestion.title.length }}/50</span>
          </div>
        </div>

        <!-- 建议内容 -->
        <div class="form-item">
          <label for="suggestion-content" class="form-label required">建议内容</label>
          <div class="editor-wrapper">
            <!-- 编辑器工具栏 -->
            <div class="editor-toolbar">
              <button type="button" class="toolbar-btn" title="插入图片">
                <span class="icon">+</span>
              </button>
              <button type="button" class="toolbar-btn" title="撤销">
                <span class="icon">↩</span>
              </button>
              <button type="button" class="toolbar-btn" title="重做">
                <span class="icon">↪</span>
              </button>
              <button type="button" class="toolbar-btn" title="全屏">
                <span class="icon">⛶</span>
              </button>
              <button type="button" class="toolbar-btn" title="插入表格">
                <span class="icon">▢</span>
              </button>
              
              <select class="toolbar-select" title="格式">
                <option value="text">正文</option>
                <option value="heading">标题</option>
              </select>
              
              <select class="toolbar-select" title="字体">
                <option value="micr...">micr...</option>
              </select>
              
              <select class="toolbar-select" title="字号">
                <option value="10.5">10.5</option>
              </select>
              
              <button type="button" class="toolbar-btn" title="粗体">
                <span class="icon">B</span>
              </button>
              <button type="button" class="toolbar-btn" title="斜体">
                <span class="icon">I</span>
              </button>
              <button type="button" class="toolbar-btn" title="下划线">
                <span class="icon">_</span>
              </button>
              <button type="button" class="toolbar-btn" title="删除线">
                <span class="icon">~</span>
              </button>
              <button type="button" class="toolbar-btn" title="上标">
                <span class="icon">x<sup>2</sup></span>
              </button>
              <button type="button" class="toolbar-btn" title="下标">
                <span class="icon">x<sub>2</sub></span>
              </button>
              <button type="button" class="toolbar-btn" title="字体颜色">
                <span class="icon">A</span>
              </button>
              <button type="button" class="toolbar-btn" title="背景颜色">
                <span class="icon">🖍</span>
              </button>
              
              <div class="toolbar-divider"></div>
              
              <button type="button" class="toolbar-btn" title="左对齐">
                <span class="icon">⇤</span>
              </button>
              <button type="button" class="toolbar-btn" title="居中对齐">
                <span class="icon">⇔</span>
              </button>
              <button type="button" class="toolbar-btn" title="右对齐">
                <span class="icon">⇥</span>
              </button>
              <button type="button" class="toolbar-btn" title="两端对齐">
                <span class="icon">⇆</span>
              </button>
              
              <button type="button" class="toolbar-btn" title="更多">
                <span class="icon">...</span>
              </button>
            </div>
            
            <!-- 编辑器内容区 -->
            <div class="editor-content">
              <div class="placeholder">【需求场景】：</div>
              <div class="placeholder">【改进建议】：</div>
              <textarea 
                id="suggestion-content" 
                class="content-input" 
                v-model="suggestion.content"
                placeholder="请输入您的建议内容"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- 文件上传 -->
        <div class="form-item">
          <label class="form-label">上传附件</label>
          <div class="upload-wrapper">
            <button type="button" class="upload-btn">
              <span class="upload-icon">⬆</span>
              上传附件
            </button>
            <span class="upload-tip">支持文件类型：rar.zip.txt.doc.docx.pdf...</span>
          </div>
        </div>

        <!-- 产品分类 -->
        <div class="form-item">
          <label for="product-category" class="form-label required">产品分类</label>
          <select 
            id="product-category" 
            class="form-select" 
            v-model="suggestion.category"
          >
            <option value="">请选择产品分类</option>
            <option value="cloud-server">云服务器ECS</option>
            <option value="database">云数据库</option>
            <option value="storage">对象存储OSS</option>
            <option value="cdn">内容分发网络CDN</option>
            <option value="other">其他产品</option>
          </select>
        </div>

        <!-- 是否公开 -->
        <div class="form-item">
          <label class="form-label required">是否公开</label>
          <div class="radio-group">
            <label class="radio-item">
              <input 
                type="radio" 
                name="is-public" 
                value="public" 
                v-model="suggestion.isPublic"
              />
              <span class="radio-label">公开</span>
            </label>
            <label class="radio-item">
              <input 
                type="radio" 
                name="is-public" 
                value="private" 
                v-model="suggestion.isPublic"
              />
              <span class="radio-label">不公开</span>
            </label>
          </div>
          <div class="radio-tip">
            您的建议在通过聆听预审之后会被公开，若您不希望被公开，请您选择"不公开"
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="form-item">
          <button type="button" class="submit-btn" @click="submitSuggestion">提交建议</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suggestion',
  data() {
    return {
      suggestion: {
        title: '',
        content: '',
        category: '',
        isPublic: 'public',
        attachments: []
      }
    }
  },
  methods: {
    goBack() {
      // 这里可以实现返回上一页的逻辑
      window.history.back();
    },
    submitSuggestion() {
      // 表单验证
      if (!this.suggestion.title.trim()) {
        alert('请输入建议标题');
        return;
      }
      
      if (!this.suggestion.content.trim()) {
        alert('请输入建议内容');
        return;
      }
      
      if (!this.suggestion.category) {
        alert('请选择产品分类');
        return;
      }
      
      // 提交逻辑
      console.log('提交建议:', this.suggestion);
      alert('建议提交成功！感谢您的反馈。');
      // 可以在这里添加实际的提交API调用
    }
  }
}
</script>

<style scoped>
.suggestion-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.close-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #333;
}

.content {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
}

.intro {
  background-color: #e6f7ff;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.intro p {
  margin: 8px 0;
  line-height: 1.5;
  color: #333;
}

.link {
  color: #1890ff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.suggestion-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
}

.form-item {
  margin-bottom: 24px;
}

.form-label {
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
}

.form-label.required::before {
  content: '*';
  color: #ff4d4f;
  margin-right: 4px;
}

.input-wrapper {
  display: inline-block;
  position: relative;
  width: calc(100% - 116px);
}

.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.char-count {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 12px;
}

.editor-wrapper {
  display: inline-block;
  width: calc(100% - 116px);
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
}

.editor-toolbar {
  background-color: #f5f5f5;
  padding: 8px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.toolbar-btn {
  background: none;
  border: none;
  padding: 4px 8px;
  margin-right: 4px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toolbar-btn:hover {
  background-color: #e6e6e6;
}

.toolbar-select {
  margin-right: 4px;
  padding: 2px 4px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 12px;
}

.toolbar-divider {
  width: 1px;
  height: 16px;
  background-color: #d9d9d9;
  margin: 0 8px;
}

.editor-content {
  position: relative;
  min-height: 200px;
}

.content-input {
  width: 100%;
  min-height: 200px;
  padding: 12px;
  border: none;
  outline: none;
  resize: vertical;
  font-size: 14px;
  line-height: 1.5;
}

.placeholder {
  color: #999;
  margin-bottom: 16px;
}

.upload-wrapper {
  display: inline-block;
  width: calc(100% - 116px);
}

.upload-btn {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.upload-btn:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.upload-tip {
  color: #999;
  font-size: 12px;
}

.form-select {
  display: inline-block;
  width: calc(100% - 116px);
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  cursor: pointer;
}

.form-select:focus {
  outline: none;
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.radio-group {
  display: inline-block;
  width: calc(100% - 116px);
}

.radio-item {
  margin-right: 32px;
  cursor: pointer;
}

.radio-tip {
  margin-top: 8px;
  color: #999;
  font-size: 12px;
  margin-left: 116px;
}

.submit-btn {
  background-color: #1890ff;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 116px;
}

.submit-btn:hover {
  background-color: #40a9ff;
}
</style>