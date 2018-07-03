const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js' // точка входа
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/' // общий путь для бандла 
  },
  devServer: {
    contentBase: 'dist',
    overlay: true // вывод ошибок в браузер
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { 
            loader: "style-loader"
          },
          {
            loader: "css-loader"
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
            loader: 'file-loader', // загрузить файлы
            options: {
              name: '[name].html' 
            }
          },
          {
            loader: 'extract-loader' // найти пути
          },
          {
            loader: 'html-loader', // снизу вверх 
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
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
  }
};