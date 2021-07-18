const { LEFT_BICEP, LEFT_ELBOW, RIGHT_BICEP, RIGHT_ELBOW } = require("../../../../../constants/ea-mappings/players");
const BICEP_BANDS = require("../../../../../constants/ea-mappings/players/equipment/bicep-bands");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");

const MATCH_PERCENTAGE = 0.95;

const assignBicepBands = (recruit) => {
	const left = recruit[LEFT_ELBOW] === 0 ? getRandomItem(Object.values(BICEP_BANDS)) : BICEP_BANDS.NONE;
	const right =
		recruit[RIGHT_ELBOW] === 0
			? simulateProbability(MATCH_PERCENTAGE)
				? left
				: getRandomItem(Object.values(BICEP_BANDS))
			: BICEP_BANDS.NONE;

	return { ...recruit, [LEFT_BICEP]: left, [RIGHT_BICEP]: right };
};

module.exports = assignBicepBands;
