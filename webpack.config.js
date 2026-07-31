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
  // ['web', 'es5'] keeps webpack 5 from emitting ES6+ runtime helpers
  // (arrow functions, const) so the bundle stays ES5.1, matching the
  // output the previous webpack 4 + UglifyJS pipeline produced.
  target: ['web', 'es5'],
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
  devtool: 'source-map',
  // webpack 5 minifies with TerserPlugin out of the box in production mode,
  // so the explicit uglifyjs-webpack-plugin minimizer is no longer needed.
  optimization: {
    minimize: true,
  },
};
