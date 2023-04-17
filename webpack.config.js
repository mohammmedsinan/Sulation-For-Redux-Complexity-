const miniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./src/utilities/config');
const path = require('path');
const { Site_Theme } = config;
//=========less migration===================================
const { theme } = require('antd/lib');
const { convertLegacyToken } = require('@ant-design/compatible/lib');

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);
const v4Token = convertLegacyToken(mapToken);
//============================================

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
      API: path.resolve(__dirname, 'src/service/api.js'),
      Config: path.resolve(__dirname, 'src/utilities/config.js'),
      routes: path.resolve(__dirname, './routes.js'),
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
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
                modifyVars: v4Token,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
