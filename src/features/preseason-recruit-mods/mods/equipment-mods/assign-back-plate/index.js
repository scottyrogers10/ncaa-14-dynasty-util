const { BACK_PLATE } = require("../../../../../constants/ea-mappings/players");
const BACK_PLATES = require("../../../../../constants/ea-mappings/players/equipment/back-plates");
const { simulateProbability } = require("../../../../../utils/random");

const ASSIGN_PERCENTAGE = 0.4;

const assignBackPlate = (recruit) => {
	const shouldEquipBackPlate = simulateProbability(ASSIGN_PERCENTAGE);
	return shouldEquipBackPlate ? { ...recruit, [BACK_PLATE]: BACK_PLATES.STANDARD } : recruit;
};

module.exports = assignBackPlate;
