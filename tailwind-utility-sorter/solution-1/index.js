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

let utilitiesClass = `bg-dark bg-blend-screen`.trim().split(" ");

sortingUtilities(utilitiesClass);

function sortingUtilities(utilitiesClass) {
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
		others: [],
		responsive: {
			sm: [],
			md: [],
			lg: [],
			xl: [],
			"2xl": [],
		},
	};

	// get the config file
	if (tailwindConfigFile === false) {
		while (tailwindConfigFile === false) {
			if (tailwindConfigFile === false) {
				tailwindConfigFile = fs.existsSync(
					`${configFilePath}tailwind.config.js`
				);

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
		getMarginUtility(utility.trim(), utilities, utilitiesClass);
		getBorderUtility(utility.trim(), utilities, utilitiesClass);
		getLayoutUtility(utility.trim(), utilities, utilitiesClass);
		getContentUtility(utility.trim(), utilities, utilitiesClass);
		getEffectUtility(utility.trim(), utilities, utilitiesClass);
		getSvgUtility(utility.trim(), utilities, utilitiesClass);
		getTableUtility(utility.trim(), utilities, utilitiesClass);
		getInteractivityUtility(utility.trim(), utilities, utilitiesClass);
		getTransformUtility(utility.trim(), utilities, utilitiesClass);
		getFilterUtility(utility.trim(), utilities, utilitiesClass);
		getTransitionUtility(utility.trim(), utilities, utilitiesClass);
		getAnimationUtility(utility.trim(), utilities, utilitiesClass);
		getOutlineUtility(utility.trim(), utilities, utilitiesClass);
		getPaddingUtility(utility.trim(), utilities, utilitiesClass);
		getBoxShadowUtility(utility.trim(), utilities, utilitiesClass);
	});

	for (let index = 0; index < utilitiesClass.length; index++) {
		if (utilitiesClass[index] !== undefined) {
			utilities.others.push(utilitiesClass[index]);
		}
	}

	const result = [
		...utilities.others.sort((a, b) => a - b),
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

	console.log(utilitiesClass);
	console.log("\n");
	console.log(result.join(" "));
	console.log("\n");
	console.log(utilities);
}
