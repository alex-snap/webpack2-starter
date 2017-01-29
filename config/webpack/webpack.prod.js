const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');

module.exports = function () {
    return webpackMerge(commonConfig(), {
        devtool: 'source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].[chunkhash].bundle.js',
            chunkFilename: '[id].[chunkhash].chunk.js',
            publicPath: '/'
        },
        plugins: [
            new UglifyJsPlugin({
                beautify: false,
                mangle: { screw_ie8 : true, keep_fnames: true },
                compress: { screw_ie8: true },
                comments: false
            })
        ]
    });
};