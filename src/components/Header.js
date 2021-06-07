import React from "react";

import "../css/Header.css";
import logo from "../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Kasa" />

        <nav className="main-nav">
          <ul>
            <li>Accueil</li>
            <li>&Agrave; propos</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
