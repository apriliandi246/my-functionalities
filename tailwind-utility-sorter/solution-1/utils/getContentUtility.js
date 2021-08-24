const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getContentUtility(utility, utilities, userUtilities) {
	if (
		utility.match(/\bw-/) ||
		utility.match(/h-/) ||
		utility.match(/\bbg-/) ||
		utility.match(/font-/) ||
		utility.match(/text-/) ||
		utility.match(/list-/) ||
		utility.match(/break-/) ||
		utility.match(/italic/) ||
		utility.match(/max-w-/) ||
		utility.match(/min-w-/) ||
		utility.match(/max-h-/) ||
		utility.match(/min-h-/) ||
		utility.match(/align-/) ||
		utility.match(/leading-/) ||
		utility.match(/truncate/) ||
		utility.match(/tracking-/) ||
		utility.match(/overflow-/) ||
		utility.match(/underline-/) ||
		utility.match(/capitalize/) ||
		utility.match(/antialiased/) ||
		utility.match(/whitespace-/) ||
		utility.match(/placeholder-/) ||
		utility.match(/line-through/) ||
		utility === "underline" ||
		utility === "line-through" ||
		utility === "no-underline" ||
		utility === "capitalize" ||
		utility === "truncate" ||
		utility === "uppercase" ||
		utility === "lowercase" ||
		utility === "normal-case"
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
			if (utilities.content.includes(utility) === false) {
				utilities.content.push(utility);
				userUtilities[userUtilities.indexOf(utility)] = undefined;
			}
		}
	}
}

module.exports = getContentUtility;
