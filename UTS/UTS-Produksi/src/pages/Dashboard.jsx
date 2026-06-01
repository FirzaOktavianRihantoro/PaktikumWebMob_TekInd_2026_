function Dashboard({ laporan }) {
  const totalProduksi = laporan.reduce(
    (total, item) =>
      total +
      Number(item.jumlahProduksi),
    0
  )

  const totalReject = laporan.reduce(
    (total, item) =>
      total +
      Number(item.jumlahReject),
    0
  )


  const produkSelesai =
    totalProduksi - totalReject


  const avgYield =
    laporan.length > 0
      ? laporan.reduce(
          (total, item) =>
            total +
            parseFloat(
              item.yieldProduksi || 0
            ),
          0
        ) / laporan.length
      : 0

  const yieldProduksi =
    totalProduksi > 0
      ? (
          (produkSelesai /
            totalProduksi) *
          100
        ).toFixed(2)
      : 0

  return (
    <div>
      <h2 className="mb-4">
        Dashboard Produksi
      </h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-bg-primary">
            <div className="card-body">
              <h5>
                Total Produksi
              </h5>

              <h2>
                {totalProduksi}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-success">
            <div className="card-body">
              <h5>
                Produk Selesai
              </h5>

              <h2>
                {produkSelesai}
              </h2>
            </div>
          </div>
        </div>

        {/* CHECKPOINT 4 */}
        <div className="col-md-4">
          <div className="card text-bg-danger">
            <div className="card-body">
              <h5>
                Rata-rata Yield
              </h5>

              <h2
                style={{
                  color:
                    avgYield < 85
                      ? "#B91C1C"
                      : "#15803D",
                }}
              >
                {avgYield.toFixed(2)}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard