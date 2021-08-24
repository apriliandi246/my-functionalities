function getPositionUtility(utilityClass) {
	const positions = ["static", "fixed", "absolute", "relative", "sticky"];

	if (
		positions.includes(utilityClass) ||
		utilityClass.match(/inset-/) ||
		utilityClass.match(/-inset-/) ||
		utilityClass.match(/top-/) ||
		utilityClass.match(/-top-/) ||
		utilityClass.match(/right-/) ||
		utilityClass.match(/-right-/) ||
		utilityClass.match(/bottom-/) ||
		utilityClass.match(/-bottom-/) ||
		utilityClass.match(/leftt-/) ||
		utilityClass.match(/-left-/)
	) {
	}
}

module.exports = getPositionUtility;
