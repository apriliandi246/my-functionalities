function getDarkModeUtility(utility, utilities) {
	if (
		utility.match(/dark:/) &&
		utilities.darkMode.includes(utility) === false
	) {
		return true;
	} else {
		return false;
	}
}

module.exports = getDarkModeUtility;
