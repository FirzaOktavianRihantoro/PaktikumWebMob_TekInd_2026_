// Seleksi elemen
const form = document.getElementById('form5S');
const tabelBody = document.getElementById('tabelBody');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', loadData);

// Event submit
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const auditor = document.getElementById('auditor').value;

  // Ambil checkbox
  const checklist = [
    document.getElementById('seiri').checked,
    document.getElementById('seiton').checked,
    document.getElementById('seiso').checked,
    document.getElementById('seiketsu').checked,
    document.getElementById('shitsuke').checked
  ];

  // Hitung skor
  let jumlahCek = checklist.filter(item => item === true).length;
  let skor = (jumlahCek / 5) * 100;

  // Buat data
  const data = {
    tanggal: new Date().toLocaleDateString(),
    auditor: auditor,
    skor: skor
  };

  // Simpan ke LocalStorage
  let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  dataLama.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));

  // Reset form
  form.reset();

  // Refresh tabel
  loadData();
});

// Fungsi load data
function loadData() {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  tabelBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.tanggal}</td>
      <td>${item.auditor}</td>
      <td>${item.skor}%</td>
    `;
    tabelBody.appendChild(row);
  });
}