const { POSITION, VISOR } = require("../../../../../constants/ea-mappings/players");
const VISORS = require("../../../../../constants/ea-mappings/players/equipment/visors");
const { getRandomItem } = require("../../../../../utils/arrays");
const { simulateProbability } = require("../../../../../utils/random");
const positionSliders = require("../../../sliders/players/positions");

const assignVisor = (recruit) => {
	const shouldEquipVisor = simulateProbability(positionSliders[recruit[POSITION]].equipmentOdds.visor);
	return shouldEquipVisor ? { ...recruit, [VISOR]: getRandomItem(Object.values(VISORS)) } : recruit;
};

module.exports = assignVisor;
