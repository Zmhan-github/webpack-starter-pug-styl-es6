const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js' // точка входа
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/' // общий путь для бандла 
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: miniCSSExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { 
            loader: miniCSSExtractPlugin.loader
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new optimizeCSSAssetsPlugin(),
    new miniCSSExtractPlugin({
        filename: '[name]-[contenthash].css'
    }),
    new htmlWebpackPlugin({
        title: 'Chat app',
        template: './src/index.html'
    })
  ]
};