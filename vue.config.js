module.exports = {
  devServer: {
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com ',
        ws: true,
        changeOrigin: true
      },
      '/user': {
        target: '4http://10.36.147.164:9999',
        ws: true,
        changeOrigin: true
      },
      '/jd': {
        target: 'http://10.36.147.164:9999',
        ws: true,
        changeOrigin: true
      }
    
    }
  }
}
