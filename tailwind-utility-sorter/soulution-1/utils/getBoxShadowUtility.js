const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getBoxShadowUtility(utility, utilities) {
	if (utility.match(/shadow-/)) {
		if (getResponsiveUtility(utility, utilities) !== "") {
			utilities.responsive[getResponsiveUtility(utility, utilities)].push(
				utility
			);
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
		} else {
			if (utilities.boxShadow.includes(utility) === false) {
				utilities.boxShadow.push(utility);
			}
		}
	}
}

module.exports = getBoxShadowUtility;
