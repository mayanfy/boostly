
const path = require('path');
const merge = require('webpack-merge');
const UiConfig = require('./uiconfig');
const externals = require('./externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

    entry: {
        bundle: './src/app.js',
        ui: './src/js/ui.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open:true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader', 
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
                include: path.join(__dirname, "node_modules"),
                exclude(path) {
                    // You can perform more complicated checks  as well.
                    return path.match(/src/);
                },
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: "../fonts" // definimos la ruta que se pondra en el css de salida
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                include: path.join(__dirname, "src"),
                exclude(path) {
                    // You can perform more complicated checks  as well.
                    return path.match(/node_modules/);
                },
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: "../images" // definimos la ruta que se pondra en el css de salida
                    }
                }]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            publicPath: "./images"
                        }
                    },
                    {
                        loader: 'pug-html-loader', 
                        options: { 
                            pretty: "    " 
                        }
                    }
                ]
            }
        ]
    }
    ,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/index.pug'})
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

module.exports = merge(config,UiConfig,externals);