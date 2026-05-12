import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {

  // Mock Data Cacat Produk
  const dataCacat = [
    {
      id: 1,
      nama: 'Retak Permukaan',
      jumlah: 12
    },
    {
      id: 2,
      nama: 'Warna Tidak Sesuai',
      jumlah: 7
    },
    {
      id: 3,
      nama: 'Ukuran Tidak Presisi',
      jumlah: 5
    },
    {
      id: 4,
      nama: 'Lubang Produksi',
      jumlah: 3
    }
  ];

  return (
    <div className="container mt-4">

      <h1 className="text-dark fw-bold">Laporan Kualitas Produksi</h1>

      <Link
        to="/"
        className="btn btn-secondary mb-3"
      >
        Kembali ke Dashboard
      </Link>

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Jenis Cacat</th>
            <th>Jumlah Temuan</th>
          </tr>
        </thead>

        <tbody>

          {dataCacat.map((item) => (
            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.nama}</td>

              <td>
                <span className="badge bg-danger">
                  {item.jumlah}
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LaporanKualitas;