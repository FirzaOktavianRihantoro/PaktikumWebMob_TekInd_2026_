import { useState } from "react"
import { useNavigate } from "react-router-dom"

function InputLaporan({ tambahLaporan }) {
  const navigate = useNavigate()

  const [tanggal, setTanggal] = useState("")
  const [mesin, setMesin] = useState("")
  const [shift, setShift] = useState("Pagi")
  const [produk, setProduk] = useState("")
  const [jumlahProduksi, setJumlahProduksi] =
    useState("")
  const [jumlahReject, setJumlahReject] =
    useState("")
  const [status, setStatus] = useState("")
  const [keterangan, setKeterangan] =
    useState("")

  const netto =
    Number(jumlahProduksi || 0) -
    Number(jumlahReject || 0)

  const yieldProduksi =
    Number(jumlahProduksi) > 0
      ? (
          (netto /
            Number(jumlahProduksi)) *
          100
        ).toFixed(2)
      : "0.00"


  const isRejectInvalid =
    Number(jumlahReject) >
    Number(jumlahProduksi)

  const isValid =
    tanggal &&
    mesin &&
    produk &&
    jumlahProduksi &&
    jumlahReject &&
    !isRejectInvalid


  const handleSubmit = (e) => {
    e.preventDefault()

    const dataBaru = {
      id: Date.now(),

      tanggal,
      mesin,
      shift,
      produk,

      jumlahProduksi:
        Number(jumlahProduksi),

      jumlahReject:
        Number(jumlahReject),

      netto,

      yieldProduksi,

      status,
      keterangan,
    }

    tambahLaporan(dataBaru)

    alert("Data berhasil disimpan!")

    navigate("/riwayat")
  }

  return (
    <div>
      <h2 className="mb-4">
        Input Laporan Produksi
      </h2>

      <form onSubmit={handleSubmit}>
        {/* MESIN */}
        <div className="mb-3">
          <label className="form-label">
            Nama Mesin
          </label>

          <input
            type="text"
            className="form-control"
            value={mesin}
            onChange={(e) =>
              setMesin(e.target.value)
            }
          />
        </div>

        {/* TANGGAL */}
        <div className="mb-3">
          <label className="form-label">
            Tanggal Produksi
          </label>

          <input
            type="date"
            className="form-control"
            value={tanggal}
            onChange={(e) =>
              setTanggal(e.target.value)
            }
          />
        </div>

        {/* PRODUK */}
        <div className="mb-3">
          <label className="form-label">
            Nama Produk
          </label>

          <input
            type="text"
            className="form-control"
            value={produk}
            onChange={(e) =>
              setProduk(e.target.value)
            }
          />
        </div>

        {/* PRODUKSI */}
        <div className="mb-3">
          <label className="form-label">
            Jumlah Produksi
          </label>

          <input
            type="number"
            className="form-control"
            value={jumlahProduksi}
            onChange={(e) =>
              setJumlahProduksi(
                e.target.value
              )
            }
          />
        </div>

        {/* REJECT */}
        <div className="mb-3">
          <label className="form-label">
            Jumlah Reject
          </label>

          <input
            type="number"
            className={`form-control ${
              isRejectInvalid
                ? "is-invalid"
                : ""
            }`}
            value={jumlahReject}
            onChange={(e) =>
              setJumlahReject(
                e.target.value
              )
            }
          />

          {isRejectInvalid && (
            <div className="invalid-feedback">
              Reject tidak boleh lebih
              besar dari produksi
            </div>
          )}
        </div>

        {/* NETTO */}
        <div className="mb-3">
          <label className="form-label">
            Netto
          </label>

          <input
            type="number"
            className="form-control"
            value={netto}
            readOnly
          />
        </div>

        {/* YIELD */}
        <div className="mb-3">
          <label className="form-label">
            Yield
          </label>

          <input
            type="text"
            className="form-control"
            value={`${yieldProduksi}%`}
            readOnly
          />
        </div>

        {/* STATUS */}
        <div className="mb-3">
          <label className="form-label">
            Status
          </label>

          <input
            type="text"
            className="form-control"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          />
        </div>

        {/* KETERANGAN */}
        <div className="mb-3">
          <label className="form-label">
            Keterangan
          </label>

          <textarea
            className="form-control"
            value={keterangan}
            onChange={(e) =>
              setKeterangan(
                e.target.value
              )
            }
          ></textarea>
        </div>

        {/* SHIFT */}
        <div className="mb-3">
          <label className="form-label">
            Shift
          </label>

          <select
            className="form-select"
            value={shift}
            onChange={(e) =>
              setShift(e.target.value)
            }
          >
            <option>Pagi</option>
            <option>Siang</option>
            <option>Malam</option>
          </select>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isValid}
        >
          Simpan Data
        </button>
      </form>
    </div>
  )
}

export default InputLaporan