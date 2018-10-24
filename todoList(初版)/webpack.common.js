//webpack配置模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:{
        path:__dirname + "/src/main.js"
    },
    // output:{
    //     path:path.resolve(__dirname, 'dist'),
    //     filename:'[name].[hash].js'
    // },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve('src'),
        }
    },
    devServer:{
        contentBase: './dist',
        hot: true,
        inline:true,      
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/  
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    transformAssetUrls:{
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                      }
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
              }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            inject:'true'
        }),
        new VueLoaderPlugin()
    ]
        
}
