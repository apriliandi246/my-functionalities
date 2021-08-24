function getMarginUtility(utilityClass) {
	if (
		utility.match(/m-/) ||
		utility.match(/-m-/) ||
		utility.match(/mt-/) ||
		utility.match(/-mt-/) ||
		utility.match(/mr-/) ||
		utility.match(/-mr-/) ||
		utility.match(/mb-/) ||
		utility.match(/-mb-/) ||
		utility.match(/-mb-/) ||
		utility.match(/ml-/) ||
		utility.match(/-ml-/) ||
		utility.match(/my-/) ||
		utility.match(/-my-/) ||
		utility.match(/mx-/) ||
		utility.match(/-mx-/)
	) {
	}
}

module.exports = getMarginUtility;
