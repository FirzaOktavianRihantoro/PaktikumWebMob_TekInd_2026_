import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState('Jakarta');

  // Timer
  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Update title berdasarkan kota
  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]);

  return (
    <div className="alert alert-info text-center">
      <h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>

      {/* Input kota */}
      <div className="mt-3">
        <p className="mb-1 fw-bold">Masukkan Kota:</p>
        <input
          type="text"
          className="form-control text-center"
          style={{ maxWidth: '300px', margin: '0 auto' }}
          placeholder="Masukkan nama kota"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
        />
      </div>
    </div>
  );
}

export default JamDigital;