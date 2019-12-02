// 引入模块
const path = require("path");

//  导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 引入自动生成html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 导入清除插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    // 可以通过在 webpack 配置中配置 entry 入口属性， 来指定一个入口起点（ 或多个入口起点）。 默认值为. / src。
    entry: './src/index.js',
    // 出口  output 属性告诉 webpack 在哪里输出它所创建的 bundles
    output: {
        filename: 'bundle.js',
        // path.resolve方法获取到绝对路径。
        path: path.resolve(__dirname, __dirname, 'dist')
    },

    devtool: "source-map", // + 生成映射源代码文件

    // 模块加载器配置项
    module: {
        // 加载css
        rules: [
            // {
            //     test: /\.css$/, // 匹配css扩展名文件
            //     use: [ // 配置loader加载器
            //         'style-loader', // 把css代码写入到网页中
            //         'css-loader' // 读取css的代码
            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ // 提取css
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            // 加载less
            // {
            //     test: /\.less$/, // 匹配css扩展名文件
            //     use: [ // 配置loader加载器
            //         'style-loader', // 把css代码写入到网页中
            //         'css-loader',
            //         "less-loader" // 读取css的代码
            //     ]
            // }
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ // 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 匹配图片文件
                use: [{
                    loader: "file-loader", // 处理图片文件返回链接
                    options: {
                        publicPath: "./images/", //  引入图片时会在路径前面加上该选项
                        outputPath: "images" //  输出到dist下的images目录
                    }
                }]
            }
        ],



    },
    // 调用提取插件
    plugins: [
        new ExtractTextPlugin('style/style.css') // 提取到dist的style文件夹中
    ],

    // 调用自动生成html插件
    plugins: [
        new ExtractTextPlugin("style/style2.css"),
        // + 新增配置
        new HtmlWebpackPlugin({
            template: "public/index.html" // template指定默认html模板
        })
    ],
    plugins: [
        new ExtractTextPlugin("style/style.css"),

        // 调用清除打包目录插件
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),

    ]


};