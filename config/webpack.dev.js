const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: "development",

    devtool: "source-map", // + 生成映射源代码文件

    // + 开发服务配置
    devServer: {
        port: 8000 // 默认端口是8080
    }
})