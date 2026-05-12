import React from 'react';

import Header from '../Komponen/Header';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';
import TabelProduksi from '../Komponen/TabelProduksi';

function Dashboard() {
  return (
    <div>

      {/* HEADER */}
      <Header />

      {/* GRAFIK */}
      <div className="row">

        {/* GRAFIK PRODUKSI */}
        <div className="col-12 col-lg-8 mb-4">

          <div className="card shadow-sm h-100">
            <div className="card-body">

              <GrafikProduksi />

            </div>
          </div>

        </div>

        {/* GRAFIK DONAT */}
        <div className="col-12 col-lg-4 mb-4">

          <div className="card shadow-sm h-100">
            <div className="card-body">

              <h5 className="mb-3 text-center">
                Proporsi Cacat
              </h5>

              <GrafikDonat />

            </div>
          </div>

        </div>

      </div>

      {/* TABEL */}
      <TabelProduksi />

    </div>
  );
}

export default Dashboard;