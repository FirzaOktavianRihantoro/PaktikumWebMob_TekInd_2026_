import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas';

import Navbar from './Komponen/Navbar';
import Sidebar from './Komponen/Sidebar';

import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/iclix';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KalkulatorOEE from './Komponen/KalkulatorOEE';


// ================= HALAMAN MONITORING =================
function Monitoring() {
  return (
    <div className="container-fluid p-3 p-md-4">

      {/* JAM DIGITAL */}
      <JamDigital />

      {/* JUDUL */}
      <h1 className="text-dark fw-bold">
        Monitoring Lini Produksi A
      </h1>

      {/* DATA MESIN */}
      <div className="row">

        <div className="col-12 col-md-4 mb-3">
          <KartuMesin
            nama="CNC-Turning-01"
            status="Running"
            produksi={150}
          />
        </div>

        <div className="col-12 col-md-4 mb-3">
          <KartuMesin
            nama="CNC-Milling-02"
            status="Maintenance"
          />
        </div>

        <div className="col-12 col-md-4 mb-3">
          <KartuMesin
            nama="Press-Hydraulic-69"
            status="Stop"
            produksi={85}
          />
        </div>

      </div>

      {/* KARYAWAN */}
      <h2 className="text-center mt-5">
        Data Karyawan
      </h2>

      <div className="row">

        <div className="col-12 col-md-4 mb-3">
          <KartuKaryawan
            nama="Mas Jacobi"
            jabatan="Manager"
            bagian="Produksi"
          />
        </div>

        <div className="col-12 col-md-4 mb-3">
          <KartuKaryawan
            nama="Mas Amba"
            jabatan="Operator"
            bagian="Mesin CNC"
          />
        </div>

        <div className="col-12 col-md-4 mb-3">
          <KartuKaryawan
            nama="Bunda Rahma"
            jabatan="QC"
            bagian="Quality Control"
          />
        </div>

      </div>

      {/* COUNTER PRODUKSI */}
      <h2 className="text-center mt-5">
        Simulasi Produksi
      </h2>

      <div className="row">
        <div className="col-12">
          <CounterProduksi />
        </div>
      </div>

      {/* KALKULATOR OEE */}
      <h2 className="text-center mt-5">
        Kalkulator OEE
      </h2>

      <div className="row">
        <div className="col-12">
          <KalkulatorOEE />
        </div>
      </div>

    </div>
  );
}


// ================= APP =================
function App() {
  return (
    <div>

      {/* NAVBAR */}
      <Navbar />

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR DESKTOP */}
          <div className="d-none d-md-block col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>

          {/* MAIN CONTENT */}
          <div className="col-12 col-md-9 col-lg-10 p-3 p-md-4 bg-light min-vh-100">

            <Routes>

              {/* DASHBOARD */}
              <Route
                path="/"
                element={<Dashboard />}
              />

              {/* INVENTORI */}
              <Route
                path="/inventori"
                element={<Inventori />}
              />

              {/* DETAIL INVENTORI */}
              <Route
                path="/inventori/:id"
                element={<DetailInventori />}
              />

              {/* LAPORAN */}
              <Route
                path="/laporan-kualitas"
                element={<LaporanKualitas />}
              />

              {/* MONITORING */}
              <Route
                path="/monitoring"
                element={<Monitoring />}
              />

              {/* 404 */}
              <Route
                path="*"
                element={<NotFound />}
              />

            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;