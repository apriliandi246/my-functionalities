function getFlexUtility(utilityClass) {
	const flexClasses = [
		"flex-row",
		"flex-row-rever",
		"flex-col",
		"flex-col-reverse",
		"flex-wrap",
		"flex-wrap-reverse",
		"flex-nowrap",
		"flex-none",
	];

	if (flexClasses.includes(utilityClass) || utilityClass.match(/flex-/)) {
	}
}

module.exports = getFlexUtility;
