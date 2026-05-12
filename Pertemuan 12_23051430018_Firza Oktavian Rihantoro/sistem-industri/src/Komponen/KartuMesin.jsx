import React, { useState } from 'react';

function KartuMesin({ nama, status, produksi = 0 }) {

  // State lokal untuk status (bisa diubah dari dropdown)
  const [statusLokal, setStatusLokal] = useState(status);

  let badgeColor = 'bg-secondary';
  if (statusLokal === 'Running') badgeColor = 'bg-success';
  if (statusLokal === 'Stop') badgeColor = 'bg-danger';
  if (statusLokal === 'Maintenance') badgeColor = 'bg-warning';

  return (
    <div className="card bg-dark text-light shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{nama}</h5>

        {/* Status pakai state lokal */}
        <span className={`badge ${badgeColor}`}>{statusLokal}</span>

        <hr />
        <p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>

        {/* Form input (dropdown) */}
        <div className="mt-2">
          <select
            className="form-select form-select-sm"
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default KartuMesin;