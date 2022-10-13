const glob = require("glob")
const { resolve } = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// 多入口配置
const entryList = {}
glob.sync("components/lib/**/index.js").forEach(file => {
  let bundleName = file.split("/")[2]
  if (bundleName === "index.js") {
    bundleName = "index"
  }
  entryList[bundleName] = `./${file}`
})

module.exports = {
  mode: "development",
  entry: entryList,
  output: {
    path: resolve(__dirname, "./build"),
    filename: "[name].js",
    library: {
      name: "mala",
      type: "umd"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}