const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getInteractivityUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/cursor-/) ||
		utility.match(/pointer-events-/) ||
		utility.match(/resize/) ||
		utility.match(/select-/) ||
		utility === "appearance-none"
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
			if (utilities.interactivity.includes(utility) === false) {
				utilities.interactivity.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getInteractivityUtility;
