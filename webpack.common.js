const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js'],
        vendor: ['lodash']
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    // include: path.resolve(__dirname, "src"),
                    options: {
                        presets: ['env'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new Webpack.HashedModuleIdsPlugin()
        // new Webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new Webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // })
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
}