const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getTransformUtility(utility, utilities, userUtilities) {
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
			userUtilities[userUtilities.indexOf(utility)] = undefined;
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
			userUtilities[userUtilities.indexOf(utility)] = undefined;
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
			userUtilities[userUtilities.indexOf(utility)] = undefined;
		} else {
			if (utilities.transform.includes(utility) === false) {
				utilities.transform.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getTransformUtility;
