# 依赖安装说明

~~~json
{
  "name": "wl-templete",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "vite build", // 构建生产版本
    "preview": "vite preview", // 预览构建后的应用
    "preinstall": "npx only-allow pnpm", // 强制使用 pnpm 安装依赖
    "lint": "eslint .", // 执行代码检查
    "lint:fix": "eslint . --fix" // 执行代码检查并自动修复
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.3.1", // Element Plus 的 Vue 图标库
    "@vueuse/core": "^10.9.0", // Vue 3 的实用函数库
    "axios": "^1.6.7", // 基于 Promise 的 HTTP 客户端
    "cut-tree": "^1.0.0", // 处理树形结构数据的工具库
    "dayjs": "^1.11.10", // 轻量级日期处理库
    "default-passive-events": "^2.0.0", // 帮助将事件处理程序设置为被动
    "echarts": "^5.5.0", // 强大的图表绘制库
    "element-plus": "^2.6.1", // Vue 3 组件库
    "fuse.js": "^7.0.0", // 模糊搜索库
    "lodash": "^4.17.21", // JavaScript 实用工具库
    "lottie-web": "^5.12.2", // Web 中渲染 Lottie 动画的库
    "mitt": "^3.0.1", // 轻量级事件总线库
    "mockjs": "^1.1.0", // 生成模拟数据的库
    "nprogress": "^0.2.0", // 显示页面加载进度条的库
    "pinia": "^2.1.7", // Vue 3 的状态管理库
    "pinia-plugin-persistedstate": "^3.2.1", // Pinia 状态持久化插件
    "screenfull": "^6.0.2", // 简化全屏操作的库
    "vue": "^3.4.21", // Vue 3 核心库
    "vue-i18n": "^9.10.1", // Vue 的国际化插件
    "vue-router": "^4.3.0" // Vue 3 的路由库
  },
  "devDependencies": {
    "@antfu/eslint-config": "^0.39.8", // Antfu 提供的 ESLint 配置
    "@iconify/vue": "^4.1.1", // 在 Vue 3 中使用 Iconify 图标库
    "@vitejs/plugin-vue": "^4.6.2", // Vite 的 Vue 插件
    "@vitejs/plugin-vue-jsx": "^3.1.0", // Vite 的 Vue JSX 插件
    "autoprefixer": "^10.4.18", // 自动添加 CSS 浏览器前缀
    "eslint": "^8.57.0", // 代码检查工具
    "postcss": "^8.4.35", // CSS 后处理器
    "sass": "^1.71.1", // Sass 编译器
    "tailwindcss": "^3.4.1", // 实用优先的 CSS 框架
    "vite": "^5.1.5", // 前端构建工具
    "vite-plugin-svg-icons": "^2.0.1", // 处理 SVG 图标的 Vite 插件
    "vite-plugin-mock": "2.9.6" // Vite 插件用于提供 mock 数据服务
  }
}
~~~
# 路由meta说明

~~~
{
    /**
     * 在菜单中显示的标题。可以是定义好的多语言模板。
     */
    title:String, 
    /**
     * 在菜单中显示的图标。使用的自定义的 SvgIcon 组件渲染，可以是本地图标或网络中的资源。
     */
    icon:String, 
    /**
     * 是否在菜单中隐藏。（默认为 false）
     */
    isHide: Boolean, 
    /**
     * 是否在菜单中隐藏所有子级（默认为 false）。
     * 当为true时，所有子级的isHide和hideChildren都会被动态赋值为true
     */
    hideChildren: Boolean, 
    /**
     * 如果有值并以 http: 或 https: 开头，则以外链内嵌方式打开（默认无）
     */
    iframeLink:String, 
    /**
     * 在 layout 框架外打开（默认为 false）。
     * 如数据大屏等。
     * 具有传递性，影响子路由。
     */
    isOuter:Boolean, 
    /**
     * 可以访问的角色编码（默认无）。
     * 为 [] 时所有角色都不可以访问，为空值时所有角色都可以访问
     * 具有传递性，影响子路由。
     * 当没有权限访问时，此路由的isHide和hideChildren会被动态赋值为true
     */
    roles:Array|String, 
    /**
     * 是否缓存组件实例（默认为 false）。
     * 注意：组件名要与对应路由的 name 相同
     */
    isKeep:Boolean, 
    /**
     * 多标签页模式下是否固定在标签页（默认 false）。
     */
    fixedTab: Boolean,
    /**
     * 单独配置此页面的过渡动画（默认无）。
     */
    transition:String, 
    /**
     *  排序号（默认无）
     */
    sortNo:Number,
}
~~~

