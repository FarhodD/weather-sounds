const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public/assets'), to: 'assets' },
        { from: path.resolve(__dirname, 'public/fonts'), to: 'fonts' },
      ],
    }),
  ]
}