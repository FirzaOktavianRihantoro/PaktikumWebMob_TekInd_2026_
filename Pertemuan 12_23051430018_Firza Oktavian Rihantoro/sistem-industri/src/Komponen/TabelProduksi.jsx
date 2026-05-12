import React from 'react';

function TabelProduksi() {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="mb-3">Data Produksi</h5>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Mesin</th>
                <th>Status</th>
                <th>Output</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>CNC-01</td>
                <td>Running</td>
                <td>320</td>
              </tr>

              <tr>
                <td>CNC-02</td>
                <td>Running</td>
                <td>310</td>
              </tr>

              <tr>
                <td>Press-01</td>
                <td>Stop</td>
                <td>150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabelProduksi;