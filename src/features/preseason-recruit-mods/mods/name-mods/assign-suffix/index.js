const { LAST_NAME } = require("../../../../../constants/ea-mappings/players");
const { simulateProbability } = require("../../../../../utils/random");
const canAddSuffix = require("./can-add-suffix");
const getSuffix = require("./get-suffix");

const ASSIGN_PERCENTAGE = 0.005;

const assignSuffix = (recruit) => {
	const shouldAssign = simulateProbability(ASSIGN_PERCENTAGE);

	if (shouldAssign && canAddSuffix(recruit[LAST_NAME])) {
		return { ...recruit, [LAST_NAME]: `${recruit[LAST_NAME]} ${getSuffix()}` };
	}

	return recruit;
};

module.exports = assignSuffix;
