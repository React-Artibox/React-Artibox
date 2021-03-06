// @flow

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    port: 5180,
    progress: true,
    hot: true,
    historyApiFallback: true,
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
    }],
  },
};
