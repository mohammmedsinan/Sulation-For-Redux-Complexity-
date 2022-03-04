const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
    asyncChunks: true,
  },
  devServer: {
    port: 3000,
    static: true,
    historyApiFallback: true,
    hot: true,
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
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
