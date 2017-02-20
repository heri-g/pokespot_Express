var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: './public/javascripts/app',
        filename: 'bundle.js',
        publicPath: '/javascripts/app/',
        chunkFilename: '[id].chunk.js'
    }
});
