'use strict';

/* 
   Bujur standar wilayah Indonesia :
   WIB = 105
   WITA = 120
   WIT = 135
*/

function ubahZona({ jam, menit, detik, keBujur, dariBujur }) {
   const formatJam = `${jam < 10 ? '0' + jam : jam}`;
   const formatMenit = `${menit < 10 ? '0' + menit : menit}`;
   const formatDetik = `${detik < 10 ? '0' + detik : detik}`;

   // selisih waktu (jam)
   const selisihWaktu = Math.floor(((keBujur - dariBujur) * 4) / 60);

   // hasilnya dalam bentuk jam
   let hasilKonversi = jam + selisihWaktu;

   // menentukan format jam yang benar ketika waktunya mencapai dini hari
   if (dariBujur === 105) {
      if (keBujur === 120 && jam === 23) hasilKonversi = -1 + selisihWaktu;
      if (keBujur === 135 && jam === 22) hasilKonversi = -2 + selisihWaktu
      if (keBujur === 135 && jam === 23) hasilKonversi = -1 + selisihWaktu;

   } else if (dariBujur === 120) {
      if (keBujur === 105 && jam === 0) hasilKonversi = 24 + selisihWaktu;
      if (keBujur === 135 && jam === 23) hasilKonversi = -1 + selisihWaktu;

   } else {
      if (keBujur === 120 && jam === 0) hasilKonversi = 24 + selisihWaktu;
      if (keBujur === 105 && jam === 0) hasilKonversi = 24 + selisihWaktu;
      if (keBujur === 105 && jam === 1) hasilKonversi = 25 + selisihWaktu;
   }

   return `${formatJam}:${formatMenit}:${formatDetik} ${formatZona(dariBujur)}  ⇄  ${hasilKonversi < 10 ? '0' + hasilKonversi : hasilKonversi}:${formatMenit}:${formatDetik} ${formatZona(keBujur)}`;
}


function formatZona(bujur) {
   const zona = { 105: 'WIB', 120: 'WITA', 135: 'WIT' };
   return zona[bujur];
}


const waktu = {
   jam: 10,
   menit: 10,
   detik: 10,
   keBujur: 135,
   dariBujur: 105
}

console.log(ubahZona(waktu));