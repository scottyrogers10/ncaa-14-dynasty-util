const ankles = require("../../shared/equipment/ankles/backer-positions");
const helmets = require("../../shared/equipment/helmets/skilled-positions");
const hands = require("./hands");
const elbows = require("./elbows");
const wrists = require("./wrists");

const equipmentOdds = { kneeBraces: 0.6, visor: 0.1 };
const raceOdds = { dark: 0.075, light: 0.85, medium: 0.075 };

module.exports = { ankles, elbows, equipmentOdds, hands, helmets, raceOdds, wrists };
