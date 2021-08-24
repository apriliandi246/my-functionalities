function getStatUtility(utilityClass) {
	if (
		utilityClass.match(/odd:/) ||
		utilityClass.match(/last:/) ||
		utilityClass.match(/last:/) ||
		utilityClass.match(/hover:/) ||
		utilityClass.match(/focus:/) ||
		utilityClass.match(/first:/) ||
		utilityClass.match(/checked:/) ||
		utilityClass.match(/visited:/) ||
		utilityClass.match(/disabled:/) ||
		utilityClass.match(/motion-safe:/) ||
		utilityClass.match(/group-hover:/) ||
		utilityClass.match(/group-focus:/) ||
		utilityClass.match(/focus-within:/) ||
		utilityClass.match(/focus-visible:/) ||
		utilityClass.match(/motion-reduce:/) ||
		utilityClass.match(/even:/) ||
		utilityClass.match(/before:/) ||
		utilityClass.match(/after:/)
	) {
	}
}

module.exports = getStatUtility;
