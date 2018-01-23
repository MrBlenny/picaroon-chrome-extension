const path = require('path');

module.exports = {

  entry: [
    './src/content/src/scripts/index.js'
  ],

  output: {
    filename: 'content.js',
    path: path.join(__dirname, '../../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  }
};
