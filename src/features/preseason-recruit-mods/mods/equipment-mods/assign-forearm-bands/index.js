const { LEFT_FOREARM, RIGHT_FOREARM } = require("../../../../../constants/ea-mappings/players");
const FOREARM_BANDS = require("../../../../../constants/ea-mappings/players/equipment/forearm-bands");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");

const ASSIGN_PERCENTAGE = 0.2;
const MATCH_PERCENTAGE = 0.95;

const assignForearmBands = (recruit) => {
	const left = simulateProbability(ASSIGN_PERCENTAGE)
		? getRandomItem(Object.values(FOREARM_BANDS))
		: FOREARM_BANDS.NONE;

	const right =
		left !== 0
			? simulateProbability(MATCH_PERCENTAGE)
				? left
				: getRandomItem(Object.values(FOREARM_BANDS))
			: FOREARM_BANDS.NONE;

	return { ...recruit, [LEFT_FOREARM]: left, [RIGHT_FOREARM]: right };
};

module.exports = assignForearmBands;
