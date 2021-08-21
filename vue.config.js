module.exports = {
    devServer: {
        proxy: {
            '/API': {
                target: 'http://louisyoung.work:8082',
                //target: 'http://45.40.234.190:8080',
                changeOrigin: true,
            }
        }
    }
}
