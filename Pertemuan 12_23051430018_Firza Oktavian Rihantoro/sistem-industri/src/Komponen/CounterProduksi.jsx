import React, { useState } from 'react';

function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);
  const [status, setStatus] = useState('NORMAL'); // <-- TAMBAHAN

  const tambahProduksi = () => {
    if (status !== 'EMERGENCY') {
      setJumlah(jumlah + 1);
    }
  };

  const reset = () => {
    setJumlah(0);
    setStatus('NORMAL');
  };

  const emergencyStop = () => {
    setStatus('EMERGENCY');
  };

  return (
    <div className="text-center p-4 border rounded bg-light">
      <h3>Simulasi Hitung Produk</h3>
      <h1 className="display-4">{jumlah}</h1>
      <p>Target: {target} Unit</p>

      {/* 🔴 Emergency message */}
      {status === 'EMERGENCY' ? (
        <div className="alert alert-danger">
          ⚠️ EMERGENCY STOP AKTIF!
        </div>
      ) : jumlah >= target ? (
        <div className="alert alert-success d-inline-block">
          Target Tercapai!
        </div>
      ) : (
        <div className="alert alert-secondary d-inline-block">
          Produksi Berjalan...
        </div>
      )}

      <div className="mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={tambahProduksi}
          disabled={status === 'EMERGENCY'} // <-- DISABLE
        >
          +1 Unit (Sensor OK)
        </button>

        <button
          className="btn btn-danger me-2"
          onClick={reset}
        >
          Reset Shift
        </button>

        {/* 🔴 Emergency button */}
        <button
          className="btn btn-warning"
          onClick={emergencyStop}
        >
          Emergency Stop
        </button>
      </div>
    </div>
  );
}

export default CounterProduksi;