const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  config = injectBabelPlugin(['styled-components', {}], config);
  config = injectBabelPlugin('transform-class-properties', config);
  return config;
};