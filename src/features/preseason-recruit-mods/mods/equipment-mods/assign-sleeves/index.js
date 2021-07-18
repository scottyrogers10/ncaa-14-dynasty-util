const { LEFT_SLEEVE, RIGHT_SLEEVE } = require("../../../../../constants/ea-mappings/players");
const SLEEVES = require("../../../../../constants/ea-mappings/players/equipment/sleeves");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");

const MATCH_PERCENTAGE = 0.65;

const assignSleeves = (recruit) => {
	const left = getRandomItem(Object.values(SLEEVES));
	const right = simulateProbability(MATCH_PERCENTAGE) ? left : getRandomItem(Object.values(SLEEVES));

	return { ...recruit, [LEFT_SLEEVE]: left, [RIGHT_SLEEVE]: right };
};

module.exports = assignSleeves;
