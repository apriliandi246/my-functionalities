export {};

// array of properties
const arrProperties: string[] = `
   top: 0;
   left: 0;
   right: 0;
   z-index: 1;
   height: 60px;
   display: flex;
   position: fixed;
   align-items: center;
   padding: 0 55px 0 55px;
   background-color: #ffffff;
   justify-content: space-between;
   box-shadow: 0 0 1px 1px #0000001a;
`
	.trim()
	.split("\n");

let maxIndex: number;
let currentProperty: string;

// sort the properties
for (let firstIndex = 0; firstIndex < arrProperties.length; firstIndex++) {
	maxIndex = firstIndex;

	for (
		let secondIndex = firstIndex;
		secondIndex < arrProperties.length;
		secondIndex++
	) {
		if (
			arrProperties[secondIndex].toString().trim().length >
			arrProperties[maxIndex].toString().trim().length
		) {
			maxIndex = secondIndex;
		}
	}

	currentProperty = arrProperties[firstIndex].toString().trim();
	arrProperties[firstIndex] = arrProperties[maxIndex].toString().trim();
	arrProperties[maxIndex] = currentProperty;
}

console.log(arrProperties.join("\n"));
