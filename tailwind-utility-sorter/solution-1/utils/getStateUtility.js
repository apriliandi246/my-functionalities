function getStateUtility(utility, utilities) {
	if (
		utility.match(/odd:/) ||
		utility.match(/last:/) ||
		utility.match(/last:/) ||
		utility.match(/hover:/) ||
		utility.match(/focus:/) ||
		utility.match(/first:/) ||
		utility.match(/checked:/) ||
		utility.match(/visited:/) ||
		utility.match(/disabled:/) ||
		utility.match(/motion-safe:/) ||
		utility.match(/group-hover:/) ||
		utility.match(/group-focus:/) ||
		utility.match(/focus-within:/) ||
		utility.match(/focus-visible:/) ||
		utility.match(/motion-reduce:/) ||
		(utility.match(/even:/) && utilities.states.includes(utility) === false)
	) {
		return true;
	} else {
		return false;
	}
}

module.exports = getStateUtility;
