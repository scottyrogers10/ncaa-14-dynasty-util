const { LEFT_ANKLE, POSITION, RIGHT_ANKLE } = require("../../../../../constants/ea-mappings/players");
const getRandomWeightedItem = require("../../../../../shared/helpers/get-random-weighted-item");
const positionSliders = require("../../../sliders/players/positions");

const assignAnkles = (recruit) => {
	const ankle = getRandomWeightedItem(positionSliders[recruit[POSITION]].ankles);
	return { ...recruit, [LEFT_ANKLE]: ankle, [RIGHT_ANKLE]: ankle };
};

module.exports = assignAnkles;
