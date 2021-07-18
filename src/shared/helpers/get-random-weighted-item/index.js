const { getRandomItem } = require("../../../utils/arrays");
const { simulateProbability } = require("../../../utils/random");

const getRandomWeightedItem = (items) => {
	return getRandomItem(
		items.reduce((prevVal, item) => {
			return simulateProbability(item.weight) ? [...prevVal, item.type] : prevVal;
		}, [])
	);
};

module.exports = getRandomWeightedItem;
