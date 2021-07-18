const fs = require("fs");
const parse = require("csv-parse");

const parseAsync = (filePath) => {
	return new Promise((resolve, reject) => {
		const data = [];

		fs.createReadStream(filePath)
			.pipe(parse({ columns: true, fromLine: 2, skipEmptyLines: true }))
			.on("data", (item) => data.push(item))
			.on("end", () => {
				resolve(data);
			})
			.on("error", (err) => reject(err));
	});
};

module.exports = parseAsync;
