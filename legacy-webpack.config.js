const path = require('path');

module.exports = {
  // still debugging this live with parallels
  mode: 'production',
  entry: './app.js',
  output: {
    filename: 'app.legacy.js',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            "plugins": ["@babel/transform-arrow-functions", "@babel/plugin-transform-runtime"],
          }
        }
      }
    ]
  },
  externals: {
    '@babel/runtime': '@babel/runtime'
  }
};