import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import Dashboard from "./pages/Dashboard"
import InputLaporan from "./pages/InputLaporan"
import RiwayatData from "./pages/RiwayatData"

// CHECKPOINT 3
const STORAGE_KEY =
  "DATA_LAPORAN_PRODUKSI"

function App() {
  // CHECKPOINT 3
  // langsung ambil data dari localStorage
  // saat state pertama dibuat
  const [laporan, setLaporan] =
    useState(() => {
      const dataStorage =
        localStorage.getItem(
          STORAGE_KEY
        )

      return dataStorage
        ? JSON.parse(dataStorage)
        : []
    })

  // CHECKPOINT 3
  // simpan data ke localStorage
  // setiap state berubah
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(laporan)
    )
  }, [laporan])

  // CHECKPOINT 2
  // tambah data baru
  const tambahLaporan = (
    dataBaru
  ) => {
    setLaporan((prev) => [
      dataBaru,
      ...prev,
    ])
  }

  // CHECKPOINT 2
  // hapus satu data
  const hapusLaporan = (id) => {
    const konfirmasi = confirm(
      "Yakin ingin menghapus data?"
    )

    if (konfirmasi) {
      const dataBaru =
        laporan.filter(
          (item) =>
            item.id !== id
        )

      setLaporan(dataBaru)
    }
  }

  // CHECKPOINT 3
  // hapus semua data
  const hapusSemua = () => {
    const konfirmasi = confirm(
      "Hapus semua data?"
    )

    if (konfirmasi) {
      setLaporan([])

      localStorage.removeItem(
        STORAGE_KEY
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
          >
            Sistem Produksi
          </Link>

          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link"
              to="/"
            >
              Dashboard
            </Link>

            <Link
              className="nav-link"
              to="/input"
            >
              Input Laporan
            </Link>

            <Link
              className="nav-link"
              to="/riwayat"
            >
              Riwayat Data
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                laporan={laporan}
              />
            }
          />

          <Route
            path="/input"
            element={
              <InputLaporan
                tambahLaporan={
                  tambahLaporan
                }
              />
            }
          />

          <Route
            path="/riwayat"
            element={
              <RiwayatData
                laporan={laporan}
                hapusLaporan={
                  hapusLaporan
                }
                hapusSemua={
                  hapusSemua
                }
              />
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App