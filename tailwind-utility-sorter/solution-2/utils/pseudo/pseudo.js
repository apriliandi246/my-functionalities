function getPseudoUtility(utilityClass) {
	const pseudoClasses = [
		"before:",
		"after:",
		"selection:",
		"marker:",
		"only:",
		"first-of-type",
		"last-of-type",
		"only-of-type",
		"target:",
		"default:",
		"indeterminate:",
		"placeholder-shown:",
		"autofill:",
		"required:",
		"valid",
		"invalid",
		"in-range:",
		"out-of-range:",
		"first-letter",
		"first-line",
	];

	if (pseudoClasses.includes(utilityClass)) {
	}
}

module.exports = getPseudoUtility;
