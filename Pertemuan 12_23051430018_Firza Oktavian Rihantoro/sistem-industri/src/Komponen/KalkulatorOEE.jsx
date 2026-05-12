import React, { useState } from 'react';

function KalkulatorOEE() {
  const [planTime, setPlanTime] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [goodParts, setGoodParts] = useState(0);

  // Hitung OEE
  const availability = planTime > 0 ? runTime / planTime : 0;
  const performance = runTime > 0 ? totalParts / runTime : 0;
  const quality = totalParts > 0 ? goodParts / totalParts : 0;

  const oee = availability * performance * quality * 100;

  // Tentukan warna
  let warna = 'text-secondary';
  if (oee < 50) warna = 'text-danger';
  else if (oee > 85) warna = 'text-success';

  return (
    <div className="card p-4 mt-4">
      <h3 className="text-center">Kalkulator OEE</h3>

      <div className="row mt-3">
        <div className="col-md-6">
          <label>Plan Time</label>
          <input
            type="number"
            className="form-control"
            value={planTime}
            onChange={(e) => setPlanTime(Number(e.target.value))}
          />
        </div>

        <div className="col-md-6">
          <label>Run Time</label>
          <input
            type="number"
            className="form-control"
            value={runTime}
            onChange={(e) => setRunTime(Number(e.target.value))}
          />
        </div>

        <div className="col-md-6 mt-2">
          <label>Total Parts</label>
          <input
            type="number"
            className="form-control"
            value={totalParts}
            onChange={(e) => setTotalParts(Number(e.target.value))}
          />
        </div>

        <div className="col-md-6 mt-2">
          <label>Good Parts</label>
          <input
            type="number"
            className="form-control"
            value={goodParts}
            onChange={(e) => setGoodParts(Number(e.target.value))}
          />
        </div>
      </div>

      <hr />

      <h4 className={`text-center ${warna}`}>
        OEE: {oee.toFixed(2)}%
      </h4>
    </div>
  );
}

export default KalkulatorOEE;