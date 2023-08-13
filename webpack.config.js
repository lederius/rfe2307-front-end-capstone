const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public/build');

module.exports = {
  entry: path.join(SRC_DIR, "index.js"),
  output: {
    path: OUT_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "src", "index.html"),
  //   }),
  // ],
};
