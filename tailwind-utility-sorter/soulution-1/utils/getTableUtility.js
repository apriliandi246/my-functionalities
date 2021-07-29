const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getTableUtility(utility, utilities) {
	if (
		utility.match(/table-/) ||
		utility === "border-collapse" ||
		utility === "border-separate"
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
			if (utilities.table.includes(utility) === false) {
				utilities.table.push(utility);
			}
		}
	}
}

module.exports = getTableUtility;
