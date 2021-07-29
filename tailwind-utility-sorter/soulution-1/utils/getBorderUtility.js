const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getBorderUtility(utility, utilities) {
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
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
		} else {
			if (utilities.border.includes(utility) === false) {
				utilities.border.push(utility);
			}
		}
	}
}

module.exports = getBorderUtility;
