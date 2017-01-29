const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const helpers = require('./helpers');

const webpackConfig = helpers.resolveWebpackConfig('webpack.dev')({ defaultEnv: 'development' });

const CLIENT_PORT = '8080';
const CLIENT_HOST = 'localhost';

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  contentBase: 'serve',
  stats: { colors: true }
});
server.listen(CLIENT_PORT, CLIENT_HOST, () => { });