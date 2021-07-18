const { LAST_NAME } = require("../../../../../constants/ea-mappings/players");
const { simulateProbability } = require("../../../../../utils/random");
const generateHyphenatedLastName = require("./generate-hyphenated-last-name");

const ASSIGN_PERCENTAGE = 0.004;

const assignHyphenatedLastName = (recruit) => {
	return simulateProbability(ASSIGN_PERCENTAGE) ? { ...recruit, [LAST_NAME]: generateHyphenatedLastName() } : recruit;
};

module.exports = assignHyphenatedLastName;
