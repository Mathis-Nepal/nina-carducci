module.exports = {
	plugins: [
		require("postcss-uncss")({
			html: ["./index.html"], // Specify where to look for HTML files
		}),
	],
};
