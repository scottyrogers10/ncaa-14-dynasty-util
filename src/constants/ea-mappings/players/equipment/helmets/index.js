const facemasks = require("./facemasks");
const shells = require("./shells");

const STANDARD_TWO_BAR = { facemask: facemasks.TWO_BAR, shell: shells.STANDARD };
const STANDARD_THREE_BAR = { facemask: facemasks.THREE_BAR, shell: shells.STANDARD };
const STANDARD_FULL_CAGE_1 = { facemask: facemasks.FULL_CAGE_1, shell: shells.STANDARD };
const STANDARD_HALF_CAGE_1 = { facemask: facemasks.HALF_CAGE_1, shell: shells.STANDARD };
const STANDARD_ROBOT_RB = { facemask: facemasks.ROBOT_RB, shell: shells.STANDARD };
const STANDARD_KICKER = { facemask: facemasks.KICKER, shell: shells.STANDARD };
const STANDARD_ROBOT = { facemask: facemasks.ROBOT, shell: shells.STANDARD };
const STANDARD_THREE_BAR_RB = { facemask: facemasks.THREE_BAR_RB, shell: shells.STANDARD };
const STANDARD_THREE_BAR_RB_JAGGED = { facemask: facemasks.THREE_BAR_RB_JAGGED, shell: shells.STANDARD };
const STANDARD_FULL_CAGE_2 = { facemask: facemasks.FULL_CAGE_2, shell: shells.STANDARD };
const STANDARD_FULL_CAGE_ROBOT = { facemask: facemasks.FULL_CAGE_ROBOT, shell: shells.STANDARD };
const STANDARD_HALF_CAGE_2 = { facemask: facemasks.HALF_CAGE_2, shell: shells.STANDARD };
const STANDARD_BULLDOG = { facemask: facemasks.BULLDOG, shell: shells.STANDARD };

const AIR_XP_TWO_BAR = { facemask: facemasks.TWO_BAR, shell: shells.AIR_XP };
const AIR_XP_THREE_BAR = { facemask: facemasks.THREE_BAR, shell: shells.AIR_XP };
const AIR_XP_FULL_CAGE_1 = { facemask: facemasks.FULL_CAGE_1, shell: shells.AIR_XP };
const AIR_XP_HALF_CAGE_1 = { facemask: facemasks.HALF_CAGE_1, shell: shells.AIR_XP };
const AIR_XP_ROBOT_RB = { facemask: facemasks.ROBOT_RB, shell: shells.AIR_XP };
const AIR_XP_KICKER = { facemask: facemasks.KICKER, shell: shells.AIR_XP };
const AIR_XP_ROBOT = { facemask: facemasks.ROBOT, shell: shells.AIR_XP };
const AIR_XP_THREE_BAR_RB = { facemask: facemasks.THREE_BAR_RB, shell: shells.AIR_XP };
const AIR_XP_THREE_BAR_RB_JAGGED = { facemask: facemasks.THREE_BAR_RB_JAGGED, shell: shells.AIR_XP };
const AIR_XP_FULL_CAGE_2 = { facemask: facemasks.FULL_CAGE_2, shell: shells.AIR_XP };
const AIR_XP_FULL_CAGE_ROBOT = { facemask: facemasks.FULL_CAGE_ROBOT, shell: shells.AIR_XP };
const AIR_XP_HALF_CAGE_2 = { facemask: facemasks.HALF_CAGE_2, shell: shells.AIR_XP };
const AIR_XP_BULLDOG = { facemask: facemasks.BULLDOG, shell: shells.AIR_XP };

const SCHUTT_TWO_BAR = { facemask: facemasks.TWO_BAR, shell: shells.SCHUTT };
const SCHUTT_THREE_BAR = { facemask: facemasks.THREE_BAR, shell: shells.SCHUTT };
const SCHUTT_FULL_CAGE_1 = { facemask: facemasks.FULL_CAGE_1, shell: shells.SCHUTT };
const SCHUTT_HALF_CAGE_1 = { facemask: facemasks.HALF_CAGE_1, shell: shells.SCHUTT };
const SCHUTT_ROBOT_RB = { facemask: facemasks.ROBOT_RB, shell: shells.SCHUTT };
const SCHUTT_KICKER = { facemask: facemasks.KICKER, shell: shells.SCHUTT };
const SCHUTT_ROBOT = { facemask: facemasks.ROBOT, shell: shells.SCHUTT };
const SCHUTT_THREE_BAR_RB = { facemask: facemasks.THREE_BAR_RB, shell: shells.SCHUTT };
const SCHUTT_THREE_BAR_RB_JAGGED = { facemask: facemasks.THREE_BAR_RB_JAGGED, shell: shells.SCHUTT };
const SCHUTT_FULL_CAGE_2 = { facemask: facemasks.FULL_CAGE_2, shell: shells.SCHUTT };
const SCHUTT_FULL_CAGE_ROBOT = { facemask: facemasks.FULL_CAGE_ROBOT, shell: shells.SCHUTT };
const SCHUTT_HALF_CAGE_2 = { facemask: facemasks.HALF_CAGE_2, shell: shells.SCHUTT };
const SCHUTT_BULLDOG = { facemask: facemasks.BULLDOG, shell: shells.SCHUTT };

const DNA_DNA_1 = { facemask: facemasks.DNA_1, shell: shells.DNA };
const DNA_DNA_2 = { facemask: facemasks.DNA_2, shell: shells.DNA };
const DNA_DNA_3 = { facemask: facemasks.DNA_3, shell: shells.DNA };
const DNA_DNA_4 = { facemask: facemasks.DNA_4, shell: shells.DNA };
const DNA_DNA_5 = { facemask: facemasks.DNA_5, shell: shells.DNA };
const DNA_DNA_6 = { facemask: facemasks.DNA_6, shell: shells.DNA };
const DNA_DNA_ROPO_SW = { facemask: facemasks.DNA_ROPO_SW, shell: shells.DNA };
const DNA_DNA_ROPO_SW_2 = { facemask: facemasks.DNA_ROPO_SW_2, shell: shells.DNA };

const REVO_SPEED_SPEED_ROBOT = { facemask: facemasks.SPEED_ROBOT, shell: shells.REVO_SPEED };
const REVO_SPEED_SPEED_ROBOT_2 = { facemask: facemasks.SPEED_ROBOT_2, shell: shells.REVO_SPEED };
const REVO_SPEED_SPEED_FULL_CAGE = { facemask: facemasks.SPEED_FULL_CAGE, shell: shells.REVO_SPEED };
const REVO_SPEED_SPEED_3_BAR_RB = { facemask: facemasks.SPEED_3_BAR_RB, shell: shells.REVO_SPEED };
const REVO_SPEED_SPEED_3_BAR_LB = { facemask: facemasks.SPEED_3_BAR_LB, shell: shells.REVO_SPEED };
const REVO_SPEED_SPEED_3_BAR = { facemask: facemasks.SPEED_3_BAR, shell: shells.REVO_SPEED };

const ION_4D_ION_2_BAR = { facemask: facemasks.ION_2_BAR, shell: shells.ION_4D };
const ION_4D_ION_ROBOT_RB = { facemask: facemasks.ION_ROBOT_RB, shell: shells.ION_4D };
const ION_4D_ION_3_BAR_RB = { facemask: facemasks.ION_3_BAR_RB, shell: shells.ION_4D };
const ION_4D_ION_FULL_CAGE = { facemask: facemasks.ION_FULL_CAGE, shell: shells.ION_4D };
const ION_4D_ION_FULL_CAGE_2 = { facemask: facemasks.ION_FULL_CAGE_2, shell: shells.ION_4D };
const ION_4D_ION_3_BAR = { facemask: facemasks.ION_3_BAR, shell: shells.ION_4D };

module.exports = {
	STANDARD_TWO_BAR,
	STANDARD_THREE_BAR,
	STANDARD_FULL_CAGE_1,
	STANDARD_HALF_CAGE_1,
	STANDARD_ROBOT_RB,
	STANDARD_KICKER,
	STANDARD_ROBOT,
	STANDARD_THREE_BAR_RB,
	STANDARD_THREE_BAR_RB_JAGGED,
	STANDARD_FULL_CAGE_2,
	STANDARD_FULL_CAGE_ROBOT,
	STANDARD_HALF_CAGE_2,
	STANDARD_BULLDOG,
	AIR_XP_TWO_BAR,
	AIR_XP_THREE_BAR,
	AIR_XP_FULL_CAGE_1,
	AIR_XP_HALF_CAGE_1,
	AIR_XP_ROBOT_RB,
	AIR_XP_KICKER,
	AIR_XP_ROBOT,
	AIR_XP_THREE_BAR_RB,
	AIR_XP_THREE_BAR_RB_JAGGED,
	AIR_XP_FULL_CAGE_2,
	AIR_XP_FULL_CAGE_ROBOT,
	AIR_XP_HALF_CAGE_2,
	AIR_XP_BULLDOG,
	SCHUTT_TWO_BAR,
	SCHUTT_THREE_BAR,
	SCHUTT_FULL_CAGE_1,
	SCHUTT_HALF_CAGE_1,
	SCHUTT_ROBOT_RB,
	SCHUTT_KICKER,
	SCHUTT_ROBOT,
	SCHUTT_THREE_BAR_RB,
	SCHUTT_THREE_BAR_RB_JAGGED,
	SCHUTT_FULL_CAGE_2,
	SCHUTT_FULL_CAGE_ROBOT,
	SCHUTT_HALF_CAGE_2,
	SCHUTT_BULLDOG,
	DNA_DNA_1,
	DNA_DNA_2,
	DNA_DNA_3,
	DNA_DNA_4,
	DNA_DNA_5,
	DNA_DNA_6,
	DNA_DNA_ROPO_SW,
	DNA_DNA_ROPO_SW_2,
	REVO_SPEED_SPEED_ROBOT,
	REVO_SPEED_SPEED_ROBOT_2,
	REVO_SPEED_SPEED_FULL_CAGE,
	REVO_SPEED_SPEED_3_BAR_RB,
	REVO_SPEED_SPEED_3_BAR_LB,
	REVO_SPEED_SPEED_3_BAR,
	ION_4D_ION_2_BAR,
	ION_4D_ION_ROBOT_RB,
	ION_4D_ION_3_BAR_RB,
	ION_4D_ION_FULL_CAGE,
	ION_4D_ION_FULL_CAGE_2,
	ION_4D_ION_3_BAR,
};
