function getGradientColorStopUtility(utilityClass) {
	if (
		utilityClass.match(/from-/) ||
		utilityClass.match(/via-/) ||
		utilityClass.match(/to-/)
	) {
	}
}

module.exports = getGradientColorStopUtility;
