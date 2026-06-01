function RiwayatData({
  laporan,
  hapusLaporan,
  hapusSemua,
}) {
  return (
    <div>
      <h2 className="mb-4">
        Riwayat Data Produksi
      </h2>

      <div className="mb-3">
        <button
          className="btn btn-danger"
          onClick={hapusSemua}
        >
          Hapus Semua
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Mesin</th>
              <th>Shift</th>
              <th>Produk</th>
              <th>Total</th>
              <th>Reject</th>
              <th>Netto</th>
              <th>Yield</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {laporan.length === 0 ? (
              <tr>
                <td
                  colSpan="10"
                  className="text-center"
                >
                  Belum ada data
                </td>
              </tr>
            ) : (
              laporan.map((item, index) => (
                // PAKAI item.id
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.mesin}</td>
                  <td>{item.shift}</td>
                  <td>{item.produk}</td>
                  <td>{item.jumlahProduksi}</td>
                  <td>{item.jumlahReject}</td>
                  <td>{item.netto}</td>

                  {/* TAMBAH % */}
                  <td>
                    {item.yieldProduksi}%
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      
                      // PAKAI item.id
                      onClick={() =>
                        hapusLaporan(item.id)
                      }
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RiwayatData