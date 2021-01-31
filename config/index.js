let config = {

}

if (process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3000
    }
    config = { ...config, ...devConfig }
}

if (process.env.NODE_ENV === 'production') {
    const proConfig = {
        port: 80
    }
    config = { ...config, ...proConfig }
}

module.exports = config