const getFaceColor = (percentMap) => {
	const randPercent = Math.random();

	if (randPercent <= percentMap.light) {
		return "LIGHT";
	} else if (randPercent <= percentMap.medium + percentMap.light) {
		return "MEDIUM";
	} else {
		return "DARK";
	}
};

module.exports = getFaceColor;
