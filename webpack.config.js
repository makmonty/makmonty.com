const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const distDir = 'public';

let entry = {};
entry['css/style.css'] = './sass/style.scss';

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
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]')
  ]
};
