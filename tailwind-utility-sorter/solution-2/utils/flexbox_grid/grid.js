function getGridUtility(utilityClass) {
	const gridClasses = [
		"grid-cols-none",
		"col-start-auto",
		"col-end-auto",
		"grid-rows-none",
		"row-auto",
		"row-start-auto",
		"row-end-auto",
		"grid-flow-row",
		"grid-flow-col",
		"grid-flow-row-dense",
		"grid-flow-col-dense",
		"auto-cols-auto",
		"auto-cols-min",
		"auto-cols-max",
		"auto-rows-auto",
		"auto-rows-min",
		"auto-rows-max",
	];

	if (
		gridClasses.includes(utilityClass) ||
		utilityClass.match(/grid-/) ||
		utilityClass.match(/col-/) ||
		utilityClass.match(/row-/) ||
		utilityClass.match(/auto-/)
	) {
	}
}

module.exports = getGridUtility;
