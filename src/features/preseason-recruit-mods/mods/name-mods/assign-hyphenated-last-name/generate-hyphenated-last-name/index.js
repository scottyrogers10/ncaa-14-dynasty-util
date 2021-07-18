const LAST_NAMES = require("../../../../../../constants/last-names");
const { getRandomItem } = require("../../../../../../utils/arrays");

const generateHyphenatedLastName = () => {
	const name1 = getRandomItem(LAST_NAMES);
	const name2 = getRandomItem(LAST_NAMES);

	if (name1 !== name2) {
		return `${name1}-${name2}`;
	} else {
		return generateHyphenatedLastName();
	}
};

module.exports = generateHyphenatedLastName;
