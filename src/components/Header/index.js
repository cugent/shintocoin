import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand">
          Shinto Coin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home <span className="sr-only" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mine" className="nav-link">
                Mine Coins
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/buy" className="nav-link" tabIndex="-1" aria-disabled="false">
                Buy Coins
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sell" className="nav-link" tabIndex="-1" aria-disabled="false">
                Sell Coins
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ledger" className="nav-link" tabIndex="-1" aria-disabled="false">
                Browse Ledger
              </Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
