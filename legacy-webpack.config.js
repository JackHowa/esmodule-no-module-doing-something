const path = require('path');

module.exports = {
  mode: 'production',
  // prevents arrow funcs via 
  // https://webpack.js.org/migrate/5/#need-to-support-an-older-browser-like-ie-11
  target: ['web', 'es5'],
  entry: './app.js',
  output: {
    filename: 'app.legacy.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // don't transpile regenerator-runtime
        exclude: [/regenerator-runtime/, /core-js/],
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
                  debug: true,
                  useBuiltIns: 'usage',
                },
              ],
            ],
            // installs regenerator-runtime
            // ignored for transpilation
            // needs dep @babel/runtime
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  }
};