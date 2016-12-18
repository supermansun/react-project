var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackDevServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
// module.exports = {
const defaultSet = {
    devtool: 'source-map',
    entry: {
        index: ['./app/components/index.js']
    },
    // sub:['./app/sub.js']

    // __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        // publicPath:'http://localhost:8080/build',
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: '[name].js',
        chunkFilename: "[id].build.js"
        // filename: "bundle.js"//打包后输出文件的文件名
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel?presets[]=react,presets[]=es2015',
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
                // loader:ExtractTextPlugin.extract("style-loader", "css")
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: __dirname + '/app/index.html',
            inject: "html",
            chunks: ['index']
        })
    ],
    postcss: [
        require('autoprefixer')
    ],
};


if (TARGET === 'start' || !TARGET) {
    console.log(TARGET)
    module.exports = merge(defaultSet, {
        devServer: {
            contentBase: "./build",//本地服务器所加载的页面所在的目录
            colors: true,//终端中输出结果为彩色
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },
        // plugins:[
        //   new webpack.HotModuleReplacementPlugin(),
        //   new webpack.DefinePlugin({
        //       'process.env.NODE_ENV': '"development"'
        //   }),
        // ]
    })
}
;
if (TARGET === "build") {
    module.exports = defaultSet;
}