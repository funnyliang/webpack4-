const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  // devtool: "inline-source-map",
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: false
            }
        })
    ],
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    }
},
  devServer: {
    contentBase: '/',
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}