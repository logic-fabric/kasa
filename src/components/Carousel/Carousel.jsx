import React from "react";
import PropTypes from "prop-types";

import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    const pictures = this.props.pictures;

    console.log("Carousel pictures =", pictures);

    return (
      <div className="carousel">
        <img className="carousel__picture" src="{pictures[0]}" alt="" />
        <div className="carousel__filter"></div>
        <nav className="carousel__nav">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-right"></i>
        </nav>
        <div className="carousel__counter">1/4</div>
      </div>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel;
