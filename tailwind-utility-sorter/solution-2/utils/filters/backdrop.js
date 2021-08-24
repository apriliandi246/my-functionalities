function getBackdropUtility(utilityClass) {
	if (
		utilityClass.match(/backdrop-filter-/) ||
		utilityClass.match(/backdrop-blur-/) ||
		utilityClass.match(/backdrop-brightness-/) ||
		utilityClass.match(/backdrop-contrast-/) ||
		utilityClass.match(/backdrop-grayscale-/) ||
		utilityClass.match(/backdrop-hue-rotate-/) ||
		utilityClass.match(/backdrop-invert-/) ||
		utilityClass.match(/backdrop-opacity-/) ||
		utilityClass.match(/backdrop-saturate-/) ||
		utilityClass.match(/backdrop-sepia-/)
	) {
	}
}

module.exports = getBackdropUtility;
