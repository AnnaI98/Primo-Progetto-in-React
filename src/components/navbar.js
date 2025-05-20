import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar({ toggleConcerts }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
      <div className="container-fluid">
        {/* Branding e menu a sinistra */}
        <div className="d-flex align-items-center">
          <span className="navbar-brand mb-0 h1 display-6 me-4">TicketVibes</span>

          {/* Menu a tendina "Esplora gli eventi" */}
          <div className="dropdown">
            <button
              className="btn bg-dark text-white dropdown-toggle border-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Esplora gli eventi
            </button>
            <ul className="dropdown-menu dropdown-menu-dark bg-dark border-0" aria-labelledby="dropdownMenuButton">
              <li>
                <a
                  className="dropdown-item text-white"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleConcerts();
                  }}
                >
                  Concerti
                </a>
              </li>
              <li><Link className="dropdown-item text-white" to="/eventi/festival">Festival</Link></li>
              <li><Link className="dropdown-item text-white" to="/eventi/teatro">Teatro</Link></li>
              <li><Link className="dropdown-item text-white" to="/eventi/sport">Sport</Link></li>
            </ul>
          </div>
        </div>

        {/* Barra di ricerca al centro */}
        <div className="d-flex justify-content-center flex-grow-1">
          <form className="d-flex w-25" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cerca concerti"
              aria-label="Search"
            />
          </form>
        </div>

        {/* Icona utente a destra */}
        <div className="me-3">
          <Link to="/login" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
