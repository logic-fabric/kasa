import React from "react";
import PropTypes from "prop-types";

import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPictureIndex: 0,
    };
    this.updateCurrentPicture = this.updateCurrentPicture.bind(this);
  }

  updateCurrentPicture(newIndex) {
    this.setState({
      currentPictureIndex: newIndex,
    });
  }

  updatePicture(nextClicked = true) {
    const picturesBox = document.querySelector(".carousel__pictures-box");

    const current = this.state.currentPictureIndex;
    const quantity = this.props.pictures.length;
    const nextPictureIndex = nextClicked
      ? (current + 1) % quantity
      : (current + quantity - 1) % quantity;
    this.updateCurrentPicture(nextPictureIndex);

    const translateValue = -100 * nextPictureIndex;
    picturesBox.style["transform"] = `translateX(${translateValue}%)`;
  }

  render() {
    const pictures = this.props.pictures;

    return (
      <div className="carousel">
        <div className="carousel__pictures-box">
          {pictures.map((picture, index) => (
            <img
              className="carousel__picture"
              src={picture}
              alt=""
              key={`picture-${index}`}
            />
          ))}
        </div>
        <div className="carousel__filter"></div>
        <nav className="carousel__nav">
          <i
            className="fas fa-chevron-left"
            onClick={() => this.updatePicture(false)}
          ></i>
          <i
            className="fas fa-chevron-right"
            onClick={() => this.updatePicture(true)}
          ></i>
        </nav>
        <div className="carousel__counter">
          {this.state.currentPictureIndex + 1}/{pictures.length}
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel;