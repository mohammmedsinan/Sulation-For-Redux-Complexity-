const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    static: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      API: path.resolve(__dirname, 'src/Api/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
