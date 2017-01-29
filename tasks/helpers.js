const path = require('path');
const WEBPACK_CONFIG_ROOT = path.resolve(__dirname, '../config/webpack');

const resolveWebpackConfig = (relativePath) => {
    const configPath = path.join.apply(path, [WEBPACK_CONFIG_ROOT, relativePath]);
    return require(configPath);
};

module.exports = {
    resolveWebpackConfig
};