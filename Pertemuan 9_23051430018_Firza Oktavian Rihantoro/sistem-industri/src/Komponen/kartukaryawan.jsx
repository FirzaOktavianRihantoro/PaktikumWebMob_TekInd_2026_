function KartuKaryawan({ nama, jabatan, bagian }) {
  return (
    <div className="card bg-dark text-light shadow-sm p-3 mb-3">
      <div className="card-body">
        <h5>{nama}</h5>
        <p>Jabatan: <strong>{jabatan}</strong></p>
        <p>Bagian: <strong>{bagian}</strong></p>
      </div>
    </div>
  );
}

export default KartuKaryawan;