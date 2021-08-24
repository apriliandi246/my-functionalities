// properties
const properties =
	`font-family: monospace;font-family: Arial, Helvetica, sans-serif;text-decoration: none;margin-top: 15px;color: white;font-family: sans-serif;font-size: 19px;margin-left: 18px;text-align: center;transition: 0.1s;float: left;height: 100%;width: 100%;`.trim();

// convert to array
const arrProperties = properties.split(";");

// add semicolom for each property
const finalResult = [];

for (let i = 0; i < arrProperties.length; i++) {
	if (arrProperties[i].length > 0) {
		finalResult.push(`${arrProperties[i]};`);
	}
}

// sort it
let imin;
let current;

for (let i = 0; i < finalResult.length; i++) {
	imin = i;

	for (let j = i; j < finalResult.length; j++) {
		if (finalResult[j].length < finalResult[imin].length) {
			imin = j;
		}
	}

	current = finalResult[i];
	finalResult[i] = finalResult[imin];
	finalResult[imin] = current;
}

console.log(finalResult.join("\n"));
