import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailInventori() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h1>Detail Inventori</h1>

      <p>
        Menampilkan detail item dengan ID:
        <strong> {id}</strong>
      </p>

      <Link to="/inventori" className="btn btn-secondary">
        Kembali ke Inventori
      </Link>
    </div>
  );
}

export default DetailInventori;