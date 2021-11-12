module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/sass/global.scss";`
            }
        }
    }
}