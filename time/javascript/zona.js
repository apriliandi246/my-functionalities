"use strict";

/* 
   Indonesian standard longitude :
   WIB = 105
   WITA = 120
   WIT = 135
*/

function zoneFormat(longitude) {
   const zone = { 105: "WIB", 120: "WITA", 135: "WIT" };
   return zone[longitude];
}

function zoneConvert({ hour, minute, second, fromLongitude, toLongitude }) {
   const hourFormat = `${hour < 10 ? "0" + hour : hour}`;
   const minuteFormat = `${minute < 10 ? "0" + minute : minute}`;
   const secondFormat = `${second < 10 ? "0" + second : second}`;

   // selisih waktu (jam)
   const timeDifference = Math.floor(((toLongitude - fromLongitude) * 4) / 60);

   // hasilnya dalam bentuk jam
   let conversionResult = hour + timeDifference;

   // menentukan format jam yang benar ketika waktunya mencapai dini hari
   if (fromLongitude === 105) {
      if (toLongitude === 120 && hour === 23)
         conversionResult = -1 + timeDifference;
      if (toLongitude === 135 && hour === 22)
         conversionResult = -2 + timeDifference;
      if (toLongitude === 135 && hour === 23)
         conversionResult = -1 + timeDifference;
   }

   if (fromLongitude === 120) {
      if (toLongitude === 105 && hour === 0)
         conversionResult = 24 + timeDifference;
      if (toLongitude === 135 && hour === 23)
         conversionResult = -1 + timeDifference;
   }

   if (fromLongitude === 135) {
      if (toLongitude === 120 && hour === 0)
         conversionResult = 24 + timeDifference;
      if (toLongitude === 105 && hour === 0)
         conversionResult = 24 + timeDifference;
      if (toLongitude === 105 && hour === 1)
         conversionResult = 25 + timeDifference;
   }

   return `${hourFormat}:${minuteFormat}:${secondFormat} ${zoneFormat(
      fromLongitude
   )}  ⇄  ${
      conversionResult < 10 ? "0" + conversionResult : conversionResult
   }:${minuteFormat}:${secondFormat} ${zoneFormat(toLongitude)}`;
}

const time = {
   hour: 10,
   minute: 2,
   second: 4,
   fromLongitude: 135,
   toLongitude: 105,
};

console.log(zoneConvert(time));
