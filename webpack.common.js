const path = require("path");

module.exports = {
	devtool: "eval-source-map",
	entry: {
		main: "./src/index.ts",
		vendor: "./src/vendor.js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: [path.resolve(__dirname, "src")],
				use: "ts-loader",
			},
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs",
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
