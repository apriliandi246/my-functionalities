function getDuration(time1, time2) {
   const duration = {};

   // set second
   if (time2.second >= time1.second) {
      duration.second = time2.second - time1.second;
   } else {
      duration.second = (time2.second + 60) - time1.second;
      time2.minute = time2.minute - 1;
   }

   // set minute
   if (time2.minute >= time1.minute) {
      duration.minute = time2.minute - time1.minute;
   } else {
      duration.minute = (time2.minute + 60) - time1.minute;
      time2.hour = time2.hour - 1;
   }

   // set hour
   if (time2.hour >= time1.hour) {
      duration.hour = time2.hour - time1.hour;
   } else {
      duration.hour = (time2.hour + 24) - time1.hour;
   }

   const { hour, minute, second } = duration;

   return `${hour > 10 ? hour : '0' + hour}:${minute > 10 ? minute : '0' + minute}:${second > 10 ? second : '0' + second}`;
}


const time1 = {
   hour: 13,
   minute: 0,
   second: 0
}

const time2 = {
   hour: 15,
   minute: 0,
   second: 0
}

console.log(getDuration(time1, time2));