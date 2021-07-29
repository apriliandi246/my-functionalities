const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getFilterUtility(utility, utilities) {
	if (
		utility.match(/blur/) ||
		utility.match(/filter/) ||
		utility.match(/invert/) ||
		utility.match(/sepia-/) ||
		utility.match(/saturate-/) ||
		utility.match(/contrast-/) ||
		utility.match(/backdrop-/) ||
		utility.match(/-backdrop-/) ||
		utility.match(/brightness-/) ||
		utility.match(/drop-shadow/) ||
		utility.match(/\bgrayscale/) ||
		utility.match(/hue-rotate-/) ||
		utility.match(/-hue-rotate-/)
	) {
		if (getResponsiveUtility(utility, utilities) !== "") {
			utilities.responsive[getResponsiveUtility(utility, utilities)].push(
				utility
			);
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
		} else {
			if (utilities.filter.includes(utility) === false) {
				utilities.filter.push(utility);
			}
		}
	}
}

module.exports = getFilterUtility;
