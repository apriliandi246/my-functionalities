"use strict";

function getDuration(past, now) {
	const duration = {};

	// set second
	if (now.second >= past.second) {
		duration.second = now.second - past.second;
	} else {
		duration.second = now.second + 60 - past.second;
		now.minute = now.minute - 1;
	}

	// set minute
	if (now.minute >= past.minute) {
		duration.minute = now.minute - past.minute;
	} else {
		duration.minute = now.minute + 60 - past.minute;
		now.hour = now.hour - 1;
	}

	// set hour
	if (now.hour >= past.hour) {
		duration.hour = now.hour - past.hour;
	} else {
		duration.hour = now.hour + 24 - past.hour;
	}

	const { hour, minute, second } = duration;

	return `${hour > 10 ? hour : "0" + hour}:${
		minute > 10 ? minute : "0" + minute
	}:${second > 10 ? second : "0" + second}`;
}

const time1 = {
	hour: 12,
	minute: 0,
	second: 0,
};

const time2 = {
	hour: 15,
	minute: 0,
	second: 0,
};

console.log(getDuration(time1, time2));
