const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const PugPlugin = require('pug-plugin');

const mode = process.env.PROD ? 'production' : 'development';
const devtool = process.env.PROD ? false : 'source-map';
const pluginCssOptions = process.env.MODE
  ? {
      filename: './css/[name].[contenthash].css',
      chunkFilename: './css/[id].chunk.[contenthash].css',
    }
  : { filename: './css/[name].css' };

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
module.exports = {
  mode,
  devtool,

  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].bundle.[contenthash].js',
    chunkFilename: './js/[name].bundle.chunk.[contenthash].js',
    clean: process.env.PROD === true,
  },

  plugins: [
    new MiniCssExtractPlugin(pluginCssOptions),
    new HtmlWebpackPlugin({
      template: 'src/pug/pages/index.pug',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]',
        },
      },
    ],
  },

  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/assets/images/'),
    },
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'src/scss'), 'node_modules'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
