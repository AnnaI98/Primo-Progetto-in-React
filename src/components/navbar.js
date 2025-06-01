import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar({ toggleConcerts }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
        <div className="container-fluid">

          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="navbar-brand mb-0 h1 display-6 me-4"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              TicketVibes
            </Link>

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
              <ul
                className="dropdown-menu dropdown-menu-dark bg-dark border-0"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link className="dropdown-item text-white" to="/concerti" onClick={toggleConcerts}>
                    Concerti
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/eventi/festival">
                    Festival
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/eventi/teatro">
                    Teatro
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/eventi/musei">
                    Musei
                  </Link>
                </li>
              </ul>
            </div>
          </div>

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

          <div className="d-flex align-items-center gap-3 me-3">
            
            <button
              type="button"
              className="btn btn-dark text-white border-0"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>

            
            <div className="dropdown">
              <button
                className="btn bg-dark text-white dropdown-toggle border-0"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faGlobe} size="lg" />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark bg-dark border-0"
                aria-labelledby="languageDropdown"
              >
                <li>
                  <button className="dropdown-item text-white" onClick={() => alert("Lingua cambiata a Italiano")}>
                    Italiano
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-white" onClick={() => alert("Language changed to English")}>
                    English
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-white" onClick={() => alert("Langue changée en Français")}>
                    Français
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Accedi al tuo account</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Chiudi"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => { e.preventDefault(); alert("Login inviato!"); }}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Accedi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
