// function hitungLuas() {
//   var sisiLuas = document.getElementById("sisi-luas").value;

//   console.log(sisiLuas);
// }

// // Menghitung luas persegi
// function hitungLuasPersegi(sisi) {
//   return sisi * sisi;
// }

// // Menghitung keliling persegi
// function hitungKelilingPersegi(sisi) {
//   return 4 * sisi;
// }

// // Meminta input dari pengguna
// const sisiPersegi = parseFloat(prompt("Masukkan panjang sisi persegi:"));

// // Validasi input
// if (isNaN(sisiPersegi)) {
//   console.log("Masukan tidak valid. Silakan masukkan angka.");
// } else {
//   // Menghitung luas dan keliling persegi
//   const luasPersegi = hitungLuasPersegi(sisiPersegi);
//   const kelilingPersegi = hitungKelilingPersegi(sisiPersegi);

//   console.log("Luas persegi dengan sisi", sisiPersegi, "adalah", luasPersegi);
//   console.log("Keliling persegi dengan sisi", sisiPersegi, "adalah", kelilingPersegi);
// }

function luas() {
  var s = document.getElementById("s").value;

  var luas = s * s;

  document.getElementById("luas").innerHTML = luas;
}

function kel() {
  var k = document.getElementById("k").value;

  var kel = k * 4;

  document.getElementById("kel").innerHTML = kel;
}
