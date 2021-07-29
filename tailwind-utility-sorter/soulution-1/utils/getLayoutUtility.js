const getStateUtility = require("./getStateUtility");
const getDarkModeUtility = require("./getDarkModeUtility");
const getResponsiveUtility = require("./getResponsiveUtility");

function getLayoutUtility(utility, utilities) {
	if (
		utility.match(/z-/) ||
		utility.match(/top-/) ||
		utility.match(/box-/) ||
		utility.match(/flex/) ||
		utility.match(/grid/) ||
		utility.match(/row-/) ||
		utility.match(/col-/) ||
		utility.match(/gap-/) ||
		utility.match(/-top-/) ||
		utility.match(/self-/) ||
		utility.match(/right-/) ||
		utility.match(/left-/) ||
		utility.match(/-left-/) ||
		utility.match(/float-/) ||
		utility.match(/items-/) ||
		utility.match(/clear-/) ||
		utility.match(/order-/) ||
		utility.match(/place-/) ||
		utility.match(/inset-/) ||
		utility.match(/-right-/) ||
		utility.match(/bottom-/) ||
		utility.match(/-bottom-/) ||
		utility.match(/-inset-/) ||
		utility.match(/object-/) ||
		utility.match(/justify-/) ||
		utility.match(/content-/) ||
		utility.match(/overflow-/) ||
		utility.match(/isolation-/) ||
		utility.match(/auto-cols-/) ||
		utility.match(/auto-rows-/) ||
		utility.match(/overscroll-/) ||
		utility.match(/decoration-/) ||
		utility === "visible" ||
		utility === "invisible" ||
		utility === "static" ||
		utility === "fixed" ||
		utility === "absolute" ||
		utility === "relative" ||
		utility === "sticky" ||
		utility === "container"
	) {
		let containBorder = utility.match(/border/);

		if (containBorder == null) {
			if (getResponsiveUtility(utility, utilities) !== "") {
				utilities.responsive[getResponsiveUtility(utility, utilities)].push(
					utility
				);
			} else if (getStateUtility(utility, utilities) === true) {
				utilities.states.push(utility);
			} else if (getDarkModeUtility(utility, utilities) === true) {
				utilities.darkMode.push(utility);
			} else {
				if (
					!utility.match(/border/) &&
					utilities.layout.includes(utility) === false
				) {
					utilities.layout.push(utility);
				}
			}
		}
	}
}

module.exports = getLayoutUtility;
