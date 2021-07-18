const { COMMON, RARE, RAREST } = require("../../../../../../constants/last-name-suffixes");
const { getRandomItem } = require("../../../../../../utils/arrays");

const RARE_PERCENTAGE = 0.4;
const RAREST_PERCENTAGE = 0.1;

const getSuffix = () => {
	const randPercent = Math.random();

	if (randPercent <= RAREST_PERCENTAGE) {
		return getRandomItem(RAREST);
	} else if (randPercent <= RARE_PERCENTAGE + RAREST_PERCENTAGE) {
		return getRandomItem(RARE);
	} else {
		return getRandomItem(COMMON);
	}
};

module.exports = getSuffix;
