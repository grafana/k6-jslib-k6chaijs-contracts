var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'k6chaijs-contracts.min.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: {
    colors: true,
  },
  // Keep webpack 5 runtime helpers compatible with the previous ES5 bundle.
  target: ['web', 'es5'],
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  devtool: 'source-map',
};
