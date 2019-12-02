// 引入模块
const path = require("path");



module.exports = {
    // 可以通过在 webpack 配置中配置 entry 入口属性， 来指定一个入口起点（ 或多个入口起点）。 默认值为. / src。
    entry: './src/index.js',
    // 出口  output 属性告诉 webpack 在哪里输出它所创建的 bundles
    output: {
        filename: 'bundle.js',
        // path.resolve方法获取到绝对路径。
        path: path.resolve(__dirname, __dirname, 'dist')
    },
    // 模块加载器配置项
    module: {
        // 加载css
        rules: [{
                test: /\.css$/, // 匹配css扩展名文件
                use: [ // 配置loader加载器
                    'style-loader', // 把css代码写入到网页中
                    'css-loader' // 读取css的代码
                ]
            },
            {
                test: /\.less$/, // 匹配css扩展名文件
                use: [ // 配置loader加载器
                    'style-loader', // 把css代码写入到网页中
                    'css-loader',
                    "less-loader" // 读取css的代码
                ]
            }
        ],
        // 加载less


    }


};