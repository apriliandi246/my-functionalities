const cssProperties = `
	section .component {
		grid-template-areas:
			"one one two two"
			"one one two two"
			"three three four four"
			"three three four four";
		box-shadow: 0 0 1px 1px #0000001a;
		justify-content: space-between;
		background-color: #ffffff;
		padding: 0 55px 0 55px;
		align-items: center;
		position: fixed;
		display: flex;
		height: 60px;
		z-index: 1;
		right: 0;
		left: 0;
		top: 0;
		grid-template-areas:
			"one one two two"
			"one one two two"
			"three three four four"
			"three three four four";
		grid-template-areas:
			"a a a"
			"b c c"
			"b c c";
	}
`;

function onSort(format, data) {
	const cssSelector = data.trim().split("{");
	const properties = cssSelector.splice(1).join("").trim();

	const cssProperties = properties
		.slice(0, properties.length - 1)
		.trim()
		.split(";")
		.filter((property) => property.trim() !== "")
		.map((property) => `\t${property.trim()};`)
		.sort((a, b) =>
			format === "min" ? a.length - b.length : b.length - a.length
		)
		.join("\n");

	return `${cssSelector.join("").trim()} {
      ${cssProperties}
}
   `;
}

console.log(onSort("min", cssProperties));
