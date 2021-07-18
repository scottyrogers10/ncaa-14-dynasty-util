const { LEFT_HAND, POSITION, RIGHT_HAND } = require("../../../../../constants/ea-mappings/players");
const getRandomWeightedItem = require("../../../../../shared/helpers/get-random-weighted-item");
const positionSliders = require("../../../sliders/players/positions");

const assignHands = (recruit) => {
	const hand = getRandomWeightedItem(positionSliders[recruit[POSITION]].hands);
	return { ...recruit, [LEFT_HAND]: hand, [RIGHT_HAND]: hand };
};

module.exports = assignHands;
