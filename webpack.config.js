const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // source maps - apontar para o erro no código escrito ao invés do bundle
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // evita a necessidade de colocar a extensão do arquivo quando importado
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // integração babel com webpack
      },
      {
        test: /\.scss$/, // .scss ou .css ou .sass, depende do que será usado no projeto
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // interpretar imports css
      },
    ],
  },
};
