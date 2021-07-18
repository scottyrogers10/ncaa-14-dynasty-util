const { LEFT_ELBOW, POSITION, RIGHT_ELBOW } = require("../../../../../constants/ea-mappings/players");
const getRandomWeightedItem = require("../../../../../shared/helpers/get-random-weighted-item");
const { simulateProbability } = require("../../../../../utils/random");
const positionSliders = require("../../../sliders/players/positions");

const MATCH_PERCENTAGE = 0.75;

const getRandomElbow = (recruit) => getRandomWeightedItem(positionSliders[recruit[POSITION]].elbows);

const assignElbows = (recruit) => {
	const left = getRandomElbow(recruit);
	const right = simulateProbability(MATCH_PERCENTAGE) ? left : getRandomElbow(recruit);

	return { ...recruit, [LEFT_ELBOW]: left, [RIGHT_ELBOW]: right };
};

module.exports = assignElbows;
