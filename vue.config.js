const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#EA1845',
            'border-radius-base': '6px',
            'font-family': '\'Archivo\', sans-serif, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial,\'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\',\'Noto Color Emoji\'',
            'card-shadow': '0px 20px 27px rgba(0, 0, 0, 0.05);',
            'layout-header-background': 'white',

          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
