const pipe = require("scr-pipe");
const assignAnkles = require("./assign-ankles");
const assignBackPlate = require("./assign-back-plate");
const assignBicepBands = require("./assign-bicep-bands");
const assignCalfBands = require("./assign-calf-bands");
const assignElbows = require("./assign-elbows");
const assignForearmBands = require("./assign-forearm-bands");
const assignHandWarmer = require("./assign-hand-warmer");
const assignHands = require("./assign-hands");
const assignHelmet = require("./assign-helmet");
const assignJerseySleeves = require("./assign-jersey-sleeves");
const assignKnees = require("./assign-knees");
const assignSleeves = require("./assign-sleeves");
const assignTowel = require("./assign-towel");
const assignVisor = require("./assign-visor");
const assignWrists = require("./assign-wrists");

const equipment = (recruit) => {
	return pipe(recruit)
		.flow(assignHelmet)
		.flow(assignVisor)
		.flow(assignJerseySleeves)
		.flow(assignSleeves)
		.flow(assignElbows)
		.flow(assignBicepBands)
		.flow(assignForearmBands)
		.flow(assignWrists)
		.flow(assignHands)
		.flow(assignCalfBands)
		.flow(assignAnkles)
		.flow(assignKnees)
		.flow(assignBackPlate)
		.flow(assignHandWarmer)
		.flow(assignTowel)
		.close();
};

module.exports = equipment;
