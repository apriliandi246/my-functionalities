const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getTableUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/table-/) ||
		utility === "border-collapse" ||
		utility === "border-separate"
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
			if (utilities.table.includes(utility) === false) {
				utilities.table.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getTableUtility;
