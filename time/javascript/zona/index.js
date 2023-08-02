"use strict";

/* 
   WIB = 105
   WITA = 120
   WIT = 135
*/

class Zona {
	#hour;
	#zones;
	#second;
	#minute;
	#toLongitude;
	#fromLongitude;
	#timeDifference;
	#conversionResult;

	constructor(time) {
		this.#hour = time.hour;
		this.#second = time.second;
		this.#minute = time.minute;
		this.#toLongitude = time.toLongitude;
		this.#fromLongitude = time.fromLongitude;
		this.#zones = { 105: "WIB", 120: "WITA", 135: "WIT" };

		this.#timeDifference = Math.floor(
			((this.#toLongitude - this.#fromLongitude) * 4) / 60
		);

		this.#conversionResult = this.#hour + this.#timeDifference;
	}

	getConvertionZoneResult() {
		this.#convertZones();

		return {
			second: this.#second,
			minute: this.#minute,
			hour: this.#conversionResult,
			fromLongitude: this.#fromLongitude,
			toLongitude: this.#toLongitude,
			fromLongitudeCode: this.#zones[this.#fromLongitude],
			toLongitudeCode: this.#zones[this.#toLongitude],
		};
	}

	#convertZones() {
		if (this.#fromLongitude === 105) {
			this.#convertWIBZone();
		}

		if (this.#fromLongitude === 120) {
			this.#convertWITAZone();
		}

		if (this.#fromLongitude === 135) {
			this.#convertWITZone();
		}
	}

	#convertWIBZone() {
		if (this.#toLongitude === 120 && this.#hour === 23) {
			this.#conversionResult = -1 + this.#timeDifference;
		}

		if (this.#toLongitude === 135 && this.#hour === 22) {
			this.#conversionResult = -2 + this.#timeDifference;
		}

		if (this.#toLongitude === 135 && this.#hour === 23) {
			this.#conversionResult = -1 + this.#timeDifference;
		}
	}

	#convertWITAZone() {
		if (this.#toLongitude === 105 && this.#hour === 0) {
			this.#conversionResult = 24 + this.#timeDifference;
		}

		if (this.#toLongitude === 135 && this.#hour === 23) {
			this.#conversionResult = -1 + this.#timeDifference;
		}
	}

	#convertWITZone() {
		if (this.#toLongitude === 120 && this.#hour === 0) {
			this.#conversionResult = 24 + this.#timeDifference;
		}

		if (this.#toLongitude === 105 && this.#hour === 0) {
			this.#conversionResult = 24 + this.#timeDifference;
		}

		if (this.#toLongitude === 105 && this.#hour === 1) {
			this.#conversionResult = 25 + this.#timeDifference;
		}
	}
}

const zona = new Zona({
	hour: 1,
	minute: 30,
	second: 4,
	fromLongitude: 105,
	toLongitude: 120,
});

console.log(zona.getConvertionZoneResult());
