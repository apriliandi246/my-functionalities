"use strict";

import Time from "./Time.js";

const time = new Time("2023-03-11", "en");

console.log(time.getFormat("easy", "short"));
console.log(time.getFormat("medium", "short"));
console.log(time.getFormat("hard", "short"));

console.log("\n");

console.log(time.getFormat("easy", "normal"));
console.log(time.getFormat("medium", "normal"));
console.log(time.getFormat("hard", "normal"));

console.log("\n");

console.log(time.getRelative());

console.log("\n");
console.log("\n");

const time2 = new Time("2023-07-01T07:03:47.041Z", "id");

console.log(time2.getFormat("easy", "short"));
console.log(time2.getFormat("medium", "short"));
console.log(time2.getFormat("hard", "short"));

console.log("\n");

console.log(time2.getFormat("easy", "normal"));
console.log(time2.getFormat("medium", "normal"));
console.log(time2.getFormat("hard", "normal"));

console.log("\n");

console.log(time2.getRelative());
