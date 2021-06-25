import React from "react";

import Banner from "./Banner";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Gallery advertisements={this.props.advertisements} />
        <Footer />
      </div>
    );
  }
}

export default Home;
