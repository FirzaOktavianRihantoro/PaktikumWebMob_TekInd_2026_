const btnLoad = document.getElementById('btnLoad');
const btnTambah = document.getElementById('btnTambah');
const btnInsiden = document.getElementById('btnInsiden');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// Endpoint API
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const API_INSIDEN = 'https://jsonplaceholder.typicode.com/posts';

// ===================== LOAD KARYAWAN =====================
btnLoad.addEventListener('click', function () {

    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function (dataKaryawan) {
            console.log(dataKaryawan);
            renderData(dataKaryawan);
        })
        .catch(function (error) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

// ===================== POST DATA =====================
btnTambah.addEventListener('click', function () {

    const dataBaru = {
        name: "Robert Dummy",
        email: "robert@email.com",
        address: { city: "Solo" },
        company: { name: "Perusahaan Dummy" }
    };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBaru)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response POST:", data);
            alert("Data berhasil dikirim!");
        })
        .catch(error => console.error(error));
});

// ===================== LOAD INSIDEN =====================
btnInsiden.addEventListener('click', function () {

    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_INSIDEN)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data insiden');
            }
            return response.json();
        })
        .then(function (dataInsiden) {

            console.log(dataInsiden);

            const dataTerbaru = dataInsiden.slice(0, 10);
            renderInsiden(dataTerbaru);
        })
        .catch(function (error) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });

});

// ===================== RENDER KARYAWAN =====================
function renderData(data) {

    const hasilFilter = data.filter(function (karyawan) {
        return karyawan.address.city.toLowerCase().includes('s');
    });

    hasilFilter.forEach(function (karyawan) {

        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>

                    <p class="card-text text-muted">
                        Email: ${karyawan.email}
                    </p>

                    <p class="card-text">
                        Perusahaan: ${karyawan.company.name}
                    </p>

                    <p class="card-text">
                        <small>Kota: ${karyawan.address.city}</small>
                    </p>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// ===================== RENDER INSIDEN (UPGRADED) =====================
function renderInsiden(data) {

    data.forEach(function (insiden) {

        const statusList = ["Open", "Process", "Done"];
        const status = statusList[Math.floor(Math.random() * statusList.length)];

        let badgeColor = "secondary";
        if (status === "Open") badgeColor = "danger";
        if (status === "Process") badgeColor = "warning";
        if (status === "Done") badgeColor = "success";

        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body">

                    <span class="badge bg-${badgeColor} mb-2">${status}</span>

                    <h6 class="text-muted">Tiket ID: #${insiden.id}</h6>

                    <h5 class="card-title">${insiden.title}</h5>

                    <p class="card-text">
                        ${insiden.body.substring(0, 80)}...
                    </p>

                    <button class="btn btn-sm btn-warning btn-tindak">
                        Tindak Lanjut
                    </button>
                </div>
            </div>
        `;

        col.querySelector('.btn-tindak').addEventListener('click', function () {

            document.getElementById('isiModal').innerHTML = `
                <p><strong>ID Tiket:</strong> #${insiden.id}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Judul:</strong> ${insiden.title}</p>
                <p><strong>Deskripsi:</strong> ${insiden.body}</p>
                <hr>
                <p class="text-success">
                    Tiket sedang diproses oleh Tim Maintenance
                </p>
            `;

            const modal = new bootstrap.Modal(document.getElementById('modalInsiden'));
            modal.show();
        });

        container.appendChild(col);
    });
}