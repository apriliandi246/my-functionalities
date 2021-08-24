// properties
const properties =
	`font-family: monospace;font-family: Arial, Helvetica, sans-serif;text-decoration: none;margin-top: 15px;color: white;font-family: sans-serif;font-size: 19px;margin-left: 18px;text-align: center;transition: 0.1s;float: left;height: 100%;width: 100%;`
		.trimStart()
		.trimEnd();

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
let imax;
let current;

for (let i = 0; i < finalResult.length; i++) {
	imax = i;

	for (let j = i; j < finalResult.length; j++) {
		if (finalResult[j].length > finalResult[imax].length) {
			imax = j;
		}
	}

	current = finalResult[i];
	finalResult[i] = finalResult[imax];
	finalResult[imax] = current;
}

console.log(finalResult.join("\n"));
