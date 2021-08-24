function getSpaceBetweenUtility(utilityClass) {
	if (
		utility.match(/\bp-\b/) ||
		utility.match(/pt-/) ||
		utility.match(/pr-/) ||
		utility.match(/pb-/) ||
		utility.match(/pl-/) ||
		utility.match(/py-/) ||
		utility.match(/px-/)
	) {
	}
}

module.exports = getSpaceBetweenUtility;
