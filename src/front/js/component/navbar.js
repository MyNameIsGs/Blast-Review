import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { logOut } = useAuth();
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"><img src="https://i.ibb.co/3Fmr1HB/Blast-Review-Logo.png" className="logoBlast"></img></span>
        </Link>
        <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-sm btn-outline-secondary" type="submit">Search</button>
      </form>
        <div className="ml-auto">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {store.user ? (
              <>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    href="/private"
                  >
                    {store.user.username}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      logOut();
                    }}
                  >
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <>
              
                  <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/rateInfo">
                    How You Should Rate
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/login">
                    Log in
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/signup">
                    Sign up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
