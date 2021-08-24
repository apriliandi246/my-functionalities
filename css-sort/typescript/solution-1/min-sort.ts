export {};

// properties
const cssCode: string =
	`font-family: monospace;font-family: Arial, Helvetica, sans-serif;text-decoration: none;margin-top: 15px;color: white;font-family: sans-serif;font-size: 19px;margin-left: 18px;text-align: center;transition: 0.1s;float: left;height: 100%;width: 100%;`.trim();

// convert to array
const arrCssCode: string[] = cssCode.split(";");

// add semicolom for each property
const result: string[] = [];

for (let index = 0; index < arrCssCode.length; index++) {
	if (arrCssCode[index].length > 0) {
		result.push(`${arrCssCode[index]};`);
	}
}

// sort it
let indexMin: number;
let currentProperty: string;

for (let i = 0; i < result.length; i++) {
	indexMin = i;

	for (let j = i; j < result.length; j++) {
		if (result[j].length < result[indexMin].length) {
			indexMin = j;
		}
	}

	currentProperty = result[i];
	result[i] = result[indexMin];
	result[indexMin] = currentProperty;
}

console.log(result.join("\n"));
