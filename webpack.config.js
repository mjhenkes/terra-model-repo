const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');

const terraApplicationConfig = (env = {}) => ({
  entry: {
    index: './src/index.jsx',
  },
  output: {
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      lang: env.defaultLocale || 'en',
      filename: 'index.html',
      template: './src/template/index.html',
      rootElementId: 'root',
    }),
    new DefinePlugin({
      TERRA_APPLICATION_LOCALE: JSON.stringify(env.defaultLocale || 'en'),
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;
