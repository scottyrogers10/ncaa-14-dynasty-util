const fs = require("fs");
const path = require("path");
const { parseAsync } = require("json2csv");

const buildAsync = (fileName, data) => {
	return fs.promises
		.mkdir(path.resolve("dist"), { recursive: true })
		.then(() => {
			return parseAsync(data, { quote: "" });
		})
		.then((csv) => {
			return fs.promises.writeFile(path.resolve(`dist/${fileName}.csv`), csv);
		});
};

module.exports = buildAsync;
