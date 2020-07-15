function duration(time1, time2) {
   const result = {}

   // set second
   if (time2.second >= time1.second) {
      result.second = time2.second - time1.second;
   } else {
      result.second = (time2.second + 60) - time1.second;
      time2.minute = time2.minute - 1;
   }

   // set minute
   if (time2.minute >= time1.minute) {
      result.minute = time2.minute - time1.minute;
   } else {
      result.minute = (time2.minute + 60) - time1.minute;
      time2.hour = time2.hour - 1;
   }

   // set hour
   if (time2.hour >= time1.hour) {
      result.hour = time2.hour - time1.hour;
   } else {
      result.hour = (time2.hour + 24) - time1.hour;
   }

   const { hour, minute, second } = result;

   return `${hour > 10 ? hour : '0' + hour}:${minute > 10 ? minute : '0' + minute}:${second > 10 ? second : '0' + second}`;
}


const time1 = {
   hour: 23,
   minute: 21,
   second: 22
}

const time2 = {
   hour: 0,
   minute: 12,
   second: 4
}

console.log(duration(time1, time2));