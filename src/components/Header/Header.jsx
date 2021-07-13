import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img className="header-logo" src={logo} alt="Kasa" />
        </Link>

        <nav className="main-nav">
          <ul>
            <li>
              <Link className="header-link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="header-link" to="/a-propos">
                &Agrave; propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
