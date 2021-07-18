const {
	LEFT_ELBOW,
	LEFT_WRIST,
	POSITION,
	RIGHT_ELBOW,
	RIGHT_WRIST,
} = require("../../../../../constants/ea-mappings/players");
const WRISTS = require("../../../../../constants/ea-mappings/players/equipment/wrists");
const ELBOWS = require("../../../../../constants/ea-mappings/players/equipment/elbows");
const getRandomWeightedItem = require("../../../../../shared/helpers/get-random-weighted-item");
const { simulateProbability } = require("../../../../../utils/random");
const positionSliders = require("../../../sliders/players/positions");

const MATCH_PERCENTAGE = 0.9;

const longWristItems = [
	WRISTS.QB_WRISTBAND_WHITE,
	WRISTS.QB_WRISTBAND_TEAM_COLOR,
	WRISTS.TAPED_WRIST_MAX,
	WRISTS.TAPED_GLOVE_HEAVY_WHITE,
	WRISTS.TAPED_GLOVE_NORMAL_WHITE,
	WRISTS.WRIST_BRACE,
];

const wristMatches = [
	WRISTS.NORMAL,
	WRISTS.WRISTBAND_WHITE,
	WRISTS.WRISTBAND_TEAM_COLOR,
	WRISTS.DBL_WRISTBANDS_WHITE,
	WRISTS.DBL_WRISTBANDS_TEAM_COLOR,
	WRISTS.TAPED_WRIST_LITE,
	WRISTS.TAPED_WRIST_NORMAL,
	WRISTS.TAPED_WRIST_MAX,
	WRISTS.TAPED_GLOVE_NORMAL_WHITE,
];

const getFilteredWrists = (recruit, sliders) => {
	if (recruit[LEFT_ELBOW] === ELBOWS.ELBOW_GUARD || recruit[RIGHT_ELBOW] === ELBOWS.ELBOW_GUARD) {
		return sliders.filter((item) => !longWristItems.includes(item.type));
	}

	return sliders;
};

const isMatch = (leftWrist) => {
	if (wristMatches.includes(leftWrist)) {
		return simulateProbability(MATCH_PERCENTAGE);
	}

	return false;
};

const assignWrists = (recruit) => {
	const filteredWrists = getFilteredWrists(recruit, positionSliders[recruit[POSITION]].wrists);

	const left = getRandomWeightedItem(filteredWrists);
	const right = isMatch(left) ? left : getRandomWeightedItem(filteredWrists);

	return { ...recruit, [LEFT_WRIST]: left, [RIGHT_WRIST]: right };
};

module.exports = assignWrists;
