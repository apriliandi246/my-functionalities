function getPaddingUtility(utilityClass) {
	if (
		utilityClass.match(/\bp-\b/) ||
		utilityClass.match(/pt-/) ||
		utilityClass.match(/pr-/) ||
		utilityClass.match(/pb-/) ||
		utilityClass.match(/pl-/) ||
		utilityClass.match(/py-/) ||
		utilityClass.match(/px-/)
	) {
	}
}

module.exports = getPaddingUtility;
