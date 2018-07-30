'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530159619593_4115';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.jwt = {
    secret: '123456',
    enable: false,
  };
  return config;
};
