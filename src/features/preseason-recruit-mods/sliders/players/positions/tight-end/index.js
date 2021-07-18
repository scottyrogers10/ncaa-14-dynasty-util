const ankles = require("../../shared/equipment/ankles/backer-positions");
const helmets = require("../../shared/equipment/helmets/skilled-positions");
const hands = require("./hands");
const elbows = require("./elbows");
const wrists = require("./wrists");

const equipmentOdds = { kneeBraces: 0.4, visor: 0.35 };
const raceOdds = { dark: 0.3, light: 0.4, medium: 0.3 };

module.exports = { ankles, elbows, equipmentOdds, hands, helmets, raceOdds, wrists };
