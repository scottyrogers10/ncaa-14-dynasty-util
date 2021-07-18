const pipe = require("scr-pipe");
const assignHyphenatedLastName = require("./assign-hyphenated-last-name");
const assignSuffix = require("./assign-suffix");

const name = (recruit) => {
	return pipe(recruit).flow(assignSuffix).flow(assignHyphenatedLastName).close();
};

module.exports = name;
