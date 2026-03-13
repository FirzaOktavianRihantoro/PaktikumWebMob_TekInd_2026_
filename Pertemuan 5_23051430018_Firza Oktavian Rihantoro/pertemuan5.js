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
// 1. FUNCTION Declaration
// Fungsi untuk menghitung konsumsi daya (P = V x I)
function hitungDaya(tegangan, arus) {
    let daya = tegangan * arus;
    return daya; // Mengembalikan hasil
}

// Pemanggilan Function
let teganganMesin = 220; // Volt
let arusMesin = 10;      // Ampere

let totalDaya = hitungDaya(teganganMesin, arusMesin);

console.log("Daya Mesin: " + totalDaya + " Watt");
// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali

console.log("Jumlah Cacat: " + daftarCacat.length);

// Looping (Perulangan) untuk menampilkan setiap cacat
console.log("--- Laporan Detail Cacat ---");

for (let i = 0; i < daftarCacat.length; i++) {
    console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);
}

// Menambahkan data baru ke array
daftarCacat.push("C-099");

console.log("Setelah penambahan: " + daftarCacat);
// 3. OBJECT
let mesinA = {
    id: "M-01",
    nama: "Injection Molding 50 Ton",
    merk: "Toshiba",
    tahunBeli: 2018,
    status: "Running",
    spesifikasi: {
        kecepatanMax: 200, // mm/s
        tekananMax: 150 // bar
    }
};

// Mengakses data object
console.log("Nama Mesin: " + mesinA.nama);
console.log("Status: " + mesinA.status);
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar");

// Mengubah data object (Simulasi mesin rusak)
mesinA.status = "Breakdown";

console.log("Status Baru: " + mesinA.status);
// Array berisi beberapa object
let gudangMaterial = [
    { kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang" },
    { kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg" },
    { kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter" }
];

console.log("--- Cek Stok Gudang ---");

// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item) {
    console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan);

    // Logika Re-order
    if (item.stok < 20) {
        console.log(" >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO.");
    }
});
// ===============================
// Latihan 1 (Function Lingkaran)
// ===============================

// Function untuk menghitung luas dan keliling lingkaran
function hitungLingkaran(jariJari) {

    let luas = Math.PI * jariJari * jariJari;
    let keliling = 2 * Math.PI * jariJari;

    return {
        luas: luas,
        keliling: keliling
    };
}

// Contoh pemanggilan function
let jariJariLingkaran = 7;

let hasilLingkaran = hitungLingkaran(jariJariLingkaran);

console.log("Jari-jari: " + jariJariLingkaran);
console.log("Luas Lingkaran: " + hasilLingkaran.luas.toFixed(2));
console.log("Keliling Lingkaran: " + hasilLingkaran.keliling.toFixed(2));
// ===============================
// Latihan 2 (Array Manipulation)
// ===============================

// Variabel untuk menghitung jumlah cacat C-001
let jumlahC001 = 0;

// Loop untuk mengecek setiap item array
for (let i = 0; i < daftarCacat.length; i++) {

    if (daftarCacat[i] === "C-001") {
        jumlahC001++;
    }

}

// Menampilkan hasil
console.log("Jumlah cacat C-001: " + jumlahC001);
// ===============================
// Proyek Mini - Sistem Antrian Job Shop
// ===============================

// a. Array of Objects berisi antrian pekerjaan mesin
let antrianMesin = [
    { idJob: "J01", namaProses: "Drilling", durasi: 30 },
    { idJob: "J02", namaProses: "Milling", durasi: 45 },
    { idJob: "J03", namaProses: "Grinding", durasi: 25 }
];

// b. Function untuk memproses antrian
function prosesAntrian(antrian) {

    console.log("--- Memulai Proses Antrian Mesin ---");

    // c. Menampilkan setiap job dalam antrian
    for (let i = 0; i < antrian.length; i++) {

        console.log(
            "Memproses Job " +
            antrian[i].idJob +
            " - " +
            antrian[i].namaProses +
            " selama " +
            antrian[i].durasi +
            " menit"
        );

    }
}

// Memanggil function pertama kali
prosesAntrian(antrianMesin);


// d. Menambahkan 1 job baru ke antrian
antrianMesin.push({
    idJob: "J04",
    namaProses: "Cutting",
    durasi: 40
});

console.log("--- Setelah Penambahan Job Baru ---");

// Memanggil function lagi setelah penambahan job
prosesAntrian(antrianMesin);