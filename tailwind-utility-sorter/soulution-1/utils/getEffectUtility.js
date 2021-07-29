const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getEffectUtility(utility, utilities) {
	if (
		utility.match(/opacity-/) ||
		utility.match(/mix-blend-/) ||
		utility.match(/\bbg-blend-/)
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
			if (utilities.effect.includes(utility) === false) {
				utilities.effect.push(utility);
			}
		}
	}
}

module.exports = getEffectUtility;
