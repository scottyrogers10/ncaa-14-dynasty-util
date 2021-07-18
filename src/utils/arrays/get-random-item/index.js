const getRandomItem = (arr) => {
	const randIndex = Math.floor(Math.random() * arr.length);
	return arr[randIndex];
};

module.exports = getRandomItem;
