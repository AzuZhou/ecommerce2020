const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

const productionConfig = {
  mode: 'production',
  devtool: 'source-map',
};

const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
  },
};

const configs = {
  production: productionConfig,
  development: developmentConfig,
};

module.exports = (_, { mode }) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + `.${mode}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  const styleLoaders =
    mode === 'production'
      ? [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      : ['style-loader', 'css-loader', 'sass-loader'];

  return merge(
    {
      entry: './index.js',
      output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.[s]css$/,
            use: styleLoaders,
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './index.html',
          favicon: './favicon.ico',
          title: 'CRWN Clothing',
        }),
        new WorkboxPlugin.GenerateSW({
          // these options encourage the ServiceWorkers to get in there fast
          // and not allow any straggling "old" SWs to hang around
          clientsClaim: true,
          skipWaiting: true,
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin(envKeys),
      ],
      resolve: {
        // root: [path.resolve(__dirname, 'src')],
        alias: {
          assets: path.resolve(__dirname, 'src/assets/'),
          components: path.resolve(__dirname, 'src/components/'),
          pages: path.resolve(__dirname, 'src/pages/'),
          utils: path.resolve(__dirname, 'src/utils/'),
          data: path.resolve(__dirname, 'src/data/'),
        },
      },
    },
    configs[mode]
  );
};
