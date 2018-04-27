const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin")
const CleanWebpackPlugin=require("clean-webpack-plugin");
const Webpack=require("webpack");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath:'/'
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'new Output Management'
        }),
        new Webpack.NamedChunksPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        // contentBase:'./dist',
        hot:true
    }
}