const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    filename: 'app.modern.mjs',
    path: path.resolve(__dirname, 'dist'),

  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true
                  },
                  "bugfixes": true
                }
              ],
            ],
          }
        }
      }
    ]
  }
};