import React from "react";

import logo from "../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} className="App-logo" alt="Kasa" />

        <ul>
          <li>Accueil</li>
          <li>&Agrave; propos</li>
        </ul>
      </header>
    );
  }
}

export default Header;
