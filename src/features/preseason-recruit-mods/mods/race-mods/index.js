const pipe = require("scr-pipe");
const assignFace = require("./assign-face");

const race = (recruit) => {
	return pipe(recruit).flow(assignFace).close();
};

module.exports = race;
