const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const distDir = 'public';

let entry = {};
entry['css/style.css'] = './sass/style.scss';
// entry['index.html'] = './views/index.pug';

module.exports = {
  entry,
  output: {
    filename: '[name]',
    path: path.resolve(distDir)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            // 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.png$/,
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
        use: [
          // 'html-loader',
          'pug-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new HtmlPlugin({
      template: './views/index.pug'
    }),
    new HtmlPlugin({
      template: './views/games/box-rain.pug',
      filename: 'games/box-rain.html'
    })
  ]
};
