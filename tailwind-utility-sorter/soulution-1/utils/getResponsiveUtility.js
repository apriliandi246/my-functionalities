function getResponsiveUtility(utility, utilities) {
	const arrResponsives = Object.entries(utilities.responsive);

	for (let index = 0; index < arrResponsives.length; index++) {
		let breakpoint = arrResponsives[index][0];
		let regex = new RegExp(`\\b${breakpoint}:\\b`);

		if (utility.match(regex)) {
			if (utilities.responsive[breakpoint].includes(utility) === true) {
				let currentIndex = utilities.responsive[breakpoint].indexOf(utility);

				utilities.responsive[breakpoint].splice(currentIndex, 1);
			}

			return breakpoint;
		}
	}

	return "";
}

module.exports = getResponsiveUtility;
