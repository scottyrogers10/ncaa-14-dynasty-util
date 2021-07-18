const { FACE, POSITION, WEIGHT } = require("../../../../../constants/ea-mappings/players");
const positionSliders = require("../../../sliders/players/positions");
const getRandomHeavyFaceByColor = require("./get-random-heavy-face-by-color");
const getRandomStandardFaceByColor = require("./get-random-standard-face-by-color");
const getFaceColor = require("./get-face-color");

const assignFace = (recruit) => {
	const color = getFaceColor(positionSliders[recruit[POSITION]].raceOdds);
	const face =
		parseInt(recruit[WEIGHT]) + 160 >= 245 ? getRandomHeavyFaceByColor(color) : getRandomStandardFaceByColor(color);

	return { ...recruit, [FACE]: face };
};

module.exports = assignFace;
