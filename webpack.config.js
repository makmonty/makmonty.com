const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const distDir = 'public';
const extractCSS = new ExtractTextPlugin('[name]');
const extractHTML = new ExtractTextPlugin('[name]');

let entry = {};
// entry['css/style.css'] = './sass/style.scss';
entry['index.html'] = './views/index.pug';

module.exports = {
  entry,
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
        use: extractCSS.extract([
          'css-loader',
          'sass-loader'
        ])
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
    extractCSS,
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
