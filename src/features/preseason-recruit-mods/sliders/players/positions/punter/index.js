const ankles = require("../../shared/equipment/ankles/special-team-positions");
const helmets = require("../../shared/equipment/helmets/skilled-positions");
const hands = require("./hands");
const elbows = require("./elbows");
const wrists = require("./wrists");

const equipmentOdds = { kneeBraces: 0.001, visor: 0.05 };
const raceOdds = { dark: 0.005, light: 0.99, medium: 0.005 };

module.exports = { ankles, elbows, equipmentOdds, hands, helmets, raceOdds, wrists };
