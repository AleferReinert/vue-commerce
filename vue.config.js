module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/sass/global.scss";`
            }
        }
    }
}