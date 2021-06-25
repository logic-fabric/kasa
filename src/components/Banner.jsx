import React from "react";

import "../css/Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <div className="hero-banner">
        <img
          src={this.props.imgSource}
          alt="Un paysage sauvage de bord de mer"
        />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Banner;
