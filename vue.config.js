const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#EA1845',
            'link-color': '#1DA57A',
            'border-radius-base': '4px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
