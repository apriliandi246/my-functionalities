const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getInteractivityUtility(utility, utilities) {
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
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
		} else {
			if (utilities.interactivity.includes(utility) === false) {
				utilities.interactivity.push(utility);
			}
		}
	}
}

module.exports = getInteractivityUtility;
