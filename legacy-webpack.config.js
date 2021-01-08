module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    filename: 'app.legacy.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};