import { EggAppConfig, PowerPartial } from 'egg';
// vite 服务的启动实际上是 eggjs 的中间件实现，只有在开发环境下才需要启用 vite 服务
export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vitePlugin = {
    devServer: true,
  };

  return config;
};
