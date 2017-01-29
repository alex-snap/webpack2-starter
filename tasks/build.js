const webpack = require('webpack');

const helpers = require('./helpers');

const webpackConfig = helpers.resolveWebpackConfig('webpack.prod')();

webpack(webpackConfig).run((error, status) => {
    if (error) {
        throw new Error(error);
    } else {
        console.log('webpack build complete without errors');
    }
});