import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path';
import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';


/**
 * 初始化代理
 * @param {*} env 环境配置对象
 * @param {*} isDev 是否为开发模式
 * @returns 代理对象
 */
// 初始化代理函数
function initProxy(env, isDev) {
  if (!isDev) return {};
  const proxy = {};
  const rawProxy = JSON.parse(env.VITE_DEV_PROXY || '{}');
  Object.keys(rawProxy).forEach((key) => {
    proxy[key] = {
      target: rawProxy[key],
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${key}`), ''),
    };
  });
  return proxy;
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode); // command: 'serve' or 'build'
  const env = loadEnv(mode, process.cwd()); // 从.env文件加载环境变量
  return {
    base: env.VITE_APP_BASE_PATH,
    plugins: [
      // Vue模板文件编译插件
      vue(),
      // jsx文件编译插件
      vueJsx(),
      // svg图标插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: command === 'build',
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      open: false,
      host: true,
      port: env.VITE_APP_PORT,
      proxy: initProxy(env, mode === 'development'),
    }
  }
});
