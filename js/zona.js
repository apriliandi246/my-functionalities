'use strict';

/*
   WIB = 105
   WITA = 120
   WIT = 135
*/

const waktu = {
   jam: 10,
   menit: 10,
   detik: 10
}

const { jam, menit, detik } = waktu;

const formatJam = `${jam < 10 ? '0' + jam : jam}`;
const formatMenit = `${menit < 10 ? '0' + menit : menit}`;
const formatDetik = `${detik < 10 ? '0' + detik : detik}`;


const bujurDari = 105;
const bujurKe = 135;



// selisih waktu (jam)
const selisihWaktu = Math.floor(((bujurKe - bujurDari) * 4) / 60);

// hasilnya dalam bentuk jam
let hasilKonversi = jam + selisihWaktu;

// menentukan format jam yang benar ketika waktunya mencapai dini hari
if (bujurDari === 105) {
   if (bujurKe === 120 && jam === 23) hasilKonversi = -1 + selisihWaktu;
   if (bujurKe === 135 && jam === 22) hasilKonversi = -2 + selisihWaktu
   if (bujurKe === 135 && jam === 23) hasilKonversi = -1 + selisihWaktu;

} else if (bujurDari === 120) {
   if (bujurKe === 105 && jam === 0) hasilKonversi = 24 + selisihWaktu;
   if (bujurKe === 135 && jam === 23) hasilKonversi = -1 + selisihWaktu;

} else {
   if (bujurKe === 120 && jam === 0) hasilKonversi = 24 + selisihWaktu;
   if (bujurKe === 105 && jam === 0) hasilKonversi = 24 + selisihWaktu;
   if (bujurKe === 105 && jam === 1) hasilKonversi = 25 + selisihWaktu;
}



// hasil dan membuat formatnya
const hasilZona = `${formatJam}:${formatMenit}:${formatDetik} ${formatZona(bujurDari)}  ⇄  ${hasilKonversi < 10 ? '0' + hasilKonversi : hasilKonversi}:${formatMenit}:${formatDetik} ${formatZona(bujurKe)}`;

tampilkan(bujurDari, bujurKe, hasilZona);



function formatZona(bujur) {
   const zona = { 105: 'WIB', 120: 'WITA', 135: 'WIT' };
   return zona[bujur];
}

function tampilkan(dari, ke, hasil) {
   console.log(
      `Dari \t\t: ${formatJam}:${formatMenit}:${formatDetik} ${formatZona(dari)} \nKoversi ke \t: ${formatZona(ke)} \nHasil Konversi \t: ${hasil} `
   );
}