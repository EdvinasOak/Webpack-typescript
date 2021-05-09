const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
	mode: "production",
	devtool: "eval-source-map",
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		publicPath: "public",
		filename: "bundle.[contentHash].js",
		path: path.resolve(__dirname, "public"),
	},
});
