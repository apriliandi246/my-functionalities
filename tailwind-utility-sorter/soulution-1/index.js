const fs = require("fs");
const getMarginUtility = require("./utils/getMarginUtility");
const getBorderUtility = require("./utils/getBorderUtility");
const getLayoutUtility = require("./utils/getLayoutUtility");
const getContentUtility = require("./utils/getContentUtility");
const getEffectUtility = require("./utils/getEffectUtility");
const getSvgUtility = require("./utils/getSvgUtility");
const getTableUtility = require("./utils/getTableUtility");
const getInteractivityUtility = require("./utils/getInteractivityUtility");
const getTransformUtility = require("./utils/getTransformUtilify");
const getFilterUtility = require("./utils/getFilterUtility");
const getTransitionUtility = require("./utils/getTransitionUtility");
const getAnimationUtility = require("./utils/getAnimationUtility");
const getOutlineUtility = require("./utils/getOutlineUtility");
const getPaddingUtility = require("./utils/getPaddingUtility");
const getBoxShadowUtility = require("./utils/getBoxShadowUtility");

let configSetting;
let configFilePath = "";
let screenBreakpoints = [];
let tailwindConfigFile = fs.existsSync("./tailwind.config.js");

let utilities = {
	layout: [],
	margin: [],
	boxShadow: [],
	outline: [],
	border: [],
	padding: [],
	content: [],
	svg: [],
	table: [],
	effect: [],
	interactivity: [],
	transform: [],
	filter: [],
	transition: [],
	animation: [],
	darkMode: [],
	states: [],
	screenReader: [],
	responsive: {
		sm: [],
		md: [],
		lg: [],
		xl: [],
		"2xl": [],
	},
};

// the utilities
let utilitiesClass =
	`relative flex flex-row flex-wrap justify-center px-4 py-10 border-b md:px-10 dark:border-brand-grey-800 bg-brand-grey-50 dark:bg-brand-dark-grey-800`
		.trim()
		.split(" ");

// get the config file
if (tailwindConfigFile === false) {
	while (tailwindConfigFile === false) {
		if (tailwindConfigFile === false) {
			tailwindConfigFile = fs.existsSync(`${configFilePath}tailwind.config.js`);

			if (tailwindConfigFile === false) {
				configFilePath += "../";
			}
		}

		if (tailwindConfigFile === true) {
			configSetting = require(configFilePath + "tailwind.config");
		}
	}
} else {
	configSetting = require("./tailwind.config");
}

// check if the breakpoints setting is exist (that's mean it already changed)
if (configSetting.theme.hasOwnProperty("screens")) {
	screenBreakpoints = Object.entries(tailwindConfig.theme.screens);

	utilities.responsive = {};

	for (let index = 0; index < screenBreakpoints.length; index++) {
		utilities.responsive[screens[index][0]] = [];
	}
}

utilitiesClass.forEach((utility) => {
	getMarginUtility(utility.trim(), utilities);
	getBorderUtility(utility.trim(), utilities);
	getLayoutUtility(utility.trim(), utilities);
	getContentUtility(utility.trim(), utilities);
	getEffectUtility(utility.trim(), utilities);
	getSvgUtility(utility.trim(), utilities);
	getTableUtility(utility.trim(), utilities);
	getInteractivityUtility(utility.trim(), utilities);
	getTransformUtility(utility.trim(), utilities);
	getFilterUtility(utility.trim(), utilities);
	getTransitionUtility(utility.trim(), utilities);
	getAnimationUtility(utility.trim(), utilities);
	getOutlineUtility(utility.trim(), utilities);
	getPaddingUtility(utility.trim(), utilities);
	getBoxShadowUtility(utility.trim(), utilities);
});

const result = [
	...utilities.layout.sort((a, b) => a - b),
	...utilities.margin.sort((a, b) => a - b),
	...utilities.boxShadow.sort((a, b) => a - b),
	...utilities.outline.sort((a, b) => a - b),
	...utilities.border.sort((a, b) => a - b),
	...utilities.padding.sort((a, b) => a - b),
	...utilities.content.sort((a, b) => a - b),
	...utilities.svg.sort((a, b) => a - b),
	...utilities.table.sort((a, b) => a - b),
	...utilities.interactivity.sort((a, b) => a - b),
	...utilities.transform.sort((a, b) => a - b),
	...utilities.filter.sort((a, b) => a - b),
	...utilities.transition.sort((a, b) => a - b),
	...utilities.animation.sort((a, b) => a - b),
	...utilities.darkMode.sort((a, b) => a - b),
	...utilities.states.sort((a, b) => a - b),
];

const arrResponsives = Object.entries(utilities.responsive);

for (let index = 0; index < arrResponsives.length; index++) {
	for (
		let innerIndex = 0;
		innerIndex < arrResponsives[index][1].length;
		innerIndex++
	) {
		result.push(arrResponsives[index][1][innerIndex]);
	}
}

console.log(result.join(" "));
