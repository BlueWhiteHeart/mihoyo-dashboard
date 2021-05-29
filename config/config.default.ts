import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '_1614221169780_4319';

  config.middleware = [];

  const bizConfig = {
    // sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 视图输出定义
  config.view = {
    defaultViewEngine: 'nunjucks',
    root: path.join(appInfo.baseDir, 'dist'), //
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // 静态资源定义
  config.static = {
    prefix: '/assets/', //
    dir: [
      path.join(appInfo.baseDir, 'app/public'),
      path.join(appInfo.baseDir, 'dist/assets'),
    ],
  };

  config.security = {
    csrf: { enable: false },
  };

  return {
    ...config,
    ...bizConfig,
  };
};
