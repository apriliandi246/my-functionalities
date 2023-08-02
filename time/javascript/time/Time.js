"use strict";

import DataTime from "./DataTime.js";
import FormatTime from "./FormatTime.js";
import RelativeTime from "./RelativeTime.js";
import LanguageVariant from "./LanguageVariant.js";

class Time {
	#timeData;
	#timeFormat;
	#timeRelative;
	#timeLanguage;

	constructor(previousDate, currentLanguage) {
		this.#timeData = new DataTime(previousDate);
		this.#timeLanguage = new LanguageVariant(currentLanguage);
		this.#timeFormat = new FormatTime(this.#timeData, this.#timeLanguage);
		this.#timeRelative = new RelativeTime(this.#timeData, this.#timeLanguage);
	}

	getFormat(formatLevel, formatDate) {
		return this.#timeFormat.getFormatTime(formatLevel, formatDate);
	}

	getRelative() {
		return this.#timeRelative.getRelativeTime();
	}
}

export default Time;
