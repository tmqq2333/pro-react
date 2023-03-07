const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 每次构建清除上一次打包出来的文件
const webpack = require("webpack");
module.exports = {
  entry: path.join(__dirname, "../src/index.js"), // 入口文件
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/pro-react/dist\/", // 打包后文件的公共前缀路径
    //assetModuleFilename: "images/[hash][ext][query]", // ... 这里自定义输出文件名的方式是，将某些资源发送到指定目录
  },
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "../src"),
      pages: path.join(__dirname, "../src/pages"),
      router: path.join(__dirname, "../src/router"),
    },
    modules: [path.resolve(__dirname, "../node_modules")], // 查找第三方模块只在本项目的node_modules中查找
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: ["thread-loader", "babel-loader"], //多线程
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        use: [
          //{ loader: "style-loader", options: { singleton: true } }, // 处理为单个style标签//js字符串生成style节点
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader" }, //处理css,加前缀
          { loader: "sass-loader" }, //sass编译成css
        ],
        include: path.resolve(__dirname, "../src"), //限制范围，提高打包速度
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: "static/images/[hash][ext][query]", // 文件输出目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/fonts/[name][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/media/[name][ext]", // 文件输出目录和命名
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
