const { TOWEL } = require("../../../../../constants/ea-mappings/players");
const TOWELS = require("../../../../../constants/ea-mappings/players/equipment/towels");
const { simulateProbability } = require("../../../../../utils/random");

const ASSIGN_PERCENTAGE = 0.3;

const assignTowel = (recruit) => {
	const shouldEquipTowel = simulateProbability(ASSIGN_PERCENTAGE);
	return shouldEquipTowel ? { ...recruit, [TOWEL]: TOWELS.STANDARD } : recruit;
};

module.exports = assignTowel;
