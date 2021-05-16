const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['css', 'html', 'javascript', 'sql', 'typescript'],
      features: ['contextmenu', 'clipboard', 'find'],
    }),
  ],
};