const miniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./src/utilities/config');
const path = require('path');
const { Site_Theme } = config;
module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
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
      API: path.resolve(__dirname, 'src/utilities/api.js'),
      Config: path.resolve(__dirname, 'src/utilities/config.js'),
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
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: {
                  'primary-color': '#346beb',
                  'link-color': '#1DA57A',
                  'secondary-color': '#ce714f',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
