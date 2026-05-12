import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >

        {/* HEADER */}
        <div className="offcanvas-header">

          <div className="w-100 text-center">

            {/* LOGO */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR280cqg0aQrVSBwC28MJwueYgFLNPieIuaJw&s"
              alt="Logo"
              className="img-fluid rounded-circle mb-3"
              style={{
                width: '90px',
                height: '90px',
                objectFit: 'cover',
                border: '3px solid white',
              }}
            />

            {/* TITLE */}
            <h5
              className="fw-bold"
              id="mobileSidebarLabel"
            >
              Smart Factory
            </h5>

          </div>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>

        </div>

        {/* BODY */}
        <div className="offcanvas-body">

          <ul className="nav flex-column">

            {/* DASHBOARD */}
            <li className="nav-item mb-3">
              <Link
                to="/"
                className="nav-link text-white"
                data-bs-dismiss="offcanvas"
              >
                Dashboard
              </Link>
            </li>

            {/* INVENTORI */}
            <li className="nav-item mb-3">
              <Link
                to="/inventori"
                className="nav-link text-white"
                data-bs-dismiss="offcanvas"
              >
                Inventori
              </Link>
            </li>

            {/* LAPORAN */}
            <li className="nav-item mb-3">
              <Link
                to="/laporan-kualitas"
                className="nav-link text-white"
                data-bs-dismiss="offcanvas"
              >
                Laporan
              </Link>
            </li>

            {/* MONITORING */}
            <li className="nav-item">
              <Link
                to="/monitoring"
                className="nav-link text-white"
                data-bs-dismiss="offcanvas"
              >
                Monitoring
              </Link>
            </li>

          </ul>

        </div>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}
      <div className="bg-dark text-white p-3 vh-100 d-none d-md-block">

        {/* LOGO */}
        <div className="text-center mb-4">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR280cqg0aQrVSBwC28MJwueYgFLNPieIuaJw&s"
            alt="Logo"
            className="img-fluid rounded-circle mb-3"
            style={{
              width: '90px',
              height: '90px',
              objectFit: 'cover',
              border: '3px solid white',
            }}
          />

          <h4 className="fw-bold">
            Bunda Rahma Factory
          </h4>

        </div>

        {/* MENU */}
        <ul className="nav flex-column">

          {/* DASHBOARD */}
          <li className="nav-item mb-3">
            <Link
              to="/"
              className="nav-link text-white"
            >
              Dashboard
            </Link>
          </li>

          {/* INVENTORI */}
          <li className="nav-item mb-3">
            <Link
              to="/inventori"
              className="nav-link text-white"
            >
              Inventori
            </Link>
          </li>

          {/* LAPORAN */}
          <li className="nav-item mb-3">
            <Link
              to="/laporan-kualitas"
              className="nav-link text-white"
            >
              Laporan
            </Link>
          </li>

          {/* MONITORING */}
          <li className="nav-item">
            <Link
              to="/monitoring"
              className="nav-link text-white"
            >
              Monitoring
            </Link>
          </li>

        </ul>

      </div>

    </>
  );
}

export default Sidebar;