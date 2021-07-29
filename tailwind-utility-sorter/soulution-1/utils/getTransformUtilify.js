const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getTransformUtility(utility, utilities) {
	if (
		utility.match(/transform/) ||
		utility.match(/origin-/) ||
		utility.match(/scale-/) ||
		utility.match(/\brotate-/) ||
		utility.match(/\b-rotate-/) ||
		utility.match(/translate-/) ||
		utility.match(/skew-/) ||
		utility.match(/-skew-/)
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
			if (utilities.transform.includes(utility) === false) {
				utilities.transform.push(utility);
			}
		}
	}
}

module.exports = getTransformUtility;
