import React from "react";
import PropTypes from "prop-types";

import Thumbnail from "./Thumbnail";
import "../css/Gallery.css";
import { PropertyAdvertisement } from "../data/propertyAdvertisement";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {this.props.advertisements.map(({ id, title }) => (
            <Thumbnail key={`thumbnail-${id}`} title={title} />
          ))}
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {
  advertisements: PropTypes.arrayOf(
    PropTypes.instanceOf(PropertyAdvertisement)
  ).isRequired,
};

export default Gallery;
