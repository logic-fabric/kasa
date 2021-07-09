import React from "react";
import PropTypes from "prop-types";

import Thumbnail from "../Thumbnail/Thumbnail";
import "./Gallery.css";
import { PropertyAdvertisement } from "../../data/propertyAdvertisement";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {this.props.advertisements.map(({ id, cover, title, location }) => (
            <Thumbnail
              key={`thumbnail-${id}`}
              cover={cover}
              title={title}
              location={location}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Gallery.propTypes = {
  advertisements: PropTypes.arrayOf(PropTypes.instanceOf(PropertyAdvertisement))
    .isRequired,
};

export default Gallery;
