const { JERSEY_SLEEVES } = require("../../../../../constants/ea-mappings/players");
const {
	SLEEVE_TIGHT,
	SLEEVE_STANDARD,
} = require("../../../../../constants/ea-mappings/players/equipment/jersey-sleeves");
const { simulateProbability } = require("../../../../../utils/random");

const TIGHT_SLEEVE_PERCENTAGE = 0.95;

const assignJerseySleeves = (recruit) => {
	return {
		...recruit,
		[JERSEY_SLEEVES]: simulateProbability(TIGHT_SLEEVE_PERCENTAGE) ? SLEEVE_TIGHT : SLEEVE_STANDARD,
	};
};

module.exports = assignJerseySleeves;
