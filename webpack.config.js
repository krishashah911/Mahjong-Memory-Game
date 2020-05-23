module.exports = {
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /(node_modules)/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.png$/, use: "file-loader?name=[name].[ext]&outputPath=images" }
    ]
  }
};
