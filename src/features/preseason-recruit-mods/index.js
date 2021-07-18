const path = require("path");
const pipe = require("scr-pipe");
const { buildAsync, parseAsync } = require("../../utils/csv");
const { equipmentMods, nameMods, raceMods } = require("./mods");

const preseasonRecruitMods = () => {
	parseAsync(path.resolve("data/recruit-info.csv"))
		.then((recruits) => {
			const moddedRecruits = recruits.map((recruit) => {
				return pipe(recruit).flow(raceMods).flow(nameMods).flow(equipmentMods).close();
			});

			return buildAsync("preseason-recruit-mods", moddedRecruits);
		})
		.catch(console.error);
};

module.exports = preseasonRecruitMods;
