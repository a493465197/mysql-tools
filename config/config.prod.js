/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = '_1648381686957_8975';

  // add your middleware config here
  config.middleware = [];
  config.assets = {
    // publicPath: '/a/',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mongoose = {
    client:{
    url:'mongodb://192.169.0.111/book',
    options:{}
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    baseUrl: 'http://faka.lzydev.top/'
  };
  

  return {
    ...config,
    ...userConfig,

  };
};
