import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import styleImport from "vite-plugin-style-import";
import legacy from '@vitejs/plugin-legacy'; // 是为了使构建的页面兼容那些不支持 module script 的浏览器

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    vue(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    styleImport({
      // 在 Vite 项目中按需引入组件
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
  base: "./", // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/dashboard-api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/dashboard-api/', '/')
      }
    }
  },
});
