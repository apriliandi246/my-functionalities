const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getPaddingUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/\bp-\b/) ||
		utility.match(/pt-/) ||
		utility.match(/pr-/) ||
		utility.match(/pb-/) ||
		utility.match(/pl-/) ||
		utility.match(/py-/) ||
		utility.match(/px-/)
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
			if (utilities.padding.includes(utility) === false) {
				utilities.padding.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getPaddingUtility;
