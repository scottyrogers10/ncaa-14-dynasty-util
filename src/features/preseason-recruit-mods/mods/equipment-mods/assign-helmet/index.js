const { FACEMASK, POSITION, SHELL } = require("../../../../../constants/ea-mappings/players");
const getRandomWeightedItem = require("../../../../../shared/helpers/get-random-weighted-item");
const positionSliders = require("../../../sliders/players/positions");

const assignHelmet = (recruit) => {
	const { facemask, shell } = getRandomWeightedItem(positionSliders[recruit[POSITION]].helmets);
	return { ...recruit, [FACEMASK]: facemask, [SHELL]: shell };
};

module.exports = assignHelmet;
