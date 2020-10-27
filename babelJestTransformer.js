const babelJest = require('babel-jest');
const babelConfig = require('./babel.config');

module.exports = babelJest.createTransformer(
  Object.assign({}, babelConfig, { babelrc: false, configFile: false }),
);
