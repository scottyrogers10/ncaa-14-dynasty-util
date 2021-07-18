const ELBOWS = require("../../../../../../../../constants/ea-mappings/players/equipment/elbows");

const oLinePositions = [
	{ type: ELBOWS.NORMAL, weight: 1 },
	{ type: ELBOWS.ELBOW_PAD_WHITE, weight: 0.65 },
	{ type: ELBOWS.ELBOW_PAD_TEAM_COLOR, weight: 0.65 },
	{ type: ELBOWS.ELBOW_PAD_WHITE_STRIPE, weight: 0.65 },
	{ type: ELBOWS.RUBBER_PAD, weight: 0.35 },
	{ type: ELBOWS.SWEATBAND_FULL_WHITE, weight: 0.65 },
	{ type: ELBOWS.SWEATBAND_MED_WHITE, weight: 0.65 },
	{ type: ELBOWS.SWEATBAND_THIN_WHITE, weight: 0.65 },
	{ type: ELBOWS.SWEATBAND_FULL_TEAM_COLOR, weight: 0.65 },
	{ type: ELBOWS.SWEATBAND_MED_TEAM_COLOR, weight: 0.65 },
	{ type: ELBOWS.SWEATBAND_THIN_TEAM_COLOR, weight: 0.65 },
	{ type: ELBOWS.ELBOW_BRACE_TEAM_COLOR, weight: 0.05 },
	{ type: ELBOWS.ELBOW_GUARD, weight: 0.05 },
];

module.exports = oLinePositions;
