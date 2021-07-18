const HANDS = require("../../../../../../../../constants/ea-mappings/players/equipment/hands");

const oLinePositions = [
	{ type: HANDS.NORMAL, weight: 0.2 },
	{ type: HANDS.NIKE_VAPOR_FLY, weight: 1 },
	{ type: HANDS.UNDER_ARMOUR_NITRO, weight: 1 },
	{ type: HANDS.GENERIC_GLOVE, weight: 1 },
	{ type: HANDS.ADIDAS_ADIZERO, weight: 1 },
	{ type: HANDS.OL, weight: 1 },
	{ type: HANDS.TAPED_FINGERS_WHITE, weight: 0.1 },
	{ type: HANDS.TAPED_FINGERS_TEAM_COLOR, weight: 0.03 },
	{ type: HANDS.TAPED_HAND, weight: 0.01 },
	{ type: HANDS.TAPED_HAND_MAX, weight: 0.01 },
	{ type: HANDS.TAPED_HAND_COMBO, weight: 0.01 },
];

module.exports = oLinePositions;
