const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';

let config = {
    entry: {
        bundle: path.join(__dirname, 'src', 'main'),
        vendor: ['vue', 'vue-router', 'moment', 'vee-validate']
    },
    output: {
        path: path.join(__dirname, 'docs/assets'),
        filename: '[name].js',
        publicPath: isProduction ? '/vee-validate-docs/assets/' : '/assets/'
    },
    devServer: {
        contentBase: 'docs',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    babelrc: false,
                    presets: [
                      ['es2015', { modules: false }]
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: ['css', 'sass']
                })
            },
            {
                test: /\.woff(2)?(\?.*)?$/i,
                loader: 'url',
                query: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
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
            new ExtractTextPlugin('[name].css')
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};

if (isProduction) {
    config = merge(config, {
        plugins: [
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
        ]
    });
}

module.exports = config;
