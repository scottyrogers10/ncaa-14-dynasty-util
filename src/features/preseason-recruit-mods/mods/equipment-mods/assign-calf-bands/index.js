const { LEFT_CALF, RIGHT_CALF } = require("../../../../../constants/ea-mappings/players");
const CALF_BANDS = require("../../../../../constants/ea-mappings/players/equipment/calf-bands");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");

const ASSIGN_PERCENTAGE = 0.2;

const assignCalfBands = (recruit) => {
	const calfBand = simulateProbability(ASSIGN_PERCENTAGE) ? getRandomItem(Object.values(CALF_BANDS)) : CALF_BANDS.NONE;
	return { ...recruit, [LEFT_CALF]: calfBand, [RIGHT_CALF]: calfBand };
};

module.exports = assignCalfBands;
