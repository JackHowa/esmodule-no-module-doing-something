const path = require('path');

module.exports = {
  mode: 'production',
  target: ['web', 'es5'],
  entry: './app.js',
  output: {
    filename: 'app.legacy.js',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: false,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
    }
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
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-arrow-functions'],
          }
        }
      }
    ]
  }
};