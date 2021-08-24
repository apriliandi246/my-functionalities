function getTextUtility(utilityClass) {
	const textClasses = [
		"text-left",
		"text-center",
		"text-right",
		"text-justify",
		"underline",
		"line-through",
		"no-underline",
		"uppercase",
		"lowercase",
		"capitalize",
		"normal-case",
		"truncate",
		"overflow-ellipsis",
		"overflow-clip",
	];

	if (textClasses.includes(utilityClass) || utilityClass.match(/text-/)) {
	}
}

module.exports = getTextUtility;
