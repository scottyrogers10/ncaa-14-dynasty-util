const ankles = require("../../shared/equipment/ankles/speed-positions");
const helmets = require("../../shared/equipment/helmets/skilled-positions");
const hands = require("./hands");
const elbows = require("./elbows");
const wrists = require("./wrists");

const equipmentOdds = { kneeBraces: 0.02, visor: 0.4 };
const raceOdds = { dark: 0.9, light: 0.05, medium: 0.05 };

module.exports = { ankles, elbows, equipmentOdds, hands, helmets, raceOdds, wrists };
