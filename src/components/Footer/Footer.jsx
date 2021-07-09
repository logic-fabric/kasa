import React from "react";

import "./Footer.css";
import logoWhite from "../../logo-white.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logoWhite} alt="Kasa" />
        <p>&copy; 2021 Kasa. Tous droits réservés</p>
      </footer>
    );
  }
}

export default Footer;
