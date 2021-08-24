const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getBorderUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/border/) ||
		utility.match(/divide-/) ||
		utility.match(/rounded-/) ||
		utility.match(/ring-/)
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
			if (utilities.border.includes(utility) === false) {
				utilities.border.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getBorderUtility;
