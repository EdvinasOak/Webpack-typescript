const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	plugins: [new CleanWebpackPlugin()],
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
