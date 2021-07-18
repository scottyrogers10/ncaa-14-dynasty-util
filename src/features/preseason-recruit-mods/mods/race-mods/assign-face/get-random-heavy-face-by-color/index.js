const { getRandomItem } = require("../../../../../../utils/arrays");
const FACES = require("../../../../../../constants/ea-mappings/players/faces");

const getRandomHeavyFaceByColor = (color = "DARK") => {
	const possibleFaces = [];

	for (let i = FACES[color].START; i <= FACES[color].END; i++) {
		if (FACES[color].HEAVY.includes(i)) {
			possibleFaces.push(i);
		}
	}

	return getRandomItem(possibleFaces);
};

module.exports = getRandomHeavyFaceByColor;
