import React from "react";

import "../css/Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div className="hero-banner">
        <img
          src="../assets/eric-muhr-landscape.jpeg"
          alt="Un paysage sauvage de bord de mer"
        />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
  }
}

export default Banner;
