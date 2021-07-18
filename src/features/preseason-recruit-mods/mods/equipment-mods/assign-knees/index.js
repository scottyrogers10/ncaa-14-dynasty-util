const { LEFT_KNEE, POSITION, RIGHT_KNEE } = require("../../../../../constants/ea-mappings/players");
const KNEES = require("../../../../../constants/ea-mappings/players/equipment/knees");
const { simulateProbability } = require("../../../../../utils/random");
const positionSliders = require("../../../sliders/players/positions");

const assignKnees = (recruit) => {
	const knee = simulateProbability(positionSliders[recruit[POSITION]].equipmentOdds.kneeBraces)
		? KNEES.STANDARD
		: KNEES.NONE;
	return { ...recruit, [LEFT_KNEE]: knee, [RIGHT_KNEE]: knee };
};

module.exports = assignKnees;
