// See https://gist.github.com/fstanis/773110b12d91f42d3c3a22b71cbf6c42
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlPlugin = require('html-webpack-plugin');

const distDir = 'public';

// let extractCSS = new ExtractTextPlugin('css/style.css');
let extractHTML = new ExtractTextPlugin('[name]');

module.exports = {
  entry: {
    // 'css/style.css': './sass/style.scss',
    'index.html': './views/index.pug'
  },
  output: {
    filename: '[name]',
    path: path.resolve(distDir)
  },
  devServer: {
    contentBase: path.resolve(distDir)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: 'css/',
              publicPath: '/'
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /favicons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/'
            }
          }
        ]
      },
      {
        test: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /assets\/(?!favicons).*\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: extractHTML.extract([
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          },
          'pug-html-loader'
        ])
      }
    ]
  },
  plugins: [
    // extractCSS,
    extractHTML
    // new HtmlPlugin({
    //   template: './views/index.pug'
    // }),
    // new HtmlPlugin({
    //   template: './views/games/box-rain.pug',
    //   filename: 'games/box-rain.html'
    // })
  ]
};
