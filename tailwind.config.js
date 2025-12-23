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
        },
        blue: {
            primary: '#1890FF', // 主蓝色
            light: '#40A9FF',   // 浅蓝色
        },
        gray: {
          100: '#F5F7FA',  // 卡片背景
          200: '#E5E6EB',  // 分割线
          400: '#86909C',  // 次要文字
          700: '#4E5969',  // 主要文字
          900: '#1D2129',  // 标题文字
        }
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
