const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getTransitionUtility(utility, utilities) {
	if (
		utility.match(/transition/) ||
		utility.match(/duration-/) ||
		utility.match(/rounded-/) ||
		utility.match(/ease-/) ||
		utility.match(/delay-/)
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
			if (utilities.transition.includes(utility) === false) {
				utilities.transition.push(utility);
			}
		}
	}
}

module.exports = getTransitionUtility;
