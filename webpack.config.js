const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, "index.js"),
  output: {
    path: OUT_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
