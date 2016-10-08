const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, 'docs/assets')),
        new ExtractTextPlugin('css/[name]-[hash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor-[hash].js'
        }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 51200 }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css'
                })
            },
            {
                test: /.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: ['css', 'sass']
                })
            }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract({
                fallbackLoader: 'style',
                loader: 'css'
            }),
            sass: ExtractTextPlugin.extract({
                fallbackLoader: 'style',
                loader: ['css', 'sass']
            })
        },
        plugins: [
            new ExtractTextPlugin('css/[name]-[hash].css')
        ]
    }
};
