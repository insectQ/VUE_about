const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');//nodejs的路径模块
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common,{
    mode: 'production',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].[chunkhash].js'
    },
    optimization: {
        runtimeChunk: {
          name: 'manifest'
        },
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true 
            }),
            new OptimizeCSSAssetsPlugin({})  
        ],
        //minimizer: true,
        splitChunks:{
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: false,
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'initial',
              priority: -10,
              reuseExistingChunk: false,
              test: /node_modules\/(.*)\.js/
            },
            styles: {
              name: 'styles',
              test: /\.(scss|css)$/,
              chunks: 'all',
              minChunks: 1,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,                   
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/app.[name].css',
            chunkFilename: 'css/app.[contenthash:12].css'
        }),//分离css和js
    ]      
})
