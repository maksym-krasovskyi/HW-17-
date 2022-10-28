const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nestedHtmlLoader = require('./loaders/nested-html-loader')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: '../public',
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    // Disables attributes processing
                    sources: false,
                    preprocessor: nestedHtmlLoader,
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: false,
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
