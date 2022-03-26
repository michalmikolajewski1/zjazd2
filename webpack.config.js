var path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module:{
        rules:[{test: /\.js$/,exclude: /notde_modules/, loader: "babel-loader"}]
    }
}
