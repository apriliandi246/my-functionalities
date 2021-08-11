const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getMarginUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/m-/) ||
		utility.match(/-m-/) ||
		utility.match(/mt-/) ||
		utility.match(/-mt-/) ||
		utility.match(/mr-/) ||
		utility.match(/-mr-/) ||
		utility.match(/mb-/) ||
		utility.match(/-mb-/) ||
		utility.match(/-mb-/) ||
		utility.match(/ml-/) ||
		utility.match(/-ml-/) ||
		utility.match(/my-/) ||
		utility.match(/-my-/) ||
		utility.match(/mx-/) ||
		utility.match(/-mx-/) ||
		utility.match(/space-/) ||
		utility.match(/-space-/)
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
			if (utilities.margin.includes(utility) === false) {
				utilities.margin.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getMarginUtility;
