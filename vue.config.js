module.exports = {
    devServer: {
        https: true,
        //proxy: 'https://192.168.1.136'
    },
    assetsDir:"./",
    publicPath: './',
    pluginOptions: {
        i18n: {
        locale: 'fr',
        fallbackLocale: 'fr',
        localeDir: 'locales',
        enableInSFC: true
        }
    },
    pwa: {        
    }
}
