function getBreakPointUtility(utilityClass) {}

const fileSystem = require("fs");
let currentConfigFilePath = "";
let tailwindConfig = fileSystem.existsSync("./tailwind.config.js");

while (tailwindConfig === false) {
	if (tailwindConfig === false) {
		tailwindConfig = fileSystem.existsSync(
			`${currentConfigFilePath}tailwind.config.js`
		);
	}

	if (tailwindConfig === false) {
		currentConfigFilePath += "../";
	}

	if (tailwindConfig === true) {
		tailwindConfig = require(currentConfigFilePath + "tailwind.config.js");
	}
}

console.log(tailwindConfig);

module.exports = getBorderUtility;
