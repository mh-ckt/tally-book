module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader', // 将 CSS 注入到 DOM
          'css-loader', // 解析 CSS
          'less-loader', // 解析 Less 为 CSS
        ],
      },
    ],
  },
}
