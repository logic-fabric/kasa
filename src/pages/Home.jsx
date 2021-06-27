import React from "react";
import PropTypes from "prop-types";

import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import "../css/Home.css";
import { PropertyAdvertisement } from "../data/propertyAdvertisement";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner
          imgSource="../assets/coast-landscape.png"
          title="Chez vous, partout et ailleurs"
        />
        <Gallery advertisements={this.props.advertisements} />
      </div>
    );
  }
}

Home.propTypes = {
  advertisements: PropTypes.arrayOf(
    PropTypes.instanceOf(PropertyAdvertisement)
  ).isRequired,
};

export default Home;
