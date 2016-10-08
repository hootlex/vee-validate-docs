const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const isProduction = process.env.NODE_ENV === 'production';

let config = {
    entry: {
        bundle: path.join(__dirname, 'src/js/main'),
        vendor: ['vue', 'vue-router', 'moment', 'vee-validate', 'collectionsjs']
    },
    output: {
        path: path.join(__dirname, 'docs/assets'),
        filename: isProduction ? 'js/[name].min.js' : 'js/[name].js',
        publicPath: '/assets/'
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
                test: /\.vue$/,
                loader: 'eslint',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/,
                enforce: 'pre'
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
        }
    }
};

config = merge(
    config,
    isProduction ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js')
);

module.exports = config;
