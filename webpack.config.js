const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/index.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.tpl$/,
                loader: "html-loader"
            },
            {
                test: /.(jpg|png|gif|svg)$/i,
                loaders: [
                    {
                        loader: "file-loader",
                        options: {
                            // [name]为图片名称，[ext]为图片后缀名
                            name: "[name].[ext]",
                            // 图片放置的路径名称
                            outputPath: "assets"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // html插件：生成相应的index.html，并自动在index.html引入相应的js文档
        new htmlWebpackPlugin({
            // 生成的index.html的title
            title: "webpack is good!",
            // 生成的html名称
            filename: "index.html",
            // 以index.html为模板
            template: "index.html",
            // 引用js的script标签放在body体
            inject: "body"
        })
    ]
}