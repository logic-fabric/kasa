import React from "react";

import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Gallery advertisements={this.props.advertisements} />
      </div>
    );
  }
}

export default Home;
