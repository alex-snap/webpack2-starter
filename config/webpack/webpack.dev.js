const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');

module.exports = function () {
    return webpackMerge(commonConfig(), {
        devtool: 'source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].chunk.js',
            publicPath: '/'
        }
    });
};