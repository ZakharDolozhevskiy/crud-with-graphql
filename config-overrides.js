const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  config = injectBabelPlugin(['styled-components', {}], config);
  config = injectBabelPlugin('transform-class-properties', config);
  config = injectBabelPlugin('emotion', config);
  config = injectBabelPlugin('babel-plugin-styled-components', config);
  return config;
};