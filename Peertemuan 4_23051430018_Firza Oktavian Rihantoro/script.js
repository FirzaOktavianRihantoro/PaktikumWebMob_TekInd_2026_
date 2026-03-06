// Komentar single line

// 1. Variabel & Tipe Data
let namaMesin = "CNC-Mazak-01";   // String
let targetHarian = 500;           // Number
let isOperational = true;         // Boolean

// Menampilkan ke console browser (Tekan F12 -> Console)
console.log(`Mesin: ${namaMesin}`);
console.log(`Target Harian: ${targetHarian}`);


// 2. Operator Aritmatika
let produksiPagi = 200;
let produksiSiang = 150;

let totalProduksi = produksiPagi + produksiSiang;
console.log(`Total produksi saat ini: ${totalProduksi}`);

// Hitung sisa kekurangan target
let kekurangan = targetHarian - totalProduksi;
console.log(`Kekurangan target: ${kekurangan}`);


// 3. Simulasi data pembacaan sensor (jam operasional)
let jamOperasional = 1250; // dalam jam
let batasMaksimal = 1200;  // batas sebelum maintenance wajib

console.log("--- Cek Status Maintenance ---");

// Logika If / Else
if (jamOperasional >= batasMaksimal) {
  console.log("PERINGATAN: Mesin mencapai batas maksimal!");
  console.log("Status: MAINTENANCE WAJIB (Stop Produksi)");
} 
else if (jamOperasional > 1000) {
  console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)");
} 
else {
  console.log("Status: BERJALAN NORMAL");
}
// Data Input
let jamKerjaPlanned = 8;        // Jam
let jamKerjaAktual = 6.5;       // Jam (Ada 1.5 jam breakdown)

// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;

// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Logika Penilaian Kualitas Availability
if (availability >= 90) {
    console.log("Kategori: WORLD CLASS");
} 
else if (availability >= 80) {
    console.log("Kategori: BAIK (Tetap monitor)");
} 
else {
    console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}
let namaOperator = prompt("Masukkan Nama Operator:");
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):");

if (shiftKerja === "Malam") {
    alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000.");
} 
else {
    alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
// ===============================
// Latihan 1 (Matematika)
// ===============================

// Variabel gaji
let gajiPokok = 5000000; // contoh gaji pokok bulanan
let jamLembur = 10;      // jumlah jam lembur

// Upah lembur per jam (1.5 x gaji pokok / 173)
let upahLemburPerJam = (gajiPokok / 173) * 1.5;

// Hitung total gaji lembur
let totalGaji = gajiPokok + (jamLembur * upahLemburPerJam);

console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Jam Lembur: " + jamLembur + " Jam");
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Gaji dengan Lembur: Rp " + totalGaji.toFixed(2));


// ===============================
// Latihan 2 (Logika Switch)
// ===============================

// Input kode shift
let kodeShift = prompt("Masukkan kode shift (1 / 2 / 3):");

// Variabel untuk menyimpan nama shift
let namaShift;

// Logika switch
switch (kodeShift) {

    case "1":
        namaShift = "Pagi";
        break;

    case "2":
        namaShift = "Siang";
        break;

    case "3":
        namaShift = "Malam";
        break;

    default:
        namaShift = "Shift Tidak Valid";
}

// Tampilkan hasil
console.log("Kode Shift: " + kodeShift);
console.log("Nama Shift: " + namaShift);

alert("Shift Anda: " + namaShift);
// ===============================
// Latihan 3 (Biaya Produksi per Unit)
// ===============================

// Input biaya produksi
let biayaBahanBaku = 5000000;      // contoh biaya bahan baku
let biayaTenagaKerja = 3000000;    // biaya tenaga kerja
let biayaOverhead = 2000000;       // biaya overhead pabrik
let jumlahProduksi = 120;          // jumlah unit yang diproduksi

// Menghitung total biaya per unit
let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

// Menampilkan hasil perhitungan
console.log("Biaya Bahan Baku: Rp " + biayaBahanBaku);
console.log("Biaya Tenaga Kerja: Rp " + biayaTenagaKerja);
console.log("Biaya Overhead: Rp " + biayaOverhead);
console.log("Jumlah Produksi: " + jumlahProduksi + " unit");

console.log("Biaya Produksi per Unit: Rp " + totalPerUnit.toFixed(2));

// Logika Efisiensi Produksi
if (jumlahProduksi < 100) {
    console.log("Status Produksi: Biaya Tinggi (Ekonomi Skala Kecil)");
} 
else {
    console.log("Status Produksi: Biaya Efisien");
}