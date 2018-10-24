const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');//nodejs的路径模块

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                     'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]_[hash:base64:8]' 
                    }
                }]
            },
        ]},
    plugins:[
        new webpack.HotModuleReplacementPlugin(),        
    ]
})

