var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [{ 
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                  })
            }]
    },
    plugins: [
        // 在dist文件夹中 自动新建index.html  并且所有的bundle会自动添加到index.html中
        new HtmlWebpackPlugin({
            template : 'src/index.html',
            filename : 'index.html'
        }),
        // 拷贝文件
        new CopyPlugin([
            {from:'src/images',to:'images'}
        ]),
        // 压缩文件
        new UglifyJsPlugin(),
        // 分离css
        new ExtractTextPlugin('styles.css'),
        // 在building之前删除你以前build过的文件
        new CleanWebpackPlugin()
        
    ]
}