const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack'); 

module.exports = {
  entry: './src/js/index.js',  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  
        },
      },
      {
        test: /\.scss$/,  
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  
    }),
    new Dotenv(),  
  ],
  devServer: {
    static: './dist',  
  },
  mode: 'development',  
};
