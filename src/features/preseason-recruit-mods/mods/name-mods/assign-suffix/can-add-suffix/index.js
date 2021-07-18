const MAX_LENGTH = 13;
const MAX_SUFFIX_LENGTH = 4;

const canAddSuffix = (lastName) => {
	return lastName.length <= MAX_LENGTH - MAX_SUFFIX_LENGTH;
};

module.exports = canAddSuffix;
