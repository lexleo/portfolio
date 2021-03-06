const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }) 
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
    ]
  }
};

module.exports = config;