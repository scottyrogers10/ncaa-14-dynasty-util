const ankles = require("../../shared/equipment/ankles/speed-positions");
const helmets = require("../../shared/equipment/helmets/skilled-positions");
const hands = require("./hands");
const elbows = require("./elbows");
const wrists = require("./wrists");

const equipmentOdds = { kneeBraces: 0.2, visor: 0.35 };
const raceOdds = { dark: 0.2, light: 0.7, medium: 0.1 };

module.exports = { ankles, elbows, equipmentOdds, hands, helmets, raceOdds, wrists };
