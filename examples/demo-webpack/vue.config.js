/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
  configureWebpack: {
    externals: {
      vue: 'Vue',
    },
  },
};

module.exports = config;
