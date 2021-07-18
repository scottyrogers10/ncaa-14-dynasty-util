const { HAND_WARMER } = require("../../../../../constants/ea-mappings/players");
const HAND_WARMERS = require("../../../../../constants/ea-mappings/players/equipment/hand-warmers");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");

const ASSIGN_PERCENTAGE = 0.05;

const assignHandWarmer = (recruit) => {
	const shouldEquipHandWarmer = simulateProbability(ASSIGN_PERCENTAGE);
	return {
		...recruit,
		[HAND_WARMER]: shouldEquipHandWarmer ? getRandomItem(Object.values(HAND_WARMERS)) : HAND_WARMERS.NONE,
	};
};

module.exports = assignHandWarmer;
