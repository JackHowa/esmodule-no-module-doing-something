const path = require('path');

module.exports = {
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
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    edge: '14',
                    ie: '11',
                    firefox: '52',
                    chrome: '43',
                    safari: '9',
                  },
                },
              ],
            ],
            plugins: ['@babel/plugin-transform-runtime', ['@babel/plugin-transform-arrow-functions', { spec: true }],
            ]
          }
        }
      }
    ]
  }
};