/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC', // 导航栏主色
        lightBlue: '#e8f3ff', // 卡片背景浅蓝
        orange: {
            primary: '#FF6600', // 主橙色
            light: '#FF8A33',   // 浅橙色
              dark: '#d46b08'
        },
        blue: {
            primary: '#1890FF', // 主蓝色
            light: '#40A9FF',   // 浅蓝色
            DEFAULT: '#1890ff',
            dark: '#096dd9'
        },
        'aliyun-gray': {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          800: '#343a40',
          900: '#212529'
        },
        gray: {
          100: '#F5F7FA',  // 卡片背景
          200: '#E5E6EB',  // 分割线
          400: '#86909C',  // 次要文字
          700: '#4E5969',  // 主要文字
          900: '#1D2129',  // 标题文字
          light: '#f5f5f5',
          DEFAULT: '#8c8c8c',
          dark: '#595959'
        },
        'ali-blue': '#1890ff',
        'ali-gray-light': '#f5f5f5',
        'ali-gray': '#e8e8e8',
        'ali-gray-dark': '#8c8c8c',
        'ali-text': '#333333',
        'ali-text-light': '#666666',
        primaryText: '#1890ff', // 选中项文字色
        secondary: '#f5f5f5', // 侧边栏背景
        textNormal: '#333333', // 常规文字
        textLight: '#8c8c8c', // 浅色文字
        hotTag: '#ff4d4f', // HOT标签色
        newTag: '#13c2c2', // NEW标签色
        product:{
            primary: '#FF6A00', // 橙色按钮主色
            secondary: '#466EFF', // 蓝色文字主色
            textDark: '#333333', // 深色文字
            textLight: '#666666', // 浅色文字
            bgLight: '#F9F7FF', // 背景淡紫色
        }
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      fontSize: {
        'sm-title': '0.875rem',
        'xs-desc': '0.75rem',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg, #1890ff 0%, #40a9ff 100%)',
        'orange-gradient': 'linear-gradient(90deg, #fa8c16 0%, #ffab40 100%)',
        'gray-gradient': 'linear-gradient(90deg, #f5f5f5 0%, #e5e5e5 100%)'
      }
    }
  },
  plugins: [],
}
