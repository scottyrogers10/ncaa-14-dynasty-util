const POSITIONS = require("../../../../../constants/ea-mappings/players/positions");

module.exports = {
	[POSITIONS.QB]: require("./quarterback"),
	[POSITIONS.HB]: require("./halfback"),
	[POSITIONS.FB]: require("./fullback"),
	[POSITIONS.WR]: require("./wide-receiver"),
	[POSITIONS.TE]: require("./tight-end"),
	[POSITIONS.LT]: require("./left-tackle"),
	[POSITIONS.LG]: require("./left-guard"),
	[POSITIONS.C]: require("./center"),
	[POSITIONS.RG]: require("./right-guard"),
	[POSITIONS.RT]: require("./right-tackle"),
	[POSITIONS.LE]: require("./left-end"),
	[POSITIONS.RE]: require("./right-end"),
	[POSITIONS.DT]: require("./defensive-tackle"),
	[POSITIONS.LLB]: require("./left-linebacker"),
	[POSITIONS.MLB]: require("./middle-linebacker"),
	[POSITIONS.RLB]: require("./right-linebacker"),
	[POSITIONS.CB]: require("./cornerback"),
	[POSITIONS.FS]: require("./free-safety"),
	[POSITIONS.SS]: require("./strong-safety"),
	[POSITIONS.K]: require("./kicker"),
	[POSITIONS.P]: require("./punter"),
};