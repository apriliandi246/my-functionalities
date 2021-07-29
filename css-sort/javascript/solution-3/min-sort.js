// array of properties
const arrProperties = `
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
				"a a a"
				"b c c" 
				"b c c";
`
	.trim()
	.split("\n");

let minIndex;
let currentProperty;

// sort the properties
for (let firstIndex = 0; firstIndex < arrProperties.length; firstIndex++) {
	minIndex = firstIndex;

	for (
		let secondIndex = firstIndex;
		secondIndex < arrProperties.length;
		secondIndex++
	) {
		if (
			arrProperties[secondIndex].toString().trim().length <
			arrProperties[minIndex].toString().trim().length
		) {
			minIndex = secondIndex;
		}
	}

	currentProperty = arrProperties[firstIndex].toString().trim();
	arrProperties[firstIndex] = arrProperties[minIndex].toString().trim();
	arrProperties[minIndex] = currentProperty;
}

console.log(arrProperties.join("\n"));
