export {};

// properties
const properties = `font-family: Arial, Helvetica, sans-serif;font-family: monospace;text-decoration: none;margin-top: 15px;color: white;font-family: sans-serif;font-size: 19px;margin-left: 18px;text-align: center;transition: 0.1s;float: left;height: 100%;width: 100%;`.trim();

// convert to array
// and each property has no semicolom
const arrProperties: string[] = properties.split(";");

// add semicolom for each property
for (let i = 0; i < arrProperties.length; i++) {
   if (arrProperties[i].length > 0) {
      arrProperties[i] = `${arrProperties[i]};`;
   }
}

// sort it
let imax: number;
let current: string;

for (let i = 0; i < arrProperties.length; i++) {
   imax = i;

   for (let j = i; j < arrProperties.length; j++) {
      if (arrProperties[j].length > arrProperties[imax].length) {
         imax = j;
      }
   }

   current = arrProperties[i];
   arrProperties[i] = arrProperties[imax];
   arrProperties[imax] = current;
}

const result = arrProperties.join("\n");

console.log(result);
