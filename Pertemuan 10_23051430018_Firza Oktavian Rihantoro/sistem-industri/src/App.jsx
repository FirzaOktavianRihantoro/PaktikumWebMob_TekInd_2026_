import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KalkulatorOEE from './Komponen/KalkulatorOEE'; // <-- TAMBAHAN

function App() {
  return (
    <div className="container mt-4 bg-dark p-4 rounded">

      {/* ================= JAM DIGITAL ================= */}
      <JamDigital />

      {/* ================= MESIN ================= */}
      <h1 className="text-center mb-4 text-light">
        Monitoring Lini Produksi A
      </h1>

      <div className="row">
        <div className="col-md-4">
          <KartuMesin
            nama="CNC-Turning-01"
            status="Running"
            produksi={150}
          />
        </div>

        <div className="col-md-4">
          <KartuMesin
            nama="CNC-Milling-02"
            status="Maintenance"
          />
        </div>

        <div className="col-md-4">
          <KartuMesin
            nama="Press-Hydraulic-69"
            status="Stop"
            produksi={85}
          />
        </div>
      </div>

      {/* ================= KARYAWAN ================= */}
      <h2 className="text-center text-light mt-5">
        Data Karyawan
      </h2>

      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan 
            nama="Mas Jacobi"
            jabatan="Manager"
            bagian="Produksi"
          />
        </div>

        <div className="col-md-4">
          <KartuKaryawan 
            nama="Mas Amba"
            jabatan="Operator"
            bagian="Mesin CNC"
          />
        </div>

        <div className="col-md-4">
          <KartuKaryawan 
            nama="Bunda Rahma"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>
      </div>

      {/* ================= COUNTER PRODUKSI ================= */}
      <h2 className="text-center text-light mt-5">
        Simulasi Produksi
      </h2>

      <div className="row">
        <div className="col-md-12">
          <CounterProduksi />
        </div>
      </div>

      {/* ================= KALKULATOR OEE ================= */}
      <h2 className="text-center text-light mt-5">
        Kalkulator OEE
      </h2>

      <div className="row">
        <div className="col-md-12">
          <KalkulatorOEE />
        </div>
      </div>

    </div>
  );
}

export default App;