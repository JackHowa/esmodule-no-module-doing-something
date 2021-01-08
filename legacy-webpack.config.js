module.exports = {
  // still debugging this live with parallels
  mode: 'development',
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