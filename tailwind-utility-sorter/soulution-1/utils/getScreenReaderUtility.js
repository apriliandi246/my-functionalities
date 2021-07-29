const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getScreenReaderUtility(utility, utilities) {
	if (utility === "sr-only" || utility === "not-sr-only") {
		if (getResponsiveUtility(utility, utilities) !== "") {
			utilities.responsive[getResponsiveUtility(utility, utilities)].push(
				utility
			);
		} else if (getStateUtility(utility, utilities) === true) {
			utilities.states.push(utility);
		} else if (getDarkModeUtility(utility, utilities) === true) {
			utilities.darkMode.push(utility);
		} else {
			if (utilities.screenReader.includes(utility) === false) {
				utilities.screenReader.push(utility);
			}
		}
	}
}

module.exports = getScreenReaderUtility;
