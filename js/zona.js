'use strict';

/*
   WIB = 105
   WITA = 120
   WIT = 135
*/


// masukan waktu
const inputWaktu = '10:20';

// membuat menjadi array
const waktu = inputWaktu.split('');

// mengambil jam dan konvert menjadi angka
const jam = parseInt(waktu[0] + waktu[1]);

// mengambil menit konvert menjadi angka
const menit = parseInt(waktu[3] + waktu[4]);



// dari - (bujur zona)
const bujurDari = 135;

// konvert ke - (bujur zona)
const bujurKe = 105;



// selisih waktu (jam)
const sw = Math.floor(((bujurKe - bujurDari) * 4) / 60);


// hasilnya dalam bentuk jam
let hasilKonversi = jam + sw;


// menentukan format jam yang benar ketika waktunya mencapai dini hari
if (bujurDari === 105) {
   if (bujurKe === 120 && jam === 23) hasilKonversi = -1 + sw;
   if (bujurKe === 135 && jam === 22) hasilKonversi = -2 + sw
   if (bujurKe === 135 && jam === 23) hasilKonversi = -1 + sw;

} else if (bujurDari === 120) {
   if (bujurKe === 105 && jam === 0) hasilKonversi = 24 + sw;
   if (bujurKe === 135 && jam === 23) hasilKonversi = -1 + sw;

} else {
   if (bujurKe === 120 && jam === 0) hasilKonversi = 24 + sw;
   if (bujurKe === 105 && jam === 0) hasilKonversi = 24 + sw;
   if (bujurKe === 105 && jam === 1) hasilKonversi = 25 + sw;
}



// hasil dan membuat formatnya
let hasilZona;

// ketika hasil "hasilKonversi" (formatnya jam) lebih kecil dari 10
if (hasilKonversi < 10) {
   // ketika menit nya lebih kecil dari 10
   if (menit < 10) {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} ⇄ 0${hasilKonversi}:0${menit} ${formatZona(bujurKe)}`;
      display(bujurDari, bujurKe, hasilZona);

      // ketika menit nya lebih besar dari 10
   } else {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} ⇄ 0${hasilKonversi}:${menit} ${formatZona(bujurKe)}`;
      display(bujurDari, bujurKe, hasilZona);
   }

   // ketika hasil "hasilKonversi" (formatnya jam) lebih besar dari 10
} else {
   // ketika menit nya lebih kecil dari 10
   if (menit < 10) {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} ⇄ ${hasilKonversi}:0${menit} ${formatZona(bujurKe)}`;
      display(bujurDari, bujurKe, hasilZona);

      // ketika menit nya lebih besar dari 10
   } else {
      hasilZona = `${inputWaktu} ${formatZona(bujurDari)} ⇄ ${hasilKonversi}:${menit} ${formatZona(bujurKe)}`;
      display(bujurDari, bujurKe, hasilZona);
   }
}


// fungsi untuk mengembalikan format zona tertentu
function formatZona(bujur) {
   const zona = { 105: 'WIB', 120: 'WITA', 135: 'WIT' };
   return zona[bujur];
}


/* 
   - fungsi menampilkan hasilnya
   - display( zona(dari), zona(ke), hasil_konversi );
*/
function display(dari, ke, hasil) {
   console.log(
      `Dari            :  ${inputWaktu} ${formatZona(dari)} \nKe              :  ${formatZona(ke)} \nHasil Konversi  :  ${hasil}`
   );
}