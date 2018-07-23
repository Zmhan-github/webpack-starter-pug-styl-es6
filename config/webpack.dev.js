const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js' // точка входа
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/' // общий путь для бандла
  },
  devServer: {
    contentBase: 'dist',
    overlay: true, // вывод ошибок в браузер
    stats: {
      colors: true
    }
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
            loader: "style-loader"
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
        test: /\.styl$/,
        use: [
          { loader: "style-loader"  },
          { loader: "css-loader"    },
          // { loader: "postcss-loader"},
          { loader: "stylus-loader" }
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
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader'
          }
        ]
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'file-loader', // загрузить файлы
      //       options: {
      //         name: '[name].html'
      //       }
      //     },
      //     {
      //       loader: 'extract-loader' // найти пути
      //     },
      //     {
      //       loader: 'html-loader', // снизу вверх
      //       options: {
      //         attrs: ['img:src']
      //       }
      //     }
      //   ]
      // },
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
    new htmlWebpackPlugin({
        title: 'Chat app',
        template: './src/index.pug'
    })
  ]
};