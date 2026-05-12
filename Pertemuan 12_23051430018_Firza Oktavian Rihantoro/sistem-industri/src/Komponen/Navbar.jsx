import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      {/* TOMBOL SIDEBAR MOBILE */}
      <button
        className="btn btn-outline-light d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
      >
        ☰
      </button>

      {/* BRAND */}
      <Link
        className="navbar-brand ms-2"
        to="/"
      >
        Sistem Pabrik
      </Link>

      {/* MENU DESKTOP */}
      <div className="navbar-nav flex-row gap-3 d-none d-md-flex">

        <Link className="nav-link" to="/">
          Dashboard
        </Link>

        <Link className="nav-link" to="/inventori">
          Inventori
        </Link>

        <Link className="nav-link" to="/laporan-kualitas">
          Laporan Kualitas
        </Link>

        <Link className="nav-link" to="/monitoring">
          Monitoring
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;