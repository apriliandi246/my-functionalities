export {};

// properties
const properties: string =
	`font-family: Arial, Helvetica, sans-serif;font-family: monospace;text-decoration: none;margin-top: 15px;color: white;font-family: sans-serif;font-size: 19px;margin-left: 18px;text-align: center;transition: 0.1s;float: left;height: 100%;width: 100%;`.trim();

// convert to array
// and each property has no semicolom
const arrProperties: string[] = properties.split(";");

// add semicolom for each property
for (let i = 0; i < arrProperties.length; i++) {
	if (arrProperties[i].length > 0) {
		arrProperties[i] = `${arrProperties[i]};`;
	}
}

// sort it
let imin: number;
let current: string;

for (let i = 0; i < arrProperties.length; i++) {
	imin = i;

	for (let j = i; j < arrProperties.length; j++) {
		if (arrProperties[j].length < arrProperties[imin].length) {
			imin = j;
		}
	}

	current = arrProperties[i];
	arrProperties[i] = arrProperties[imin];
	arrProperties[imin] = current;
}

const result = arrProperties.join("\n");

console.log(result);
