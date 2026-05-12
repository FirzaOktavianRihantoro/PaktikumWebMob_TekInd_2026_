import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Daftar nama bahan
  const namaBahan = [
    "Besi Panjang Pangandaran",
    "Aluminium Plate Khas Brebes",
    "Baja Ringan Balikpapan",
    "Pipa Stainless Panjang Ngawi",
    "Kawat Tembaga Wonogiri"
  ];

  // Fetch Data saat komponen mount
  useEffect(() => {

    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {

        // Ambil hanya 5 data pertama untuk contoh
        setProducts(data.slice(0, 5));

        setLoading(false);
      })
      .catch(err => {
        console.log(err);

        setLoading(false);
      });

  }, []);

  return (
    <div className="container mt-4">

      <h1 className="text-dark fw-bold">
  Data Inventori Bahan Baku
</h1>

      <Link
        to="/"
        className="btn btn-secondary mb-3"
      >
        Kembali ke Dashboard
      </Link>

      {/* Loading State */}
      {loading && <p>Memuat data...</p>}

      <table className="table table-striped">

        <thead>
          <tr>
            <th>ID Item</th>
            <th>Nama Bahan</th>
            <th>Status Supplier</th>
          </tr>
        </thead>

        <tbody>

          {products.map((item, index) => (
            <tr key={item.id}>

              <td>{item.id}</td>

              {/* Nama bahan jadi link */}
              <td>
                <Link to={`/inventori/${item.id}`}>
                  {namaBahan[index]}
                </Link>
              </td>

              <td>
                <span className="badge bg-success">
                  Available
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Inventori;