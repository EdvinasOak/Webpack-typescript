const path = require("path");

module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: [path.resolve(__dirname, "src")],
				use: "ts-loader",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		publicPath: "public",
		filename: "bundle.[contentHash].js",
		path: path.resolve(__dirname, "public"),
	},
};
