const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 可选：配置 Less 变量（如主题色）
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true, // 允许 Less 中使用 JavaScript
          },
        },
      },
    },
  ],
}
